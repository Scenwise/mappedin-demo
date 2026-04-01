import { ScatterplotLayer, TextLayer } from '@deck.gl/layers';

/** ScatterplotLayer with Gaussian radial falloff for heatmap-like glow. */
class GaussianScatterLayer extends ScatterplotLayer {
  getShaders() {
    const shaders = super.getShaders();
    return {
      ...shaders,
      inject: {
        'fs:DECKGL_FILTER_COLOR': `
          float dist = length(geometry.uv);
          float gauss = exp(-4.0 * dist * dist);
          color.a *= gauss;
        `,
      },
    };
  }
}

export type PointFeature = {
  type: 'Feature';
  geometry: { type: 'Point'; coordinates: [number, number] };
  properties?: Record<string, unknown>;
};

export type PointFeatureCollection = {
  type: 'FeatureCollection';
  features: PointFeature[];
};

/**
 * Creates a real-time heatmap layer using ScatterplotLayer + additive blending.
 * Gaussian radial falloff; overlaps accumulate for a heatmap-like glow.
 */
export function createScatterplotHeatmapLayer(
  data: PointFeatureCollection,
): GaussianScatterLayer {
  return new GaussianScatterLayer({
    id: 'ScatterplotHeatmap',
    data: data.features,
    getPosition: (d: PointFeature) => d.geometry.coordinates,
    getRadius: 3,
    radiusUnits: 'meters',
    getFillColor: [255, 140, 0, 40],
    filled: true,
    stroked: false,
    antialiasing: false,
    parameters: {
      depthWriteEnabled: false,
      blendColorOperation: 'add',
      blendColorSrcFactor: 'src-alpha',
      blendColorDstFactor: 'one',
      blendAlphaOperation: 'add',
      blendAlphaSrcFactor: 'one',
      blendAlphaDstFactor: 'one',
    },
    transitions: {
      getPosition: 300,
    },
  });
}

/**
 * Creates a heatmap layer from a flat Float64Array of [lng, lat, lng, lat, ...] pairs.
 * Avoids per-frame GeoJSON object allocation.
 */
export function createHeatmapLayerFromPositions(
  positions: Float64Array,
  count: number,
): GaussianScatterLayer {
  const data = Array.from({ length: count }, (_, i) => i);
  return new GaussianScatterLayer({
    id: 'ScatterplotHeatmap',
    data,
    getPosition: (_d: number, { index }: { index: number }) => [
      positions[index * 2],
      positions[index * 2 + 1],
    ],
    getRadius: 3,
    radiusUnits: 'meters',
    getFillColor: [255, 140, 0, 40],
    filled: true,
    stroked: false,
    antialiasing: false,
    parameters: {
      depthWriteEnabled: false,
      blendColorOperation: 'add',
      blendColorSrcFactor: 'src-alpha',
      blendColorDstFactor: 'one',
      blendAlphaOperation: 'add',
      blendAlphaSrcFactor: 'one',
      blendAlphaDstFactor: 'one',
    },
    transitions: {
      getPosition: 200,
    },
  });
}

/**
 * Creates a tracking dots layer from a flat Float64Array of [lng, lat, ...] pairs.
 * Solid opaque dots with normal blending for individual person tracking.
 * Optional colors: flat Uint8Array of [r, g, b, a, r, g, b, a, ...] per dot.
 */
export function createTrackingDotsLayer(
  positions: Float64Array,
  count: number,
  colors?: Uint8Array,
): ScatterplotLayer {
  const data = Array.from({ length: count }, (_, i) => i);
  return new ScatterplotLayer({
    id: 'TrackingDots',
    data,
    getPosition: (_d: number, { index }: { index: number }) => [
      positions[index * 2],
      positions[index * 2 + 1],
    ],
    getRadius: 1.5,
    radiusUnits: 'meters',
    getFillColor: colors
      ? (_d: number, { index }: { index: number }) => [
          colors[index * 4],
          colors[index * 4 + 1],
          colors[index * 4 + 2],
          colors[index * 4 + 3],
        ]
      : [59, 130, 246, 200],
    filled: true,
    stroked: true,
    getLineColor: [255, 255, 255, 255],
    getLineWidth: 0.5,
    lineWidthUnits: 'meters',
    antialiasing: true,
    updateTriggers: {
      getFillColor: colors,
    },
    transitions: {
      getPosition: 200,
    },
  });
}

/**
 * Creates a TextLayer that renders a job-title label below each tracking dot.
 * labels: string[] with one entry per person.
 * positionVersion: increment each frame to force position re-evaluation.
 */
export function createTrackingLabelsLayer(
  positions: Float64Array,
  labels: string[],
  positionVersion: number,
): TextLayer {
  const data = Array.from({ length: labels.length }, (_, i) => i);
  return new TextLayer({
    id: 'TrackingLabels',
    data,
    getPosition: (_d: number, { index }: { index: number }) => [
      positions[index * 2],
      positions[index * 2 + 1],
    ],
    getText: (_d: number, { index }: { index: number }) => labels[index],
    getSize: 11,
    getColor: [255, 255, 255, 230],
    getBackgroundColor: [0, 0, 0, 140],
    background: true,
    backgroundPadding: [2, 1, 2, 1],
    getPixelOffset: [0, 12],
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    billboard: true,
    updateTriggers: {
      getPosition: positionVersion,
    },
  });
}

export function calculateDistance(
  a: { latitude: number; longitude: number },
  b: { latitude: number; longitude: number },
): number {
  const R = 6371000;
  const lat1 = (a.latitude * Math.PI) / 180;
  const lat2 = (b.latitude * Math.PI) / 180;
  const deltaLat = ((b.latitude - a.latitude) * Math.PI) / 180;
  const deltaLon = ((b.longitude - a.longitude) * Math.PI) / 180;
  const x =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  return R * c;
}