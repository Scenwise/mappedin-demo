import { g as Ft, j as Vt, i as I, a1 as En, a2 as ve, a3 as Aa, H, a4 as Ml, a5 as _s, a6 as In, Z as Zp, D as De, t as cn, a7 as ae$1, a8 as ps, a9 as hl, aa as Ve, a, ab as Fe, ac as yf, ad as Hs, r as en, ae as Oa, af as Wn, ag as zn, ah as Ur, ai as Nr, aj as Fr } from "./_virtual_netlify-server-DZKFn6bU.js";
import "@netlify/vite-plugin-react-router/serverless";
import "react/jsx-runtime";
import "node:stream";
import "@react-router/node";
import "react-router";
import "isbot";
import "react-dom/server";
import "react";
import "react-dom";
import "lucide-react";
import "@radix-ui/react-select";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@lucide/lab";
import "recharts";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "react-router-dom";
import "@radix-ui/react-tabs";
import "@radix-ui/react-collapsible";
import "@radix-ui/react-switch";
import "@radix-ui/react-progress";
import "@radix-ui/react-separator";
a();
var Ye = { POSITION: ["byte", "byte normalized", "unsigned byte", "unsigned byte normalized", "short", "short normalized", "unsigned short", "unsigned short normalized"], NORMAL: ["byte normalized", "short normalized"], TANGENT: ["byte normalized", "short normalized"], TEXCOORD: ["byte", "byte normalized", "unsigned byte", "short", "short normalized", "unsigned short"] }, ae = class ae2 {
  constructor() {
    this.textureUtils = null, this.pluginCallbacks = [], this.register(function(e) {
      return new q(e);
    }), this.register(function(e) {
      return new X(e);
    }), this.register(function(e) {
      return new Q(e);
    }), this.register(function(e) {
      return new $(e);
    }), this.register(function(e) {
      return new ee(e);
    }), this.register(function(e) {
      return new se(e);
    }), this.register(function(e) {
      return new W(e);
    }), this.register(function(e) {
      return new J(e);
    }), this.register(function(e) {
      return new Z(e);
    }), this.register(function(e) {
      return new te(e);
    }), this.register(function(e) {
      return new ne(e);
    }), this.register(function(e) {
      return new ie(e);
    }), this.register(function(e) {
      return new re(e);
    }), this.register(function(e) {
      return new oe(e);
    });
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  setTextureUtils(e) {
    return this.textureUtils = e, this;
  }
  parse(e, s, n, t) {
    let i = new j(), r = [];
    for (let o = 0, a2 = this.pluginCallbacks.length; o < a2; o++) r.push(this.pluginCallbacks[o](i));
    i.setPlugins(r), i.setTextureUtils(this.textureUtils), i.writeAsync(e, s, t).catch(n);
  }
  parseAsync(e, s) {
    let n = this;
    return new Promise(function(t, i) {
      n.parse(e, t, i, s);
    });
  }
};
H(ae, "GLTFExporter");
var P = ae, g = { POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, BYTE: 5120, UNSIGNED_BYTE: 5121, SHORT: 5122, UNSIGNED_SHORT: 5123, INT: 5124, UNSIGNED_INT: 5125, FLOAT: 5126, ARRAY_BUFFER: 34962, ELEMENT_ARRAY_BUFFER: 34963, NEAREST: 9728, LINEAR: 9729, NEAREST_MIPMAP_NEAREST: 9984, LINEAR_MIPMAP_NEAREST: 9985, NEAREST_MIPMAP_LINEAR: 9986, LINEAR_MIPMAP_LINEAR: 9987, CLAMP_TO_EDGE: 33071, MIRRORED_REPEAT: 33648, REPEAT: 10497 }, Y = "KHR_mesh_quantization", N = {};
N[Fe] = g.NEAREST;
N[yf] = g.NEAREST_MIPMAP_NEAREST;
N[Hs] = g.NEAREST_MIPMAP_LINEAR;
N[en] = g.LINEAR;
N[Oa] = g.LINEAR_MIPMAP_NEAREST;
N[Wn] = g.LINEAR_MIPMAP_LINEAR;
N[zn] = g.CLAMP_TO_EDGE;
N[Ur] = g.REPEAT;
N[Nr] = g.MIRRORED_REPEAT;
var Ke = { scale: "scale", position: "translation", quaternion: "rotation", morphTargetInfluences: "weights" }, Qe = new Ft(), je = 12, $e = 1179937895, es = 2, qe = 8, ss = 1313821514, ts = 5130562;
function B(c, e) {
  return c.length === e.length && c.every(function(s, n) {
    return s === e[n];
  });
}
H(B, "equalArray");
function ns(c) {
  return new TextEncoder().encode(c).buffer;
}
H(ns, "stringToArrayBuffer");
function is(c) {
  return B(c.elements, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
}
H(is, "isIdentityMatrix");
function rs(c, e, s) {
  let n = { min: new Array(c.itemSize).fill(Number.POSITIVE_INFINITY), max: new Array(c.itemSize).fill(Number.NEGATIVE_INFINITY) };
  for (let t = e; t < e + s; t++) for (let i = 0; i < c.itemSize; i++) {
    let r;
    c.itemSize > 4 ? r = c.array[t * c.itemSize + i] : (i === 0 ? r = c.getX(t) : i === 1 ? r = c.getY(t) : i === 2 ? r = c.getZ(t) : i === 3 && (r = c.getW(t)), c.normalized === true && (r = Zp.normalize(r, c.array))), n.min[i] = Math.min(n.min[i], r), n.max[i] = Math.max(n.max[i], r);
  }
  return n;
}
H(rs, "getMinMax");
function Je(c) {
  return Math.ceil(c / 4) * 4;
}
H(Je, "getPaddedBufferSize");
function K(c, e = 0) {
  let s = Je(c.byteLength);
  if (s !== c.byteLength) {
    let n = new Uint8Array(s);
    if (n.set(new Uint8Array(c)), e !== 0) for (let t = c.byteLength; t < s; t++) n[t] = e;
    return n.buffer;
  }
  return c;
}
H(K, "getPaddedArrayBuffer");
function Xe() {
  return typeof document > "u" && typeof OffscreenCanvas < "u" ? new OffscreenCanvas(1, 1) : document.createElement("canvas");
}
H(Xe, "getCanvas");
function We(c, e) {
  if (c.toBlob !== void 0) return new Promise((n) => c.toBlob(n, e));
  let s;
  return e === "image/jpeg" ? s = 0.92 : e === "image/webp" && (s = 0.8), c.convertToBlob({ type: e, quality: s });
}
H(We, "getToBlobPromise");
var ce = class ce2 {
  constructor() {
    this.plugins = [], this.options = {}, this.pending = [], this.buffers = [], this.byteOffset = 0, this.buffers = [], this.nodeMap = /* @__PURE__ */ new Map(), this.skins = [], this.extensionsUsed = {}, this.extensionsRequired = {}, this.uids = /* @__PURE__ */ new Map(), this.uid = 0, this.json = { asset: { version: "2.0", generator: "THREE.GLTFExporter r" + Aa } }, this.cache = { meshes: /* @__PURE__ */ new Map(), attributes: /* @__PURE__ */ new Map(), attributesNormalized: /* @__PURE__ */ new Map(), materials: /* @__PURE__ */ new Map(), textures: /* @__PURE__ */ new Map(), images: /* @__PURE__ */ new Map() }, this.textureUtils = null;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  setTextureUtils(e) {
    this.textureUtils = e;
  }
  async writeAsync(e, s, n = {}) {
    this.options = Object.assign({ binary: false, trs: false, onlyVisible: true, maxTextureSize: 1 / 0, animations: [], includeCustomExtensions: false }, n), this.options.animations.length > 0 && (this.options.trs = true), await this.processInputAsync(e), await Promise.all(this.pending);
    let t = this, i = t.buffers, r = t.json;
    n = t.options;
    let o = t.extensionsUsed, a2 = t.extensionsRequired, l = new Blob(i, { type: "application/octet-stream" }), h = Object.keys(o), u = Object.keys(a2);
    if (h.length > 0 && (r.extensionsUsed = h), u.length > 0 && (r.extensionsRequired = u), r.buffers && r.buffers.length > 0 && (r.buffers[0].byteLength = l.size), n.binary === true) {
      let w = new FileReader();
      w.readAsArrayBuffer(l), w.onloadend = function() {
        let f = K(w.result), p = new DataView(new ArrayBuffer(qe));
        p.setUint32(0, f.byteLength, true), p.setUint32(4, ts, true);
        let d = K(ns(JSON.stringify(r)), 32), y = new DataView(new ArrayBuffer(qe));
        y.setUint32(0, d.byteLength, true), y.setUint32(4, ss, true);
        let M = new ArrayBuffer(je), b = new DataView(M);
        b.setUint32(0, $e, true), b.setUint32(4, es, true);
        let D = je + y.byteLength + d.byteLength + p.byteLength + f.byteLength;
        b.setUint32(8, D, true);
        let x = new Blob([M, y, d, p, f], { type: "application/octet-stream" }), A = new FileReader();
        A.readAsArrayBuffer(x), A.onloadend = function() {
          s(A.result);
        };
      };
    } else if (r.buffers && r.buffers.length > 0) {
      let w = new FileReader();
      w.readAsDataURL(l), w.onloadend = function() {
        let f = w.result;
        r.buffers[0].uri = f, s(r);
      };
    } else s(r);
  }
  serializeUserData(e, s) {
    if (Object.keys(e.userData).length === 0) return;
    let n = this.options, t = this.extensionsUsed;
    try {
      let i = JSON.parse(JSON.stringify(e.userData));
      if (n.includeCustomExtensions && i.gltfExtensions) {
        s.extensions === void 0 && (s.extensions = {});
        for (let r in i.gltfExtensions) s.extensions[r] = i.gltfExtensions[r], t[r] = true;
        delete i.gltfExtensions;
      }
      Object.keys(i).length > 0 && (s.extras = i);
    } catch (i) {
      console.warn("THREE.GLTFExporter: userData of '" + e.name + "' won't be serialized because of JSON.stringify error - " + i.message);
    }
  }
  getUID(e, s = false) {
    if (this.uids.has(e) === false) {
      let t = /* @__PURE__ */ new Map();
      t.set(true, this.uid++), t.set(false, this.uid++), this.uids.set(e, t);
    }
    return this.uids.get(e).get(s);
  }
  isNormalizedNormalAttribute(e) {
    if (this.cache.attributesNormalized.has(e)) return false;
    let n = new I();
    for (let t = 0, i = e.count; t < i; t++) if (Math.abs(n.fromBufferAttribute(e, t).length() - 1) > 5e-4) return false;
    return true;
  }
  createNormalizedNormalAttribute(e) {
    let s = this.cache;
    if (s.attributesNormalized.has(e)) return s.attributesNormalized.get(e);
    let n = e.clone(), t = new I();
    for (let i = 0, r = n.count; i < r; i++) t.fromBufferAttribute(n, i), t.x === 0 && t.y === 0 && t.z === 0 ? t.setX(1) : t.normalize(), n.setXYZ(i, t.x, t.y, t.z);
    return s.attributesNormalized.set(e, n), n;
  }
  applyTextureTransform(e, s) {
    let n = false, t = {};
    (s.offset.x !== 0 || s.offset.y !== 0) && (t.offset = s.offset.toArray(), n = true), s.rotation !== 0 && (t.rotation = s.rotation, n = true), (s.repeat.x !== 1 || s.repeat.y !== 1) && (t.scale = s.repeat.toArray(), n = true), n && (e.extensions = e.extensions || {}, e.extensions.KHR_texture_transform = t, this.extensionsUsed.KHR_texture_transform = true);
  }
  async buildMetalRoughTextureAsync(e, s) {
    if (e === s) return e;
    function n(f) {
      return f.colorSpace === Ve ? H(function(d) {
        return d < 0.04045 ? d * 0.0773993808 : Math.pow(d * 0.9478672986 + 0.0521327014, 2.4);
      }, "SRGBToLinear") : H(function(d) {
        return d;
      }, "LinearToLinear");
    }
    H(n, "getEncodingConversion"), e instanceof Ml && (e = await this.decompressTextureAsync(e)), s instanceof Ml && (s = await this.decompressTextureAsync(s));
    let t = e ? e.image : null, i = s ? s.image : null, r = Math.max(t ? t.width : 0, i ? i.width : 0), o = Math.max(t ? t.height : 0, i ? i.height : 0), a2 = Xe();
    a2.width = r, a2.height = o;
    let l = a2.getContext("2d", { willReadFrequently: true });
    l.fillStyle = "#00ffff", l.fillRect(0, 0, r, o);
    let h = l.getImageData(0, 0, r, o);
    if (t) {
      l.drawImage(t, 0, 0, r, o);
      let f = n(e), p = l.getImageData(0, 0, r, o).data;
      for (let d = 2; d < p.length; d += 4) h.data[d] = f(p[d] / 256) * 256;
    }
    if (i) {
      l.drawImage(i, 0, 0, r, o);
      let f = n(s), p = l.getImageData(0, 0, r, o).data;
      for (let d = 1; d < p.length; d += 4) h.data[d] = f(p[d] / 256) * 256;
    }
    l.putImageData(h, 0, 0);
    let w = (e || s).clone();
    return w.source = new _s(a2), w.colorSpace = In, w.channel = (e || s).channel, e && s && e.channel !== s.channel && console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."), console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."), w;
  }
  async decompressTextureAsync(e, s = 1 / 0) {
    if (this.textureUtils === null) throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");
    return await this.textureUtils.decompress(e, s);
  }
  processBuffer(e) {
    let s = this.json, n = this.buffers;
    return s.buffers || (s.buffers = [{ byteLength: 0 }]), n.push(e), 0;
  }
  processBufferView(e, s, n, t, i) {
    let r = this.json;
    r.bufferViews || (r.bufferViews = []);
    let o;
    switch (s) {
      case g.BYTE:
      case g.UNSIGNED_BYTE:
        o = 1;
        break;
      case g.SHORT:
      case g.UNSIGNED_SHORT:
        o = 2;
        break;
      default:
        o = 4;
    }
    let a2 = e.itemSize * o;
    i === g.ARRAY_BUFFER && (a2 = Math.ceil(a2 / 4) * 4);
    let l = Je(t * a2), h = new DataView(new ArrayBuffer(l)), u = 0;
    for (let p = n; p < n + t; p++) {
      for (let d = 0; d < e.itemSize; d++) {
        let y;
        e.itemSize > 4 ? y = e.array[p * e.itemSize + d] : (d === 0 ? y = e.getX(p) : d === 1 ? y = e.getY(p) : d === 2 ? y = e.getZ(p) : d === 3 && (y = e.getW(p)), e.normalized === true && (y = Zp.normalize(y, e.array))), s === g.FLOAT ? h.setFloat32(u, y, true) : s === g.INT ? h.setInt32(u, y, true) : s === g.UNSIGNED_INT ? h.setUint32(u, y, true) : s === g.SHORT ? h.setInt16(u, y, true) : s === g.UNSIGNED_SHORT ? h.setUint16(u, y, true) : s === g.BYTE ? h.setInt8(u, y) : s === g.UNSIGNED_BYTE && h.setUint8(u, y), u += o;
      }
      u % a2 !== 0 && (u += a2 - u % a2);
    }
    let w = { buffer: this.processBuffer(h.buffer), byteOffset: this.byteOffset, byteLength: l };
    return i !== void 0 && (w.target = i), i === g.ARRAY_BUFFER && (w.byteStride = a2), this.byteOffset += l, r.bufferViews.push(w), { id: r.bufferViews.length - 1, byteLength: 0 };
  }
  processBufferViewImage(e) {
    let s = this, n = s.json;
    return n.bufferViews || (n.bufferViews = []), new Promise(function(t) {
      let i = new FileReader();
      i.readAsArrayBuffer(e), i.onloadend = function() {
        let r = K(i.result), o = { buffer: s.processBuffer(r), byteOffset: s.byteOffset, byteLength: r.byteLength };
        s.byteOffset += r.byteLength, t(n.bufferViews.push(o) - 1);
      };
    });
  }
  processAccessor(e, s, n, t) {
    let i = this.json, r = { 1: "SCALAR", 2: "VEC2", 3: "VEC3", 4: "VEC4", 9: "MAT3", 16: "MAT4" }, o;
    if (e.array.constructor === Float32Array) o = g.FLOAT;
    else if (e.array.constructor === Int32Array) o = g.INT;
    else if (e.array.constructor === Uint32Array) o = g.UNSIGNED_INT;
    else if (e.array.constructor === Int16Array) o = g.SHORT;
    else if (e.array.constructor === Uint16Array) o = g.UNSIGNED_SHORT;
    else if (e.array.constructor === Int8Array) o = g.BYTE;
    else if (e.array.constructor === Uint8Array) o = g.UNSIGNED_BYTE;
    else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: " + e.array.constructor.name);
    if (n === void 0 && (n = 0), (t === void 0 || t === 1 / 0) && (t = e.count), t === 0) return null;
    let a2 = rs(e, n, t), l;
    s !== void 0 && (l = e === s.index ? g.ELEMENT_ARRAY_BUFFER : g.ARRAY_BUFFER);
    let h = this.processBufferView(e, o, n, t, l), u = { bufferView: h.id, byteOffset: h.byteOffset, componentType: o, count: t, max: a2.max, min: a2.min, type: r[e.itemSize] };
    return e.normalized === true && (u.normalized = true), i.accessors || (i.accessors = []), i.accessors.push(u) - 1;
  }
  processImage(e, s, n, t = "image/png") {
    if (e !== null) {
      let i = this, r = i.cache, o = i.json, a2 = i.options, l = i.pending;
      r.images.has(e) || r.images.set(e, {});
      let h = r.images.get(e), u = t + ":flipY/" + n.toString();
      if (h[u] !== void 0) return h[u];
      o.images || (o.images = []);
      let w = { mimeType: t }, f = Xe();
      f.width = Math.min(e.width, a2.maxTextureSize), f.height = Math.min(e.height, a2.maxTextureSize);
      let p = f.getContext("2d", { willReadFrequently: true });
      if (n === true && (p.translate(0, f.height), p.scale(1, -1)), e.data !== void 0) {
        s !== De && console.error("GLTFExporter: Only RGBAFormat is supported.", s), (e.width > a2.maxTextureSize || e.height > a2.maxTextureSize) && console.warn("GLTFExporter: Image size is bigger than maxTextureSize", e);
        let y = new Uint8ClampedArray(e.height * e.width * 4);
        for (let M = 0; M < y.length; M += 4) y[M + 0] = e.data[M + 0], y[M + 1] = e.data[M + 1], y[M + 2] = e.data[M + 2], y[M + 3] = e.data[M + 3];
        p.putImageData(new ImageData(y, e.width, e.height), 0, 0);
      } else if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas) p.drawImage(e, 0, 0, f.width, f.height);
      else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");
      a2.binary === true ? l.push(We(f, t).then((y) => i.processBufferViewImage(y)).then((y) => {
        w.bufferView = y;
      })) : f.toDataURL !== void 0 ? w.uri = f.toDataURL(t) : l.push(We(f, t).then((y) => new FileReader().readAsDataURL(y)).then((y) => {
        w.uri = y;
      }));
      let d = o.images.push(w) - 1;
      return h[u] = d, d;
    } else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.");
  }
  processSampler(e) {
    let s = this.json;
    s.samplers || (s.samplers = []);
    let n = { magFilter: N[e.magFilter], minFilter: N[e.minFilter], wrapS: N[e.wrapS], wrapT: N[e.wrapT] };
    return s.samplers.push(n) - 1;
  }
  async processTextureAsync(e) {
    let n = this.options, t = this.cache, i = this.json;
    if (t.textures.has(e)) return t.textures.get(e);
    i.textures || (i.textures = []), e instanceof Ml && (e = await this.decompressTextureAsync(e, n.maxTextureSize));
    let r = e.userData.mimeType;
    r === "image/webp" && (r = "image/png");
    let o = { sampler: this.processSampler(e), source: this.processImage(e.image, e.format, e.flipY, r) };
    e.name && (o.name = e.name), await this._invokeAllAsync(async function(l) {
      l.writeTexture && await l.writeTexture(e, o);
    });
    let a2 = i.textures.push(o) - 1;
    return t.textures.set(e, a2), a2;
  }
  async processMaterialAsync(e) {
    let s = this.cache, n = this.json;
    if (s.materials.has(e)) return s.materials.get(e);
    if (e.isShaderMaterial) return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."), null;
    n.materials || (n.materials = []);
    let t = { pbrMetallicRoughness: {} };
    e.isMeshStandardMaterial !== true && e.isMeshBasicMaterial !== true && console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");
    let i = e.color.toArray().concat([e.opacity]);
    if (B(i, [1, 1, 1, 1]) || (t.pbrMetallicRoughness.baseColorFactor = i), e.isMeshStandardMaterial ? (t.pbrMetallicRoughness.metallicFactor = e.metalness, t.pbrMetallicRoughness.roughnessFactor = e.roughness) : (t.pbrMetallicRoughness.metallicFactor = 0, t.pbrMetallicRoughness.roughnessFactor = 1), e.metalnessMap || e.roughnessMap) {
      let o = await this.buildMetalRoughTextureAsync(e.metalnessMap, e.roughnessMap), a2 = { index: await this.processTextureAsync(o), texCoord: o.channel };
      this.applyTextureTransform(a2, o), t.pbrMetallicRoughness.metallicRoughnessTexture = a2;
    }
    if (e.map) {
      let o = { index: await this.processTextureAsync(e.map), texCoord: e.map.channel };
      this.applyTextureTransform(o, e.map), t.pbrMetallicRoughness.baseColorTexture = o;
    }
    if (e.emissive) {
      let o = e.emissive;
      if (Math.max(o.r, o.g, o.b) > 0 && (t.emissiveFactor = e.emissive.toArray()), e.emissiveMap) {
        let l = { index: await this.processTextureAsync(e.emissiveMap), texCoord: e.emissiveMap.channel };
        this.applyTextureTransform(l, e.emissiveMap), t.emissiveTexture = l;
      }
    }
    if (e.normalMap) {
      let o = { index: await this.processTextureAsync(e.normalMap), texCoord: e.normalMap.channel };
      e.normalScale && e.normalScale.x !== 1 && (o.scale = e.normalScale.x), this.applyTextureTransform(o, e.normalMap), t.normalTexture = o;
    }
    if (e.aoMap) {
      let o = { index: await this.processTextureAsync(e.aoMap), texCoord: e.aoMap.channel };
      e.aoMapIntensity !== 1 && (o.strength = e.aoMapIntensity), this.applyTextureTransform(o, e.aoMap), t.occlusionTexture = o;
    }
    e.transparent ? t.alphaMode = "BLEND" : e.alphaTest > 0 && (t.alphaMode = "MASK", t.alphaCutoff = e.alphaTest), e.side === cn && (t.doubleSided = true), e.name !== "" && (t.name = e.name), this.serializeUserData(e, t), await this._invokeAllAsync(async function(o) {
      o.writeMaterialAsync && await o.writeMaterialAsync(e, t);
    });
    let r = n.materials.push(t) - 1;
    return s.materials.set(e, r), r;
  }
  async processMeshAsync(e) {
    let s = this.cache, n = this.json, t = [e.geometry.uuid];
    if (Array.isArray(e.material)) for (let x = 0, A = e.material.length; x < A; x++) t.push(e.material[x].uuid);
    else t.push(e.material.uuid);
    let i = t.join(":");
    if (s.meshes.has(i)) return s.meshes.get(i);
    let r = e.geometry, o;
    e.isLineSegments ? o = g.LINES : e.isLineLoop ? o = g.LINE_LOOP : e.isLine ? o = g.LINE_STRIP : e.isPoints ? o = g.POINTS : o = e.material.wireframe ? g.LINES : g.TRIANGLES;
    let a2 = {}, l = {}, h = [], u = [], w = { uv: "TEXCOORD_0", uv1: "TEXCOORD_1", uv2: "TEXCOORD_2", uv3: "TEXCOORD_3", color: "COLOR_0", skinWeight: "WEIGHTS_0", skinIndex: "JOINTS_0" }, f = r.getAttribute("normal");
    f !== void 0 && !this.isNormalizedNormalAttribute(f) && (console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."), r.setAttribute("normal", this.createNormalizedNormalAttribute(f)));
    let p = null;
    for (let x in r.attributes) {
      if (x.slice(0, 5) === "morph") continue;
      let A = r.attributes[x];
      if (x = w[x] || x.toUpperCase(), /^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(x) || (x = "_" + x), s.attributes.has(this.getUID(A))) {
        l[x] = s.attributes.get(this.getUID(A));
        continue;
      }
      p = null;
      let m = A.array;
      x === "JOINTS_0" && !(m instanceof Uint16Array) && !(m instanceof Uint8Array) ? (console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'), p = new ve(new Uint16Array(m), A.itemSize, A.normalized)) : (m instanceof Uint32Array || m instanceof Int32Array) && !x.startsWith("_") && (console.warn('GLTFExporter: Attribute "'.concat(x, '" converted to type FLOAT.')), p = P.Utils.toFloat32BufferAttribute(A));
      let E = this.processAccessor(p || A, r);
      E !== null && (x.startsWith("_") || this.detectMeshQuantization(x, A), l[x] = E, s.attributes.set(this.getUID(A), E));
    }
    if (f !== void 0 && r.setAttribute("normal", f), Object.keys(l).length === 0) return null;
    if (e.morphTargetInfluences !== void 0 && e.morphTargetInfluences.length > 0) {
      let x = [], A = [], I2 = {};
      if (e.morphTargetDictionary !== void 0) for (let m in e.morphTargetDictionary) I2[e.morphTargetDictionary[m]] = m;
      for (let m = 0; m < e.morphTargetInfluences.length; ++m) {
        let E = {}, Ie = false;
        for (let _ in r.morphAttributes) {
          if (_ !== "position" && _ !== "normal") {
            Ie || (console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."), Ie = true);
            continue;
          }
          let S = r.morphAttributes[_][m], H2 = _.toUpperCase(), L = r.attributes[_];
          if (s.attributes.has(this.getUID(S, true))) {
            E[H2] = s.attributes.get(this.getUID(S, true));
            continue;
          }
          let O = S.clone();
          if (!r.morphTargetsRelative) for (let R = 0, Ze = S.count; R < Ze; R++) for (let C = 0; C < S.itemSize; C++) C === 0 && O.setX(R, S.getX(R) - L.getX(R)), C === 1 && O.setY(R, S.getY(R) - L.getY(R)), C === 2 && O.setZ(R, S.getZ(R) - L.getZ(R)), C === 3 && O.setW(R, S.getW(R) - L.getW(R));
          E[H2] = this.processAccessor(O, r), s.attributes.set(this.getUID(L, true), E[H2]);
        }
        u.push(E), x.push(e.morphTargetInfluences[m]), e.morphTargetDictionary !== void 0 && A.push(I2[m]);
      }
      a2.weights = x, A.length > 0 && (a2.extras = {}, a2.extras.targetNames = A);
    }
    let d = Array.isArray(e.material);
    if (d && r.groups.length === 0) return null;
    let y = false;
    if (d && r.index === null) {
      let x = [];
      for (let A = 0, I2 = r.attributes.position.count; A < I2; A++) x[A] = A;
      r.setIndex(x), y = true;
    }
    let M = d ? e.material : [e.material], b = d ? r.groups : [{ materialIndex: 0, start: void 0, count: void 0 }];
    for (let x = 0, A = b.length; x < A; x++) {
      let I2 = { mode: o, attributes: l };
      if (this.serializeUserData(r, I2), u.length > 0 && (I2.targets = u), r.index !== null) {
        let E = this.getUID(r.index);
        (b[x].start !== void 0 || b[x].count !== void 0) && (E += ":" + b[x].start + ":" + b[x].count), s.attributes.has(E) ? I2.indices = s.attributes.get(E) : (I2.indices = this.processAccessor(r.index, r, b[x].start, b[x].count), s.attributes.set(E, I2.indices)), I2.indices === null && delete I2.indices;
      }
      let m = await this.processMaterialAsync(M[b[x].materialIndex]);
      m !== null && (I2.material = m), h.push(I2);
    }
    y === true && r.setIndex(null), a2.primitives = h, n.meshes || (n.meshes = []), await this._invokeAllAsync(function(x) {
      x.writeMesh && x.writeMesh(e, a2);
    });
    let D = n.meshes.push(a2) - 1;
    return s.meshes.set(i, D), D;
  }
  detectMeshQuantization(e, s) {
    if (this.extensionsUsed[Y]) return;
    let n;
    switch (s.array.constructor) {
      case Int8Array:
        n = "byte";
        break;
      case Uint8Array:
        n = "unsigned byte";
        break;
      case Int16Array:
        n = "short";
        break;
      case Uint16Array:
        n = "unsigned short";
        break;
      default:
        return;
    }
    s.normalized && (n += " normalized");
    let t = e.split("_", 1)[0];
    Ye[t] && Ye[t].includes(n) && (this.extensionsUsed[Y] = true, this.extensionsRequired[Y] = true);
  }
  processCamera(e) {
    let s = this.json;
    s.cameras || (s.cameras = []);
    let n = e.isOrthographicCamera, t = { type: n ? "orthographic" : "perspective" };
    return n ? t.orthographic = { xmag: e.right * 2, ymag: e.top * 2, zfar: e.far <= 0 ? 1e-3 : e.far, znear: e.near < 0 ? 0 : e.near } : t.perspective = { aspectRatio: e.aspect, yfov: Zp.degToRad(e.fov), zfar: e.far <= 0 ? 1e-3 : e.far, znear: e.near < 0 ? 0 : e.near }, e.name !== "" && (t.name = e.type), s.cameras.push(t) - 1;
  }
  processAnimation(e, s) {
    let n = this.json, t = this.nodeMap;
    n.animations || (n.animations = []), e = P.Utils.mergeMorphTargetTracks(e.clone(), s);
    let i = e.tracks, r = [], o = [];
    for (let a2 = 0; a2 < i.length; ++a2) {
      let l = i[a2], h = ae$1.parseTrackName(l.name), u = ae$1.findNode(s, h.nodeName), w = Ke[h.propertyName];
      if (h.objectName === "bones" && (u.isSkinnedMesh === true ? u = u.skeleton.getBoneByName(h.objectIndex) : u = void 0), !u || !w) {
        console.warn('THREE.GLTFExporter: Could not export animation track "%s".', l.name);
        continue;
      }
      let f = 1, p = l.values.length / l.times.length;
      w === Ke.morphTargetInfluences && (p /= u.morphTargetInfluences.length);
      let d;
      l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline === true ? (d = "CUBICSPLINE", p /= 3) : l.getInterpolation() === ps ? d = "STEP" : d = "LINEAR", o.push({ input: this.processAccessor(new ve(l.times, f)), output: this.processAccessor(new ve(l.values, p)), interpolation: d }), r.push({ sampler: o.length - 1, target: { node: t.get(u), path: w } });
    }
    return n.animations.push({ name: e.name || "clip_" + n.animations.length, samplers: o, channels: r }), n.animations.length - 1;
  }
  processSkin(e) {
    let s = this.json, n = this.nodeMap, t = s.nodes[n.get(e)], i = e.skeleton;
    if (i === void 0) return null;
    let r = e.skeleton.bones[0];
    if (r === void 0) return null;
    let o = [], a2 = new Float32Array(i.bones.length * 16), l = new Vt();
    for (let u = 0; u < i.bones.length; ++u) o.push(n.get(i.bones[u])), l.copy(i.boneInverses[u]), l.multiply(e.bindMatrix).toArray(a2, u * 16);
    return s.skins === void 0 && (s.skins = []), s.skins.push({ inverseBindMatrices: this.processAccessor(new ve(a2, 16)), joints: o, skeleton: n.get(r) }), t.skin = s.skins.length - 1;
  }
  async processNodeAsync(e) {
    let s = this.json, n = this.options, t = this.nodeMap;
    s.nodes || (s.nodes = []);
    let i = {};
    if (n.trs) {
      let o = e.quaternion.toArray(), a2 = e.position.toArray(), l = e.scale.toArray();
      B(o, [0, 0, 0, 1]) || (i.rotation = o), B(a2, [0, 0, 0]) || (i.translation = a2), B(l, [1, 1, 1]) || (i.scale = l);
    } else e.matrixAutoUpdate && e.updateMatrix(), is(e.matrix) === false && (i.matrix = e.matrix.elements);
    if (e.name !== "" && (i.name = String(e.name)), this.serializeUserData(e, i), e.isMesh || e.isLine || e.isPoints) {
      let o = await this.processMeshAsync(e);
      o !== null && (i.mesh = o);
    } else e.isCamera && (i.camera = this.processCamera(e));
    if (e.isSkinnedMesh && this.skins.push(e), e.children.length > 0) {
      let o = [];
      for (let a2 = 0, l = e.children.length; a2 < l; a2++) {
        let h = e.children[a2];
        if (h.visible || n.onlyVisible === false) {
          let u = await this.processNodeAsync(h);
          u !== null && o.push(u);
        }
      }
      o.length > 0 && (i.children = o);
    }
    await this._invokeAllAsync(function(o) {
      o.writeNode && o.writeNode(e, i);
    });
    let r = s.nodes.push(i) - 1;
    return t.set(e, r), r;
  }
  async processSceneAsync(e) {
    let s = this.json, n = this.options;
    s.scenes || (s.scenes = [], s.scene = 0);
    let t = {};
    e.name !== "" && (t.name = e.name), s.scenes.push(t);
    let i = [];
    for (let r = 0, o = e.children.length; r < o; r++) {
      let a2 = e.children[r];
      if (a2.visible || n.onlyVisible === false) {
        let l = await this.processNodeAsync(a2);
        l !== null && i.push(l);
      }
    }
    i.length > 0 && (t.nodes = i), this.serializeUserData(e, t);
  }
  async processObjectsAsync(e) {
    let s = new hl();
    s.name = "AuxScene";
    for (let n = 0; n < e.length; n++) s.children.push(e[n]);
    await this.processSceneAsync(s);
  }
  async processInputAsync(e) {
    let s = this.options;
    e = e instanceof Array ? e : [e], await this._invokeAllAsync(function(t) {
      t.beforeParse && t.beforeParse(e);
    });
    let n = [];
    for (let t = 0; t < e.length; t++) e[t] instanceof hl ? await this.processSceneAsync(e[t]) : n.push(e[t]);
    n.length > 0 && await this.processObjectsAsync(n);
    for (let t = 0; t < this.skins.length; ++t) this.processSkin(this.skins[t]);
    for (let t = 0; t < s.animations.length; ++t) this.processAnimation(s.animations[t], e[0]);
    await this._invokeAllAsync(function(t) {
      t.afterParse && t.afterParse(e);
    });
  }
  async _invokeAllAsync(e) {
    for (let s = 0, n = this.plugins.length; s < n; s++) await e(this.plugins[s]);
  }
};
H(ce, "GLTFWriter");
var j = ce, ue = class ue2 {
  constructor(e) {
    this.writer = e, this.name = "KHR_lights_punctual";
  }
  writeNode(e, s) {
    if (!e.isLight) return;
    if (!e.isDirectionalLight && !e.isPointLight && !e.isSpotLight) {
      console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.", e);
      return;
    }
    let n = this.writer, t = n.json, i = n.extensionsUsed, r = {};
    e.name && (r.name = e.name), r.color = e.color.toArray(), r.intensity = e.intensity, e.isDirectionalLight ? r.type = "directional" : e.isPointLight ? (r.type = "point", e.distance > 0 && (r.range = e.distance)) : e.isSpotLight && (r.type = "spot", e.distance > 0 && (r.range = e.distance), r.spot = {}, r.spot.innerConeAngle = (1 - e.penumbra) * e.angle, r.spot.outerConeAngle = e.angle), e.decay !== void 0 && e.decay !== 2 && console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."), e.target && (e.target.parent !== e || e.target.position.x !== 0 || e.target.position.y !== 0 || e.target.position.z !== -1) && console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."), i[this.name] || (t.extensions = t.extensions || {}, t.extensions[this.name] = { lights: [] }, i[this.name] = true);
    let o = t.extensions[this.name].lights;
    o.push(r), s.extensions = s.extensions || {}, s.extensions[this.name] = { light: o.length - 1 };
  }
};
H(ue, "GLTFLightExtension");
var q = ue, le = class le2 {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_unlit";
  }
  async writeMaterialAsync(e, s) {
    if (!e.isMeshBasicMaterial) return;
    let t = this.writer.extensionsUsed;
    s.extensions = s.extensions || {}, s.extensions[this.name] = {}, t[this.name] = true, s.pbrMetallicRoughness.metallicFactor = 0, s.pbrMetallicRoughness.roughnessFactor = 0.9;
  }
};
H(le, "GLTFMaterialsUnlitExtension");
var X = le, fe = class fe2 {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_clearcoat";
  }
  async writeMaterialAsync(e, s) {
    if (!e.isMeshPhysicalMaterial || e.clearcoat === 0) return;
    let n = this.writer, t = n.extensionsUsed, i = {};
    if (i.clearcoatFactor = e.clearcoat, e.clearcoatMap) {
      let r = { index: await n.processTextureAsync(e.clearcoatMap), texCoord: e.clearcoatMap.channel };
      n.applyTextureTransform(r, e.clearcoatMap), i.clearcoatTexture = r;
    }
    if (i.clearcoatRoughnessFactor = e.clearcoatRoughness, e.clearcoatRoughnessMap) {
      let r = { index: await n.processTextureAsync(e.clearcoatRoughnessMap), texCoord: e.clearcoatRoughnessMap.channel };
      n.applyTextureTransform(r, e.clearcoatRoughnessMap), i.clearcoatRoughnessTexture = r;
    }
    if (e.clearcoatNormalMap) {
      let r = { index: await n.processTextureAsync(e.clearcoatNormalMap), texCoord: e.clearcoatNormalMap.channel };
      e.clearcoatNormalScale.x !== 1 && (r.scale = e.clearcoatNormalScale.x), n.applyTextureTransform(r, e.clearcoatNormalMap), i.clearcoatNormalTexture = r;
    }
    s.extensions = s.extensions || {}, s.extensions[this.name] = i, t[this.name] = true;
  }
};
H(fe, "GLTFMaterialsClearcoatExtension");
var W = fe, he = class he2 {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_dispersion";
  }
  async writeMaterialAsync(e, s) {
    if (!e.isMeshPhysicalMaterial || e.dispersion === 0) return;
    let t = this.writer.extensionsUsed, i = {};
    i.dispersion = e.dispersion, s.extensions = s.extensions || {}, s.extensions[this.name] = i, t[this.name] = true;
  }
};
H(he, "GLTFMaterialsDispersionExtension");
var J = he, pe = class pe2 {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_iridescence";
  }
  async writeMaterialAsync(e, s) {
    if (!e.isMeshPhysicalMaterial || e.iridescence === 0) return;
    let n = this.writer, t = n.extensionsUsed, i = {};
    if (i.iridescenceFactor = e.iridescence, e.iridescenceMap) {
      let r = { index: await n.processTextureAsync(e.iridescenceMap), texCoord: e.iridescenceMap.channel };
      n.applyTextureTransform(r, e.iridescenceMap), i.iridescenceTexture = r;
    }
    if (i.iridescenceIor = e.iridescenceIOR, i.iridescenceThicknessMinimum = e.iridescenceThicknessRange[0], i.iridescenceThicknessMaximum = e.iridescenceThicknessRange[1], e.iridescenceThicknessMap) {
      let r = { index: await n.processTextureAsync(e.iridescenceThicknessMap), texCoord: e.iridescenceThicknessMap.channel };
      n.applyTextureTransform(r, e.iridescenceThicknessMap), i.iridescenceThicknessTexture = r;
    }
    s.extensions = s.extensions || {}, s.extensions[this.name] = i, t[this.name] = true;
  }
};
H(pe, "GLTFMaterialsIridescenceExtension");
var Z = pe, de = class de2 {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_transmission";
  }
  async writeMaterialAsync(e, s) {
    if (!e.isMeshPhysicalMaterial || e.transmission === 0) return;
    let n = this.writer, t = n.extensionsUsed, i = {};
    if (i.transmissionFactor = e.transmission, e.transmissionMap) {
      let r = { index: await n.processTextureAsync(e.transmissionMap), texCoord: e.transmissionMap.channel };
      n.applyTextureTransform(r, e.transmissionMap), i.transmissionTexture = r;
    }
    s.extensions = s.extensions || {}, s.extensions[this.name] = i, t[this.name] = true;
  }
};
H(de, "GLTFMaterialsTransmissionExtension");
var Q = de, xe = class xe2 {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_volume";
  }
  async writeMaterialAsync(e, s) {
    if (!e.isMeshPhysicalMaterial || e.transmission === 0) return;
    let n = this.writer, t = n.extensionsUsed, i = {};
    if (i.thicknessFactor = e.thickness, e.thicknessMap) {
      let r = { index: await n.processTextureAsync(e.thicknessMap), texCoord: e.thicknessMap.channel };
      n.applyTextureTransform(r, e.thicknessMap), i.thicknessTexture = r;
    }
    e.attenuationDistance !== 1 / 0 && (i.attenuationDistance = e.attenuationDistance), i.attenuationColor = e.attenuationColor.toArray(), s.extensions = s.extensions || {}, s.extensions[this.name] = i, t[this.name] = true;
  }
};
H(xe, "GLTFMaterialsVolumeExtension");
var $ = xe, ye = class ye2 {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_ior";
  }
  async writeMaterialAsync(e, s) {
    if (!e.isMeshPhysicalMaterial || e.ior === 1.5) return;
    let t = this.writer.extensionsUsed, i = {};
    i.ior = e.ior, s.extensions = s.extensions || {}, s.extensions[this.name] = i, t[this.name] = true;
  }
};
H(ye, "GLTFMaterialsIorExtension");
var ee = ye, ge = class ge2 {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_specular";
  }
  async writeMaterialAsync(e, s) {
    if (!e.isMeshPhysicalMaterial || e.specularIntensity === 1 && e.specularColor.equals(Qe) && !e.specularIntensityMap && !e.specularColorMap) return;
    let n = this.writer, t = n.extensionsUsed, i = {};
    if (e.specularIntensityMap) {
      let r = { index: await n.processTextureAsync(e.specularIntensityMap), texCoord: e.specularIntensityMap.channel };
      n.applyTextureTransform(r, e.specularIntensityMap), i.specularTexture = r;
    }
    if (e.specularColorMap) {
      let r = { index: await n.processTextureAsync(e.specularColorMap), texCoord: e.specularColorMap.channel };
      n.applyTextureTransform(r, e.specularColorMap), i.specularColorTexture = r;
    }
    i.specularFactor = e.specularIntensity, i.specularColorFactor = e.specularColor.toArray(), s.extensions = s.extensions || {}, s.extensions[this.name] = i, t[this.name] = true;
  }
};
H(ge, "GLTFMaterialsSpecularExtension");
var se = ge, we = class we2 {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_sheen";
  }
  async writeMaterialAsync(e, s) {
    if (!e.isMeshPhysicalMaterial || e.sheen == 0) return;
    let n = this.writer, t = n.extensionsUsed, i = {};
    if (e.sheenRoughnessMap) {
      let r = { index: await n.processTextureAsync(e.sheenRoughnessMap), texCoord: e.sheenRoughnessMap.channel };
      n.applyTextureTransform(r, e.sheenRoughnessMap), i.sheenRoughnessTexture = r;
    }
    if (e.sheenColorMap) {
      let r = { index: await n.processTextureAsync(e.sheenColorMap), texCoord: e.sheenColorMap.channel };
      n.applyTextureTransform(r, e.sheenColorMap), i.sheenColorTexture = r;
    }
    i.sheenRoughnessFactor = e.sheenRoughness, i.sheenColorFactor = e.sheenColor.toArray(), s.extensions = s.extensions || {}, s.extensions[this.name] = i, t[this.name] = true;
  }
};
H(we, "GLTFMaterialsSheenExtension");
var te = we, Te = class Te2 {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_anisotropy";
  }
  async writeMaterialAsync(e, s) {
    if (!e.isMeshPhysicalMaterial || e.anisotropy == 0) return;
    let n = this.writer, t = n.extensionsUsed, i = {};
    if (e.anisotropyMap) {
      let r = { index: await n.processTextureAsync(e.anisotropyMap) };
      n.applyTextureTransform(r, e.anisotropyMap), i.anisotropyTexture = r;
    }
    i.anisotropyStrength = e.anisotropy, i.anisotropyRotation = e.anisotropyRotation, s.extensions = s.extensions || {}, s.extensions[this.name] = i, t[this.name] = true;
  }
};
H(Te, "GLTFMaterialsAnisotropyExtension");
var ne = Te, Ae = class Ae2 {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_emissive_strength";
  }
  async writeMaterialAsync(e, s) {
    if (!e.isMeshStandardMaterial || e.emissiveIntensity === 1) return;
    let t = this.writer.extensionsUsed, i = {};
    i.emissiveStrength = e.emissiveIntensity, s.extensions = s.extensions || {}, s.extensions[this.name] = i, t[this.name] = true;
  }
};
H(Ae, "GLTFMaterialsEmissiveStrengthExtension");
var ie = Ae, me = class me2 {
  constructor(e) {
    this.writer = e, this.name = "EXT_materials_bump";
  }
  async writeMaterialAsync(e, s) {
    if (!e.isMeshStandardMaterial || e.bumpScale === 1 && !e.bumpMap) return;
    let n = this.writer, t = n.extensionsUsed, i = {};
    if (e.bumpMap) {
      let r = { index: await n.processTextureAsync(e.bumpMap), texCoord: e.bumpMap.channel };
      n.applyTextureTransform(r, e.bumpMap), i.bumpTexture = r;
    }
    i.bumpFactor = e.bumpScale, s.extensions = s.extensions || {}, s.extensions[this.name] = i, t[this.name] = true;
  }
};
H(me, "GLTFMaterialsBumpExtension");
var re = me, Me = class Me2 {
  constructor(e) {
    this.writer = e, this.name = "EXT_mesh_gpu_instancing";
  }
  writeNode(e, s) {
    if (!e.isInstancedMesh) return;
    let n = this.writer, t = e, i = new Float32Array(t.count * 3), r = new Float32Array(t.count * 4), o = new Float32Array(t.count * 3), a2 = new Vt(), l = new I(), h = new En(), u = new I();
    for (let f = 0; f < t.count; f++) t.getMatrixAt(f, a2), a2.decompose(l, h, u), l.toArray(i, f * 3), h.toArray(r, f * 4), u.toArray(o, f * 3);
    let w = { TRANSLATION: n.processAccessor(new ve(i, 3)), ROTATION: n.processAccessor(new ve(r, 4)), SCALE: n.processAccessor(new ve(o, 3)) };
    t.instanceColor && (w._COLOR_0 = n.processAccessor(t.instanceColor)), s.extensions = s.extensions || {}, s.extensions[this.name] = { attributes: w }, n.extensionsUsed[this.name] = true, n.extensionsRequired[this.name] = true;
  }
};
H(Me, "GLTFMeshGpuInstancing");
var oe = Me;
P.Utils = { insertKeyframe: H(function(c, e) {
  let n = c.getValueSize(), t = new c.TimeBufferType(c.times.length + 1), i = new c.ValueBufferType(c.values.length + n), r = c.createInterpolant(new c.ValueBufferType(n)), o;
  if (c.times.length === 0) {
    t[0] = e;
    for (let a2 = 0; a2 < n; a2++) i[a2] = 0;
    o = 0;
  } else if (e < c.times[0]) {
    if (Math.abs(c.times[0] - e) < 1e-3) return 0;
    t[0] = e, t.set(c.times, 1), i.set(r.evaluate(e), 0), i.set(c.values, n), o = 0;
  } else if (e > c.times[c.times.length - 1]) {
    if (Math.abs(c.times[c.times.length - 1] - e) < 1e-3) return c.times.length - 1;
    t[t.length - 1] = e, t.set(c.times, 0), i.set(c.values, 0), i.set(r.evaluate(e), c.values.length), o = t.length - 1;
  } else for (let a2 = 0; a2 < c.times.length; a2++) {
    if (Math.abs(c.times[a2] - e) < 1e-3) return a2;
    if (c.times[a2] < e && c.times[a2 + 1] > e) {
      t.set(c.times.slice(0, a2 + 1), 0), t[a2 + 1] = e, t.set(c.times.slice(a2 + 1), a2 + 2), i.set(c.values.slice(0, (a2 + 1) * n), 0), i.set(r.evaluate(e), (a2 + 1) * n), i.set(c.values.slice((a2 + 1) * n), (a2 + 2) * n), o = a2 + 1;
      break;
    }
  }
  return c.times = t, c.values = i, o;
}, "insertKeyframe"), mergeMorphTargetTracks: H(function(c, e) {
  let s = [], n = {}, t = c.tracks;
  for (let i = 0; i < t.length; ++i) {
    let r = t[i], o = ae$1.parseTrackName(r.name), a2 = ae$1.findNode(e, o.nodeName);
    if (o.propertyName !== "morphTargetInfluences" || o.propertyIndex === void 0) {
      s.push(r);
      continue;
    }
    if (r.createInterpolant !== r.InterpolantFactoryMethodDiscrete && r.createInterpolant !== r.InterpolantFactoryMethodLinear) {
      if (r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline) throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");
      console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."), r = r.clone(), r.setInterpolation(Fr);
    }
    let l = a2.morphTargetInfluences.length, h = a2.morphTargetDictionary[o.propertyIndex];
    if (h === void 0) throw new Error("THREE.GLTFExporter: Morph target name not found: " + o.propertyIndex);
    let u;
    if (n[a2.uuid] === void 0) {
      u = r.clone();
      let f = new u.ValueBufferType(l * u.times.length);
      for (let p = 0; p < u.times.length; p++) f[p * l + h] = u.values[p];
      u.name = (o.nodeName || "") + ".morphTargetInfluences", u.values = f, n[a2.uuid] = u, s.push(u);
      continue;
    }
    let w = r.createInterpolant(new r.ValueBufferType(1));
    u = n[a2.uuid];
    for (let f = 0; f < u.times.length; f++) u.values[f * l + h] = w.evaluate(u.times[f]);
    for (let f = 0; f < r.times.length; f++) {
      let p = this.insertKeyframe(u, r.times[f]);
      u.values[p * l + h] = r.values[f];
    }
  }
  return c.tracks = s, c;
}, "mergeMorphTargetTracks"), toFloat32BufferAttribute: H(function(c) {
  let e = new ve(new Float32Array(c.count * c.itemSize), c.itemSize, false);
  if (!c.normalized && !c.isInterleavedBufferAttribute) return e.array.set(c.array), e;
  for (let s = 0, n = c.count; s < n; s++) for (let t = 0; t < c.itemSize; t++) e.setComponent(s, t, c.getComponent(s, t));
  return e;
}, "toFloat32BufferAttribute") };
export {
  P as GLTFExporter
};
