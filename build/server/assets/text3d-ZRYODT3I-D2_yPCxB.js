import { e as Pe, k as kn, D as De, f as Oe, H, g as Ft, h as Pp, y as ye, v as vs, i as I, j as Vt, l as ot, p as vt$1, _ as _t, Z as Zp, q as Gl, A as Ae, E as Es, w as we, r as en, B as Bt$1, s as $t$1, t as cn, u as Os, x as ia$1, C as na$1, W as bf, X as Of, Y as Ht, a, G, F, a0 as p } from "./_virtual_netlify-server-DZKFn6bU.js";
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
a();
a();
function ba() {
  var h = /* @__PURE__ */ Object.create(null);
  function r(t, e) {
    var a2 = t.id, i = t.name, n = t.dependencies;
    n === void 0 && (n = []);
    var o = t.init;
    o === void 0 && (o = H(function() {
    }, "init"));
    var s = t.getTransferables;
    if (s === void 0 && (s = null), !h[a2]) try {
      n = n.map(function(u) {
        return u && u.isWorkerModule && (r(u, function(d) {
          if (d instanceof Error) throw d;
        }), u = h[u.id].value), u;
      }), o = f("<" + i + ">.init", o), s && (s = f("<" + i + ">.getTransferables", s));
      var l = null;
      typeof o == "function" ? l = o.apply(void 0, n) : console.error("worker module init function failed to rehydrate"), h[a2] = { id: a2, value: l, getTransferables: s }, e(l);
    } catch (u) {
      u && u.noLog || console.error(u), e(u);
    }
  }
  H(r, "registerModule");
  function c(t, e) {
    var a2, i = t.id, n = t.args;
    (!h[i] || typeof h[i].value != "function") && e(new Error("Worker module " + i + ": not found or its 'init' did not return a function"));
    try {
      var o = (a2 = h[i]).value.apply(a2, n);
      o && typeof o.then == "function" ? o.then(s, function(l) {
        return e(l instanceof Error ? l : new Error("" + l));
      }) : s(o);
    } catch (l) {
      e(l);
    }
    function s(l) {
      try {
        var u = h[i].getTransferables && h[i].getTransferables(l);
        (!u || !Array.isArray(u) || !u.length) && (u = void 0), e(l, u);
      } catch (d) {
        console.error(d), e(d);
      }
    }
    H(s, "handleResult");
  }
  H(c, "callModule");
  function f(t, e) {
    var a2 = void 0;
    self.troikaDefine = function(n) {
      return a2 = n;
    };
    var i = URL.createObjectURL(new Blob(["/** " + t.replace(/\*/g, "") + " **/\n\ntroikaDefine(\n" + e + "\n)"], { type: "application/javascript" }));
    try {
      importScripts(i);
    } catch (n) {
      console.error(n);
    }
    return URL.revokeObjectURL(i), delete self.troikaDefine, a2;
  }
  H(f, "rehydrate"), self.addEventListener("message", function(t) {
    var e = t.data, a2 = e.messageId, i = e.action, n = e.data;
    try {
      i === "registerModule" && r(n, function(o) {
        o instanceof Error ? postMessage({ messageId: a2, success: false, error: o.message }) : postMessage({ messageId: a2, success: true, result: { isCallable: typeof o == "function" } });
      }), i === "callModule" && c(n, function(o, s) {
        o instanceof Error ? postMessage({ messageId: a2, success: false, error: o.message }) : postMessage({ messageId: a2, success: true, result: o }, s || void 0);
      });
    } catch (o) {
      postMessage({ messageId: a2, success: false, error: o.stack });
    }
  });
}
H(ba, "workerBootstrap");
function xa(h) {
  var r = H(function() {
    for (var c = [], f = arguments.length; f--; ) c[f] = arguments[f];
    return r._getInitResult().then(function(t) {
      if (typeof t == "function") return t.apply(void 0, c);
      throw new Error("Worker module function was called but `init` did not return a callable function");
    });
  }, "moduleFunc");
  return r._getInitResult = function() {
    var c = h.dependencies, f = h.init;
    c = Array.isArray(c) ? c.map(function(e) {
      return e && (e = e.onMainThread || e, e._getInitResult && (e = e._getInitResult())), e;
    }) : [];
    var t = Promise.all(c).then(function(e) {
      return f.apply(null, e);
    });
    return r._getInitResult = function() {
      return t;
    }, t;
  }, r;
}
H(xa, "defineMainThreadModule");
var On = H(function() {
  var h = false;
  if (typeof window < "u" && typeof window.document < "u") try {
    var r = new Worker(URL.createObjectURL(new Blob([""], { type: "application/javascript" })));
    r.terminate(), h = true;
  } catch (c) {
    typeof p < "u" && p.env.NODE_ENV === "test" || console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [" + c.message + "]");
  }
  return On = H(function() {
    return h;
  }, "supportsWorkers"), h;
}, "supportsWorkers"), Ta = 0, ka = 0, Mr = false, Ct = /* @__PURE__ */ Object.create(null), Et = /* @__PURE__ */ Object.create(null), Ar = /* @__PURE__ */ Object.create(null);
function st(h) {
  if ((!h || typeof h.init != "function") && !Mr) throw new Error("requires `options.init` function");
  var r = h.dependencies, c = h.init, f = h.getTransferables, t = h.workerId, e = xa(h);
  t == null && (t = "#default");
  var a2 = "workerModule" + ++Ta, i = h.name || a2, n = null;
  r = r && r.map(function(s) {
    return typeof s == "function" && !s.workerModuleData && (Mr = true, s = st({ workerId: t, name: "<" + i + "> function dependency: " + s.name, init: "function(){return (\n" + Kt(s) + "\n)}" }), Mr = false), s && s.workerModuleData && (s = s.workerModuleData), s;
  });
  function o() {
    for (var s = [], l = arguments.length; l--; ) s[l] = arguments[l];
    if (!On()) return e.apply(void 0, s);
    if (!n) {
      n = Bn(t, "registerModule", o.workerModuleData);
      var u = H(function() {
        n = null, Et[t].delete(u);
      }, "unregister");
      (Et[t] || (Et[t] = /* @__PURE__ */ new Set())).add(u);
    }
    return n.then(function(d) {
      var g = d.isCallable;
      if (g) return Bn(t, "callModule", { id: a2, args: s });
      throw new Error("Worker module function was called but `init` did not return a callable function");
    });
  }
  return H(o, "moduleFunc"), o.workerModuleData = { isWorkerModule: true, id: a2, name: i, dependencies: r, init: Kt(c), getTransferables: f && Kt(f) }, o.onMainThread = e, o;
}
H(st, "defineWorkerModule");
function Rn(h) {
  Et[h] && Et[h].forEach(function(r) {
    r();
  }), Ct[h] && (Ct[h].terminate(), delete Ct[h]);
}
H(Rn, "terminateWorker");
function Kt(h) {
  var r = h.toString();
  return !/^function/.test(r) && /^\w+\s*\(/.test(r) && (r = "function " + r), r;
}
H(Kt, "stringifyFunction");
function _a(h) {
  var r = Ct[h];
  if (!r) {
    var c = Kt(ba);
    r = Ct[h] = new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: " + h.replace(/\*/g, "") + " **/\n\n;(" + c + ")()"], { type: "application/javascript" }))), r.onmessage = function(f) {
      var t = f.data, e = t.messageId, a2 = Ar[e];
      if (!a2) throw new Error("WorkerModule response with empty or unknown messageId");
      delete Ar[e], a2(t);
    };
  }
  return r;
}
H(_a, "getWorker");
function Bn(h, r, c) {
  return new Promise(function(f, t) {
    var e = ++ka;
    Ar[e] = function(a2) {
      a2.success ? f(a2.result) : t(new Error("Error in worker " + r + " call: " + a2.error));
    }, _a(h).postMessage({ messageId: e, action: r, data: c });
  });
}
H(Bn, "callWorker");
a();
function Dr() {
  var h = (function(r) {
    function c(I2, L, p2, T, M, C, _, N) {
      var B = 1 - _;
      N.x = B * B * I2 + 2 * B * _ * p2 + _ * _ * M, N.y = B * B * L + 2 * B * _ * T + _ * _ * C;
    }
    H(c, "pointOnQuadraticBezier");
    function f(I2, L, p2, T, M, C, _, N, B, z) {
      var J = 1 - B;
      z.x = J * J * J * I2 + 3 * J * J * B * p2 + 3 * J * B * B * M + B * B * B * _, z.y = J * J * J * L + 3 * J * J * B * T + 3 * J * B * B * C + B * B * B * N;
    }
    H(f, "pointOnCubicBezier");
    function t(I2, L) {
      for (var p2 = /([MLQCZ])([^MLQCZ]*)/g, T, M, C, _, N; T = p2.exec(I2); ) {
        var B = T[2].replace(/^\s*|\s*$/g, "").split(/[,\s]+/).map(function(z) {
          return parseFloat(z);
        });
        switch (T[1]) {
          case "M":
            _ = M = B[0], N = C = B[1];
            break;
          case "L":
            (B[0] !== _ || B[1] !== N) && L("L", _, N, _ = B[0], N = B[1]);
            break;
          case "Q": {
            L("Q", _, N, _ = B[2], N = B[3], B[0], B[1]);
            break;
          }
          case "C": {
            L("C", _, N, _ = B[4], N = B[5], B[0], B[1], B[2], B[3]);
            break;
          }
          case "Z":
            (_ !== M || N !== C) && L("L", _, N, M, C);
            break;
        }
      }
    }
    H(t, "forEachPathCommand");
    function e(I2, L, p2) {
      p2 === void 0 && (p2 = 16);
      var T = { x: 0, y: 0 };
      t(I2, function(M, C, _, N, B, z, J, ee, H2) {
        switch (M) {
          case "L":
            L(C, _, N, B);
            break;
          case "Q": {
            for (var V = C, ge = _, ce = 1; ce < p2; ce++) c(C, _, z, J, N, B, ce / (p2 - 1), T), L(V, ge, T.x, T.y), V = T.x, ge = T.y;
            break;
          }
          case "C": {
            for (var q = C, te = _, le = 1; le < p2; le++) f(C, _, z, J, ee, H2, N, B, le / (p2 - 1), T), L(q, te, T.x, T.y), q = T.x, te = T.y;
            break;
          }
        }
      });
    }
    H(e, "pathToLineSegments");
    var a2 = "precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", i = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}", n = /* @__PURE__ */ new WeakMap(), o = { premultipliedAlpha: false, preserveDrawingBuffer: true, antialias: false, depth: false };
    function s(I2, L) {
      var p2 = I2.getContext ? I2.getContext("webgl", o) : I2, T = n.get(p2);
      if (!T) {
        let J = function(q) {
          var te = C[q];
          if (!te && (te = C[q] = p2.getExtension(q), !te)) throw new Error(q + " not supported");
          return te;
        }, ee = function(q, te) {
          var le = p2.createShader(te);
          return p2.shaderSource(le, q), p2.compileShader(le), le;
        }, H$1 = function(q, te, le, X) {
          if (!_[q]) {
            var re = {}, $ = {}, G2 = p2.createProgram();
            p2.attachShader(G2, ee(te, p2.VERTEX_SHADER)), p2.attachShader(G2, ee(le, p2.FRAGMENT_SHADER)), p2.linkProgram(G2), _[q] = { program: G2, transaction: H(function(Q) {
              p2.useProgram(G2), Q({ setUniform: H(function(K, xe) {
                for (var ae = [], ie = arguments.length - 2; ie-- > 0; ) ae[ie] = arguments[ie + 2];
                var ue = $[xe] || ($[xe] = p2.getUniformLocation(G2, xe));
                p2["uniform" + K].apply(p2, [ue].concat(ae));
              }, "setUniform"), setAttribute: H(function(K, xe, ae, ie, ue) {
                var ve = re[K];
                ve || (ve = re[K] = { buf: p2.createBuffer(), loc: p2.getAttribLocation(G2, K), data: null }), p2.bindBuffer(p2.ARRAY_BUFFER, ve.buf), p2.vertexAttribPointer(ve.loc, xe, p2.FLOAT, false, 0, 0), p2.enableVertexAttribArray(ve.loc), M ? p2.vertexAttribDivisor(ve.loc, ie) : J("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(ve.loc, ie), ue !== ve.data && (p2.bufferData(p2.ARRAY_BUFFER, ue, ae), ve.data = ue);
              }, "setAttribute") });
            }, "transaction") };
          }
          _[q].transaction(X);
        }, V = function(q, te) {
          B++;
          try {
            p2.activeTexture(p2.TEXTURE0 + B);
            var le = N[q];
            le || (le = N[q] = p2.createTexture(), p2.bindTexture(p2.TEXTURE_2D, le), p2.texParameteri(p2.TEXTURE_2D, p2.TEXTURE_MIN_FILTER, p2.NEAREST), p2.texParameteri(p2.TEXTURE_2D, p2.TEXTURE_MAG_FILTER, p2.NEAREST)), p2.bindTexture(p2.TEXTURE_2D, le), te(le, B);
          } finally {
            B--;
          }
        }, ge = function(q, te, le) {
          var X = p2.createFramebuffer();
          z.push(X), p2.bindFramebuffer(p2.FRAMEBUFFER, X), p2.activeTexture(p2.TEXTURE0 + te), p2.bindTexture(p2.TEXTURE_2D, q), p2.framebufferTexture2D(p2.FRAMEBUFFER, p2.COLOR_ATTACHMENT0, p2.TEXTURE_2D, q, 0);
          try {
            le(X);
          } finally {
            p2.deleteFramebuffer(X), p2.bindFramebuffer(p2.FRAMEBUFFER, z[--z.length - 1] || null);
          }
        }, ce = function() {
          C = {}, _ = {}, N = {}, B = -1, z.length = 0;
        };
        H(J, "getExtension"), H(ee, "compileShader"), H(H$1, "withProgram"), H(V, "withTexture"), H(ge, "withTextureFramebuffer"), H(ce, "handleContextLoss");
        var M = typeof WebGL2RenderingContext < "u" && p2 instanceof WebGL2RenderingContext, C = {}, _ = {}, N = {}, B = -1, z = [];
        p2.canvas.addEventListener("webglcontextlost", function(q) {
          ce(), q.preventDefault();
        }, false), n.set(p2, T = { gl: p2, isWebGL2: M, getExtension: J, withProgram: H$1, withTexture: V, withTextureFramebuffer: ge, handleContextLoss: ce });
      }
      L(T);
    }
    H(s, "withWebGLContext");
    function l(I2, L, p2, T, M, C, _, N) {
      _ === void 0 && (_ = 15), N === void 0 && (N = null), s(I2, function(B) {
        var z = B.gl, J = B.withProgram, ee = B.withTexture;
        ee("copy", function(H2, V) {
          z.texImage2D(z.TEXTURE_2D, 0, z.RGBA, M, C, 0, z.RGBA, z.UNSIGNED_BYTE, L), J("copy", a2, i, function(ge) {
            var ce = ge.setUniform, q = ge.setAttribute;
            q("aUV", 2, z.STATIC_DRAW, 0, new Float32Array([0, 0, 2, 0, 0, 2])), ce("1i", "image", V), z.bindFramebuffer(z.FRAMEBUFFER, N || null), z.disable(z.BLEND), z.colorMask(_ & 8, _ & 4, _ & 2, _ & 1), z.viewport(p2, T, M, C), z.scissor(p2, T, M, C), z.drawArrays(z.TRIANGLES, 0, 3);
          });
        });
      });
    }
    H(l, "renderImageData");
    function u(I2, L, p2) {
      var T = I2.width, M = I2.height;
      s(I2, function(C) {
        var _ = C.gl, N = new Uint8Array(T * M * 4);
        _.readPixels(0, 0, T, M, _.RGBA, _.UNSIGNED_BYTE, N), I2.width = L, I2.height = p2, l(_, N, 0, 0, T, M);
      });
    }
    H(u, "resizeWebGLCanvasWithoutClearing");
    var d = Object.freeze({ __proto__: null, withWebGLContext: s, renderImageData: l, resizeWebGLCanvasWithoutClearing: u });
    function g(I2, L, p2, T, M, C) {
      C === void 0 && (C = 1);
      var _ = new Uint8Array(I2 * L), N = T[2] - T[0], B = T[3] - T[1], z = [];
      e(p2, function(q, te, le, X) {
        z.push({ x1: q, y1: te, x2: le, y2: X, minX: Math.min(q, le), minY: Math.min(te, X), maxX: Math.max(q, le), maxY: Math.max(te, X) });
      }), z.sort(function(q, te) {
        return q.maxX - te.maxX;
      });
      for (var J = 0; J < I2; J++) for (var ee = 0; ee < L; ee++) {
        var H2 = ge(T[0] + N * (J + 0.5) / I2, T[1] + B * (ee + 0.5) / L), V = Math.pow(1 - Math.abs(H2) / M, C) / 2;
        H2 < 0 && (V = 1 - V), V = Math.max(0, Math.min(255, Math.round(V * 255))), _[ee * I2 + J] = V;
      }
      return _;
      function ge(q, te) {
        for (var le = 1 / 0, X = 1 / 0, re = z.length; re--; ) {
          var $ = z[re];
          if ($.maxX + X <= q) break;
          if (q + X > $.minX && te - X < $.maxY && te + X > $.minY) {
            var G2 = E(q, te, $.x1, $.y1, $.x2, $.y2);
            G2 < le && (le = G2, X = Math.sqrt(le));
          }
        }
        return ce(q, te) && (X = -X), X;
      }
      function ce(q, te) {
        for (var le = 0, X = z.length; X--; ) {
          var re = z[X];
          if (re.maxX <= q) break;
          var $ = re.y1 > te != re.y2 > te && q < (re.x2 - re.x1) * (te - re.y1) / (re.y2 - re.y1) + re.x1;
          $ && (le += re.y1 < re.y2 ? 1 : -1);
        }
        return le !== 0;
      }
    }
    H(g, "generate$2");
    function m(I2, L, p2, T, M, C, _, N, B, z) {
      C === void 0 && (C = 1), N === void 0 && (N = 0), B === void 0 && (B = 0), z === void 0 && (z = 0), y(I2, L, p2, T, M, C, _, null, N, B, z);
    }
    H(m, "generateIntoCanvas$2");
    function y(I2, L, p2, T, M, C, _, N, B, z, J) {
      C === void 0 && (C = 1), B === void 0 && (B = 0), z === void 0 && (z = 0), J === void 0 && (J = 0);
      for (var ee = g(I2, L, p2, T, M, C), H2 = new Uint8Array(ee.length * 4), V = 0; V < ee.length; V++) H2[V * 4 + J] = ee[V];
      l(_, H2, B, z, I2, L, 1 << 3 - J, N);
    }
    H(y, "generateIntoFramebuffer$1");
    function E(I2, L, p2, T, M, C) {
      var _ = M - p2, N = C - T, B = _ * _ + N * N, z = B ? Math.max(0, Math.min(1, ((I2 - p2) * _ + (L - T) * N) / B)) : 0, J = I2 - (p2 + z * _), ee = L - (T + z * N);
      return J * J + ee * ee;
    }
    H(E, "absSquareDistanceToLineSegment");
    var S = Object.freeze({ __proto__: null, generate: g, generateIntoCanvas: m, generateIntoFramebuffer: y }), U = "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", k = "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}", w = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}", D = new Float32Array([0, 0, 2, 0, 0, 2]), x = null, A = false, W = {}, O = /* @__PURE__ */ new WeakMap();
    function Y(I2) {
      if (!A && !j(I2)) throw new Error("WebGL generation not supported");
    }
    H(Y, "validateSupport");
    function b(I2, L, p2, T, M, C, _) {
      if (C === void 0 && (C = 1), _ === void 0 && (_ = null), !_ && (_ = x, !_)) {
        var N = typeof OffscreenCanvas == "function" ? new OffscreenCanvas(1, 1) : typeof document < "u" ? document.createElement("canvas") : null;
        if (!N) throw new Error("OffscreenCanvas or DOM canvas not supported");
        _ = x = N.getContext("webgl", { depth: false });
      }
      Y(_);
      var B = new Uint8Array(I2 * L * 4);
      s(_, function(H2) {
        var V = H2.gl, ge = H2.withTexture, ce = H2.withTextureFramebuffer;
        ge("readable", function(q, te) {
          V.texImage2D(V.TEXTURE_2D, 0, V.RGBA, I2, L, 0, V.RGBA, V.UNSIGNED_BYTE, null), ce(q, te, function(le) {
            F2(I2, L, p2, T, M, C, V, le, 0, 0, 0), V.readPixels(0, 0, I2, L, V.RGBA, V.UNSIGNED_BYTE, B);
          });
        });
      });
      for (var z = new Uint8Array(I2 * L), J = 0, ee = 0; J < B.length; J += 4) z[ee++] = B[J];
      return z;
    }
    H(b, "generate$1");
    function R(I2, L, p2, T, M, C, _, N, B, z) {
      C === void 0 && (C = 1), N === void 0 && (N = 0), B === void 0 && (B = 0), z === void 0 && (z = 0), F2(I2, L, p2, T, M, C, _, null, N, B, z);
    }
    H(R, "generateIntoCanvas$1");
    function F2(I2, L, p2, T, M, C, _, N, B, z, J) {
      C === void 0 && (C = 1), B === void 0 && (B = 0), z === void 0 && (z = 0), J === void 0 && (J = 0), Y(_);
      var ee = [];
      e(p2, function(H2, V, ge, ce) {
        ee.push(H2, V, ge, ce);
      }), ee = new Float32Array(ee), s(_, function(H2) {
        var V = H2.gl, ge = H2.isWebGL2, ce = H2.getExtension, q = H2.withProgram, te = H2.withTexture, le = H2.withTextureFramebuffer, X = H2.handleContextLoss;
        if (te("rawDistances", function(re, $) {
          (I2 !== re._lastWidth || L !== re._lastHeight) && V.texImage2D(V.TEXTURE_2D, 0, V.RGBA, re._lastWidth = I2, re._lastHeight = L, 0, V.RGBA, V.UNSIGNED_BYTE, null), q("main", U, k, function(G2) {
            var de = G2.setAttribute, Q = G2.setUniform, oe = !ge && ce("ANGLE_instanced_arrays"), K = !ge && ce("EXT_blend_minmax");
            de("aUV", 2, V.STATIC_DRAW, 0, D), de("aLineSegment", 4, V.DYNAMIC_DRAW, 1, ee), Q.apply(void 0, ["4f", "uGlyphBounds"].concat(T)), Q("1f", "uMaxDistance", M), Q("1f", "uExponent", C), le(re, $, function(xe) {
              V.enable(V.BLEND), V.colorMask(true, true, true, true), V.viewport(0, 0, I2, L), V.scissor(0, 0, I2, L), V.blendFunc(V.ONE, V.ONE), V.blendEquationSeparate(V.FUNC_ADD, ge ? V.MAX : K.MAX_EXT), V.clear(V.COLOR_BUFFER_BIT), ge ? V.drawArraysInstanced(V.TRIANGLES, 0, 3, ee.length / 4) : oe.drawArraysInstancedANGLE(V.TRIANGLES, 0, 3, ee.length / 4);
            });
          }), q("post", a2, w, function(G2) {
            G2.setAttribute("aUV", 2, V.STATIC_DRAW, 0, D), G2.setUniform("1i", "tex", $), V.bindFramebuffer(V.FRAMEBUFFER, N), V.disable(V.BLEND), V.colorMask(J === 0, J === 1, J === 2, J === 3), V.viewport(B, z, I2, L), V.scissor(B, z, I2, L), V.drawArrays(V.TRIANGLES, 0, 3);
          });
        }), V.isContextLost()) throw X(), new Error("webgl context lost");
      });
    }
    H(F2, "generateIntoFramebuffer");
    function j(I2) {
      var L = !I2 || I2 === x ? W : I2.canvas || I2, p2 = O.get(L);
      if (p2 === void 0) {
        A = true;
        var T = null;
        try {
          var M = [97, 106, 97, 61, 99, 137, 118, 80, 80, 118, 137, 99, 61, 97, 106, 97], C = b(4, 4, "M8,8L16,8L24,24L16,24Z", [0, 0, 32, 32], 24, 1, I2);
          p2 = C && M.length === C.length && C.every(function(_, N) {
            return _ === M[N];
          }), p2 || (T = "bad trial run results", console.info(M, C));
        } catch (_) {
          p2 = false, T = _.message;
        }
        T && console.warn("WebGL SDF generation not supported:", T), A = false, O.set(L, p2);
      }
      return p2;
    }
    H(j, "isSupported");
    var P = Object.freeze({ __proto__: null, generate: b, generateIntoCanvas: R, generateIntoFramebuffer: F2, isSupported: j });
    function Z(I2, L, p2, T, M, C) {
      M === void 0 && (M = Math.max(T[2] - T[0], T[3] - T[1]) / 2), C === void 0 && (C = 1);
      try {
        return b.apply(P, arguments);
      } catch (_) {
        return console.info("WebGL SDF generation failed, falling back to JS", _), g.apply(S, arguments);
      }
    }
    H(Z, "generate");
    function ne(I2, L, p2, T, M, C, _, N, B, z) {
      M === void 0 && (M = Math.max(T[2] - T[0], T[3] - T[1]) / 2), C === void 0 && (C = 1), N === void 0 && (N = 0), B === void 0 && (B = 0), z === void 0 && (z = 0);
      try {
        return R.apply(P, arguments);
      } catch (J) {
        return console.info("WebGL SDF generation failed, falling back to JS", J), m.apply(S, arguments);
      }
    }
    return H(ne, "generateIntoCanvas"), r.forEachPathCommand = t, r.generate = Z, r.generateIntoCanvas = ne, r.javascript = S, r.pathToLineSegments = e, r.webgl = P, r.webglUtils = d, Object.defineProperty(r, "__esModule", { value: true }), r;
  })({});
  return h;
}
H(Dr, "SDFGenerator");
a();
function Ua() {
  var h = (function(r) {
    var c = { R: "13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73", EN: "1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9", ES: "17,2,6dp+1,f+1,av,16vr,mx+1,4o,2", ET: "z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj", AN: "16o+5,2j+9,2+1,35,ed,1ff2+9,87+u", CS: "18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b", B: "a,3,f+2,2v,690", S: "9,2,k", WS: "c,k,4f4,1vk+a,u,1j,335", ON: "x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i", BN: "0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1", NSM: "lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n", AL: "16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d", LRO: "6ct", RLO: "6cu", LRE: "6cq", RLE: "6cr", PDF: "6cs", LRI: "6ee", RLI: "6ef", FSI: "6eg", PDI: "6eh" }, f = {}, t = {};
    f.L = 1, t[1] = "L", Object.keys(c).forEach(function(X, re) {
      f[X] = 1 << re + 1, t[f[X]] = X;
    }), Object.freeze(f);
    var e = f.LRI | f.RLI | f.FSI, a2 = f.L | f.R | f.AL, i = f.B | f.S | f.WS | f.ON | f.FSI | f.LRI | f.RLI | f.PDI, n = f.BN | f.RLE | f.LRE | f.RLO | f.LRO | f.PDF, o = f.S | f.WS | f.B | e | f.PDI | n, s = null;
    function l() {
      if (!s) {
        s = /* @__PURE__ */ new Map();
        var X = H(function($) {
          if (c.hasOwnProperty($)) {
            var G2 = 0;
            c[$].split(",").forEach(function(de) {
              var Q = de.split("+"), oe = Q[0], K = Q[1];
              oe = parseInt(oe, 36), K = K ? parseInt(K, 36) : 0, s.set(G2 += oe, f[$]);
              for (var xe = 0; xe < K; xe++) s.set(++G2, f[$]);
            });
          }
        }, "loop");
        for (var re in c) X(re);
      }
    }
    H(l, "parseData");
    function u(X) {
      return l(), s.get(X.codePointAt(0)) || f.L;
    }
    H(u, "getBidiCharType");
    function d(X) {
      return t[u(X)];
    }
    H(d, "getBidiCharTypeName");
    var g = { pairs: "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1", canonical: "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye" };
    function m(X, re) {
      var $ = 36, G2 = 0, de = /* @__PURE__ */ new Map(), Q = re && /* @__PURE__ */ new Map(), oe;
      return X.split(",").forEach(H(function K(xe) {
        if (xe.indexOf("+") !== -1) for (var ae = +xe; ae--; ) K(oe);
        else {
          oe = xe;
          var ie = xe.split(">"), ue = ie[0], ve = ie[1];
          ue = String.fromCodePoint(G2 += parseInt(ue, $)), ve = String.fromCodePoint(G2 += parseInt(ve, $)), de.set(ue, ve), re && Q.set(ve, ue);
        }
      }, "visit")), { map: de, reverseMap: Q };
    }
    H(m, "parseCharacterMap");
    var y, E, S;
    function U() {
      if (!y) {
        var X = m(g.pairs, true), re = X.map, $ = X.reverseMap;
        y = re, E = $, S = m(g.canonical, false).map;
      }
    }
    H(U, "parse$1");
    function k(X) {
      return U(), y.get(X) || null;
    }
    H(k, "openingToClosingBracket");
    function w(X) {
      return U(), E.get(X) || null;
    }
    H(w, "closingToOpeningBracket");
    function D(X) {
      return U(), S.get(X) || null;
    }
    H(D, "getCanonicalBracket");
    var x = f.L, A = f.R, W = f.EN, O = f.ES, Y = f.ET, b = f.AN, R = f.CS, F2 = f.B, j = f.S, P = f.ON, Z = f.BN, ne = f.NSM, I2 = f.AL, L = f.LRO, p2 = f.RLO, T = f.LRE, M = f.RLE, C = f.PDF, _ = f.LRI, N = f.RLI, B = f.FSI, z = f.PDI;
    function J(X, re) {
      for (var $ = 125, G2 = new Uint32Array(X.length), de = 0; de < X.length; de++) G2[de] = u(X[de]);
      var Q = /* @__PURE__ */ new Map();
      function oe(Pe2, je) {
        var Ie = G2[Pe2];
        G2[Pe2] = je, Q.set(Ie, Q.get(Ie) - 1), Ie & i && Q.set(i, Q.get(i) - 1), Q.set(je, (Q.get(je) || 0) + 1), je & i && Q.set(i, (Q.get(i) || 0) + 1);
      }
      H(oe, "changeCharType");
      for (var K = new Uint8Array(X.length), xe = /* @__PURE__ */ new Map(), ae = [], ie = null, ue = 0; ue < X.length; ue++) ie || ae.push(ie = { start: ue, end: X.length - 1, level: re === "rtl" ? 1 : re === "ltr" ? 0 : dn(ue, false) }), G2[ue] & F2 && (ie.end = ue, ie = null);
      for (var ve = M | T | p2 | L | e | z | C | F2, _e = H(function(Pe2) {
        return Pe2 + (Pe2 & 1 ? 1 : 2);
      }, "nextEven"), De2 = H(function(Pe2) {
        return Pe2 + (Pe2 & 1 ? 2 : 1);
      }, "nextOdd"), me = 0; me < ae.length; me++) {
        ie = ae[me];
        var ye2 = [{ _level: ie.level, _override: 0, _isolate: 0 }], fe = void 0, Se = 0, we2 = 0, Ge = 0;
        Q.clear();
        for (var Ue = ie.start; Ue <= ie.end; Ue++) {
          var he = G2[Ue];
          if (fe = ye2[ye2.length - 1], Q.set(he, (Q.get(he) || 0) + 1), he & i && Q.set(i, (Q.get(i) || 0) + 1), he & ve) if (he & (M | T)) {
            K[Ue] = fe._level;
            var Te = (he === M ? De2 : _e)(fe._level);
            Te <= $ && !Se && !we2 ? ye2.push({ _level: Te, _override: 0, _isolate: 0 }) : Se || we2++;
          } else if (he & (p2 | L)) {
            K[Ue] = fe._level;
            var qe = (he === p2 ? De2 : _e)(fe._level);
            qe <= $ && !Se && !we2 ? ye2.push({ _level: qe, _override: he & p2 ? A : x, _isolate: 0 }) : Se || we2++;
          } else if (he & e) {
            he & B && (he = dn(Ue + 1, true) === 1 ? N : _), K[Ue] = fe._level, fe._override && oe(Ue, fe._override);
            var ke = (he === N ? De2 : _e)(fe._level);
            ke <= $ && Se === 0 && we2 === 0 ? (Ge++, ye2.push({ _level: ke, _override: 0, _isolate: 1, _isolInitIndex: Ue })) : Se++;
          } else if (he & z) {
            if (Se > 0) Se--;
            else if (Ge > 0) {
              for (we2 = 0; !ye2[ye2.length - 1]._isolate; ) ye2.pop();
              var be = ye2[ye2.length - 1]._isolInitIndex;
              be != null && (xe.set(be, Ue), xe.set(Ue, be)), ye2.pop(), Ge--;
            }
            fe = ye2[ye2.length - 1], K[Ue] = fe._level, fe._override && oe(Ue, fe._override);
          } else he & C ? (Se === 0 && (we2 > 0 ? we2-- : !fe._isolate && ye2.length > 1 && (ye2.pop(), fe = ye2[ye2.length - 1])), K[Ue] = fe._level) : he & F2 && (K[Ue] = ie.level);
          else K[Ue] = fe._level, fe._override && he !== Z && oe(Ue, fe._override);
        }
        for (var Ce = [], Fe = null, pe = ie.start; pe <= ie.end; pe++) {
          var Me = G2[pe];
          if (!(Me & n)) {
            var Re = K[pe], Oe2 = Me & e, Ee = Me === z;
            Fe && Re === Fe._level ? (Fe._end = pe, Fe._endsWithIsolInit = Oe2) : Ce.push(Fe = { _start: pe, _end: pe, _level: Re, _startsWithPDI: Ee, _endsWithIsolInit: Oe2 });
          }
        }
        for (var Ne = [], $e = 0; $e < Ce.length; $e++) {
          var Je = Ce[$e];
          if (!Je._startsWithPDI || Je._startsWithPDI && !xe.has(Je._start)) {
            for (var et = [Fe = Je], at = void 0; Fe && Fe._endsWithIsolInit && (at = xe.get(Fe._end)) != null; ) for (var Ke = $e + 1; Ke < Ce.length; Ke++) if (Ce[Ke]._start === at) {
              et.push(Fe = Ce[Ke]);
              break;
            }
            for (var Le = [], ot2 = 0; ot2 < et.length; ot2++) for (var Hr = et[ot2], nr = Hr._start; nr <= Hr._end; nr++) Le.push(nr);
            for (var da = K[Le[0]], Yr = ie.level, Rt = Le[0] - 1; Rt >= 0; Rt--) if (!(G2[Rt] & n)) {
              Yr = K[Rt];
              break;
            }
            var ar = Le[Le.length - 1], va = K[ar], Jr = ie.level;
            if (!(G2[ar] & e)) {
              for (var Lt = ar + 1; Lt <= ie.end; Lt++) if (!(G2[Lt] & n)) {
                Jr = K[Lt];
                break;
              }
            }
            Ne.push({ _seqIndices: Le, _sosType: Math.max(Yr, da) % 2 ? A : x, _eosType: Math.max(Jr, va) % 2 ? A : x });
          }
        }
        for (var or = 0; or < Ne.length; or++) {
          var ir = Ne[or], se = ir._seqIndices, yt = ir._sosType, pa = ir._eosType, ut = K[se[0]] & 1 ? A : x;
          if (Q.get(ne)) for (var Gt = 0; Gt < se.length; Gt++) {
            var Kr = se[Gt];
            if (G2[Kr] & ne) {
              for (var sr = yt, Pt = Gt - 1; Pt >= 0; Pt--) if (!(G2[se[Pt]] & n)) {
                sr = G2[se[Pt]];
                break;
              }
              oe(Kr, sr & (e | z) ? P : sr);
            }
          }
          if (Q.get(W)) for (var It = 0; It < se.length; It++) {
            var Zr = se[It];
            if (G2[Zr] & W) for (var zt = It - 1; zt >= -1; zt--) {
              var Qr = zt === -1 ? yt : G2[se[zt]];
              if (Qr & a2) {
                Qr === I2 && oe(Zr, b);
                break;
              }
            }
          }
          if (Q.get(I2)) for (var lr = 0; lr < se.length; lr++) {
            var qr = se[lr];
            G2[qr] & I2 && oe(qr, A);
          }
          if (Q.get(O) || Q.get(R)) for (var bt = 1; bt < se.length - 1; bt++) {
            var fr = se[bt];
            if (G2[fr] & (O | R)) {
              for (var ct = 0, ur = 0, cr = bt - 1; cr >= 0 && (ct = G2[se[cr]], !!(ct & n)); cr--) ;
              for (var hr = bt + 1; hr < se.length && (ur = G2[se[hr]], !!(ur & n)); hr++) ;
              ct === ur && (G2[fr] === O ? ct === W : ct & (W | b)) && oe(fr, ct);
            }
          }
          if (Q.get(W)) for (var Xe = 0; Xe < se.length; Xe++) {
            var ga = se[Xe];
            if (G2[ga] & W) {
              for (var Wt = Xe - 1; Wt >= 0 && G2[se[Wt]] & (Y | n); Wt--) oe(se[Wt], W);
              for (Xe++; Xe < se.length && G2[se[Xe]] & (Y | n | W); Xe++) G2[se[Xe]] !== W && oe(se[Xe], W);
            }
          }
          if (Q.get(Y) || Q.get(O) || Q.get(R)) for (var xt = 0; xt < se.length; xt++) {
            var $r = se[xt];
            if (G2[$r] & (Y | O | R)) {
              oe($r, P);
              for (var Nt = xt - 1; Nt >= 0 && G2[se[Nt]] & n; Nt--) oe(se[Nt], P);
              for (var Vt2 = xt + 1; Vt2 < se.length && G2[se[Vt2]] & n; Vt2++) oe(se[Vt2], P);
            }
          }
          if (Q.get(W)) for (var dr = 0, en2 = yt; dr < se.length; dr++) {
            var tn = se[dr], vr = G2[tn];
            vr & W ? en2 === x && oe(tn, x) : vr & a2 && (en2 = vr);
          }
          if (Q.get(i)) {
            var Tt = A | W | b, rn = Tt | x, jt = [];
            {
              for (var ht = [], dt = 0; dt < se.length; dt++) if (G2[se[dt]] & i) {
                var kt = X[se[dt]], nn = void 0;
                if (k(kt) !== null) if (ht.length < 63) ht.push({ char: kt, seqIndex: dt });
                else break;
                else if ((nn = w(kt)) !== null) for (var _t2 = ht.length - 1; _t2 >= 0; _t2--) {
                  var pr = ht[_t2].char;
                  if (pr === nn || pr === w(D(kt)) || k(D(pr)) === kt) {
                    jt.push([ht[_t2].seqIndex, dt]), ht.length = _t2;
                    break;
                  }
                }
              }
              jt.sort(function(Pe2, je) {
                return Pe2[0] - je[0];
              });
            }
            for (var gr = 0; gr < jt.length; gr++) {
              for (var an = jt[gr], Xt = an[0], mr = an[1], on = false, Ve = 0, yr = Xt + 1; yr < mr; yr++) {
                var sn = se[yr];
                if (G2[sn] & rn) {
                  on = true;
                  var ln = G2[sn] & Tt ? A : x;
                  if (ln === ut) {
                    Ve = ln;
                    break;
                  }
                }
              }
              if (on && !Ve) {
                Ve = yt;
                for (var br = Xt - 1; br >= 0; br--) {
                  var fn = se[br];
                  if (G2[fn] & rn) {
                    var un = G2[fn] & Tt ? A : x;
                    un !== ut ? Ve = un : Ve = ut;
                    break;
                  }
                }
              }
              if (Ve) {
                if (G2[se[Xt]] = G2[se[mr]] = Ve, Ve !== ut) {
                  for (var Ut = Xt + 1; Ut < se.length; Ut++) if (!(G2[se[Ut]] & n)) {
                    u(X[se[Ut]]) & ne && (G2[se[Ut]] = Ve);
                    break;
                  }
                }
                if (Ve !== ut) {
                  for (var St = mr + 1; St < se.length; St++) if (!(G2[se[St]] & n)) {
                    u(X[se[St]]) & ne && (G2[se[St]] = Ve);
                    break;
                  }
                }
              }
            }
            for (var tt = 0; tt < se.length; tt++) if (G2[se[tt]] & i) {
              for (var cn2 = tt, xr = tt, Tr = yt, wt = tt - 1; wt >= 0; wt--) if (G2[se[wt]] & n) cn2 = wt;
              else {
                Tr = G2[se[wt]] & Tt ? A : x;
                break;
              }
              for (var hn = pa, Ft2 = tt + 1; Ft2 < se.length; Ft2++) if (G2[se[Ft2]] & (i | n)) xr = Ft2;
              else {
                hn = G2[se[Ft2]] & Tt ? A : x;
                break;
              }
              for (var kr = cn2; kr <= xr; kr++) G2[se[kr]] = Tr === hn ? Tr : ut;
              tt = xr;
            }
          }
        }
        for (var We = ie.start; We <= ie.end; We++) {
          var ma = K[We], Ht2 = G2[We];
          if (ma & 1 ? Ht2 & (x | W | b) && K[We]++ : Ht2 & A ? K[We]++ : Ht2 & (b | W) && (K[We] += 2), Ht2 & n && (K[We] = We === 0 ? ie.level : K[We - 1]), We === ie.end || u(X[We]) & (j | F2)) for (var Yt = We; Yt >= 0 && u(X[Yt]) & o; Yt--) K[Yt] = ie.level;
        }
      }
      return { levels: K, paragraphs: ae };
      function dn(Pe2, je) {
        for (var Ie = Pe2; Ie < X.length; Ie++) {
          var rt = G2[Ie];
          if (rt & (A | I2)) return 1;
          if (rt & (F2 | x) || je && rt === z) return 0;
          if (rt & e) {
            var vn = ya(Ie);
            Ie = vn === -1 ? X.length : vn;
          }
        }
        return 0;
      }
      function ya(Pe2) {
        for (var je = 1, Ie = Pe2 + 1; Ie < X.length; Ie++) {
          var rt = G2[Ie];
          if (rt & F2) break;
          if (rt & z) {
            if (--je === 0) return Ie;
          } else rt & e && je++;
        }
        return -1;
      }
    }
    H(J, "getEmbeddingLevels");
    var ee = "14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1", H$1;
    function V() {
      if (!H$1) {
        var X = m(ee, true), re = X.map, $ = X.reverseMap;
        $.forEach(function(G2, de) {
          re.set(de, G2);
        }), H$1 = re;
      }
    }
    H(V, "parse");
    function ge(X) {
      return V(), H$1.get(X) || null;
    }
    H(ge, "getMirroredCharacter");
    function ce(X, re, $, G2) {
      var de = X.length;
      $ = Math.max(0, $ == null ? 0 : +$), G2 = Math.min(de - 1, G2 == null ? de - 1 : +G2);
      for (var Q = /* @__PURE__ */ new Map(), oe = $; oe <= G2; oe++) if (re[oe] & 1) {
        var K = ge(X[oe]);
        K !== null && Q.set(oe, K);
      }
      return Q;
    }
    H(ce, "getMirroredCharactersMap");
    function q(X, re, $, G2) {
      var de = X.length;
      $ = Math.max(0, $ == null ? 0 : +$), G2 = Math.min(de - 1, G2 == null ? de - 1 : +G2);
      var Q = [];
      return re.paragraphs.forEach(function(oe) {
        var K = Math.max($, oe.start), xe = Math.min(G2, oe.end);
        if (K < xe) {
          for (var ae = re.levels.slice(K, xe + 1), ie = xe; ie >= K && u(X[ie]) & o; ie--) ae[ie] = oe.level;
          for (var ue = oe.level, ve = 1 / 0, _e = 0; _e < ae.length; _e++) {
            var De2 = ae[_e];
            De2 > ue && (ue = De2), De2 < ve && (ve = De2 | 1);
          }
          for (var me = ue; me >= ve; me--) for (var ye2 = 0; ye2 < ae.length; ye2++) if (ae[ye2] >= me) {
            for (var fe = ye2; ye2 + 1 < ae.length && ae[ye2 + 1] >= me; ) ye2++;
            ye2 > fe && Q.push([fe + K, ye2 + K]);
          }
        }
      }), Q;
    }
    H(q, "getReorderSegments");
    function te(X, re, $, G2) {
      var de = le(X, re, $, G2), Q = [].concat(X);
      return de.forEach(function(oe, K) {
        Q[K] = (re.levels[oe] & 1 ? ge(X[oe]) : null) || X[oe];
      }), Q.join("");
    }
    H(te, "getReorderedString");
    function le(X, re, $, G2) {
      for (var de = q(X, re, $, G2), Q = [], oe = 0; oe < X.length; oe++) Q[oe] = oe;
      return de.forEach(function(K) {
        for (var xe = K[0], ae = K[1], ie = Q.slice(xe, ae + 1), ue = ie.length; ue--; ) Q[ae - ue] = ie[ue];
      }), Q;
    }
    return H(le, "getReorderedIndices"), r.closingToOpeningBracket = w, r.getBidiCharType = u, r.getBidiCharTypeName = d, r.getCanonicalBracket = D, r.getEmbeddingLevels = J, r.getMirroredCharacter = ge, r.getMirroredCharactersMap = ce, r.getReorderSegments = q, r.getReorderedIndices = le, r.getReorderedString = te, r.openingToClosingBracket = k, Object.defineProperty(r, "__esModule", { value: true }), r;
  })({});
  return h;
}
H(Ua, "bidiFactory");
var Ln = Ua;
a();
var Er = /\bvoid\s+main\s*\(\s*\)\s*{/g;
function Cr(h) {
  let r = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function c(f, t) {
    let e = Ht[t];
    return e ? Cr(e) : f;
  }
  return H(c, "replace"), h.replace(r, c);
}
H(Cr, "expandShaderIncludes");
var Be = [];
for (let h = 0; h < 256; h++) Be[h] = (h < 16 ? "0" : "") + h.toString(16);
function Sa() {
  let h = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0, c = Math.random() * 4294967295 | 0, f = Math.random() * 4294967295 | 0;
  return (Be[h & 255] + Be[h >> 8 & 255] + Be[h >> 16 & 255] + Be[h >> 24 & 255] + "-" + Be[r & 255] + Be[r >> 8 & 255] + "-" + Be[r >> 16 & 15 | 64] + Be[r >> 24 & 255] + "-" + Be[c & 63 | 128] + Be[c >> 8 & 255] + "-" + Be[c >> 16 & 255] + Be[c >> 24 & 255] + Be[f & 255] + Be[f >> 8 & 255] + Be[f >> 16 & 255] + Be[f >> 24 & 255]).toUpperCase();
}
H(Sa, "generateUUID");
var lt = Object.assign || function() {
  let h = arguments[0];
  for (let r = 1, c = arguments.length; r < c; r++) {
    let f = arguments[r];
    if (f) for (let t in f) Object.prototype.hasOwnProperty.call(f, t) && (h[t] = f[t]);
  }
  return h;
}, wa = Date.now(), Gn = /* @__PURE__ */ new WeakMap(), Pn = /* @__PURE__ */ new Map(), Fa = 1e10;
function vt(h, r) {
  let c = Ca(r), f = Gn.get(h);
  if (f || Gn.set(h, f = /* @__PURE__ */ Object.create(null)), f[c]) return new f[c]();
  let t = "_onBeforeCompile".concat(c), e = H(function(o, s) {
    h.onBeforeCompile.call(this, o, s);
    let l = this.customProgramCacheKey() + "|" + o.vertexShader + "|" + o.fragmentShader, u = Pn[l];
    if (!u) {
      let d = Ma(this, o, r, c);
      u = Pn[l] = d;
    }
    o.vertexShader = u.vertexShader, o.fragmentShader = u.fragmentShader, lt(o.uniforms, this.uniforms), r.timeUniform && (o.uniforms[r.timeUniform] = { get value() {
      return Date.now() - wa;
    } }), this[t] && this[t](o);
  }, "onBeforeCompile"), a2 = H(function() {
    return i(r.chained ? h : h.clone());
  }, "DerivedMaterial"), i = H(function(o) {
    let s = Object.create(o, n);
    return Object.defineProperty(s, "baseMaterial", { value: h }), Object.defineProperty(s, "id", { value: Fa++ }), s.uuid = Sa(), s.uniforms = lt({}, o.uniforms, r.uniforms), s.defines = lt({}, o.defines, r.defines), s.defines["TROIKA_DERIVED_MATERIAL_".concat(c)] = "", s.extensions = lt({}, o.extensions, r.extensions), s._listeners = void 0, s;
  }, "derive"), n = { constructor: { value: a2 }, isDerivedMaterial: { value: true }, type: { get: H(() => h.type, "get"), set: H((o) => {
    h.type = o;
  }, "set") }, isDerivedFrom: { writable: true, configurable: true, value: H(function(o) {
    let s = this.baseMaterial;
    return o === s || s.isDerivedMaterial && s.isDerivedFrom(o) || false;
  }, "value") }, customProgramCacheKey: { writable: true, configurable: true, value: H(function() {
    return h.customProgramCacheKey() + "|" + c;
  }, "value") }, onBeforeCompile: { get() {
    return e;
  }, set(o) {
    this[t] = o;
  } }, copy: { writable: true, configurable: true, value: H(function(o) {
    return h.copy.call(this, o), !h.isShaderMaterial && !h.isDerivedMaterial && (lt(this.extensions, o.extensions), lt(this.defines, o.defines), lt(this.uniforms, Of.clone(o.uniforms))), this;
  }, "value") }, clone: { writable: true, configurable: true, value: H(function() {
    let o = new h.constructor();
    return i(o).copy(this);
  }, "value") }, getDepthMaterial: { writable: true, configurable: true, value: H(function() {
    let o = this._depthMaterial;
    return o || (o = this._depthMaterial = vt(h.isDerivedMaterial ? h.getDepthMaterial() : new na$1({ depthPacking: bf }), r), o.defines.IS_DEPTH_MATERIAL = "", o.uniforms = this.uniforms), o;
  }, "value") }, getDistanceMaterial: { writable: true, configurable: true, value: H(function() {
    let o = this._distanceMaterial;
    return o || (o = this._distanceMaterial = vt(h.isDerivedMaterial ? h.getDistanceMaterial() : new ia$1(), r), o.defines.IS_DISTANCE_MATERIAL = "", o.uniforms = this.uniforms), o;
  }, "value") }, dispose: { writable: true, configurable: true, value() {
    let { _depthMaterial: o, _distanceMaterial: s } = this;
    o && o.dispose(), s && s.dispose(), h.dispose.call(this);
  } } };
  return f[c] = a2, new a2();
}
H(vt, "createDerivedMaterial");
function Ma(h, { vertexShader: r, fragmentShader: c }, f, t) {
  let { vertexDefs: e, vertexMainIntro: a2, vertexMainOutro: i, vertexTransform: n, fragmentDefs: o, fragmentMainIntro: s, fragmentMainOutro: l, fragmentColorTransform: u, customRewriter: d, timeUniform: g } = f;
  if (e = e || "", a2 = a2 || "", i = i || "", o = o || "", s = s || "", l = l || "", (n || d) && (r = Cr(r)), (u || d) && (c = c.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm, "\n//!BEGIN_POST_CHUNK $1\n$&\n//!END_POST_CHUNK\n"), c = Cr(c)), d) {
    let m = d({ vertexShader: r, fragmentShader: c });
    r = m.vertexShader, c = m.fragmentShader;
  }
  if (u) {
    let m = [];
    c = c.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm, (y) => (m.push(y), "")), l = "".concat(u, "\n").concat(m.join("\n"), "\n").concat(l);
  }
  if (g) {
    let m = "\nuniform float ".concat(g, ";\n");
    e = m + e, o = m + o;
  }
  return n && (r = "vec3 troika_position_".concat(t, ";\nvec3 troika_normal_").concat(t, ";\nvec2 troika_uv_").concat(t, ";\n").concat(r, "\n"), e = "".concat(e, "\nvoid troikaVertexTransform").concat(t, "(inout vec3 position, inout vec3 normal, inout vec2 uv) {\n  ").concat(n, "\n}\n"), a2 = "\ntroika_position_".concat(t, " = vec3(position);\ntroika_normal_").concat(t, " = vec3(normal);\ntroika_uv_").concat(t, " = vec2(uv);\ntroikaVertexTransform").concat(t, "(troika_position_").concat(t, ", troika_normal_").concat(t, ", troika_uv_").concat(t, ");\n").concat(a2, "\n"), r = r.replace(/\b(position|normal|uv)\b/g, (m, y, E, S) => /\battribute\s+vec[23]\s+$/.test(S.substr(0, E)) ? y : "troika_".concat(y, "_").concat(t)), h.map && h.map.channel > 0 || (r = r.replace(/\bMAP_UV\b/g, "troika_uv_".concat(t)))), r = In(r, t, e, a2, i), c = In(c, t, o, s, l), { vertexShader: r, fragmentShader: c };
}
H(Ma, "upgradeShaders");
function In(h, r, c, f, t) {
  return (f || t || c) && (h = h.replace(Er, "\n".concat(c, "\nvoid troikaOrigMain").concat(r, "() {")), h += "\nvoid main() {\n  ".concat(f, "\n  troikaOrigMain").concat(r, "();\n  ").concat(t, "\n}")), h;
}
H(In, "injectIntoShaderCode");
function Aa(h, r) {
  return h === "uniforms" ? void 0 : typeof r == "function" ? r.toString() : r;
}
H(Aa, "optionsJsonReplacer");
var Da = 0, zn = /* @__PURE__ */ new Map();
function Ca(h) {
  let r = JSON.stringify(h, Aa), c = zn.get(r);
  return c == null && zn.set(r, c = ++Da), c;
}
H(Ca, "getKeyForOptions");
function Ea() {
  return typeof window > "u" && (self.window = self), (function(h) {
    var r = { parse: H(function(t) {
      var e = r._bin, a2 = new Uint8Array(t);
      if (e.readASCII(a2, 0, 4) == "ttcf") {
        var i = 4;
        e.readUshort(a2, i), i += 2, e.readUshort(a2, i), i += 2;
        var n = e.readUint(a2, i);
        i += 4;
        for (var o = [], s = 0; s < n; s++) {
          var l = e.readUint(a2, i);
          i += 4, o.push(r._readFont(a2, l));
        }
        return o;
      }
      return [r._readFont(a2, 0)];
    }, "parse"), _readFont: H(function(t, e) {
      var a2 = r._bin, i = e;
      a2.readFixed(t, e), e += 4;
      var n = a2.readUshort(t, e);
      e += 2, a2.readUshort(t, e), e += 2, a2.readUshort(t, e), e += 2, a2.readUshort(t, e), e += 2;
      for (var o = ["cmap", "head", "hhea", "maxp", "hmtx", "name", "OS/2", "post", "loca", "glyf", "kern", "CFF ", "GDEF", "GPOS", "GSUB", "SVG "], s = { _data: t, _offset: i }, l = {}, u = 0; u < n; u++) {
        var d = a2.readASCII(t, e, 4);
        e += 4, a2.readUint(t, e), e += 4;
        var g = a2.readUint(t, e);
        e += 4;
        var m = a2.readUint(t, e);
        e += 4, l[d] = { offset: g, length: m };
      }
      for (u = 0; u < o.length; u++) {
        var y = o[u];
        l[y] && (s[y.trim()] = r[y.trim()].parse(t, l[y].offset, l[y].length, s));
      }
      return s;
    }, "_readFont"), _tabOffset: H(function(t, e, a2) {
      for (var i = r._bin, n = i.readUshort(t, a2 + 4), o = a2 + 12, s = 0; s < n; s++) {
        var l = i.readASCII(t, o, 4);
        o += 4, i.readUint(t, o), o += 4;
        var u = i.readUint(t, o);
        if (o += 4, i.readUint(t, o), o += 4, l == e) return u;
      }
      return 0;
    }, "_tabOffset") };
    r._bin = { readFixed: H(function(t, e) {
      return (t[e] << 8 | t[e + 1]) + (t[e + 2] << 8 | t[e + 3]) / 65540;
    }, "readFixed"), readF2dot14: H(function(t, e) {
      return r._bin.readShort(t, e) / 16384;
    }, "readF2dot14"), readInt: H(function(t, e) {
      return r._bin._view(t).getInt32(e);
    }, "readInt"), readInt8: H(function(t, e) {
      return r._bin._view(t).getInt8(e);
    }, "readInt8"), readShort: H(function(t, e) {
      return r._bin._view(t).getInt16(e);
    }, "readShort"), readUshort: H(function(t, e) {
      return r._bin._view(t).getUint16(e);
    }, "readUshort"), readUshorts: H(function(t, e, a2) {
      for (var i = [], n = 0; n < a2; n++) i.push(r._bin.readUshort(t, e + 2 * n));
      return i;
    }, "readUshorts"), readUint: H(function(t, e) {
      return r._bin._view(t).getUint32(e);
    }, "readUint"), readUint64: H(function(t, e) {
      return 4294967296 * r._bin.readUint(t, e) + r._bin.readUint(t, e + 4);
    }, "readUint64"), readASCII: H(function(t, e, a2) {
      for (var i = "", n = 0; n < a2; n++) i += String.fromCharCode(t[e + n]);
      return i;
    }, "readASCII"), readUnicode: H(function(t, e, a2) {
      for (var i = "", n = 0; n < a2; n++) {
        var o = t[e++] << 8 | t[e++];
        i += String.fromCharCode(o);
      }
      return i;
    }, "readUnicode"), _tdec: typeof window < "u" && window.TextDecoder ? new window.TextDecoder() : null, readUTF8: H(function(t, e, a2) {
      var i = r._bin._tdec;
      return i && e == 0 && a2 == t.length ? i.decode(t) : r._bin.readASCII(t, e, a2);
    }, "readUTF8"), readBytes: H(function(t, e, a2) {
      for (var i = [], n = 0; n < a2; n++) i.push(t[e + n]);
      return i;
    }, "readBytes"), readASCIIArray: H(function(t, e, a2) {
      for (var i = [], n = 0; n < a2; n++) i.push(String.fromCharCode(t[e + n]));
      return i;
    }, "readASCIIArray"), _view: H(function(t) {
      return t._dataView || (t._dataView = t.buffer ? new DataView(t.buffer, t.byteOffset, t.byteLength) : new DataView(new Uint8Array(t).buffer));
    }, "_view") }, r._lctf = {}, r._lctf.parse = function(t, e, a2, i, n) {
      var o = r._bin, s = {}, l = e;
      o.readFixed(t, e), e += 4;
      var u = o.readUshort(t, e);
      e += 2;
      var d = o.readUshort(t, e);
      e += 2;
      var g = o.readUshort(t, e);
      return e += 2, s.scriptList = r._lctf.readScriptList(t, l + u), s.featureList = r._lctf.readFeatureList(t, l + d), s.lookupList = r._lctf.readLookupList(t, l + g, n), s;
    }, r._lctf.readLookupList = function(t, e, a2) {
      var i = r._bin, n = e, o = [], s = i.readUshort(t, e);
      e += 2;
      for (var l = 0; l < s; l++) {
        var u = i.readUshort(t, e);
        e += 2;
        var d = r._lctf.readLookupTable(t, n + u, a2);
        o.push(d);
      }
      return o;
    }, r._lctf.readLookupTable = function(t, e, a2) {
      var i = r._bin, n = e, o = { tabs: [] };
      o.ltype = i.readUshort(t, e), e += 2, o.flag = i.readUshort(t, e), e += 2;
      var s = i.readUshort(t, e);
      e += 2;
      for (var l = o.ltype, u = 0; u < s; u++) {
        var d = i.readUshort(t, e);
        e += 2;
        var g = a2(t, l, n + d, o);
        o.tabs.push(g);
      }
      return o;
    }, r._lctf.numOfOnes = function(t) {
      for (var e = 0, a2 = 0; a2 < 32; a2++) (t >>> a2 & 1) != 0 && e++;
      return e;
    }, r._lctf.readClassDef = function(t, e) {
      var a2 = r._bin, i = [], n = a2.readUshort(t, e);
      if (e += 2, n == 1) {
        var o = a2.readUshort(t, e);
        e += 2;
        var s = a2.readUshort(t, e);
        e += 2;
        for (var l = 0; l < s; l++) i.push(o + l), i.push(o + l), i.push(a2.readUshort(t, e)), e += 2;
      }
      if (n == 2) {
        var u = a2.readUshort(t, e);
        for (e += 2, l = 0; l < u; l++) i.push(a2.readUshort(t, e)), e += 2, i.push(a2.readUshort(t, e)), e += 2, i.push(a2.readUshort(t, e)), e += 2;
      }
      return i;
    }, r._lctf.getInterval = function(t, e) {
      for (var a2 = 0; a2 < t.length; a2 += 3) {
        var i = t[a2], n = t[a2 + 1];
        if (t[a2 + 2], i <= e && e <= n) return a2;
      }
      return -1;
    }, r._lctf.readCoverage = function(t, e) {
      var a2 = r._bin, i = {};
      i.fmt = a2.readUshort(t, e), e += 2;
      var n = a2.readUshort(t, e);
      return e += 2, i.fmt == 1 && (i.tab = a2.readUshorts(t, e, n)), i.fmt == 2 && (i.tab = a2.readUshorts(t, e, 3 * n)), i;
    }, r._lctf.coverageIndex = function(t, e) {
      var a2 = t.tab;
      if (t.fmt == 1) return a2.indexOf(e);
      if (t.fmt == 2) {
        var i = r._lctf.getInterval(a2, e);
        if (i != -1) return a2[i + 2] + (e - a2[i]);
      }
      return -1;
    }, r._lctf.readFeatureList = function(t, e) {
      var a2 = r._bin, i = e, n = [], o = a2.readUshort(t, e);
      e += 2;
      for (var s = 0; s < o; s++) {
        var l = a2.readASCII(t, e, 4);
        e += 4;
        var u = a2.readUshort(t, e);
        e += 2;
        var d = r._lctf.readFeatureTable(t, i + u);
        d.tag = l.trim(), n.push(d);
      }
      return n;
    }, r._lctf.readFeatureTable = function(t, e) {
      var a2 = r._bin, i = e, n = {}, o = a2.readUshort(t, e);
      e += 2, o > 0 && (n.featureParams = i + o);
      var s = a2.readUshort(t, e);
      e += 2, n.tab = [];
      for (var l = 0; l < s; l++) n.tab.push(a2.readUshort(t, e + 2 * l));
      return n;
    }, r._lctf.readScriptList = function(t, e) {
      var a2 = r._bin, i = e, n = {}, o = a2.readUshort(t, e);
      e += 2;
      for (var s = 0; s < o; s++) {
        var l = a2.readASCII(t, e, 4);
        e += 4;
        var u = a2.readUshort(t, e);
        e += 2, n[l.trim()] = r._lctf.readScriptTable(t, i + u);
      }
      return n;
    }, r._lctf.readScriptTable = function(t, e) {
      var a2 = r._bin, i = e, n = {}, o = a2.readUshort(t, e);
      e += 2, o > 0 && (n.default = r._lctf.readLangSysTable(t, i + o));
      var s = a2.readUshort(t, e);
      e += 2;
      for (var l = 0; l < s; l++) {
        var u = a2.readASCII(t, e, 4);
        e += 4;
        var d = a2.readUshort(t, e);
        e += 2, n[u.trim()] = r._lctf.readLangSysTable(t, i + d);
      }
      return n;
    }, r._lctf.readLangSysTable = function(t, e) {
      var a2 = r._bin, i = {};
      a2.readUshort(t, e), e += 2, i.reqFeature = a2.readUshort(t, e), e += 2;
      var n = a2.readUshort(t, e);
      return e += 2, i.features = a2.readUshorts(t, e, n), i;
    }, r.CFF = {}, r.CFF.parse = function(t, e, a2) {
      var i = r._bin;
      (t = new Uint8Array(t.buffer, e, a2))[e = 0], t[++e], t[++e], t[++e], e++;
      var n = [];
      e = r.CFF.readIndex(t, e, n);
      for (var o = [], s = 0; s < n.length - 1; s++) o.push(i.readASCII(t, e + n[s], n[s + 1] - n[s]));
      e += n[n.length - 1];
      var l = [];
      e = r.CFF.readIndex(t, e, l);
      var u = [];
      for (s = 0; s < l.length - 1; s++) u.push(r.CFF.readDict(t, e + l[s], e + l[s + 1]));
      e += l[l.length - 1];
      var d = u[0], g = [];
      e = r.CFF.readIndex(t, e, g);
      var m = [];
      for (s = 0; s < g.length - 1; s++) m.push(i.readASCII(t, e + g[s], g[s + 1] - g[s]));
      if (e += g[g.length - 1], r.CFF.readSubrs(t, e, d), d.CharStrings) {
        e = d.CharStrings, g = [], e = r.CFF.readIndex(t, e, g);
        var y = [];
        for (s = 0; s < g.length - 1; s++) y.push(i.readBytes(t, e + g[s], g[s + 1] - g[s]));
        d.CharStrings = y;
      }
      if (d.ROS) {
        e = d.FDArray;
        var E = [];
        for (e = r.CFF.readIndex(t, e, E), d.FDArray = [], s = 0; s < E.length - 1; s++) {
          var S = r.CFF.readDict(t, e + E[s], e + E[s + 1]);
          r.CFF._readFDict(t, S, m), d.FDArray.push(S);
        }
        e += E[E.length - 1], e = d.FDSelect, d.FDSelect = [];
        var U = t[e];
        if (e++, U != 3) throw U;
        var k = i.readUshort(t, e);
        for (e += 2, s = 0; s < k + 1; s++) d.FDSelect.push(i.readUshort(t, e), t[e + 2]), e += 3;
      }
      return d.Encoding && (d.Encoding = r.CFF.readEncoding(t, d.Encoding, d.CharStrings.length)), d.charset && (d.charset = r.CFF.readCharset(t, d.charset, d.CharStrings.length)), r.CFF._readFDict(t, d, m), d;
    }, r.CFF._readFDict = function(t, e, a2) {
      var i;
      for (var n in e.Private && (i = e.Private[1], e.Private = r.CFF.readDict(t, i, i + e.Private[0]), e.Private.Subrs && r.CFF.readSubrs(t, i + e.Private.Subrs, e.Private)), e) ["FamilyName", "FontName", "FullName", "Notice", "version", "Copyright"].indexOf(n) != -1 && (e[n] = a2[e[n] - 426 + 35]);
    }, r.CFF.readSubrs = function(t, e, a2) {
      var i = r._bin, n = [];
      e = r.CFF.readIndex(t, e, n);
      var o, s = n.length;
      o = s < 1240 ? 107 : s < 33900 ? 1131 : 32768, a2.Bias = o, a2.Subrs = [];
      for (var l = 0; l < n.length - 1; l++) a2.Subrs.push(i.readBytes(t, e + n[l], n[l + 1] - n[l]));
    }, r.CFF.tableSE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119, 120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133, 0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0, 146, 147, 148, 149, 0, 0, 0, 0], r.CFF.glyphByUnicode = function(t, e) {
      for (var a2 = 0; a2 < t.charset.length; a2++) if (t.charset[a2] == e) return a2;
      return -1;
    }, r.CFF.glyphBySE = function(t, e) {
      return e < 0 || e > 255 ? -1 : r.CFF.glyphByUnicode(t, r.CFF.tableSE[e]);
    }, r.CFF.readEncoding = function(t, e, a2) {
      r._bin;
      var i = [".notdef"], n = t[e];
      if (e++, n != 0) throw "error: unknown encoding format: " + n;
      var o = t[e];
      e++;
      for (var s = 0; s < o; s++) i.push(t[e + s]);
      return i;
    }, r.CFF.readCharset = function(t, e, a2) {
      var i = r._bin, n = [".notdef"], o = t[e];
      if (e++, o == 0) for (var s = 0; s < a2; s++) {
        var l = i.readUshort(t, e);
        e += 2, n.push(l);
      }
      else {
        if (o != 1 && o != 2) throw "error: format: " + o;
        for (; n.length < a2; ) {
          l = i.readUshort(t, e), e += 2;
          var u = 0;
          for (o == 1 ? (u = t[e], e++) : (u = i.readUshort(t, e), e += 2), s = 0; s <= u; s++) n.push(l), l++;
        }
      }
      return n;
    }, r.CFF.readIndex = function(t, e, a2) {
      var i = r._bin, n = i.readUshort(t, e) + 1, o = t[e += 2];
      if (e++, o == 1) for (var s = 0; s < n; s++) a2.push(t[e + s]);
      else if (o == 2) for (s = 0; s < n; s++) a2.push(i.readUshort(t, e + 2 * s));
      else if (o == 3) for (s = 0; s < n; s++) a2.push(16777215 & i.readUint(t, e + 3 * s - 1));
      else if (n != 1) throw "unsupported offset size: " + o + ", count: " + n;
      return (e += n * o) - 1;
    }, r.CFF.getCharString = function(t, e, a2) {
      var i = r._bin, n = t[e], o = t[e + 1];
      t[e + 2], t[e + 3], t[e + 4];
      var s = 1, l = null, u = null;
      n <= 20 && (l = n, s = 1), n == 12 && (l = 100 * n + o, s = 2), 21 <= n && n <= 27 && (l = n, s = 1), n == 28 && (u = i.readShort(t, e + 1), s = 3), 29 <= n && n <= 31 && (l = n, s = 1), 32 <= n && n <= 246 && (u = n - 139, s = 1), 247 <= n && n <= 250 && (u = 256 * (n - 247) + o + 108, s = 2), 251 <= n && n <= 254 && (u = 256 * -(n - 251) - o - 108, s = 2), n == 255 && (u = i.readInt(t, e + 1) / 65535, s = 5), a2.val = u != null ? u : "o" + l, a2.size = s;
    }, r.CFF.readCharString = function(t, e, a2) {
      for (var i = e + a2, n = r._bin, o = []; e < i; ) {
        var s = t[e], l = t[e + 1];
        t[e + 2], t[e + 3], t[e + 4];
        var u = 1, d = null, g = null;
        s <= 20 && (d = s, u = 1), s == 12 && (d = 100 * s + l, u = 2), s != 19 && s != 20 || (d = s, u = 2), 21 <= s && s <= 27 && (d = s, u = 1), s == 28 && (g = n.readShort(t, e + 1), u = 3), 29 <= s && s <= 31 && (d = s, u = 1), 32 <= s && s <= 246 && (g = s - 139, u = 1), 247 <= s && s <= 250 && (g = 256 * (s - 247) + l + 108, u = 2), 251 <= s && s <= 254 && (g = 256 * -(s - 251) - l - 108, u = 2), s == 255 && (g = n.readInt(t, e + 1) / 65535, u = 5), o.push(g != null ? g : "o" + d), e += u;
      }
      return o;
    }, r.CFF.readDict = function(t, e, a2) {
      for (var i = r._bin, n = {}, o = []; e < a2; ) {
        var s = t[e], l = t[e + 1];
        t[e + 2], t[e + 3], t[e + 4];
        var u = 1, d = null, g = null;
        if (s == 28 && (g = i.readShort(t, e + 1), u = 3), s == 29 && (g = i.readInt(t, e + 1), u = 5), 32 <= s && s <= 246 && (g = s - 139, u = 1), 247 <= s && s <= 250 && (g = 256 * (s - 247) + l + 108, u = 2), 251 <= s && s <= 254 && (g = 256 * -(s - 251) - l - 108, u = 2), s == 255) throw g = i.readInt(t, e + 1) / 65535, u = 5, "unknown number";
        if (s == 30) {
          var m = [];
          for (u = 1; ; ) {
            var y = t[e + u];
            u++;
            var E = y >> 4, S = 15 & y;
            if (E != 15 && m.push(E), S != 15 && m.push(S), S == 15) break;
          }
          for (var U = "", k = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"], w = 0; w < m.length; w++) U += k[m[w]];
          g = parseFloat(U);
        }
        s <= 21 && (d = ["version", "Notice", "FullName", "FamilyName", "Weight", "FontBBox", "BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StdHW", "StdVW", "escape", "UniqueID", "XUID", "charset", "Encoding", "CharStrings", "Private", "Subrs", "defaultWidthX", "nominalWidthX"][s], u = 1, s == 12 && (d = ["Copyright", "isFixedPitch", "ItalicAngle", "UnderlinePosition", "UnderlineThickness", "PaintType", "CharstringType", "FontMatrix", "StrokeWidth", "BlueScale", "BlueShift", "BlueFuzz", "StemSnapH", "StemSnapV", "ForceBold", 0, 0, "LanguageGroup", "ExpansionFactor", "initialRandomSeed", "SyntheticBase", "PostScript", "BaseFontName", "BaseFontBlend", 0, 0, 0, 0, 0, 0, "ROS", "CIDFontVersion", "CIDFontRevision", "CIDFontType", "CIDCount", "UIDBase", "FDArray", "FDSelect", "FontName"][l], u = 2)), d != null ? (n[d] = o.length == 1 ? o[0] : o, o = []) : o.push(g), e += u;
      }
      return n;
    }, r.cmap = {}, r.cmap.parse = function(t, e, a2) {
      t = new Uint8Array(t.buffer, e, a2), e = 0;
      var i = r._bin, n = {};
      i.readUshort(t, e), e += 2;
      var o = i.readUshort(t, e);
      e += 2;
      var s = [];
      n.tables = [];
      for (var l = 0; l < o; l++) {
        var u = i.readUshort(t, e);
        e += 2;
        var d = i.readUshort(t, e);
        e += 2;
        var g = i.readUint(t, e);
        e += 4;
        var m = "p" + u + "e" + d, y = s.indexOf(g);
        if (y == -1) {
          var E;
          y = n.tables.length, s.push(g);
          var S = i.readUshort(t, g);
          S == 0 ? E = r.cmap.parse0(t, g) : S == 4 ? E = r.cmap.parse4(t, g) : S == 6 ? E = r.cmap.parse6(t, g) : S == 12 ? E = r.cmap.parse12(t, g) : console.debug("unknown format: " + S, u, d, g), n.tables.push(E);
        }
        if (n[m] != null) throw "multiple tables for one platform+encoding";
        n[m] = y;
      }
      return n;
    }, r.cmap.parse0 = function(t, e) {
      var a2 = r._bin, i = {};
      i.format = a2.readUshort(t, e), e += 2;
      var n = a2.readUshort(t, e);
      e += 2, a2.readUshort(t, e), e += 2, i.map = [];
      for (var o = 0; o < n - 6; o++) i.map.push(t[e + o]);
      return i;
    }, r.cmap.parse4 = function(t, e) {
      var a2 = r._bin, i = e, n = {};
      n.format = a2.readUshort(t, e), e += 2;
      var o = a2.readUshort(t, e);
      e += 2, a2.readUshort(t, e), e += 2;
      var s = a2.readUshort(t, e);
      e += 2;
      var l = s / 2;
      n.searchRange = a2.readUshort(t, e), e += 2, n.entrySelector = a2.readUshort(t, e), e += 2, n.rangeShift = a2.readUshort(t, e), e += 2, n.endCount = a2.readUshorts(t, e, l), e += 2 * l, e += 2, n.startCount = a2.readUshorts(t, e, l), e += 2 * l, n.idDelta = [];
      for (var u = 0; u < l; u++) n.idDelta.push(a2.readShort(t, e)), e += 2;
      for (n.idRangeOffset = a2.readUshorts(t, e, l), e += 2 * l, n.glyphIdArray = []; e < i + o; ) n.glyphIdArray.push(a2.readUshort(t, e)), e += 2;
      return n;
    }, r.cmap.parse6 = function(t, e) {
      var a2 = r._bin, i = {};
      i.format = a2.readUshort(t, e), e += 2, a2.readUshort(t, e), e += 2, a2.readUshort(t, e), e += 2, i.firstCode = a2.readUshort(t, e), e += 2;
      var n = a2.readUshort(t, e);
      e += 2, i.glyphIdArray = [];
      for (var o = 0; o < n; o++) i.glyphIdArray.push(a2.readUshort(t, e)), e += 2;
      return i;
    }, r.cmap.parse12 = function(t, e) {
      var a2 = r._bin, i = {};
      i.format = a2.readUshort(t, e), e += 2, e += 2, a2.readUint(t, e), e += 4, a2.readUint(t, e), e += 4;
      var n = a2.readUint(t, e);
      e += 4, i.groups = [];
      for (var o = 0; o < n; o++) {
        var s = e + 12 * o, l = a2.readUint(t, s + 0), u = a2.readUint(t, s + 4), d = a2.readUint(t, s + 8);
        i.groups.push([l, u, d]);
      }
      return i;
    }, r.glyf = {}, r.glyf.parse = function(t, e, a2, i) {
      for (var n = [], o = 0; o < i.maxp.numGlyphs; o++) n.push(null);
      return n;
    }, r.glyf._parseGlyf = function(t, e) {
      var a2 = r._bin, i = t._data, n = r._tabOffset(i, "glyf", t._offset) + t.loca[e];
      if (t.loca[e] == t.loca[e + 1]) return null;
      var o = {};
      if (o.noc = a2.readShort(i, n), n += 2, o.xMin = a2.readShort(i, n), n += 2, o.yMin = a2.readShort(i, n), n += 2, o.xMax = a2.readShort(i, n), n += 2, o.yMax = a2.readShort(i, n), n += 2, o.xMin >= o.xMax || o.yMin >= o.yMax) return null;
      if (o.noc > 0) {
        o.endPts = [];
        for (var s = 0; s < o.noc; s++) o.endPts.push(a2.readUshort(i, n)), n += 2;
        var l = a2.readUshort(i, n);
        if (n += 2, i.length - n < l) return null;
        o.instructions = a2.readBytes(i, n, l), n += l;
        var u = o.endPts[o.noc - 1] + 1;
        for (o.flags = [], s = 0; s < u; s++) {
          var d = i[n];
          if (n++, o.flags.push(d), (8 & d) != 0) {
            var g = i[n];
            n++;
            for (var m = 0; m < g; m++) o.flags.push(d), s++;
          }
        }
        for (o.xs = [], s = 0; s < u; s++) {
          var y = (2 & o.flags[s]) != 0, E = (16 & o.flags[s]) != 0;
          y ? (o.xs.push(E ? i[n] : -i[n]), n++) : E ? o.xs.push(0) : (o.xs.push(a2.readShort(i, n)), n += 2);
        }
        for (o.ys = [], s = 0; s < u; s++) y = (4 & o.flags[s]) != 0, E = (32 & o.flags[s]) != 0, y ? (o.ys.push(E ? i[n] : -i[n]), n++) : E ? o.ys.push(0) : (o.ys.push(a2.readShort(i, n)), n += 2);
        var S = 0, U = 0;
        for (s = 0; s < u; s++) S += o.xs[s], U += o.ys[s], o.xs[s] = S, o.ys[s] = U;
      } else {
        var k;
        o.parts = [];
        do {
          k = a2.readUshort(i, n), n += 2;
          var w = { m: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, p1: -1, p2: -1 };
          if (o.parts.push(w), w.glyphIndex = a2.readUshort(i, n), n += 2, 1 & k) {
            var D = a2.readShort(i, n);
            n += 2;
            var x = a2.readShort(i, n);
            n += 2;
          } else D = a2.readInt8(i, n), n++, x = a2.readInt8(i, n), n++;
          2 & k ? (w.m.tx = D, w.m.ty = x) : (w.p1 = D, w.p2 = x), 8 & k ? (w.m.a = w.m.d = a2.readF2dot14(i, n), n += 2) : 64 & k ? (w.m.a = a2.readF2dot14(i, n), n += 2, w.m.d = a2.readF2dot14(i, n), n += 2) : 128 & k && (w.m.a = a2.readF2dot14(i, n), n += 2, w.m.b = a2.readF2dot14(i, n), n += 2, w.m.c = a2.readF2dot14(i, n), n += 2, w.m.d = a2.readF2dot14(i, n), n += 2);
        } while (32 & k);
        if (256 & k) {
          var A = a2.readUshort(i, n);
          for (n += 2, o.instr = [], s = 0; s < A; s++) o.instr.push(i[n]), n++;
        }
      }
      return o;
    }, r.GDEF = {}, r.GDEF.parse = function(t, e, a2, i) {
      var n = e;
      e += 4;
      var o = r._bin.readUshort(t, e);
      return { glyphClassDef: o === 0 ? null : r._lctf.readClassDef(t, n + o) };
    }, r.GPOS = {}, r.GPOS.parse = function(t, e, a2, i) {
      return r._lctf.parse(t, e, a2, i, r.GPOS.subt);
    }, r.GPOS.subt = function(t, e, a2, i) {
      var n = r._bin, o = a2, s = {};
      if (s.fmt = n.readUshort(t, a2), a2 += 2, e == 1 || e == 2 || e == 3 || e == 7 || e == 8 && s.fmt <= 2) {
        var l = n.readUshort(t, a2);
        a2 += 2, s.coverage = r._lctf.readCoverage(t, l + o);
      }
      if (e == 1 && s.fmt == 1) {
        var u = n.readUshort(t, a2);
        a2 += 2, u != 0 && (s.pos = r.GPOS.readValueRecord(t, a2, u));
      } else if (e == 2 && s.fmt >= 1 && s.fmt <= 2) {
        u = n.readUshort(t, a2), a2 += 2;
        var d = n.readUshort(t, a2);
        a2 += 2;
        var g = r._lctf.numOfOnes(u), m = r._lctf.numOfOnes(d);
        if (s.fmt == 1) {
          s.pairsets = [];
          var y = n.readUshort(t, a2);
          a2 += 2;
          for (var E = 0; E < y; E++) {
            var S = o + n.readUshort(t, a2);
            a2 += 2;
            var U = n.readUshort(t, S);
            S += 2;
            for (var k = [], w = 0; w < U; w++) {
              var D = n.readUshort(t, S);
              S += 2, u != 0 && (b = r.GPOS.readValueRecord(t, S, u), S += 2 * g), d != 0 && (R = r.GPOS.readValueRecord(t, S, d), S += 2 * m), k.push({ gid2: D, val1: b, val2: R });
            }
            s.pairsets.push(k);
          }
        }
        if (s.fmt == 2) {
          var x = n.readUshort(t, a2);
          a2 += 2;
          var A = n.readUshort(t, a2);
          a2 += 2;
          var W = n.readUshort(t, a2);
          a2 += 2;
          var O = n.readUshort(t, a2);
          for (a2 += 2, s.classDef1 = r._lctf.readClassDef(t, o + x), s.classDef2 = r._lctf.readClassDef(t, o + A), s.matrix = [], E = 0; E < W; E++) {
            var Y = [];
            for (w = 0; w < O; w++) {
              var b = null, R = null;
              u != 0 && (b = r.GPOS.readValueRecord(t, a2, u), a2 += 2 * g), d != 0 && (R = r.GPOS.readValueRecord(t, a2, d), a2 += 2 * m), Y.push({ val1: b, val2: R });
            }
            s.matrix.push(Y);
          }
        }
      } else if (e == 4 && s.fmt == 1) s.markCoverage = r._lctf.readCoverage(t, n.readUshort(t, a2) + o), s.baseCoverage = r._lctf.readCoverage(t, n.readUshort(t, a2 + 2) + o), s.markClassCount = n.readUshort(t, a2 + 4), s.markArray = r.GPOS.readMarkArray(t, n.readUshort(t, a2 + 6) + o), s.baseArray = r.GPOS.readBaseArray(t, n.readUshort(t, a2 + 8) + o, s.markClassCount);
      else if (e == 6 && s.fmt == 1) s.mark1Coverage = r._lctf.readCoverage(t, n.readUshort(t, a2) + o), s.mark2Coverage = r._lctf.readCoverage(t, n.readUshort(t, a2 + 2) + o), s.markClassCount = n.readUshort(t, a2 + 4), s.mark1Array = r.GPOS.readMarkArray(t, n.readUshort(t, a2 + 6) + o), s.mark2Array = r.GPOS.readBaseArray(t, n.readUshort(t, a2 + 8) + o, s.markClassCount);
      else {
        if (e == 9 && s.fmt == 1) {
          var F2 = n.readUshort(t, a2);
          a2 += 2;
          var j = n.readUint(t, a2);
          if (a2 += 4, i.ltype == 9) i.ltype = F2;
          else if (i.ltype != F2) throw "invalid extension substitution";
          return r.GPOS.subt(t, i.ltype, o + j);
        }
        console.debug("unsupported GPOS table LookupType", e, "format", s.fmt);
      }
      return s;
    }, r.GPOS.readValueRecord = function(t, e, a2) {
      var i = r._bin, n = [];
      return n.push(1 & a2 ? i.readShort(t, e) : 0), e += 1 & a2 ? 2 : 0, n.push(2 & a2 ? i.readShort(t, e) : 0), e += 2 & a2 ? 2 : 0, n.push(4 & a2 ? i.readShort(t, e) : 0), e += 4 & a2 ? 2 : 0, n.push(8 & a2 ? i.readShort(t, e) : 0), e += 8 & a2 ? 2 : 0, n;
    }, r.GPOS.readBaseArray = function(t, e, a2) {
      var i = r._bin, n = [], o = e, s = i.readUshort(t, e);
      e += 2;
      for (var l = 0; l < s; l++) {
        for (var u = [], d = 0; d < a2; d++) u.push(r.GPOS.readAnchorRecord(t, o + i.readUshort(t, e))), e += 2;
        n.push(u);
      }
      return n;
    }, r.GPOS.readMarkArray = function(t, e) {
      var a2 = r._bin, i = [], n = e, o = a2.readUshort(t, e);
      e += 2;
      for (var s = 0; s < o; s++) {
        var l = r.GPOS.readAnchorRecord(t, a2.readUshort(t, e + 2) + n);
        l.markClass = a2.readUshort(t, e), i.push(l), e += 4;
      }
      return i;
    }, r.GPOS.readAnchorRecord = function(t, e) {
      var a2 = r._bin, i = {};
      return i.fmt = a2.readUshort(t, e), i.x = a2.readShort(t, e + 2), i.y = a2.readShort(t, e + 4), i;
    }, r.GSUB = {}, r.GSUB.parse = function(t, e, a2, i) {
      return r._lctf.parse(t, e, a2, i, r.GSUB.subt);
    }, r.GSUB.subt = function(t, e, a2, i) {
      var n = r._bin, o = a2, s = {};
      if (s.fmt = n.readUshort(t, a2), a2 += 2, e != 1 && e != 2 && e != 4 && e != 5 && e != 6) return null;
      if (e == 1 || e == 2 || e == 4 || e == 5 && s.fmt <= 2 || e == 6 && s.fmt <= 2) {
        var l = n.readUshort(t, a2);
        a2 += 2, s.coverage = r._lctf.readCoverage(t, o + l);
      }
      if (e == 1 && s.fmt >= 1 && s.fmt <= 2) {
        if (s.fmt == 1) s.delta = n.readShort(t, a2), a2 += 2;
        else if (s.fmt == 2) {
          var u = n.readUshort(t, a2);
          a2 += 2, s.newg = n.readUshorts(t, a2, u), a2 += 2 * s.newg.length;
        }
      } else if (e == 2 && s.fmt == 1) {
        u = n.readUshort(t, a2), a2 += 2, s.seqs = [];
        for (var d = 0; d < u; d++) {
          var g = n.readUshort(t, a2) + o;
          a2 += 2;
          var m = n.readUshort(t, g);
          s.seqs.push(n.readUshorts(t, g + 2, m));
        }
      } else if (e == 4) for (s.vals = [], u = n.readUshort(t, a2), a2 += 2, d = 0; d < u; d++) {
        var y = n.readUshort(t, a2);
        a2 += 2, s.vals.push(r.GSUB.readLigatureSet(t, o + y));
      }
      else if (e == 5 && s.fmt == 2) {
        if (s.fmt == 2) {
          var E = n.readUshort(t, a2);
          a2 += 2, s.cDef = r._lctf.readClassDef(t, o + E), s.scset = [];
          var S = n.readUshort(t, a2);
          for (a2 += 2, d = 0; d < S; d++) {
            var U = n.readUshort(t, a2);
            a2 += 2, s.scset.push(U == 0 ? null : r.GSUB.readSubClassSet(t, o + U));
          }
        }
      } else if (e == 6 && s.fmt == 3) {
        if (s.fmt == 3) {
          for (d = 0; d < 3; d++) {
            u = n.readUshort(t, a2), a2 += 2;
            for (var k = [], w = 0; w < u; w++) k.push(r._lctf.readCoverage(t, o + n.readUshort(t, a2 + 2 * w)));
            a2 += 2 * u, d == 0 && (s.backCvg = k), d == 1 && (s.inptCvg = k), d == 2 && (s.ahedCvg = k);
          }
          u = n.readUshort(t, a2), a2 += 2, s.lookupRec = r.GSUB.readSubstLookupRecords(t, a2, u);
        }
      } else {
        if (e == 7 && s.fmt == 1) {
          var D = n.readUshort(t, a2);
          a2 += 2;
          var x = n.readUint(t, a2);
          if (a2 += 4, i.ltype == 9) i.ltype = D;
          else if (i.ltype != D) throw "invalid extension substitution";
          return r.GSUB.subt(t, i.ltype, o + x);
        }
        console.debug("unsupported GSUB table LookupType", e, "format", s.fmt);
      }
      return s;
    }, r.GSUB.readSubClassSet = function(t, e) {
      var a2 = r._bin.readUshort, i = e, n = [], o = a2(t, e);
      e += 2;
      for (var s = 0; s < o; s++) {
        var l = a2(t, e);
        e += 2, n.push(r.GSUB.readSubClassRule(t, i + l));
      }
      return n;
    }, r.GSUB.readSubClassRule = function(t, e) {
      var a2 = r._bin.readUshort, i = {}, n = a2(t, e), o = a2(t, e += 2);
      e += 2, i.input = [];
      for (var s = 0; s < n - 1; s++) i.input.push(a2(t, e)), e += 2;
      return i.substLookupRecords = r.GSUB.readSubstLookupRecords(t, e, o), i;
    }, r.GSUB.readSubstLookupRecords = function(t, e, a2) {
      for (var i = r._bin.readUshort, n = [], o = 0; o < a2; o++) n.push(i(t, e), i(t, e + 2)), e += 4;
      return n;
    }, r.GSUB.readChainSubClassSet = function(t, e) {
      var a2 = r._bin, i = e, n = [], o = a2.readUshort(t, e);
      e += 2;
      for (var s = 0; s < o; s++) {
        var l = a2.readUshort(t, e);
        e += 2, n.push(r.GSUB.readChainSubClassRule(t, i + l));
      }
      return n;
    }, r.GSUB.readChainSubClassRule = function(t, e) {
      for (var a2 = r._bin, i = {}, n = ["backtrack", "input", "lookahead"], o = 0; o < n.length; o++) {
        var s = a2.readUshort(t, e);
        e += 2, o == 1 && s--, i[n[o]] = a2.readUshorts(t, e, s), e += 2 * i[n[o]].length;
      }
      return s = a2.readUshort(t, e), e += 2, i.subst = a2.readUshorts(t, e, 2 * s), e += 2 * i.subst.length, i;
    }, r.GSUB.readLigatureSet = function(t, e) {
      var a2 = r._bin, i = e, n = [], o = a2.readUshort(t, e);
      e += 2;
      for (var s = 0; s < o; s++) {
        var l = a2.readUshort(t, e);
        e += 2, n.push(r.GSUB.readLigature(t, i + l));
      }
      return n;
    }, r.GSUB.readLigature = function(t, e) {
      var a2 = r._bin, i = { chain: [] };
      i.nglyph = a2.readUshort(t, e), e += 2;
      var n = a2.readUshort(t, e);
      e += 2;
      for (var o = 0; o < n - 1; o++) i.chain.push(a2.readUshort(t, e)), e += 2;
      return i;
    }, r.head = {}, r.head.parse = function(t, e, a2) {
      var i = r._bin, n = {};
      return i.readFixed(t, e), e += 4, n.fontRevision = i.readFixed(t, e), e += 4, i.readUint(t, e), e += 4, i.readUint(t, e), e += 4, n.flags = i.readUshort(t, e), e += 2, n.unitsPerEm = i.readUshort(t, e), e += 2, n.created = i.readUint64(t, e), e += 8, n.modified = i.readUint64(t, e), e += 8, n.xMin = i.readShort(t, e), e += 2, n.yMin = i.readShort(t, e), e += 2, n.xMax = i.readShort(t, e), e += 2, n.yMax = i.readShort(t, e), e += 2, n.macStyle = i.readUshort(t, e), e += 2, n.lowestRecPPEM = i.readUshort(t, e), e += 2, n.fontDirectionHint = i.readShort(t, e), e += 2, n.indexToLocFormat = i.readShort(t, e), e += 2, n.glyphDataFormat = i.readShort(t, e), e += 2, n;
    }, r.hhea = {}, r.hhea.parse = function(t, e, a2) {
      var i = r._bin, n = {};
      return i.readFixed(t, e), e += 4, n.ascender = i.readShort(t, e), e += 2, n.descender = i.readShort(t, e), e += 2, n.lineGap = i.readShort(t, e), e += 2, n.advanceWidthMax = i.readUshort(t, e), e += 2, n.minLeftSideBearing = i.readShort(t, e), e += 2, n.minRightSideBearing = i.readShort(t, e), e += 2, n.xMaxExtent = i.readShort(t, e), e += 2, n.caretSlopeRise = i.readShort(t, e), e += 2, n.caretSlopeRun = i.readShort(t, e), e += 2, n.caretOffset = i.readShort(t, e), e += 2, e += 8, n.metricDataFormat = i.readShort(t, e), e += 2, n.numberOfHMetrics = i.readUshort(t, e), e += 2, n;
    }, r.hmtx = {}, r.hmtx.parse = function(t, e, a2, i) {
      for (var n = r._bin, o = { aWidth: [], lsBearing: [] }, s = 0, l = 0, u = 0; u < i.maxp.numGlyphs; u++) u < i.hhea.numberOfHMetrics && (s = n.readUshort(t, e), e += 2, l = n.readShort(t, e), e += 2), o.aWidth.push(s), o.lsBearing.push(l);
      return o;
    }, r.kern = {}, r.kern.parse = function(t, e, a2, i) {
      var n = r._bin, o = n.readUshort(t, e);
      if (e += 2, o == 1) return r.kern.parseV1(t, e - 2, a2, i);
      var s = n.readUshort(t, e);
      e += 2;
      for (var l = { glyph1: [], rval: [] }, u = 0; u < s; u++) {
        e += 2, a2 = n.readUshort(t, e), e += 2;
        var d = n.readUshort(t, e);
        e += 2;
        var g = d >>> 8;
        if ((g &= 15) != 0) throw "unknown kern table format: " + g;
        e = r.kern.readFormat0(t, e, l);
      }
      return l;
    }, r.kern.parseV1 = function(t, e, a2, i) {
      var n = r._bin;
      n.readFixed(t, e), e += 4;
      var o = n.readUint(t, e);
      e += 4;
      for (var s = { glyph1: [], rval: [] }, l = 0; l < o; l++) {
        n.readUint(t, e), e += 4;
        var u = n.readUshort(t, e);
        e += 2, n.readUshort(t, e), e += 2;
        var d = u >>> 8;
        if ((d &= 15) != 0) throw "unknown kern table format: " + d;
        e = r.kern.readFormat0(t, e, s);
      }
      return s;
    }, r.kern.readFormat0 = function(t, e, a2) {
      var i = r._bin, n = -1, o = i.readUshort(t, e);
      e += 2, i.readUshort(t, e), e += 2, i.readUshort(t, e), e += 2, i.readUshort(t, e), e += 2;
      for (var s = 0; s < o; s++) {
        var l = i.readUshort(t, e);
        e += 2;
        var u = i.readUshort(t, e);
        e += 2;
        var d = i.readShort(t, e);
        e += 2, l != n && (a2.glyph1.push(l), a2.rval.push({ glyph2: [], vals: [] }));
        var g = a2.rval[a2.rval.length - 1];
        g.glyph2.push(u), g.vals.push(d), n = l;
      }
      return e;
    }, r.loca = {}, r.loca.parse = function(t, e, a2, i) {
      var n = r._bin, o = [], s = i.head.indexToLocFormat, l = i.maxp.numGlyphs + 1;
      if (s == 0) for (var u = 0; u < l; u++) o.push(n.readUshort(t, e + (u << 1)) << 1);
      if (s == 1) for (u = 0; u < l; u++) o.push(n.readUint(t, e + (u << 2)));
      return o;
    }, r.maxp = {}, r.maxp.parse = function(t, e, a2) {
      var i = r._bin, n = {}, o = i.readUint(t, e);
      return e += 4, n.numGlyphs = i.readUshort(t, e), e += 2, o == 65536 && (n.maxPoints = i.readUshort(t, e), e += 2, n.maxContours = i.readUshort(t, e), e += 2, n.maxCompositePoints = i.readUshort(t, e), e += 2, n.maxCompositeContours = i.readUshort(t, e), e += 2, n.maxZones = i.readUshort(t, e), e += 2, n.maxTwilightPoints = i.readUshort(t, e), e += 2, n.maxStorage = i.readUshort(t, e), e += 2, n.maxFunctionDefs = i.readUshort(t, e), e += 2, n.maxInstructionDefs = i.readUshort(t, e), e += 2, n.maxStackElements = i.readUshort(t, e), e += 2, n.maxSizeOfInstructions = i.readUshort(t, e), e += 2, n.maxComponentElements = i.readUshort(t, e), e += 2, n.maxComponentDepth = i.readUshort(t, e), e += 2), n;
    }, r.name = {}, r.name.parse = function(t, e, a2) {
      var i = r._bin, n = {};
      i.readUshort(t, e), e += 2;
      var o = i.readUshort(t, e);
      e += 2, i.readUshort(t, e);
      for (var s, l = ["copyright", "fontFamily", "fontSubfamily", "ID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "urlVendor", "urlDesigner", "licence", "licenceURL", "---", "typoFamilyName", "typoSubfamilyName", "compatibleFull", "sampleText", "postScriptCID", "wwsFamilyName", "wwsSubfamilyName", "lightPalette", "darkPalette"], u = e += 2, d = 0; d < o; d++) {
        var g = i.readUshort(t, e);
        e += 2;
        var m = i.readUshort(t, e);
        e += 2;
        var y = i.readUshort(t, e);
        e += 2;
        var E = i.readUshort(t, e);
        e += 2;
        var S = i.readUshort(t, e);
        e += 2;
        var U = i.readUshort(t, e);
        e += 2;
        var k, w = l[E], D = u + 12 * o + U;
        if (g == 0) k = i.readUnicode(t, D, S / 2);
        else if (g == 3 && m == 0) k = i.readUnicode(t, D, S / 2);
        else if (m == 0) k = i.readASCII(t, D, S);
        else if (m == 1) k = i.readUnicode(t, D, S / 2);
        else if (m == 3) k = i.readUnicode(t, D, S / 2);
        else {
          if (g != 1) throw "unknown encoding " + m + ", platformID: " + g;
          k = i.readASCII(t, D, S), console.debug("reading unknown MAC encoding " + m + " as ASCII");
        }
        var x = "p" + g + "," + y.toString(16);
        n[x] == null && (n[x] = {}), n[x][w !== void 0 ? w : E] = k, n[x]._lang = y;
      }
      for (var A in n) if (n[A].postScriptName != null && n[A]._lang == 1033) return n[A];
      for (var A in n) if (n[A].postScriptName != null && n[A]._lang == 0) return n[A];
      for (var A in n) if (n[A].postScriptName != null && n[A]._lang == 3084) return n[A];
      for (var A in n) if (n[A].postScriptName != null) return n[A];
      for (var A in n) {
        s = A;
        break;
      }
      return console.debug("returning name table with languageID " + n[s]._lang), n[s];
    }, r["OS/2"] = {}, r["OS/2"].parse = function(t, e, a2) {
      var i = r._bin.readUshort(t, e);
      e += 2;
      var n = {};
      if (i == 0) r["OS/2"].version0(t, e, n);
      else if (i == 1) r["OS/2"].version1(t, e, n);
      else if (i == 2 || i == 3 || i == 4) r["OS/2"].version2(t, e, n);
      else {
        if (i != 5) throw "unknown OS/2 table version: " + i;
        r["OS/2"].version5(t, e, n);
      }
      return n;
    }, r["OS/2"].version0 = function(t, e, a2) {
      var i = r._bin;
      return a2.xAvgCharWidth = i.readShort(t, e), e += 2, a2.usWeightClass = i.readUshort(t, e), e += 2, a2.usWidthClass = i.readUshort(t, e), e += 2, a2.fsType = i.readUshort(t, e), e += 2, a2.ySubscriptXSize = i.readShort(t, e), e += 2, a2.ySubscriptYSize = i.readShort(t, e), e += 2, a2.ySubscriptXOffset = i.readShort(t, e), e += 2, a2.ySubscriptYOffset = i.readShort(t, e), e += 2, a2.ySuperscriptXSize = i.readShort(t, e), e += 2, a2.ySuperscriptYSize = i.readShort(t, e), e += 2, a2.ySuperscriptXOffset = i.readShort(t, e), e += 2, a2.ySuperscriptYOffset = i.readShort(t, e), e += 2, a2.yStrikeoutSize = i.readShort(t, e), e += 2, a2.yStrikeoutPosition = i.readShort(t, e), e += 2, a2.sFamilyClass = i.readShort(t, e), e += 2, a2.panose = i.readBytes(t, e, 10), e += 10, a2.ulUnicodeRange1 = i.readUint(t, e), e += 4, a2.ulUnicodeRange2 = i.readUint(t, e), e += 4, a2.ulUnicodeRange3 = i.readUint(t, e), e += 4, a2.ulUnicodeRange4 = i.readUint(t, e), e += 4, a2.achVendID = [i.readInt8(t, e), i.readInt8(t, e + 1), i.readInt8(t, e + 2), i.readInt8(t, e + 3)], e += 4, a2.fsSelection = i.readUshort(t, e), e += 2, a2.usFirstCharIndex = i.readUshort(t, e), e += 2, a2.usLastCharIndex = i.readUshort(t, e), e += 2, a2.sTypoAscender = i.readShort(t, e), e += 2, a2.sTypoDescender = i.readShort(t, e), e += 2, a2.sTypoLineGap = i.readShort(t, e), e += 2, a2.usWinAscent = i.readUshort(t, e), e += 2, a2.usWinDescent = i.readUshort(t, e), e += 2;
    }, r["OS/2"].version1 = function(t, e, a2) {
      var i = r._bin;
      return e = r["OS/2"].version0(t, e, a2), a2.ulCodePageRange1 = i.readUint(t, e), e += 4, a2.ulCodePageRange2 = i.readUint(t, e), e += 4;
    }, r["OS/2"].version2 = function(t, e, a2) {
      var i = r._bin;
      return e = r["OS/2"].version1(t, e, a2), a2.sxHeight = i.readShort(t, e), e += 2, a2.sCapHeight = i.readShort(t, e), e += 2, a2.usDefault = i.readUshort(t, e), e += 2, a2.usBreak = i.readUshort(t, e), e += 2, a2.usMaxContext = i.readUshort(t, e), e += 2;
    }, r["OS/2"].version5 = function(t, e, a2) {
      var i = r._bin;
      return e = r["OS/2"].version2(t, e, a2), a2.usLowerOpticalPointSize = i.readUshort(t, e), e += 2, a2.usUpperOpticalPointSize = i.readUshort(t, e), e += 2;
    }, r.post = {}, r.post.parse = function(t, e, a2) {
      var i = r._bin, n = {};
      return n.version = i.readFixed(t, e), e += 4, n.italicAngle = i.readFixed(t, e), e += 4, n.underlinePosition = i.readShort(t, e), e += 2, n.underlineThickness = i.readShort(t, e), e += 2, n;
    }, r == null && (r = {}), r.U == null && (r.U = {}), r.U.codeToGlyph = function(t, e) {
      var a2 = t.cmap, i = -1;
      if (a2.p0e4 != null ? i = a2.p0e4 : a2.p3e1 != null ? i = a2.p3e1 : a2.p1e0 != null ? i = a2.p1e0 : a2.p0e3 != null && (i = a2.p0e3), i == -1) throw "no familiar platform and encoding!";
      var n = a2.tables[i];
      if (n.format == 0) return e >= n.map.length ? 0 : n.map[e];
      if (n.format == 4) {
        for (var o = -1, s = 0; s < n.endCount.length; s++) if (e <= n.endCount[s]) {
          o = s;
          break;
        }
        return o == -1 || n.startCount[o] > e ? 0 : 65535 & (n.idRangeOffset[o] != 0 ? n.glyphIdArray[e - n.startCount[o] + (n.idRangeOffset[o] >> 1) - (n.idRangeOffset.length - o)] : e + n.idDelta[o]);
      }
      if (n.format == 12) {
        if (e > n.groups[n.groups.length - 1][1]) return 0;
        for (s = 0; s < n.groups.length; s++) {
          var l = n.groups[s];
          if (l[0] <= e && e <= l[1]) return l[2] + (e - l[0]);
        }
        return 0;
      }
      throw "unknown cmap table format " + n.format;
    }, r.U.glyphToPath = function(t, e) {
      var a2 = { cmds: [], crds: [] };
      if (t.SVG && t.SVG.entries[e]) {
        var i = t.SVG.entries[e];
        return i == null ? a2 : (typeof i == "string" && (i = r.SVG.toPath(i), t.SVG.entries[e] = i), i);
      }
      if (t.CFF) {
        var n = { x: 0, y: 0, stack: [], nStems: 0, haveWidth: false, width: t.CFF.Private ? t.CFF.Private.defaultWidthX : 0, open: false }, o = t.CFF, s = t.CFF.Private;
        if (o.ROS) {
          for (var l = 0; o.FDSelect[l + 2] <= e; ) l += 2;
          s = o.FDArray[o.FDSelect[l + 1]].Private;
        }
        r.U._drawCFF(t.CFF.CharStrings[e], n, o, s, a2);
      } else t.glyf && r.U._drawGlyf(e, t, a2);
      return a2;
    }, r.U._drawGlyf = function(t, e, a2) {
      var i = e.glyf[t];
      i == null && (i = e.glyf[t] = r.glyf._parseGlyf(e, t)), i != null && (i.noc > -1 ? r.U._simpleGlyph(i, a2) : r.U._compoGlyph(i, e, a2));
    }, r.U._simpleGlyph = function(t, e) {
      for (var a2 = 0; a2 < t.noc; a2++) {
        for (var i = a2 == 0 ? 0 : t.endPts[a2 - 1] + 1, n = t.endPts[a2], o = i; o <= n; o++) {
          var s = o == i ? n : o - 1, l = o == n ? i : o + 1, u = 1 & t.flags[o], d = 1 & t.flags[s], g = 1 & t.flags[l], m = t.xs[o], y = t.ys[o];
          if (o == i) if (u) {
            if (!d) {
              r.U.P.moveTo(e, m, y);
              continue;
            }
            r.U.P.moveTo(e, t.xs[s], t.ys[s]);
          } else d ? r.U.P.moveTo(e, t.xs[s], t.ys[s]) : r.U.P.moveTo(e, (t.xs[s] + m) / 2, (t.ys[s] + y) / 2);
          u ? d && r.U.P.lineTo(e, m, y) : g ? r.U.P.qcurveTo(e, m, y, t.xs[l], t.ys[l]) : r.U.P.qcurveTo(e, m, y, (m + t.xs[l]) / 2, (y + t.ys[l]) / 2);
        }
        r.U.P.closePath(e);
      }
    }, r.U._compoGlyph = function(t, e, a2) {
      for (var i = 0; i < t.parts.length; i++) {
        var n = { cmds: [], crds: [] }, o = t.parts[i];
        r.U._drawGlyf(o.glyphIndex, e, n);
        for (var s = o.m, l = 0; l < n.crds.length; l += 2) {
          var u = n.crds[l], d = n.crds[l + 1];
          a2.crds.push(u * s.a + d * s.b + s.tx), a2.crds.push(u * s.c + d * s.d + s.ty);
        }
        for (l = 0; l < n.cmds.length; l++) a2.cmds.push(n.cmds[l]);
      }
    }, r.U._getGlyphClass = function(t, e) {
      var a2 = r._lctf.getInterval(e, t);
      return a2 == -1 ? 0 : e[a2 + 2];
    }, r.U._applySubs = function(t, e, a2, i) {
      for (var n = t.length - e - 1, o = 0; o < a2.tabs.length; o++) if (a2.tabs[o] != null) {
        var s, l = a2.tabs[o];
        if (!l.coverage || (s = r._lctf.coverageIndex(l.coverage, t[e])) != -1) {
          if (a2.ltype == 1) t[e], l.fmt == 1 ? t[e] = t[e] + l.delta : t[e] = l.newg[s];
          else if (a2.ltype == 4) for (var u = l.vals[s], d = 0; d < u.length; d++) {
            var g = u[d], m = g.chain.length;
            if (!(m > n)) {
              for (var y = true, E = 0, S = 0; S < m; S++) {
                for (; t[e + E + (1 + S)] == -1; ) E++;
                g.chain[S] != t[e + E + (1 + S)] && (y = false);
              }
              if (y) {
                for (t[e] = g.nglyph, S = 0; S < m + E; S++) t[e + S + 1] = -1;
                break;
              }
            }
          }
          else if (a2.ltype == 5 && l.fmt == 2) for (var U = r._lctf.getInterval(l.cDef, t[e]), k = l.cDef[U + 2], w = l.scset[k], D = 0; D < w.length; D++) {
            var x = w[D], A = x.input;
            if (!(A.length > n)) {
              for (y = true, S = 0; S < A.length; S++) {
                var W = r._lctf.getInterval(l.cDef, t[e + 1 + S]);
                if (U == -1 && l.cDef[W + 2] != A[S]) {
                  y = false;
                  break;
                }
              }
              if (y) {
                var O = x.substLookupRecords;
                for (d = 0; d < O.length; d += 2) O[d], O[d + 1];
              }
            }
          }
          else if (a2.ltype == 6 && l.fmt == 3) {
            if (!r.U._glsCovered(t, l.backCvg, e - l.backCvg.length) || !r.U._glsCovered(t, l.inptCvg, e) || !r.U._glsCovered(t, l.ahedCvg, e + l.inptCvg.length)) continue;
            var Y = l.lookupRec;
            for (D = 0; D < Y.length; D += 2) {
              U = Y[D];
              var b = i[Y[D + 1]];
              r.U._applySubs(t, e + U, b, i);
            }
          }
        }
      }
    }, r.U._glsCovered = function(t, e, a2) {
      for (var i = 0; i < e.length; i++) if (r._lctf.coverageIndex(e[i], t[a2 + i]) == -1) return false;
      return true;
    }, r.U.glyphsToPath = function(t, e, a2) {
      for (var i = { cmds: [], crds: [] }, n = 0, o = 0; o < e.length; o++) {
        var s = e[o];
        if (s != -1) {
          for (var l = o < e.length - 1 && e[o + 1] != -1 ? e[o + 1] : 0, u = r.U.glyphToPath(t, s), d = 0; d < u.crds.length; d += 2) i.crds.push(u.crds[d] + n), i.crds.push(u.crds[d + 1]);
          for (a2 && i.cmds.push(a2), d = 0; d < u.cmds.length; d++) i.cmds.push(u.cmds[d]);
          a2 && i.cmds.push("X"), n += t.hmtx.aWidth[s], o < e.length - 1 && (n += r.U.getPairAdjustment(t, s, l));
        }
      }
      return i;
    }, r.U.P = {}, r.U.P.moveTo = function(t, e, a2) {
      t.cmds.push("M"), t.crds.push(e, a2);
    }, r.U.P.lineTo = function(t, e, a2) {
      t.cmds.push("L"), t.crds.push(e, a2);
    }, r.U.P.curveTo = function(t, e, a2, i, n, o, s) {
      t.cmds.push("C"), t.crds.push(e, a2, i, n, o, s);
    }, r.U.P.qcurveTo = function(t, e, a2, i, n) {
      t.cmds.push("Q"), t.crds.push(e, a2, i, n);
    }, r.U.P.closePath = function(t) {
      t.cmds.push("Z");
    }, r.U._drawCFF = function(t, e, a2, i, n) {
      for (var o = e.stack, s = e.nStems, l = e.haveWidth, u = e.width, d = e.open, g = 0, m = e.x, y = e.y, E = 0, S = 0, U = 0, k = 0, w = 0, D = 0, x = 0, A = 0, W = 0, O = 0, Y = { val: 0, size: 0 }; g < t.length; ) {
        r.CFF.getCharString(t, g, Y);
        var b = Y.val;
        if (g += Y.size, b == "o1" || b == "o18") o.length % 2 != 0 && !l && (u = o.shift() + i.nominalWidthX), s += o.length >> 1, o.length = 0, l = true;
        else if (b == "o3" || b == "o23") o.length % 2 != 0 && !l && (u = o.shift() + i.nominalWidthX), s += o.length >> 1, o.length = 0, l = true;
        else if (b == "o4") o.length > 1 && !l && (u = o.shift() + i.nominalWidthX, l = true), d && r.U.P.closePath(n), y += o.pop(), r.U.P.moveTo(n, m, y), d = true;
        else if (b == "o5") for (; o.length > 0; ) m += o.shift(), y += o.shift(), r.U.P.lineTo(n, m, y);
        else if (b == "o6" || b == "o7") for (var R = o.length, F2 = b == "o6", j = 0; j < R; j++) {
          var P = o.shift();
          F2 ? m += P : y += P, F2 = !F2, r.U.P.lineTo(n, m, y);
        }
        else if (b == "o8" || b == "o24") {
          R = o.length;
          for (var Z = 0; Z + 6 <= R; ) E = m + o.shift(), S = y + o.shift(), U = E + o.shift(), k = S + o.shift(), m = U + o.shift(), y = k + o.shift(), r.U.P.curveTo(n, E, S, U, k, m, y), Z += 6;
          b == "o24" && (m += o.shift(), y += o.shift(), r.U.P.lineTo(n, m, y));
        } else {
          if (b == "o11") break;
          if (b == "o1234" || b == "o1235" || b == "o1236" || b == "o1237") b == "o1234" && (S = y, U = (E = m + o.shift()) + o.shift(), O = k = S + o.shift(), D = k, A = y, m = (x = (w = (W = U + o.shift()) + o.shift()) + o.shift()) + o.shift(), r.U.P.curveTo(n, E, S, U, k, W, O), r.U.P.curveTo(n, w, D, x, A, m, y)), b == "o1235" && (E = m + o.shift(), S = y + o.shift(), U = E + o.shift(), k = S + o.shift(), W = U + o.shift(), O = k + o.shift(), w = W + o.shift(), D = O + o.shift(), x = w + o.shift(), A = D + o.shift(), m = x + o.shift(), y = A + o.shift(), o.shift(), r.U.P.curveTo(n, E, S, U, k, W, O), r.U.P.curveTo(n, w, D, x, A, m, y)), b == "o1236" && (E = m + o.shift(), S = y + o.shift(), U = E + o.shift(), O = k = S + o.shift(), D = k, x = (w = (W = U + o.shift()) + o.shift()) + o.shift(), A = D + o.shift(), m = x + o.shift(), r.U.P.curveTo(n, E, S, U, k, W, O), r.U.P.curveTo(n, w, D, x, A, m, y)), b == "o1237" && (E = m + o.shift(), S = y + o.shift(), U = E + o.shift(), k = S + o.shift(), W = U + o.shift(), O = k + o.shift(), w = W + o.shift(), D = O + o.shift(), x = w + o.shift(), A = D + o.shift(), Math.abs(x - m) > Math.abs(A - y) ? m = x + o.shift() : y = A + o.shift(), r.U.P.curveTo(n, E, S, U, k, W, O), r.U.P.curveTo(n, w, D, x, A, m, y));
          else if (b == "o14") {
            if (o.length > 0 && !l && (u = o.shift() + a2.nominalWidthX, l = true), o.length == 4) {
              var ne = o.shift(), I2 = o.shift(), L = o.shift(), p2 = o.shift(), T = r.CFF.glyphBySE(a2, L), M = r.CFF.glyphBySE(a2, p2);
              r.U._drawCFF(a2.CharStrings[T], e, a2, i, n), e.x = ne, e.y = I2, r.U._drawCFF(a2.CharStrings[M], e, a2, i, n);
            }
            d && (r.U.P.closePath(n), d = false);
          } else if (b == "o19" || b == "o20") o.length % 2 != 0 && !l && (u = o.shift() + i.nominalWidthX), s += o.length >> 1, o.length = 0, l = true, g += s + 7 >> 3;
          else if (b == "o21") o.length > 2 && !l && (u = o.shift() + i.nominalWidthX, l = true), y += o.pop(), m += o.pop(), d && r.U.P.closePath(n), r.U.P.moveTo(n, m, y), d = true;
          else if (b == "o22") o.length > 1 && !l && (u = o.shift() + i.nominalWidthX, l = true), m += o.pop(), d && r.U.P.closePath(n), r.U.P.moveTo(n, m, y), d = true;
          else if (b == "o25") {
            for (; o.length > 6; ) m += o.shift(), y += o.shift(), r.U.P.lineTo(n, m, y);
            E = m + o.shift(), S = y + o.shift(), U = E + o.shift(), k = S + o.shift(), m = U + o.shift(), y = k + o.shift(), r.U.P.curveTo(n, E, S, U, k, m, y);
          } else if (b == "o26") for (o.length % 2 && (m += o.shift()); o.length > 0; ) E = m, S = y + o.shift(), m = U = E + o.shift(), y = (k = S + o.shift()) + o.shift(), r.U.P.curveTo(n, E, S, U, k, m, y);
          else if (b == "o27") for (o.length % 2 && (y += o.shift()); o.length > 0; ) S = y, U = (E = m + o.shift()) + o.shift(), k = S + o.shift(), m = U + o.shift(), y = k, r.U.P.curveTo(n, E, S, U, k, m, y);
          else if (b == "o10" || b == "o29") {
            var C = b == "o10" ? i : a2;
            if (o.length == 0) console.debug("error: empty stack");
            else {
              var _ = o.pop(), N = C.Subrs[_ + C.Bias];
              e.x = m, e.y = y, e.nStems = s, e.haveWidth = l, e.width = u, e.open = d, r.U._drawCFF(N, e, a2, i, n), m = e.x, y = e.y, s = e.nStems, l = e.haveWidth, u = e.width, d = e.open;
            }
          } else if (b == "o30" || b == "o31") {
            var B = o.length, z = (Z = 0, b == "o31");
            for (Z += B - (R = -3 & B); Z < R; ) z ? (S = y, U = (E = m + o.shift()) + o.shift(), y = (k = S + o.shift()) + o.shift(), R - Z == 5 ? (m = U + o.shift(), Z++) : m = U, z = false) : (E = m, S = y + o.shift(), U = E + o.shift(), k = S + o.shift(), m = U + o.shift(), R - Z == 5 ? (y = k + o.shift(), Z++) : y = k, z = true), r.U.P.curveTo(n, E, S, U, k, m, y), Z += 4;
          } else {
            if ((b + "").charAt(0) == "o") throw console.debug("Unknown operation: " + b, t), b;
            o.push(b);
          }
        }
      }
      e.x = m, e.y = y, e.nStems = s, e.haveWidth = l, e.width = u, e.open = d;
    };
    var c = r, f = { Typr: c };
    return h.Typr = c, h.default = f, Object.defineProperty(h, "__esModule", { value: true }), h;
  })({}).Typr;
}
H(Ea, "typrFactory");
function Ba() {
  return (function(h) {
    var r = Uint8Array, c = Uint16Array, f = Uint32Array, t = new r([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), e = new r([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), a2 = new r([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), i = H(function(b, R) {
      for (var F2 = new c(31), j = 0; j < 31; ++j) F2[j] = R += 1 << b[j - 1];
      var P = new f(F2[30]);
      for (j = 1; j < 30; ++j) for (var Z = F2[j]; Z < F2[j + 1]; ++Z) P[Z] = Z - F2[j] << 5 | j;
      return [F2, P];
    }, "f"), n = i(t, 2), o = n[0], s = n[1];
    o[28] = 258, s[258] = 28;
    for (var l = i(e, 0)[0], u = new c(32768), d = 0; d < 32768; ++d) {
      var g = (43690 & d) >>> 1 | (21845 & d) << 1;
      g = (61680 & (g = (52428 & g) >>> 2 | (13107 & g) << 2)) >>> 4 | (3855 & g) << 4, u[d] = ((65280 & g) >>> 8 | (255 & g) << 8) >>> 1;
    }
    var m = H(function(b, R, F2) {
      for (var j = b.length, P = 0, Z = new c(R); P < j; ++P) ++Z[b[P] - 1];
      var ne, I2 = new c(R);
      for (P = 0; P < R; ++P) I2[P] = I2[P - 1] + Z[P - 1] << 1;
      if (F2) {
        ne = new c(1 << R);
        var L = 15 - R;
        for (P = 0; P < j; ++P) if (b[P]) for (var p2 = P << 4 | b[P], T = R - b[P], M = I2[b[P] - 1]++ << T, C = M | (1 << T) - 1; M <= C; ++M) ne[u[M] >>> L] = p2;
      } else for (ne = new c(j), P = 0; P < j; ++P) b[P] && (ne[P] = u[I2[b[P] - 1]++] >>> 15 - b[P]);
      return ne;
    }, "w"), y = new r(288);
    for (d = 0; d < 144; ++d) y[d] = 8;
    for (d = 144; d < 256; ++d) y[d] = 9;
    for (d = 256; d < 280; ++d) y[d] = 7;
    for (d = 280; d < 288; ++d) y[d] = 8;
    var E = new r(32);
    for (d = 0; d < 32; ++d) E[d] = 5;
    var S = m(y, 9, 1), U = m(E, 5, 1), k = H(function(b) {
      for (var R = b[0], F2 = 1; F2 < b.length; ++F2) b[F2] > R && (R = b[F2]);
      return R;
    }, "y"), w = H(function(b, R, F2) {
      var j = R / 8 | 0;
      return (b[j] | b[j + 1] << 8) >> (7 & R) & F2;
    }, "L"), D = H(function(b, R) {
      var F2 = R / 8 | 0;
      return (b[F2] | b[F2 + 1] << 8 | b[F2 + 2] << 16) >> (7 & R);
    }, "U"), x = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], A = H(function(b, R, F2) {
      var j = new Error(R || x[b]);
      if (j.code = b, Error.captureStackTrace && Error.captureStackTrace(j, A), !F2) throw j;
      return j;
    }, "T"), W = H(function(b, R, F2) {
      var j = b.length;
      if (!j || F2 && !F2.l && j < 5) return R || new r(0);
      var P = !R || F2, Z = !F2 || F2.i;
      F2 || (F2 = {}), R || (R = new r(3 * j));
      var ne, I2 = H(function(fe) {
        var Se = R.length;
        if (fe > Se) {
          var we2 = new r(Math.max(2 * Se, fe));
          we2.set(R), R = we2;
        }
      }, "d"), L = F2.f || 0, p2 = F2.p || 0, T = F2.b || 0, M = F2.l, C = F2.d, _ = F2.m, N = F2.n, B = 8 * j;
      do {
        if (!M) {
          F2.f = L = w(b, p2, 1);
          var z = w(b, p2 + 1, 3);
          if (p2 += 3, !z) {
            var J = b[($ = ((ne = p2) / 8 | 0) + (7 & ne && 1) + 4) - 4] | b[$ - 3] << 8, ee = $ + J;
            if (ee > j) {
              Z && A(0);
              break;
            }
            P && I2(T + J), R.set(b.subarray($, ee), T), F2.b = T += J, F2.p = p2 = 8 * ee;
            continue;
          }
          if (z == 1) M = S, C = U, _ = 9, N = 5;
          else if (z == 2) {
            var H$1 = w(b, p2, 31) + 257, V = w(b, p2 + 10, 15) + 4, ge = H$1 + w(b, p2 + 5, 31) + 1;
            p2 += 14;
            for (var ce = new r(ge), q = new r(19), te = 0; te < V; ++te) q[a2[te]] = w(b, p2 + 3 * te, 7);
            p2 += 3 * V;
            var le = k(q), X = (1 << le) - 1, re = m(q, le, 1);
            for (te = 0; te < ge; ) {
              var $, G2 = re[w(b, p2, X)];
              if (p2 += 15 & G2, ($ = G2 >>> 4) < 16) ce[te++] = $;
              else {
                var de = 0, Q = 0;
                for ($ == 16 ? (Q = 3 + w(b, p2, 3), p2 += 2, de = ce[te - 1]) : $ == 17 ? (Q = 3 + w(b, p2, 7), p2 += 3) : $ == 18 && (Q = 11 + w(b, p2, 127), p2 += 7); Q--; ) ce[te++] = de;
              }
            }
            var oe = ce.subarray(0, H$1), K = ce.subarray(H$1);
            _ = k(oe), N = k(K), M = m(oe, _, 1), C = m(K, N, 1);
          } else A(1);
          if (p2 > B) {
            Z && A(0);
            break;
          }
        }
        P && I2(T + 131072);
        for (var xe = (1 << _) - 1, ae = (1 << N) - 1, ie = p2; ; ie = p2) {
          var ue = (de = M[D(b, p2) & xe]) >>> 4;
          if ((p2 += 15 & de) > B) {
            Z && A(0);
            break;
          }
          if (de || A(2), ue < 256) R[T++] = ue;
          else {
            if (ue == 256) {
              ie = p2, M = null;
              break;
            }
            var ve = ue - 254;
            if (ue > 264) {
              var _e = t[te = ue - 257];
              ve = w(b, p2, (1 << _e) - 1) + o[te], p2 += _e;
            }
            var De2 = C[D(b, p2) & ae], me = De2 >>> 4;
            if (De2 || A(3), p2 += 15 & De2, K = l[me], me > 3 && (_e = e[me], K += D(b, p2) & (1 << _e) - 1, p2 += _e), p2 > B) {
              Z && A(0);
              break;
            }
            P && I2(T + 131072);
            for (var ye2 = T + ve; T < ye2; T += 4) R[T] = R[T - K], R[T + 1] = R[T + 1 - K], R[T + 2] = R[T + 2 - K], R[T + 3] = R[T + 3 - K];
            T = ye2;
          }
        }
        F2.l = M, F2.p = ie, F2.b = T, M && (L = 1, F2.m = _, F2.d = C, F2.n = N);
      } while (!L);
      return T == R.length ? R : (function(fe, Se, we2) {
        (we2 == null || we2 > fe.length) && (we2 = fe.length);
        var Ge = new (fe instanceof c ? c : fe instanceof f ? f : r)(we2 - Se);
        return Ge.set(fe.subarray(Se, we2)), Ge;
      })(R, 0, T);
    }, "O"), O = new r(0), Y = typeof TextDecoder < "u" && new TextDecoder();
    try {
      Y.decode(O, { stream: true });
    } catch (b) {
    }
    return h.convert_streams = function(b) {
      var R = new DataView(b), F2 = 0;
      function j() {
        var H2 = R.getUint16(F2);
        return F2 += 2, H2;
      }
      H(j, "t");
      function P() {
        var H2 = R.getUint32(F2);
        return F2 += 4, H2;
      }
      H(P, "a");
      function Z(H2) {
        J.setUint16(ee, H2), ee += 2;
      }
      H(Z, "i");
      function ne(H2) {
        J.setUint32(ee, H2), ee += 4;
      }
      H(ne, "o");
      for (var I2 = { signature: P(), flavor: P(), length: P(), numTables: j(), reserved: j(), totalSfntSize: P(), majorVersion: j(), minorVersion: j(), metaOffset: P(), metaLength: P(), metaOrigLength: P(), privOffset: P(), privLength: P() }, L = 0; Math.pow(2, L) <= I2.numTables; ) L++;
      L--;
      for (var p2 = 16 * Math.pow(2, L), T = 16 * I2.numTables - p2, M = 12, C = [], _ = 0; _ < I2.numTables; _++) C.push({ tag: P(), offset: P(), compLength: P(), origLength: P(), origChecksum: P() }), M += 16;
      var N, B = new Uint8Array(12 + 16 * C.length + C.reduce(function(H2, V) {
        return H2 + V.origLength + 4;
      }, 0)), z = B.buffer, J = new DataView(z), ee = 0;
      return ne(I2.flavor), Z(I2.numTables), Z(p2), Z(L), Z(T), C.forEach(function(H2) {
        ne(H2.tag), ne(H2.origChecksum), ne(M), ne(H2.origLength), H2.outOffset = M, (M += H2.origLength) % 4 != 0 && (M += 4 - M % 4);
      }), C.forEach(function(H2) {
        var V, ge = b.slice(H2.offset, H2.offset + H2.compLength);
        if (H2.compLength != H2.origLength) {
          var ce = new Uint8Array(H2.origLength);
          V = new Uint8Array(ge, 2), W(V, ce);
        } else ce = new Uint8Array(ge);
        B.set(ce, H2.outOffset);
        var q = 0;
        (M = H2.outOffset + H2.origLength) % 4 != 0 && (q = 4 - M % 4), B.set(new Uint8Array(q).buffer, H2.outOffset + H2.origLength), N = M + q;
      }), z.slice(0, N);
    }, Object.defineProperty(h, "__esModule", { value: true }), h;
  })({}).convert_streams;
}
H(Ba, "woff2otfFactory");
function Oa(h, r) {
  let c = { M: 2, L: 2, Q: 4, C: 6, Z: 0 }, f = { C: "18g,ca,368,1kz", D: "17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v", R: "17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6", L: "x9u,jff,a,fd,jv", T: "4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n" }, t = 1, e = 2, a2 = 4, i = 8, n = 16, o = 32, s;
  function l(x) {
    if (!s) {
      let A = { R: e, L: t, D: a2, C: n, U: o, T: i };
      s = /* @__PURE__ */ new Map();
      for (let W in f) {
        let O = 0;
        f[W].split(",").forEach((Y) => {
          let [b, R] = Y.split("+");
          b = parseInt(b, 36), R = R ? parseInt(R, 36) : 0, s.set(O += b, A[W]);
          for (let F2 = R; F2--; ) s.set(++O, A[W]);
        });
      }
    }
    return s.get(x) || o;
  }
  H(l, "getCharJoiningType");
  let u = 1, d = 2, g = 3, m = 4, y = [null, "isol", "init", "fina", "medi"];
  function E(x) {
    let A = new Uint8Array(x.length), W = o, O = u, Y = -1;
    for (let b = 0; b < x.length; b++) {
      let R = x.codePointAt(b), F2 = l(R) | 0, j = u;
      F2 & i || (W & (t | a2 | n) ? F2 & (e | a2 | n) ? (j = g, (O === u || O === g) && A[Y]++) : F2 & (t | o) && (O === d || O === m) && A[Y]-- : W & (e | o) && (O === d || O === m) && A[Y]--, O = A[b] = j, W = F2, Y = b, R > 65535 && b++);
    }
    return A;
  }
  H(E, "detectJoiningForms");
  function S(x, A) {
    let W = [];
    for (let Y = 0; Y < A.length; Y++) {
      let b = A.codePointAt(Y);
      b > 65535 && Y++, W.push(h.U.codeToGlyph(x, b));
    }
    let O = x.GSUB;
    if (O) {
      let { lookupList: Y, featureList: b } = O, R, F2 = /^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/, j = [];
      b.forEach((P) => {
        if (F2.test(P.tag)) for (let Z = 0; Z < P.tab.length; Z++) {
          if (j[P.tab[Z]]) continue;
          j[P.tab[Z]] = true;
          let ne = Y[P.tab[Z]], I2 = /^(isol|init|fina|medi)$/.test(P.tag);
          I2 && !R && (R = E(A));
          for (let L = 0; L < W.length; L++) (!R || !I2 || y[R[L]] === P.tag) && h.U._applySubs(W, L, ne, Y);
        }
      });
    }
    return W;
  }
  H(S, "stringToGlyphs");
  function U(x, A) {
    let W = new Int16Array(A.length * 3), O = 0;
    for (; O < A.length; O++) {
      let F2 = A[O];
      if (F2 === -1) continue;
      W[O * 3 + 2] = x.hmtx.aWidth[F2];
      let j = x.GPOS;
      if (j) {
        let P = j.lookupList;
        for (let Z = 0; Z < P.length; Z++) {
          let ne = P[Z];
          for (let I2 = 0; I2 < ne.tabs.length; I2++) {
            let L = ne.tabs[I2];
            if (ne.ltype === 1) {
              if (h._lctf.coverageIndex(L.coverage, F2) !== -1 && L.pos) {
                R(L.pos, O);
                break;
              }
            } else if (ne.ltype === 2) {
              let p2 = null, T = Y();
              if (T !== -1) {
                let M = h._lctf.coverageIndex(L.coverage, A[T]);
                if (M !== -1) {
                  if (L.fmt === 1) {
                    let C = L.pairsets[M];
                    for (let _ = 0; _ < C.length; _++) C[_].gid2 === F2 && (p2 = C[_]);
                  } else if (L.fmt === 2) {
                    let C = h.U._getGlyphClass(A[T], L.classDef1), _ = h.U._getGlyphClass(F2, L.classDef2);
                    p2 = L.matrix[C][_];
                  }
                  if (p2) {
                    p2.val1 && R(p2.val1, T), p2.val2 && R(p2.val2, O);
                    break;
                  }
                }
              }
            } else if (ne.ltype === 4) {
              let p2 = h._lctf.coverageIndex(L.markCoverage, F2);
              if (p2 !== -1) {
                let T = Y(b), M = T === -1 ? -1 : h._lctf.coverageIndex(L.baseCoverage, A[T]);
                if (M !== -1) {
                  let C = L.markArray[p2], _ = L.baseArray[M][C.markClass];
                  W[O * 3] = _.x - C.x + W[T * 3] - W[T * 3 + 2], W[O * 3 + 1] = _.y - C.y + W[T * 3 + 1];
                  break;
                }
              }
            } else if (ne.ltype === 6) {
              let p2 = h._lctf.coverageIndex(L.mark1Coverage, F2);
              if (p2 !== -1) {
                let T = Y();
                if (T !== -1) {
                  let M = A[T];
                  if (k(x, M) === 3) {
                    let C = h._lctf.coverageIndex(L.mark2Coverage, M);
                    if (C !== -1) {
                      let _ = L.mark1Array[p2], N = L.mark2Array[C][_.markClass];
                      W[O * 3] = N.x - _.x + W[T * 3] - W[T * 3 + 2], W[O * 3 + 1] = N.y - _.y + W[T * 3 + 1];
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      } else if (x.kern && !x.cff) {
        let P = Y();
        if (P !== -1) {
          let Z = x.kern.glyph1.indexOf(A[P]);
          if (Z !== -1) {
            let ne = x.kern.rval[Z].glyph2.indexOf(F2);
            ne !== -1 && (W[P * 3 + 2] += x.kern.rval[Z].vals[ne]);
          }
        }
      }
    }
    return W;
    function Y(F2) {
      for (let j = O - 1; j >= 0; j--) if (A[j] !== -1 && (!F2 || F2(A[j]))) return j;
      return -1;
    }
    function b(F2) {
      return k(x, F2) === 1;
    }
    function R(F2, j) {
      for (let P = 0; P < 3; P++) W[j * 3 + P] += F2[P] || 0;
    }
  }
  H(U, "calcGlyphPositions");
  function k(x, A) {
    let W = x.GDEF && x.GDEF.glyphClassDef;
    return W ? h.U._getGlyphClass(A, W) : 0;
  }
  H(k, "getGlyphClass");
  function w(...x) {
    for (let A = 0; A < x.length; A++) if (typeof x[A] == "number") return x[A];
  }
  H(w, "firstNum");
  function D(x) {
    let A = /* @__PURE__ */ Object.create(null), W = x["OS/2"], O = x.hhea, Y = x.head.unitsPerEm, b = w(W && W.sTypoAscender, O && O.ascender, Y), R = { unitsPerEm: Y, ascender: b, descender: w(W && W.sTypoDescender, O && O.descender, 0), capHeight: w(W && W.sCapHeight, b), xHeight: w(W && W.sxHeight, b), lineGap: w(W && W.sTypoLineGap, O && O.lineGap), supportsCodePoint(F2) {
      return h.U.codeToGlyph(x, F2) > 0;
    }, forEachGlyph(F2, j, P, Z) {
      let ne = 0, I2 = 1 / R.unitsPerEm * j, L = S(x, F2), p2 = 0, T = U(x, L);
      return L.forEach((M, C) => {
        if (M !== -1) {
          let _ = A[M];
          if (!_) {
            let { cmds: N, crds: B } = h.U.glyphToPath(x, M), z = "", J = 0;
            for (let ce = 0, q = N.length; ce < q; ce++) {
              let te = c[N[ce]];
              z += N[ce];
              for (let le = 1; le <= te; le++) z += (le > 1 ? "," : "") + B[J++];
            }
            let ee, H2, V, ge;
            if (B.length) {
              ee = H2 = 1 / 0, V = ge = -1 / 0;
              for (let ce = 0, q = B.length; ce < q; ce += 2) {
                let te = B[ce], le = B[ce + 1];
                te < ee && (ee = te), le < H2 && (H2 = le), te > V && (V = te), le > ge && (ge = le);
              }
            } else ee = V = H2 = ge = 0;
            _ = A[M] = { index: M, advanceWidth: x.hmtx.aWidth[M], xMin: ee, yMin: H2, xMax: V, yMax: ge, path: z };
          }
          Z.call(null, _, ne + T[C * 3] * I2, T[C * 3 + 1] * I2, p2), ne += T[C * 3 + 2] * I2, P && (ne += P * j);
        }
        p2 += F2.codePointAt(p2) > 65535 ? 2 : 1;
      }), ne;
    } };
    return R;
  }
  return H(D, "wrapFontObj"), H(function(A) {
    let W = new Uint8Array(A, 0, 4), O = h._bin.readASCII(W, 0, 4);
    if (O === "wOFF") A = r(A);
    else if (O === "wOF2") throw new Error("woff2 fonts not supported");
    return D(h.parse(A)[0]);
  }, "parse");
}
H(Oa, "parserFactory");
var Ra = st({ name: "Typr Font Parser", dependencies: [Ea, Ba, Oa], init(h, r, c) {
  let f = h(), t = r();
  return c(f, t);
} });
function La() {
  return (function(h) {
    var r = H(function() {
      this.buckets = /* @__PURE__ */ new Map();
    }, "n");
    r.prototype.add = function(U) {
      var k = U >> 5;
      this.buckets.set(k, (this.buckets.get(k) || 0) | 1 << (31 & U));
    }, r.prototype.has = function(U) {
      var k = this.buckets.get(U >> 5);
      return k !== void 0 && (k & 1 << (31 & U)) != 0;
    }, r.prototype.serialize = function() {
      var U = [];
      return this.buckets.forEach(function(k, w) {
        U.push((+w).toString(36) + ":" + k.toString(36));
      }), U.join(",");
    }, r.prototype.deserialize = function(U) {
      var k = this;
      this.buckets.clear(), U.split(",").forEach(function(w) {
        var D = w.split(":");
        k.buckets.set(parseInt(D[0], 36), parseInt(D[1], 36));
      });
    };
    var c = Math.pow(2, 8), f = c - 1, t = ~f;
    function e(U) {
      var k = (function(D) {
        return D & t;
      })(U).toString(16), w = (function(D) {
        return (D & t) + c - 1;
      })(U).toString(16);
      return "codepoint-index/plane" + (U >> 16) + "/" + k + "-" + w + ".json";
    }
    H(e, "a");
    function a2(U, k) {
      var w = U & f, D = k.codePointAt(w / 6 | 0);
      return ((D = (D || 48) - 48) & 1 << w % 6) != 0;
    }
    H(a2, "i");
    function i(U, k) {
      var w;
      (w = U, w.replace(/U\+/gi, "").replace(/^,+|,+$/g, "").split(/,+/).map(function(D) {
        return D.split("-").map(function(x) {
          return parseInt(x.trim(), 16);
        });
      })).forEach(function(D) {
        var x = D[0], A = D[1];
        A === void 0 && (A = x), k(x, A);
      });
    }
    H(i, "u");
    function n(U, k) {
      i(U, function(w, D) {
        for (var x = w; x <= D; x++) k(x);
      });
    }
    H(n, "c");
    var o = {}, s = {}, l = /* @__PURE__ */ new WeakMap(), u = "https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";
    function d(U) {
      var k = l.get(U);
      return k || (k = new r(), n(U.ranges, function(w) {
        return k.add(w);
      }), l.set(U, k)), k;
    }
    H(d, "d");
    var g, m = /* @__PURE__ */ new Map();
    function y(U, k, w) {
      return U[k] ? k : U[w] ? w : (function(D) {
        for (var x in D) return x;
      })(U);
    }
    H(y, "g");
    function E(U, k) {
      var w = k;
      if (!U.includes(w)) {
        w = 1 / 0;
        for (var D = 0; D < U.length; D++) Math.abs(U[D] - k) < Math.abs(w - k) && (w = U[D]);
      }
      return w;
    }
    H(E, "w");
    function S(U) {
      return g || (g = /* @__PURE__ */ new Set(), n("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000", function(k) {
        g.add(k);
      })), g.has(U);
    }
    return H(S, "k"), h.CodePointSet = r, h.clearCache = function() {
      o = {}, s = {};
    }, h.getFontsForString = function(U, k) {
      k === void 0 && (k = {});
      var w, D = k.lang;
      D === void 0 && (D = new RegExp("\\p{Script=Hangul}", "u").test(w = U) ? "ko" : new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}", "u").test(w) ? "ja" : "en");
      var x = k.category;
      x === void 0 && (x = "sans-serif");
      var A = k.style;
      A === void 0 && (A = "normal");
      var W = k.weight;
      W === void 0 && (W = 400);
      var O = (k.dataUrl || u).replace(/\/$/g, ""), Y = /* @__PURE__ */ new Map(), b = new Uint8Array(U.length), R = {}, F2 = {}, j = new Array(U.length), P = /* @__PURE__ */ new Map(), Z = false;
      function ne(p2) {
        var T = m.get(p2);
        return T || (T = fetch(O + "/" + p2).then(function(M) {
          if (!M.ok) throw new Error(M.statusText);
          return M.json().then(function(C) {
            if (!Array.isArray(C) || C[0] !== 1) throw new Error("Incorrect schema version; need 1, got " + C[0]);
            return C[1];
          });
        }).catch(function(M) {
          if (O !== u) return Z || (console.error('unicode-font-resolver: Failed loading from dataUrl "' + O + '", trying default CDN. ' + M.message), Z = true), O = u, m.delete(p2), ne(p2);
          throw M;
        }), m.set(p2, T)), T;
      }
      H(ne, "M");
      for (var I2 = function(p2) {
        var T = U.codePointAt(p2), M = e(T);
        j[p2] = M, o[M] || P.has(M) || P.set(M, ne(M).then(function(C) {
          o[M] = C;
        })), T > 65535 && (p2++, L = p2);
      }, L = 0; L < U.length; L++) I2(L);
      return Promise.all(P.values()).then(function() {
        P.clear();
        for (var p2 = function(M) {
          var C = U.codePointAt(M), _ = null, N = o[j[M]], B = void 0;
          for (var z in N) {
            var J = F2[z];
            if (J === void 0 && (J = F2[z] = new RegExp(z).test(D || "en")), J) {
              for (var ee in B = z, N[z]) if (a2(C, N[z][ee])) {
                _ = ee;
                break;
              }
              break;
            }
          }
          if (!_) {
            e: for (var H2 in N) if (H2 !== B) {
              for (var V in N[H2]) if (a2(C, N[H2][V])) {
                _ = V;
                break e;
              }
            }
          }
          _ || (console.debug("No font coverage for U+" + C.toString(16)), _ = "latin"), j[M] = _, s[_] || P.has(_) || P.set(_, ne("font-meta/" + _ + ".json").then(function(ge) {
            s[_] = ge;
          })), C > 65535 && (M++, T = M);
        }, T = 0; T < U.length; T++) p2(T);
        return Promise.all(P.values());
      }).then(function() {
        for (var p2, T = null, M = 0; M < U.length; M++) {
          var C = U.codePointAt(M);
          if (T && (S(C) || d(T).has(C))) b[M] = b[M - 1];
          else {
            T = s[j[M]];
            var _ = R[T.id];
            if (!_) {
              var N = T.typeforms, B = y(N, x, "sans-serif"), z = y(N[B], A, "normal"), J = E((p2 = N[B]) === null || p2 === void 0 ? void 0 : p2[z], W);
              _ = R[T.id] = O + "/font-files/" + T.id + "/" + B + "." + z + "." + J + ".woff";
            }
            var ee = Y.get(_);
            ee == null && (ee = Y.size, Y.set(_, ee)), b[M] = ee;
          }
          C > 65535 && (M++, b[M] = b[M - 1]);
        }
        return { fontUrls: Array.from(Y.keys()), chars: b };
      });
    }, Object.defineProperty(h, "__esModule", { value: true }), h;
  })({});
}
H(La, "unicodeFontResolverClientFactory");
function Ga(h, r) {
  let c = /* @__PURE__ */ Object.create(null), f = /* @__PURE__ */ Object.create(null);
  function t(a2, i) {
    let n = H((o) => {
      console.error("Failure loading font ".concat(a2), o);
    }, "onError");
    try {
      let o = new XMLHttpRequest();
      o.open("get", a2, true), o.responseType = "arraybuffer", o.onload = function() {
        if (o.status >= 400) n(new Error(o.statusText));
        else if (o.status > 0) try {
          let s = h(o.response);
          s.src = a2, i(s);
        } catch (s) {
          n(s);
        }
      }, o.onerror = n, o.send();
    } catch (o) {
      n(o);
    }
  }
  H(t, "doLoadFont");
  function e(a2, i) {
    let n = c[a2];
    n ? i(n) : f[a2] ? f[a2].push(i) : (f[a2] = [i], t(a2, (o) => {
      o.src = a2, c[a2] = o, f[a2].forEach((s) => s(o)), delete f[a2];
    }));
  }
  return H(e, "loadFont"), function(a2, i, { lang: n, fonts: o = [], style: s = "normal", weight: l = "normal", unicodeFontsURL: u } = {}) {
    let d = new Uint8Array(a2.length), g = [];
    a2.length || S();
    let m = /* @__PURE__ */ new Map(), y = [];
    if (s !== "italic" && (s = "normal"), typeof l != "number" && (l = l === "bold" ? 700 : 400), o && !Array.isArray(o) && (o = [o]), o = o.slice().filter((k) => !k.lang || k.lang.test(n)).reverse(), o.length) {
      let x = 0;
      H(function A(W = 0) {
        for (let O = W, Y = a2.length; O < Y; O++) {
          let b = a2.codePointAt(O);
          if (x === 1 && g[d[O - 1]].supportsCodePoint(b) || O > 0 && /\s/.test(a2[O])) d[O] = d[O - 1], x === 2 && (y[y.length - 1][1] = O);
          else for (let R = d[O], F2 = o.length; R <= F2; R++) if (R === F2) {
            let j = x === 2 ? y[y.length - 1] : y[y.length] = [O, O];
            j[1] = O, x = 2;
          } else {
            d[O] = R;
            let { src: j, unicodeRange: P } = o[R];
            if (!P || U(b, P)) {
              let Z = c[j];
              if (!Z) {
                e(j, () => {
                  A(O);
                });
                return;
              }
              if (Z.supportsCodePoint(b)) {
                let ne = m.get(Z);
                typeof ne != "number" && (ne = g.length, g.push(Z), m.set(Z, ne)), d[O] = ne, x = 1;
                break;
              }
            }
          }
          b > 65535 && O + 1 < Y && (d[O + 1] = d[O], O++, x === 2 && (y[y.length - 1][1] = O));
        }
        E();
      }, "resolveUserFonts")();
    } else y.push([0, a2.length - 1]), E();
    function E() {
      if (y.length) {
        let k = y.map((w) => a2.substring(w[0], w[1] + 1)).join("\n");
        r.getFontsForString(k, { lang: n || void 0, style: s, weight: l, dataUrl: u }).then(({ fontUrls: w, chars: D }) => {
          let x = g.length, A = 0;
          y.forEach((O) => {
            for (let Y = 0, b = O[1] - O[0]; Y <= b; Y++) d[O[0] + Y] = D[A++] + x;
            A++;
          });
          let W = 0;
          w.forEach((O, Y) => {
            e(O, (b) => {
              g[Y + x] = b, ++W === w.length && S();
            });
          });
        });
      } else S();
    }
    H(E, "resolveFallbacks");
    function S() {
      i({ chars: d, fonts: g });
    }
    H(S, "allDone");
    function U(k, w) {
      for (let D = 0; D < w.length; D++) {
        let [x, A = x] = w[D];
        if (x <= k && k <= A) return true;
      }
      return false;
    }
    H(U, "isCodeInRanges");
  };
}
H(Ga, "createFontResolver");
var Pa = st({ name: "FontResolver", dependencies: [Ga, Ra, La], init(h, r, c) {
  return h(r, c());
} });
function Ia(h, r) {
  let f = /[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/, t = "[^\\S\\u00A0]", e = new RegExp("".concat(t, "|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]"));
  function a2({ text: g, lang: m, fonts: y, style: E, weight: S, preResolvedFonts: U, unicodeFontsURL: k }, w) {
    let D = H(({ chars: x, fonts: A }) => {
      let W, O, Y = [];
      for (let b = 0; b < x.length; b++) x[b] !== O ? (O = x[b], Y.push(W = { start: b, end: b, fontObj: A[x[b]] })) : W.end = b;
      w(Y);
    }, "onResolved");
    U ? D(U) : h(g, D, { lang: m, fonts: y, style: E, weight: S, unicodeFontsURL: k });
  }
  H(a2, "calculateFontRuns");
  function i({ text: g = "", font: m, lang: y, sdfGlyphSize: E = 64, fontSize: S = 400, fontWeight: U = 1, fontStyle: k = "normal", letterSpacing: w = 0, lineHeight: D = "normal", maxWidth: x = 1 / 0, direction: A, textAlign: W = "left", textIndent: O = 0, whiteSpace: Y = "normal", overflowWrap: b = "normal", anchorX: R = 0, anchorY: F2 = 0, metricsOnly: j = false, unicodeFontsURL: P, preResolvedFonts: Z = null, includeCaretPositions: ne = false, chunkedBoundsSize: I2 = 8192, colorRanges: L = null }, p2) {
    let T = l(), M = { fontLoad: 0, typesetting: 0 };
    g.indexOf("\r") > -1 && (console.info("Typesetter: got text with \\r chars; normalizing to \\n"), g = g.replace(/\r\n/g, "\n").replace(/\r/g, "\n")), S = +S, w = +w, x = +x, D = D || "normal", O = +O, a2({ text: g, lang: y, style: k, weight: U, fonts: typeof m == "string" ? [{ src: m }] : m, unicodeFontsURL: P, preResolvedFonts: Z }, (C) => {
      M.fontLoad = l() - T;
      let _ = isFinite(x), N = null, B = null, z = null, J = null, ee = null, H$1 = null, V = null, ge = null, ce = 0, q = 0, te = Y !== "nowrap", le = /* @__PURE__ */ new Map(), X = l(), re = O, $ = 0, G2 = new u(), de = [G2];
      C.forEach((ae) => {
        let { fontObj: ie } = ae, { ascender: ue, descender: ve, unitsPerEm: _e, lineGap: De2, capHeight: me, xHeight: ye2 } = ie, fe = le.get(ie);
        if (!fe) {
          let he = S / _e, Te = D === "normal" ? (ue - ve + De2) * he : D * S, qe = (Te - (ue - ve) * he) / 2, ke = Math.min(Te, (ue - ve) * he), be = (ue + ve) / 2 * he + ke / 2;
          fe = { index: le.size, src: ie.src, fontObj: ie, fontSizeMult: he, unitsPerEm: _e, ascender: ue * he, descender: ve * he, capHeight: me * he, xHeight: ye2 * he, lineHeight: Te, baseline: -qe - ue * he, caretTop: be, caretBottom: be - ke }, le.set(ie, fe);
        }
        let { fontSizeMult: Se } = fe, we2 = g.slice(ae.start, ae.end + 1), Ge, Ue;
        ie.forEachGlyph(we2, S, w, (he, Te, qe, ke) => {
          Te += $, ke += ae.start, Ge = Te, Ue = he;
          let be = g.charAt(ke), Ce = he.advanceWidth * Se, Fe = G2.count, pe;
          if ("isEmpty" in he || (he.isWhitespace = !!be && new RegExp(t).test(be), he.canBreakAfter = !!be && e.test(be), he.isEmpty = he.xMin === he.xMax || he.yMin === he.yMax || f.test(be)), !he.isWhitespace && !he.isEmpty && q++, te && _ && !he.isWhitespace && Te + Ce + re > x && Fe) {
            if (G2.glyphAt(Fe - 1).glyphObj.canBreakAfter) pe = new u(), re = -Te;
            else for (let Re = Fe; Re--; ) if (Re === 0 && b === "break-word") {
              pe = new u(), re = -Te;
              break;
            } else if (G2.glyphAt(Re).glyphObj.canBreakAfter) {
              pe = G2.splitAt(Re + 1);
              let Oe2 = pe.glyphAt(0).x;
              re -= Oe2;
              for (let Ee = pe.count; Ee--; ) pe.glyphAt(Ee).x -= Oe2;
              break;
            }
            pe && (G2.isSoftWrapped = true, G2 = pe, de.push(G2), ce = x);
          }
          let Me = G2.glyphAt(G2.count);
          Me.glyphObj = he, Me.x = Te + re, Me.y = qe, Me.width = Ce, Me.charIndex = ke, Me.fontData = fe, be === "\n" && (G2 = new u(), de.push(G2), re = -(Te + Ce + w * S) + O);
        }), $ = Ge + Ue.advanceWidth * Se + w * S;
      });
      let Q = 0;
      de.forEach((ae) => {
        let ie = true;
        for (let ue = ae.count; ue--; ) {
          let ve = ae.glyphAt(ue);
          ie && !ve.glyphObj.isWhitespace && (ae.width = ve.x + ve.width, ae.width > ce && (ce = ae.width), ie = false);
          let { lineHeight: _e, capHeight: De2, xHeight: me, baseline: ye2 } = ve.fontData;
          _e > ae.lineHeight && (ae.lineHeight = _e);
          let fe = ye2 - ae.baseline;
          fe < 0 && (ae.baseline += fe, ae.cap += fe, ae.ex += fe), ae.cap = Math.max(ae.cap, ae.baseline + De2), ae.ex = Math.max(ae.ex, ae.baseline + me);
        }
        ae.baseline -= Q, ae.cap -= Q, ae.ex -= Q, Q += ae.lineHeight;
      });
      let oe = 0, K = 0;
      if (R && (typeof R == "number" ? oe = -R : typeof R == "string" && (oe = -ce * (R === "left" ? 0 : R === "center" ? 0.5 : R === "right" ? 1 : o(R)))), F2 && (typeof F2 == "number" ? K = -F2 : typeof F2 == "string" && (K = F2 === "top" ? 0 : F2 === "top-baseline" ? -de[0].baseline : F2 === "top-cap" ? -de[0].cap : F2 === "top-ex" ? -de[0].ex : F2 === "middle" ? Q / 2 : F2 === "bottom" ? Q : F2 === "bottom-baseline" ? -de[de.length - 1].baseline : o(F2) * Q)), !j) {
        let ae = r.getEmbeddingLevels(g, A);
        N = new Uint16Array(q), B = new Uint8Array(q), z = new Float32Array(q * 2), J = {}, V = [1 / 0, 1 / 0, -1 / 0, -1 / 0], ge = [], ne && (H$1 = new Float32Array(g.length * 4)), L && (ee = new Uint8Array(q * 3));
        let ie = 0, ue = -1, ve = -1, _e, De2;
        if (de.forEach((me, ye2) => {
          let { count: fe, width: Se } = me;
          if (fe > 0) {
            let we2 = 0;
            for (let ke = fe; ke-- && me.glyphAt(ke).glyphObj.isWhitespace; ) we2++;
            let Ge = 0, Ue = 0;
            if (W === "center") Ge = (ce - Se) / 2;
            else if (W === "right") Ge = ce - Se;
            else if (W === "justify" && me.isSoftWrapped) {
              let ke = 0;
              for (let be = fe - we2; be--; ) me.glyphAt(be).glyphObj.isWhitespace && ke++;
              Ue = (ce - Se) / ke;
            }
            if (Ue || Ge) {
              let ke = 0;
              for (let be = 0; be < fe; be++) {
                let Ce = me.glyphAt(be), Fe = Ce.glyphObj;
                Ce.x += Ge + ke, Ue !== 0 && Fe.isWhitespace && be < fe - we2 && (ke += Ue, Ce.width += Ue);
              }
            }
            let he = r.getReorderSegments(g, ae, me.glyphAt(0).charIndex, me.glyphAt(me.count - 1).charIndex);
            for (let ke = 0; ke < he.length; ke++) {
              let [be, Ce] = he[ke], Fe = 1 / 0, pe = -1 / 0;
              for (let Me = 0; Me < fe; Me++) if (me.glyphAt(Me).charIndex >= be) {
                let Re = Me, Oe2 = Me;
                for (; Oe2 < fe; Oe2++) {
                  let Ee = me.glyphAt(Oe2);
                  if (Ee.charIndex > Ce) break;
                  Oe2 < fe - we2 && (Fe = Math.min(Fe, Ee.x), pe = Math.max(pe, Ee.x + Ee.width));
                }
                for (let Ee = Re; Ee < Oe2; Ee++) {
                  let Ne = me.glyphAt(Ee);
                  Ne.x = pe - (Ne.x + Ne.width - Fe);
                }
                break;
              }
            }
            let Te, qe = H((ke) => Te = ke, "setGlyphObj");
            for (let ke = 0; ke < fe; ke++) {
              let be = me.glyphAt(ke);
              Te = be.glyphObj;
              let Ce = Te.index, Fe = ae.levels[be.charIndex] & 1;
              if (Fe) {
                let pe = r.getMirroredCharacter(g[be.charIndex]);
                pe && be.fontData.fontObj.forEachGlyph(pe, 0, 0, qe);
              }
              if (ne) {
                let { charIndex: pe, fontData: Me } = be, Re = be.x + oe, Oe2 = be.x + be.width + oe;
                H$1[pe * 4] = Fe ? Oe2 : Re, H$1[pe * 4 + 1] = Fe ? Re : Oe2, H$1[pe * 4 + 2] = me.baseline + Me.caretBottom + K, H$1[pe * 4 + 3] = me.baseline + Me.caretTop + K;
                let Ee = pe - ue;
                Ee > 1 && s(H$1, ue, Ee), ue = pe;
              }
              if (L) {
                let { charIndex: pe } = be;
                for (; pe > ve; ) ve++, L.hasOwnProperty(ve) && (De2 = L[ve]);
              }
              if (!Te.isWhitespace && !Te.isEmpty) {
                let pe = ie++, { fontSizeMult: Me, src: Re, index: Oe2 } = be.fontData, Ee = J[Re] || (J[Re] = {});
                Ee[Ce] || (Ee[Ce] = { path: Te.path, pathBounds: [Te.xMin, Te.yMin, Te.xMax, Te.yMax] });
                let Ne = be.x + oe, $e = be.y + me.baseline + K;
                z[pe * 2] = Ne, z[pe * 2 + 1] = $e;
                let Je = Ne + Te.xMin * Me, et = $e + Te.yMin * Me, at = Ne + Te.xMax * Me, Ke = $e + Te.yMax * Me;
                Je < V[0] && (V[0] = Je), et < V[1] && (V[1] = et), at > V[2] && (V[2] = at), Ke > V[3] && (V[3] = Ke), pe % I2 === 0 && (_e = { start: pe, end: pe, rect: [1 / 0, 1 / 0, -1 / 0, -1 / 0] }, ge.push(_e)), _e.end++;
                let Le = _e.rect;
                if (Je < Le[0] && (Le[0] = Je), et < Le[1] && (Le[1] = et), at > Le[2] && (Le[2] = at), Ke > Le[3] && (Le[3] = Ke), N[pe] = Ce, B[pe] = Oe2, L) {
                  let ot2 = pe * 3;
                  ee[ot2] = De2 >> 16 & 255, ee[ot2 + 1] = De2 >> 8 & 255, ee[ot2 + 2] = De2 & 255;
                }
              }
            }
          }
        }), H$1) {
          let me = g.length - ue;
          me > 1 && s(H$1, ue, me);
        }
      }
      let xe = [];
      le.forEach(({ index: ae, src: ie, unitsPerEm: ue, ascender: ve, descender: _e, lineHeight: De2, capHeight: me, xHeight: ye2 }) => {
        xe[ae] = { src: ie, unitsPerEm: ue, ascender: ve, descender: _e, lineHeight: De2, capHeight: me, xHeight: ye2 };
      }), M.typesetting = l() - X, p2({ glyphIds: N, glyphFontIndices: B, glyphPositions: z, glyphData: J, fontData: xe, caretPositions: H$1, glyphColors: ee, chunkedBounds: ge, fontSize: S, topBaseline: K + de[0].baseline, blockBounds: [oe, K - Q, oe + ce, K], visibleBounds: V, timings: M });
    });
  }
  H(i, "typeset");
  function n(g, m) {
    i(G(F({}, g), { metricsOnly: true }), (y) => {
      let [E, S, U, k] = y.blockBounds;
      m({ width: U - E, height: k - S });
    });
  }
  H(n, "measure");
  function o(g) {
    let m = g.match(/^([\d.]+)%$/), y = m ? parseFloat(m[1]) : NaN;
    return isNaN(y) ? 0 : y / 100;
  }
  H(o, "parsePercent");
  function s(g, m, y) {
    let E = g[m * 4], S = g[m * 4 + 1], U = g[m * 4 + 2], k = g[m * 4 + 3], w = (S - E) / y;
    for (let D = 0; D < y; D++) {
      let x = (m + D) * 4;
      g[x] = E + w * D, g[x + 1] = E + w * (D + 1), g[x + 2] = U, g[x + 3] = k;
    }
  }
  H(s, "fillLigatureCaretPositions");
  function l() {
    return (self.performance || Date).now();
  }
  H(l, "now");
  function u() {
    this.data = [];
  }
  H(u, "TextLine");
  let d = ["glyphObj", "x", "y", "width", "charIndex", "fontData"];
  return u.prototype = { width: 0, lineHeight: 0, baseline: 0, cap: 0, ex: 0, isSoftWrapped: false, get count() {
    return Math.ceil(this.data.length / d.length);
  }, glyphAt(g) {
    let m = u.flyweight;
    return m.data = this.data, m.index = g, m;
  }, splitAt(g) {
    let m = new u();
    return m.data = this.data.splice(g * d.length), m;
  } }, u.flyweight = d.reduce((g, m, y, E) => (Object.defineProperty(g, m, { get() {
    return this.data[this.index * d.length + y];
  }, set(S) {
    this.data[this.index * d.length + y] = S;
  } }), g), { data: null, index: 0 }), { typeset: i, measure: n };
}
H(Ia, "createTypesetter");
var ft = H(() => (self.performance || Date).now(), "now"), tr = Dr(), Wn;
function za(h, r, c, f, t, e, a2, i, n, o, s = true) {
  return s ? Na(h, r, c, f, t, e, a2, i, n, o).then(null, (l) => (Wn || (console.warn("WebGL SDF generation failed, falling back to JS", l), Wn = true), Vn(h, r, c, f, t, e, a2, i, n, o))) : Vn(h, r, c, f, t, e, a2, i, n, o);
}
H(za, "generateSDF");
var qt = [], Wa = 5, Lr = 0;
function qn() {
  let h = ft();
  for (; qt.length && ft() - h < Wa; ) qt.shift()();
  Lr = qt.length ? setTimeout(qn, 0) : 0;
}
H(qn, "nextChunk");
var Na = H((...h) => new Promise((r, c) => {
  qt.push(() => {
    let f = ft();
    try {
      tr.webgl.generateIntoCanvas(...h), r({ timing: ft() - f });
    } catch (t) {
      c(t);
    }
  }), Lr || (Lr = setTimeout(qn, 0));
}), "generateSDF_GL"), Va = 4, ja = 2e3, Nn = {}, Xa = 0;
function Vn(h, r, c, f, t, e, a2, i, n, o) {
  let s = "TroikaTextSDFGenerator_JS_" + Xa++ % Va, l = Nn[s];
  return l || (l = Nn[s] = { workerModule: st({ name: s, workerId: s, dependencies: [Dr, ft], init(u, d) {
    let g = u().javascript.generate;
    return function(...m) {
      let y = d();
      return { textureData: g(...m), timing: d() - y };
    };
  }, getTransferables(u) {
    return [u.textureData.buffer];
  } }), requests: 0, idleTimer: null }), l.requests++, clearTimeout(l.idleTimer), l.workerModule(h, r, c, f, t, e).then(({ textureData: u, timing: d }) => {
    let g = ft(), m = new Uint8Array(u.length * 4);
    for (let y = 0; y < u.length; y++) m[y * 4 + o] = u[y];
    return tr.webglUtils.renderImageData(a2, m, i, n, h, r, 1 << 3 - o), d += ft() - g, --l.requests === 0 && (l.idleTimer = setTimeout(() => {
      Rn(s);
    }, ja)), { timing: d };
  });
}
H(Vn, "generateSDF_JS_Worker");
function Ha(h) {
  h._warm || (tr.webgl.isSupported(h), h._warm = true);
}
H(Ha, "warmUpSDFCanvas");
var Ya = tr.webglUtils.resizeWebGLCanvasWithoutClearing, nt = { defaultFontURL: null, unicodeFontsURL: null, sdfGlyphSize: 64, sdfMargin: 1 / 16, sdfExponent: 9, textureWidth: 2048, useWorker: true }, Ja = new Ft(), $n = false;
function pt() {
  return (self.performance || Date).now();
}
H(pt, "now$1");
function ea(h) {
  $n ? console.warn("configureTextBuilder called after first font request; will be ignored.") : na(nt, h);
}
H(ea, "configureTextBuilder");
var jn = /* @__PURE__ */ Object.create(null);
function ta(h, r) {
  $n = true, h = na({}, h);
  let c = pt(), { defaultFontURL: f } = nt, t = [];
  if (f && t.push({ label: "default", src: Xn(f) }), h.font && t.push({ label: "user", src: Xn(h.font) }), h.font = t, h.text = "" + h.text, h.sdfGlyphSize = h.sdfGlyphSize || nt.sdfGlyphSize, h.unicodeFontsURL = h.unicodeFontsURL || nt.unicodeFontsURL, h.colorRanges != null) {
    let d = {};
    for (let g in h.colorRanges) if (h.colorRanges.hasOwnProperty(g)) {
      let m = h.colorRanges[g];
      typeof m != "number" && (m = Ja.set(m).getHex()), d[g] = m;
    }
    h.colorRanges = d;
  }
  Object.freeze(h);
  let { textureWidth: e, sdfExponent: a2 } = nt, { sdfGlyphSize: i } = h, n = e / i * 4, o = jn[i];
  if (!o) {
    let d = document.createElement("canvas");
    d.width = e, d.height = i * 256 / n, o = jn[i] = { glyphCount: 0, sdfGlyphSize: i, sdfCanvas: d, sdfTexture: new we(d, void 0, void 0, void 0, en, en), contextLost: false, glyphsByFont: /* @__PURE__ */ new Map() }, o.sdfTexture.generateMipmaps = false, Ka(o);
  }
  let { sdfTexture: s, sdfCanvas: l } = o;
  (nt.useWorker ? oa : Qa)(h).then((d) => {
    let { glyphIds: g, glyphFontIndices: m, fontData: y, glyphPositions: E, fontSize: S, timings: U } = d, k = [], w = new Float32Array(g.length * 4), D = 0, x = 0, A = pt(), W = y.map((F2) => {
      let j = o.glyphsByFont.get(F2.src);
      return j || o.glyphsByFont.set(F2.src, j = /* @__PURE__ */ new Map()), j;
    });
    g.forEach((F2, j) => {
      let P = m[j], { src: Z, unitsPerEm: ne } = y[P], I2 = W[P].get(F2);
      if (!I2) {
        let { path: C, pathBounds: _ } = d.glyphData[Z][F2], N = Math.max(_[2] - _[0], _[3] - _[1]) / i * (nt.sdfMargin * i + 0.5), B = o.glyphCount++, z = [_[0] - N, _[1] - N, _[2] + N, _[3] + N];
        W[P].set(F2, I2 = { path: C, atlasIndex: B, sdfViewBox: z }), k.push(I2);
      }
      let { sdfViewBox: L } = I2, p2 = E[x++], T = E[x++], M = S / ne;
      w[D++] = p2 + L[0] * M, w[D++] = T + L[1] * M, w[D++] = p2 + L[2] * M, w[D++] = T + L[3] * M, g[j] = I2.atlasIndex;
    }), U.quads = (U.quads || 0) + (pt() - A);
    let O = pt();
    U.sdf = {};
    let Y = l.height, b = Math.ceil(o.glyphCount / n), R = Math.pow(2, Math.ceil(Math.log2(b * i)));
    R > Y && (console.info("Increasing SDF texture size ".concat(Y, "->").concat(R)), Ya(l, e, R), s.dispose()), Promise.all(k.map((F2) => ra(F2, o, h.gpuAccelerateSDF).then(({ timing: j }) => {
      U.sdf[F2.atlasIndex] = j;
    }))).then(() => {
      k.length && !o.contextLost && (aa(o), s.needsUpdate = true), U.sdfTotal = pt() - O, U.total = pt() - c, r(Object.freeze({ parameters: h, sdfTexture: s, sdfGlyphSize: i, sdfExponent: a2, glyphBounds: w, glyphAtlasIndices: g, glyphColors: d.glyphColors, caretPositions: d.caretPositions, chunkedBounds: d.chunkedBounds, ascender: d.ascender, descender: d.descender, lineHeight: d.lineHeight, capHeight: d.capHeight, xHeight: d.xHeight, topBaseline: d.topBaseline, blockBounds: d.blockBounds, visibleBounds: d.visibleBounds, timings: d.timings }));
    });
  }), Promise.resolve().then(() => {
    o.contextLost || Ha(l);
  });
}
H(ta, "getTextRenderInfo");
function ra({ path: h, atlasIndex: r, sdfViewBox: c }, { sdfGlyphSize: f, sdfCanvas: t, contextLost: e }, a2) {
  if (e) return Promise.resolve({ timing: -1 });
  let { textureWidth: i, sdfExponent: n } = nt, o = Math.max(c[2] - c[0], c[3] - c[1]), s = Math.floor(r / 4), l = s % (i / f) * f, u = Math.floor(s / (i / f)) * f, d = r % 4;
  return za(f, f, h, c, o, n, t, l, u, d, a2);
}
H(ra, "generateGlyphSDF");
function Ka(h) {
  let r = h.sdfCanvas;
  r.addEventListener("webglcontextlost", (c) => {
    console.log("Context Lost", c), c.preventDefault(), h.contextLost = true;
  }), r.addEventListener("webglcontextrestored", (c) => {
    console.log("Context Restored", c), h.contextLost = false;
    let f = [];
    h.glyphsByFont.forEach((t) => {
      t.forEach((e) => {
        f.push(ra(e, h, true));
      });
    }), Promise.all(f).then(() => {
      aa(h), h.sdfTexture.needsUpdate = true;
    });
  });
}
H(Ka, "initContextLossHandling");
function zr({ font: h, characters: r, sdfGlyphSize: c }, f) {
  let t = Array.isArray(r) ? r.join("\n") : "" + r;
  ta({ font: h, sdfGlyphSize: c, text: t }, f);
}
H(zr, "preloadFont");
function na(h, r) {
  for (let c in r) r.hasOwnProperty(c) && (h[c] = r[c]);
  return h;
}
H(na, "assign");
var Zt;
function Xn(h) {
  return Zt || (Zt = typeof document > "u" ? {} : document.createElement("a")), Zt.href = h, Zt.href;
}
H(Xn, "toAbsoluteURL");
function aa(h) {
  if (typeof createImageBitmap != "function") {
    console.info("Safari<15: applying SDF canvas workaround");
    let { sdfCanvas: r, sdfTexture: c } = h, { width: f, height: t } = r, e = h.sdfCanvas.getContext("webgl"), a2 = c.image.data;
    (!a2 || a2.length !== f * t * 4) && (a2 = new Uint8Array(f * t * 4), c.image = { width: f, height: t, data: a2 }, c.flipY = false, c.isDataTexture = true), e.readPixels(0, 0, f, t, e.RGBA, e.UNSIGNED_BYTE, a2);
  }
}
H(aa, "safariPre15Workaround");
var Za = st({ name: "Typesetter", dependencies: [Ia, Pa, Ln], init(h, r, c) {
  return h(r, c());
} }), oa = st({ name: "Typesetter", dependencies: [Za], init(h) {
  return function(r) {
    return new Promise((c) => {
      h.typeset(r, c);
    });
  };
}, getTransferables(h) {
  let r = [];
  for (let c in h) h[c] && h[c].buffer && r.push(h[c].buffer);
  return r;
} }), Qa = oa.onMainThread;
var Hn = {};
function qa(h) {
  let r = Hn[h];
  return r || (r = Hn[h] = new Os(1, 1, h, h).translate(0.5, 0.5, 0)), r;
}
H(qa, "getTemplateGeometry");
var $t = "aTroikaGlyphBounds", Ot = "aTroikaGlyphIndex", $a = "aTroikaGlyphColor", Nr = class Nr2 extends Gl {
  constructor() {
    super(), this.detail = 1, this.curveRadius = 0, this.groups = [{ start: 0, count: 1 / 0, materialIndex: 0 }, { start: 0, count: 1 / 0, materialIndex: 1 }], this.boundingSphere = new Ae(), this.boundingBox = new Pe();
  }
  computeBoundingSphere() {
  }
  computeBoundingBox() {
  }
  set detail(r) {
    if (r !== this._detail) {
      this._detail = r, (typeof r != "number" || r < 1) && (r = 1);
      let c = qa(r);
      ["position", "normal", "uv"].forEach((f) => {
        this.attributes[f] = c.attributes[f].clone();
      }), this.setIndex(c.getIndex().clone());
    }
  }
  get detail() {
    return this._detail;
  }
  set curveRadius(r) {
    r !== this._curveRadius && (this._curveRadius = r, this._updateBounds());
  }
  get curveRadius() {
    return this._curveRadius;
  }
  updateGlyphs(r, c, f, t, e) {
    this.updateAttributeData($t, r, 4), this.updateAttributeData(Ot, c, 1), this.updateAttributeData($a, e, 3), this._blockBounds = f, this._chunkedBounds = t, this.instanceCount = c.length, this._updateBounds();
  }
  _updateBounds() {
    let r = this._blockBounds;
    if (r) {
      let { curveRadius: c, boundingBox: f } = this;
      if (c) {
        let { PI: t, floor: e, min: a2, max: i, sin: n, cos: o } = Math, s = t / 2, l = t * 2, u = Math.abs(c), d = r[0] / u, g = r[2] / u, m = e((d + s) / l) !== e((g + s) / l) ? -u : a2(n(d) * u, n(g) * u), y = e((d - s) / l) !== e((g - s) / l) ? u : i(n(d) * u, n(g) * u), E = e((d + t) / l) !== e((g + t) / l) ? u * 2 : i(u - o(d) * u, u - o(g) * u);
        f.min.set(m, r[1], c < 0 ? -E : 0), f.max.set(y, r[3], c < 0 ? 0 : E);
      } else f.min.set(r[0], r[1], 0), f.max.set(r[2], r[3], 0);
      f.getBoundingSphere(this.boundingSphere);
    }
  }
  applyClipRect(r) {
    let c = this.getAttribute(Ot).count, f = this._chunkedBounds;
    if (f) for (let t = f.length; t--; ) {
      c = f[t].end;
      let e = f[t].rect;
      if (e[1] < r.w && e[3] > r.y && e[0] < r.z && e[2] > r.x) break;
    }
    this.instanceCount = c;
  }
  updateAttributeData(r, c, f) {
    let t = this.getAttribute(r);
    c ? t && t.array.length === c.length ? (t.array.set(c), t.needsUpdate = true) : (this.setAttribute(r, new Es(c, f)), delete this._maxInstanceCount, this.dispose()) : t && this.deleteAttribute(r);
  }
};
H(Nr, "GlyphsGeometry");
var Gr = Nr, eo = "\nuniform vec2 uTroikaSDFTextureSize;\nuniform float uTroikaSDFGlyphSize;\nuniform vec4 uTroikaTotalBounds;\nuniform vec4 uTroikaClipRect;\nuniform mat3 uTroikaOrient;\nuniform bool uTroikaUseGlyphColors;\nuniform float uTroikaEdgeOffset;\nuniform float uTroikaBlurRadius;\nuniform vec2 uTroikaPositionOffset;\nuniform float uTroikaCurveRadius;\nattribute vec4 aTroikaGlyphBounds;\nattribute float aTroikaGlyphIndex;\nattribute vec3 aTroikaGlyphColor;\nvarying vec2 vTroikaGlyphUV;\nvarying vec4 vTroikaTextureUVBounds;\nvarying float vTroikaTextureChannel;\nvarying vec3 vTroikaGlyphColor;\nvarying vec2 vTroikaGlyphDimensions;\n", to = "\nvec4 bounds = aTroikaGlyphBounds;\nbounds.xz += uTroikaPositionOffset.x;\nbounds.yw -= uTroikaPositionOffset.y;\n\nvec4 outlineBounds = vec4(\n  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,\n  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius\n);\nvec4 clippedBounds = vec4(\n  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),\n  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)\n);\n\nvec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);\n\nposition.xy = mix(bounds.xy, bounds.zw, clippedXY);\n\nuv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);\n\nfloat rad = uTroikaCurveRadius;\nif (rad != 0.0) {\n  float angle = position.x / rad;\n  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);\n  normal.xz = vec2(sin(angle), cos(angle));\n}\n  \nposition = uTroikaOrient * position;\nnormal = uTroikaOrient * normal;\n\nvTroikaGlyphUV = clippedXY.xy;\nvTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);\n\n\nfloat txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;\nvec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;\nvec2 txStartUV = txUvPerSquare * vec2(\n  mod(floor(aTroikaGlyphIndex / 4.0), txCols),\n  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)\n);\nvTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);\nvTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);\n", ro = "\nuniform sampler2D uTroikaSDFTexture;\nuniform vec2 uTroikaSDFTextureSize;\nuniform float uTroikaSDFGlyphSize;\nuniform float uTroikaSDFExponent;\nuniform float uTroikaEdgeOffset;\nuniform float uTroikaFillOpacity;\nuniform float uTroikaBlurRadius;\nuniform vec3 uTroikaStrokeColor;\nuniform float uTroikaStrokeWidth;\nuniform float uTroikaStrokeOpacity;\nuniform bool uTroikaSDFDebug;\nvarying vec2 vTroikaGlyphUV;\nvarying vec4 vTroikaTextureUVBounds;\nvarying float vTroikaTextureChannel;\nvarying vec2 vTroikaGlyphDimensions;\n\nfloat troikaSdfValueToSignedDistance(float alpha) {\n  // Inverse of exponential encoding in webgl-sdf-generator\n  \n  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);\n  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;\n  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);\n  return signedDist;\n}\n\nfloat troikaGlyphUvToSdfValue(vec2 glyphUV) {\n  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);\n  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);\n  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1\n  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;\n}\n\nfloat troikaGlyphUvToDistance(vec2 uv) {\n  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));\n}\n\nfloat troikaGetAADist() {\n  \n  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300\n  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;\n  #else\n  return vTroikaGlyphDimensions.x / 64.0;\n  #endif\n}\n\nfloat troikaGetFragDistValue() {\n  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);\n  float distance = troikaGlyphUvToDistance(clampedGlyphUV);\n \n  // Extrapolate distance when outside bounds:\n  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : \n    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);\n\n  \n\n  return distance;\n}\n\nfloat troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {\n  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)\n  float alpha = step(-distanceOffset, -distance);\n  #else\n\n  float alpha = smoothstep(\n    distanceOffset + aaDist,\n    distanceOffset - aaDist,\n    distance\n  );\n  #endif\n\n  return alpha;\n}\n", no = "\nfloat aaDist = troikaGetAADist();\nfloat fragDistance = troikaGetFragDistValue();\nfloat edgeAlpha = uTroikaSDFDebug ?\n  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :\n  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));\n\n#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)\nvec4 fillRGBA = gl_FragColor;\nfillRGBA.a *= uTroikaFillOpacity;\nvec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);\nif (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;\ngl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(\n  -uTroikaStrokeWidth - aaDist,\n  -uTroikaStrokeWidth + aaDist,\n  fragDistance\n));\ngl_FragColor.a *= edgeAlpha;\n#endif\n\nif (edgeAlpha == 0.0) {\n  discard;\n}\n";
function ia(h) {
  let r = vt(h, { chained: true, extensions: { derivatives: true }, uniforms: { uTroikaSDFTexture: { value: null }, uTroikaSDFTextureSize: { value: new ot() }, uTroikaSDFGlyphSize: { value: 0 }, uTroikaSDFExponent: { value: 0 }, uTroikaTotalBounds: { value: new $t$1(0, 0, 0, 0) }, uTroikaClipRect: { value: new $t$1(0, 0, 0, 0) }, uTroikaEdgeOffset: { value: 0 }, uTroikaFillOpacity: { value: 1 }, uTroikaPositionOffset: { value: new ot() }, uTroikaCurveRadius: { value: 0 }, uTroikaBlurRadius: { value: 0 }, uTroikaStrokeWidth: { value: 0 }, uTroikaStrokeColor: { value: new Ft() }, uTroikaStrokeOpacity: { value: 1 }, uTroikaOrient: { value: new Bt$1() }, uTroikaUseGlyphColors: { value: true }, uTroikaSDFDebug: { value: false } }, vertexDefs: eo, vertexTransform: to, fragmentDefs: ro, fragmentColorTransform: no, customRewriter({ vertexShader: c, fragmentShader: f }) {
    let t = /\buniform\s+vec3\s+diffuse\b/;
    return t.test(f) && (f = f.replace(t, "varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g, "vTroikaGlyphColor"), t.test(c) || (c = c.replace(Er, "uniform vec3 diffuse;\n$&\nvTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;\n"))), { vertexShader: c, fragmentShader: f };
  } });
  return r.transparent = true, r.forceSinglePass = true, Object.defineProperties(r, { isTroikaTextMaterial: { value: true }, shadowSide: { get() {
    return this.side;
  }, set() {
  } } }), r;
}
H(ia, "createTextDerivedMaterial");
var Wr = new vs({ color: 16777215, side: cn, transparent: true }), Yn = 8421504, Jn = new Vt(), Qt = new I(), Br = new I(), Bt = [], ao = new I(), Or = "+x+y";
function Kn(h) {
  return Array.isArray(h) ? h[0] : h;
}
H(Kn, "first");
var sa = H(() => {
  let h = new ye(new Os(1, 1), Wr);
  return sa = H(() => h, "getFlatRaycastMesh"), h;
}, "getFlatRaycastMesh"), la = H(() => {
  let h = new ye(new Os(1, 1, 32, 1), Wr);
  return la = H(() => h, "getCurvedRaycastMesh"), h;
}, "getCurvedRaycastMesh"), oo = { type: "syncstart" }, io = { type: "synccomplete" }, fa = ["font", "fontSize", "fontStyle", "fontWeight", "lang", "letterSpacing", "lineHeight", "maxWidth", "overflowWrap", "text", "direction", "textAlign", "textIndent", "whiteSpace", "anchorX", "anchorY", "colorRanges", "sdfGlyphSize"], so = fa.concat("material", "color", "depthOffset", "clipRect", "curveRadius", "orientation", "glyphGeometryDetail"), Vr = class Vr2 extends ye {
  constructor() {
    let r = new Gr();
    super(r, null), this.text = "", this.anchorX = 0, this.anchorY = 0, this.curveRadius = 0, this.direction = "auto", this.font = null, this.unicodeFontsURL = null, this.fontSize = 0.1, this.fontWeight = "normal", this.fontStyle = "normal", this.lang = null, this.letterSpacing = 0, this.lineHeight = "normal", this.maxWidth = 1 / 0, this.overflowWrap = "normal", this.textAlign = "left", this.textIndent = 0, this.whiteSpace = "normal", this.material = null, this.color = null, this.colorRanges = null, this.outlineWidth = 0, this.outlineColor = 0, this.outlineOpacity = 1, this.outlineBlur = 0, this.outlineOffsetX = 0, this.outlineOffsetY = 0, this.strokeWidth = 0, this.strokeColor = Yn, this.strokeOpacity = 1, this.fillOpacity = 1, this.depthOffset = 0, this.clipRect = null, this.orientation = Or, this.glyphGeometryDetail = 1, this.sdfGlyphSize = null, this.gpuAccelerateSDF = true, this.debugSDF = false;
  }
  sync(r) {
    this._needsSync && (this._needsSync = false, this._isSyncing ? (this._queuedSyncs || (this._queuedSyncs = [])).push(r) : (this._isSyncing = true, this.dispatchEvent(oo), ta({ text: this.text, font: this.font, lang: this.lang, fontSize: this.fontSize || 0.1, fontWeight: this.fontWeight || "normal", fontStyle: this.fontStyle || "normal", letterSpacing: this.letterSpacing || 0, lineHeight: this.lineHeight || "normal", maxWidth: this.maxWidth, direction: this.direction || "auto", textAlign: this.textAlign, textIndent: this.textIndent, whiteSpace: this.whiteSpace, overflowWrap: this.overflowWrap, anchorX: this.anchorX, anchorY: this.anchorY, colorRanges: this.colorRanges, includeCaretPositions: true, sdfGlyphSize: this.sdfGlyphSize, gpuAccelerateSDF: this.gpuAccelerateSDF, unicodeFontsURL: this.unicodeFontsURL }, (c) => {
      this._isSyncing = false, this._textRenderInfo = c, this.geometry.updateGlyphs(c.glyphBounds, c.glyphAtlasIndices, c.blockBounds, c.chunkedBounds, c.glyphColors);
      let f = this._queuedSyncs;
      f && (this._queuedSyncs = null, this._needsSync = true, this.sync(() => {
        f.forEach((t) => t && t());
      })), this.dispatchEvent(io), r && r();
    })));
  }
  onBeforeRender(r, c, f, t, e, a2) {
    this.sync(), e.isTroikaTextMaterial && this._prepareForRender(e);
  }
  dispose() {
    this.geometry.dispose();
  }
  get textRenderInfo() {
    return this._textRenderInfo || null;
  }
  createDerivedMaterial(r) {
    return ia(r);
  }
  get material() {
    let r = this._derivedMaterial, c = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = Wr.clone());
    if ((!r || !r.isDerivedFrom(c)) && (r = this._derivedMaterial = this.createDerivedMaterial(c), c.addEventListener("dispose", H(function f() {
      c.removeEventListener("dispose", f), r.dispose();
    }, "onDispose"))), this.hasOutline()) {
      let f = r._outlineMtl;
      return f || (f = r._outlineMtl = Object.create(r, { id: { value: r.id + 0.1 } }), f.isTextOutlineMaterial = true, f.depthWrite = false, f.map = null, r.addEventListener("dispose", H(function t() {
        r.removeEventListener("dispose", t), f.dispose();
      }, "onDispose"))), [f, r];
    } else return r;
  }
  set material(r) {
    r && r.isTroikaTextMaterial ? (this._derivedMaterial = r, this._baseMaterial = r.baseMaterial) : this._baseMaterial = r;
  }
  hasOutline() {
    return !!(this.outlineWidth || this.outlineBlur || this.outlineOffsetX || this.outlineOffsetY);
  }
  get glyphGeometryDetail() {
    return this.geometry.detail;
  }
  set glyphGeometryDetail(r) {
    this.geometry.detail = r;
  }
  get curveRadius() {
    return this.geometry.curveRadius;
  }
  set curveRadius(r) {
    this.geometry.curveRadius = r;
  }
  get customDepthMaterial() {
    return Kn(this.material).getDepthMaterial();
  }
  set customDepthMaterial(r) {
  }
  get customDistanceMaterial() {
    return Kn(this.material).getDistanceMaterial();
  }
  set customDistanceMaterial(r) {
  }
  _prepareForRender(r) {
    let c = r.isTextOutlineMaterial, f = r.uniforms, t = this.textRenderInfo;
    if (t) {
      let { sdfTexture: i, blockBounds: n } = t;
      f.uTroikaSDFTexture.value = i, f.uTroikaSDFTextureSize.value.set(i.image.width, i.image.height), f.uTroikaSDFGlyphSize.value = t.sdfGlyphSize, f.uTroikaSDFExponent.value = t.sdfExponent, f.uTroikaTotalBounds.value.fromArray(n), f.uTroikaUseGlyphColors.value = !c && !!t.glyphColors;
      let o = 0, s = 0, l = 0, u, d, g, m = 0, y = 0;
      if (c) {
        let { outlineWidth: S, outlineOffsetX: U, outlineOffsetY: k, outlineBlur: w, outlineOpacity: D } = this;
        o = this._parsePercent(S) || 0, s = Math.max(0, this._parsePercent(w) || 0), u = D, m = this._parsePercent(U) || 0, y = this._parsePercent(k) || 0;
      } else l = Math.max(0, this._parsePercent(this.strokeWidth) || 0), l && (g = this.strokeColor, f.uTroikaStrokeColor.value.set(g == null ? Yn : g), d = this.strokeOpacity, d == null && (d = 1)), u = this.fillOpacity;
      f.uTroikaEdgeOffset.value = o, f.uTroikaPositionOffset.value.set(m, y), f.uTroikaBlurRadius.value = s, f.uTroikaStrokeWidth.value = l, f.uTroikaStrokeOpacity.value = d, f.uTroikaFillOpacity.value = u == null ? 1 : u, f.uTroikaCurveRadius.value = this.curveRadius || 0;
      let E = this.clipRect;
      if (E && Array.isArray(E) && E.length === 4) f.uTroikaClipRect.value.fromArray(E);
      else {
        let S = (this.fontSize || 0.1) * 100;
        f.uTroikaClipRect.value.set(n[0] - S, n[1] - S, n[2] + S, n[3] + S);
      }
      this.geometry.applyClipRect(f.uTroikaClipRect.value);
    }
    f.uTroikaSDFDebug.value = !!this.debugSDF, r.polygonOffset = !!this.depthOffset, r.polygonOffsetFactor = r.polygonOffsetUnits = this.depthOffset || 0;
    let e = c ? this.outlineColor || 0 : this.color;
    if (e == null) delete r.color;
    else {
      let i = r.hasOwnProperty("color") ? r.color : r.color = new Ft();
      (e !== i._input || typeof e == "object") && i.set(i._input = e);
    }
    let a2 = this.orientation || Or;
    if (a2 !== r._orientation) {
      let i = f.uTroikaOrient.value;
      a2 = a2.replace(/[^-+xyz]/g, "");
      let n = a2 !== Or && a2.match(/^([-+])([xyz])([-+])([xyz])$/);
      if (n) {
        let [, o, s, l, u] = n;
        Qt.set(0, 0, 0)[s] = o === "-" ? 1 : -1, Br.set(0, 0, 0)[u] = l === "-" ? -1 : 1, Jn.lookAt(ao, Qt.cross(Br), Br), i.setFromMatrix4(Jn);
      } else i.identity();
      r._orientation = a2;
    }
  }
  _parsePercent(r) {
    if (typeof r == "string") {
      let c = r.match(/^(-?[\d.]+)%$/), f = c ? parseFloat(c[1]) : NaN;
      r = (isNaN(f) ? 0 : f / 100) * this.fontSize;
    }
    return r;
  }
  localPositionToTextCoords(r, c = new ot()) {
    c.copy(r);
    let f = this.curveRadius;
    return f && (c.x = Math.atan2(r.x, Math.abs(f) - Math.abs(r.z)) * Math.abs(f)), c;
  }
  worldPositionToTextCoords(r, c = new ot()) {
    return Qt.copy(r), this.localPositionToTextCoords(this.worldToLocal(Qt), c);
  }
  raycast(r, c) {
    let { textRenderInfo: f, curveRadius: t } = this;
    if (f) {
      let e = f.blockBounds, a2 = t ? la() : sa(), i = a2.geometry, { position: n, uv: o } = i.attributes;
      for (let s = 0; s < o.count; s++) {
        let l = e[0] + o.getX(s) * (e[2] - e[0]), u = e[1] + o.getY(s) * (e[3] - e[1]), d = 0;
        t && (d = t - Math.cos(l / t) * t, l = Math.sin(l / t) * t), n.setXYZ(s, l, u, d);
      }
      i.boundingSphere = this.geometry.boundingSphere, i.boundingBox = this.geometry.boundingBox, a2.matrixWorld = this.matrixWorld, a2.material.side = this.material.side, Bt.length = 0, a2.raycast(r, Bt);
      for (let s = 0; s < Bt.length; s++) Bt[s].object = this, c.push(Bt[s]);
    }
  }
  copy(r) {
    let c = this.geometry;
    return super.copy(r), this.geometry = c, so.forEach((f) => {
      this[f] = r[f];
    }), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
H(Vr, "Text");
var Qe = Vr;
fa.forEach((h) => {
  let r = "_private_" + h;
  Object.defineProperty(Qe.prototype, h, { get() {
    return this[r];
  }, set(c) {
    c !== this[r] && (this[r] = c, this._needsSync = true);
  } });
});
var lo = { type: "syncstart" }, fo = { type: "synccomplete" }, gt = "aTroikaTextBatchMemberIndex", Pr = 32, Zn = new Pe(), Qn = new Ft(), er = class er2 extends Qe {
  constructor() {
    super(), this._members = /* @__PURE__ */ new Map(), this._dataTextures = {}, this._onMemberSynced = (r) => {
      this._members.get(r.target).dirty = true;
    };
  }
  add(...r) {
    for (let c = 0; c < r.length; c++) r[c] instanceof Qe ? this.addText(r[c]) : super.add(r[c]);
    return this;
  }
  remove(...r) {
    for (let c = 0; c < r.length; c++) r[c] instanceof Qe ? this.removeText(r[c]) : super.remove(r[c]);
    return this;
  }
  addText(r) {
    this._members.has(r) || (this._members.set(r, { index: -1, glyphCount: -1, dirty: true }), r.addEventListener("synccomplete", this._onMemberSynced));
  }
  removeText(r) {
    this._needsRepack = true, r.removeEventListener("synccomplete", this._onMemberSynced), this._members.delete(r);
  }
  createDerivedMaterial(r) {
    return uo(r);
  }
  updateMatrixWorld(r) {
    super.updateMatrixWorld(r), this.updateBounds();
  }
  updateBounds() {
    let r = this.geometry.boundingBox.makeEmpty();
    this._members.forEach((c, f) => {
      f.matrixAutoUpdate && f.updateMatrix(), Zn.copy(f.geometry.boundingBox).applyMatrix4(f.matrix), r.union(Zn);
    }), r.getBoundingSphere(this.geometry.boundingSphere);
  }
  hasOutline() {
    for (let r of this._members.keys()) if (r.hasOutline()) return true;
    return false;
  }
  _prepareForRender(r) {
    let c = r.isTextOutlineMaterial;
    r.uniforms.uTroikaIsOutline.value = c;
    let f = this._dataTextures[c ? "outline" : "main"], t = Math.pow(2, Math.ceil(Math.log2(this._members.size * Pr)));
    if (!f || t !== f.image.data.length) {
      f && f.dispose();
      let i = Math.min(t / 4, 1024);
      f = this._dataTextures[c ? "outline" : "main"] = new kn(new Float32Array(t), i, t / 4 / i, De, Oe);
    }
    let e = f.image.data, a2 = H((i, n) => {
      n !== e[i] && (e[i] = n, f.needsUpdate = true);
    }, "setTexData");
    this._members.forEach(({ index: i, dirty: n }, o) => {
      if (i > -1) {
        let s = i * Pr, l = o.matrix.elements;
        for (let x = 0; x < 16; x++) a2(s + x, l[x]);
        o._prepareForRender(r);
        let { uTroikaTotalBounds: u, uTroikaClipRect: d, uTroikaPositionOffset: g, uTroikaEdgeOffset: m, uTroikaBlurRadius: y, uTroikaStrokeWidth: E, uTroikaStrokeColor: S, uTroikaStrokeOpacity: U, uTroikaFillOpacity: k, uTroikaCurveRadius: w } = r.uniforms;
        for (let x = 0; x < 4; x++) a2(s + 16 + x, u.value.getComponent(x));
        for (let x = 0; x < 4; x++) a2(s + 20 + x, d.value.getComponent(x));
        let D = c ? o.outlineColor || 0 : o.color;
        D == null && (D = this.color), D == null && (D = this.material.color), D == null && (D = 16777215), a2(s + 24, Qn.set(D).getHex()), a2(s + 25, k.value), a2(s + 26, w.value), c ? (a2(s + 28, g.value.x), a2(s + 29, g.value.y), a2(s + 30, m.value), a2(s + 31, y.value)) : (a2(s + 28, E.value), a2(s + 29, Qn.set(S.value).getHex()), a2(s + 30, U.value));
      }
    }), r.setMatrixTexture(f), super._prepareForRender(r);
  }
  sync(r) {
    let c = this._needsRepack ? [] : null;
    this._needsRepack = false, this._members.forEach((f, t) => {
      (f.dirty || t._needsSync) && (f.dirty = false, (c || (c = [])).push(new Promise((e) => {
        t._needsSync ? t.sync(e) : e();
      })));
    }), c && (this.dispatchEvent(lo), Promise.all(c).then(() => {
      let { geometry: f } = this, t = f.attributes, e = t[gt] && t[gt].array || new Uint16Array(0), a2 = t[Ot] && t[Ot].array || new Float32Array(0), i = t[$t] && t[$t].array || new Float32Array(0), n = 0;
      this._members.forEach((l, { textRenderInfo: u }) => {
        u && (n += u.glyphAtlasIndices.length, this._textRenderInfo = u);
      }), n !== e.length && (e = Rr(e, n), a2 = Rr(a2, n), i = Rr(i, n * 4));
      let o = 0, s = 0;
      this._members.forEach((l, { textRenderInfo: u }) => {
        if (u) {
          let d = u.glyphAtlasIndices.length;
          e.fill(o, s, s + d), a2.set(u.glyphAtlasIndices, s, s + d), i.set(u.glyphBounds, s * 4, (s + d) * 4), s += d, l.index = o++;
        }
      }), f.updateAttributeData(gt, e, 1), f.getAttribute(gt).setUsage(Pp), f.updateAttributeData(Ot, a2, 1), f.updateAttributeData($t, i, 4), this.updateBounds(), this.dispatchEvent(fo), r && r();
    }));
  }
  copy(r) {
    return r instanceof er2 && (super.copy(r), this._members.forEach((c, f) => this.removeText(f)), r._members.forEach((c, f) => this.addText(f))), this;
  }
  dispose() {
    super.dispose(), Object.values(this._dataTextures).forEach((r) => r.dispose());
  }
};
H(er, "BatchedText");
var Ir = er;
function Rr(h, r) {
  let c = new h.constructor(r);
  return c.set(h.subarray(0, r)), c;
}
H(Rr, "cloneAndResize");
function uo(h) {
  let r = "uTroikaMatricesTexture", c = "uTroikaMatricesTextureSize", f = vt(h, { chained: true, uniforms: { [c]: { value: new ot() }, [r]: { value: null } }, vertexDefs: "\n      uniform highp sampler2D ".concat(r, ";\n      uniform vec2 ").concat(c, ";\n      attribute float ").concat(gt, ";\n\n      vec4 troikaBatchTexel(float offset) {\n        offset += ").concat(gt, " * ").concat(Pr.toFixed(1), " / 4.0;\n        float w = ").concat(c, ".x;\n        vec2 uv = (vec2(mod(offset, w), floor(offset / w)) + 0.5) / ").concat(c, ";\n        return texture2D(").concat(r, ", uv);\n      }\n    "), vertexTransform: "\n      mat4 matrix = mat4(\n        troikaBatchTexel(0.0),\n        troikaBatchTexel(1.0),\n        troikaBatchTexel(2.0),\n        troikaBatchTexel(3.0)\n      );\n      position.xyz = (matrix * vec4(position, 1.0)).xyz;\n    " });
  return f = ia(f), f = vt(f, { chained: true, uniforms: { uTroikaIsOutline: { value: false } }, customRewriter(t) {
    return ["uTroikaTotalBounds", "uTroikaClipRect", "uTroikaPositionOffset", "uTroikaEdgeOffset", "uTroikaBlurRadius", "uTroikaStrokeWidth", "uTroikaStrokeColor", "uTroikaStrokeOpacity", "uTroikaFillOpacity", "uTroikaCurveRadius", "diffuse"].forEach((a2) => {
      t = co(t, a2);
    }), t;
  }, vertexDefs: "\n      uniform bool uTroikaIsOutline;\n      vec3 troikaFloatToColor(float v) {\n        return mod(floor(vec3(v / 65536.0, v / 256.0, v)), 256.0) / 256.0;\n      }\n    ", vertexTransform: "\n      uTroikaTotalBounds = troikaBatchTexel(4.0);\n      uTroikaClipRect = troikaBatchTexel(5.0);\n      \n      vec4 data = troikaBatchTexel(6.0);\n      diffuse = troikaFloatToColor(data.x);\n      uTroikaFillOpacity = data.y;\n      uTroikaCurveRadius = data.z;\n      \n      data = troikaBatchTexel(7.0);\n      if (uTroikaIsOutline) {\n        if (data == vec4(0.0)) { // degenerate if zero outline\n          position = vec3(0.0);\n        } else {\n          uTroikaPositionOffset = data.xy;\n          uTroikaEdgeOffset = data.z;\n          uTroikaBlurRadius = data.w;\n        }\n      } else {\n        uTroikaStrokeWidth = data.x;\n        uTroikaStrokeColor = troikaFloatToColor(data.y);\n        uTroikaStrokeOpacity = data.z;\n      }\n    " }), f.setMatrixTexture = (t) => {
    f.uniforms[r].value = t, f.uniforms[c].value.set(t.image.width, t.image.height);
  }, f;
}
H(uo, "createBatchedTextMaterial");
function co({ vertexShader: h, fragmentShader: r }, c, f = c) {
  let t = new RegExp("uniform\\s+(bool|float|vec[234]|mat[34])\\s+".concat(c, "\\b")), e, a2 = false;
  r = r.replace(t, (n, o) => (a2 = true, "varying ".concat(e = o, " ").concat(f)));
  let i = false;
  return h = h.replace(t, (n, o) => (i = true, "".concat(a2 ? "varying" : "", " ").concat(e = o, " ").concat(f))), i || (h = "".concat(a2 ? "varying" : "", " ").concat(e, " ").concat(f, ";\n").concat(h)), { vertexShader: h, fragmentShader: r };
}
H(co, "uniformToVarying");
a();
var ua = "abcdefghijklmnopqrstuvwxyz";
function ca(h) {
  return new Promise((r, c) => {
    h ? typeof h == "string" ? zr({ font: h, characters: ua }, () => {
      r(h);
    }) : c(new Error("bad fontUrl ".concat(h))) : import("./roboto-regular-3HSVPIGX-B9JjPLtv.js").then((f) => {
      zr({ font: f.default, characters: ua }, () => {
        r(f.default);
      });
    });
  });
}
H(ca, "preloadFont");
var jr = 0.1, ho = new I();
function ha(h, r, c, f) {
  return r <= 0 || c <= 0 ? Promise.reject("incoorect dimension [".concat(r, ", ").concat(c, "]")) : new Promise((t, e) => {
    h.sync(a2);
    function a2() {
      if (!h.geometry.boundingBox) return;
      let { x: i, y: n } = h.geometry.boundingBox.getSize(ho);
      if (n > c || i > r) {
        if (h.fontSize === jr) return e("cannot find suitable font size for ".concat(h.text, ". MaxSize: [").concat(r, ", ").concat(c, "],  Current size: [").concat(i, ", ").concat(n, "]. min font size").concat(jr, "."));
        h.fontSize = Math.max(jr, h.fontSize - f), h.sync(a2);
      } else return t({ size: [i, n] });
    }
    H(a2, "syncCallback");
  });
}
H(ha, "fitTextToArea");
function vo(h) {
  return new Promise((r) => {
    h.sync(() => {
      r();
    });
  });
}
H(vo, "syncText");
async function Xr() {
  return (await import("./roboto-regular-3HSVPIGX-B9JjPLtv.js")).default;
}
H(Xr, "loadDefaultFont");
function Zo({ useWorker: h = true }) {
  ea({ useWorker: h });
}
H(Zo, "configureTroikaTextBuilder");
var rr = new Vt(), Ye = new I(), po = new I(0, 0, 1);
async function Qo(h, r, c, f) {
  var n, o, s, l, u, d, g, m, y, E, S, U;
  let t = r.feature.properties, e = new Qe();
  r.textMesh = e, e.text = t.text, e.anchorX = "center", e.anchorY = "middle", e.textAlign = (n = t.align) != null ? n : "center", e.color = (o = t.color) != null ? o : "black", e.fontSize = t.fontSize || 20;
  let a2 = (s = c.font) != null ? s : vt$1.font;
  a2 ? e.font = a2 : mt ? e.font = await mt : e.font = await Xr(), e.outlineOpacity = (l = c.outlineOpacity) != null ? l : vt$1.outlineOpacity, e.outlineColor = (u = c.outlineColor) != null ? u : vt$1.outlineColor, e.outlineOffsetY = (d = c.outlineOffsetY) != null ? d : vt$1.outlineOffsetY, e.outlineOffsetX = (g = c.outlineOffsetX) != null ? g : vt$1.outlineOffsetX, e.outlineWidth = (m = c.outlineWidth) != null ? m : vt$1.outlineWidth, e.outlineBlur = (y = c.outlineBlur) != null ? y : vt$1.outlineBlur, e.strokeWidth = (E = c.strokeWidth) != null ? E : vt$1.strokeWidth, e.strokeColor = (S = c.strokeColor) != null ? S : vt$1.strokeColor, e.strokeOpacity = (U = c.strokeOpacity) != null ? U : vt$1.strokeOpacity;
  let i = f(r.feature.geometry.coordinates);
  return e.position.copy(i), e.position.z = t.verticalOffset, e.rotation.z = Zp.degToRad(-t.rotation), e.userData = { entityId: h.toString(), rotationZ: -t.rotation }, { text: e };
}
H(Qo, "createTroikaTextPoint");
async function qo(h, r, c, f) {
  var U, k, w, D, x, A, W, O, Y, b, R, F2, j, P, Z;
  let t = r.feature.properties, { textArea: e } = t;
  if (!e) throw new Error("textArea is required");
  let a2 = (U = c.margin) != null ? U : vt$1.margin, [i, n, o, s] = Array.isArray(a2) ? a2 : [a2, a2, a2, a2], l = new Qe();
  l.text = t.content;
  let u = e.maxHeight - i - o, d = e.maxWidth - s - n;
  l.fontSize = Math.min(u, (k = c.fontSize) != null ? k : vt$1.fontSize), l.color = (w = c.color) != null ? w : vt$1.color, l.maxWidth = (D = c.maxWidth) != null ? D : d, l.anchorX = "center", l.anchorY = "middle", l.textAlign = "center";
  let g = (x = c.font) != null ? x : vt$1.font;
  g ? l.font = g : mt ? l.font = await mt : l.font = await Xr(), l.outlineOpacity = (A = c.outlineOpacity) != null ? A : vt$1.outlineOpacity, l.outlineColor = (W = c.outlineColor) != null ? W : vt$1.outlineColor, l.outlineOffsetY = (O = c.outlineOffsetY) != null ? O : vt$1.outlineOffsetY, l.outlineOffsetX = (Y = c.outlineOffsetX) != null ? Y : vt$1.outlineOffsetX, l.outlineWidth = (b = c.outlineWidth) != null ? b : vt$1.outlineWidth, l.outlineBlur = (R = c.outlineBlur) != null ? R : vt$1.outlineBlur, l.strokeWidth = (F2 = c.strokeWidth) != null ? F2 : vt$1.strokeWidth, l.strokeColor = (j = c.strokeColor) != null ? j : vt$1.strokeColor, l.strokeOpacity = (P = c.strokeOpacity) != null ? P : vt$1.strokeOpacity;
  let m = f(e.position, Ye);
  l.position.copy(m);
  let y = _t(Math.PI / 2 - Zp.degToRad(e.rotation));
  l.rotation.z = y, l.userData = { entityId: h.toString(), rotationZ: y };
  let S;
  try {
    S = (await ha(l, d, u, l.fontSize * 0.2)).size;
  } catch (ne) {
    throw (Z = l.dispose) == null || Z.call(l), new Error("Cannot fit text to area: entityId: ".concat(r.polygonEntityId, " ").concat(ne));
  }
  if (S) return rr.identity(), Ye.set(0, 0, 1), rr.makeRotationAxis(po, y), Ye.set(e.align === "near" ? s + S[0] / 2 : e.maxWidth / 2, 0, 0), Ye.applyMatrix4(rr), l.position.x -= Ye.x, l.position.y -= Ye.y, r.textMesh = l, { text: l };
}
H(qo, "createTroikaTextArea");
var mt;
function $o(h) {
  return mt = ca(h), mt;
}
H($o, "preloadFont");
export {
  Ir as BatchedText,
  Qe as Text,
  Zo as configureTroikaTextBuilder,
  qo as createTroikaTextArea,
  Qo as createTroikaTextPoint,
  mt as fontPreloadLoadPromise,
  $o as preloadFont,
  vo as syncText
};
