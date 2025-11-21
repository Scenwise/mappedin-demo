import { ak as Gn, al as Hl, H, am as Ll, an as Rl, l as ot$1, g as Ft, ao as ri, aa as Ve$1, ap as Fl, aq as Bl, ar as kl, j as Vt, i as I, as as ml, a1 as En, E as Es, at as fe$1, au as Ul, av as Wl, a2 as ve$1, aw as ul, af as Wn, ad as Hs, ae as Oa, ac as yf, r as en$1, ab as Fe$1, ah as Ur, ai as Nr, ag as zn, w as we$1, ax as Yr, ay as nn$1, az as Ts, aA as ea, t as cn$1, v as vs, a7 as ae, aB as pe$1, aC as fl, y as ye$1, aD as X, aE as wp, aF as Cp, aG as qr, aH as As, aI as xl, aJ as yl, aK as ti, aL as Te$1, Z as Zp, aM as ks, aN as pl, aO as Pl, aP as Gr, a8 as ps, aj as Fr, aQ as ui, aR as dl, aS as di, aT as hi, aU as qt, aV as Sn, aW as ci, e as Pe$1, A as Ae$1, a } from "./_virtual_netlify-server-DZKFn6bU.js";
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
var ve = class ve2 extends Gn {
  constructor(t) {
    super(t), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
      return new me(e);
    }), this.register(function(e) {
      return new Ae(e);
    }), this.register(function(e) {
      return new we(e);
    }), this.register(function(e) {
      return new Ne(e);
    }), this.register(function(e) {
      return new be(e);
    }), this.register(function(e) {
      return new Te(e);
    }), this.register(function(e) {
      return new Re(e);
    }), this.register(function(e) {
      return new _e(e);
    }), this.register(function(e) {
      return new Ee(e);
    }), this.register(function(e) {
      return new pe(e);
    }), this.register(function(e) {
      return new xe(e);
    }), this.register(function(e) {
      return new ge(e);
    }), this.register(function(e) {
      return new ye(e);
    }), this.register(function(e) {
      return new Se(e);
    }), this.register(function(e) {
      return new de(e);
    }), this.register(function(e) {
      return new Me(e);
    }), this.register(function(e) {
      return new Ie(e);
    });
  }
  load(t, e, r, n) {
    let s = this, i;
    if (this.resourcePath !== "") i = this.resourcePath;
    else if (this.path !== "") {
      let c = Hl.extractUrlBase(t);
      i = Hl.resolveURL(c, this.path);
    } else i = Hl.extractUrlBase(t);
    this.manager.itemStart(t);
    let a2 = H(function(c) {
      n ? n(c) : console.error(c), s.manager.itemError(t), s.manager.itemEnd(t);
    }, "_onError"), o = new Ll(this.manager);
    o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(t, function(c) {
      try {
        s.parse(c, i, function(l) {
          e(l), s.manager.itemEnd(t);
        }, a2);
      } catch (l) {
        a2(l);
      }
    }, r, a2);
  }
  setDRACOLoader(t) {
    return this.dracoLoader = t, this;
  }
  setKTX2Loader(t) {
    return this.ktx2Loader = t, this;
  }
  setMeshoptDecoder(t) {
    return this.meshoptDecoder = t, this;
  }
  register(t) {
    return this.pluginCallbacks.indexOf(t) === -1 && this.pluginCallbacks.push(t), this;
  }
  unregister(t) {
    return this.pluginCallbacks.indexOf(t) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t), 1), this;
  }
  parse(t, e, r, n) {
    let s, i = {}, a2 = {}, o = new TextDecoder();
    if (typeof t == "string") s = JSON.parse(t);
    else if (t instanceof ArrayBuffer) if (o.decode(new Uint8Array(t, 0, 4)) === tn) {
      try {
        i[g.KHR_BINARY_GLTF] = new Le(t);
      } catch (u) {
        n && n(u);
        return;
      }
      s = JSON.parse(i[g.KHR_BINARY_GLTF].content);
    } else s = JSON.parse(o.decode(t));
    else s = t;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      n && n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    let c = new Be(s, { path: e || this.resourcePath || "", crossOrigin: this.crossOrigin, requestHeader: this.requestHeader, manager: this.manager, ktx2Loader: this.ktx2Loader, meshoptDecoder: this.meshoptDecoder });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let l = 0; l < this.pluginCallbacks.length; l++) {
      let u = this.pluginCallbacks[l](c);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a2[u.name] = u, i[u.name] = true;
    }
    if (s.extensionsUsed) for (let l = 0; l < s.extensionsUsed.length; ++l) {
      let u = s.extensionsUsed[l], f = s.extensionsRequired || [];
      switch (u) {
        case g.KHR_MATERIALS_UNLIT:
          i[u] = new he();
          break;
        case g.KHR_DRACO_MESH_COMPRESSION:
          i[u] = new Oe(s, this.dracoLoader);
          break;
        case g.KHR_TEXTURE_TRANSFORM:
          i[u] = new Ce();
          break;
        case g.KHR_MESH_QUANTIZATION:
          i[u] = new De();
          break;
        default:
          f.indexOf(u) >= 0 && a2[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
      }
    }
    c.setExtensions(i), c.setPlugins(a2), c.parse(r, n);
  }
  parseAsync(t, e) {
    let r = this;
    return new Promise(function(n, s) {
      r.parse(t, e, n, s);
    });
  }
};
H(ve, "GLTFLoader");
var Qt = ve;
function nn() {
  let h = {};
  return { get: H(function(t) {
    return h[t];
  }, "get"), add: H(function(t, e) {
    h[t] = e;
  }, "add"), remove: H(function(t) {
    delete h[t];
  }, "remove"), removeAll: H(function() {
    h = {};
  }, "removeAll") };
}
H(nn, "GLTFRegistry");
var g = { KHR_BINARY_GLTF: "KHR_binary_glTF", KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression", KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual", KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat", KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion", KHR_MATERIALS_IOR: "KHR_materials_ior", KHR_MATERIALS_SHEEN: "KHR_materials_sheen", KHR_MATERIALS_SPECULAR: "KHR_materials_specular", KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission", KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence", KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy", KHR_MATERIALS_UNLIT: "KHR_materials_unlit", KHR_MATERIALS_VOLUME: "KHR_materials_volume", KHR_TEXTURE_BASISU: "KHR_texture_basisu", KHR_TEXTURE_TRANSFORM: "KHR_texture_transform", KHR_MESH_QUANTIZATION: "KHR_mesh_quantization", KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength", EXT_MATERIALS_BUMP: "EXT_materials_bump", EXT_TEXTURE_WEBP: "EXT_texture_webp", EXT_TEXTURE_AVIF: "EXT_texture_avif", EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression", EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing" }, Ue = class Ue2 {
  constructor(t) {
    this.parser = t, this.name = g.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    let t = this.parser, e = this.parser.json.nodes || [];
    for (let r = 0, n = e.length; r < n; r++) {
      let s = e[r];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && t._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(t) {
    let e = this.parser, r = "light:" + t, n = e.cache.get(r);
    if (n) return n;
    let s = e.json, o = ((s.extensions && s.extensions[this.name] || {}).lights || [])[t], c, l = new Ft(16777215);
    o.color !== void 0 && l.setRGB(o.color[0], o.color[1], o.color[2], ri);
    let u = o.range !== void 0 ? o.range : 0;
    switch (o.type) {
      case "directional":
        c = new kl(l), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new Bl(l), c.distance = u;
        break;
      case "spot":
        c = new Fl(l), c.distance = u, o.spot = o.spot || {}, o.spot.innerConeAngle = o.spot.innerConeAngle !== void 0 ? o.spot.innerConeAngle : 0, o.spot.outerConeAngle = o.spot.outerConeAngle !== void 0 ? o.spot.outerConeAngle : Math.PI / 4, c.angle = o.spot.outerConeAngle, c.penumbra = 1 - o.spot.innerConeAngle / o.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + o.type);
    }
    return c.position.set(0, 0, 0), M(c, o), o.intensity !== void 0 && (c.intensity = o.intensity), c.name = e.createUniqueName(o.name || "light_" + t), n = Promise.resolve(c), e.cache.add(r, n), n;
  }
  getDependency(t, e) {
    if (t === "light") return this._loadLight(e);
  }
  createNodeAttachment(t) {
    let e = this, r = this.parser, s = r.json.nodes[t], a2 = (s.extensions && s.extensions[this.name] || {}).light;
    return a2 === void 0 ? null : this._loadLight(a2).then(function(o) {
      return r._getNodeRef(e.cache, a2, o);
    });
  }
};
H(Ue, "GLTFLightsExtension");
var de = Ue, je = class je2 {
  constructor() {
    this.name = g.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return vs;
  }
  extendParams(t, e, r) {
    let n = [];
    t.color = new Ft(1, 1, 1), t.opacity = 1;
    let s = e.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        let i = s.baseColorFactor;
        t.color.setRGB(i[0], i[1], i[2], ri), t.opacity = i[3];
      }
      s.baseColorTexture !== void 0 && n.push(r.assignTexture(t, "map", s.baseColorTexture, Ve$1));
    }
    return Promise.all(n);
  }
};
H(je, "GLTFMaterialsUnlitExtension");
var he = je, Ke = class Ke2 {
  constructor(t) {
    this.parser = t, this.name = g.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(t, e) {
    let n = this.parser.json.materials[t];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let s = n.extensions[this.name].emissiveStrength;
    return s !== void 0 && (e.emissiveIntensity = s), Promise.resolve();
  }
};
H(Ke, "GLTFMaterialsEmissiveStrengthExtension");
var pe = Ke, Fe = class Fe2 {
  constructor(t) {
    this.parser = t, this.name = g.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(t) {
    let r = this.parser.json.materials[t];
    return !r.extensions || !r.extensions[this.name] ? null : Rl;
  }
  extendMaterialParams(t, e) {
    let r = this.parser, n = r.json.materials[t];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let s = [], i = n.extensions[this.name];
    if (i.clearcoatFactor !== void 0 && (e.clearcoat = i.clearcoatFactor), i.clearcoatTexture !== void 0 && s.push(r.assignTexture(e, "clearcoatMap", i.clearcoatTexture)), i.clearcoatRoughnessFactor !== void 0 && (e.clearcoatRoughness = i.clearcoatRoughnessFactor), i.clearcoatRoughnessTexture !== void 0 && s.push(r.assignTexture(e, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)), i.clearcoatNormalTexture !== void 0 && (s.push(r.assignTexture(e, "clearcoatNormalMap", i.clearcoatNormalTexture)), i.clearcoatNormalTexture.scale !== void 0)) {
      let a2 = i.clearcoatNormalTexture.scale;
      e.clearcoatNormalScale = new ot$1(a2, a2);
    }
    return Promise.all(s);
  }
};
H(Fe, "GLTFMaterialsClearcoatExtension");
var me = Fe, Ve = class Ve2 {
  constructor(t) {
    this.parser = t, this.name = g.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(t) {
    let r = this.parser.json.materials[t];
    return !r.extensions || !r.extensions[this.name] ? null : Rl;
  }
  extendMaterialParams(t, e) {
    let n = this.parser.json.materials[t];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let s = n.extensions[this.name];
    return e.dispersion = s.dispersion !== void 0 ? s.dispersion : 0, Promise.resolve();
  }
};
H(Ve, "GLTFMaterialsDispersionExtension");
var Ae = Ve, Xe = class Xe2 {
  constructor(t) {
    this.parser = t, this.name = g.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(t) {
    let r = this.parser.json.materials[t];
    return !r.extensions || !r.extensions[this.name] ? null : Rl;
  }
  extendMaterialParams(t, e) {
    let r = this.parser, n = r.json.materials[t];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let s = [], i = n.extensions[this.name];
    return i.iridescenceFactor !== void 0 && (e.iridescence = i.iridescenceFactor), i.iridescenceTexture !== void 0 && s.push(r.assignTexture(e, "iridescenceMap", i.iridescenceTexture)), i.iridescenceIor !== void 0 && (e.iridescenceIOR = i.iridescenceIor), e.iridescenceThicknessRange === void 0 && (e.iridescenceThicknessRange = [100, 400]), i.iridescenceThicknessMinimum !== void 0 && (e.iridescenceThicknessRange[0] = i.iridescenceThicknessMinimum), i.iridescenceThicknessMaximum !== void 0 && (e.iridescenceThicknessRange[1] = i.iridescenceThicknessMaximum), i.iridescenceThicknessTexture !== void 0 && s.push(r.assignTexture(e, "iridescenceThicknessMap", i.iridescenceThicknessTexture)), Promise.all(s);
  }
};
H(Xe, "GLTFMaterialsIridescenceExtension");
var ge = Xe, Ge = class Ge2 {
  constructor(t) {
    this.parser = t, this.name = g.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(t) {
    let r = this.parser.json.materials[t];
    return !r.extensions || !r.extensions[this.name] ? null : Rl;
  }
  extendMaterialParams(t, e) {
    let r = this.parser, n = r.json.materials[t];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let s = [];
    e.sheenColor = new Ft(0, 0, 0), e.sheenRoughness = 0, e.sheen = 1;
    let i = n.extensions[this.name];
    if (i.sheenColorFactor !== void 0) {
      let a2 = i.sheenColorFactor;
      e.sheenColor.setRGB(a2[0], a2[1], a2[2], ri);
    }
    return i.sheenRoughnessFactor !== void 0 && (e.sheenRoughness = i.sheenRoughnessFactor), i.sheenColorTexture !== void 0 && s.push(r.assignTexture(e, "sheenColorMap", i.sheenColorTexture, Ve$1)), i.sheenRoughnessTexture !== void 0 && s.push(r.assignTexture(e, "sheenRoughnessMap", i.sheenRoughnessTexture)), Promise.all(s);
  }
};
H(Ge, "GLTFMaterialsSheenExtension");
var Te = Ge, ze = class ze2 {
  constructor(t) {
    this.parser = t, this.name = g.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(t) {
    let r = this.parser.json.materials[t];
    return !r.extensions || !r.extensions[this.name] ? null : Rl;
  }
  extendMaterialParams(t, e) {
    let r = this.parser, n = r.json.materials[t];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let s = [], i = n.extensions[this.name];
    return i.transmissionFactor !== void 0 && (e.transmission = i.transmissionFactor), i.transmissionTexture !== void 0 && s.push(r.assignTexture(e, "transmissionMap", i.transmissionTexture)), Promise.all(s);
  }
};
H(ze, "GLTFMaterialsTransmissionExtension");
var Re = ze, qe = class qe2 {
  constructor(t) {
    this.parser = t, this.name = g.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(t) {
    let r = this.parser.json.materials[t];
    return !r.extensions || !r.extensions[this.name] ? null : Rl;
  }
  extendMaterialParams(t, e) {
    let r = this.parser, n = r.json.materials[t];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let s = [], i = n.extensions[this.name];
    e.thickness = i.thicknessFactor !== void 0 ? i.thicknessFactor : 0, i.thicknessTexture !== void 0 && s.push(r.assignTexture(e, "thicknessMap", i.thicknessTexture)), e.attenuationDistance = i.attenuationDistance || 1 / 0;
    let a2 = i.attenuationColor || [1, 1, 1];
    return e.attenuationColor = new Ft().setRGB(a2[0], a2[1], a2[2], ri), Promise.all(s);
  }
};
H(qe, "GLTFMaterialsVolumeExtension");
var _e = qe, We = class We2 {
  constructor(t) {
    this.parser = t, this.name = g.KHR_MATERIALS_IOR;
  }
  getMaterialType(t) {
    let r = this.parser.json.materials[t];
    return !r.extensions || !r.extensions[this.name] ? null : Rl;
  }
  extendMaterialParams(t, e) {
    let n = this.parser.json.materials[t];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let s = n.extensions[this.name];
    return e.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
};
H(We, "GLTFMaterialsIorExtension");
var Ee = We, Ye = class Ye2 {
  constructor(t) {
    this.parser = t, this.name = g.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(t) {
    let r = this.parser.json.materials[t];
    return !r.extensions || !r.extensions[this.name] ? null : Rl;
  }
  extendMaterialParams(t, e) {
    let r = this.parser, n = r.json.materials[t];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let s = [], i = n.extensions[this.name];
    e.specularIntensity = i.specularFactor !== void 0 ? i.specularFactor : 1, i.specularTexture !== void 0 && s.push(r.assignTexture(e, "specularIntensityMap", i.specularTexture));
    let a2 = i.specularColorFactor || [1, 1, 1];
    return e.specularColor = new Ft().setRGB(a2[0], a2[1], a2[2], ri), i.specularColorTexture !== void 0 && s.push(r.assignTexture(e, "specularColorMap", i.specularColorTexture, Ve$1)), Promise.all(s);
  }
};
H(Ye, "GLTFMaterialsSpecularExtension");
var xe = Ye, Qe = class Qe2 {
  constructor(t) {
    this.parser = t, this.name = g.EXT_MATERIALS_BUMP;
  }
  getMaterialType(t) {
    let r = this.parser.json.materials[t];
    return !r.extensions || !r.extensions[this.name] ? null : Rl;
  }
  extendMaterialParams(t, e) {
    let r = this.parser, n = r.json.materials[t];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let s = [], i = n.extensions[this.name];
    return e.bumpScale = i.bumpFactor !== void 0 ? i.bumpFactor : 1, i.bumpTexture !== void 0 && s.push(r.assignTexture(e, "bumpMap", i.bumpTexture)), Promise.all(s);
  }
};
H(Qe, "GLTFMaterialsBumpExtension");
var Se = Qe, Ze = class Ze2 {
  constructor(t) {
    this.parser = t, this.name = g.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(t) {
    let r = this.parser.json.materials[t];
    return !r.extensions || !r.extensions[this.name] ? null : Rl;
  }
  extendMaterialParams(t, e) {
    let r = this.parser, n = r.json.materials[t];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let s = [], i = n.extensions[this.name];
    return i.anisotropyStrength !== void 0 && (e.anisotropy = i.anisotropyStrength), i.anisotropyRotation !== void 0 && (e.anisotropyRotation = i.anisotropyRotation), i.anisotropyTexture !== void 0 && s.push(r.assignTexture(e, "anisotropyMap", i.anisotropyTexture)), Promise.all(s);
  }
};
H(Ze, "GLTFMaterialsAnisotropyExtension");
var ye = Ze, Je = class Je2 {
  constructor(t) {
    this.parser = t, this.name = g.KHR_TEXTURE_BASISU;
  }
  loadTexture(t) {
    let e = this.parser, r = e.json, n = r.textures[t];
    if (!n.extensions || !n.extensions[this.name]) return null;
    let s = n.extensions[this.name], i = e.options.ktx2Loader;
    if (!i) {
      if (r.extensionsRequired && r.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return e.loadTextureImage(t, s.source, i);
  }
};
H(Je, "GLTFTextureBasisUExtension");
var we = Je, $e = class $e2 {
  constructor(t) {
    this.parser = t, this.name = g.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(t) {
    let e = this.name, r = this.parser, n = r.json, s = n.textures[t];
    if (!s.extensions || !s.extensions[e]) return null;
    let i = s.extensions[e], a2 = n.images[i.source], o = r.textureLoader;
    if (a2.uri) {
      let c = r.options.manager.getHandler(a2.uri);
      c !== null && (o = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return r.loadTextureImage(t, i.source, o);
      if (n.extensionsRequired && n.extensionsRequired.indexOf(e) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return r.loadTexture(t);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(t) {
      let e = new Image();
      e.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", e.onload = e.onerror = function() {
        t(e.height === 1);
      };
    })), this.isSupported;
  }
};
H($e, "GLTFTextureWebPExtension");
var Ne = $e, et = class et2 {
  constructor(t) {
    this.parser = t, this.name = g.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(t) {
    let e = this.name, r = this.parser, n = r.json, s = n.textures[t];
    if (!s.extensions || !s.extensions[e]) return null;
    let i = s.extensions[e], a2 = n.images[i.source], o = r.textureLoader;
    if (a2.uri) {
      let c = r.options.manager.getHandler(a2.uri);
      c !== null && (o = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return r.loadTextureImage(t, i.source, o);
      if (n.extensionsRequired && n.extensionsRequired.indexOf(e) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return r.loadTexture(t);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(t) {
      let e = new Image();
      e.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", e.onload = e.onerror = function() {
        t(e.height === 1);
      };
    })), this.isSupported;
  }
};
H(et, "GLTFTextureAVIFExtension");
var be = et, tt = class tt2 {
  constructor(t) {
    this.name = g.EXT_MESHOPT_COMPRESSION, this.parser = t;
  }
  loadBufferView(t) {
    let e = this.parser.json, r = e.bufferViews[t];
    if (r.extensions && r.extensions[this.name]) {
      let n = r.extensions[this.name], s = this.parser.getDependency("buffer", n.buffer), i = this.parser.options.meshoptDecoder;
      if (!i || !i.supported) {
        if (e.extensionsRequired && e.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(a2) {
        let o = n.byteOffset || 0, c = n.byteLength || 0, l = n.count, u = n.byteStride, f = new Uint8Array(a2, o, c);
        return i.decodeGltfBufferAsync ? i.decodeGltfBufferAsync(l, u, f, n.mode, n.filter).then(function(d) {
          return d.buffer;
        }) : i.ready.then(function() {
          let d = new ArrayBuffer(l * u);
          return i.decodeGltfBuffer(new Uint8Array(d), l, u, f, n.mode, n.filter), d;
        });
      });
    } else return null;
  }
};
H(tt, "GLTFMeshoptCompression");
var Me = tt, nt = class nt2 {
  constructor(t) {
    this.name = g.EXT_MESH_GPU_INSTANCING, this.parser = t;
  }
  createNodeMesh(t) {
    let e = this.parser.json, r = e.nodes[t];
    if (!r.extensions || !r.extensions[this.name] || r.mesh === void 0) return null;
    let n = e.meshes[r.mesh];
    for (let c of n.primitives) if (c.mode !== S.TRIANGLES && c.mode !== S.TRIANGLE_STRIP && c.mode !== S.TRIANGLE_FAN && c.mode !== void 0) return null;
    let i = r.extensions[this.name].attributes, a2 = [], o = {};
    for (let c in i) a2.push(this.parser.getDependency("accessor", i[c]).then((l) => (o[c] = l, o[c])));
    return a2.length < 1 ? null : (a2.push(this.parser.createNodeMesh(t)), Promise.all(a2).then((c) => {
      let l = c.pop(), u = l.isGroup ? l.children : [l], f = c[0].count, d = [];
      for (let A of u) {
        let R = new Vt(), m = new I(), T = new En(), E = new I(1, 1, 1), x = new ml(A.geometry, A.material, f);
        for (let _ = 0; _ < f; _++) o.TRANSLATION && m.fromBufferAttribute(o.TRANSLATION, _), o.ROTATION && T.fromBufferAttribute(o.ROTATION, _), o.SCALE && E.fromBufferAttribute(o.SCALE, _), x.setMatrixAt(_, R.compose(m, T, E));
        for (let _ in o) if (_ === "_COLOR_0") {
          let N = o[_];
          x.instanceColor = new Es(N.array, N.itemSize, N.normalized);
        } else _ !== "TRANSLATION" && _ !== "ROTATION" && _ !== "SCALE" && A.geometry.setAttribute(_, o[_]);
        fe$1.prototype.copy.call(x, A), this.parser.assignFinalMaterial(x), d.push(x);
      }
      return l.isGroup ? (l.clear(), l.add(...d), l) : d[0];
    }));
  }
};
H(nt, "GLTFMeshGpuInstancing");
var Ie = nt, tn = "glTF", K = 12, Zt = { JSON: 1313821514, BIN: 5130562 }, st = class st2 {
  constructor(t) {
    this.name = g.KHR_BINARY_GLTF, this.content = null, this.body = null;
    let e = new DataView(t, 0, K), r = new TextDecoder();
    if (this.header = { magic: r.decode(new Uint8Array(t.slice(0, 4))), version: e.getUint32(4, true), length: e.getUint32(8, true) }, this.header.magic !== tn) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    let n = this.header.length - K, s = new DataView(t, K), i = 0;
    for (; i < n; ) {
      let a2 = s.getUint32(i, true);
      i += 4;
      let o = s.getUint32(i, true);
      if (i += 4, o === Zt.JSON) {
        let c = new Uint8Array(t, K + i, a2);
        this.content = r.decode(c);
      } else if (o === Zt.BIN) {
        let c = K + i;
        this.body = t.slice(c, c + a2);
      }
      i += a2;
    }
    if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
};
H(st, "GLTFBinaryExtension");
var Le = st, rt = class rt2 {
  constructor(t, e) {
    if (!e) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = g.KHR_DRACO_MESH_COMPRESSION, this.json = t, this.dracoLoader = e, this.dracoLoader.preload();
  }
  decodePrimitive(t, e) {
    let r = this.json, n = this.dracoLoader, s = t.extensions[this.name].bufferView, i = t.extensions[this.name].attributes, a2 = {}, o = {}, c = {};
    for (let l in i) {
      let u = ke[l] || l.toLowerCase();
      a2[u] = i[l];
    }
    for (let l in t.attributes) {
      let u = ke[l] || l.toLowerCase();
      if (i[l] !== void 0) {
        let f = r.accessors[t.attributes[l]], d = v[f.componentType];
        c[u] = d.name, o[u] = f.normalized === true;
      }
    }
    return e.getDependency("bufferView", s).then(function(l) {
      return new Promise(function(u, f) {
        n.decodeDracoFile(l, function(d) {
          for (let A in d.attributes) {
            let R = d.attributes[A], m = o[A];
            m !== void 0 && (R.normalized = m);
          }
          u(d);
        }, a2, c, ri, f);
      });
    });
  }
};
H(rt, "GLTFDracoMeshCompressionExtension");
var Oe = rt, it = class it2 {
  constructor() {
    this.name = g.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(t, e) {
    return (e.texCoord === void 0 || e.texCoord === t.channel) && e.offset === void 0 && e.rotation === void 0 && e.scale === void 0 || (t = t.clone(), e.texCoord !== void 0 && (t.channel = e.texCoord), e.offset !== void 0 && t.offset.fromArray(e.offset), e.rotation !== void 0 && (t.rotation = e.rotation), e.scale !== void 0 && t.repeat.fromArray(e.scale), t.needsUpdate = true), t;
  }
};
H(it, "GLTFTextureTransformExtension");
var Ce = it, ot = class ot2 {
  constructor() {
    this.name = g.KHR_MESH_QUANTIZATION;
  }
};
H(ot, "GLTFMeshQuantizationExtension");
var De = ot, at = class at2 extends ci {
  constructor(t, e, r, n) {
    super(t, e, r, n);
  }
  copySampleValue_(t) {
    let e = this.resultBuffer, r = this.sampleValues, n = this.valueSize, s = t * n * 3 + n;
    for (let i = 0; i !== n; i++) e[i] = r[s + i];
    return e;
  }
  interpolate_(t, e, r, n) {
    let s = this.resultBuffer, i = this.sampleValues, a2 = this.valueSize, o = a2 * 2, c = a2 * 3, l = n - e, u = (r - e) / l, f = u * u, d = f * u, A = t * c, R = A - c, m = -2 * d + 3 * f, T = d - f, E = 1 - m, x = T - f + u;
    for (let _ = 0; _ !== a2; _++) {
      let N = i[R + _ + a2], I2 = i[R + _ + o] * l, y = i[A + _ + a2], U = i[A + _] * l;
      s[_] = E * N + x * I2 + m * y + T * U;
    }
    return s;
  }
};
H(at, "GLTFCubicSplineInterpolant");
var q = at, sn = new En(), ct = class ct2 extends q {
  interpolate_(t, e, r, n) {
    let s = super.interpolate_(t, e, r, n);
    return sn.fromArray(s).normalize().toArray(s), s;
  }
};
H(ct, "GLTFCubicSplineQuaternionInterpolant");
var Pe = ct, S = { POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6 }, v = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array }, Jt = { 9728: Fe$1, 9729: en$1, 9984: yf, 9985: Oa, 9986: Hs, 9987: Wn }, $t = { 33071: zn, 33648: Nr, 10497: Ur }, ue = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, ke = { POSITION: "position", NORMAL: "normal", TANGENT: "tangent", TEXCOORD_0: "uv", TEXCOORD_1: "uv1", TEXCOORD_2: "uv2", TEXCOORD_3: "uv3", COLOR_0: "color", WEIGHTS_0: "skinWeight", JOINTS_0: "skinIndex" }, C = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" }, rn = { CUBICSPLINE: void 0, LINEAR: Fr, STEP: ps }, le = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function on(h) {
  return h.DefaultMaterial === void 0 && (h.DefaultMaterial = new ea({ color: 16777215, emissive: 0, metalness: 1, roughness: 1, transparent: false, depthTest: true, side: Sn })), h.DefaultMaterial;
}
H(on, "createDefaultMaterial");
function P(h, t, e) {
  for (let r in e.extensions) h[r] === void 0 && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[r] = e.extensions[r]);
}
H(P, "addUnknownExtensionsToUserData");
function M(h, t) {
  t.extras !== void 0 && (typeof t.extras == "object" ? Object.assign(h.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
}
H(M, "assignExtrasToUserData");
function an(h, t, e) {
  let r = false, n = false, s = false;
  for (let c = 0, l = t.length; c < l; c++) {
    let u = t[c];
    if (u.POSITION !== void 0 && (r = true), u.NORMAL !== void 0 && (n = true), u.COLOR_0 !== void 0 && (s = true), r && n && s) break;
  }
  if (!r && !n && !s) return Promise.resolve(h);
  let i = [], a2 = [], o = [];
  for (let c = 0, l = t.length; c < l; c++) {
    let u = t[c];
    if (r) {
      let f = u.POSITION !== void 0 ? e.getDependency("accessor", u.POSITION) : h.attributes.position;
      i.push(f);
    }
    if (n) {
      let f = u.NORMAL !== void 0 ? e.getDependency("accessor", u.NORMAL) : h.attributes.normal;
      a2.push(f);
    }
    if (s) {
      let f = u.COLOR_0 !== void 0 ? e.getDependency("accessor", u.COLOR_0) : h.attributes.color;
      o.push(f);
    }
  }
  return Promise.all([Promise.all(i), Promise.all(a2), Promise.all(o)]).then(function(c) {
    let l = c[0], u = c[1], f = c[2];
    return r && (h.morphAttributes.position = l), n && (h.morphAttributes.normal = u), s && (h.morphAttributes.color = f), h.morphTargetsRelative = true, h;
  });
}
H(an, "addMorphTargets");
function cn(h, t) {
  if (h.updateMorphTargets(), t.weights !== void 0) for (let e = 0, r = t.weights.length; e < r; e++) h.morphTargetInfluences[e] = t.weights[e];
  if (t.extras && Array.isArray(t.extras.targetNames)) {
    let e = t.extras.targetNames;
    if (h.morphTargetInfluences.length === e.length) {
      h.morphTargetDictionary = {};
      for (let r = 0, n = e.length; r < n; r++) h.morphTargetDictionary[e[r]] = r;
    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
H(cn, "updateMorphTargets");
function un(h) {
  let t, e = h.extensions && h.extensions[g.KHR_DRACO_MESH_COMPRESSION];
  if (e ? t = "draco:" + e.bufferView + ":" + e.indices + ":" + fe(e.attributes) : t = h.indices + ":" + fe(h.attributes) + ":" + h.mode, h.targets !== void 0) for (let r = 0, n = h.targets.length; r < n; r++) t += ":" + fe(h.targets[r]);
  return t;
}
H(un, "createPrimitiveKey");
function fe(h) {
  let t = "", e = Object.keys(h).sort();
  for (let r = 0, n = e.length; r < n; r++) t += e[r] + ":" + h[e[r]] + ";";
  return t;
}
H(fe, "createAttributesKey");
function He(h) {
  switch (h) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
H(He, "getNormalizedComponentScale");
function ln(h) {
  return h.search(/\.jpe?g($|\?)/i) > 0 || h.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : h.search(/\.webp($|\?)/i) > 0 || h.search(/^data\:image\/webp/) === 0 ? "image/webp" : h.search(/\.ktx2($|\?)/i) > 0 || h.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
H(ln, "getImageURIMimeType");
var fn = new Vt(), ut = class ut2 {
  constructor(t = {}, e = {}) {
    this.json = t, this.extensions = {}, this.plugins = {}, this.options = e, this.cache = new nn(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let r = false, n = -1, s = false, i = -1;
    if (typeof navigator < "u") {
      let a2 = navigator.userAgent;
      r = /^((?!chrome|android).)*safari/i.test(a2) === true;
      let o = a2.match(/Version\/(\d+)/);
      n = r && o ? parseInt(o[1], 10) : -1, s = a2.indexOf("Firefox") > -1, i = s ? a2.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || r && n < 17 || s && i < 98 ? this.textureLoader = new Ul(this.options.manager) : this.textureLoader = new Wl(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Ll(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
  }
  setExtensions(t) {
    this.extensions = t;
  }
  setPlugins(t) {
    this.plugins = t;
  }
  parse(t, e) {
    let r = this, n = this.json, s = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(i) {
      return i._markDefs && i._markDefs();
    }), Promise.all(this._invokeAll(function(i) {
      return i.beforeRoot && i.beforeRoot();
    })).then(function() {
      return Promise.all([r.getDependencies("scene"), r.getDependencies("animation"), r.getDependencies("camera")]);
    }).then(function(i) {
      let a2 = { scene: i[0][n.scene || 0], scenes: i[0], animations: i[1], cameras: i[2], asset: n.asset, parser: r, userData: {} };
      return P(s, a2, n), M(a2, n), Promise.all(r._invokeAll(function(o) {
        return o.afterRoot && o.afterRoot(a2);
      })).then(function() {
        for (let o of a2.scenes) o.updateMatrixWorld();
        t(a2);
      });
    }).catch(e);
  }
  _markDefs() {
    let t = this.json.nodes || [], e = this.json.skins || [], r = this.json.meshes || [];
    for (let n = 0, s = e.length; n < s; n++) {
      let i = e[n].joints;
      for (let a2 = 0, o = i.length; a2 < o; a2++) t[i[a2]].isBone = true;
    }
    for (let n = 0, s = t.length; n < s; n++) {
      let i = t[n];
      i.mesh !== void 0 && (this._addNodeRef(this.meshCache, i.mesh), i.skin !== void 0 && (r[i.mesh].isSkinnedMesh = true)), i.camera !== void 0 && this._addNodeRef(this.cameraCache, i.camera);
    }
  }
  _addNodeRef(t, e) {
    e !== void 0 && (t.refs[e] === void 0 && (t.refs[e] = t.uses[e] = 0), t.refs[e]++);
  }
  _getNodeRef(t, e, r) {
    if (t.refs[e] <= 1) return r;
    let n = r.clone(), s = H((i, a2) => {
      let o = this.associations.get(i);
      o != null && this.associations.set(a2, o);
      for (let [c, l] of i.children.entries()) s(l, a2.children[c]);
    }, "updateMappings");
    return s(r, n), n.name += "_instance_" + t.uses[e]++, n;
  }
  _invokeOne(t) {
    let e = Object.values(this.plugins);
    e.push(this);
    for (let r = 0; r < e.length; r++) {
      let n = t(e[r]);
      if (n) return n;
    }
    return null;
  }
  _invokeAll(t) {
    let e = Object.values(this.plugins);
    e.unshift(this);
    let r = [];
    for (let n = 0; n < e.length; n++) {
      let s = t(e[n]);
      s && r.push(s);
    }
    return r;
  }
  getDependency(t, e) {
    let r = t + ":" + e, n = this.cache.get(r);
    if (!n) {
      switch (t) {
        case "scene":
          n = this.loadScene(e);
          break;
        case "node":
          n = this._invokeOne(function(s) {
            return s.loadNode && s.loadNode(e);
          });
          break;
        case "mesh":
          n = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(e);
          });
          break;
        case "accessor":
          n = this.loadAccessor(e);
          break;
        case "bufferView":
          n = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(e);
          });
          break;
        case "buffer":
          n = this.loadBuffer(e);
          break;
        case "material":
          n = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(e);
          });
          break;
        case "texture":
          n = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(e);
          });
          break;
        case "skin":
          n = this.loadSkin(e);
          break;
        case "animation":
          n = this._invokeOne(function(s) {
            return s.loadAnimation && s.loadAnimation(e);
          });
          break;
        case "camera":
          n = this.loadCamera(e);
          break;
        default:
          if (n = this._invokeOne(function(s) {
            return s != this && s.getDependency && s.getDependency(t, e);
          }), !n) throw new Error("Unknown type: " + t);
          break;
      }
      this.cache.add(r, n);
    }
    return n;
  }
  getDependencies(t) {
    let e = this.cache.get(t);
    if (!e) {
      let r = this, n = this.json[t + (t === "mesh" ? "es" : "s")] || [];
      e = Promise.all(n.map(function(s, i) {
        return r.getDependency(t, i);
      })), this.cache.add(t, e);
    }
    return e;
  }
  loadBuffer(t) {
    let e = this.json.buffers[t], r = this.fileLoader;
    if (e.type && e.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + e.type + " buffer type is not supported.");
    if (e.uri === void 0 && t === 0) return Promise.resolve(this.extensions[g.KHR_BINARY_GLTF].body);
    let n = this.options;
    return new Promise(function(s, i) {
      r.load(Hl.resolveURL(e.uri, n.path), s, void 0, function() {
        i(new Error('THREE.GLTFLoader: Failed to load buffer "' + e.uri + '".'));
      });
    });
  }
  loadBufferView(t) {
    let e = this.json.bufferViews[t];
    return this.getDependency("buffer", e.buffer).then(function(r) {
      let n = e.byteLength || 0, s = e.byteOffset || 0;
      return r.slice(s, s + n);
    });
  }
  loadAccessor(t) {
    let e = this, r = this.json, n = this.json.accessors[t];
    if (n.bufferView === void 0 && n.sparse === void 0) {
      let i = ue[n.type], a2 = v[n.componentType], o = n.normalized === true, c = new a2(n.count * i);
      return Promise.resolve(new ve$1(c, i, o));
    }
    let s = [];
    return n.bufferView !== void 0 ? s.push(this.getDependency("bufferView", n.bufferView)) : s.push(null), n.sparse !== void 0 && (s.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(s).then(function(i) {
      let a2 = i[0], o = ue[n.type], c = v[n.componentType], l = c.BYTES_PER_ELEMENT, u = l * o, f = n.byteOffset || 0, d = n.bufferView !== void 0 ? r.bufferViews[n.bufferView].byteStride : void 0, A = n.normalized === true, R, m;
      if (d && d !== u) {
        let T = Math.floor(f / d), E = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + T + ":" + n.count, x = e.cache.get(E);
        x || (R = new c(a2, T * d, n.count * d / l), x = new ul(R, d / l), e.cache.add(E, x)), m = new dl(x, o, f % d / l, A);
      } else a2 === null ? R = new c(n.count * o) : R = new c(a2, f, n.count * o), m = new ve$1(R, o, A);
      if (n.sparse !== void 0) {
        let T = ue.SCALAR, E = v[n.sparse.indices.componentType], x = n.sparse.indices.byteOffset || 0, _ = n.sparse.values.byteOffset || 0, N = new E(i[1], x, n.sparse.count * T), I2 = new c(i[2], _, n.sparse.count * o);
        a2 !== null && (m = new ve$1(m.array.slice(), m.itemSize, m.normalized)), m.normalized = false;
        for (let y = 0, U = N.length; y < U; y++) {
          let L = N[y];
          if (m.setX(L, I2[y * o]), o >= 2 && m.setY(L, I2[y * o + 1]), o >= 3 && m.setZ(L, I2[y * o + 2]), o >= 4 && m.setW(L, I2[y * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        m.normalized = A;
      }
      return m;
    });
  }
  loadTexture(t) {
    let e = this.json, r = this.options, s = e.textures[t].source, i = e.images[s], a2 = this.textureLoader;
    if (i.uri) {
      let o = r.manager.getHandler(i.uri);
      o !== null && (a2 = o);
    }
    return this.loadTextureImage(t, s, a2);
  }
  loadTextureImage(t, e, r) {
    let n = this, s = this.json, i = s.textures[t], a2 = s.images[e], o = (a2.uri || a2.bufferView) + ":" + i.sampler;
    if (this.textureCache[o]) return this.textureCache[o];
    let c = this.loadImageSource(e, r).then(function(l) {
      l.flipY = false, l.name = i.name || a2.name || "", l.name === "" && typeof a2.uri == "string" && a2.uri.startsWith("data:image/") === false && (l.name = a2.uri);
      let f = (s.samplers || {})[i.sampler] || {};
      return l.magFilter = Jt[f.magFilter] || en$1, l.minFilter = Jt[f.minFilter] || Wn, l.wrapS = $t[f.wrapS] || Ur, l.wrapT = $t[f.wrapT] || Ur, l.generateMipmaps = !l.isCompressedTexture && l.minFilter !== Fe$1 && l.minFilter !== en$1, n.associations.set(l, { textures: t }), l;
    }).catch(function() {
      return null;
    });
    return this.textureCache[o] = c, c;
  }
  loadImageSource(t, e) {
    let r = this, n = this.json, s = this.options;
    if (this.sourceCache[t] !== void 0) return this.sourceCache[t].then((u) => u.clone());
    let i = n.images[t], a2 = self.URL || self.webkitURL, o = i.uri || "", c = false;
    if (i.bufferView !== void 0) o = r.getDependency("bufferView", i.bufferView).then(function(u) {
      c = true;
      let f = new Blob([u], { type: i.mimeType });
      return o = a2.createObjectURL(f), o;
    });
    else if (i.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + t + " is missing URI and bufferView");
    let l = Promise.resolve(o).then(function(u) {
      return new Promise(function(f, d) {
        let A = f;
        e.isImageBitmapLoader === true && (A = H(function(R) {
          let m = new we$1(R);
          m.needsUpdate = true, f(m);
        }, "onLoad")), e.load(Hl.resolveURL(u, s.path), A, void 0, d);
      });
    }).then(function(u) {
      return c === true && a2.revokeObjectURL(o), M(u, i), u.userData.mimeType = i.mimeType || ln(i.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", o), u;
    });
    return this.sourceCache[t] = l, l;
  }
  assignTexture(t, e, r, n) {
    let s = this;
    return this.getDependency("texture", r.index).then(function(i) {
      if (!i) return null;
      if (r.texCoord !== void 0 && r.texCoord > 0 && (i = i.clone(), i.channel = r.texCoord), s.extensions[g.KHR_TEXTURE_TRANSFORM]) {
        let a2 = r.extensions !== void 0 ? r.extensions[g.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a2) {
          let o = s.associations.get(i);
          i = s.extensions[g.KHR_TEXTURE_TRANSFORM].extendTexture(i, a2), s.associations.set(i, o);
        }
      }
      return n !== void 0 && (i.colorSpace = n), t[e] = i, i;
    });
  }
  assignFinalMaterial(t) {
    let e = t.geometry, r = t.material, n = e.attributes.tangent === void 0, s = e.attributes.color !== void 0, i = e.attributes.normal === void 0;
    if (t.isPoints) {
      let a2 = "PointsMaterial:" + r.uuid, o = this.cache.get(a2);
      o || (o = new Yr(), nn$1.prototype.copy.call(o, r), o.color.copy(r.color), o.map = r.map, o.sizeAttenuation = false, this.cache.add(a2, o)), r = o;
    } else if (t.isLine) {
      let a2 = "LineBasicMaterial:" + r.uuid, o = this.cache.get(a2);
      o || (o = new Ts(), nn$1.prototype.copy.call(o, r), o.color.copy(r.color), o.map = r.map, this.cache.add(a2, o)), r = o;
    }
    if (n || s || i) {
      let a2 = "ClonedMaterial:" + r.uuid + ":";
      n && (a2 += "derivative-tangents:"), s && (a2 += "vertex-colors:"), i && (a2 += "flat-shading:");
      let o = this.cache.get(a2);
      o || (o = r.clone(), s && (o.vertexColors = true), i && (o.flatShading = true), n && (o.normalScale && (o.normalScale.y *= -1), o.clearcoatNormalScale && (o.clearcoatNormalScale.y *= -1)), this.cache.add(a2, o), this.associations.set(o, this.associations.get(r))), r = o;
    }
    t.material = r;
  }
  getMaterialType() {
    return ea;
  }
  loadMaterial(t) {
    let e = this, r = this.json, n = this.extensions, s = r.materials[t], i, a2 = {}, o = s.extensions || {}, c = [];
    if (o[g.KHR_MATERIALS_UNLIT]) {
      let u = n[g.KHR_MATERIALS_UNLIT];
      i = u.getMaterialType(), c.push(u.extendParams(a2, s, e));
    } else {
      let u = s.pbrMetallicRoughness || {};
      if (a2.color = new Ft(1, 1, 1), a2.opacity = 1, Array.isArray(u.baseColorFactor)) {
        let f = u.baseColorFactor;
        a2.color.setRGB(f[0], f[1], f[2], ri), a2.opacity = f[3];
      }
      u.baseColorTexture !== void 0 && c.push(e.assignTexture(a2, "map", u.baseColorTexture, Ve$1)), a2.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a2.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(e.assignTexture(a2, "metalnessMap", u.metallicRoughnessTexture)), c.push(e.assignTexture(a2, "roughnessMap", u.metallicRoughnessTexture))), i = this._invokeOne(function(f) {
        return f.getMaterialType && f.getMaterialType(t);
      }), c.push(Promise.all(this._invokeAll(function(f) {
        return f.extendMaterialParams && f.extendMaterialParams(t, a2);
      })));
    }
    s.doubleSided === true && (a2.side = cn$1);
    let l = s.alphaMode || le.OPAQUE;
    if (l === le.BLEND ? (a2.transparent = true, a2.depthWrite = false) : (a2.transparent = false, l === le.MASK && (a2.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && i !== vs && (c.push(e.assignTexture(a2, "normalMap", s.normalTexture)), a2.normalScale = new ot$1(1, 1), s.normalTexture.scale !== void 0)) {
      let u = s.normalTexture.scale;
      a2.normalScale.set(u, u);
    }
    if (s.occlusionTexture !== void 0 && i !== vs && (c.push(e.assignTexture(a2, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (a2.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && i !== vs) {
      let u = s.emissiveFactor;
      a2.emissive = new Ft().setRGB(u[0], u[1], u[2], ri);
    }
    return s.emissiveTexture !== void 0 && i !== vs && c.push(e.assignTexture(a2, "emissiveMap", s.emissiveTexture, Ve$1)), Promise.all(c).then(function() {
      let u = new i(a2);
      return s.name && (u.name = s.name), M(u, s), e.associations.set(u, { materials: t }), s.extensions && P(n, u, s), u;
    });
  }
  createUniqueName(t) {
    let e = ae.sanitizeNodeName(t || "");
    return e in this.nodeNamesUsed ? e + "_" + ++this.nodeNamesUsed[e] : (this.nodeNamesUsed[e] = 0, e);
  }
  loadGeometries(t) {
    let e = this, r = this.extensions, n = this.primitiveCache;
    function s(a2) {
      return r[g.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a2, e).then(function(o) {
        return en(o, a2, e);
      });
    }
    H(s, "createDracoPrimitive");
    let i = [];
    for (let a2 = 0, o = t.length; a2 < o; a2++) {
      let c = t[a2], l = un(c), u = n[l];
      if (u) i.push(u.promise);
      else {
        let f;
        c.extensions && c.extensions[g.KHR_DRACO_MESH_COMPRESSION] ? f = s(c) : f = en(new pe$1(), c, e), n[l] = { primitive: c, promise: f }, i.push(f);
      }
    }
    return Promise.all(i);
  }
  loadMesh(t) {
    let e = this, r = this.json, n = this.extensions, s = r.meshes[t], i = s.primitives, a2 = [];
    for (let o = 0, c = i.length; o < c; o++) {
      let l = i[o].material === void 0 ? on(this.cache) : this.getDependency("material", i[o].material);
      a2.push(l);
    }
    return a2.push(e.loadGeometries(i)), Promise.all(a2).then(function(o) {
      let c = o.slice(0, o.length - 1), l = o[o.length - 1], u = [];
      for (let d = 0, A = l.length; d < A; d++) {
        let R = l[d], m = i[d], T, E = c[d];
        if (m.mode === S.TRIANGLES || m.mode === S.TRIANGLE_STRIP || m.mode === S.TRIANGLE_FAN || m.mode === void 0) T = s.isSkinnedMesh === true ? new fl(R, E) : new ye$1(R, E), T.isSkinnedMesh === true && T.normalizeSkinWeights(), m.mode === S.TRIANGLE_STRIP ? T.geometry = X(T.geometry, wp) : m.mode === S.TRIANGLE_FAN && (T.geometry = X(T.geometry, Cp));
        else if (m.mode === S.LINES) T = new qr(R, E);
        else if (m.mode === S.LINE_STRIP) T = new As(R, E);
        else if (m.mode === S.LINE_LOOP) T = new xl(R, E);
        else if (m.mode === S.POINTS) T = new yl(R, E);
        else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(T.geometry.morphAttributes).length > 0 && cn(T, s), T.name = e.createUniqueName(s.name || "mesh_" + t), M(T, s), m.extensions && P(n, T, m), e.assignFinalMaterial(T), u.push(T);
      }
      for (let d = 0, A = u.length; d < A; d++) e.associations.set(u[d], { meshes: t, primitives: d });
      if (u.length === 1) return s.extensions && P(n, u[0], s), u[0];
      let f = new ti();
      s.extensions && P(n, f, s), e.associations.set(f, { meshes: t });
      for (let d = 0, A = u.length; d < A; d++) f.add(u[d]);
      return f;
    });
  }
  loadCamera(t) {
    let e, r = this.json.cameras[t], n = r[r.type];
    if (!n) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return r.type === "perspective" ? e = new Te$1(Zp.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : r.type === "orthographic" && (e = new ks(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), r.name && (e.name = this.createUniqueName(r.name)), M(e, r), Promise.resolve(e);
  }
  loadSkin(t) {
    let e = this.json.skins[t], r = [];
    for (let n = 0, s = e.joints.length; n < s; n++) r.push(this._loadNodeShallow(e.joints[n]));
    return e.inverseBindMatrices !== void 0 ? r.push(this.getDependency("accessor", e.inverseBindMatrices)) : r.push(null), Promise.all(r).then(function(n) {
      let s = n.pop(), i = n, a2 = [], o = [];
      for (let c = 0, l = i.length; c < l; c++) {
        let u = i[c];
        if (u) {
          a2.push(u);
          let f = new Vt();
          s !== null && f.fromArray(s.array, c * 16), o.push(f);
        } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', e.joints[c]);
      }
      return new pl(a2, o);
    });
  }
  loadAnimation(t) {
    let e = this.json, r = this, n = e.animations[t], s = n.name ? n.name : "animation_" + t, i = [], a2 = [], o = [], c = [], l = [];
    for (let u = 0, f = n.channels.length; u < f; u++) {
      let d = n.channels[u], A = n.samplers[d.sampler], R = d.target, m = R.node, T = n.parameters !== void 0 ? n.parameters[A.input] : A.input, E = n.parameters !== void 0 ? n.parameters[A.output] : A.output;
      R.node !== void 0 && (i.push(this.getDependency("node", m)), a2.push(this.getDependency("accessor", T)), o.push(this.getDependency("accessor", E)), c.push(A), l.push(R));
    }
    return Promise.all([Promise.all(i), Promise.all(a2), Promise.all(o), Promise.all(c), Promise.all(l)]).then(function(u) {
      let f = u[0], d = u[1], A = u[2], R = u[3], m = u[4], T = [];
      for (let E = 0, x = f.length; E < x; E++) {
        let _ = f[E], N = d[E], I2 = A[E], y = R[E], U = m[E];
        if (_ === void 0) continue;
        _.updateMatrix && _.updateMatrix();
        let L = r._createAnimationTracks(_, N, I2, y, U);
        if (L) for (let W = 0; W < L.length; W++) T.push(L[W]);
      }
      return new Pl(s, void 0, T);
    });
  }
  createNodeMesh(t) {
    let e = this.json, r = this, n = e.nodes[t];
    return n.mesh === void 0 ? null : r.getDependency("mesh", n.mesh).then(function(s) {
      let i = r._getNodeRef(r.meshCache, n.mesh, s);
      return n.weights !== void 0 && i.traverse(function(a2) {
        if (a2.isMesh) for (let o = 0, c = n.weights.length; o < c; o++) a2.morphTargetInfluences[o] = n.weights[o];
      }), i;
    });
  }
  loadNode(t) {
    let e = this.json, r = this, n = e.nodes[t], s = r._loadNodeShallow(t), i = [], a2 = n.children || [];
    for (let c = 0, l = a2.length; c < l; c++) i.push(r.getDependency("node", a2[c]));
    let o = n.skin === void 0 ? Promise.resolve(null) : r.getDependency("skin", n.skin);
    return Promise.all([s, Promise.all(i), o]).then(function(c) {
      let l = c[0], u = c[1], f = c[2];
      f !== null && l.traverse(function(d) {
        d.isSkinnedMesh && d.bind(f, fn);
      });
      for (let d = 0, A = u.length; d < A; d++) l.add(u[d]);
      return l;
    });
  }
  _loadNodeShallow(t) {
    let e = this.json, r = this.extensions, n = this;
    if (this.nodeCache[t] !== void 0) return this.nodeCache[t];
    let s = e.nodes[t], i = s.name ? n.createUniqueName(s.name) : "", a2 = [], o = n._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(t);
    });
    return o && a2.push(o), s.camera !== void 0 && a2.push(n.getDependency("camera", s.camera).then(function(c) {
      return n._getNodeRef(n.cameraCache, s.camera, c);
    })), n._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(t);
    }).forEach(function(c) {
      a2.push(c);
    }), this.nodeCache[t] = Promise.all(a2).then(function(c) {
      let l;
      if (s.isBone === true ? l = new Gr() : c.length > 1 ? l = new ti() : c.length === 1 ? l = c[0] : l = new fe$1(), l !== c[0]) for (let u = 0, f = c.length; u < f; u++) l.add(c[u]);
      if (s.name && (l.userData.name = s.name, l.name = i), M(l, s), s.extensions && P(r, l, s), s.matrix !== void 0) {
        let u = new Vt();
        u.fromArray(s.matrix), l.applyMatrix4(u);
      } else s.translation !== void 0 && l.position.fromArray(s.translation), s.rotation !== void 0 && l.quaternion.fromArray(s.rotation), s.scale !== void 0 && l.scale.fromArray(s.scale);
      return n.associations.has(l) || n.associations.set(l, {}), n.associations.get(l).nodes = t, l;
    }), this.nodeCache[t];
  }
  loadScene(t) {
    let e = this.extensions, r = this.json.scenes[t], n = this, s = new ti();
    r.name && (s.name = n.createUniqueName(r.name)), M(s, r), r.extensions && P(e, s, r);
    let i = r.nodes || [], a2 = [];
    for (let o = 0, c = i.length; o < c; o++) a2.push(n.getDependency("node", i[o]));
    return Promise.all(a2).then(function(o) {
      for (let l = 0, u = o.length; l < u; l++) s.add(o[l]);
      let c = H((l) => {
        let u = /* @__PURE__ */ new Map();
        for (let [f, d] of n.associations) (f instanceof nn$1 || f instanceof we$1) && u.set(f, d);
        return l.traverse((f) => {
          let d = n.associations.get(f);
          d != null && u.set(f, d);
        }), u;
      }, "reduceAssociations");
      return n.associations = c(s), s;
    });
  }
  _createAnimationTracks(t, e, r, n, s) {
    let i = [], a2 = t.name ? t.name : t.uuid, o = [];
    C[s.path] === C.weights ? t.traverse(function(f) {
      f.morphTargetInfluences && o.push(f.name ? f.name : f.uuid);
    }) : o.push(a2);
    let c;
    switch (C[s.path]) {
      case C.weights:
        c = hi;
        break;
      case C.rotation:
        c = ui;
        break;
      case C.position:
      case C.scale:
        c = di;
        break;
      default:
        switch (r.itemSize) {
          case 1:
            c = hi;
            break;
          case 2:
          case 3:
          default:
            c = di;
            break;
        }
        break;
    }
    let l = n.interpolation !== void 0 ? rn[n.interpolation] : Fr, u = this._getArrayFromAccessor(r);
    for (let f = 0, d = o.length; f < d; f++) {
      let A = new c(o[f] + "." + C[s.path], e.array, u, l);
      n.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(A), i.push(A);
    }
    return i;
  }
  _getArrayFromAccessor(t) {
    let e = t.array;
    if (t.normalized) {
      let r = He(e.constructor), n = new Float32Array(e.length);
      for (let s = 0, i = e.length; s < i; s++) n[s] = e[s] * r;
      e = n;
    }
    return e;
  }
  _createCubicSplineTrackInterpolant(t) {
    t.createInterpolant = H(function(r) {
      let n = this instanceof ui ? Pe : q;
      return new n(this.times, this.values, this.getValueSize() / 3, r);
    }, "InterpolantFactoryMethodGLTFCubicSpline"), t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
  }
};
H(ut, "GLTFParser");
var Be = ut;
function dn(h, t, e) {
  let r = t.attributes, n = new Pe$1();
  if (r.POSITION !== void 0) {
    let a2 = e.json.accessors[r.POSITION], o = a2.min, c = a2.max;
    if (o !== void 0 && c !== void 0) {
      if (n.set(new I(o[0], o[1], o[2]), new I(c[0], c[1], c[2])), a2.normalized) {
        let l = He(v[a2.componentType]);
        n.min.multiplyScalar(l), n.max.multiplyScalar(l);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else return;
  let s = t.targets;
  if (s !== void 0) {
    let a2 = new I(), o = new I();
    for (let c = 0, l = s.length; c < l; c++) {
      let u = s[c];
      if (u.POSITION !== void 0) {
        let f = e.json.accessors[u.POSITION], d = f.min, A = f.max;
        if (d !== void 0 && A !== void 0) {
          if (o.setX(Math.max(Math.abs(d[0]), Math.abs(A[0]))), o.setY(Math.max(Math.abs(d[1]), Math.abs(A[1]))), o.setZ(Math.max(Math.abs(d[2]), Math.abs(A[2]))), f.normalized) {
            let R = He(v[f.componentType]);
            o.multiplyScalar(R);
          }
          a2.max(o);
        } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    n.expandByVector(a2);
  }
  h.boundingBox = n;
  let i = new Ae$1();
  n.getCenter(i.center), i.radius = n.min.distanceTo(n.max) / 2, h.boundingSphere = i;
}
H(dn, "computeBounds");
function en(h, t, e) {
  let r = t.attributes, n = [];
  function s(i, a2) {
    return e.getDependency("accessor", i).then(function(o) {
      h.setAttribute(a2, o);
    });
  }
  H(s, "assignAttributeAccessor");
  for (let i in r) {
    let a2 = ke[i] || i.toLowerCase();
    a2 in h.attributes || n.push(s(r[i], a2));
  }
  if (t.indices !== void 0 && !h.index) {
    let i = e.getDependency("accessor", t.indices).then(function(a2) {
      h.setIndex(a2);
    });
    n.push(i);
  }
  return qt.workingColorSpace !== ri && "COLOR_0" in r && console.warn('THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "'.concat(qt.workingColorSpace, '" not supported.')), M(h, t), dn(h, t, e), Promise.all(n).then(function() {
    return t.targets !== void 0 ? an(h, t.targets, e) : h;
  });
}
H(en, "addPrimitiveAttributes");
export {
  Qt as GLTFLoader
};
