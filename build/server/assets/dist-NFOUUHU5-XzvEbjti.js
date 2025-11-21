import { H, F, G, Q, P, O, J, R, N, L, a, m, I, M, V, T as T$1, U } from "./_virtual_netlify-server-DZKFn6bU.js";
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
var cs = L((Me) => {
  a();
  Object.defineProperty(Me, "__esModule", { value: true });
  Me.regexpCode = Me.getEsmExportName = Me.getProperty = Me.safeStringify = Me.stringify = Me.strConcat = Me.addCodeArg = Me.str = Me._ = Me.nil = Me._Code = Me.Name = Me.IDENTIFIER = Me._CodeOrName = void 0;
  var Xu = class Xu {
  };
  H(Xu, "_CodeOrName");
  var ss = Xu;
  Me._CodeOrName = ss;
  Me.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  var Qu = class Qu extends ss {
    constructor(t) {
      if (super(), !Me.IDENTIFIER.test(t)) throw new Error("CodeGen: name must be a valid identifier");
      this.str = t;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return false;
    }
    get names() {
      return { [this.str]: 1 };
    }
  };
  H(Qu, "Name");
  var xo = Qu;
  Me.Name = xo;
  var ep = class ep extends ss {
    constructor(t) {
      super(), this._items = typeof t == "string" ? [t] : t;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1) return false;
      let t = this._items[0];
      return t === "" || t === '""';
    }
    get str() {
      var t;
      return (t = this._str) !== null && t !== void 0 ? t : this._str = this._items.reduce((r, n) => "".concat(r).concat(n), "");
    }
    get names() {
      var t;
      return (t = this._names) !== null && t !== void 0 ? t : this._names = this._items.reduce((r, n) => (n instanceof xo && (r[n.str] = (r[n.str] || 0) + 1), r), {});
    }
  };
  H(ep, "_Code");
  var br = ep;
  Me._Code = br;
  Me.nil = new br("");
  function Eh(e, ...t) {
    let r = [e[0]], n = 0;
    for (; n < t.length; ) Yu(r, t[n]), r.push(e[++n]);
    return new br(r);
  }
  H(Eh, "_");
  Me._ = Eh;
  var Ju = new br("+");
  function Th(e, ...t) {
    let r = [as(e[0])], n = 0;
    for (; n < t.length; ) r.push(Ju), Yu(r, t[n]), r.push(Ju, as(e[++n]));
    return z1(r), new br(r);
  }
  H(Th, "str");
  Me.str = Th;
  function Yu(e, t) {
    t instanceof br ? e.push(...t._items) : t instanceof xo ? e.push(t) : e.push(V1(t));
  }
  H(Yu, "addCodeArg");
  Me.addCodeArg = Yu;
  function z1(e) {
    let t = 1;
    for (; t < e.length - 1; ) {
      if (e[t] === Ju) {
        let r = G1(e[t - 1], e[t + 1]);
        if (r !== void 0) {
          e.splice(t - 1, 3, r);
          continue;
        }
        e[t++] = "+";
      }
      t++;
    }
  }
  H(z1, "optimize");
  function G1(e, t) {
    if (t === '""') return e;
    if (e === '""') return t;
    if (typeof e == "string") return t instanceof xo || e[e.length - 1] !== '"' ? void 0 : typeof t != "string" ? "".concat(e.slice(0, -1)).concat(t, '"') : t[0] === '"' ? e.slice(0, -1) + t.slice(1) : void 0;
    if (typeof t == "string" && t[0] === '"' && !(e instanceof xo)) return '"'.concat(e).concat(t.slice(1));
  }
  H(G1, "mergeExprItems");
  var Fh;
  function B1(e, t) {
    return t.emptyStr() ? e : e.emptyStr() ? t : Th(Fh || (Fh = T$1(["", "", ""])), e, t);
  }
  H(B1, "strConcat");
  Me.strConcat = B1;
  function V1(e) {
    return typeof e == "number" || typeof e == "boolean" || e === null ? e : as(Array.isArray(e) ? e.join(",") : e);
  }
  H(V1, "interpolate");
  function W1(e) {
    return new br(as(e));
  }
  H(W1, "stringify");
  Me.stringify = W1;
  function as(e) {
    return JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  H(as, "safeStringify");
  Me.safeStringify = as;
  var Sh;
  function H1(e) {
    return typeof e == "string" && Me.IDENTIFIER.test(e) ? new br(".".concat(e)) : Eh(Sh || (Sh = T$1(["[", "]"])), e);
  }
  H(H1, "getProperty");
  Me.getProperty = H1;
  function Z1(e) {
    if (typeof e == "string" && Me.IDENTIFIER.test(e)) return new br("".concat(e));
    throw new Error("CodeGen: invalid export name: ".concat(e, ", use explicit $id name mapping"));
  }
  H(Z1, "getEsmExportName");
  Me.getEsmExportName = Z1;
  function J1(e) {
    return new br(e.toString());
  }
  H(J1, "regexpCode");
  Me.regexpCode = J1;
});
var ap = L((ir) => {
  a();
  Object.defineProperty(ir, "__esModule", { value: true });
  ir.ValueScope = ir.ValueScopeName = ir.Scope = ir.varKinds = ir.UsedValueState = void 0;
  var or = cs(), np = class np extends Error {
    constructor(t) {
      super('CodeGen: "code" for '.concat(t, " not defined")), this.value = t.value;
    }
  };
  H(np, "ValueError");
  var tp = np, Va;
  (function(e) {
    e[e.Started = 0] = "Started", e[e.Completed = 1] = "Completed";
  })(Va || (ir.UsedValueState = Va = {}));
  ir.varKinds = { const: new or.Name("const"), let: new or.Name("let"), var: new or.Name("var") };
  var op = class op {
    constructor({ prefixes: t, parent: r } = {}) {
      this._names = {}, this._prefixes = t, this._parent = r;
    }
    toName(t) {
      return t instanceof or.Name ? t : this.name(t);
    }
    name(t) {
      return new or.Name(this._newName(t));
    }
    _newName(t) {
      let r = this._names[t] || this._nameGroup(t);
      return "".concat(t).concat(r.index++);
    }
    _nameGroup(t) {
      var r, n;
      if (!((n = (r = this._parent) === null || r === void 0 ? void 0 : r._prefixes) === null || n === void 0) && n.has(t) || this._prefixes && !this._prefixes.has(t)) throw new Error('CodeGen: prefix "'.concat(t, '" is not allowed in this scope'));
      return this._names[t] = { prefix: t, index: 0 };
    }
  };
  H(op, "Scope");
  var Wa = op;
  ir.Scope = Wa;
  var vh, ip = class ip extends or.Name {
    constructor(t, r) {
      super(r), this.prefix = t;
    }
    setValue(t, { property: r, itemIndex: n }) {
      this.value = t, this.scopePath = (0, or._)(vh || (vh = T$1([".", "[", "]"])), new or.Name(r), n);
    }
  };
  H(ip, "ValueScopeName");
  var Ha = ip;
  ir.ValueScopeName = Ha;
  var Ah, Y1 = (0, or._)(Ah || (Ah = T$1(["\n"], ["\\n"]))), jh, kh, _h, sp = class sp extends Wa {
    constructor(t) {
      super(t), this._values = {}, this._scope = t.scope, this.opts = G(F({}, t), { _n: t.lines ? Y1 : or.nil });
    }
    get() {
      return this._scope;
    }
    name(t) {
      return new Ha(t, this._newName(t));
    }
    value(t, r) {
      var n;
      if (r.ref === void 0) throw new Error("CodeGen: ref must be passed in value");
      let i = this.toName(t), { prefix: s } = i, a4 = (n = r.key) !== null && n !== void 0 ? n : r.ref, f = this._values[s];
      if (f) {
        let l = f.get(a4);
        if (l) return l;
      } else f = this._values[s] = /* @__PURE__ */ new Map();
      f.set(a4, i);
      let p = this._scope[s] || (this._scope[s] = []), d = p.length;
      return p[d] = r.ref, i.setValue(r, { property: s, itemIndex: d }), i;
    }
    getValue(t, r) {
      let n = this._values[t];
      if (n) return n.get(r);
    }
    scopeRefs(t, r = this._values) {
      return this._reduceValues(r, (n) => {
        if (n.scopePath === void 0) throw new Error('CodeGen: name "'.concat(n, '" has no value'));
        return (0, or._)(jh || (jh = T$1(["", "", ""])), t, n.scopePath);
      });
    }
    scopeCode(t = this._values, r, n) {
      return this._reduceValues(t, (i) => {
        if (i.value === void 0) throw new Error('CodeGen: name "'.concat(i, '" has no value'));
        return i.value.code;
      }, r, n);
    }
    _reduceValues(t, r, n = {}, i) {
      let s = or.nil;
      for (let a4 in t) {
        let f = t[a4];
        if (!f) continue;
        let p = n[a4] = n[a4] || /* @__PURE__ */ new Map();
        f.forEach((d) => {
          if (p.has(d)) return;
          p.set(d, Va.Started);
          let l = r(d);
          if (l) {
            let m4 = this.opts.es5 ? ir.varKinds.var : ir.varKinds.const;
            s = (0, or._)(kh || (kh = T$1(["", "", " ", " = ", ";", ""])), s, m4, d, l, this.opts._n);
          } else if (l = i == null ? void 0 : i(d)) s = (0, or._)(_h || (_h = T$1(["", "", "", ""])), s, l, this.opts._n);
          else throw new tp(d);
          p.set(d, Va.Completed);
        });
      }
      return s;
    }
  };
  H(sp, "ValueScope");
  var rp = sp;
  ir.ValueScope = rp;
});
var me = L((ye) => {
  a();
  Object.defineProperty(ye, "__esModule", { value: true });
  ye.or = ye.and = ye.not = ye.CodeGen = ye.operators = ye.varKinds = ye.ValueScopeName = ye.ValueScope = ye.Scope = ye.Name = ye.regexpCode = ye.stringify = ye.getProperty = ye.nil = ye.strConcat = ye.str = ye._ = void 0;
  var we = cs(), Dr = ap(), Yn = cs();
  Object.defineProperty(ye, "_", { enumerable: true, get: H(function() {
    return Yn._;
  }, "get") });
  Object.defineProperty(ye, "str", { enumerable: true, get: H(function() {
    return Yn.str;
  }, "get") });
  Object.defineProperty(ye, "strConcat", { enumerable: true, get: H(function() {
    return Yn.strConcat;
  }, "get") });
  Object.defineProperty(ye, "nil", { enumerable: true, get: H(function() {
    return Yn.nil;
  }, "get") });
  Object.defineProperty(ye, "getProperty", { enumerable: true, get: H(function() {
    return Yn.getProperty;
  }, "get") });
  Object.defineProperty(ye, "stringify", { enumerable: true, get: H(function() {
    return Yn.stringify;
  }, "get") });
  Object.defineProperty(ye, "regexpCode", { enumerable: true, get: H(function() {
    return Yn.regexpCode;
  }, "get") });
  Object.defineProperty(ye, "Name", { enumerable: true, get: H(function() {
    return Yn.Name;
  }, "get") });
  var Xa = ap();
  Object.defineProperty(ye, "Scope", { enumerable: true, get: H(function() {
    return Xa.Scope;
  }, "get") });
  Object.defineProperty(ye, "ValueScope", { enumerable: true, get: H(function() {
    return Xa.ValueScope;
  }, "get") });
  Object.defineProperty(ye, "ValueScopeName", { enumerable: true, get: H(function() {
    return Xa.ValueScopeName;
  }, "get") });
  Object.defineProperty(ye, "varKinds", { enumerable: true, get: H(function() {
    return Xa.varKinds;
  }, "get") });
  ye.operators = { GT: new we._Code(">"), GTE: new we._Code(">="), LT: new we._Code("<"), LTE: new we._Code("<="), EQ: new we._Code("==="), NEQ: new we._Code("!=="), NOT: new we._Code("!"), OR: new we._Code("||"), AND: new we._Code("&&"), ADD: new we._Code("+") };
  var bp = class bp {
    optimizeNodes() {
      return this;
    }
    optimizeNames(t, r) {
      return this;
    }
  };
  H(bp, "Node");
  var Sn = bp, $p = class $p extends Sn {
    constructor(t, r, n) {
      super(), this.varKind = t, this.name = r, this.rhs = n;
    }
    render({ es5: t, _n: r }) {
      let n = t ? Dr.varKinds.var : this.varKind, i = this.rhs === void 0 ? "" : " = ".concat(this.rhs);
      return "".concat(n, " ").concat(this.name).concat(i, ";") + r;
    }
    optimizeNames(t, r) {
      if (t[this.name.str]) return this.rhs && (this.rhs = ei(this.rhs, t, r)), this;
    }
    get names() {
      return this.rhs instanceof we._CodeOrName ? this.rhs.names : {};
    }
  };
  H($p, "Def");
  var cp = $p, wp = class wp extends Sn {
    constructor(t, r, n) {
      super(), this.lhs = t, this.rhs = r, this.sideEffects = n;
    }
    render({ _n: t }) {
      return "".concat(this.lhs, " = ").concat(this.rhs, ";") + t;
    }
    optimizeNames(t, r) {
      if (!(this.lhs instanceof we.Name && !t[this.lhs.str] && !this.sideEffects)) return this.rhs = ei(this.rhs, t, r), this;
    }
    get names() {
      let t = this.lhs instanceof we.Name ? {} : F({}, this.lhs.names);
      return Ya(t, this.rhs);
    }
  };
  H(wp, "Assign");
  var Za = wp, Pp = class Pp extends Za {
    constructor(t, r, n, i) {
      super(t, n, i), this.op = r;
    }
    render({ _n: t }) {
      return "".concat(this.lhs, " ").concat(this.op, "= ").concat(this.rhs, ";") + t;
    }
  };
  H(Pp, "AssignOp");
  var fp = Pp, Op = class Op extends Sn {
    constructor(t) {
      super(), this.label = t, this.names = {};
    }
    render({ _n: t }) {
      return "".concat(this.label, ":") + t;
    }
  };
  H(Op, "Label");
  var up = Op, Fp = class Fp extends Sn {
    constructor(t) {
      super(), this.label = t, this.names = {};
    }
    render({ _n: t }) {
      let r = this.label ? " ".concat(this.label) : "";
      return "break".concat(r, ";") + t;
    }
  };
  H(Fp, "Break");
  var pp = Fp, Sp = class Sp extends Sn {
    constructor(t) {
      super(), this.error = t;
    }
    render({ _n: t }) {
      return "throw ".concat(this.error, ";") + t;
    }
    get names() {
      return this.error.names;
    }
  };
  H(Sp, "Throw");
  var lp = Sp, Ep = class Ep extends Sn {
    constructor(t) {
      super(), this.code = t;
    }
    render({ _n: t }) {
      return "".concat(this.code, ";") + t;
    }
    optimizeNodes() {
      return "".concat(this.code) ? this : void 0;
    }
    optimizeNames(t, r) {
      return this.code = ei(this.code, t, r), this;
    }
    get names() {
      return this.code instanceof we._CodeOrName ? this.code.names : {};
    }
  };
  H(Ep, "AnyCode");
  var dp = Ep, Tp = class Tp extends Sn {
    constructor(t = []) {
      super(), this.nodes = t;
    }
    render(t) {
      return this.nodes.reduce((r, n) => r + n.render(t), "");
    }
    optimizeNodes() {
      let { nodes: t } = this, r = t.length;
      for (; r--; ) {
        let n = t[r].optimizeNodes();
        Array.isArray(n) ? t.splice(r, 1, ...n) : n ? t[r] = n : t.splice(r, 1);
      }
      return t.length > 0 ? this : void 0;
    }
    optimizeNames(t, r) {
      let { nodes: n } = this, i = n.length;
      for (; i--; ) {
        let s = n[i];
        s.optimizeNames(t, r) || (X1(t, s.names), n.splice(i, 1));
      }
      return n.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((t, r) => wo(t, r.names), {});
    }
  };
  H(Tp, "ParentNode");
  var fs = Tp, vp = class vp extends fs {
    render(t) {
      return "{" + t._n + super.render(t) + "}" + t._n;
    }
  };
  H(vp, "BlockNode");
  var En = vp, Ap = class Ap extends fs {
  };
  H(Ap, "Root");
  var mp = Ap, jp = class jp extends En {
  };
  H(jp, "Else");
  var Qo = jp;
  Qo.kind = "else";
  var Xo = class Xo2 extends En {
    constructor(t, r) {
      super(r), this.condition = t;
    }
    render(t) {
      let r = "if(".concat(this.condition, ")") + super.render(t);
      return this.else && (r += "else " + this.else.render(t)), r;
    }
    optimizeNodes() {
      super.optimizeNodes();
      let t = this.condition;
      if (t === true) return this.nodes;
      let r = this.else;
      if (r) {
        let n = r.optimizeNodes();
        r = this.else = Array.isArray(n) ? new Qo(n) : n;
      }
      if (r) return t === false ? r instanceof Xo2 ? r : r.nodes : this.nodes.length ? this : new Xo2(Dh(t), r instanceof Xo2 ? [r] : r.nodes);
      if (!(t === false || !this.nodes.length)) return this;
    }
    optimizeNames(t, r) {
      var n;
      if (this.else = (n = this.else) === null || n === void 0 ? void 0 : n.optimizeNames(t, r), !!(super.optimizeNames(t, r) || this.else)) return this.condition = ei(this.condition, t, r), this;
    }
    get names() {
      let t = super.names;
      return Ya(t, this.condition), this.else && wo(t, this.else.names), t;
    }
  };
  H(Xo, "If");
  var bo = Xo;
  bo.kind = "if";
  var kp = class kp extends En {
  };
  H(kp, "For");
  var $o = kp;
  $o.kind = "for";
  var _p = class _p extends $o {
    constructor(t) {
      super(), this.iteration = t;
    }
    render(t) {
      return "for(".concat(this.iteration, ")") + super.render(t);
    }
    optimizeNames(t, r) {
      if (super.optimizeNames(t, r)) return this.iteration = ei(this.iteration, t, r), this;
    }
    get names() {
      return wo(super.names, this.iteration.names);
    }
  };
  H(_p, "ForLoop");
  var yp = _p, Np = class Np extends $o {
    constructor(t, r, n, i) {
      super(), this.varKind = t, this.name = r, this.from = n, this.to = i;
    }
    render(t) {
      let r = t.es5 ? Dr.varKinds.var : this.varKind, { name: n, from: i, to: s } = this;
      return "for(".concat(r, " ").concat(n, "=").concat(i, "; ").concat(n, "<").concat(s, "; ").concat(n, "++)") + super.render(t);
    }
    get names() {
      let t = Ya(super.names, this.from);
      return Ya(t, this.to);
    }
  };
  H(Np, "ForRange");
  var hp = Np, Rp = class Rp extends $o {
    constructor(t, r, n, i) {
      super(), this.loop = t, this.varKind = r, this.name = n, this.iterable = i;
    }
    render(t) {
      return "for(".concat(this.varKind, " ").concat(this.name, " ").concat(this.loop, " ").concat(this.iterable, ")") + super.render(t);
    }
    optimizeNames(t, r) {
      if (super.optimizeNames(t, r)) return this.iterable = ei(this.iterable, t, r), this;
    }
    get names() {
      return wo(super.names, this.iterable.names);
    }
  };
  H(Rp, "ForIter");
  var Ja = Rp, Cp = class Cp extends En {
    constructor(t, r, n) {
      super(), this.name = t, this.args = r, this.async = n;
    }
    render(t) {
      let r = this.async ? "async " : "";
      return "".concat(r, "function ").concat(this.name, "(").concat(this.args, ")") + super.render(t);
    }
  };
  H(Cp, "Func");
  var us = Cp;
  us.kind = "func";
  var Mp = class Mp extends fs {
    render(t) {
      return "return " + super.render(t);
    }
  };
  H(Mp, "Return");
  var ps = Mp;
  ps.kind = "return";
  var Lp = class Lp extends En {
    render(t) {
      let r = "try" + super.render(t);
      return this.catch && (r += this.catch.render(t)), this.finally && (r += this.finally.render(t)), r;
    }
    optimizeNodes() {
      var t, r;
      return super.optimizeNodes(), (t = this.catch) === null || t === void 0 || t.optimizeNodes(), (r = this.finally) === null || r === void 0 || r.optimizeNodes(), this;
    }
    optimizeNames(t, r) {
      var n, i;
      return super.optimizeNames(t, r), (n = this.catch) === null || n === void 0 || n.optimizeNames(t, r), (i = this.finally) === null || i === void 0 || i.optimizeNames(t, r), this;
    }
    get names() {
      let t = super.names;
      return this.catch && wo(t, this.catch.names), this.finally && wo(t, this.finally.names), t;
    }
  };
  H(Lp, "Try");
  var gp = Lp, Up = class Up extends En {
    constructor(t) {
      super(), this.error = t;
    }
    render(t) {
      return "catch(".concat(this.error, ")") + super.render(t);
    }
  };
  H(Up, "Catch");
  var ls = Up;
  ls.kind = "catch";
  var Dp = class Dp extends En {
    render(t) {
      return "finally" + super.render(t);
    }
  };
  H(Dp, "Finally");
  var ds = Dp;
  ds.kind = "finally";
  var Nh, Rh, Ch, qp = class qp {
    constructor(t, r = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = G(F({}, r), { _n: r.lines ? "\n" : "" }), this._extScope = t, this._scope = new Dr.Scope({ parent: t }), this._nodes = [new mp()];
    }
    toString() {
      return this._root.render(this.opts);
    }
    name(t) {
      return this._scope.name(t);
    }
    scopeName(t) {
      return this._extScope.name(t);
    }
    scopeValue(t, r) {
      let n = this._extScope.value(t, r);
      return (this._values[n.prefix] || (this._values[n.prefix] = /* @__PURE__ */ new Set())).add(n), n;
    }
    getScopeValue(t, r) {
      return this._extScope.getValue(t, r);
    }
    scopeRefs(t) {
      return this._extScope.scopeRefs(t, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(t, r, n, i) {
      let s = this._scope.toName(r);
      return n !== void 0 && i && (this._constants[s.str] = n), this._leafNode(new cp(t, s, n)), s;
    }
    const(t, r, n) {
      return this._def(Dr.varKinds.const, t, r, n);
    }
    let(t, r, n) {
      return this._def(Dr.varKinds.let, t, r, n);
    }
    var(t, r, n) {
      return this._def(Dr.varKinds.var, t, r, n);
    }
    assign(t, r, n) {
      return this._leafNode(new Za(t, r, n));
    }
    add(t, r) {
      return this._leafNode(new fp(t, ye.operators.ADD, r));
    }
    code(t) {
      return typeof t == "function" ? t() : t !== we.nil && this._leafNode(new dp(t)), this;
    }
    object(...t) {
      let r = ["{"];
      for (let [n, i] of t) r.length > 1 && r.push(","), r.push(n), (n !== i || this.opts.es5) && (r.push(":"), (0, we.addCodeArg)(r, i));
      return r.push("}"), new we._Code(r);
    }
    if(t, r, n) {
      if (this._blockNode(new bo(t)), r && n) this.code(r).else().code(n).endIf();
      else if (r) this.code(r).endIf();
      else if (n) throw new Error('CodeGen: "else" body without "then" body');
      return this;
    }
    elseIf(t) {
      return this._elseNode(new bo(t));
    }
    else() {
      return this._elseNode(new Qo());
    }
    endIf() {
      return this._endBlockNode(bo, Qo);
    }
    _for(t, r) {
      return this._blockNode(t), r && this.code(r).endFor(), this;
    }
    for(t, r) {
      return this._for(new yp(t), r);
    }
    forRange(t, r, n, i, s = this.opts.es5 ? Dr.varKinds.var : Dr.varKinds.let) {
      let a4 = this._scope.toName(t);
      return this._for(new hp(s, a4, r, n), () => i(a4));
    }
    forOf(t, r, n, i = Dr.varKinds.const) {
      let s = this._scope.toName(t);
      if (this.opts.es5) {
        let a4 = r instanceof we.Name ? r : this.var("_arr", r);
        return this.forRange("_i", 0, (0, we._)(Nh || (Nh = T$1(["", ".length"])), a4), (f) => {
          this.var(s, (0, we._)(Rh || (Rh = T$1(["", "[", "]"])), a4, f)), n(s);
        });
      }
      return this._for(new Ja("of", i, s, r), () => n(s));
    }
    forIn(t, r, n, i = this.opts.es5 ? Dr.varKinds.var : Dr.varKinds.const) {
      if (this.opts.ownProperties) return this.forOf(t, (0, we._)(Ch || (Ch = T$1(["Object.keys(", ")"])), r), n);
      let s = this._scope.toName(t);
      return this._for(new Ja("in", i, s, r), () => n(s));
    }
    endFor() {
      return this._endBlockNode($o);
    }
    label(t) {
      return this._leafNode(new up(t));
    }
    break(t) {
      return this._leafNode(new pp(t));
    }
    return(t) {
      let r = new ps();
      if (this._blockNode(r), this.code(t), r.nodes.length !== 1) throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(ps);
    }
    try(t, r, n) {
      if (!r && !n) throw new Error('CodeGen: "try" without "catch" and "finally"');
      let i = new gp();
      if (this._blockNode(i), this.code(t), r) {
        let s = this.name("e");
        this._currNode = i.catch = new ls(s), r(s);
      }
      return n && (this._currNode = i.finally = new ds(), this.code(n)), this._endBlockNode(ls, ds);
    }
    throw(t) {
      return this._leafNode(new lp(t));
    }
    block(t, r) {
      return this._blockStarts.push(this._nodes.length), t && this.code(t).endBlock(r), this;
    }
    endBlock(t) {
      let r = this._blockStarts.pop();
      if (r === void 0) throw new Error("CodeGen: not in self-balancing block");
      let n = this._nodes.length - r;
      if (n < 0 || t !== void 0 && n !== t) throw new Error("CodeGen: wrong number of nodes: ".concat(n, " vs ").concat(t, " expected"));
      return this._nodes.length = r, this;
    }
    func(t, r = we.nil, n, i) {
      return this._blockNode(new us(t, r, n)), i && this.code(i).endFunc(), this;
    }
    endFunc() {
      return this._endBlockNode(us);
    }
    optimize(t = 1) {
      for (; t-- > 0; ) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(t) {
      return this._currNode.nodes.push(t), this;
    }
    _blockNode(t) {
      this._currNode.nodes.push(t), this._nodes.push(t);
    }
    _endBlockNode(t, r) {
      let n = this._currNode;
      if (n instanceof t || r && n instanceof r) return this._nodes.pop(), this;
      throw new Error('CodeGen: not in block "'.concat(r ? "".concat(t.kind, "/").concat(r.kind) : t.kind, '"'));
    }
    _elseNode(t) {
      let r = this._currNode;
      if (!(r instanceof bo)) throw new Error('CodeGen: "else" without "if"');
      return this._currNode = r.else = t, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      let t = this._nodes;
      return t[t.length - 1];
    }
    set _currNode(t) {
      let r = this._nodes;
      r[r.length - 1] = t;
    }
  };
  H(qp, "CodeGen");
  var Ip = qp;
  ye.CodeGen = Ip;
  function wo(e, t) {
    for (let r in t) e[r] = (e[r] || 0) + (t[r] || 0);
    return e;
  }
  H(wo, "addNames");
  function Ya(e, t) {
    return t instanceof we._CodeOrName ? wo(e, t.names) : e;
  }
  H(Ya, "addExprNames");
  function ei(e, t, r) {
    if (e instanceof we.Name) return n(e);
    if (!i(e)) return e;
    return new we._Code(e._items.reduce((s, a4) => (a4 instanceof we.Name && (a4 = n(a4)), a4 instanceof we._Code ? s.push(...a4._items) : s.push(a4), s), []));
    function n(s) {
      let a4 = r[s.str];
      return a4 === void 0 || t[s.str] !== 1 ? s : (delete t[s.str], a4);
    }
    function i(s) {
      return s instanceof we._Code && s._items.some((a4) => a4 instanceof we.Name && t[a4.str] === 1 && r[a4.str] !== void 0);
    }
  }
  H(ei, "optimizeExpr");
  function X1(e, t) {
    for (let r in t) e[r] = (e[r] || 0) - (t[r] || 0);
  }
  H(X1, "subtractNames");
  var Mh;
  function Dh(e) {
    return typeof e == "boolean" || typeof e == "number" || e === null ? !e : (0, we._)(Mh || (Mh = T$1(["!", ""])), xp(e));
  }
  H(Dh, "not");
  ye.not = Dh;
  var Q1 = qh(ye.operators.AND);
  function ev(...e) {
    return e.reduce(Q1);
  }
  H(ev, "and");
  ye.and = ev;
  var tv = qh(ye.operators.OR);
  function rv(...e) {
    return e.reduce(tv);
  }
  H(rv, "or");
  ye.or = rv;
  var Lh;
  function qh(e) {
    return (t, r) => t === we.nil ? r : r === we.nil ? t : (0, we._)(Lh || (Lh = T$1(["", " ", " ", ""])), xp(t), e, xp(r));
  }
  H(qh, "mappend");
  var Uh;
  function xp(e) {
    return e instanceof we.Name ? e : (0, we._)(Uh || (Uh = T$1(["(", ")"])), e);
  }
  H(xp, "par");
});
var Le = L((ge) => {
  a();
  Object.defineProperty(ge, "__esModule", { value: true });
  ge.checkStrictMode = ge.getErrorPath = ge.Type = ge.useFunc = ge.setEvaluated = ge.evaluatedPropsToName = ge.mergeEvaluated = ge.eachItem = ge.unescapeJsonPointer = ge.escapeJsonPointer = ge.escapeFragment = ge.unescapeFragment = ge.schemaRefOrVal = ge.schemaHasRulesButRef = ge.schemaHasRules = ge.checkUnknownRules = ge.alwaysValidSchema = ge.toHash = void 0;
  var Xe = me(), nv = cs();
  function ov(e) {
    let t = {};
    for (let r of e) t[r] = true;
    return t;
  }
  H(ov, "toHash");
  ge.toHash = ov;
  function iv(e, t) {
    return typeof t == "boolean" ? t : Object.keys(t).length === 0 ? true : (cg(e, t), !fg(t, e.self.RULES.all));
  }
  H(iv, "alwaysValidSchema");
  ge.alwaysValidSchema = iv;
  function cg(e, t = e.schema) {
    let { opts: r, self: n } = e;
    if (!r.strictSchema || typeof t == "boolean") return;
    let i = n.RULES.keywords;
    for (let s in t) i[s] || lg(e, 'unknown keyword: "'.concat(s, '"'));
  }
  H(cg, "checkUnknownRules");
  ge.checkUnknownRules = cg;
  function fg(e, t) {
    if (typeof e == "boolean") return !e;
    for (let r in e) if (t[r]) return true;
    return false;
  }
  H(fg, "schemaHasRules");
  ge.schemaHasRules = fg;
  function sv(e, t) {
    if (typeof e == "boolean") return !e;
    for (let r in e) if (r !== "$ref" && t.all[r]) return true;
    return false;
  }
  H(sv, "schemaHasRulesButRef");
  ge.schemaHasRulesButRef = sv;
  var Gh, Bh;
  function av({ topSchemaRef: e, schemaPath: t }, r, n, i) {
    if (!i) {
      if (typeof r == "number" || typeof r == "boolean") return r;
      if (typeof r == "string") return (0, Xe._)(Gh || (Gh = T$1(["", ""])), r);
    }
    return (0, Xe._)(Bh || (Bh = T$1(["", "", "", ""])), e, t, (0, Xe.getProperty)(n));
  }
  H(av, "schemaRefOrVal");
  ge.schemaRefOrVal = av;
  function cv(e) {
    return ug(decodeURIComponent(e));
  }
  H(cv, "unescapeFragment");
  ge.unescapeFragment = cv;
  function fv(e) {
    return encodeURIComponent(zp(e));
  }
  H(fv, "escapeFragment");
  ge.escapeFragment = fv;
  function zp(e) {
    return typeof e == "number" ? "".concat(e) : e.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  H(zp, "escapeJsonPointer");
  ge.escapeJsonPointer = zp;
  function ug(e) {
    return e.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  H(ug, "unescapeJsonPointer");
  ge.unescapeJsonPointer = ug;
  function uv(e, t) {
    if (Array.isArray(e)) for (let r of e) t(r);
    else t(e);
  }
  H(uv, "eachItem");
  ge.eachItem = uv;
  function Kh({ mergeNames: e, mergeToName: t, mergeValues: r, resultToName: n }) {
    return (i, s, a4, f) => {
      let p = a4 === void 0 ? s : a4 instanceof Xe.Name ? (s instanceof Xe.Name ? e(i, s, a4) : t(i, s, a4), a4) : s instanceof Xe.Name ? (t(i, a4, s), s) : r(s, a4);
      return f === Xe.Name && !(p instanceof Xe.Name) ? n(i, p) : p;
    };
  }
  H(Kh, "makeMergeEvaluated");
  var Vh, Wh, Hh, Zh, Jh, Yh, Xh, Qh, eg, tg;
  ge.mergeEvaluated = { props: Kh({ mergeNames: H((e, t, r) => e.if((0, Xe._)(Vh || (Vh = T$1(["", " !== true && ", " !== undefined"])), r, t), () => {
    e.if((0, Xe._)(Wh || (Wh = T$1(["", " === true"])), t), () => e.assign(r, true), () => e.assign(r, (0, Xe._)(Hh || (Hh = T$1(["", " || {}"])), r)).code((0, Xe._)(Zh || (Zh = T$1(["Object.assign(", ", ", ")"])), r, t)));
  }), "mergeNames"), mergeToName: H((e, t, r) => e.if((0, Xe._)(Jh || (Jh = T$1(["", " !== true"])), r), () => {
    t === true ? e.assign(r, true) : (e.assign(r, (0, Xe._)(Yh || (Yh = T$1(["", " || {}"])), r)), Gp(e, r, t));
  }), "mergeToName"), mergeValues: H((e, t) => e === true ? true : F(F({}, e), t), "mergeValues"), resultToName: pg }), items: Kh({ mergeNames: H((e, t, r) => e.if((0, Xe._)(Xh || (Xh = T$1(["", " !== true && ", " !== undefined"])), r, t), () => e.assign(r, (0, Xe._)(Qh || (Qh = T$1(["", " === true ? true : ", " > ", " ? ", " : ", ""])), t, r, t, r, t))), "mergeNames"), mergeToName: H((e, t, r) => e.if((0, Xe._)(eg || (eg = T$1(["", " !== true"])), r), () => e.assign(r, t === true ? true : (0, Xe._)(tg || (tg = T$1(["", " > ", " ? ", " : ", ""])), r, t, r, t))), "mergeToName"), mergeValues: H((e, t) => e === true ? true : Math.max(e, t), "mergeValues"), resultToName: H((e, t) => e.var("items", t), "resultToName") }) };
  var rg;
  function pg(e, t) {
    if (t === true) return e.var("props", true);
    let r = e.var("props", (0, Xe._)(rg || (rg = T$1(["{}"]))));
    return t !== void 0 && Gp(e, r, t), r;
  }
  H(pg, "evaluatedPropsToName");
  ge.evaluatedPropsToName = pg;
  var ng;
  function Gp(e, t, r) {
    Object.keys(r).forEach((n) => e.assign((0, Xe._)(ng || (ng = T$1(["", "", ""])), t, (0, Xe.getProperty)(n)), true));
  }
  H(Gp, "setEvaluated");
  ge.setEvaluated = Gp;
  var zh = {};
  function pv(e, t) {
    return e.scopeValue("func", { ref: t, code: zh[t.code] || (zh[t.code] = new nv._Code(t.code)) });
  }
  H(pv, "useFunc");
  ge.useFunc = pv;
  var Kp;
  (function(e) {
    e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
  })(Kp || (ge.Type = Kp = {}));
  var og, ig, sg, ag;
  function lv(e, t, r) {
    if (e instanceof Xe.Name) {
      let n = t === Kp.Num;
      return r ? n ? (0, Xe._)(og || (og = T$1(['"[" + ', ' + "]"'])), e) : (0, Xe._)(ig || (ig = T$1([`"['" + `, ` + "']"`])), e) : n ? (0, Xe._)(sg || (sg = T$1(['"/" + ', ""])), e) : (0, Xe._)(ag || (ag = T$1(['"/" + ', '.replace(/~/g, "~0").replace(/\\//g, "~1")'], ['"/" + ', '.replace(/~/g, "~0").replace(/\\\\//g, "~1")'])), e);
    }
    return r ? (0, Xe.getProperty)(e).toString() : "/" + zp(e);
  }
  H(lv, "getErrorPath");
  ge.getErrorPath = lv;
  function lg(e, t, r = e.opts.strictSchema) {
    if (r) {
      if (t = "strict mode: ".concat(t), r === true) throw new Error(t);
      e.self.logger.warn(t);
    }
  }
  H(lg, "checkStrictMode");
  ge.checkStrictMode = lg;
});
var Tn = L((Bp) => {
  a();
  Object.defineProperty(Bp, "__esModule", { value: true });
  var Dt = me(), dv = { data: new Dt.Name("data"), valCxt: new Dt.Name("valCxt"), instancePath: new Dt.Name("instancePath"), parentData: new Dt.Name("parentData"), parentDataProperty: new Dt.Name("parentDataProperty"), rootData: new Dt.Name("rootData"), dynamicAnchors: new Dt.Name("dynamicAnchors"), vErrors: new Dt.Name("vErrors"), errors: new Dt.Name("errors"), this: new Dt.Name("this"), self: new Dt.Name("self"), scope: new Dt.Name("scope"), json: new Dt.Name("json"), jsonPos: new Dt.Name("jsonPos"), jsonLen: new Dt.Name("jsonLen"), jsonPart: new Dt.Name("jsonPart") };
  Bp.default = dv;
});
var ms = L((qt) => {
  a();
  Object.defineProperty(qt, "__esModule", { value: true });
  qt.extendErrors = qt.resetErrorsCount = qt.reportExtraError = qt.reportError = qt.keyword$DataError = qt.keywordError = void 0;
  var ve = me(), Qa = Le(), Yt = Tn(), dg;
  qt.keywordError = { message: H(({ keyword: e }) => (0, ve.str)(dg || (dg = T$1(['must pass "', '" keyword validation'])), e), "message") };
  var mg, yg;
  qt.keyword$DataError = { message: H(({ keyword: e, schemaType: t }) => t ? (0, ve.str)(mg || (mg = T$1(['"', '" keyword must be ', " ($data)"])), e, t) : (0, ve.str)(yg || (yg = T$1(['"', '" keyword is invalid ($data)'])), e), "message") };
  var hg;
  function mv(e, t = qt.keywordError, r, n) {
    let { it: i } = e, { gen: s, compositeRule: a4, allErrors: f } = i, p = Dg(e, t, r);
    (n != null ? n : a4 || f) ? Lg(s, p) : Ug(i, (0, ve._)(hg || (hg = T$1(["[", "]"])), p));
  }
  H(mv, "reportError");
  qt.reportError = mv;
  function yv(e, t = qt.keywordError, r) {
    let { it: n } = e, { gen: i, compositeRule: s, allErrors: a4 } = n, f = Dg(e, t, r);
    Lg(i, f), s || a4 || Ug(n, Yt.default.vErrors);
  }
  H(yv, "reportExtraError");
  qt.reportExtraError = yv;
  var gg, Ig;
  function hv(e, t) {
    e.assign(Yt.default.errors, t), e.if((0, ve._)(gg || (gg = T$1(["", " !== null"])), Yt.default.vErrors), () => e.if(t, () => e.assign((0, ve._)(Ig || (Ig = T$1(["", ".length"])), Yt.default.vErrors), t), () => e.assign(Yt.default.vErrors, null)));
  }
  H(hv, "resetErrorsCount");
  qt.resetErrorsCount = hv;
  var xg, bg, $g, wg, Pg, Og, Fg;
  function gv({ gen: e, keyword: t, schemaValue: r, data: n, errsCount: i, it: s }) {
    if (i === void 0) throw new Error("ajv implementation error");
    let a4 = e.name("err");
    e.forRange("i", i, Yt.default.errors, (f) => {
      e.const(a4, (0, ve._)(xg || (xg = T$1(["", "[", "]"])), Yt.default.vErrors, f)), e.if((0, ve._)(bg || (bg = T$1(["", ".instancePath === undefined"])), a4), () => e.assign((0, ve._)($g || ($g = T$1(["", ".instancePath"])), a4), (0, ve.strConcat)(Yt.default.instancePath, s.errorPath))), e.assign((0, ve._)(wg || (wg = T$1(["", ".schemaPath"])), a4), (0, ve.str)(Pg || (Pg = T$1(["", "/", ""])), s.errSchemaPath, t)), s.opts.verbose && (e.assign((0, ve._)(Og || (Og = T$1(["", ".schema"])), a4), r), e.assign((0, ve._)(Fg || (Fg = T$1(["", ".data"])), a4), n));
    });
  }
  H(gv, "extendErrors");
  qt.extendErrors = gv;
  var Sg, Eg, Tg, vg;
  function Lg(e, t) {
    let r = e.const("err", t);
    e.if((0, ve._)(Sg || (Sg = T$1(["", " === null"])), Yt.default.vErrors), () => e.assign(Yt.default.vErrors, (0, ve._)(Eg || (Eg = T$1(["[", "]"])), r)), (0, ve._)(Tg || (Tg = T$1(["", ".push(", ")"])), Yt.default.vErrors, r)), e.code((0, ve._)(vg || (vg = T$1(["", "++"])), Yt.default.errors));
  }
  H(Lg, "addError");
  var Ag, jg;
  function Ug(e, t) {
    let { gen: r, validateName: n, schemaEnv: i } = e;
    i.$async ? r.throw((0, ve._)(Ag || (Ag = T$1(["new ", "(", ")"])), e.ValidationError, t)) : (r.assign((0, ve._)(jg || (jg = T$1(["", ".errors"])), n), t), r.return(false));
  }
  H(Ug, "returnErrors");
  var Po = { keyword: new ve.Name("keyword"), schemaPath: new ve.Name("schemaPath"), params: new ve.Name("params"), propertyName: new ve.Name("propertyName"), message: new ve.Name("message"), schema: new ve.Name("schema"), parentSchema: new ve.Name("parentSchema") }, kg;
  function Dg(e, t, r) {
    let { createErrors: n } = e.it;
    return n === false ? (0, ve._)(kg || (kg = T$1(["{}"]))) : Iv(e, t, r);
  }
  H(Dg, "errorObjectCode");
  function Iv(e, t, r = {}) {
    let { gen: n, it: i } = e, s = [xv(i, r), bv(e, r)];
    return $v(e, t, s), n.object(...s);
  }
  H(Iv, "errorObject");
  var _g;
  function xv({ errorPath: e }, { instancePath: t }) {
    let r = t ? (0, ve.str)(_g || (_g = T$1(["", "", ""])), e, (0, Qa.getErrorPath)(t, Qa.Type.Str)) : e;
    return [Yt.default.instancePath, (0, ve.strConcat)(Yt.default.instancePath, r)];
  }
  H(xv, "errorInstancePath");
  var Ng, Rg;
  function bv({ keyword: e, it: { errSchemaPath: t } }, { schemaPath: r, parentSchema: n }) {
    let i = n ? t : (0, ve.str)(Ng || (Ng = T$1(["", "/", ""])), t, e);
    return r && (i = (0, ve.str)(Rg || (Rg = T$1(["", "", ""])), i, (0, Qa.getErrorPath)(r, Qa.Type.Str))), [Po.schemaPath, i];
  }
  H(bv, "errorSchemaPath");
  var Cg, Mg;
  function $v(e, { params: t, message: r }, n) {
    let { keyword: i, data: s, schemaValue: a4, it: f } = e, { opts: p, propertyName: d, topSchemaRef: l, schemaPath: m4 } = f;
    n.push([Po.keyword, i], [Po.params, typeof t == "function" ? t(e) : t || (0, ve._)(Cg || (Cg = T$1(["{}"])))]), p.messages && n.push([Po.message, typeof r == "function" ? r(e) : r]), p.verbose && n.push([Po.schema, a4], [Po.parentSchema, (0, ve._)(Mg || (Mg = T$1(["", "", ""])), l, m4)], [Yt.default.data, s]), d && n.push([Po.propertyName, d]);
  }
  H($v, "extraErrorProps");
});
var zg = L((ti) => {
  a();
  Object.defineProperty(ti, "__esModule", { value: true });
  ti.boolOrEmptySchema = ti.topBoolOrEmptySchema = void 0;
  var wv = ms(), Pv = me(), Ov = Tn(), Fv = { message: "boolean schema is false" }, qg;
  function Sv(e) {
    let { gen: t, schema: r, validateName: n } = e;
    r === false ? Kg(e, false) : typeof r == "object" && r.$async === true ? t.return(Ov.default.data) : (t.assign((0, Pv._)(qg || (qg = T$1(["", ".errors"])), n), null), t.return(true));
  }
  H(Sv, "topBoolOrEmptySchema");
  ti.topBoolOrEmptySchema = Sv;
  function Ev(e, t) {
    let { gen: r, schema: n } = e;
    n === false ? (r.var(t, false), Kg(e)) : r.var(t, true);
  }
  H(Ev, "boolOrEmptySchema");
  ti.boolOrEmptySchema = Ev;
  function Kg(e, t) {
    let { gen: r, data: n } = e, i = { gen: r, keyword: "false schema", data: n, schema: false, schemaCode: false, schemaValue: false, params: {}, it: e };
    (0, wv.reportError)(i, Fv, void 0, t);
  }
  H(Kg, "falseSchemaError");
});
var Vp = L((ri) => {
  a();
  Object.defineProperty(ri, "__esModule", { value: true });
  ri.getRules = ri.isJSONType = void 0;
  var Tv = ["string", "number", "integer", "boolean", "null", "object", "array"], vv = new Set(Tv);
  function Av(e) {
    return typeof e == "string" && vv.has(e);
  }
  H(Av, "isJSONType");
  ri.isJSONType = Av;
  function jv() {
    let e = { number: { type: "number", rules: [] }, string: { type: "string", rules: [] }, array: { type: "array", rules: [] }, object: { type: "object", rules: [] } };
    return { types: G(F({}, e), { integer: true, boolean: true, null: true }), rules: [{ rules: [] }, e.number, e.string, e.array, e.object], post: { rules: [] }, all: {}, keywords: {} };
  }
  H(jv, "getRules");
  ri.getRules = jv;
});
var Wp = L((Xn) => {
  a();
  Object.defineProperty(Xn, "__esModule", { value: true });
  Xn.shouldUseRule = Xn.shouldUseGroup = Xn.schemaHasRulesForType = void 0;
  function kv({ schema: e, self: t }, r) {
    let n = t.RULES.types[r];
    return n && n !== true && Gg(e, n);
  }
  H(kv, "schemaHasRulesForType");
  Xn.schemaHasRulesForType = kv;
  function Gg(e, t) {
    return t.rules.some((r) => Bg(e, r));
  }
  H(Gg, "shouldUseGroup");
  Xn.shouldUseGroup = Gg;
  function Bg(e, t) {
    var r;
    return e[t.keyword] !== void 0 || ((r = t.definition.implements) === null || r === void 0 ? void 0 : r.some((n) => e[n] !== void 0));
  }
  H(Bg, "shouldUseRule");
  Xn.shouldUseRule = Bg;
});
var ys = L((Kt) => {
  a();
  Object.defineProperty(Kt, "__esModule", { value: true });
  Kt.reportTypeError = Kt.checkDataTypes = Kt.checkDataType = Kt.coerceAndCheckDataType = Kt.getJSONTypes = Kt.getSchemaTypes = Kt.DataType = void 0;
  var _v = Vp(), Nv = Wp(), Rv = ms(), de = me(), FI = Le(), ni;
  (function(e) {
    e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
  })(ni || (Kt.DataType = ni = {}));
  function Cv(e) {
    let t = SI(e.type);
    if (t.includes("null")) {
      if (e.nullable === false) throw new Error("type: null contradicts nullable: false");
    } else {
      if (!t.length && e.nullable !== void 0) throw new Error('"nullable" cannot be used without "type"');
      e.nullable === true && t.push("null");
    }
    return t;
  }
  H(Cv, "getSchemaTypes");
  Kt.getSchemaTypes = Cv;
  function SI(e) {
    let t = Array.isArray(e) ? e : e ? [e] : [];
    if (t.every(_v.isJSONType)) return t;
    throw new Error("type must be JSONType or JSONType[]: " + t.join(","));
  }
  H(SI, "getJSONTypes");
  Kt.getJSONTypes = SI;
  function Mv(e, t) {
    let { gen: r, data: n, opts: i } = e, s = Lv(t, i.coerceTypes), a4 = t.length > 0 && !(s.length === 0 && t.length === 1 && (0, Nv.schemaHasRulesForType)(e, t[0]));
    if (a4) {
      let f = Zp(t, n, i.strictNumbers, ni.Wrong);
      r.if(f, () => {
        s.length ? Uv(e, t, s) : Jp(e);
      });
    }
    return a4;
  }
  H(Mv, "coerceAndCheckDataType");
  Kt.coerceAndCheckDataType = Mv;
  var EI = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function Lv(e, t) {
    return t ? e.filter((r) => EI.has(r) || t === "array" && r === "array") : [];
  }
  H(Lv, "coerceToTypes");
  var Vg, Wg, Hg, Zg, Jg, Yg, Xg, Qg, eI, tI, rI, nI, oI, iI, sI, aI, cI, fI, uI, pI;
  function Uv(e, t, r) {
    let { gen: n, data: i, opts: s } = e, a4 = n.let("dataType", (0, de._)(Vg || (Vg = T$1(["typeof ", ""])), i)), f = n.let("coerced", (0, de._)(Wg || (Wg = T$1(["undefined"]))));
    s.coerceTypes === "array" && n.if((0, de._)(Hg || (Hg = T$1(["", " == 'object' && Array.isArray(", ") && ", ".length == 1"])), a4, i, i), () => n.assign(i, (0, de._)(Zg || (Zg = T$1(["", "[0]"])), i)).assign(a4, (0, de._)(Jg || (Jg = T$1(["typeof ", ""])), i)).if(Zp(t, i, s.strictNumbers), () => n.assign(f, i))), n.if((0, de._)(Yg || (Yg = T$1(["", " !== undefined"])), f));
    for (let d of r) (EI.has(d) || d === "array" && s.coerceTypes === "array") && p(d);
    n.else(), Jp(e), n.endIf(), n.if((0, de._)(Xg || (Xg = T$1(["", " !== undefined"])), f), () => {
      n.assign(i, f), Dv(e, f);
    });
    function p(d) {
      switch (d) {
        case "string":
          n.elseIf((0, de._)(Qg || (Qg = T$1(["", ' == "number" || ', ' == "boolean"'])), a4, a4)).assign(f, (0, de._)(eI || (eI = T$1(['"" + ', ""])), i)).elseIf((0, de._)(tI || (tI = T$1(["", " === null"])), i)).assign(f, (0, de._)(rI || (rI = T$1(['""']))));
          return;
        case "number":
          n.elseIf((0, de._)(nI || (nI = T$1(["", ' == "boolean" || ', " === null\n              || (", ' == "string" && ', " && ", " == +", ")"])), a4, i, a4, i, i, i)).assign(f, (0, de._)(oI || (oI = T$1(["+", ""])), i));
          return;
        case "integer":
          n.elseIf((0, de._)(iI || (iI = T$1(["", ' === "boolean" || ', " === null\n              || (", ' === "string" && ', " && ", " == +", " && !(", " % 1))"])), a4, i, a4, i, i, i, i)).assign(f, (0, de._)(sI || (sI = T$1(["+", ""])), i));
          return;
        case "boolean":
          n.elseIf((0, de._)(aI || (aI = T$1(["", ' === "false" || ', " === 0 || ", " === null"])), i, i, i)).assign(f, false).elseIf((0, de._)(cI || (cI = T$1(["", ' === "true" || ', " === 1"])), i, i)).assign(f, true);
          return;
        case "null":
          n.elseIf((0, de._)(fI || (fI = T$1(["", ' === "" || ', " === 0 || ", " === false"])), i, i, i)), n.assign(f, null);
          return;
        case "array":
          n.elseIf((0, de._)(uI || (uI = T$1(["", ' === "string" || ', ' === "number"\n              || ', ' === "boolean" || ', " === null"])), a4, a4, a4, i)).assign(f, (0, de._)(pI || (pI = T$1(["[", "]"])), i));
      }
    }
    H(p, "coerceSpecificType");
  }
  H(Uv, "coerceData");
  var lI, dI;
  function Dv({ gen: e, parentData: t, parentDataProperty: r }, n) {
    e.if((0, de._)(lI || (lI = T$1(["", " !== undefined"])), t), () => e.assign((0, de._)(dI || (dI = T$1(["", "[", "]"])), t, r), n));
  }
  H(Dv, "assignParentData");
  var mI, yI, hI, gI, II, xI, bI;
  function Hp(e, t, r, n = ni.Correct) {
    let i = n === ni.Correct ? de.operators.EQ : de.operators.NEQ, s;
    switch (e) {
      case "null":
        return (0, de._)(mI || (mI = T$1(["", " ", " null"])), t, i);
      case "array":
        s = (0, de._)(yI || (yI = T$1(["Array.isArray(", ")"])), t);
        break;
      case "object":
        s = (0, de._)(hI || (hI = T$1(["", " && typeof ", ' == "object" && !Array.isArray(', ")"])), t, t, t);
        break;
      case "integer":
        s = a4((0, de._)(gI || (gI = T$1(["!(", " % 1) && !isNaN(", ")"])), t, t));
        break;
      case "number":
        s = a4();
        break;
      default:
        return (0, de._)(II || (II = T$1(["typeof ", " ", " ", ""])), t, i, e);
    }
    return n === ni.Correct ? s : (0, de.not)(s);
    function a4(f = de.nil) {
      return (0, de.and)((0, de._)(xI || (xI = T$1(["typeof ", ' == "number"'])), t), f, r ? (0, de._)(bI || (bI = T$1(["isFinite(", ")"])), t) : de.nil);
    }
  }
  H(Hp, "checkDataType");
  Kt.checkDataType = Hp;
  var $I, wI;
  function Zp(e, t, r, n) {
    if (e.length === 1) return Hp(e[0], t, r, n);
    let i, s = (0, FI.toHash)(e);
    if (s.array && s.object) {
      let a4 = (0, de._)($I || ($I = T$1(["typeof ", ' != "object"'])), t);
      i = s.null ? a4 : (0, de._)(wI || (wI = T$1(["!", " || ", ""])), t, a4), delete s.null, delete s.array, delete s.object;
    } else i = de.nil;
    s.number && delete s.integer;
    for (let a4 in s) i = (0, de.and)(i, Hp(a4, t, r, n));
    return i;
  }
  H(Zp, "checkDataTypes");
  Kt.checkDataTypes = Zp;
  var PI, OI, qv = { message: H(({ schema: e }) => "must be ".concat(e), "message"), params: H(({ schema: e, schemaValue: t }) => typeof e == "string" ? (0, de._)(PI || (PI = T$1(["{type: ", "}"])), e) : (0, de._)(OI || (OI = T$1(["{type: ", "}"])), t), "params") };
  function Jp(e) {
    let t = Kv(e);
    (0, Rv.reportError)(t, qv);
  }
  H(Jp, "reportTypeError");
  Kt.reportTypeError = Jp;
  function Kv(e) {
    let { gen: t, data: r, schema: n } = e, i = (0, FI.schemaRefOrVal)(e, n, "type");
    return { gen: t, keyword: "type", data: r, schema: n.type, schemaCode: i, schemaValue: i, parentSchema: n, params: {}, it: e };
  }
  H(Kv, "getTypeErrorContext");
});
var _I = L((ec) => {
  a();
  Object.defineProperty(ec, "__esModule", { value: true });
  ec.assignDefaults = void 0;
  var oi = me(), zv = Le();
  function Gv(e, t) {
    let { properties: r, items: n } = e.schema;
    if (t === "object" && r) for (let i in r) TI(e, i, r[i].default);
    else t === "array" && Array.isArray(n) && n.forEach((i, s) => TI(e, s, i.default));
  }
  H(Gv, "assignDefaults");
  ec.assignDefaults = Gv;
  var vI, AI, jI, kI;
  function TI(e, t, r) {
    let { gen: n, compositeRule: i, data: s, opts: a4 } = e;
    if (r === void 0) return;
    let f = (0, oi._)(vI || (vI = T$1(["", "", ""])), s, (0, oi.getProperty)(t));
    if (i) {
      (0, zv.checkStrictMode)(e, "default is ignored for: ".concat(f));
      return;
    }
    let p = (0, oi._)(AI || (AI = T$1(["", " === undefined"])), f);
    a4.useDefaults === "empty" && (p = (0, oi._)(jI || (jI = T$1(["", " || ", " === null || ", ' === ""'])), p, f, f)), n.if(p, (0, oi._)(kI || (kI = T$1(["", " = ", ""])), f, (0, oi.stringify)(r)));
  }
  H(TI, "assignDefault");
});
var $r = L((Ze) => {
  a();
  Object.defineProperty(Ze, "__esModule", { value: true });
  Ze.validateUnion = Ze.validateArray = Ze.usePattern = Ze.callValidateCode = Ze.schemaProperties = Ze.allSchemaProperties = Ze.noPropertyInData = Ze.propertyInData = Ze.isOwnProperty = Ze.hasPropFunc = Ze.reportMissingProp = Ze.checkMissingProp = Ze.checkReportMissingProp = void 0;
  var nt = me(), Yp = Le(), Qn = Tn(), Bv = Le(), NI;
  function Vv(e, t) {
    let { gen: r, data: n, it: i } = e;
    r.if(Qp(r, n, t, i.opts.ownProperties), () => {
      e.setParams({ missingProperty: (0, nt._)(NI || (NI = T$1(["", ""])), t) }, true), e.error();
    });
  }
  H(Vv, "checkReportMissingProp");
  Ze.checkReportMissingProp = Vv;
  var RI;
  function Wv({ gen: e, data: t, it: { opts: r } }, n, i) {
    return (0, nt.or)(...n.map((s) => (0, nt.and)(Qp(e, t, s, r.ownProperties), (0, nt._)(RI || (RI = T$1(["", " = ", ""])), i, s))));
  }
  H(Wv, "checkMissingProp");
  Ze.checkMissingProp = Wv;
  function Hv(e, t) {
    e.setParams({ missingProperty: t }, true), e.error();
  }
  H(Hv, "reportMissingProp");
  Ze.reportMissingProp = Hv;
  var CI;
  function ZI(e) {
    return e.scopeValue("func", { ref: Object.prototype.hasOwnProperty, code: (0, nt._)(CI || (CI = T$1(["Object.prototype.hasOwnProperty"]))) });
  }
  H(ZI, "hasPropFunc");
  Ze.hasPropFunc = ZI;
  var MI;
  function Xp(e, t, r) {
    return (0, nt._)(MI || (MI = T$1(["", ".call(", ", ", ")"])), ZI(e), t, r);
  }
  H(Xp, "isOwnProperty");
  Ze.isOwnProperty = Xp;
  var LI, UI;
  function Zv(e, t, r, n) {
    let i = (0, nt._)(LI || (LI = T$1(["", "", " !== undefined"])), t, (0, nt.getProperty)(r));
    return n ? (0, nt._)(UI || (UI = T$1(["", " && ", ""])), i, Xp(e, t, r)) : i;
  }
  H(Zv, "propertyInData");
  Ze.propertyInData = Zv;
  var DI;
  function Qp(e, t, r, n) {
    let i = (0, nt._)(DI || (DI = T$1(["", "", " === undefined"])), t, (0, nt.getProperty)(r));
    return n ? (0, nt.or)(i, (0, nt.not)(Xp(e, t, r))) : i;
  }
  H(Qp, "noPropertyInData");
  Ze.noPropertyInData = Qp;
  function JI(e) {
    return e ? Object.keys(e).filter((t) => t !== "__proto__") : [];
  }
  H(JI, "allSchemaProperties");
  Ze.allSchemaProperties = JI;
  function Jv(e, t) {
    return JI(t).filter((r) => !(0, Yp.alwaysValidSchema)(e, t[r]));
  }
  H(Jv, "schemaProperties");
  Ze.schemaProperties = Jv;
  var qI, KI, zI, GI;
  function Yv({ schemaCode: e, data: t, it: { gen: r, topSchemaRef: n, schemaPath: i, errorPath: s }, it: a4 }, f, p, d) {
    let l = d ? (0, nt._)(qI || (qI = T$1(["", ", ", ", ", "", ""])), e, t, n, i) : t, m4 = [[Qn.default.instancePath, (0, nt.strConcat)(Qn.default.instancePath, s)], [Qn.default.parentData, a4.parentData], [Qn.default.parentDataProperty, a4.parentDataProperty], [Qn.default.rootData, Qn.default.rootData]];
    a4.opts.dynamicRef && m4.push([Qn.default.dynamicAnchors, Qn.default.dynamicAnchors]);
    let g = (0, nt._)(KI || (KI = T$1(["", ", ", ""])), l, r.object(...m4));
    return p !== nt.nil ? (0, nt._)(zI || (zI = T$1(["", ".call(", ", ", ")"])), f, p, g) : (0, nt._)(GI || (GI = T$1(["", "(", ")"])), f, g);
  }
  H(Yv, "callValidateCode");
  Ze.callValidateCode = Yv;
  var BI, Xv = (0, nt._)(BI || (BI = T$1(["new RegExp"]))), VI;
  function Qv({ gen: e, it: { opts: t } }, r) {
    let n = t.unicodeRegExp ? "u" : "", { regExp: i } = t.code, s = i(r, n);
    return e.scopeValue("pattern", { key: s.toString(), ref: s, code: (0, nt._)(VI || (VI = T$1(["", "(", ", ", ")"])), i.code === "new RegExp" ? Xv : (0, Bv.useFunc)(e, i), r, n) });
  }
  H(Qv, "usePattern");
  Ze.usePattern = Qv;
  var WI;
  function eA(e) {
    let { gen: t, data: r, keyword: n, it: i } = e, s = t.name("valid");
    if (i.allErrors) {
      let f = t.let("valid", true);
      return a4(() => t.assign(f, false)), f;
    }
    return t.var(s, true), a4(() => t.break()), s;
    function a4(f) {
      let p = t.const("len", (0, nt._)(WI || (WI = T$1(["", ".length"])), r));
      t.forRange("i", 0, p, (d) => {
        e.subschema({ keyword: n, dataProp: d, dataPropType: Yp.Type.Num }, s), t.if((0, nt.not)(s), f);
      });
    }
  }
  H(eA, "validateArray");
  Ze.validateArray = eA;
  var HI;
  function tA(e) {
    let { gen: t, schema: r, keyword: n, it: i } = e;
    if (!Array.isArray(r)) throw new Error("ajv implementation error");
    if (r.some((p) => (0, Yp.alwaysValidSchema)(i, p)) && !i.opts.unevaluated) return;
    let a4 = t.let("valid", false), f = t.name("_valid");
    t.block(() => r.forEach((p, d) => {
      let l = e.subschema({ keyword: n, schemaProp: d, compositeRule: true }, f);
      t.assign(a4, (0, nt._)(HI || (HI = T$1(["", " || ", ""])), a4, f)), e.mergeValidEvaluated(l, f) || t.if((0, nt.not)(a4));
    })), e.result(a4, () => e.reset(), () => e.error(true));
  }
  H(tA, "validateUnion");
  Ze.validateUnion = tA;
});
var fx = L((rn) => {
  a();
  Object.defineProperty(rn, "__esModule", { value: true });
  rn.validateKeywordUsage = rn.validSchemaType = rn.funcKeywordCode = rn.macroKeywordCode = void 0;
  var Xt = me(), Oo = Tn(), rA = $r(), nA = ms();
  function oA(e, t) {
    let { gen: r, keyword: n, schema: i, parentSchema: s, it: a4 } = e, f = t.macro.call(a4.self, i, s, a4), p = cx(r, n, f);
    a4.opts.validateSchema !== false && a4.self.validateSchema(f, true);
    let d = r.name("valid");
    e.subschema({ schema: f, schemaPath: Xt.nil, errSchemaPath: "".concat(a4.errSchemaPath, "/").concat(n), topSchemaRef: p, compositeRule: true }, d), e.pass(d, () => e.error(true));
  }
  H(oA, "macroKeywordCode");
  rn.macroKeywordCode = oA;
  var XI, QI, ex, tx, rx, nx;
  function iA(e, t) {
    var r;
    let { gen: n, keyword: i, schema: s, parentSchema: a4, $data: f, it: p } = e;
    aA(p, t);
    let d = !f && t.compile ? t.compile.call(p.self, s, a4, p) : t.validate, l = cx(n, i, d), m4 = n.let("valid");
    e.block$data(m4, g), e.ok((r = t.valid) !== null && r !== void 0 ? r : m4);
    function g() {
      if (t.errors === false) F4(), t.modifying && YI(e), w(() => e.error());
      else {
        let O4 = t.async ? b() : P4();
        t.modifying && YI(e), w(() => sA(e, O4));
      }
    }
    H(g, "validateKeyword");
    function b() {
      let O4 = n.let("ruleErrs", null);
      return n.try(() => F4((0, Xt._)(XI || (XI = T$1(["await "])))), (N4) => n.assign(m4, false).if((0, Xt._)(QI || (QI = T$1(["", " instanceof ", ""])), N4, p.ValidationError), () => n.assign(O4, (0, Xt._)(ex || (ex = T$1(["", ".errors"])), N4)), () => n.throw(N4))), O4;
    }
    H(b, "validateAsync");
    function P4() {
      let O4 = (0, Xt._)(tx || (tx = T$1(["", ".errors"])), l);
      return n.assign(O4, null), F4(Xt.nil), O4;
    }
    H(P4, "validateSync");
    function F4(O4 = t.async ? (0, Xt._)(rx || (rx = T$1(["await "]))) : Xt.nil) {
      let N4 = p.opts.passContext ? Oo.default.this : Oo.default.self, A = !("compile" in t && !f || t.schema === false);
      n.assign(m4, (0, Xt._)(nx || (nx = T$1(["", "", ""])), O4, (0, rA.callValidateCode)(e, l, N4, A)), t.modifying);
    }
    H(F4, "assignValid");
    function w(O4) {
      var N4;
      n.if((0, Xt.not)((N4 = t.valid) !== null && N4 !== void 0 ? N4 : m4), O4);
    }
    H(w, "reportErrs");
  }
  H(iA, "funcKeywordCode");
  rn.funcKeywordCode = iA;
  var ox;
  function YI(e) {
    let { gen: t, data: r, it: n } = e;
    t.if(n.parentData, () => t.assign(r, (0, Xt._)(ox || (ox = T$1(["", "[", "]"])), n.parentData, n.parentDataProperty)));
  }
  H(YI, "modifyData");
  var ix, sx, ax;
  function sA(e, t) {
    let { gen: r } = e;
    r.if((0, Xt._)(ix || (ix = T$1(["Array.isArray(", ")"])), t), () => {
      r.assign(Oo.default.vErrors, (0, Xt._)(sx || (sx = T$1(["", " === null ? ", " : ", ".concat(", ")"])), Oo.default.vErrors, t, Oo.default.vErrors, t)).assign(Oo.default.errors, (0, Xt._)(ax || (ax = T$1(["", ".length"])), Oo.default.vErrors)), (0, nA.extendErrors)(e);
    }, () => e.error());
  }
  H(sA, "addErrs");
  function aA({ schemaEnv: e }, t) {
    if (t.async && !e.$async) throw new Error("async keyword in sync schema");
  }
  H(aA, "checkAsyncKeyword");
  function cx(e, t, r) {
    if (r === void 0) throw new Error('keyword "'.concat(t, '" failed to compile'));
    return e.scopeValue("keyword", typeof r == "function" ? { ref: r } : { ref: r, code: (0, Xt.stringify)(r) });
  }
  H(cx, "useKeyword");
  function cA(e, t, r = false) {
    return !t.length || t.some((n) => n === "array" ? Array.isArray(e) : n === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == n || r && typeof e > "u");
  }
  H(cA, "validSchemaType");
  rn.validSchemaType = cA;
  function fA({ schema: e, opts: t, self: r, errSchemaPath: n }, i, s) {
    if (Array.isArray(i.keyword) ? !i.keyword.includes(s) : i.keyword !== s) throw new Error("ajv implementation error");
    let a4 = i.dependencies;
    if (a4 != null && a4.some((f) => !Object.prototype.hasOwnProperty.call(e, f))) throw new Error("parent schema must have dependencies of ".concat(s, ": ").concat(a4.join(",")));
    if (i.validateSchema && !i.validateSchema(e[s])) {
      let p = 'keyword "'.concat(s, '" value is invalid at path "').concat(n, '": ') + r.errorsText(i.validateSchema.errors);
      if (t.validateSchema === "log") r.logger.error(p);
      else throw new Error(p);
    }
  }
  H(fA, "validateKeywordUsage");
  rn.validateKeywordUsage = fA;
});
var hx = L((eo) => {
  a();
  Object.defineProperty(eo, "__esModule", { value: true });
  eo.extendSubschemaMode = eo.extendSubschemaData = eo.getSubschema = void 0;
  var nn = me(), yx = Le(), ux, px;
  function uA(e, { keyword: t, schemaProp: r, schema: n, schemaPath: i, errSchemaPath: s, topSchemaRef: a4 }) {
    if (t !== void 0 && n !== void 0) throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (t !== void 0) {
      let f = e.schema[t];
      return r === void 0 ? { schema: f, schemaPath: (0, nn._)(ux || (ux = T$1(["", "", ""])), e.schemaPath, (0, nn.getProperty)(t)), errSchemaPath: "".concat(e.errSchemaPath, "/").concat(t) } : { schema: f[r], schemaPath: (0, nn._)(px || (px = T$1(["", "", "", ""])), e.schemaPath, (0, nn.getProperty)(t), (0, nn.getProperty)(r)), errSchemaPath: "".concat(e.errSchemaPath, "/").concat(t, "/").concat((0, yx.escapeFragment)(r)) };
    }
    if (n !== void 0) {
      if (i === void 0 || s === void 0 || a4 === void 0) throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return { schema: n, schemaPath: i, topSchemaRef: a4, errSchemaPath: s };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  H(uA, "getSubschema");
  eo.getSubschema = uA;
  var lx, dx, mx;
  function pA(e, t, { dataProp: r, dataPropType: n, data: i, dataTypes: s, propertyName: a4 }) {
    if (i !== void 0 && r !== void 0) throw new Error('both "data" and "dataProp" passed, only one allowed');
    let { gen: f } = t;
    if (r !== void 0) {
      let { errorPath: d, dataPathArr: l, opts: m4 } = t, g = f.let("data", (0, nn._)(lx || (lx = T$1(["", "", ""])), t.data, (0, nn.getProperty)(r)), true);
      p(g), e.errorPath = (0, nn.str)(dx || (dx = T$1(["", "", ""])), d, (0, yx.getErrorPath)(r, n, m4.jsPropertySyntax)), e.parentDataProperty = (0, nn._)(mx || (mx = T$1(["", ""])), r), e.dataPathArr = [...l, e.parentDataProperty];
    }
    if (i !== void 0) {
      let d = i instanceof nn.Name ? i : f.let("data", i, true);
      p(d), a4 !== void 0 && (e.propertyName = a4);
    }
    s && (e.dataTypes = s);
    function p(d) {
      e.data = d, e.dataLevel = t.dataLevel + 1, e.dataTypes = [], t.definedProperties = /* @__PURE__ */ new Set(), e.parentData = t.data, e.dataNames = [...t.dataNames, d];
    }
    H(p, "dataContextProps");
  }
  H(pA, "extendSubschemaData");
  eo.extendSubschemaData = pA;
  function lA(e, { jtdDiscriminator: t, jtdMetadata: r, compositeRule: n, createErrors: i, allErrors: s }) {
    n !== void 0 && (e.compositeRule = n), i !== void 0 && (e.createErrors = i), s !== void 0 && (e.allErrors = s), e.jtdDiscriminator = t, e.jtdMetadata = r;
  }
  H(lA, "extendSubschemaMode");
  eo.extendSubschemaMode = lA;
});
var el = L((Y4, gx) => {
  a();
  gx.exports = H(function e(t, r) {
    if (t === r) return true;
    if (t && r && typeof t == "object" && typeof r == "object") {
      if (t.constructor !== r.constructor) return false;
      var n, i, s;
      if (Array.isArray(t)) {
        if (n = t.length, n != r.length) return false;
        for (i = n; i-- !== 0; ) if (!e(t[i], r[i])) return false;
        return true;
      }
      if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
      if (s = Object.keys(t), n = s.length, n !== Object.keys(r).length) return false;
      for (i = n; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(r, s[i])) return false;
      for (i = n; i-- !== 0; ) {
        var a4 = s[i];
        if (!e(t[a4], r[a4])) return false;
      }
      return true;
    }
    return t !== t && r !== r;
  }, "equal");
});
var xx = L((ez, Ix) => {
  a();
  var to = Ix.exports = function(e, t, r) {
    typeof t == "function" && (r = t, t = {}), r = t.cb || r;
    var n = typeof r == "function" ? r : r.pre || function() {
    }, i = r.post || function() {
    };
    tc(t, n, i, e, "", e);
  };
  to.keywords = { additionalItems: true, items: true, contains: true, additionalProperties: true, propertyNames: true, not: true, if: true, then: true, else: true };
  to.arrayKeywords = { items: true, allOf: true, anyOf: true, oneOf: true };
  to.propsKeywords = { $defs: true, definitions: true, properties: true, patternProperties: true, dependencies: true };
  to.skipKeywords = { default: true, enum: true, const: true, required: true, maximum: true, minimum: true, exclusiveMaximum: true, exclusiveMinimum: true, multipleOf: true, maxLength: true, minLength: true, pattern: true, format: true, maxItems: true, minItems: true, uniqueItems: true, maxProperties: true, minProperties: true };
  function tc(e, t, r, n, i, s, a4, f, p, d) {
    if (n && typeof n == "object" && !Array.isArray(n)) {
      t(n, i, s, a4, f, p, d);
      for (var l in n) {
        var m4 = n[l];
        if (Array.isArray(m4)) {
          if (l in to.arrayKeywords) for (var g = 0; g < m4.length; g++) tc(e, t, r, m4[g], i + "/" + l + "/" + g, s, i, l, n, g);
        } else if (l in to.propsKeywords) {
          if (m4 && typeof m4 == "object") for (var b in m4) tc(e, t, r, m4[b], i + "/" + l + "/" + dA(b), s, i, l, n, b);
        } else (l in to.keywords || e.allKeys && !(l in to.skipKeywords)) && tc(e, t, r, m4, i + "/" + l, s, i, l, n);
      }
      r(n, i, s, a4, f, p, d);
    }
  }
  H(tc, "_traverse");
  function dA(e) {
    return e.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  H(dA, "escapeJsonPtr");
});
var hs = L((sr) => {
  a();
  Object.defineProperty(sr, "__esModule", { value: true });
  sr.getSchemaRefs = sr.resolveUrl = sr.normalizeId = sr._getFullPath = sr.getFullPath = sr.inlineRef = void 0;
  var mA = Le(), yA = el(), hA = xx(), gA = /* @__PURE__ */ new Set(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum", "const"]);
  function IA(e, t = true) {
    return typeof e == "boolean" ? true : t === true ? !tl(e) : t ? bx(e) <= t : false;
  }
  H(IA, "inlineRef");
  sr.inlineRef = IA;
  var xA = /* @__PURE__ */ new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
  function tl(e) {
    for (let t in e) {
      if (xA.has(t)) return true;
      let r = e[t];
      if (Array.isArray(r) && r.some(tl) || typeof r == "object" && tl(r)) return true;
    }
    return false;
  }
  H(tl, "hasRef");
  function bx(e) {
    let t = 0;
    for (let r in e) {
      if (r === "$ref") return 1 / 0;
      if (t++, !gA.has(r) && (typeof e[r] == "object" && (0, mA.eachItem)(e[r], (n) => t += bx(n)), t === 1 / 0)) return 1 / 0;
    }
    return t;
  }
  H(bx, "countKeys");
  function $x(e, t = "", r) {
    r !== false && (t = ii(t));
    let n = e.parse(t);
    return wx(e, n);
  }
  H($x, "getFullPath");
  sr.getFullPath = $x;
  function wx(e, t) {
    return e.serialize(t).split("#")[0] + "#";
  }
  H(wx, "_getFullPath");
  sr._getFullPath = wx;
  var bA = /#\/?$/;
  function ii(e) {
    return e ? e.replace(bA, "") : "";
  }
  H(ii, "normalizeId");
  sr.normalizeId = ii;
  function $A(e, t, r) {
    return r = ii(r), e.resolve(t, r);
  }
  H($A, "resolveUrl");
  sr.resolveUrl = $A;
  var wA = /^[a-z_][-a-z0-9._]*$/i;
  function PA(e, t) {
    if (typeof e == "boolean") return {};
    let { schemaId: r, uriResolver: n } = this.opts, i = ii(e[r] || t), s = { "": i }, a4 = $x(n, i, false), f = {}, p = /* @__PURE__ */ new Set();
    return hA(e, { allKeys: true }, (m4, g, b, P4) => {
      if (P4 === void 0) return;
      let F4 = a4 + g, w = s[P4];
      typeof m4[r] == "string" && (w = O4.call(this, m4[r])), N4.call(this, m4.$anchor), N4.call(this, m4.$dynamicAnchor), s[g] = w;
      function O4(A) {
        let k = this.opts.uriResolver.resolve;
        if (A = ii(w ? k(w, A) : A), p.has(A)) throw l(A);
        p.add(A);
        let R3 = this.refs[A];
        return typeof R3 == "string" && (R3 = this.refs[R3]), typeof R3 == "object" ? d(m4, R3.schema, A) : A !== ii(F4) && (A[0] === "#" ? (d(m4, f[A], A), f[A] = m4) : this.refs[A] = F4), A;
      }
      H(O4, "addRef");
      function N4(A) {
        if (typeof A == "string") {
          if (!wA.test(A)) throw new Error('invalid anchor "'.concat(A, '"'));
          O4.call(this, "#".concat(A));
        }
      }
      H(N4, "addAnchor");
    }), f;
    function d(m4, g, b) {
      if (g !== void 0 && !yA(m4, g)) throw l(b);
    }
    function l(m4) {
      return new Error('reference "'.concat(m4, '" resolves to more than one schema'));
    }
  }
  H(PA, "getSchemaRefs");
  sr.getSchemaRefs = PA;
});
var xs = L((ro) => {
  a();
  Object.defineProperty(ro, "__esModule", { value: true });
  ro.getData = ro.KeywordCxt = ro.validateFunctionCode = void 0;
  var lb = zg(), Px = ys(), nl = Wp(), rc = ys(), OA = _I(), Is = fx(), rl = hx(), Q3 = me(), fe = Tn(), FA = hs(), vn = Le(), gs = ms();
  function SA(e) {
    if (yb(e) && (hb(e), mb(e))) {
      vA(e);
      return;
    }
    db(e, () => (0, lb.topBoolOrEmptySchema)(e));
  }
  H(SA, "validateFunctionCode");
  ro.validateFunctionCode = SA;
  var Ex, Tx, vx;
  function db({ gen: e, validateName: t, schema: r, schemaEnv: n, opts: i }, s) {
    i.code.es5 ? e.func(t, (0, Q3._)(Ex || (Ex = T$1(["", ", ", ""])), fe.default.data, fe.default.valCxt), n.$async, () => {
      e.code((0, Q3._)(Tx || (Tx = T$1(['"use strict"; ', ""])), Ox(r, i))), TA(e, i), e.code(s);
    }) : e.func(t, (0, Q3._)(vx || (vx = T$1(["", ", ", ""])), fe.default.data, EA(i)), n.$async, () => e.code(Ox(r, i)).code(s));
  }
  H(db, "validateFunction");
  var Ax, jx;
  function EA(e) {
    return (0, Q3._)(jx || (jx = T$1(["{", '="", ', ", ", ", ", "=", "", "}={}"])), fe.default.instancePath, fe.default.parentData, fe.default.parentDataProperty, fe.default.rootData, fe.default.data, e.dynamicRef ? (0, Q3._)(Ax || (Ax = T$1([", ", "={}"])), fe.default.dynamicAnchors) : Q3.nil);
  }
  H(EA, "destructureValCxt");
  var kx, _x, Nx, Rx, Cx, Mx, Lx, Ux, Dx;
  function TA(e, t) {
    e.if(fe.default.valCxt, () => {
      e.var(fe.default.instancePath, (0, Q3._)(kx || (kx = T$1(["", ".", ""])), fe.default.valCxt, fe.default.instancePath)), e.var(fe.default.parentData, (0, Q3._)(_x || (_x = T$1(["", ".", ""])), fe.default.valCxt, fe.default.parentData)), e.var(fe.default.parentDataProperty, (0, Q3._)(Nx || (Nx = T$1(["", ".", ""])), fe.default.valCxt, fe.default.parentDataProperty)), e.var(fe.default.rootData, (0, Q3._)(Rx || (Rx = T$1(["", ".", ""])), fe.default.valCxt, fe.default.rootData)), t.dynamicRef && e.var(fe.default.dynamicAnchors, (0, Q3._)(Cx || (Cx = T$1(["", ".", ""])), fe.default.valCxt, fe.default.dynamicAnchors));
    }, () => {
      e.var(fe.default.instancePath, (0, Q3._)(Mx || (Mx = T$1(['""'])))), e.var(fe.default.parentData, (0, Q3._)(Lx || (Lx = T$1(["undefined"])))), e.var(fe.default.parentDataProperty, (0, Q3._)(Ux || (Ux = T$1(["undefined"])))), e.var(fe.default.rootData, fe.default.data), t.dynamicRef && e.var(fe.default.dynamicAnchors, (0, Q3._)(Dx || (Dx = T$1(["{}"]))));
    });
  }
  H(TA, "destructureValCxtES5");
  function vA(e) {
    let { schema: t, opts: r, gen: n } = e;
    db(e, () => {
      r.$comment && t.$comment && Ib(e), NA(e), n.let(fe.default.vErrors, null), n.let(fe.default.errors, 0), r.unevaluated && AA(e), gb(e), MA(e);
    });
  }
  H(vA, "topSchemaObjCode");
  var qx, Kx, zx, Gx, Bx, Vx, Wx;
  function AA(e) {
    let { gen: t, validateName: r } = e;
    e.evaluated = t.const("evaluated", (0, Q3._)(qx || (qx = T$1(["", ".evaluated"])), r)), t.if((0, Q3._)(Kx || (Kx = T$1(["", ".dynamicProps"])), e.evaluated), () => t.assign((0, Q3._)(zx || (zx = T$1(["", ".props"])), e.evaluated), (0, Q3._)(Gx || (Gx = T$1(["undefined"]))))), t.if((0, Q3._)(Bx || (Bx = T$1(["", ".dynamicItems"])), e.evaluated), () => t.assign((0, Q3._)(Vx || (Vx = T$1(["", ".items"])), e.evaluated), (0, Q3._)(Wx || (Wx = T$1(["undefined"])))));
  }
  H(AA, "resetEvaluated");
  var Hx;
  function Ox(e, t) {
    let r = typeof e == "object" && e[t.schemaId];
    return r && (t.code.source || t.code.process) ? (0, Q3._)(Hx || (Hx = T$1(["/*# sourceURL=", " */"])), r) : Q3.nil;
  }
  H(Ox, "funcSourceUrl");
  function jA(e, t) {
    if (yb(e) && (hb(e), mb(e))) {
      kA(e, t);
      return;
    }
    (0, lb.boolOrEmptySchema)(e, t);
  }
  H(jA, "subschemaCode");
  function mb({ schema: e, self: t }) {
    if (typeof e == "boolean") return !e;
    for (let r in e) if (t.RULES.all[r]) return true;
    return false;
  }
  H(mb, "schemaCxtHasRules");
  function yb(e) {
    return typeof e.schema != "boolean";
  }
  H(yb, "isSchemaObj");
  var Zx;
  function kA(e, t) {
    let { schema: r, gen: n, opts: i } = e;
    i.$comment && r.$comment && Ib(e), RA(e), CA(e);
    let s = n.const("_errs", fe.default.errors);
    gb(e, s), n.var(t, (0, Q3._)(Zx || (Zx = T$1(["", " === ", ""])), s, fe.default.errors));
  }
  H(kA, "subSchemaObjCode");
  function hb(e) {
    (0, vn.checkUnknownRules)(e), _A(e);
  }
  H(hb, "checkKeywords");
  function gb(e, t) {
    if (e.opts.jtd) return Fx(e, [], false, t);
    let r = (0, Px.getSchemaTypes)(e.schema), n = (0, Px.coerceAndCheckDataType)(e, r);
    Fx(e, r, !n, t);
  }
  H(gb, "typeAndKeywords");
  function _A(e) {
    let { schema: t, errSchemaPath: r, opts: n, self: i } = e;
    t.$ref && n.ignoreKeywordsWithRef && (0, vn.schemaHasRulesButRef)(t, i.RULES) && i.logger.warn('$ref: keywords ignored in schema at path "'.concat(r, '"'));
  }
  H(_A, "checkRefsAndKeywords");
  function NA(e) {
    let { schema: t, opts: r } = e;
    t.default !== void 0 && r.useDefaults && r.strictSchema && (0, vn.checkStrictMode)(e, "default is ignored in the schema root");
  }
  H(NA, "checkNoDefault");
  function RA(e) {
    let t = e.schema[e.opts.schemaId];
    t && (e.baseId = (0, FA.resolveUrl)(e.opts.uriResolver, e.baseId, t));
  }
  H(RA, "updateContext");
  function CA(e) {
    if (e.schema.$async && !e.schemaEnv.$async) throw new Error("async schema in sync schema");
  }
  H(CA, "checkAsyncSchema");
  var Jx, Yx, Xx;
  function Ib({ gen: e, schemaEnv: t, schema: r, errSchemaPath: n, opts: i }) {
    let s = r.$comment;
    if (i.$comment === true) e.code((0, Q3._)(Jx || (Jx = T$1(["", ".logger.log(", ")"])), fe.default.self, s));
    else if (typeof i.$comment == "function") {
      let a4 = (0, Q3.str)(Yx || (Yx = T$1(["", "/$comment"])), n), f = e.scopeValue("root", { ref: t.root });
      e.code((0, Q3._)(Xx || (Xx = T$1(["", ".opts.$comment(", ", ", ", ", ".schema)"])), fe.default.self, s, a4, f));
    }
  }
  H(Ib, "commentKeyword");
  var Qx, eb, tb, rb;
  function MA(e) {
    let { gen: t, schemaEnv: r, validateName: n, ValidationError: i, opts: s } = e;
    r.$async ? t.if((0, Q3._)(Qx || (Qx = T$1(["", " === 0"])), fe.default.errors), () => t.return(fe.default.data), () => t.throw((0, Q3._)(eb || (eb = T$1(["new ", "(", ")"])), i, fe.default.vErrors))) : (t.assign((0, Q3._)(tb || (tb = T$1(["", ".errors"])), n), fe.default.vErrors), s.unevaluated && LA(e), t.return((0, Q3._)(rb || (rb = T$1(["", " === 0"])), fe.default.errors)));
  }
  H(MA, "returnResults");
  var nb, ob;
  function LA({ gen: e, evaluated: t, props: r, items: n }) {
    r instanceof Q3.Name && e.assign((0, Q3._)(nb || (nb = T$1(["", ".props"])), t), r), n instanceof Q3.Name && e.assign((0, Q3._)(ob || (ob = T$1(["", ".items"])), t), n);
  }
  H(LA, "assignEvaluated");
  var ib;
  function Fx(e, t, r, n) {
    let { gen: i, schema: s, data: a4, allErrors: f, opts: p, self: d } = e, { RULES: l } = d;
    if (s.$ref && (p.ignoreKeywordsWithRef || !(0, vn.schemaHasRulesButRef)(s, l))) {
      i.block(() => bb(e, "$ref", l.all.$ref.definition));
      return;
    }
    p.jtd || UA(e, t), i.block(() => {
      for (let g of l.rules) m4(g);
      m4(l.post);
    });
    function m4(g) {
      (0, nl.shouldUseGroup)(s, g) && (g.type ? (i.if((0, rc.checkDataType)(g.type, a4, p.strictNumbers)), Sx(e, g), t.length === 1 && t[0] === g.type && r && (i.else(), (0, rc.reportTypeError)(e)), i.endIf()) : Sx(e, g), f || i.if((0, Q3._)(ib || (ib = T$1(["", " === ", ""])), fe.default.errors, n || 0)));
    }
    H(m4, "groupKeywords");
  }
  H(Fx, "schemaKeywords");
  function Sx(e, t) {
    let { gen: r, schema: n, opts: { useDefaults: i } } = e;
    i && (0, OA.assignDefaults)(e, t.type), r.block(() => {
      for (let s of t.rules) (0, nl.shouldUseRule)(n, s) && bb(e, s.keyword, s.definition, t.type);
    });
  }
  H(Sx, "iterateKeywords");
  function UA(e, t) {
    e.schemaEnv.meta || !e.opts.strictTypes || (DA(e, t), e.opts.allowUnionTypes || qA(e, t), KA(e, e.dataTypes));
  }
  H(UA, "checkStrictTypes");
  function DA(e, t) {
    if (t.length) {
      if (!e.dataTypes.length) {
        e.dataTypes = t;
        return;
      }
      t.forEach((r) => {
        xb(e.dataTypes, r) || ol(e, 'type "'.concat(r, '" not allowed by context "').concat(e.dataTypes.join(","), '"'));
      }), GA(e, t);
    }
  }
  H(DA, "checkContextTypes");
  function qA(e, t) {
    t.length > 1 && !(t.length === 2 && t.includes("null")) && ol(e, "use allowUnionTypes to allow union type keyword");
  }
  H(qA, "checkMultipleTypes");
  function KA(e, t) {
    let r = e.self.RULES.all;
    for (let n in r) {
      let i = r[n];
      if (typeof i == "object" && (0, nl.shouldUseRule)(e.schema, i)) {
        let { type: s } = i.definition;
        s.length && !s.some((a4) => zA(t, a4)) && ol(e, 'missing type "'.concat(s.join(","), '" for keyword "').concat(n, '"'));
      }
    }
  }
  H(KA, "checkKeywordTypes");
  function zA(e, t) {
    return e.includes(t) || t === "number" && e.includes("integer");
  }
  H(zA, "hasApplicableType");
  function xb(e, t) {
    return e.includes(t) || t === "integer" && e.includes("number");
  }
  H(xb, "includesType");
  function GA(e, t) {
    let r = [];
    for (let n of e.dataTypes) xb(t, n) ? r.push(n) : t.includes("integer") && n === "number" && r.push("integer");
    e.dataTypes = r;
  }
  H(GA, "narrowSchemaTypes");
  function ol(e, t) {
    let r = e.schemaEnv.baseId + e.errSchemaPath;
    t += ' at "'.concat(r, '" (strictTypes)'), (0, vn.checkStrictMode)(e, t, e.opts.strictTypes);
  }
  H(ol, "strictTypesError");
  var sb, ab, cb, fb, il = class il {
    constructor(t, r, n) {
      if ((0, Is.validateKeywordUsage)(t, r, n), this.gen = t.gen, this.allErrors = t.allErrors, this.keyword = n, this.data = t.data, this.schema = t.schema[n], this.$data = r.$data && t.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, vn.schemaRefOrVal)(t, this.schema, n, this.$data), this.schemaType = r.schemaType, this.parentSchema = t.schema, this.params = {}, this.it = t, this.def = r, this.$data) this.schemaCode = t.gen.const("vSchema", $b(this.$data, t));
      else if (this.schemaCode = this.schemaValue, !(0, Is.validSchemaType)(this.schema, r.schemaType, r.allowUndefined)) throw new Error("".concat(n, " value must be ").concat(JSON.stringify(r.schemaType)));
      ("code" in r ? r.trackErrors : r.errors !== false) && (this.errsCount = t.gen.const("_errs", fe.default.errors));
    }
    result(t, r, n) {
      this.failResult((0, Q3.not)(t), r, n);
    }
    failResult(t, r, n) {
      this.gen.if(t), n ? n() : this.error(), r ? (this.gen.else(), r(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(t, r) {
      this.failResult((0, Q3.not)(t), void 0, r);
    }
    fail(t) {
      if (t === void 0) {
        this.error(), this.allErrors || this.gen.if(false);
        return;
      }
      this.gen.if(t), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(t) {
      if (!this.$data) return this.fail(t);
      let { schemaCode: r } = this;
      this.fail((0, Q3._)(sb || (sb = T$1(["", " !== undefined && (", ")"])), r, (0, Q3.or)(this.invalid$data(), t)));
    }
    error(t, r, n) {
      if (r) {
        this.setParams(r), this._error(t, n), this.setParams({});
        return;
      }
      this._error(t, n);
    }
    _error(t, r) {
      (t ? gs.reportExtraError : gs.reportError)(this, this.def.error, r);
    }
    $dataError() {
      (0, gs.reportError)(this, this.def.$dataError || gs.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0) throw new Error('add "trackErrors" to keyword definition');
      (0, gs.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(t) {
      this.allErrors || this.gen.if(t);
    }
    setParams(t, r) {
      r ? Object.assign(this.params, t) : this.params = t;
    }
    block$data(t, r, n = Q3.nil) {
      this.gen.block(() => {
        this.check$data(t, n), r();
      });
    }
    check$data(t = Q3.nil, r = Q3.nil) {
      if (!this.$data) return;
      let { gen: n, schemaCode: i, schemaType: s, def: a4 } = this;
      n.if((0, Q3.or)((0, Q3._)(ab || (ab = T$1(["", " === undefined"])), i), r)), t !== Q3.nil && n.assign(t, true), (s.length || a4.validateSchema) && (n.elseIf(this.invalid$data()), this.$dataError(), t !== Q3.nil && n.assign(t, false)), n.else();
    }
    invalid$data() {
      let { gen: t, schemaCode: r, schemaType: n, def: i, it: s } = this;
      return (0, Q3.or)(a4(), f());
      function a4() {
        if (n.length) {
          if (!(r instanceof Q3.Name)) throw new Error("ajv implementation error");
          let p = Array.isArray(n) ? n : [n];
          return (0, Q3._)(cb || (cb = T$1(["", ""])), (0, rc.checkDataTypes)(p, r, s.opts.strictNumbers, rc.DataType.Wrong));
        }
        return Q3.nil;
      }
      function f() {
        if (i.validateSchema) {
          let p = t.scopeValue("validate$data", { ref: i.validateSchema });
          return (0, Q3._)(fb || (fb = T$1(["!", "(", ")"])), p, r);
        }
        return Q3.nil;
      }
    }
    subschema(t, r) {
      let n = (0, rl.getSubschema)(this.it, t);
      (0, rl.extendSubschemaData)(n, this.it, t), (0, rl.extendSubschemaMode)(n, t);
      let i = G(F(F({}, this.it), n), { items: void 0, props: void 0 });
      return jA(i, r), i;
    }
    mergeEvaluated(t, r) {
      let { it: n, gen: i } = this;
      n.opts.unevaluated && (n.props !== true && t.props !== void 0 && (n.props = vn.mergeEvaluated.props(i, t.props, n.props, r)), n.items !== true && t.items !== void 0 && (n.items = vn.mergeEvaluated.items(i, t.items, n.items, r)));
    }
    mergeValidEvaluated(t, r) {
      let { it: n, gen: i } = this;
      if (n.opts.unevaluated && (n.props !== true || n.items !== true)) return i.if(r, () => this.mergeEvaluated(t, Q3.Name)), true;
    }
  };
  H(il, "KeywordCxt");
  var nc = il;
  ro.KeywordCxt = nc;
  function bb(e, t, r, n) {
    let i = new nc(e, r, t);
    "code" in r ? r.code(i, n) : i.$data && r.validate ? (0, Is.funcKeywordCode)(i, r) : "macro" in r ? (0, Is.macroKeywordCode)(i, r) : (r.compile || r.validate) && (0, Is.funcKeywordCode)(i, r);
  }
  H(bb, "keywordCode");
  var BA = /^\/(?:[^~]|~0|~1)*$/, VA = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/, ub, pb;
  function $b(e, { dataLevel: t, dataNames: r, dataPathArr: n }) {
    let i, s;
    if (e === "") return fe.default.rootData;
    if (e[0] === "/") {
      if (!BA.test(e)) throw new Error("Invalid JSON-pointer: ".concat(e));
      i = e, s = fe.default.rootData;
    } else {
      let d = VA.exec(e);
      if (!d) throw new Error("Invalid JSON-pointer: ".concat(e));
      let l = +d[1];
      if (i = d[2], i === "#") {
        if (l >= t) throw new Error(p("property/index", l));
        return n[t - l];
      }
      if (l > t) throw new Error(p("data", l));
      if (s = r[t - l], !i) return s;
    }
    let a4 = s, f = i.split("/");
    for (let d of f) d && (s = (0, Q3._)(ub || (ub = T$1(["", "", ""])), s, (0, Q3.getProperty)((0, vn.unescapeJsonPointer)(d))), a4 = (0, Q3._)(pb || (pb = T$1(["", " && ", ""])), a4, s));
    return a4;
    function p(d, l) {
      return "Cannot access ".concat(d, " ").concat(l, " levels up, current level is ").concat(t);
    }
  }
  H($b, "getData");
  ro.getData = $b;
});
var oc = L((al) => {
  a();
  Object.defineProperty(al, "__esModule", { value: true });
  var cl = class cl extends Error {
    constructor(t) {
      super("validation failed"), this.errors = t, this.ajv = this.validation = true;
    }
  };
  H(cl, "ValidationError");
  var sl = cl;
  al.default = sl;
});
var bs = L((pl) => {
  a();
  Object.defineProperty(pl, "__esModule", { value: true });
  var fl = hs(), ll = class ll extends Error {
    constructor(t, r, n, i) {
      super(i || "can't resolve reference ".concat(n, " from id ").concat(r)), this.missingRef = (0, fl.resolveUrl)(t, r, n), this.missingSchema = (0, fl.normalizeId)((0, fl.getFullPath)(t, this.missingRef));
    }
  };
  H(ll, "MissingRefError");
  var ul = ll;
  pl.default = ul;
});
var sc = L((wr) => {
  a();
  Object.defineProperty(wr, "__esModule", { value: true });
  wr.resolveSchema = wr.getCompilingSchema = wr.resolveRef = wr.compileSchema = wr.SchemaEnv = void 0;
  var qr = me(), WA = oc(), Fo = Tn(), Kr = hs(), wb = Le(), HA = xs(), yl = class yl {
    constructor(t) {
      var r;
      this.refs = {}, this.dynamicAnchors = {};
      let n;
      typeof t.schema == "object" && (n = t.schema), this.schema = t.schema, this.schemaId = t.schemaId, this.root = t.root || this, this.baseId = (r = t.baseId) !== null && r !== void 0 ? r : (0, Kr.normalizeId)(n == null ? void 0 : n[t.schemaId || "$id"]), this.schemaPath = t.schemaPath, this.localRefs = t.localRefs, this.meta = t.meta, this.$async = n == null ? void 0 : n.$async, this.refs = {};
    }
  };
  H(yl, "SchemaEnv");
  var si = yl;
  wr.SchemaEnv = si;
  var Pb, Ob;
  function ml(e) {
    let t = Fb.call(this, e);
    if (t) return t;
    let r = (0, Kr.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: n, lines: i } = this.opts.code, { ownProperties: s } = this.opts, a4 = new qr.CodeGen(this.scope, { es5: n, lines: i, ownProperties: s }), f;
    e.$async && (f = a4.scopeValue("Error", { ref: WA.default, code: (0, qr._)(Pb || (Pb = T$1(['require("ajv/dist/runtime/validation_error").default']))) }));
    let p = a4.scopeName("validate");
    e.validateName = p;
    let d = { gen: a4, allErrors: this.opts.allErrors, data: Fo.default.data, parentData: Fo.default.parentData, parentDataProperty: Fo.default.parentDataProperty, dataNames: [Fo.default.data], dataPathArr: [qr.nil], dataLevel: 0, dataTypes: [], definedProperties: /* @__PURE__ */ new Set(), topSchemaRef: a4.scopeValue("schema", this.opts.code.source === true ? { ref: e.schema, code: (0, qr.stringify)(e.schema) } : { ref: e.schema }), validateName: p, ValidationError: f, schema: e.schema, schemaEnv: e, rootId: r, baseId: e.baseId || r, schemaPath: qr.nil, errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"), errorPath: (0, qr._)(Ob || (Ob = T$1(['""']))), opts: this.opts, self: this }, l;
    try {
      this._compilations.add(e), (0, HA.validateFunctionCode)(d), a4.optimize(this.opts.code.optimize);
      let m4 = a4.toString();
      l = "".concat(a4.scopeRefs(Fo.default.scope), "return ").concat(m4), this.opts.code.process && (l = this.opts.code.process(l, e));
      let b = new Function("".concat(Fo.default.self), "".concat(Fo.default.scope), l)(this, this.scope.get());
      if (this.scope.value(p, { ref: b }), b.errors = null, b.schema = e.schema, b.schemaEnv = e, e.$async && (b.$async = true), this.opts.code.source === true && (b.source = { validateName: p, validateCode: m4, scopeValues: a4._values }), this.opts.unevaluated) {
        let { props: P4, items: F4 } = d;
        b.evaluated = { props: P4 instanceof qr.Name ? void 0 : P4, items: F4 instanceof qr.Name ? void 0 : F4, dynamicProps: P4 instanceof qr.Name, dynamicItems: F4 instanceof qr.Name }, b.source && (b.source.evaluated = (0, qr.stringify)(b.evaluated));
      }
      return e.validate = b, e;
    } catch (m4) {
      throw delete e.validate, delete e.validateName, l && this.logger.error("Error compiling schema, function code:", l), m4;
    } finally {
      this._compilations.delete(e);
    }
  }
  H(ml, "compileSchema");
  wr.compileSchema = ml;
  function ZA(e, t, r) {
    var n;
    r = (0, Kr.resolveUrl)(this.opts.uriResolver, t, r);
    let i = e.refs[r];
    if (i) return i;
    let s = XA.call(this, e, r);
    if (s === void 0) {
      let a4 = (n = e.localRefs) === null || n === void 0 ? void 0 : n[r], { schemaId: f } = this.opts;
      a4 && (s = new si({ schema: a4, schemaId: f, root: e, baseId: t }));
    }
    if (s !== void 0) return e.refs[r] = JA.call(this, s);
  }
  H(ZA, "resolveRef");
  wr.resolveRef = ZA;
  function JA(e) {
    return (0, Kr.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : ml.call(this, e);
  }
  H(JA, "inlineOrCompile");
  function Fb(e) {
    for (let t of this._compilations) if (YA(t, e)) return t;
  }
  H(Fb, "getCompilingSchema");
  wr.getCompilingSchema = Fb;
  function YA(e, t) {
    return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
  }
  H(YA, "sameSchemaEnv");
  function XA(e, t) {
    let r;
    for (; typeof (r = this.refs[t]) == "string"; ) t = r;
    return r || this.schemas[t] || ic.call(this, e, t);
  }
  H(XA, "resolve");
  function ic(e, t) {
    let r = this.opts.uriResolver.parse(t), n = (0, Kr._getFullPath)(this.opts.uriResolver, r), i = (0, Kr.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
    if (Object.keys(e.schema).length > 0 && n === i) return dl.call(this, r, e);
    let s = (0, Kr.normalizeId)(n), a4 = this.refs[s] || this.schemas[s];
    if (typeof a4 == "string") {
      let f = ic.call(this, e, a4);
      return typeof (f == null ? void 0 : f.schema) != "object" ? void 0 : dl.call(this, r, f);
    }
    if (typeof (a4 == null ? void 0 : a4.schema) == "object") {
      if (a4.validate || ml.call(this, a4), s === (0, Kr.normalizeId)(t)) {
        let { schema: f } = a4, { schemaId: p } = this.opts, d = f[p];
        return d && (i = (0, Kr.resolveUrl)(this.opts.uriResolver, i, d)), new si({ schema: f, schemaId: p, root: e, baseId: i });
      }
      return dl.call(this, r, a4);
    }
  }
  H(ic, "resolveSchema");
  wr.resolveSchema = ic;
  var QA = /* @__PURE__ */ new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
  function dl(e, { baseId: t, schema: r, root: n }) {
    var i;
    if (((i = e.fragment) === null || i === void 0 ? void 0 : i[0]) !== "/") return;
    for (let f of e.fragment.slice(1).split("/")) {
      if (typeof r == "boolean") return;
      let p = r[(0, wb.unescapeFragment)(f)];
      if (p === void 0) return;
      r = p;
      let d = typeof r == "object" && r[this.opts.schemaId];
      !QA.has(f) && d && (t = (0, Kr.resolveUrl)(this.opts.uriResolver, t, d));
    }
    let s;
    if (typeof r != "boolean" && r.$ref && !(0, wb.schemaHasRulesButRef)(r, this.RULES)) {
      let f = (0, Kr.resolveUrl)(this.opts.uriResolver, t, r.$ref);
      s = ic.call(this, n, f);
    }
    let { schemaId: a4 } = this.opts;
    if (s = s || new si({ schema: r, schemaId: a4, root: n, baseId: t }), s.schema !== s.root.schema) return s;
  }
  H(dl, "getJsonPointer");
});
var Sb = L((Iz, ej) => {
  ej.exports = { $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", description: "Meta-schema for $data reference (JSON AnySchema extension proposal)", type: "object", required: ["$data"], properties: { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, additionalProperties: false };
});
var Tb = L((xz, Eb) => {
  a();
  var tj = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
  Eb.exports = { HEX: tj };
});
var Cb = L(($z, Rb) => {
  a();
  var { HEX: rj } = Tb(), nj = new RegExp("^(?:(?:25[0-5]|2[0-4]\\d|1\\d{2}|[1-9]\\d|\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|1\\d{2}|[1-9]\\d|\\d)$", "u");
  function kb(e) {
    if (Nb(e, ".") < 3) return { host: e, isIPV4: false };
    let t = e.match(nj) || [], [r] = t;
    return r ? { host: ij(r, "."), isIPV4: true } : { host: e, isIPV4: false };
  }
  H(kb, "normalizeIPv4");
  function hl(e, t = false) {
    let r = "", n = true;
    for (let i of e) {
      if (rj[i] === void 0) return;
      i !== "0" && n === true && (n = false), n || (r += i);
    }
    return t && r.length === 0 && (r = "0"), r;
  }
  H(hl, "stringArrayToHexStripped");
  function oj(e) {
    let t = 0, r = { error: false, address: "", zone: "" }, n = [], i = [], s = false, a4 = false, f = false;
    function p() {
      if (i.length) {
        if (s === false) {
          let d = hl(i);
          if (d !== void 0) n.push(d);
          else return r.error = true, false;
        }
        i.length = 0;
      }
      return true;
    }
    H(p, "consume");
    for (let d = 0; d < e.length; d++) {
      let l = e[d];
      if (!(l === "[" || l === "]")) if (l === ":") {
        if (a4 === true && (f = true), !p()) break;
        if (t++, n.push(":"), t > 7) {
          r.error = true;
          break;
        }
        d - 1 >= 0 && e[d - 1] === ":" && (a4 = true);
        continue;
      } else if (l === "%") {
        if (!p()) break;
        s = true;
      } else {
        i.push(l);
        continue;
      }
    }
    return i.length && (s ? r.zone = i.join("") : f ? n.push(i.join("")) : n.push(hl(i))), r.address = n.join(""), r;
  }
  H(oj, "getIPV6");
  function _b(e) {
    if (Nb(e, ":") < 2) return { host: e, isIPV6: false };
    let t = oj(e);
    if (t.error) return { host: e, isIPV6: false };
    {
      let r = t.address, n = t.address;
      return t.zone && (r += "%" + t.zone, n += "%25" + t.zone), { host: r, escapedHost: n, isIPV6: true };
    }
  }
  H(_b, "normalizeIPv6");
  function ij(e, t) {
    let r = "", n = true, i = e.length;
    for (let s = 0; s < i; s++) {
      let a4 = e[s];
      a4 === "0" && n ? (s + 1 <= i && e[s + 1] === t || s + 1 === i) && (r += a4, n = false) : (a4 === t ? n = true : n = false, r += a4);
    }
    return r;
  }
  H(ij, "stripLeadingZeros");
  function Nb(e, t) {
    let r = 0;
    for (let n = 0; n < e.length; n++) e[n] === t && r++;
    return r;
  }
  H(Nb, "findToken");
  var vb = new RegExp("^\\.\\.?\\/", "u"), Ab = new RegExp("^\\/\\.(?:\\/|$)", "u"), jb = new RegExp("^\\/\\.\\.(?:\\/|$)", "u"), sj = new RegExp("^\\/?(?:.|\\n)*?(?=\\/|$)", "u");
  function aj(e) {
    let t = [];
    for (; e.length; ) if (e.match(vb)) e = e.replace(vb, "");
    else if (e.match(Ab)) e = e.replace(Ab, "/");
    else if (e.match(jb)) e = e.replace(jb, "/"), t.pop();
    else if (e === "." || e === "..") e = "";
    else {
      let r = e.match(sj);
      if (r) {
        let n = r[0];
        e = e.slice(n.length), t.push(n);
      } else throw new Error("Unexpected dot segment condition");
    }
    return t.join("");
  }
  H(aj, "removeDotSegments");
  function cj(e, t) {
    let r = t !== true ? escape : unescape;
    return e.scheme !== void 0 && (e.scheme = r(e.scheme)), e.userinfo !== void 0 && (e.userinfo = r(e.userinfo)), e.host !== void 0 && (e.host = r(e.host)), e.path !== void 0 && (e.path = r(e.path)), e.query !== void 0 && (e.query = r(e.query)), e.fragment !== void 0 && (e.fragment = r(e.fragment)), e;
  }
  H(cj, "normalizeComponentEncoding");
  function fj(e) {
    let t = [];
    if (e.userinfo !== void 0 && (t.push(e.userinfo), t.push("@")), e.host !== void 0) {
      let r = unescape(e.host), n = kb(r);
      if (n.isIPV4) r = n.host;
      else {
        let i = _b(n.host);
        i.isIPV6 === true ? r = "[".concat(i.escapedHost, "]") : r = e.host;
      }
      t.push(r);
    }
    return (typeof e.port == "number" || typeof e.port == "string") && (t.push(":"), t.push(String(e.port))), t.length ? t.join("") : void 0;
  }
  H(fj, "recomposeAuthority");
  Rb.exports = { recomposeAuthority: fj, normalizeComponentEncoding: cj, removeDotSegments: aj, normalizeIPv4: kb, normalizeIPv6: _b, stringArrayToHexStripped: hl };
});
var Kb = L((Oz, qb) => {
  a();
  var uj = new RegExp("^[\\da-f]{8}-[\\da-f]{4}-[\\da-f]{4}-[\\da-f]{4}-[\\da-f]{12}$", "iu"), pj = new RegExp("([\\da-z][\\d\\-a-z]{0,31}):((?:[\\w!$'()*+,\\-.:;=@]|%[\\da-f]{2})+)", "iu");
  function Mb(e) {
    return typeof e.secure == "boolean" ? e.secure : String(e.scheme).toLowerCase() === "wss";
  }
  H(Mb, "isSecure");
  function Lb(e) {
    return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;
  }
  H(Lb, "httpParse");
  function Ub(e) {
    let t = String(e.scheme).toLowerCase() === "https";
    return (e.port === (t ? 443 : 80) || e.port === "") && (e.port = void 0), e.path || (e.path = "/"), e;
  }
  H(Ub, "httpSerialize");
  function lj(e) {
    return e.secure = Mb(e), e.resourceName = (e.path || "/") + (e.query ? "?" + e.query : ""), e.path = void 0, e.query = void 0, e;
  }
  H(lj, "wsParse");
  function dj(e) {
    if ((e.port === (Mb(e) ? 443 : 80) || e.port === "") && (e.port = void 0), typeof e.secure == "boolean" && (e.scheme = e.secure ? "wss" : "ws", e.secure = void 0), e.resourceName) {
      let [t, r] = e.resourceName.split("?");
      e.path = t && t !== "/" ? t : void 0, e.query = r, e.resourceName = void 0;
    }
    return e.fragment = void 0, e;
  }
  H(dj, "wsSerialize");
  function mj(e, t) {
    if (!e.path) return e.error = "URN can not be parsed", e;
    let r = e.path.match(pj);
    if (r) {
      let n = t.scheme || e.scheme || "urn";
      e.nid = r[1].toLowerCase(), e.nss = r[2];
      let i = "".concat(n, ":").concat(t.nid || e.nid), s = gl[i];
      e.path = void 0, s && (e = s.parse(e, t));
    } else e.error = e.error || "URN can not be parsed.";
    return e;
  }
  H(mj, "urnParse");
  function yj(e, t) {
    let r = t.scheme || e.scheme || "urn", n = e.nid.toLowerCase(), i = "".concat(r, ":").concat(t.nid || n), s = gl[i];
    s && (e = s.serialize(e, t));
    let a4 = e, f = e.nss;
    return a4.path = "".concat(n || t.nid, ":").concat(f), t.skipEscape = true, a4;
  }
  H(yj, "urnSerialize");
  function hj(e, t) {
    let r = e;
    return r.uuid = r.nss, r.nss = void 0, !t.tolerant && (!r.uuid || !uj.test(r.uuid)) && (r.error = r.error || "UUID is not valid."), r;
  }
  H(hj, "urnuuidParse");
  function gj(e) {
    let t = e;
    return t.nss = (e.uuid || "").toLowerCase(), t;
  }
  H(gj, "urnuuidSerialize");
  var Db = { scheme: "http", domainHost: true, parse: Lb, serialize: Ub }, Ij = { scheme: "https", domainHost: Db.domainHost, parse: Lb, serialize: Ub }, ac = { scheme: "ws", domainHost: true, parse: lj, serialize: dj }, xj = { scheme: "wss", domainHost: ac.domainHost, parse: ac.parse, serialize: ac.serialize }, bj = { scheme: "urn", parse: mj, serialize: yj, skipNormalize: true }, $j = { scheme: "urn:uuid", parse: hj, serialize: gj, skipNormalize: true }, gl = { http: Db, https: Ij, ws: ac, wss: xj, urn: bj, "urn:uuid": $j };
  qb.exports = gl;
});
var Gb = L((Ez, fc) => {
  a();
  var { normalizeIPv6: wj, normalizeIPv4: Pj, removeDotSegments: $s, recomposeAuthority: Oj, normalizeComponentEncoding: cc } = Cb(), Il = Kb();
  function Fj(e, t) {
    return typeof e == "string" ? e = on(An(e, t), t) : typeof e == "object" && (e = An(on(e, t), t)), e;
  }
  H(Fj, "normalize");
  function Sj(e, t, r) {
    let n = Object.assign({ scheme: "null" }, r), i = zb(An(e, n), An(t, n), n, true);
    return on(i, G(F({}, n), { skipEscape: true }));
  }
  H(Sj, "resolve");
  function zb(e, t, r, n) {
    let i = {};
    return n || (e = An(on(e, r), r), t = An(on(t, r), r)), r = r || {}, !r.tolerant && t.scheme ? (i.scheme = t.scheme, i.userinfo = t.userinfo, i.host = t.host, i.port = t.port, i.path = $s(t.path || ""), i.query = t.query) : (t.userinfo !== void 0 || t.host !== void 0 || t.port !== void 0 ? (i.userinfo = t.userinfo, i.host = t.host, i.port = t.port, i.path = $s(t.path || ""), i.query = t.query) : (t.path ? (t.path.charAt(0) === "/" ? i.path = $s(t.path) : ((e.userinfo !== void 0 || e.host !== void 0 || e.port !== void 0) && !e.path ? i.path = "/" + t.path : e.path ? i.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : i.path = t.path, i.path = $s(i.path)), i.query = t.query) : (i.path = e.path, t.query !== void 0 ? i.query = t.query : i.query = e.query), i.userinfo = e.userinfo, i.host = e.host, i.port = e.port), i.scheme = e.scheme), i.fragment = t.fragment, i;
  }
  H(zb, "resolveComponents");
  function Ej(e, t, r) {
    return typeof e == "string" ? (e = unescape(e), e = on(cc(An(e, r), true), G(F({}, r), { skipEscape: true }))) : typeof e == "object" && (e = on(cc(e, true), G(F({}, r), { skipEscape: true }))), typeof t == "string" ? (t = unescape(t), t = on(cc(An(t, r), true), G(F({}, r), { skipEscape: true }))) : typeof t == "object" && (t = on(cc(t, true), G(F({}, r), { skipEscape: true }))), e.toLowerCase() === t.toLowerCase();
  }
  H(Ej, "equal");
  function on(e, t) {
    let r = { host: e.host, scheme: e.scheme, userinfo: e.userinfo, port: e.port, path: e.path, query: e.query, nid: e.nid, nss: e.nss, uuid: e.uuid, fragment: e.fragment, reference: e.reference, resourceName: e.resourceName, secure: e.secure, error: "" }, n = Object.assign({}, t), i = [], s = Il[(n.scheme || r.scheme || "").toLowerCase()];
    s && s.serialize && s.serialize(r, n), r.path !== void 0 && (n.skipEscape ? r.path = unescape(r.path) : (r.path = escape(r.path), r.scheme !== void 0 && (r.path = r.path.split("%3A").join(":")))), n.reference !== "suffix" && r.scheme && i.push(r.scheme, ":");
    let a4 = Oj(r);
    if (a4 !== void 0 && (n.reference !== "suffix" && i.push("//"), i.push(a4), r.path && r.path.charAt(0) !== "/" && i.push("/")), r.path !== void 0) {
      let f = r.path;
      !n.absolutePath && (!s || !s.absolutePath) && (f = $s(f)), a4 === void 0 && (f = f.replace(new RegExp("^\\/\\/", "u"), "/%2F")), i.push(f);
    }
    return r.query !== void 0 && i.push("?", r.query), r.fragment !== void 0 && i.push("#", r.fragment), i.join("");
  }
  H(on, "serialize");
  var Tj = Array.from({ length: 127 }, (e, t) => new RegExp("[^!\"$&'()*+,\\-.;=_`a-z{}~]", "u").test(String.fromCharCode(t)));
  function vj(e) {
    let t = 0;
    for (let r = 0, n = e.length; r < n; ++r) if (t = e.charCodeAt(r), t > 126 || Tj[t]) return true;
    return false;
  }
  H(vj, "nonSimpleDomain");
  var Aj = new RegExp("^(?:([^#/:?]+):)?(?:\\/\\/((?:([^#/?@]*)@)?(\\[[^#/?\\]]+\\]|[^#/:?]*)(?::(\\d*))?))?([^#?]*)(?:\\?([^#]*))?(?:#((?:.|[\\n\\r])*))?", "u");
  function An(e, t) {
    let r = Object.assign({}, t), n = { scheme: void 0, userinfo: void 0, host: "", port: void 0, path: "", query: void 0, fragment: void 0 }, i = e.indexOf("%") !== -1, s = false;
    r.reference === "suffix" && (e = (r.scheme ? r.scheme + ":" : "") + "//" + e);
    let a4 = e.match(Aj);
    if (a4) {
      if (n.scheme = a4[1], n.userinfo = a4[3], n.host = a4[4], n.port = parseInt(a4[5], 10), n.path = a4[6] || "", n.query = a4[7], n.fragment = a4[8], isNaN(n.port) && (n.port = a4[5]), n.host) {
        let p = Pj(n.host);
        if (p.isIPV4 === false) {
          let d = wj(p.host);
          n.host = d.host.toLowerCase(), s = d.isIPV6;
        } else n.host = p.host, s = true;
      }
      n.scheme === void 0 && n.userinfo === void 0 && n.host === void 0 && n.port === void 0 && n.query === void 0 && !n.path ? n.reference = "same-document" : n.scheme === void 0 ? n.reference = "relative" : n.fragment === void 0 ? n.reference = "absolute" : n.reference = "uri", r.reference && r.reference !== "suffix" && r.reference !== n.reference && (n.error = n.error || "URI is not a " + r.reference + " reference.");
      let f = Il[(r.scheme || n.scheme || "").toLowerCase()];
      if (!r.unicodeSupport && (!f || !f.unicodeSupport) && n.host && (r.domainHost || f && f.domainHost) && s === false && vj(n.host)) try {
        n.host = URL.domainToASCII(n.host.toLowerCase());
      } catch (p) {
        n.error = n.error || "Host's domain name can not be converted to ASCII: " + p;
      }
      (!f || f && !f.skipNormalize) && (i && n.scheme !== void 0 && (n.scheme = unescape(n.scheme)), i && n.host !== void 0 && (n.host = unescape(n.host)), n.path && (n.path = escape(unescape(n.path))), n.fragment && (n.fragment = encodeURI(decodeURIComponent(n.fragment)))), f && f.parse && f.parse(n, r);
    } else n.error = n.error || "URI can not be parsed.";
    return n;
  }
  H(An, "parse");
  var xl = { SCHEMES: Il, normalize: Fj, resolve: Sj, resolveComponents: zb, equal: Ej, serialize: on, parse: An };
  fc.exports = xl;
  fc.exports.default = xl;
  fc.exports.fastUri = xl;
});
var Vb = L((bl) => {
  a();
  Object.defineProperty(bl, "__esModule", { value: true });
  var Bb = Gb();
  Bb.code = 'require("ajv/dist/runtime/uri").default';
  bl.default = Bb;
});
var e0 = L((kt) => {
  a();
  Object.defineProperty(kt, "__esModule", { value: true });
  kt.CodeGen = kt.Name = kt.nil = kt.stringify = kt.str = kt._ = kt.KeywordCxt = void 0;
  var jj = xs();
  Object.defineProperty(kt, "KeywordCxt", { enumerable: true, get: H(function() {
    return jj.KeywordCxt;
  }, "get") });
  var ai = me();
  Object.defineProperty(kt, "_", { enumerable: true, get: H(function() {
    return ai._;
  }, "get") });
  Object.defineProperty(kt, "str", { enumerable: true, get: H(function() {
    return ai.str;
  }, "get") });
  Object.defineProperty(kt, "stringify", { enumerable: true, get: H(function() {
    return ai.stringify;
  }, "get") });
  Object.defineProperty(kt, "nil", { enumerable: true, get: H(function() {
    return ai.nil;
  }, "get") });
  Object.defineProperty(kt, "Name", { enumerable: true, get: H(function() {
    return ai.Name;
  }, "get") });
  Object.defineProperty(kt, "CodeGen", { enumerable: true, get: H(function() {
    return ai.CodeGen;
  }, "get") });
  var kj = oc(), Yb = bs(), _j = Vp(), ws = sc(), Nj = me(), Ps = hs(), uc = ys(), wl = Le(), Wb = Sb(), Rj = Vb(), Xb = H((e, t) => new RegExp(e, t), "defaultRegExp");
  Xb.code = "new RegExp";
  var Cj = ["removeAdditional", "useDefaults", "coerceTypes"], Mj = /* @__PURE__ */ new Set(["validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error"]), Lj = { errorDataPath: "", format: "`validateFormats: false` can be used instead.", nullable: '"nullable" keyword is supported by default.', jsonPointers: "Deprecated jsPropertySyntax can be used instead.", extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.", missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.", processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`", sourceCode: "Use option `code: {source: true}`", strictDefaults: "It is default now, see option `strict`.", strictKeywords: "It is default now, see option `strict`.", uniqueItems: '"uniqueItems" keyword is always validated.', unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).", cache: "Map is used as cache, schema object as key.", serialize: "Map is used as cache, schema object as key.", ajvErrors: "It is default now." }, Uj = { ignoreKeywordsWithRef: "", jsPropertySyntax: "", unicode: '"minLength"/"maxLength" account for unicode characters by default.' }, Hb = 200;
  function Dj(e) {
    var t, r, n, i, s, a4, f, p, d, l, m4, g, b, P4, F$1, w, O4, N4, A, k, R3, V4, J4, D, U4;
    let ae = e.strict, se = (t = e.code) === null || t === void 0 ? void 0 : t.optimize, M3 = se === true || se === void 0 ? 1 : se || 0, le = (n = (r = e.code) === null || r === void 0 ? void 0 : r.regExp) !== null && n !== void 0 ? n : Xb, ce = (i = e.uriResolver) !== null && i !== void 0 ? i : Rj.default;
    return { strictSchema: (a4 = (s = e.strictSchema) !== null && s !== void 0 ? s : ae) !== null && a4 !== void 0 ? a4 : true, strictNumbers: (p = (f = e.strictNumbers) !== null && f !== void 0 ? f : ae) !== null && p !== void 0 ? p : true, strictTypes: (l = (d = e.strictTypes) !== null && d !== void 0 ? d : ae) !== null && l !== void 0 ? l : "log", strictTuples: (g = (m4 = e.strictTuples) !== null && m4 !== void 0 ? m4 : ae) !== null && g !== void 0 ? g : "log", strictRequired: (P4 = (b = e.strictRequired) !== null && b !== void 0 ? b : ae) !== null && P4 !== void 0 ? P4 : false, code: e.code ? G(F({}, e.code), { optimize: M3, regExp: le }) : { optimize: M3, regExp: le }, loopRequired: (F$1 = e.loopRequired) !== null && F$1 !== void 0 ? F$1 : Hb, loopEnum: (w = e.loopEnum) !== null && w !== void 0 ? w : Hb, meta: (O4 = e.meta) !== null && O4 !== void 0 ? O4 : true, messages: (N4 = e.messages) !== null && N4 !== void 0 ? N4 : true, inlineRefs: (A = e.inlineRefs) !== null && A !== void 0 ? A : true, schemaId: (k = e.schemaId) !== null && k !== void 0 ? k : "$id", addUsedSchema: (R3 = e.addUsedSchema) !== null && R3 !== void 0 ? R3 : true, validateSchema: (V4 = e.validateSchema) !== null && V4 !== void 0 ? V4 : true, validateFormats: (J4 = e.validateFormats) !== null && J4 !== void 0 ? J4 : true, unicodeRegExp: (D = e.unicodeRegExp) !== null && D !== void 0 ? D : true, int32range: (U4 = e.int32range) !== null && U4 !== void 0 ? U4 : true, uriResolver: ce };
  }
  H(Dj, "requiredOptions");
  var Pl = class Pl {
    constructor(t = {}) {
      this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), t = this.opts = F(F({}, t), Dj(t));
      let { es5: r, lines: n } = this.opts.code;
      this.scope = new Nj.ValueScope({ scope: {}, prefixes: Mj, es5: r, lines: n }), this.logger = Vj(t.logger);
      let i = t.validateFormats;
      t.validateFormats = false, this.RULES = (0, _j.getRules)(), Zb.call(this, Lj, t, "NOT SUPPORTED"), Zb.call(this, Uj, t, "DEPRECATED", "warn"), this._metaOpts = Gj.call(this), t.formats && Kj.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), t.keywords && zj.call(this, t.keywords), typeof t.meta == "object" && this.addMetaSchema(t.meta), qj.call(this), t.validateFormats = i;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      let { $data: t, meta: r, schemaId: n } = this.opts, i = Wb;
      n === "id" && (i = F({}, Wb), i.id = i.$id, delete i.$id), r && t && this.addMetaSchema(i, i[n], false);
    }
    defaultMeta() {
      let { meta: t, schemaId: r } = this.opts;
      return this.opts.defaultMeta = typeof t == "object" ? t[r] || t : void 0;
    }
    validate(t, r) {
      let n;
      if (typeof t == "string") {
        if (n = this.getSchema(t), !n) throw new Error('no schema with key or ref "'.concat(t, '"'));
      } else n = this.compile(t);
      let i = n(r);
      return "$async" in n || (this.errors = n.errors), i;
    }
    compile(t, r) {
      let n = this._addSchema(t, r);
      return n.validate || this._compileSchemaEnv(n);
    }
    compileAsync(t, r) {
      if (typeof this.opts.loadSchema != "function") throw new Error("options.loadSchema should be a function");
      let { loadSchema: n } = this.opts;
      return i.call(this, t, r);
      async function i(l, m4) {
        await s.call(this, l.$schema);
        let g = this._addSchema(l, m4);
        return g.validate || a4.call(this, g);
      }
      async function s(l) {
        l && !this.getSchema(l) && await i.call(this, { $ref: l }, true);
      }
      async function a4(l) {
        try {
          return this._compileSchemaEnv(l);
        } catch (m4) {
          if (!(m4 instanceof Yb.default)) throw m4;
          return f.call(this, m4), await p.call(this, m4.missingSchema), a4.call(this, l);
        }
      }
      function f({ missingSchema: l, missingRef: m4 }) {
        if (this.refs[l]) throw new Error("AnySchema ".concat(l, " is loaded but ").concat(m4, " cannot be resolved"));
      }
      async function p(l) {
        let m4 = await d.call(this, l);
        this.refs[l] || await s.call(this, m4.$schema), this.refs[l] || this.addSchema(m4, l, r);
      }
      async function d(l) {
        let m4 = this._loading[l];
        if (m4) return m4;
        try {
          return await (this._loading[l] = n(l));
        } finally {
          delete this._loading[l];
        }
      }
    }
    addSchema(t, r, n, i = this.opts.validateSchema) {
      if (Array.isArray(t)) {
        for (let a4 of t) this.addSchema(a4, void 0, n, i);
        return this;
      }
      let s;
      if (typeof t == "object") {
        let { schemaId: a4 } = this.opts;
        if (s = t[a4], s !== void 0 && typeof s != "string") throw new Error("schema ".concat(a4, " must be string"));
      }
      return r = (0, Ps.normalizeId)(r || s), this._checkUnique(r), this.schemas[r] = this._addSchema(t, n, r, i, true), this;
    }
    addMetaSchema(t, r, n = this.opts.validateSchema) {
      return this.addSchema(t, r, true, n), this;
    }
    validateSchema(t, r) {
      if (typeof t == "boolean") return true;
      let n;
      if (n = t.$schema, n !== void 0 && typeof n != "string") throw new Error("$schema must be a string");
      if (n = n || this.opts.defaultMeta || this.defaultMeta(), !n) return this.logger.warn("meta-schema not available"), this.errors = null, true;
      let i = this.validate(n, t);
      if (!i && r) {
        let s = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log") this.logger.error(s);
        else throw new Error(s);
      }
      return i;
    }
    getSchema(t) {
      let r;
      for (; typeof (r = Jb.call(this, t)) == "string"; ) t = r;
      if (r === void 0) {
        let { schemaId: n } = this.opts, i = new ws.SchemaEnv({ schema: {}, schemaId: n });
        if (r = ws.resolveSchema.call(this, i, t), !r) return;
        this.refs[t] = r;
      }
      return r.validate || this._compileSchemaEnv(r);
    }
    removeSchema(t) {
      if (t instanceof RegExp) return this._removeAllSchemas(this.schemas, t), this._removeAllSchemas(this.refs, t), this;
      switch (typeof t) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string": {
          let r = Jb.call(this, t);
          return typeof r == "object" && this._cache.delete(r.schema), delete this.schemas[t], delete this.refs[t], this;
        }
        case "object": {
          let r = t;
          this._cache.delete(r);
          let n = t[this.opts.schemaId];
          return n && (n = (0, Ps.normalizeId)(n), delete this.schemas[n], delete this.refs[n]), this;
        }
        default:
          throw new Error("ajv.removeSchema: invalid parameter");
      }
    }
    addVocabulary(t) {
      for (let r of t) this.addKeyword(r);
      return this;
    }
    addKeyword(t, r) {
      let n;
      if (typeof t == "string") n = t, typeof r == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), r.keyword = n);
      else if (typeof t == "object" && r === void 0) {
        if (r = t, n = r.keyword, Array.isArray(n) && !n.length) throw new Error("addKeywords: keyword must be string or non-empty array");
      } else throw new Error("invalid addKeywords parameters");
      if (Hj.call(this, n, r), !r) return (0, wl.eachItem)(n, (s) => $l.call(this, s)), this;
      Jj.call(this, r);
      let i = G(F({}, r), { type: (0, uc.getJSONTypes)(r.type), schemaType: (0, uc.getJSONTypes)(r.schemaType) });
      return (0, wl.eachItem)(n, i.type.length === 0 ? (s) => $l.call(this, s, i) : (s) => i.type.forEach((a4) => $l.call(this, s, i, a4))), this;
    }
    getKeyword(t) {
      let r = this.RULES.all[t];
      return typeof r == "object" ? r.definition : !!r;
    }
    removeKeyword(t) {
      let { RULES: r } = this;
      delete r.keywords[t], delete r.all[t];
      for (let n of r.rules) {
        let i = n.rules.findIndex((s) => s.keyword === t);
        i >= 0 && n.rules.splice(i, 1);
      }
      return this;
    }
    addFormat(t, r) {
      return typeof r == "string" && (r = new RegExp(r)), this.formats[t] = r, this;
    }
    errorsText(t = this.errors, { separator: r = ", ", dataVar: n = "data" } = {}) {
      return !t || t.length === 0 ? "No errors" : t.map((i) => "".concat(n).concat(i.instancePath, " ").concat(i.message)).reduce((i, s) => i + r + s);
    }
    $dataMetaSchema(t, r) {
      let n = this.RULES.all;
      t = JSON.parse(JSON.stringify(t));
      for (let i of r) {
        let s = i.split("/").slice(1), a4 = t;
        for (let f of s) a4 = a4[f];
        for (let f in n) {
          let p = n[f];
          if (typeof p != "object") continue;
          let { $data: d } = p.definition, l = a4[f];
          d && l && (a4[f] = Qb(l));
        }
      }
      return t;
    }
    _removeAllSchemas(t, r) {
      for (let n in t) {
        let i = t[n];
        (!r || r.test(n)) && (typeof i == "string" ? delete t[n] : i && !i.meta && (this._cache.delete(i.schema), delete t[n]));
      }
    }
    _addSchema(t, r, n, i = this.opts.validateSchema, s = this.opts.addUsedSchema) {
      let a4, { schemaId: f } = this.opts;
      if (typeof t == "object") a4 = t[f];
      else {
        if (this.opts.jtd) throw new Error("schema must be object");
        if (typeof t != "boolean") throw new Error("schema must be object or boolean");
      }
      let p = this._cache.get(t);
      if (p !== void 0) return p;
      n = (0, Ps.normalizeId)(a4 || n);
      let d = Ps.getSchemaRefs.call(this, t, n);
      return p = new ws.SchemaEnv({ schema: t, schemaId: f, meta: r, baseId: n, localRefs: d }), this._cache.set(p.schema, p), s && !n.startsWith("#") && (n && this._checkUnique(n), this.refs[n] = p), i && this.validateSchema(t, true), p;
    }
    _checkUnique(t) {
      if (this.schemas[t] || this.refs[t]) throw new Error('schema with key or id "'.concat(t, '" already exists'));
    }
    _compileSchemaEnv(t) {
      if (t.meta ? this._compileMetaSchema(t) : ws.compileSchema.call(this, t), !t.validate) throw new Error("ajv implementation error");
      return t.validate;
    }
    _compileMetaSchema(t) {
      let r = this.opts;
      this.opts = this._metaOpts;
      try {
        ws.compileSchema.call(this, t);
      } finally {
        this.opts = r;
      }
    }
  };
  H(Pl, "Ajv");
  var Os = Pl;
  Os.ValidationError = kj.default;
  Os.MissingRefError = Yb.default;
  kt.default = Os;
  function Zb(e, t, r, n = "error") {
    for (let i in e) {
      let s = i;
      s in t && this.logger[n]("".concat(r, ": option ").concat(i, ". ").concat(e[s]));
    }
  }
  H(Zb, "checkOptions");
  function Jb(e) {
    return e = (0, Ps.normalizeId)(e), this.schemas[e] || this.refs[e];
  }
  H(Jb, "getSchEnv");
  function qj() {
    let e = this.opts.schemas;
    if (e) if (Array.isArray(e)) this.addSchema(e);
    else for (let t in e) this.addSchema(e[t], t);
  }
  H(qj, "addInitialSchemas");
  function Kj() {
    for (let e in this.opts.formats) {
      let t = this.opts.formats[e];
      t && this.addFormat(e, t);
    }
  }
  H(Kj, "addInitialFormats");
  function zj(e) {
    if (Array.isArray(e)) {
      this.addVocabulary(e);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (let t in e) {
      let r = e[t];
      r.keyword || (r.keyword = t), this.addKeyword(r);
    }
  }
  H(zj, "addInitialKeywords");
  function Gj() {
    let e = F({}, this.opts);
    for (let t of Cj) delete e[t];
    return e;
  }
  H(Gj, "getMetaSchemaOptions");
  var Bj = { log() {
  }, warn() {
  }, error() {
  } };
  function Vj(e) {
    if (e === false) return Bj;
    if (e === void 0) return console;
    if (e.log && e.warn && e.error) return e;
    throw new Error("logger must implement log, warn and error methods");
  }
  H(Vj, "getLogger");
  var Wj = /^[a-z_$][a-z0-9_$:-]*$/i;
  function Hj(e, t) {
    let { RULES: r } = this;
    if ((0, wl.eachItem)(e, (n) => {
      if (r.keywords[n]) throw new Error("Keyword ".concat(n, " is already defined"));
      if (!Wj.test(n)) throw new Error("Keyword ".concat(n, " has invalid name"));
    }), !!t && t.$data && !("code" in t || "validate" in t)) throw new Error('$data keyword must have "code" or "validate" function');
  }
  H(Hj, "checkKeyword");
  function $l(e, t, r) {
    var n;
    let i = t == null ? void 0 : t.post;
    if (r && i) throw new Error('keyword with "post" flag cannot have "type"');
    let { RULES: s } = this, a4 = i ? s.post : s.rules.find(({ type: p }) => p === r);
    if (a4 || (a4 = { type: r, rules: [] }, s.rules.push(a4)), s.keywords[e] = true, !t) return;
    let f = { keyword: e, definition: G(F({}, t), { type: (0, uc.getJSONTypes)(t.type), schemaType: (0, uc.getJSONTypes)(t.schemaType) }) };
    t.before ? Zj.call(this, a4, f, t.before) : a4.rules.push(f), s.all[e] = f, (n = t.implements) === null || n === void 0 || n.forEach((p) => this.addKeyword(p));
  }
  H($l, "addRule");
  function Zj(e, t, r) {
    let n = e.rules.findIndex((i) => i.keyword === r);
    n >= 0 ? e.rules.splice(n, 0, t) : (e.rules.push(t), this.logger.warn("rule ".concat(r, " is not defined")));
  }
  H(Zj, "addBeforeRule");
  function Jj(e) {
    let { metaSchema: t } = e;
    t !== void 0 && (e.$data && this.opts.$data && (t = Qb(t)), e.validateSchema = this.compile(t, true));
  }
  H(Jj, "keywordMetaschema");
  var Yj = { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" };
  function Qb(e) {
    return { anyOf: [e, Yj] };
  }
  H(Qb, "schemaOrData");
});
var t0 = L((Ol) => {
  a();
  Object.defineProperty(Ol, "__esModule", { value: true });
  var Xj = { keyword: "id", code() {
    throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  } };
  Ol.default = Xj;
});
var m0 = L((So) => {
  a();
  Object.defineProperty(So, "__esModule", { value: true });
  So.callRef = So.getValidate = void 0;
  var Qj = bs(), r0 = $r(), ar = me(), ci = Tn(), n0 = sc(), pc = Le(), o0, ek = { keyword: "$ref", schemaType: "string", code(e) {
    let { gen: t, schema: r, it: n } = e, { baseId: i, schemaEnv: s, validateName: a4, opts: f, self: p } = n, { root: d } = s;
    if ((r === "#" || r === "#/") && i === d.baseId) return m4();
    let l = n0.resolveRef.call(p, d, i, r);
    if (l === void 0) throw new Qj.default(n.opts.uriResolver, i, r);
    if (l instanceof n0.SchemaEnv) return g(l);
    return b(l);
    function m4() {
      if (s === d) return lc(e, a4, s, s.$async);
      let P4 = t.scopeValue("root", { ref: d });
      return lc(e, (0, ar._)(o0 || (o0 = T$1(["", ".validate"])), P4), d, d.$async);
    }
    function g(P4) {
      let F4 = d0(e, P4);
      lc(e, F4, P4, P4.$async);
    }
    function b(P4) {
      let F4 = t.scopeValue("schema", f.code.source === true ? { ref: P4, code: (0, ar.stringify)(P4) } : { ref: P4 }), w = t.name("valid"), O4 = e.subschema({ schema: P4, dataTypes: [], schemaPath: ar.nil, topSchemaRef: F4, errSchemaPath: r }, w);
      e.mergeEvaluated(O4), e.ok(w);
    }
  } }, i0;
  function d0(e, t) {
    let { gen: r } = e;
    return t.validate ? r.scopeValue("validate", { ref: t.validate }) : (0, ar._)(i0 || (i0 = T$1(["", ".validate"])), r.scopeValue("wrapper", { ref: t }));
  }
  H(d0, "getValidate");
  So.getValidate = d0;
  var s0, a0, c0, f0, u0, p0, l0;
  function lc(e, t, r, n) {
    let { gen: i, it: s } = e, { allErrors: a4, schemaEnv: f, opts: p } = s, d = p.passContext ? ci.default.this : ar.nil;
    n ? l() : m4();
    function l() {
      if (!f.$async) throw new Error("async schema referenced by sync schema");
      let P4 = i.let("valid");
      i.try(() => {
        i.code((0, ar._)(s0 || (s0 = T$1(["await ", ""])), (0, r0.callValidateCode)(e, t, d))), b(t), a4 || i.assign(P4, true);
      }, (F4) => {
        i.if((0, ar._)(a0 || (a0 = T$1(["!(", " instanceof ", ")"])), F4, s.ValidationError), () => i.throw(F4)), g(F4), a4 || i.assign(P4, false);
      }), e.ok(P4);
    }
    H(l, "callAsyncRef");
    function m4() {
      e.result((0, r0.callValidateCode)(e, t, d), () => b(t), () => g(t));
    }
    H(m4, "callSyncRef");
    function g(P4) {
      let F4 = (0, ar._)(c0 || (c0 = T$1(["", ".errors"])), P4);
      i.assign(ci.default.vErrors, (0, ar._)(f0 || (f0 = T$1(["", " === null ? ", " : ", ".concat(", ")"])), ci.default.vErrors, F4, ci.default.vErrors, F4)), i.assign(ci.default.errors, (0, ar._)(u0 || (u0 = T$1(["", ".length"])), ci.default.vErrors));
    }
    H(g, "addErrorsFrom");
    function b(P4) {
      var F4;
      if (!s.opts.unevaluated) return;
      let w = (F4 = r == null ? void 0 : r.validate) === null || F4 === void 0 ? void 0 : F4.evaluated;
      if (s.props !== true) if (w && !w.dynamicProps) w.props !== void 0 && (s.props = pc.mergeEvaluated.props(i, w.props, s.props));
      else {
        let O4 = i.var("props", (0, ar._)(p0 || (p0 = T$1(["", ".evaluated.props"])), P4));
        s.props = pc.mergeEvaluated.props(i, O4, s.props, ar.Name);
      }
      if (s.items !== true) if (w && !w.dynamicItems) w.items !== void 0 && (s.items = pc.mergeEvaluated.items(i, w.items, s.items));
      else {
        let O4 = i.var("items", (0, ar._)(l0 || (l0 = T$1(["", ".evaluated.items"])), P4));
        s.items = pc.mergeEvaluated.items(i, O4, s.items, ar.Name);
      }
    }
    H(b, "addEvaluatedFrom");
  }
  H(lc, "callRef");
  So.callRef = lc;
  So.default = ek;
});
var y0 = L((Fl) => {
  a();
  Object.defineProperty(Fl, "__esModule", { value: true });
  var tk = t0(), rk = m0(), nk = ["$schema", "$id", "$defs", "$vocabulary", { keyword: "$comment" }, "definitions", tk.default, rk.default];
  Fl.default = nk;
});
var x0 = L((Sl) => {
  a();
  Object.defineProperty(Sl, "__esModule", { value: true });
  var dc = me(), no = dc.operators, mc = { maximum: { okStr: "<=", ok: no.LTE, fail: no.GT }, minimum: { okStr: ">=", ok: no.GTE, fail: no.LT }, exclusiveMaximum: { okStr: "<", ok: no.LT, fail: no.GTE }, exclusiveMinimum: { okStr: ">", ok: no.GT, fail: no.LTE } }, h0, g0, ok = { message: H(({ keyword: e, schemaCode: t }) => (0, dc.str)(h0 || (h0 = T$1(["must be ", " ", ""])), mc[e].okStr, t), "message"), params: H(({ keyword: e, schemaCode: t }) => (0, dc._)(g0 || (g0 = T$1(["{comparison: ", ", limit: ", "}"])), mc[e].okStr, t), "params") }, I0, ik = { keyword: Object.keys(mc), type: "number", schemaType: "number", $data: true, error: ok, code(e) {
    let { keyword: t, data: r, schemaCode: n } = e;
    e.fail$data((0, dc._)(I0 || (I0 = T$1(["", " ", " ", " || isNaN(", ")"])), r, mc[t].fail, n, r));
  } };
  Sl.default = ik;
});
var F0 = L((El) => {
  a();
  Object.defineProperty(El, "__esModule", { value: true });
  var Fs = me(), b0, $0, sk = { message: H(({ schemaCode: e }) => (0, Fs.str)(b0 || (b0 = T$1(["must be multiple of ", ""])), e), "message"), params: H(({ schemaCode: e }) => (0, Fs._)($0 || ($0 = T$1(["{multipleOf: ", "}"])), e), "params") }, w0, P0, O0, ak = { keyword: "multipleOf", type: "number", schemaType: "number", $data: true, error: sk, code(e) {
    let { gen: t, data: r, schemaCode: n, it: i } = e, s = i.opts.multipleOfPrecision, a4 = t.let("res"), f = s ? (0, Fs._)(w0 || (w0 = T$1(["Math.abs(Math.round(", ") - ", ") > 1e-", ""])), a4, a4, s) : (0, Fs._)(P0 || (P0 = T$1(["", " !== parseInt(", ")"])), a4, a4);
    e.fail$data((0, Fs._)(O0 || (O0 = T$1(["(", " === 0 || (", " = ", "/", ", ", "))"])), n, a4, r, n, f));
  } };
  El.default = ak;
});
var E0 = L((Tl) => {
  a();
  Object.defineProperty(Tl, "__esModule", { value: true });
  function S0(e) {
    let t = e.length, r = 0, n = 0, i;
    for (; n < t; ) r++, i = e.charCodeAt(n++), i >= 55296 && i <= 56319 && n < t && (i = e.charCodeAt(n), (i & 64512) === 56320 && n++);
    return r;
  }
  H(S0, "ucs2length");
  Tl.default = S0;
  S0.code = 'require("ajv/dist/runtime/ucs2length").default';
});
var _0 = L((vl) => {
  a();
  Object.defineProperty(vl, "__esModule", { value: true });
  var Eo = me(), ck = Le(), fk = E0(), T0, v0, uk = { message({ keyword: e, schemaCode: t }) {
    let r = e === "maxLength" ? "more" : "fewer";
    return (0, Eo.str)(T0 || (T0 = T$1(["must NOT have ", " than ", " characters"])), r, t);
  }, params: H(({ schemaCode: e }) => (0, Eo._)(v0 || (v0 = T$1(["{limit: ", "}"])), e), "params") }, A0, j0, k0, pk = { keyword: ["maxLength", "minLength"], type: "string", schemaType: "number", $data: true, error: uk, code(e) {
    let { keyword: t, data: r, schemaCode: n, it: i } = e, s = t === "maxLength" ? Eo.operators.GT : Eo.operators.LT, a4 = i.opts.unicode === false ? (0, Eo._)(A0 || (A0 = T$1(["", ".length"])), r) : (0, Eo._)(j0 || (j0 = T$1(["", "(", ")"])), (0, ck.useFunc)(e.gen, fk.default), r);
    e.fail$data((0, Eo._)(k0 || (k0 = T$1(["", " ", " ", ""])), a4, s, n));
  } };
  vl.default = pk;
});
var L0 = L((Al) => {
  a();
  Object.defineProperty(Al, "__esModule", { value: true });
  var lk = $r(), yc = me(), N0, R0, dk = { message: H(({ schemaCode: e }) => (0, yc.str)(N0 || (N0 = T$1(['must match pattern "', '"'])), e), "message"), params: H(({ schemaCode: e }) => (0, yc._)(R0 || (R0 = T$1(["{pattern: ", "}"])), e), "params") }, C0, M0, mk = { keyword: "pattern", type: "string", schemaType: "string", $data: true, error: dk, code(e) {
    let { data: t, $data: r, schema: n, schemaCode: i, it: s } = e, a4 = s.opts.unicodeRegExp ? "u" : "", f = r ? (0, yc._)(C0 || (C0 = T$1(["(new RegExp(", ", ", "))"])), i, a4) : (0, lk.usePattern)(e, n);
    e.fail$data((0, yc._)(M0 || (M0 = T$1(["!", ".test(", ")"])), f, t));
  } };
  Al.default = mk;
});
var K0 = L((jl) => {
  a();
  Object.defineProperty(jl, "__esModule", { value: true });
  var Ss = me(), U0, D0, yk = { message({ keyword: e, schemaCode: t }) {
    let r = e === "maxProperties" ? "more" : "fewer";
    return (0, Ss.str)(U0 || (U0 = T$1(["must NOT have ", " than ", " properties"])), r, t);
  }, params: H(({ schemaCode: e }) => (0, Ss._)(D0 || (D0 = T$1(["{limit: ", "}"])), e), "params") }, q0, hk = { keyword: ["maxProperties", "minProperties"], type: "object", schemaType: "number", $data: true, error: yk, code(e) {
    let { keyword: t, data: r, schemaCode: n } = e, i = t === "maxProperties" ? Ss.operators.GT : Ss.operators.LT;
    e.fail$data((0, Ss._)(q0 || (q0 = T$1(["Object.keys(", ").length ", " ", ""])), r, i, n));
  } };
  jl.default = hk;
});
var B0 = L((kl) => {
  a();
  Object.defineProperty(kl, "__esModule", { value: true });
  var Es = $r(), Ts = me(), gk = Le(), z0, G0, Ik = { message: H(({ params: { missingProperty: e } }) => (0, Ts.str)(z0 || (z0 = T$1(["must have required property '", "'"])), e), "message"), params: H(({ params: { missingProperty: e } }) => (0, Ts._)(G0 || (G0 = T$1(["{missingProperty: ", "}"])), e), "params") }, xk = { keyword: "required", type: "object", schemaType: "array", $data: true, error: Ik, code(e) {
    let { gen: t, schema: r, schemaCode: n, data: i, $data: s, it: a4 } = e, { opts: f } = a4;
    if (!s && r.length === 0) return;
    let p = r.length >= f.loopRequired;
    if (a4.allErrors ? d() : l(), f.strictRequired) {
      let b = e.parentSchema.properties, { definedProperties: P4 } = e.it;
      for (let F4 of r) if ((b == null ? void 0 : b[F4]) === void 0 && !P4.has(F4)) {
        let w = a4.schemaEnv.baseId + a4.errSchemaPath, O4 = 'required property "'.concat(F4, '" is not defined at "').concat(w, '" (strictRequired)');
        (0, gk.checkStrictMode)(a4, O4, a4.opts.strictRequired);
      }
    }
    function d() {
      if (p || s) e.block$data(Ts.nil, m4);
      else for (let b of r) (0, Es.checkReportMissingProp)(e, b);
    }
    H(d, "allErrorsMode");
    function l() {
      let b = t.let("missing");
      if (p || s) {
        let P4 = t.let("valid", true);
        e.block$data(P4, () => g(b, P4)), e.ok(P4);
      } else t.if((0, Es.checkMissingProp)(e, r, b)), (0, Es.reportMissingProp)(e, b), t.else();
    }
    H(l, "exitOnErrorMode");
    function m4() {
      t.forOf("prop", n, (b) => {
        e.setParams({ missingProperty: b }), t.if((0, Es.noPropertyInData)(t, i, b, f.ownProperties), () => e.error());
      });
    }
    H(m4, "loopAllRequired");
    function g(b, P4) {
      e.setParams({ missingProperty: b }), t.forOf(b, n, () => {
        t.assign(P4, (0, Es.propertyInData)(t, i, b, f.ownProperties)), t.if((0, Ts.not)(P4), () => {
          e.error(), t.break();
        });
      }, Ts.nil);
    }
    H(g, "loopUntilMissing");
  } };
  kl.default = xk;
});
var Z0 = L((_l) => {
  a();
  Object.defineProperty(_l, "__esModule", { value: true });
  var vs = me(), V0, W0, bk = { message({ keyword: e, schemaCode: t }) {
    let r = e === "maxItems" ? "more" : "fewer";
    return (0, vs.str)(V0 || (V0 = T$1(["must NOT have ", " than ", " items"])), r, t);
  }, params: H(({ schemaCode: e }) => (0, vs._)(W0 || (W0 = T$1(["{limit: ", "}"])), e), "params") }, H0, $k = { keyword: ["maxItems", "minItems"], type: "array", schemaType: "number", $data: true, error: bk, code(e) {
    let { keyword: t, data: r, schemaCode: n } = e, i = t === "maxItems" ? vs.operators.GT : vs.operators.LT;
    e.fail$data((0, vs._)(H0 || (H0 = T$1(["", ".length ", " ", ""])), r, i, n));
  } };
  _l.default = $k;
});
var hc = L((Nl) => {
  a();
  Object.defineProperty(Nl, "__esModule", { value: true });
  var J0 = el();
  J0.code = 'require("ajv/dist/runtime/equal").default';
  Nl.default = J0;
});
var m$ = L((Cl) => {
  a();
  Object.defineProperty(Cl, "__esModule", { value: true });
  var Rl = ys(), _t = me(), wk = Le(), Pk = hc(), Y0, X0, Ok = { message: H(({ params: { i: e, j: t } }) => (0, _t.str)(Y0 || (Y0 = T$1(["must NOT have duplicate items (items ## ", " and ", " are identical)"])), t, e), "message"), params: H(({ params: { i: e, j: t } }) => (0, _t._)(X0 || (X0 = T$1(["{i: ", ", j: ", "}"])), e, t), "params") }, Q0, e$, t$, r$, n$, o$, i$, s$, a$, c$, f$, u$, p$, l$, d$, Fk = { keyword: "uniqueItems", type: "array", schemaType: "boolean", $data: true, error: Ok, code(e) {
    let { gen: t, data: r, $data: n, schema: i, parentSchema: s, schemaCode: a4, it: f } = e;
    if (!n && !i) return;
    let p = t.let("valid"), d = s.items ? (0, Rl.getSchemaTypes)(s.items) : [];
    e.block$data(p, l, (0, _t._)(Q0 || (Q0 = T$1(["", " === false"])), a4)), e.ok(p);
    function l() {
      let P4 = t.let("i", (0, _t._)(e$ || (e$ = T$1(["", ".length"])), r)), F4 = t.let("j");
      e.setParams({ i: P4, j: F4 }), t.assign(p, true), t.if((0, _t._)(t$ || (t$ = T$1(["", " > 1"])), P4), () => (m4() ? g : b)(P4, F4));
    }
    H(l, "validateUniqueItems");
    function m4() {
      return d.length > 0 && !d.some((P4) => P4 === "object" || P4 === "array");
    }
    H(m4, "canOptimize");
    function g(P4, F4) {
      let w = t.name("item"), O4 = (0, Rl.checkDataTypes)(d, w, f.opts.strictNumbers, Rl.DataType.Wrong), N4 = t.const("indices", (0, _t._)(r$ || (r$ = T$1(["{}"]))));
      t.for((0, _t._)(n$ || (n$ = T$1([";", "--;"])), P4), () => {
        t.let(w, (0, _t._)(o$ || (o$ = T$1(["", "[", "]"])), r, P4)), t.if(O4, (0, _t._)(i$ || (i$ = T$1(["continue"])))), d.length > 1 && t.if((0, _t._)(s$ || (s$ = T$1(["typeof ", ' == "string"'])), w), (0, _t._)(a$ || (a$ = T$1(["", ' += "_"'])), w)), t.if((0, _t._)(c$ || (c$ = T$1(["typeof ", "[", '] == "number"'])), N4, w), () => {
          t.assign(F4, (0, _t._)(f$ || (f$ = T$1(["", "[", "]"])), N4, w)), e.error(), t.assign(p, false).break();
        }).code((0, _t._)(u$ || (u$ = T$1(["", "[", "] = ", ""])), N4, w, P4));
      });
    }
    H(g, "loopN");
    function b(P4, F4) {
      let w = (0, wk.useFunc)(t, Pk.default), O4 = t.name("outer");
      t.label(O4).for((0, _t._)(p$ || (p$ = T$1([";", "--;"])), P4), () => t.for((0, _t._)(l$ || (l$ = T$1(["", " = ", "; ", "--;"])), F4, P4, F4), () => t.if((0, _t._)(d$ || (d$ = T$1(["", "(", "[", "], ", "[", "])"])), w, r, P4, r, F4), () => {
        e.error(), t.assign(p, false).break(O4);
      })));
    }
    H(b, "loopN2");
  } };
  Cl.default = Fk;
});
var I$ = L((Ll) => {
  a();
  Object.defineProperty(Ll, "__esModule", { value: true });
  var Ml = me(), Sk = Le(), Ek = hc(), y$, Tk = { message: "must be equal to constant", params: H(({ schemaCode: e }) => (0, Ml._)(y$ || (y$ = T$1(["{allowedValue: ", "}"])), e), "params") }, h$, g$, vk = { keyword: "const", $data: true, error: Tk, code(e) {
    let { gen: t, data: r, $data: n, schemaCode: i, schema: s } = e;
    n || s && typeof s == "object" ? e.fail$data((0, Ml._)(h$ || (h$ = T$1(["!", "(", ", ", ")"])), (0, Sk.useFunc)(t, Ek.default), r, i)) : e.fail((0, Ml._)(g$ || (g$ = T$1(["", " !== ", ""])), s, r));
  } };
  Ll.default = vk;
});
var P$ = L((Ul) => {
  a();
  Object.defineProperty(Ul, "__esModule", { value: true });
  var As = me(), Ak = Le(), jk = hc(), x$, kk = { message: "must be equal to one of the allowed values", params: H(({ schemaCode: e }) => (0, As._)(x$ || (x$ = T$1(["{allowedValues: ", "}"])), e), "params") }, b$, $$, w$, _k = { keyword: "enum", schemaType: "array", $data: true, error: kk, code(e) {
    let { gen: t, data: r, $data: n, schema: i, schemaCode: s, it: a4 } = e;
    if (!n && i.length === 0) throw new Error("enum must have non-empty array");
    let f = i.length >= a4.opts.loopEnum, p, d = H(() => p != null ? p : p = (0, Ak.useFunc)(t, jk.default), "getEql"), l;
    if (f || n) l = t.let("valid"), e.block$data(l, m4);
    else {
      if (!Array.isArray(i)) throw new Error("ajv implementation error");
      let b = t.const("vSchema", s);
      l = (0, As.or)(...i.map((P4, F4) => g(b, F4)));
    }
    e.pass(l);
    function m4() {
      t.assign(l, false), t.forOf("v", s, (b) => t.if((0, As._)(b$ || (b$ = T$1(["", "(", ", ", ")"])), d(), r, b), () => t.assign(l, true).break()));
    }
    H(m4, "loopEnum");
    function g(b, P4) {
      let F4 = i[P4];
      return typeof F4 == "object" && F4 !== null ? (0, As._)($$ || ($$ = T$1(["", "(", ", ", "[", "])"])), d(), r, b, P4) : (0, As._)(w$ || (w$ = T$1(["", " === ", ""])), r, F4);
    }
    H(g, "equalCode");
  } };
  Ul.default = _k;
});
var O$ = L((Dl) => {
  a();
  Object.defineProperty(Dl, "__esModule", { value: true });
  var Nk = x0(), Rk = F0(), Ck = _0(), Mk = L0(), Lk = K0(), Uk = B0(), Dk = Z0(), qk = m$(), Kk = I$(), zk = P$(), Gk = [Nk.default, Rk.default, Ck.default, Mk.default, Lk.default, Uk.default, Dk.default, qk.default, { keyword: "type", schemaType: ["string", "array"] }, { keyword: "nullable", schemaType: "boolean" }, Kk.default, zk.default];
  Dl.default = Gk;
});
var Kl = L((js) => {
  a();
  Object.defineProperty(js, "__esModule", { value: true });
  js.validateAdditionalItems = void 0;
  var To = me(), ql = Le(), F$, S$, Bk = { message: H(({ params: { len: e } }) => (0, To.str)(F$ || (F$ = T$1(["must NOT have more than ", " items"])), e), "message"), params: H(({ params: { len: e } }) => (0, To._)(S$ || (S$ = T$1(["{limit: ", "}"])), e), "params") }, Vk = { keyword: "additionalItems", type: "array", schemaType: ["boolean", "object"], before: "uniqueItems", error: Bk, code(e) {
    let { parentSchema: t, it: r } = e, { items: n } = t;
    if (!Array.isArray(n)) {
      (0, ql.checkStrictMode)(r, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    A$(e, n);
  } }, E$, T$, v$;
  function A$(e, t) {
    let { gen: r, schema: n, data: i, keyword: s, it: a4 } = e;
    a4.items = true;
    let f = r.const("len", (0, To._)(E$ || (E$ = T$1(["", ".length"])), i));
    if (n === false) e.setParams({ len: t.length }), e.pass((0, To._)(T$ || (T$ = T$1(["", " <= ", ""])), f, t.length));
    else if (typeof n == "object" && !(0, ql.alwaysValidSchema)(a4, n)) {
      let d = r.var("valid", (0, To._)(v$ || (v$ = T$1(["", " <= ", ""])), f, t.length));
      r.if((0, To.not)(d), () => p(d)), e.ok(d);
    }
    function p(d) {
      r.forRange("i", t.length, f, (l) => {
        e.subschema({ keyword: s, dataProp: l, dataPropType: ql.Type.Num }, d), a4.allErrors || r.if((0, To.not)(d), () => r.break());
      });
    }
    H(p, "validateItems");
  }
  H(A$, "validateAdditionalItems");
  js.validateAdditionalItems = A$;
  js.default = Vk;
});
var zl = L((ks) => {
  a();
  Object.defineProperty(ks, "__esModule", { value: true });
  ks.validateTuple = void 0;
  var j$ = me(), gc = Le(), Wk = $r(), Hk = { keyword: "items", type: "array", schemaType: ["object", "array", "boolean"], before: "uniqueItems", code(e) {
    let { schema: t, it: r } = e;
    if (Array.isArray(t)) return N$(e, "additionalItems", t);
    r.items = true, !(0, gc.alwaysValidSchema)(r, t) && e.ok((0, Wk.validateArray)(e));
  } }, k$, _$;
  function N$(e, t, r = e.schema) {
    let { gen: n, parentSchema: i, data: s, keyword: a4, it: f } = e;
    l(i), f.opts.unevaluated && r.length && f.items !== true && (f.items = gc.mergeEvaluated.items(n, r.length, f.items));
    let p = n.name("valid"), d = n.const("len", (0, j$._)(k$ || (k$ = T$1(["", ".length"])), s));
    r.forEach((m4, g) => {
      (0, gc.alwaysValidSchema)(f, m4) || (n.if((0, j$._)(_$ || (_$ = T$1(["", " > ", ""])), d, g), () => e.subschema({ keyword: a4, schemaProp: g, dataProp: g }, p)), e.ok(p));
    });
    function l(m4) {
      let { opts: g, errSchemaPath: b } = f, P4 = r.length, F4 = P4 === m4.minItems && (P4 === m4.maxItems || m4[t] === false);
      if (g.strictTuples && !F4) {
        let w = '"'.concat(a4, '" is ').concat(P4, "-tuple, but minItems or maxItems/").concat(t, ' are not specified or different at path "').concat(b, '"');
        (0, gc.checkStrictMode)(f, w, g.strictTuples);
      }
    }
    H(l, "checkStrictTuple");
  }
  H(N$, "validateTuple");
  ks.validateTuple = N$;
  ks.default = Hk;
});
var R$ = L((Gl) => {
  a();
  Object.defineProperty(Gl, "__esModule", { value: true });
  var Zk = zl(), Jk = { keyword: "prefixItems", type: "array", schemaType: ["array"], before: "uniqueItems", code: H((e) => (0, Zk.validateTuple)(e, "items"), "code") };
  Gl.default = Jk;
});
var U$ = L((Bl) => {
  a();
  Object.defineProperty(Bl, "__esModule", { value: true });
  var C$ = me(), Yk = Le(), Xk = $r(), Qk = Kl(), M$, L$, e_ = { message: H(({ params: { len: e } }) => (0, C$.str)(M$ || (M$ = T$1(["must NOT have more than ", " items"])), e), "message"), params: H(({ params: { len: e } }) => (0, C$._)(L$ || (L$ = T$1(["{limit: ", "}"])), e), "params") }, t_ = { keyword: "items", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", error: e_, code(e) {
    let { schema: t, parentSchema: r, it: n } = e, { prefixItems: i } = r;
    n.items = true, !(0, Yk.alwaysValidSchema)(n, t) && (i ? (0, Qk.validateAdditionalItems)(e, i) : e.ok((0, Xk.validateArray)(e)));
  } };
  Bl.default = t_;
});
var X$ = L((Vl) => {
  a();
  Object.defineProperty(Vl, "__esModule", { value: true });
  var Pr = me(), Ic = Le(), D$, q$, K$, z$, r_ = { message: H(({ params: { min: e, max: t } }) => t === void 0 ? (0, Pr.str)(D$ || (D$ = T$1(["must contain at least ", " valid item(s)"])), e) : (0, Pr.str)(q$ || (q$ = T$1(["must contain at least ", " and no more than ", " valid item(s)"])), e, t), "message"), params: H(({ params: { min: e, max: t } }) => t === void 0 ? (0, Pr._)(K$ || (K$ = T$1(["{minContains: ", "}"])), e) : (0, Pr._)(z$ || (z$ = T$1(["{minContains: ", ", maxContains: ", "}"])), e, t), "params") }, G$, B$, V$, W$, H$, Z$, J$, Y$, n_ = { keyword: "contains", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", trackErrors: true, error: r_, code(e) {
    let { gen: t, schema: r, parentSchema: n, data: i, it: s } = e, a4, f, { minContains: p, maxContains: d } = n;
    s.opts.next ? (a4 = p === void 0 ? 1 : p, f = d) : a4 = 1;
    let l = t.const("len", (0, Pr._)(G$ || (G$ = T$1(["", ".length"])), i));
    if (e.setParams({ min: a4, max: f }), f === void 0 && a4 === 0) {
      (0, Ic.checkStrictMode)(s, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      return;
    }
    if (f !== void 0 && a4 > f) {
      (0, Ic.checkStrictMode)(s, '"minContains" > "maxContains" is always invalid'), e.fail();
      return;
    }
    if ((0, Ic.alwaysValidSchema)(s, r)) {
      let F4 = (0, Pr._)(B$ || (B$ = T$1(["", " >= ", ""])), l, a4);
      f !== void 0 && (F4 = (0, Pr._)(V$ || (V$ = T$1(["", " && ", " <= ", ""])), F4, l, f)), e.pass(F4);
      return;
    }
    s.items = true;
    let m4 = t.name("valid");
    f === void 0 && a4 === 1 ? b(m4, () => t.if(m4, () => t.break())) : a4 === 0 ? (t.let(m4, true), f !== void 0 && t.if((0, Pr._)(W$ || (W$ = T$1(["", ".length > 0"])), i), g)) : (t.let(m4, false), g()), e.result(m4, () => e.reset());
    function g() {
      let F4 = t.name("_valid"), w = t.let("count", 0);
      b(F4, () => t.if(F4, () => P4(w)));
    }
    H(g, "validateItemsWithCount");
    function b(F4, w) {
      t.forRange("i", 0, l, (O4) => {
        e.subschema({ keyword: "contains", dataProp: O4, dataPropType: Ic.Type.Num, compositeRule: true }, F4), w();
      });
    }
    H(b, "validateItems");
    function P4(F4) {
      t.code((0, Pr._)(H$ || (H$ = T$1(["", "++"])), F4)), f === void 0 ? t.if((0, Pr._)(Z$ || (Z$ = T$1(["", " >= ", ""])), F4, a4), () => t.assign(m4, true).break()) : (t.if((0, Pr._)(J$ || (J$ = T$1(["", " > ", ""])), F4, f), () => t.assign(m4, false).break()), a4 === 1 ? t.assign(m4, true) : t.if((0, Pr._)(Y$ || (Y$ = T$1(["", " >= ", ""])), F4, a4), () => t.assign(m4, true)));
    }
    H(P4, "checkLimits");
  } };
  Vl.default = n_;
});
var ow = L((sn) => {
  a();
  Object.defineProperty(sn, "__esModule", { value: true });
  sn.validateSchemaDeps = sn.validatePropertyDeps = sn.error = void 0;
  var Wl = me(), o_ = Le(), _s = $r(), Q$, ew;
  sn.error = { message: H(({ params: { property: e, depsCount: t, deps: r } }) => {
    let n = t === 1 ? "property" : "properties";
    return (0, Wl.str)(Q$ || (Q$ = T$1(["must have ", " ", " when property ", " is present"])), n, r, e);
  }, "message"), params: H(({ params: { property: e, depsCount: t, deps: r, missingProperty: n } }) => (0, Wl._)(ew || (ew = T$1(["{property: ", ",\n    missingProperty: ", ",\n    depsCount: ", ",\n    deps: ", "}"])), e, n, t, r), "params") };
  var i_ = { keyword: "dependencies", type: "object", schemaType: "object", error: sn.error, code(e) {
    let [t, r] = s_(e);
    rw(e, t), nw(e, r);
  } };
  function s_({ schema: e }) {
    let t = {}, r = {};
    for (let n in e) {
      if (n === "__proto__") continue;
      let i = Array.isArray(e[n]) ? t : r;
      i[n] = e[n];
    }
    return [t, r];
  }
  H(s_, "splitDependencies");
  var tw;
  function rw(e, t = e.schema) {
    let { gen: r, data: n, it: i } = e;
    if (Object.keys(t).length === 0) return;
    let s = r.let("missing");
    for (let a4 in t) {
      let f = t[a4];
      if (f.length === 0) continue;
      let p = (0, _s.propertyInData)(r, n, a4, i.opts.ownProperties);
      e.setParams({ property: a4, depsCount: f.length, deps: f.join(", ") }), i.allErrors ? r.if(p, () => {
        for (let d of f) (0, _s.checkReportMissingProp)(e, d);
      }) : (r.if((0, Wl._)(tw || (tw = T$1(["", " && (", ")"])), p, (0, _s.checkMissingProp)(e, f, s))), (0, _s.reportMissingProp)(e, s), r.else());
    }
  }
  H(rw, "validatePropertyDeps");
  sn.validatePropertyDeps = rw;
  function nw(e, t = e.schema) {
    let { gen: r, data: n, keyword: i, it: s } = e, a4 = r.name("valid");
    for (let f in t) (0, o_.alwaysValidSchema)(s, t[f]) || (r.if((0, _s.propertyInData)(r, n, f, s.opts.ownProperties), () => {
      let p = e.subschema({ keyword: i, schemaProp: f }, a4);
      e.mergeValidEvaluated(p, a4);
    }, () => r.var(a4, true)), e.ok(a4));
  }
  H(nw, "validateSchemaDeps");
  sn.validateSchemaDeps = nw;
  sn.default = i_;
});
var aw = L((Hl) => {
  a();
  Object.defineProperty(Hl, "__esModule", { value: true });
  var sw = me(), a_ = Le(), iw, c_ = { message: "property name must be valid", params: H(({ params: e }) => (0, sw._)(iw || (iw = T$1(["{propertyName: ", "}"])), e.propertyName), "params") }, f_ = { keyword: "propertyNames", type: "object", schemaType: ["object", "boolean"], error: c_, code(e) {
    let { gen: t, schema: r, data: n, it: i } = e;
    if ((0, a_.alwaysValidSchema)(i, r)) return;
    let s = t.name("valid");
    t.forIn("key", n, (a4) => {
      e.setParams({ propertyName: a4 }), e.subschema({ keyword: "propertyNames", data: a4, dataTypes: ["string"], propertyName: a4, compositeRule: true }, s), t.if((0, sw.not)(s), () => {
        e.error(true), i.allErrors || t.break();
      });
    }), e.ok(s);
  } };
  Hl.default = f_;
});
var Jl = L((Zl) => {
  a();
  Object.defineProperty(Zl, "__esModule", { value: true });
  var xc = $r(), zr = me(), u_ = Tn(), bc = Le(), cw, p_ = { message: "must NOT have additional properties", params: H(({ params: e }) => (0, zr._)(cw || (cw = T$1(["{additionalProperty: ", "}"])), e.additionalProperty), "params") }, fw, uw, pw, lw, l_ = { keyword: "additionalProperties", type: ["object"], schemaType: ["boolean", "object"], allowUndefined: true, trackErrors: true, error: p_, code(e) {
    let { gen: t, schema: r, parentSchema: n, data: i, errsCount: s, it: a4 } = e;
    if (!s) throw new Error("ajv implementation error");
    let { allErrors: f, opts: p } = a4;
    if (a4.props = true, p.removeAdditional !== "all" && (0, bc.alwaysValidSchema)(a4, r)) return;
    let d = (0, xc.allSchemaProperties)(n.properties), l = (0, xc.allSchemaProperties)(n.patternProperties);
    m4(), e.ok((0, zr._)(fw || (fw = T$1(["", " === ", ""])), s, u_.default.errors));
    function m4() {
      t.forIn("key", i, (w) => {
        !d.length && !l.length ? P4(w) : t.if(g(w), () => P4(w));
      });
    }
    H(m4, "checkAdditionalProperties");
    function g(w) {
      let O4;
      if (d.length > 8) {
        let N4 = (0, bc.schemaRefOrVal)(a4, n.properties, "properties");
        O4 = (0, xc.isOwnProperty)(t, N4, w);
      } else d.length ? O4 = (0, zr.or)(...d.map((N4) => (0, zr._)(uw || (uw = T$1(["", " === ", ""])), w, N4))) : O4 = zr.nil;
      return l.length && (O4 = (0, zr.or)(O4, ...l.map((N4) => (0, zr._)(pw || (pw = T$1(["", ".test(", ")"])), (0, xc.usePattern)(e, N4), w)))), (0, zr.not)(O4);
    }
    H(g, "isAdditional");
    function b(w) {
      t.code((0, zr._)(lw || (lw = T$1(["delete ", "[", "]"])), i, w));
    }
    H(b, "deleteAdditional");
    function P4(w) {
      if (p.removeAdditional === "all" || p.removeAdditional && r === false) {
        b(w);
        return;
      }
      if (r === false) {
        e.setParams({ additionalProperty: w }), e.error(), f || t.break();
        return;
      }
      if (typeof r == "object" && !(0, bc.alwaysValidSchema)(a4, r)) {
        let O4 = t.name("valid");
        p.removeAdditional === "failing" ? (F4(w, O4, false), t.if((0, zr.not)(O4), () => {
          e.reset(), b(w);
        })) : (F4(w, O4), f || t.if((0, zr.not)(O4), () => t.break()));
      }
    }
    H(P4, "additionalPropertyCode");
    function F4(w, O4, N4) {
      let A = { keyword: "additionalProperties", dataProp: w, dataPropType: bc.Type.Str };
      N4 === false && Object.assign(A, { compositeRule: true, createErrors: false, allErrors: false }), e.subschema(A, O4);
    }
    H(F4, "applyAdditionalSchema");
  } };
  Zl.default = l_;
});
var yw = L((Xl) => {
  a();
  Object.defineProperty(Xl, "__esModule", { value: true });
  var d_ = xs(), dw = $r(), Yl = Le(), mw = Jl(), m_ = { keyword: "properties", type: "object", schemaType: "object", code(e) {
    let { gen: t, schema: r, parentSchema: n, data: i, it: s } = e;
    s.opts.removeAdditional === "all" && n.additionalProperties === void 0 && mw.default.code(new d_.KeywordCxt(s, mw.default, "additionalProperties"));
    let a4 = (0, dw.allSchemaProperties)(r);
    for (let m4 of a4) s.definedProperties.add(m4);
    s.opts.unevaluated && a4.length && s.props !== true && (s.props = Yl.mergeEvaluated.props(t, (0, Yl.toHash)(a4), s.props));
    let f = a4.filter((m4) => !(0, Yl.alwaysValidSchema)(s, r[m4]));
    if (f.length === 0) return;
    let p = t.name("valid");
    for (let m4 of f) d(m4) ? l(m4) : (t.if((0, dw.propertyInData)(t, i, m4, s.opts.ownProperties)), l(m4), s.allErrors || t.else().var(p, true), t.endIf()), e.it.definedProperties.add(m4), e.ok(p);
    function d(m4) {
      return s.opts.useDefaults && !s.compositeRule && r[m4].default !== void 0;
    }
    H(d, "hasDefault");
    function l(m4) {
      e.subschema({ keyword: "properties", schemaProp: m4, dataProp: m4 }, p);
    }
    H(l, "applyPropertySchema");
  } };
  Xl.default = m_;
});
var $w = L((Ql) => {
  a();
  Object.defineProperty(Ql, "__esModule", { value: true });
  var hw = $r(), $c = me(), gw = Le(), Iw = Le(), xw, bw, y_ = { keyword: "patternProperties", type: "object", schemaType: "object", code(e) {
    let { gen: t, schema: r, data: n, parentSchema: i, it: s } = e, { opts: a4 } = s, f = (0, hw.allSchemaProperties)(r), p = f.filter((F4) => (0, gw.alwaysValidSchema)(s, r[F4]));
    if (f.length === 0 || p.length === f.length && (!s.opts.unevaluated || s.props === true)) return;
    let d = a4.strictSchema && !a4.allowMatchingProperties && i.properties, l = t.name("valid");
    s.props !== true && !(s.props instanceof $c.Name) && (s.props = (0, Iw.evaluatedPropsToName)(t, s.props));
    let { props: m4 } = s;
    g();
    function g() {
      for (let F4 of f) d && b(F4), s.allErrors ? P4(F4) : (t.var(l, true), P4(F4), t.if(l));
    }
    H(g, "validatePatternProperties");
    function b(F4) {
      for (let w in d) new RegExp(F4).test(w) && (0, gw.checkStrictMode)(s, "property ".concat(w, " matches pattern ").concat(F4, " (use allowMatchingProperties)"));
    }
    H(b, "checkMatchingProperties");
    function P4(F4) {
      t.forIn("key", n, (w) => {
        t.if((0, $c._)(xw || (xw = T$1(["", ".test(", ")"])), (0, hw.usePattern)(e, F4), w), () => {
          let O4 = p.includes(F4);
          O4 || e.subschema({ keyword: "patternProperties", schemaProp: F4, dataProp: w, dataPropType: Iw.Type.Str }, l), s.opts.unevaluated && m4 !== true ? t.assign((0, $c._)(bw || (bw = T$1(["", "[", "]"])), m4, w), true) : !O4 && !s.allErrors && t.if((0, $c.not)(l), () => t.break());
        });
      });
    }
    H(P4, "validateProperties");
  } };
  Ql.default = y_;
});
var ww = L((ed) => {
  a();
  Object.defineProperty(ed, "__esModule", { value: true });
  var h_ = Le(), g_ = { keyword: "not", schemaType: ["object", "boolean"], trackErrors: true, code(e) {
    let { gen: t, schema: r, it: n } = e;
    if ((0, h_.alwaysValidSchema)(n, r)) {
      e.fail();
      return;
    }
    let i = t.name("valid");
    e.subschema({ keyword: "not", compositeRule: true, createErrors: false, allErrors: false }, i), e.failResult(i, () => e.reset(), () => e.error());
  }, error: { message: "must NOT be valid" } };
  ed.default = g_;
});
var Pw = L((td) => {
  a();
  Object.defineProperty(td, "__esModule", { value: true });
  var I_ = $r(), x_ = { keyword: "anyOf", schemaType: "array", trackErrors: true, code: I_.validateUnion, error: { message: "must match a schema in anyOf" } };
  td.default = x_;
});
var Ew = L((rd) => {
  a();
  Object.defineProperty(rd, "__esModule", { value: true });
  var wc = me(), b_ = Le(), Ow, $_ = { message: "must match exactly one schema in oneOf", params: H(({ params: e }) => (0, wc._)(Ow || (Ow = T$1(["{passingSchemas: ", "}"])), e.passing), "params") }, Fw, Sw, w_ = { keyword: "oneOf", schemaType: "array", trackErrors: true, error: $_, code(e) {
    let { gen: t, schema: r, parentSchema: n, it: i } = e;
    if (!Array.isArray(r)) throw new Error("ajv implementation error");
    if (i.opts.discriminator && n.discriminator) return;
    let s = r, a4 = t.let("valid", false), f = t.let("passing", null), p = t.name("_valid");
    e.setParams({ passing: f }), t.block(d), e.result(a4, () => e.reset(), () => e.error(true));
    function d() {
      s.forEach((l, m4) => {
        let g;
        (0, b_.alwaysValidSchema)(i, l) ? t.var(p, true) : g = e.subschema({ keyword: "oneOf", schemaProp: m4, compositeRule: true }, p), m4 > 0 && t.if((0, wc._)(Fw || (Fw = T$1(["", " && ", ""])), p, a4)).assign(a4, false).assign(f, (0, wc._)(Sw || (Sw = T$1(["[", ", ", "]"])), f, m4)).else(), t.if(p, () => {
          t.assign(a4, true), t.assign(f, m4), g && e.mergeEvaluated(g, wc.Name);
        });
      });
    }
    H(d, "validateOneOf");
  } };
  rd.default = w_;
});
var Tw = L((nd) => {
  a();
  Object.defineProperty(nd, "__esModule", { value: true });
  var P_ = Le(), O_ = { keyword: "allOf", schemaType: "array", code(e) {
    let { gen: t, schema: r, it: n } = e;
    if (!Array.isArray(r)) throw new Error("ajv implementation error");
    let i = t.name("valid");
    r.forEach((s, a4) => {
      if ((0, P_.alwaysValidSchema)(n, s)) return;
      let f = e.subschema({ keyword: "allOf", schemaProp: a4 }, i);
      e.ok(i), e.mergeEvaluated(f);
    });
  } };
  nd.default = O_;
});
var Nw = L((od) => {
  a();
  Object.defineProperty(od, "__esModule", { value: true });
  var Pc = me(), _w = Le(), Aw, jw, F_ = { message: H(({ params: e }) => (0, Pc.str)(Aw || (Aw = T$1(['must match "', '" schema'])), e.ifClause), "message"), params: H(({ params: e }) => (0, Pc._)(jw || (jw = T$1(["{failingKeyword: ", "}"])), e.ifClause), "params") }, kw, S_ = { keyword: "if", schemaType: ["object", "boolean"], trackErrors: true, error: F_, code(e) {
    let { gen: t, parentSchema: r, it: n } = e;
    r.then === void 0 && r.else === void 0 && (0, _w.checkStrictMode)(n, '"if" without "then" and "else" is ignored');
    let i = vw(n, "then"), s = vw(n, "else");
    if (!i && !s) return;
    let a4 = t.let("valid", true), f = t.name("_valid");
    if (p(), e.reset(), i && s) {
      let l = t.let("ifClause");
      e.setParams({ ifClause: l }), t.if(f, d("then", l), d("else", l));
    } else i ? t.if(f, d("then")) : t.if((0, Pc.not)(f), d("else"));
    e.pass(a4, () => e.error(true));
    function p() {
      let l = e.subschema({ keyword: "if", compositeRule: true, createErrors: false, allErrors: false }, f);
      e.mergeEvaluated(l);
    }
    H(p, "validateIf");
    function d(l, m4) {
      return () => {
        let g = e.subschema({ keyword: l }, f);
        t.assign(a4, f), e.mergeValidEvaluated(g, a4), m4 ? t.assign(m4, (0, Pc._)(kw || (kw = T$1(["", ""])), l)) : e.setParams({ ifClause: l });
      };
    }
    H(d, "validateClause");
  } };
  function vw(e, t) {
    let r = e.schema[t];
    return r !== void 0 && !(0, _w.alwaysValidSchema)(e, r);
  }
  H(vw, "hasSchema");
  od.default = S_;
});
var Rw = L((id) => {
  a();
  Object.defineProperty(id, "__esModule", { value: true });
  var E_ = Le(), T_ = { keyword: ["then", "else"], schemaType: ["object", "boolean"], code({ keyword: e, parentSchema: t, it: r }) {
    t.if === void 0 && (0, E_.checkStrictMode)(r, '"'.concat(e, '" without "if" is ignored'));
  } };
  id.default = T_;
});
var Cw = L((sd) => {
  a();
  Object.defineProperty(sd, "__esModule", { value: true });
  var v_ = Kl(), A_ = R$(), j_ = zl(), k_ = U$(), __ = X$(), N_ = ow(), R_ = aw(), C_ = Jl(), M_ = yw(), L_ = $w(), U_ = ww(), D_ = Pw(), q_ = Ew(), K_ = Tw(), z_ = Nw(), G_ = Rw();
  function B_(e = false) {
    let t = [U_.default, D_.default, q_.default, K_.default, z_.default, G_.default, R_.default, C_.default, N_.default, M_.default, L_.default];
    return e ? t.push(A_.default, k_.default) : t.push(v_.default, j_.default), t.push(__.default), t;
  }
  H(B_, "getApplicator");
  sd.default = B_;
});
var eP = L((ad) => {
  a();
  Object.defineProperty(ad, "__esModule", { value: true });
  var gt = me(), Mw, Lw, V_ = { message: H(({ schemaCode: e }) => (0, gt.str)(Mw || (Mw = T$1(['must match format "', '"'])), e), "message"), params: H(({ schemaCode: e }) => (0, gt._)(Lw || (Lw = T$1(["{format: ", "}"])), e), "params") }, Uw, Dw, qw, Kw, zw, Gw, Bw, Vw, Ww, Hw, Zw, Jw, Yw, Xw, Qw, W_ = { keyword: "format", type: ["number", "string"], schemaType: "string", $data: true, error: V_, code(e, t) {
    let { gen: r, data: n, $data: i, schema: s, schemaCode: a4, it: f } = e, { opts: p, errSchemaPath: d, schemaEnv: l, self: m4 } = f;
    if (!p.validateFormats) return;
    i ? g() : b();
    function g() {
      let P4 = r.scopeValue("formats", { ref: m4.formats, code: p.code.formats }), F4 = r.const("fDef", (0, gt._)(Uw || (Uw = T$1(["", "[", "]"])), P4, a4)), w = r.let("fType"), O4 = r.let("format");
      r.if((0, gt._)(Dw || (Dw = T$1(["typeof ", ' == "object" && !(', " instanceof RegExp)"])), F4, F4), () => r.assign(w, (0, gt._)(qw || (qw = T$1(["", '.type || "string"'])), F4)).assign(O4, (0, gt._)(Kw || (Kw = T$1(["", ".validate"])), F4)), () => r.assign(w, (0, gt._)(zw || (zw = T$1(['"string"'])))).assign(O4, F4)), e.fail$data((0, gt.or)(N4(), A()));
      function N4() {
        return p.strictSchema === false ? gt.nil : (0, gt._)(Gw || (Gw = T$1(["", " && !", ""])), a4, O4);
      }
      H(N4, "unknownFmt");
      function A() {
        let k = l.$async ? (0, gt._)(Bw || (Bw = T$1(["(", ".async ? await ", "(", ") : ", "(", "))"])), F4, O4, n, O4, n) : (0, gt._)(Vw || (Vw = T$1(["", "(", ")"])), O4, n), R3 = (0, gt._)(Ww || (Ww = T$1(["(typeof ", ' == "function" ? ', " : ", ".test(", "))"])), O4, k, O4, n);
        return (0, gt._)(Hw || (Hw = T$1(["", " && ", " !== true && ", " === ", " && !", ""])), O4, O4, w, t, R3);
      }
      H(A, "invalidFmt");
    }
    H(g, "validate$DataFormat");
    function b() {
      let P4 = m4.formats[s];
      if (!P4) {
        N4();
        return;
      }
      if (P4 === true) return;
      let [F4, w, O4] = A(P4);
      F4 === t && e.pass(k());
      function N4() {
        if (p.strictSchema === false) {
          m4.logger.warn(R3());
          return;
        }
        throw new Error(R3());
        function R3() {
          return 'unknown format "'.concat(s, '" ignored in schema at path "').concat(d, '"');
        }
      }
      H(N4, "unknownFormat");
      function A(R3) {
        let V4 = R3 instanceof RegExp ? (0, gt.regexpCode)(R3) : p.code.formats ? (0, gt._)(Zw || (Zw = T$1(["", "", ""])), p.code.formats, (0, gt.getProperty)(s)) : void 0, J4 = r.scopeValue("formats", { key: s, ref: R3, code: V4 });
        return typeof R3 == "object" && !(R3 instanceof RegExp) ? [R3.type || "string", R3.validate, (0, gt._)(Jw || (Jw = T$1(["", ".validate"])), J4)] : ["string", R3, J4];
      }
      H(A, "getFormat");
      function k() {
        if (typeof P4 == "object" && !(P4 instanceof RegExp) && P4.async) {
          if (!l.$async) throw new Error("async format in sync schema");
          return (0, gt._)(Yw || (Yw = T$1(["await ", "(", ")"])), O4, n);
        }
        return typeof w == "function" ? (0, gt._)(Xw || (Xw = T$1(["", "(", ")"])), O4, n) : (0, gt._)(Qw || (Qw = T$1(["", ".test(", ")"])), O4, n);
      }
      H(k, "validCondition");
    }
    H(b, "validateFormat");
  } };
  ad.default = W_;
});
var tP = L((cd) => {
  a();
  Object.defineProperty(cd, "__esModule", { value: true });
  var H_ = eP(), Z_ = [H_.default];
  cd.default = Z_;
});
var rP = L((fi) => {
  a();
  Object.defineProperty(fi, "__esModule", { value: true });
  fi.contentVocabulary = fi.metadataVocabulary = void 0;
  fi.metadataVocabulary = ["title", "description", "default", "deprecated", "readOnly", "writeOnly", "examples"];
  fi.contentVocabulary = ["contentMediaType", "contentEncoding", "contentSchema"];
});
var oP = L((fd) => {
  a();
  Object.defineProperty(fd, "__esModule", { value: true });
  var J_ = y0(), Y_ = O$(), X_ = Cw(), Q_ = tP(), nP = rP(), eN = [J_.default, Y_.default, (0, X_.default)(), Q_.default, nP.metadataVocabulary, nP.contentVocabulary];
  fd.default = eN;
});
var sP = L((Oc) => {
  a();
  Object.defineProperty(Oc, "__esModule", { value: true });
  Oc.DiscrError = void 0;
  var iP;
  (function(e) {
    e.Tag = "tag", e.Mapping = "mapping";
  })(iP || (Oc.DiscrError = iP = {}));
});
var lP = L((pd) => {
  a();
  Object.defineProperty(pd, "__esModule", { value: true });
  var ui = me(), ud = sP(), aP = sc(), tN = bs(), rN = Le(), cP, nN = { message: H(({ params: { discrError: e, tagName: t } }) => e === ud.DiscrError.Tag ? 'tag "'.concat(t, '" must be string') : 'value of tag "'.concat(t, '" must be in oneOf'), "message"), params: H(({ params: { discrError: e, tag: t, tagName: r } }) => (0, ui._)(cP || (cP = T$1(["{error: ", ", tag: ", ", tagValue: ", "}"])), e, r, t), "params") }, fP, uP, pP, oN = { keyword: "discriminator", type: "object", schemaType: "object", error: nN, code(e) {
    let { gen: t, data: r, schema: n, parentSchema: i, it: s } = e, { oneOf: a4 } = i;
    if (!s.opts.discriminator) throw new Error("discriminator: requires discriminator option");
    let f = n.propertyName;
    if (typeof f != "string") throw new Error("discriminator: requires propertyName");
    if (n.mapping) throw new Error("discriminator: mapping is not supported");
    if (!a4) throw new Error("discriminator: requires oneOf keyword");
    let p = t.let("valid", false), d = t.const("tag", (0, ui._)(fP || (fP = T$1(["", "", ""])), r, (0, ui.getProperty)(f)));
    t.if((0, ui._)(uP || (uP = T$1(["typeof ", ' == "string"'])), d), () => l(), () => e.error(false, { discrError: ud.DiscrError.Tag, tag: d, tagName: f })), e.ok(p);
    function l() {
      let b = g();
      t.if(false);
      for (let P4 in b) t.elseIf((0, ui._)(pP || (pP = T$1(["", " === ", ""])), d, P4)), t.assign(p, m4(b[P4]));
      t.else(), e.error(false, { discrError: ud.DiscrError.Mapping, tag: d, tagName: f }), t.endIf();
    }
    H(l, "validateMapping");
    function m4(b) {
      let P4 = t.name("valid"), F4 = e.subschema({ keyword: "oneOf", schemaProp: b }, P4);
      return e.mergeEvaluated(F4, ui.Name), P4;
    }
    H(m4, "applyTagSchema");
    function g() {
      var b;
      let P4 = {}, F4 = O4(i), w = true;
      for (let k = 0; k < a4.length; k++) {
        let R3 = a4[k];
        if (R3 != null && R3.$ref && !(0, rN.schemaHasRulesButRef)(R3, s.self.RULES)) {
          let J4 = R3.$ref;
          if (R3 = aP.resolveRef.call(s.self, s.schemaEnv.root, s.baseId, J4), R3 instanceof aP.SchemaEnv && (R3 = R3.schema), R3 === void 0) throw new tN.default(s.opts.uriResolver, s.baseId, J4);
        }
        let V4 = (b = R3 == null ? void 0 : R3.properties) === null || b === void 0 ? void 0 : b[f];
        if (typeof V4 != "object") throw new Error('discriminator: oneOf subschemas (or referenced schemas) must have "properties/'.concat(f, '"'));
        w = w && (F4 || O4(R3)), N4(V4, k);
      }
      if (!w) throw new Error('discriminator: "'.concat(f, '" must be required'));
      return P4;
      function O4({ required: k }) {
        return Array.isArray(k) && k.includes(f);
      }
      function N4(k, R3) {
        if (k.const) A(k.const, R3);
        else if (k.enum) for (let V4 of k.enum) A(V4, R3);
        else throw new Error('discriminator: "properties/'.concat(f, '" must have "const" or "enum"'));
      }
      function A(k, R3) {
        if (typeof k != "string" || k in P4) throw new Error('discriminator: "'.concat(f, '" values must be unique strings'));
        P4[k] = R3;
      }
    }
    H(g, "getMapping");
  } };
  pd.default = oN;
});
var dP = L((k5, iN) => {
  iN.exports = { $schema: "http://json-schema.org/draft-07/schema#", $id: "http://json-schema.org/draft-07/schema#", title: "Core schema meta-schema", definitions: { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: true, default: [] } }, type: ["object", "boolean"], properties: { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: true, readOnly: { type: "boolean", default: false }, examples: { type: "array", items: true }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: true }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: false }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: true, enum: { type: "array", items: true, minItems: 1, uniqueItems: true }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: true }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, default: true };
});
var md = L((ot, ld) => {
  a();
  Object.defineProperty(ot, "__esModule", { value: true });
  ot.MissingRefError = ot.ValidationError = ot.CodeGen = ot.Name = ot.nil = ot.stringify = ot.str = ot._ = ot.KeywordCxt = ot.Ajv = void 0;
  var sN = e0(), aN = oP(), cN = lP(), mP = dP(), fN = ["/properties"], Fc = "http://json-schema.org/draft-07/schema", dd = class dd extends sN.default {
    _addVocabularies() {
      super._addVocabularies(), aN.default.forEach((t) => this.addVocabulary(t)), this.opts.discriminator && this.addKeyword(cN.default);
    }
    _addDefaultMetaSchema() {
      if (super._addDefaultMetaSchema(), !this.opts.meta) return;
      let t = this.opts.$data ? this.$dataMetaSchema(mP, fN) : mP;
      this.addMetaSchema(t, Fc, false), this.refs["http://json-schema.org/schema"] = Fc;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(Fc) ? Fc : void 0);
    }
  };
  H(dd, "Ajv");
  var pi = dd;
  ot.Ajv = pi;
  ld.exports = ot = pi;
  ld.exports.Ajv = pi;
  Object.defineProperty(ot, "__esModule", { value: true });
  ot.default = pi;
  var uN = xs();
  Object.defineProperty(ot, "KeywordCxt", { enumerable: true, get: H(function() {
    return uN.KeywordCxt;
  }, "get") });
  var li = me();
  Object.defineProperty(ot, "_", { enumerable: true, get: H(function() {
    return li._;
  }, "get") });
  Object.defineProperty(ot, "str", { enumerable: true, get: H(function() {
    return li.str;
  }, "get") });
  Object.defineProperty(ot, "stringify", { enumerable: true, get: H(function() {
    return li.stringify;
  }, "get") });
  Object.defineProperty(ot, "nil", { enumerable: true, get: H(function() {
    return li.nil;
  }, "get") });
  Object.defineProperty(ot, "Name", { enumerable: true, get: H(function() {
    return li.Name;
  }, "get") });
  Object.defineProperty(ot, "CodeGen", { enumerable: true, get: H(function() {
    return li.CodeGen;
  }, "get") });
  var pN = oc();
  Object.defineProperty(ot, "ValidationError", { enumerable: true, get: H(function() {
    return pN.default;
  }, "get") });
  var lN = bs();
  Object.defineProperty(ot, "MissingRefError", { enumerable: true, get: H(function() {
    return lN.default;
  }, "get") });
});
var bP = L((an) => {
  a();
  Object.defineProperty(an, "__esModule", { value: true });
  an.formatNames = an.fastFormats = an.fullFormats = void 0;
  function di(e, t) {
    return { validate: e, compare: t };
  }
  H(di, "fmtDef");
  an.fullFormats = { date: di(gP, gd), time: di(IP, Id), "date-time": di(hN, xP), duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/, uri: xN, "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, url: new RegExp("^(?:https?|ftp):\\/\\/(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u{00a1}-\\u{ffff}]+-)*[a-z0-9\\u{00a1}-\\u{ffff}]+)(?:\\.(?:[a-z0-9\\u{00a1}-\\u{ffff}]+-)*[a-z0-9\\u{00a1}-\\u{ffff}]+)*(?:\\.(?:[a-z\\u{00a1}-\\u{ffff}]{2,})))(?::\\d{2,5})?(?:\\/[^\\s]*)?$", "iu"), email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i, regex: SN, uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/, "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/, byte: bN, int32: { type: "number", validate: PN }, int64: { type: "number", validate: ON }, float: { type: "number", validate: hP }, double: { type: "number", validate: hP }, password: true, binary: true };
  an.fastFormats = G(F({}, an.fullFormats), { date: di(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, gd), time: di(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, Id), "date-time": di(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, xP), uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i });
  an.formatNames = Object.keys(an.fullFormats);
  function dN(e) {
    return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
  }
  H(dN, "isLeapYear");
  var mN = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, yN = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function gP(e) {
    let t = mN.exec(e);
    if (!t) return false;
    let r = +t[1], n = +t[2], i = +t[3];
    return n >= 1 && n <= 12 && i >= 1 && i <= (n === 2 && dN(r) ? 29 : yN[n]);
  }
  H(gP, "date");
  function gd(e, t) {
    if (e && t) return e > t ? 1 : e < t ? -1 : 0;
  }
  H(gd, "compareDate");
  var yd = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
  function IP(e, t) {
    let r = yd.exec(e);
    if (!r) return false;
    let n = +r[1], i = +r[2], s = +r[3], a4 = r[5];
    return (n <= 23 && i <= 59 && s <= 59 || n === 23 && i === 59 && s === 60) && (!t || a4 !== "");
  }
  H(IP, "time");
  function Id(e, t) {
    if (!(e && t)) return;
    let r = yd.exec(e), n = yd.exec(t);
    if (r && n) return e = r[1] + r[2] + r[3] + (r[4] || ""), t = n[1] + n[2] + n[3] + (n[4] || ""), e > t ? 1 : e < t ? -1 : 0;
  }
  H(Id, "compareTime");
  var hd = /t|\s/i;
  function hN(e) {
    let t = e.split(hd);
    return t.length === 2 && gP(t[0]) && IP(t[1], true);
  }
  H(hN, "date_time");
  function xP(e, t) {
    if (!(e && t)) return;
    let [r, n] = e.split(hd), [i, s] = t.split(hd), a4 = gd(r, i);
    if (a4 !== void 0) return a4 || Id(n, s);
  }
  H(xP, "compareDateTime");
  var gN = /\/|:/, IN = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function xN(e) {
    return gN.test(e) && IN.test(e);
  }
  H(xN, "uri");
  var yP = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function bN(e) {
    return yP.lastIndex = 0, yP.test(e);
  }
  H(bN, "byte");
  var $N = -2147483648, wN = 2 ** 31 - 1;
  function PN(e) {
    return Number.isInteger(e) && e <= wN && e >= $N;
  }
  H(PN, "validateInt32");
  function ON(e) {
    return Number.isInteger(e);
  }
  H(ON, "validateInt64");
  function hP() {
    return true;
  }
  H(hP, "validateNumber");
  var FN = /[^\\]\\Z/;
  function SN(e) {
    if (FN.test(e)) return false;
    try {
      return new RegExp(e), true;
    } catch (t) {
      return false;
    }
  }
  H(SN, "regex");
});
var vP = L((mi) => {
  a();
  Object.defineProperty(mi, "__esModule", { value: true });
  mi.formatLimitDefinition = void 0;
  var EN = md(), Gr = me(), oo = Gr.operators, Sc = { formatMaximum: { okStr: "<=", ok: oo.LTE, fail: oo.GT }, formatMinimum: { okStr: ">=", ok: oo.GTE, fail: oo.LT }, formatExclusiveMaximum: { okStr: "<", ok: oo.LT, fail: oo.GTE }, formatExclusiveMinimum: { okStr: ">", ok: oo.GT, fail: oo.LTE } }, $P, wP, TN = { message: H(({ keyword: e, schemaCode: t }) => Gr.str($P || ($P = T$1(["should be ", " ", ""])), Sc[e].okStr, t), "message"), params: H(({ keyword: e, schemaCode: t }) => Gr._(wP || (wP = T$1(["{comparison: ", ", limit: ", "}"])), Sc[e].okStr, t), "params") }, PP, OP, FP, SP, EP, TP;
  mi.formatLimitDefinition = { keyword: Object.keys(Sc), type: "string", schemaType: "string", $data: true, error: TN, code(e) {
    let { gen: t, data: r, schemaCode: n, keyword: i, it: s } = e, { opts: a4, self: f } = s;
    if (!a4.validateFormats) return;
    let p = new EN.KeywordCxt(s, f.RULES.all.format.definition, "format");
    p.$data ? d() : l();
    function d() {
      let g = t.scopeValue("formats", { ref: f.formats, code: a4.code.formats }), b = t.const("fmt", Gr._(PP || (PP = T$1(["", "[", "]"])), g, p.schemaCode));
      e.fail$data(Gr.or(Gr._(OP || (OP = T$1(["typeof ", ' != "object"'])), b), Gr._(FP || (FP = T$1(["", " instanceof RegExp"])), b), Gr._(SP || (SP = T$1(["typeof ", '.compare != "function"'])), b), m4(b)));
    }
    H(d, "validate$DataFormat");
    function l() {
      let g = p.schema, b = f.formats[g];
      if (!b || b === true) return;
      if (typeof b != "object" || b instanceof RegExp || typeof b.compare != "function") throw new Error('"'.concat(i, '": format "').concat(g, '" does not define "compare" function'));
      let P4 = t.scopeValue("formats", { key: g, ref: b, code: a4.code.formats ? Gr._(EP || (EP = T$1(["", "", ""])), a4.code.formats, Gr.getProperty(g)) : void 0 });
      e.fail$data(m4(P4));
    }
    H(l, "validateFormat");
    function m4(g) {
      return Gr._(TP || (TP = T$1(["", ".compare(", ", ", ") ", " 0"])), g, r, n, Sc[i].fail);
    }
    H(m4, "compareCode");
  }, dependencies: ["format"] };
  var vN = H((e) => (e.addKeyword(mi.formatLimitDefinition), e), "formatLimitPlugin");
  mi.default = vN;
});
var NP = L((Ns, _P) => {
  a();
  Object.defineProperty(Ns, "__esModule", { value: true });
  var yi = bP(), AN = vP(), xd = me(), AP = new xd.Name("fullFormats"), jN = new xd.Name("fastFormats"), bd = H((e, t = { keywords: true }) => {
    if (Array.isArray(t)) return jP(e, t, yi.fullFormats, AP), e;
    let [r, n] = t.mode === "fast" ? [yi.fastFormats, jN] : [yi.fullFormats, AP], i = t.formats || yi.formatNames;
    return jP(e, i, r, n), t.keywords && AN.default(e), e;
  }, "formatsPlugin");
  bd.get = (e, t = "full") => {
    let n = (t === "fast" ? yi.fastFormats : yi.fullFormats)[e];
    if (!n) throw new Error('Unknown format "'.concat(e, '"'));
    return n;
  };
  var kP;
  function jP(e, t, r, n) {
    var i, s;
    (i = (s = e.opts.code).formats) !== null && i !== void 0 || (s.formats = xd._(kP || (kP = T$1(['require("ajv-formats/dist/formats").', ""])), n));
    for (let a4 of t) e.addFormat(a4, r[a4]);
  }
  H(jP, "addFormats");
  _P.exports = Ns = bd;
  Object.defineProperty(Ns, "__esModule", { value: true });
  Ns.default = bd;
});
var b1 = L((tIe, Ih) => {
  a();
  var lu = m();
  lu.default && (lu = lu.default);
  Ih.exports = x1;
  Ih.exports.default = x1;
  function x1(e, t, r) {
    t = t || 1;
    for (var n, i, s, a4, f = 0; f < e[0].length; f++) {
      var p = e[0][f];
      (!f || p[0] < n) && (n = p[0]), (!f || p[1] < i) && (i = p[1]), (!f || p[0] > s) && (s = p[0]), (!f || p[1] > a4) && (a4 = p[1]);
    }
    var d = s - n, l = a4 - i, m4 = Math.min(d, l), g = m4 / 2;
    if (m4 === 0) {
      var b = [n, i];
      return b.distance = 0, b;
    }
    for (var P4 = new lu(void 0, R3), F4 = n; F4 < s; F4 += m4) for (var w = i; w < a4; w += m4) P4.push(new ho(F4 + g, w + g, g, e));
    var O4 = M3(e), N4 = new ho(n + d / 2, i + l / 2, 0, e);
    N4.d > O4.d && (O4 = N4);
    for (var A = P4.length; P4.length; ) {
      var k = P4.pop();
      k.d > O4.d && (O4 = k, r && console.log("found best %d after %d probes", Math.round(1e4 * k.d) / 1e4, A)), !(k.max - O4.d <= t) && (g = k.h / 2, P4.push(new ho(k.x - g, k.y - g, g, e)), P4.push(new ho(k.x + g, k.y - g, g, e)), P4.push(new ho(k.x - g, k.y + g, g, e)), P4.push(new ho(k.x + g, k.y + g, g, e)), A += 4);
    }
    r && (console.log("num probes: " + A), console.log("best distance: " + O4.d));
    var R4 = [O4.x, O4.y];
    return R4.distance = O4.d, R4;
  }
  H(x1, "polylabel");
  function R3(e, t) {
    return t.max - e.max;
  }
  H(R3, "compareMax");
  function ho(e, t, r, n) {
    this.x = e, this.y = t, this.h = r, this.d = C3(e, t, n), this.max = this.d + this.h * Math.SQRT2;
  }
  H(ho, "Cell");
  function C3(e, t, r) {
    for (var n = false, i = 1 / 0, s = 0; s < r.length; s++) for (var a4 = r[s], f = 0, p = a4.length, d = p - 1; f < p; d = f++) {
      var l = a4[f], m4 = a4[d];
      l[1] > t != m4[1] > t && e < (m4[0] - l[0]) * (t - l[1]) / (m4[1] - l[1]) + l[0] && (n = !n), i = Math.min(i, L3(e, t, l, m4));
    }
    return i === 0 ? 0 : (n ? 1 : -1) * Math.sqrt(i);
  }
  H(C3, "pointToPolygonDist");
  function M3(e) {
    for (var t = 0, r = 0, n = 0, i = e[0], s = 0, a4 = i.length, f = a4 - 1; s < a4; f = s++) {
      var p = i[s], d = i[f], l = p[0] * d[1] - d[0] * p[1];
      r += (p[0] + d[0]) * l, n += (p[1] + d[1]) * l, t += l * 3;
    }
    return t === 0 ? new ho(i[0][0], i[0][1], 0, e) : new ho(r / t, n / t, 0, e);
  }
  H(M3, "getCentroidCell");
  function L3(e, t, r, n) {
    var i = r[0], s = r[1], a4 = n[0] - i, f = n[1] - s;
    if (a4 !== 0 || f !== 0) {
      var p = ((e - i) * a4 + (t - s) * f) / (a4 * a4 + f * f);
      p > 1 ? (i = n[0], s = n[1]) : p > 0 && (i += a4 * p, s += f * p);
    }
    return a4 = e - i, f = t - s, a4 * a4 + f * f;
  }
  H(L3, "getSegDistSq");
});
a();
a();
a();
var yu = class yu2 extends Error {
  constructor(t) {
    super(t), this.name = "IntegrityError";
  }
};
H(yu, "IntegrityError");
var $t = yu, hu = class hu2 extends $t {
  constructor(r, n) {
    super("Floor stack '".concat(r.id, "' contains floor '").concat(n, "' which is not listed in floor.geojson / map.geojson"));
    O(this, "floorStack");
    O(this, "floorId");
    this.floorStack = r, this.floorId = n;
  }
};
H(hu, "FloorStackUnknownMapError");
var ya = hu, gu = class gu2 extends $t {
  constructor(r) {
    super("A space collection references floor '".concat(r, "' which does not exist"));
    O(this, "floorId");
    this.floorId = r;
  }
};
H(gu, "SpaceCollectionUnknownMapError");
var ha = gu, Iu = class Iu2 extends $t {
  constructor(r, n) {
    super("Space '".concat(r.id, "' references a destination node '").concat(n, "' which does not exist"));
    O(this, "space");
    O(this, "nodeId");
    this.space = r, this.nodeId = n;
  }
};
H(Iu, "SpaceUnknownNodeError");
var ga = Iu, xu = class xu2 extends $t {
  constructor(r) {
    super("An obstruction collection references floor '".concat(r, "' which does not exist"));
    O(this, "floorId");
    this.floorId = r;
  }
};
H(xu, "ObstructionCollectionUnknownMapError");
var Ia = xu, bu = class bu2 extends $t {
  constructor(r, n, i) {
    super("Obstruction '".concat(r.id, "' references an entrance '").concat(i, "' which does not exist on floor '").concat(n, "'"));
    O(this, "obstruction");
    O(this, "floorId");
    O(this, "entranceId");
    this.obstruction = r, this.floorId = n, this.entranceId = i;
  }
};
H(bu, "ObstructionUnknownEntranceError");
var xa = bu, $u = class $u2 extends $t {
  constructor(r, n) {
    super("Connection '".concat(r.id, "' references a node '").concat(n, "' which does not exist"));
    O(this, "connection");
    O(this, "nodeId");
    this.connection = r, this.nodeId = n;
  }
};
H($u, "ConnectionUnknownNodeError");
var ba = $u, wu = class wu2 extends $t {
  constructor(r) {
    var i;
    let n = (i = r.floor) != null ? i : r.map;
    super("Node '".concat(r.id, "' claims to be on floor '").concat(n, "' which does not exist"));
    O(this, "node");
    O(this, "floorId");
    this.node = r, this.floorId = n;
  }
};
H(wu, "NodeUnknownFloorError");
var $a = wu, Pu = class Pu2 extends $t {
  constructor(r, n) {
    super("Node '".concat(r.id, "' references a space '").concat(n, "' (on floor '").concat(r.map, "') which does not exist"));
    O(this, "node");
    O(this, "spaceId");
    this.node = r, this.spaceId = n;
  }
};
H(Pu, "NodeUnknownSpaceError");
var wa = Pu, Ou = class Ou2 extends $t {
  constructor(r, n) {
    super("Node '".concat(r.id, "' has a neighbor node '").concat(n, "' which does not exist"));
    O(this, "node");
    O(this, "neighborId");
    this.node = r, this.neighborId = n;
  }
};
H(Ou, "NodeUnknownNeighborError");
var Pa = Ou, Fu = class Fu2 extends $t {
  constructor(r, n, i) {
    super("Style ".concat(r, " references a ").concat(n, " polygon ").concat(i, " which does not exist."));
    O(this, "styleId");
    O(this, "polygonKind");
    O(this, "polygonId");
    this.styleId = r, this.polygonKind = n, this.polygonId = i;
  }
};
H(Fu, "StyleUnknownPolygonError");
var Oa = Fu, Su = class Su2 extends $t {
  constructor(r, n, i) {
    super("Style ".concat(r, " references a ").concat(n, " line string ").concat(i, " which does not exist."));
    O(this, "styleId");
    O(this, "lineStringKind");
    O(this, "lineStringId");
    this.styleId = r, this.lineStringKind = n, this.lineStringId = i;
  }
};
H(Su, "StyleUnknownLineStringError");
var Fa = Su, Eu = class Eu2 extends $t {
  constructor(r, n, i) {
    super("Style ".concat(r, " references a ").concat(n, " point ").concat(i, " which does not exist."));
    O(this, "styleId");
    O(this, "pointKind");
    O(this, "pointId");
    this.styleId = r, this.pointKind = n, this.pointId = i;
  }
};
H(Eu, "StyleUnknownPointError");
var Sa = Eu, Tu = class Tu2 extends $t {
  constructor(r) {
    super("Style ".concat(r, " does not appear to be a valid polygon or line string style."));
    O(this, "styleId");
    this.styleId = r;
  }
};
H(Tu, "InvalidStyleError");
var Ea = Tu, vu = class vu2 extends $t {
  constructor(r, n) {
    super("An image for space polygon ".concat(r, " is defined, but this polygon does not exist on floor ").concat(n, "."));
    O(this, "spaceId");
    O(this, "floorId");
    this.spaceId = r, this.floorId = n;
  }
};
H(vu, "AnchoredImageUnknownSpaceError");
var Ta = vu, Au = class Au2 extends $t {
  constructor(r, n) {
    super("Text for space ".concat(r, " is defined, but this space does not exist on floor ").concat(n, "."));
    O(this, "spaceId");
    O(this, "floorId");
    this.spaceId = r, this.floorId = n;
  }
};
H(Au, "AnchoredFloorTextUnknownSpaceError");
var va = Au, ju = class ju2 extends $t {
  constructor(r, n) {
    super("Text for obstruction ".concat(r, " is defined, but this obstruction does not exist on floor ").concat(n, "."));
    O(this, "obstructionId");
    O(this, "floorId");
    this.obstructionId = r, this.floorId = n;
  }
};
H(ju, "AnchoredFloorTextUnknownObstructionError");
var Aa = ju, ku = class ku2 extends $t {
  constructor(r, n) {
    super("An image for obstruction polygon ".concat(r, " is defined, but this polygon does not exist on floor ").concat(n, ", or does not have allowed geometry."));
    O(this, "obstructionId");
    O(this, "floorId");
    this.obstructionId = r, this.floorId = n;
  }
};
H(ku, "AnchoredImageUnknownObstructionError");
var ja = ku, _u = class _u2 extends Error {
  constructor(r, n) {
    super("A text area for space ".concat(r, " is defined, but this space does not exist on floor ").concat(n, "."));
    O(this, "spaceId");
    O(this, "floorId");
    this.spaceId = r, this.floorId = n;
  }
};
H(_u, "TextAreaUnknownSpaceError");
var ka = _u, Nu = class Nu2 extends Error {
  constructor(r, n) {
    super("A layer with space ".concat(r, " is defined, but this space does not exist on floor ").concat(n, "."));
    O(this, "spaceId");
    O(this, "floorId");
    this.spaceId = r, this.floorId = n;
  }
};
H(Nu, "EnterpriseLayerUnknownSpaceError");
var _a = Nu, Ru = class Ru2 extends Error {
  constructor(r, n) {
    super("An enterprise style references a space ".concat(r, " which does not exist on floor ").concat(n, "."));
    O(this, "geometryId");
    O(this, "floorId");
    this.geometryId = r, this.floorId = n;
  }
};
H(Ru, "EnterpriseStyleGeometryAnchorsUnknownSpaceError");
var Na = Ru, Cu = class Cu2 extends Error {
  constructor(r, n) {
    super("A texture for space ".concat(r, " is defined, but this space does not exist on floor ").concat(n, "."));
    O(this, "spaceId");
    O(this, "floorId");
    this.spaceId = r, this.floorId = n;
  }
};
H(Cu, "EnterpriseTextureUnknownSpaceError");
var Ra = Cu, Mu = class Mu2 extends Error {
  constructor(r, n) {
    super("A text area for obstruction ".concat(r, " is defined, but this obstruction does not exist on floor ").concat(n, "."));
    O(this, "obstructionId");
    O(this, "floorId");
    this.obstructionId = r, this.floorId = n;
  }
};
H(Mu, "TextAreaUnknownObstructionError");
var Ca = Mu, Lu = class Lu2 extends Error {
  constructor(t) {
    super("Enterprise location '".concat(t, "' does not exist.")), this.name = "EnterpriseUnknownLocationError";
  }
};
H(Lu, "EnterpriseUnknownLocationError");
var ns = Lu, Uu = class Uu2 extends Error {
  constructor(t) {
    super("Enterprise location references unknown map '".concat(t, "'.")), this.name = "EnterpriseUnknownMapError";
  }
};
H(Uu, "EnterpriseUnknownMapError");
var os = Uu, Du = class Du2 extends Error {
  constructor(t, r, n) {
    super("Enterprise location '".concat(t, "' references unknown space '").concat(r, "' on map '").concat(n, "'.")), this.name = "EnterpriseLocationUnknownSpaceError";
  }
};
H(Du, "EnterpriseLocationUnknownSpaceError");
var Ma = Du, qu = class qu2 extends Error {
  constructor(t) {
    super("Enterprise category '".concat(t, "' does not exist.")), this.name = "EnterpriseUnknownCategoryError";
  }
};
H(qu, "EnterpriseUnknownCategoryError");
var La = qu, Ku = class Ku2 extends Error {
  constructor(t, r, n, i) {
    super("Enterprise location '".concat(t, "' has an item '").concat(r, "' that references maps '").concat(n, "', but it is actually on '").concat(i, "'.")), this.name = "EnterpriseInconsistentMapError";
  }
};
H(Ku, "EnterpriseInconsistentMapError");
var Ua = Ku, zu = class zu2 extends Error {
  constructor(t) {
    super("Cyclical reference detected in category hierarchy starting from category '".concat(t, "'")), this.name = "EnterpriseCyclicalCategoryReferenceError";
  }
};
H(zu, "EnterpriseCyclicalCategoryReferenceError");
var Da = zu, Gu = class Gu2 extends Error {
  constructor(t) {
    super("Invalid timezone '".concat(t, "'")), this.name = "EnterpriseInvalidTimeZoneError";
  }
};
H(Gu, "EnterpriseInvalidTimeZoneError");
var qa = Gu, Bu = class Bu2 extends Error {
  constructor(t) {
    super("An facade references floor stack '".concat(t, "' which does not exist")), this.name = "FacadeUnknownFloorStackError";
  }
};
H(Bu, "FacadeUnknownFloorStackError");
var Ka = Bu, Vu = class Vu2 extends Error {
  constructor(t, r) {
    super("Facade '".concat(t, "' references floor '").concat(r, "' which does not exist")), this.name = "FacadeUnknownFloorError";
  }
};
H(Vu, "FacadeUnknownFloorError");
var za = Vu, Wu = class Wu2 extends Error {
  constructor(t, r, n) {
    super("Facade '".concat(t, "' references space '").concat(r, "' (on floor '").concat(n, "') which does not exist")), this.name = "FacadeUnknownSpaceError";
  }
};
H(Wu, "FacadeUnknownSpaceError");
var Ga = Wu, Hu = class Hu2 extends $t {
  constructor(t) {
    super("Duplicate tileset key found: ".concat(t)), this.name = "DuplicateTilesetKeyError";
  }
};
H(Hu, "DuplicateTilesetKeyError");
var Ba = Hu;
a();
var $h = H((e) => "polygons" in e, "isPolygonStyle"), wh = H((e) => "width" in e && "lineStrings" in e, "isLineStringStyle"), Ph = H((e) => "points" in e, "isPointStyle");
var Zu = H((e) => "anchorId" in e.properties || "geometryId" in e.properties, "isAnchoredImageOrTextLabelFeature");
var is = H((e) => e["floor.geojson"] != null ? new Set(e["floor.geojson"].features.map((t) => t.properties.id)) : new Set(e["map.geojson"].map((t) => t.id)), "availableFloorIds"), A1 = H((e) => e["floorstack.json"] != null ? new Set(e["floorstack.json"].map((t) => t.id)) : new Set(e["mapstack.geojson"].map((t) => t.id)), "availableFloorStackIds"), j1 = H((e) => {
  var n, i;
  let t = is(e), r = (i = (n = e["floorstack.json"]) != null ? n : e["mapstack.json"]) != null ? i : e["mapstack.geojson"];
  for (let s of r) for (let a4 of s.maps) if (!t.has(a4)) throw new ya(s, a4);
  return true;
}, "validateMapStacks"), k1 = H((e) => {
  let t = is(e), r = new Set(e["node.geojson"].features.map((n) => n.properties.id));
  for (let [n, i] of Object.entries(e.space)) {
    if (!t.has(n)) throw new ha(n);
    if (i) {
      for (let s of i.features) for (let a4 of s.properties.destinationNodes) if (!r.has(a4)) throw new ga(s.properties, a4);
    }
  }
  return true;
}, "validateSpaces"), _1 = H((e) => {
  let t = is(e), r = Object.entries(e.entrance).reduce((n, [i, s]) => (n[i] = new Set((s ? s.features : []).map((a4) => a4.properties.id)), n), {});
  for (let [n, i] of Object.entries(e.obstruction)) {
    if (!t.has(n)) throw new Ia(n);
    if (i) for (let s of i.features) for (let a4 of s.properties.entrances) {
      let f = r[n];
      if (!f || !f.has(a4)) throw new xa(s.properties, n, a4);
    }
  }
  return true;
}, "validateObstructions"), N1 = H((e) => {
  let t = new Set(e["node.geojson"].features.map((r) => r.properties.id));
  for (let r of e["connection.json"]) for (let n of r.nodes) if (!t.has(n)) throw new ba(r, n);
  return true;
}, "validateConnections"), R1 = H((e) => {
  var i, s;
  let t = is(e), r = Object.entries(e.space).reduce((a4, [f, p]) => (a4[f] = new Set((p ? p.features : []).map((d) => d.properties.id)), a4), {}), n = new Set(e["node.geojson"].features.map((a4) => a4.properties.id));
  for (let a4 of e["node.geojson"].features) {
    let f = (i = a4.properties.floor) != null ? i : a4.properties.map;
    if (!t.has(f)) throw new $a(a4.properties);
    for (let p of a4.properties.space) if (!((s = r[f]) != null && s.has(p))) throw new wa(a4.properties, p);
    for (let p of a4.properties.neighbors) if (!n.has(p.id)) throw new Pa(a4.properties, p.id);
  }
  return true;
}, "validateNodes"), C1 = H((e) => {
  if (!e.facade) return true;
  let t = A1(e), r = is(e), n = Object.entries(e.space).reduce((i, [s, a4]) => (i[s] = new Set((a4 ? a4.features : []).map((f) => f.properties.id)), i), {});
  for (let [i, s] of Object.entries(e.facade)) {
    if (!t.has(i)) throw new Ka(i);
    if (s) for (let { floorId: a4, spaceId: f } of s.spaces) {
      if (!r.has(a4)) throw new za(s.id, a4);
      let p = n[a4];
      if (!(p != null && p.has(f))) throw new Ga(s.id, f, a4);
    }
  }
  return true;
}, "validateFacades"), M1 = H((e) => {
  if (!e["styles.json"]) return true;
  let t = {}, r = {}, n = {};
  Object.values(e.space).forEach((i) => {
    i == null || i.features.forEach((s) => {
      s.geometry.type === "Polygon" ? t[s.properties.id] = "space" : s.geometry.type === "LineString" ? r[s.properties.id] = "space" : s.geometry.type === "Point" && (n[s.properties.id] = "space");
    });
  }), Object.values(e.obstruction).forEach((i) => {
    i == null || i.features.forEach((s) => {
      s.geometry.type === "Polygon" ? t[s.properties.id] = "obstruction" : s.geometry.type === "LineString" && (r[s.properties.id] = "obstruction");
    });
  }), Object.values(e.entrance).forEach((i) => {
    i == null || i.features.forEach((s) => {
      r[s.properties.id] = "entrance";
    });
  });
  for (let [i, s] of Object.entries(e["styles.json"])) if (s) if ($h(s)) for (let a4 of s.polygons) {
    let f = a4.startsWith("s_") ? "space" : a4.startsWith("o_") ? "obstruction" : "unknown";
    if (!t[a4]) throw new Oa(i, f, a4);
  }
  else if (wh(s)) for (let a4 of s.lineStrings) {
    let f = a4.startsWith("s_") ? "space" : a4.startsWith("o_") ? "obstruction" : a4.startsWith("e_") ? "entrance" : "unknown";
    if (!r[a4]) throw new Fa(i, f, a4);
  }
  else if (Ph(s)) {
    for (let a4 of s.points) if (!n[a4]) throw new Sa(i, "space", a4);
  } else throw new Ea(i);
  return true;
}, "validateStyles"), L1 = H((e) => {
  var i, s, a4;
  let t = (i = e == null ? void 0 : e.enterprise) == null ? void 0 : i.floorText;
  if (!t) return true;
  let r = Object.entries(e.space).reduce((f, [p, d]) => (f[p] = new Set((d ? d.features : []).map((l) => l.properties.id)), f), {}), n = Object.entries(e.obstruction).reduce((f, [p, d]) => (f[p] = new Set((d ? d.features : []).filter((l) => l.geometry.type === "Polygon").map((l) => l.properties.id)), f), {});
  for (let [f, p] of Object.entries(t)) if (p) {
    for (let d of p.features) if (Zu(d)) {
      let l = d.properties.geometryId;
      if (l.startsWith("o_") && !((s = n[f]) != null && s.has(l))) throw new Aa(l, f);
      if (l.startsWith("s_") && !((a4 = r[f]) != null && a4.has(l))) throw new va(l, f);
    }
  }
  return true;
}, "validateFloorText"), U1 = H((e) => {
  var i, s;
  let t = e.floorImages;
  if (!t) return true;
  let r = Object.entries(e.space).reduce((a4, [f, p]) => (a4[f] = new Set((p ? p.features : []).map((d) => d.properties.id)), a4), {}), n = Object.entries(e.obstruction).reduce((a4, [f, p]) => (a4[f] = new Set((p ? p.features : []).filter((d) => d.geometry.type === "Polygon").map((d) => d.properties.id)), a4), {});
  for (let [a4, f] of Object.entries(t)) if (f) {
    for (let p of f.features) if (Zu(p)) {
      let d = p.properties.anchorId;
      if (d.startsWith("o_") && !((i = n[a4]) != null && i.has(d))) throw new ja(d, a4);
      if (d.startsWith("s_") && !((s = r[a4]) != null && s.has(d))) throw new Ta(d, a4);
    }
  }
  return true;
}, "validateFloorImages"), D1 = H((e) => {
  var n, i;
  if (!e.textAreas) return true;
  let t = Object.entries(e.space).reduce((s, [a4, f]) => (s[a4] = new Set((f ? f.features : []).map((p) => p.properties.id)), s), {}), r = Object.entries(e.obstruction).reduce((s, [a4, f]) => (s[a4] = new Set((f ? f.features : []).map((p) => p.properties.id)), s), {});
  for (let [s, a4] of Object.entries(e.textAreas)) if (a4) for (let f of a4.features) if ("anchorId" in f.properties) {
    let p = f.properties.anchorId;
    if (p.startsWith("s_")) {
      if (!((n = t[s]) != null && n.has(p))) throw new ka(p, s);
    } else if (p.startsWith("o_")) {
      if (!((i = r[s]) != null && i.has(p))) throw new Ca(p, s);
    } else throw new Error("Invalid text area anchor ID: ".concat(p));
  } else if ("verticalOffset" in f.properties) {
    if (f.properties.verticalOffset < 0) throw new Error("Invalid vertical offset for floating text area: ".concat(f.properties.verticalOffset));
  } else throw new Error("Invalid text area properties: ".concat(JSON.stringify(f.properties)));
  return true;
}, "validateTextAreas"), q1 = H((e) => {
  var p, d, l, m4, g, b, P4, F4;
  if (!e.enterprise) return true;
  let t = e.enterprise;
  if (t.venue.tzid) try {
    new Intl.DateTimeFormat("en", { timeZone: t.venue.tzid });
  } catch (w) {
    throw new qa(t.venue.tzid);
  }
  let r = new Set(t.locations.map((w) => w.id));
  if (t.venue.topLocations) {
    for (let w of t.venue.topLocations) if (!r.has(w)) throw new ns(w);
  }
  let n = new Set((p = e["floor.geojson"]) == null ? void 0 : p.features.map((w) => w.properties.id));
  if (t.venue.defaultFloor && !n.has(t.venue.defaultFloor)) throw new os(t.venue.defaultFloor);
  let i = {};
  for (let [w, O4] of Object.entries((d = e.space) != null ? d : {})) i[w] = new Set(O4 == null ? void 0 : O4.features.map((N4) => N4.properties.id));
  for (let w of t.locations) for (let O4 of (l = w.spaces) != null ? l : []) {
    let { floor: N4, id: A } = O4;
    if (!n.has(N4)) throw new os(N4);
    if (!((m4 = i[N4]) != null && m4.has(A))) {
      let k = Array.from(n.values()).map((R3) => {
        var V4;
        return (V4 = i[R3]) != null && V4.has(A) ? R3 : null;
      }).find((R3) => R3 !== null);
      throw k != null ? new Ua(w.id, A, N4, k) : new Ma(w.id, A, N4);
    }
  }
  for (let w of t.layers) for (let { spaceId: O4, floorId: N4 } of w.spaces) if (!((g = i[N4]) != null && g.has(O4))) throw new _a(O4, N4);
  for (let [w, O4] of Object.entries(t.enterpriseStyles || {})) for (let { geometryId: N4, floorId: A } of O4.geometryAnchors) if (!((b = i[A]) != null && b.has(N4))) throw new Na(N4, A);
  for (let w of (P4 = t.textures) != null ? P4 : []) for (let O4 of w.geometryAnchors) if (!((F4 = i[O4.floorId]) != null && F4.has(O4.geometryId))) throw new Ra(O4.geometryId, O4.floorId);
  let s = new Set(t.categories.map((w) => w.id)), a4 = {};
  for (let w of t.categories) a4[w.id] = new Set(w.children);
  let f = H((w, O4 = /* @__PURE__ */ new Set()) => {
    if (O4.has(w)) throw new Da(w);
    O4.add(w);
    for (let N4 of a4[w] || []) f(N4, new Set(O4));
    O4.delete(w);
  }, "checkCyclicalReferences");
  for (let w of t.categories) {
    f(w.id);
    for (let O4 of w.children) if (!s.has(O4)) throw new La(O4);
    for (let O4 of w.locations) if (!r.has(O4)) throw new ns(O4);
  }
  return true;
}, "validateEnterprise"), K1 = H((e) => {
  if (!e["tileset.json"]) return true;
  let t = /* @__PURE__ */ new Set(), r = e["tileset.json"];
  if (t.add(r.default.key), r.others) for (let n of r.others) {
    if (t.has(n.key)) throw new Ba(n.key);
    t.add(n.key);
  }
  return true;
}, "validateTilesets"), Oh = H((e) => j1(e) && k1(e) && _1(e) && N1(e) && R1(e) && C1(e) && M1(e) && U1(e) && D1(e) && L1(e) && q1(e) && K1(e), "verifyMvfIntegrity");
a();
var CP = N(md(), 1), MP = N(NP(), 1);
a();
var kN = H((e) => {
  var r;
  let t = e;
  return ((r = t == null ? void 0 : t.allOf) == null ? void 0 : r.length) === 2;
}, "isPotentiallyBadSchema");
function Ec(e) {
  if (typeof e != "object" || e === null) return e;
  if (Array.isArray(e)) return e.map(Ec);
  let t = F({}, e);
  for (let [r, n] of Object.entries(t)) if (typeof n == "object" && n !== null) {
    let i = Ec(n);
    if (kN(i)) {
      let s = i.allOf.findIndex((f) => f.type === "array"), a4 = i.allOf.findIndex((f) => f.type === "object");
      if (s !== -1 && a4 !== -1) {
        t[r] = G(F({}, i), { allOf: [i.allOf[s]] });
        continue;
      }
    }
    t[r] = i;
  }
  return t;
}
H(Ec, "cleanupInvalidArrayAllOf");
var RP = { $ref: "#/definitions/ParsedMVF", $schema: "http://json-schema.org/draft-07/schema#", definitions: { AnchoredFloorTextProperties: { additionalProperties: false, properties: { align: { default: "center", description: "Horizontal alignment of multi-line text.", enum: ["left", "center", "right"], type: "string" }, color: { default: "black", description: "The color of the text in CSS format (e.g. `#000000`, `rgb(0, 0, 0)`, `black`).", type: "string" }, fontFamily: { default: "Droid Sans", description: "The font family of the text.", type: "string" }, fontSize: { default: 12, description: "The em-height (multiplier of the font's height) at which to render the font, in meters. The font height is the distance between the ascender (highest point, height of an A) and descender (lowest point, bottom of a g) of the font. For example, if the font-size is 12, the space for a single character will be 12 meters high.", type: "number" }, geometryId: { anyOf: [{ $ref: "#/definitions/SpaceId" }, { $ref: "#/definitions/ObstructionId" }], description: "The geometry to which this text belongs. It will be displayed on top of it." }, rotation: { description: "Rotation in degrees, about the center of the text. North is 0, east is 90.", maximum: 360, minimum: 0, type: "number" }, text: { description: "The text to display. Newline characters are supported.", type: "string" }, visible: { default: true, description: "Whether the text is visible.", type: "boolean" } }, required: ["align", "color", "fontFamily", "fontSize", "geometryId", "rotation", "text", "visible"], type: "object" }, AnchoredImageProperties: { additionalProperties: false, properties: { anchorId: { anyOf: [{ $ref: "#/definitions/SpaceId" }, { $ref: "#/definitions/ObstructionId" }], description: "The geometry to which this image belongs. It will be displayed on top of it." }, height: { description: "The height of the image when represented on the map, in meters.", minimum: 0, type: "number" }, path: { description: "The path to the image. This will be a remote URL.", type: "string" }, rotation: { description: "Rotation in degrees, about the center of the image. North is 0, east is 90.", maximum: 360, minimum: 0, type: "number" }, width: { description: "The width of the image when represented on the map, in meters.", minimum: 0, type: "number" } }, required: ["anchorId", "height", "path", "rotation", "width"], type: "object" }, AnchoredTextAreaProperties: { additionalProperties: false, properties: { align: { $ref: "#/definitions/TextAreaAlignment", description: "The alignment of the text within the label. 'Near' means the text will be aligned up against the position. Typically in the SDK the text will be rotated to always be upright, so either the start or end of the text will be up against the position. 'Center' means it will be centered in the middle of the area." }, anchorId: { anyOf: [{ $ref: "#/definitions/SpaceId" }, { $ref: "#/definitions/ObstructionId" }], description: "The geometry to which this text area belongs. It will be displayed on top of it." }, maxHeight: { description: "The maximum height of the label, in meters. Half the height will be above the feature's position, half below.", exclusiveMinimum: 0, type: "number" }, maxWidth: { description: "The maximum width of the label, in meters. The left edge will start at the feature's position and extend in the rotation direction.", exclusiveMinimum: 0, type: "number" }, rotation: { description: "Rotation in degrees relative to north, about the position of the label. North is 0, east is 90.", maximum: 360, minimum: 0, type: "number" } }, required: ["align", "anchorId", "maxHeight", "maxWidth", "rotation"], type: "object" }, AnnotationCollection: { additionalProperties: false, properties: { features: { items: { additionalProperties: false, properties: { geometry: { $ref: "#/definitions/Point" }, properties: { $ref: "#/definitions/AnnotationProperties" }, type: { $ref: "#/definitions/FeatureType" } }, required: ["type", "geometry", "properties"], type: "object" }, type: "array" }, type: { $ref: "#/definitions/FeatureCollectionType" } }, required: ["type", "features"], type: "object" }, AnnotationId: { pattern: "^a_[A-Za-z0-9_-]{8,}$", type: "string" }, AnnotationProperties: { additionalProperties: false, properties: { externalId: { type: "string" }, id: { $ref: "#/definitions/AnnotationId" }, symbolId: { type: "string" } }, required: ["id", "symbolId"], type: "object" }, Area: { additionalProperties: false, properties: { geometry: { $ref: "#/definitions/Polygon" }, properties: { $ref: "#/definitions/AreaProperties" }, type: { $ref: "#/definitions/FeatureType" } }, required: ["type", "geometry", "properties"], type: "object" }, AreaCollection: { additionalProperties: false, properties: { features: { items: { $ref: "#/definitions/Area" }, type: "array" }, type: { $ref: "#/definitions/FeatureCollectionType" } }, required: ["type", "features"], type: "object" }, AreaId: { pattern: "^ar_[A-Za-z0-9_-]{8,}$", type: "string" }, AreaProperties: { additionalProperties: false, properties: { center: { $ref: "#/definitions/Position", description: "The center of mass of this area." }, destinationNodes: { description: "A list of node IDs which can be used to navigate to this area.", items: { $ref: "#/definitions/NodeId" }, type: "array" }, details: { $ref: "#/definitions/Details" }, externalId: { type: "string" }, id: { $ref: "#/definitions/AreaId" } }, required: ["id"], type: "object" }, Category: { additionalProperties: false, properties: { icon: { description: "The category's icon", format: "uri", type: "string" }, id: { $ref: "#/definitions/CategoryId" }, name: { type: "string" }, parent: { $ref: "#/definitions/CategoryId" } }, required: ["id", "name", "icon"], type: "object" }, CategoryId: { description: "A category ID", pattern: "^cat_[A-Za-z0-9_-]{8,}$", type: "string" }, Connection: { additionalProperties: false, properties: { accessible: { type: "boolean" }, details: { additionalProperties: false, properties: { name: { type: "string" } }, type: "object" }, externalId: { type: "string" }, extra: { additionalProperties: {}, type: "object" }, id: { $ref: "#/definitions/ConnectionId" }, metadata: { $ref: "#/definitions/Metadata" }, nodes: { description: "A list of node IDs corresponding to nodes that are a part of this connection.", items: { $ref: "#/definitions/NodeId" }, type: "array" }, type: { type: "string" } }, required: ["id", "type", "nodes", "externalId"], type: "object" }, ConnectionId: { pattern: "^c_[A-Za-z0-9_-]{8,}$", type: "string" }, Connections: { items: { $ref: "#/definitions/Connection" }, type: "array" }, Day: { enum: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], type: "string" }, DayOrPublicHoliday: { anyOf: [{ $ref: "#/definitions/Day" }, { const: "PublicHolidays", type: "string" }] }, Details: { additionalProperties: false, description: "Additional information about a given entity.", properties: { description: { type: "string" }, images: { items: { $ref: "#/definitions/Image" }, type: "array" }, links: { items: { $ref: "#/definitions/Hyperlink" }, type: "array" }, name: { type: "string" } }, type: "object" }, EnterpriseCategory: { additionalProperties: false, properties: { children: { items: { $ref: "#/definitions/EnterpriseCategoryId" }, type: "array" }, color: { type: "string" }, externalId: { type: "string" }, extra: { additionalProperties: {}, type: "object" }, icon: { description: "The category's icon", format: "uri", type: "string" }, iconFromDefaultList: { type: ["string", "null"] }, id: { $ref: "#/definitions/EnterpriseCategoryId" }, locations: { items: { $ref: "#/definitions/EnterpriseLocationId" }, type: "array" }, name: { type: "string" }, picture: { description: "The category's picture", format: "uri", type: "string" }, sortOrder: { type: "number" } }, required: ["children", "externalId", "id", "locations", "name", "sortOrder"], type: "object" }, EnterpriseCategoryId: { description: "An ID for an enterprise category", pattern: "^ec_[A-Za-z0-9_-]{8,}$", type: "string" }, EnterpriseCategoryPriority: { additionalProperties: { items: { $ref: "#/definitions/EnterpriseCategoryId" }, type: "array" }, description: "The ordered list of category ids that this location belongs to The order here determines the priority of the categories, with the first category being the highest priority for determining application logic like icon and color preference.", propertyNames: { description: "An ID for an enterprise location", pattern: "^el_[A-Za-z0-9_-]{8,}$" }, type: "object" }, EnterpriseCollection: { additionalProperties: false, properties: { categories: { items: { $ref: "#/definitions/EnterpriseCategory" }, type: "array" }, categoryPriorities: { $ref: "#/definitions/EnterpriseCategoryPriority" }, enterpriseStyles: { $ref: "#/definitions/EnterpriseStyles" }, floorText: { $ref: "#/definitions/EnterpriseFloorText" }, layers: { items: { $ref: "#/definitions/EnterpriseLayer" }, type: "array" }, locationInstances: { items: { $ref: "#/definitions/EnterpriseLocationInstance" }, type: "array" }, locations: { items: { $ref: "#/definitions/EnterpriseLocation" }, type: "array" }, textures: { items: { $ref: "#/definitions/EnterpriseTexture" }, type: "array" }, venue: { $ref: "#/definitions/EnterpriseVenue" } }, required: ["locations", "categories", "venue", "locationInstances", "layers"], type: "object" }, EnterpriseFloorText: { additionalProperties: { anyOf: [{ $ref: "#/definitions/FloorTextFeatureCollection" }, { not: {} }] }, description: "The text to display on a map, split into  feature collection per floor.", type: "object" }, EnterpriseLayer: { additionalProperties: false, properties: { id: { $ref: "#/definitions/EnterpriseLayerId" }, name: { type: "string" }, spaces: { items: { $ref: "#/definitions/EnterpriseLayerSpace" }, minItems: 1, type: "array" } }, required: ["id", "name", "spaces"], type: "object" }, EnterpriseLayerId: { pattern: "^ely_[A-Za-z0-9_-]{8,}$", type: "string" }, EnterpriseLayerSpace: { additionalProperties: false, properties: { floorId: { $ref: "#/definitions/FloorId" }, spaceId: { $ref: "#/definitions/SpaceId" } }, required: ["floorId", "spaceId"], type: "object" }, EnterpriseLocation: { additionalProperties: false, properties: { amenity: { description: "The location's amenity type. Only set if the location is an amenity", type: "string" }, description: { type: "string" }, externalId: { type: "string" }, extra: { additionalProperties: {}, type: "object" }, gallery: { description: "The location's image gallery", items: { additionalProperties: false, properties: { caption: { type: ["string", "null"] }, embeddedUrl: { description: "The URL to link from the image", format: "uri", type: ["string", "null"] }, image: { type: "string" } }, required: ["image"], type: "object" }, type: "array" }, hidden: { description: "Whether to show the location in applications", type: "boolean" }, id: { $ref: "#/definitions/EnterpriseLocationId" }, links: { description: "Web links for the location", items: { additionalProperties: false, properties: { label: { type: "string" }, url: { description: "The URL of the link", format: "uri", type: "string" } }, required: ["label", "url"], type: "object" }, type: "array" }, logo: { description: "The location's logo", format: "uri", type: "string" }, name: { type: "string" }, nodes: { deprecated: "Use `spaces` instead. A location's nodes that are not attached to a polygon will be in the spaces array as a point space. Nodes that are attached to one of it's polygons will be destinationNodes on that polygon's space", items: { additionalProperties: false, properties: { id: { $ref: "#/definitions/NodeId" }, map: { $ref: "#/definitions/FloorId" } }, required: ["map", "id"], type: "object" }, type: "array" }, operationHours: { items: { $ref: "#/definitions/OperationHours" }, type: "array" }, phone: { additionalProperties: false, properties: { extension: { type: "string" }, number: { type: "string" } }, required: ["number"], type: "object" }, picture: { description: "The picture of the location", format: "uri", type: "string" }, polygons: { deprecated: "Use `spaces` instead. All of a location's polygons will be in the spaces array.", items: { additionalProperties: false, properties: { id: { $ref: "#/definitions/SpaceId" }, map: { $ref: "#/definitions/FloorId" } }, required: ["map", "id"], type: "object" }, type: "array" }, shortName: { type: "string" }, showFloatingLabelWhenImagePresent: { description: "Whether to show the flat label when an image is present", type: "boolean" }, showLogo: { description: "Whether to show the logo of the location", type: "boolean" }, siblingGroups: { description: "Locations that are related to this location in some manner (described by the label)", items: { $ref: "#/definitions/SiblingGroup" }, type: "array" }, social: { additionalProperties: false, description: "The location's social media links", properties: { facebook: { type: "string" }, instagram: { type: "string" }, twitter: { type: "string" }, website: { type: "string" } }, type: "object" }, sortOrder: { type: "number" }, spaces: { description: "The places that this location is anchored to in the physical world. These are either Polygon or Point spaces. A location can be attached to many spaces, and a space can be attached to many locations.\n\nIf there are different properties for the location on those spaces, they will show up in the location's  {@link  EnterpriseLocation.instances instances }  property", items: { additionalProperties: false, properties: { floor: { $ref: "#/definitions/FloorId" }, id: { $ref: "#/definitions/SpaceId" } }, required: ["floor", "id"], type: "object" }, type: "array" }, states: { description: "The location's state. No more than one state should be active at a time, and all but at most one should have dates set", items: { $ref: "#/definitions/LocationState" }, type: "array" }, tags: { items: { type: "string" }, type: "array" }, type: { type: "string" } }, required: ["externalId", "id", "name", "nodes", "polygons", "sortOrder", "spaces", "type"], type: "object" }, EnterpriseLocationId: { description: "An ID for an enterprise location", pattern: "^el_[A-Za-z0-9_-]{8,}$", type: "string" }, EnterpriseLocationInstance: { additionalProperties: false, description: "A locationInstance is a particular instace of an Enterprise Location that has some properties different from the parent. Eg, it may have different hours, or a slightly different name.\n\nA LocationInstance:\n- MUST have a parent, referring to an Enterprise Location.\n- MUST have a unique ID, for localization to work.\n- SHOULD have AT LEAST ONE polygon or node to anchor it in space.\n- SHOULD have AT LEAST ONE other Enterprise Location property set.\n\nIt is otherwise a Partial<EnterpriseLocation>\n\nUsage examples:\n- A locationInstance for a location with a different externalId so a customer can identify them individually.\n- A locationInstance with different operationHours, that might indicate different hours for that particular entrace.", properties: { amenity: { description: "The location's amenity type. Only set if the location is an amenity", type: "string" }, description: { type: "string" }, externalId: { type: "string" }, extra: { additionalProperties: {}, type: "object" }, gallery: { description: "The location's image gallery", items: { additionalProperties: false, properties: { caption: { type: ["string", "null"] }, embeddedUrl: { description: "The URL to link from the image", format: "uri", type: ["string", "null"] }, image: { type: "string" } }, required: ["image"], type: "object" }, type: "array" }, hidden: { description: "Whether to show the location in applications", type: "boolean" }, id: { $ref: "#/definitions/EnterpriseLocationInstanceId" }, links: { description: "Web links for the location", items: { additionalProperties: false, properties: { label: { type: "string" }, url: { description: "The URL of the link", format: "uri", type: "string" } }, required: ["label", "url"], type: "object" }, type: "array" }, logo: { description: "The location's logo", format: "uri", type: "string" }, name: { type: "string" }, nodes: { deprecated: "Use `spaces` instead. A location's nodes that are not attached to a polygon will be in the spaces array as a point space. Nodes that are attached to one of it's polygons will be destinationNodes on that polygon's space", items: { additionalProperties: false, properties: { id: { $ref: "#/definitions/NodeId" }, map: { $ref: "#/definitions/FloorId" } }, required: ["map", "id"], type: "object" }, type: "array" }, operationHours: { items: { $ref: "#/definitions/OperationHours" }, type: "array" }, parent: { $ref: "#/definitions/EnterpriseLocationId" }, phone: { additionalProperties: false, properties: { extension: { type: "string" }, number: { type: "string" } }, required: ["number"], type: "object" }, picture: { description: "The picture of the location", format: "uri", type: "string" }, polygons: { deprecated: "Use `spaces` instead. All of a location's polygons will be in the spaces array.", items: { additionalProperties: false, properties: { id: { $ref: "#/definitions/SpaceId" }, map: { $ref: "#/definitions/FloorId" } }, required: ["map", "id"], type: "object" }, type: "array" }, shortName: { type: "string" }, showFloatingLabelWhenImagePresent: { description: "Whether to show the flat label when an image is present", type: "boolean" }, showLogo: { description: "Whether to show the logo of the location", type: "boolean" }, siblingGroups: { description: "Locations that are related to this location in some manner (described by the label)", items: { $ref: "#/definitions/SiblingGroup" }, type: "array" }, social: { additionalProperties: false, description: "The location's social media links", properties: { facebook: { type: "string" }, instagram: { type: "string" }, twitter: { type: "string" }, website: { type: "string" } }, type: "object" }, sortOrder: { type: "number" }, spaces: { description: "The places that this location is anchored to in the physical world. These are either Polygon or Point spaces. A location can be attached to many spaces, and a space can be attached to many locations.\n\nIf there are different properties for the location on those spaces, they will show up in the location's  {@link  EnterpriseLocation.instances instances }  property", items: { additionalProperties: false, properties: { floor: { $ref: "#/definitions/FloorId" }, id: { $ref: "#/definitions/SpaceId" } }, required: ["floor", "id"], type: "object" }, type: "array" }, states: { description: "The location's state. No more than one state should be active at a time, and all but at most one should have dates set", items: { $ref: "#/definitions/LocationState" }, type: "array" }, tags: { items: { type: "string" }, type: "array" }, type: { type: "string" } }, required: ["id", "parent"], type: "object" }, EnterpriseLocationInstanceId: { description: "An ID for an enterprise location instance", pattern: "^eli_[A-Za-z0-9_-]{8,}$", type: "string" }, EnterpriseStyles: { additionalProperties: { additionalProperties: false, properties: { edgeOffset: { type: "number" }, geometryAnchors: { items: { additionalProperties: false, properties: { floorId: { $ref: "#/definitions/FloorId" }, geometryId: { $ref: "#/definitions/SpaceId" } }, required: ["geometryId", "floorId"], type: "object" }, type: "array" } }, required: ["geometryAnchors"], type: "object" }, type: "object" }, EnterpriseTexture: { additionalProperties: false, properties: { bounds: { description: "Coordinates of the texture's bounding box in format: [minLon, minLat, maxLon, maxLat].", items: { type: "number" }, maxItems: 4, minItems: 4, type: "array" }, face: { $ref: "#/definitions/EnterpriseTextureFace", description: "Face of the polygon that the texture will be applied to.\n\n'top' means that the texture will be applied to the upward-pointing face of the polygon.\n\n'side' means that the texture will be applied to every side face of the polygon." }, geometryAnchors: { description: "Anchors for the texture on the geometry of the polygon.", items: { $ref: "#/definitions/EnterpriseTextureGeometryAnchor" }, minItems: 1, type: "array" }, offset: { $ref: "#/definitions/EnterpriseTextureUV", description: "Controls the starting position of the texture on the surface. The u value shifts the texture horizontally and v shifts vertically." }, path: { description: "Path to the texture image. Must be either a PNG or JPG format.", type: "string" }, repeat: { $ref: "#/definitions/EnterpriseTextureUV", description: "Controls how many times the texture repeats across the surface. The u value controls horizontal repetition and v controls vertical repetition." }, rotation: { description: "Rotation of the texture in degrees clockwise.\n\nFor top textures this is relative to north. North is 0, east is 90.\n\nFor side textures this is relative to the upward direction, with 0 degrees being upright.", maximum: 360, minimum: 0, type: "number" }, surface: { $ref: "#/definitions/EnterpriseTextureSurface", description: "Surface of the polygon that the texture will be applied to.\n\n'inside' means that the texture will only be applied to the interior surface of the polygon.\n\n'outside' means that the texture will only be applied to the exterior surface of the polygon.\n\n'both' means that the texture will be applied to both interior and exterior surfaces of the polygon." } }, required: ["repeat", "offset", "rotation", "path", "face", "surface", "bounds", "geometryAnchors"], type: "object" }, EnterpriseTextureFace: { enum: ["top", "side"], type: "string" }, EnterpriseTextureGeometryAnchor: { additionalProperties: false, properties: { floorId: { $ref: "#/definitions/FloorId" }, geometryId: { $ref: "#/definitions/SpaceId" } }, required: ["geometryId", "floorId"], type: "object" }, EnterpriseTextureSurface: { enum: ["inside", "outside", "both"], type: "string" }, EnterpriseTextureUV: { additionalProperties: false, properties: { u: { type: "number" }, v: { type: "number" } }, required: ["u", "v"], type: "object" }, EnterpriseVenue: { additionalProperties: false, properties: { countrycode: { description: "The ISO 3166-1 alpha-2 country code of the venue, if known\n\nEg. `US` or `GB`", type: "string" }, coverImage: { description: "The venue's cover image", format: "uri", type: "string" }, defaultFloor: { $ref: "#/definitions/FloorId", description: "The venue's default floor" }, defaultLanguage: { $ref: "#/definitions/Language" }, defaultMap: { $ref: "#/definitions/FloorId", deprecated: "Use `defaultFloor` instead" }, externalId: { type: "string" }, extra: { additionalProperties: {}, type: "object" }, icon: { description: "The venue's icon", format: "uri", type: "string" }, languages: { items: { $ref: "#/definitions/Language" }, type: "array" }, logo: { description: "The venue's logo", format: "uri", type: "string" }, mappedinWebUrl: { description: "The base URL for Mappedin Web for this venue\n\nBetter name?", type: "string" }, name: { type: "string" }, operationHours: { description: "When this venue is open.", items: { $ref: "#/definitions/OperationHours" }, type: "array" }, slug: { type: "string" }, topLocations: { items: { $ref: "#/definitions/EnterpriseLocationId" }, type: "array" }, tzid: { description: "The venue's timezone, from the IANA Time Zone Database. Should be in the format of `America/New_York`", pattern: "^[A-Za-z0-9\\/_-]+$", type: "string" } }, required: ["defaultLanguage", "externalId", "languages", "name", "slug"], type: "object" }, EntranceCollection: { $ref: "#/definitions/FeatureCollection%3CLineString%2CEntranceProperties%3E" }, EntranceId: { pattern: "^e_[A-Za-z0-9_-]{8,}$", type: "string" }, EntranceProperties: { additionalProperties: false, properties: { details: { $ref: "#/definitions/Details" }, externalId: { type: "string" }, id: { $ref: "#/definitions/EntranceId" }, isExterior: { type: "boolean" }, metadata: { $ref: "#/definitions/Metadata" }, node: { $ref: "#/definitions/NodeId" } }, required: ["id", "externalId"], type: "object" }, Facade: { additionalProperties: false, properties: { id: { $ref: "#/definitions/FacadeId" }, spaces: { items: { $ref: "#/definitions/FacadeSpace" }, minItems: 1, type: "array" } }, required: ["id", "spaces"], type: "object" }, FacadeId: { pattern: "^fc_[A-Za-z0-9_-]{8,}$", type: "string" }, FacadeSpace: { additionalProperties: false, properties: { floorId: { $ref: "#/definitions/FloorId" }, spaceId: { $ref: "#/definitions/SpaceId" } }, required: ["floorId", "spaceId"], type: "object" }, "Feature<(Polygon|LineString),ObstructionProperties>": { additionalProperties: false, properties: { geometry: { anyOf: [{ $ref: "#/definitions/Polygon" }, { $ref: "#/definitions/LineString" }] }, properties: { $ref: "#/definitions/ObstructionProperties" }, type: { $ref: "#/definitions/FeatureType" } }, required: ["type", "geometry", "properties"], type: "object" }, "Feature<(Polygon|LineString|Point),SpaceProperties>": { additionalProperties: false, properties: { geometry: { anyOf: [{ $ref: "#/definitions/Polygon" }, { $ref: "#/definitions/LineString" }, { $ref: "#/definitions/Point" }] }, properties: { $ref: "#/definitions/SpaceProperties" }, type: { $ref: "#/definitions/FeatureType" } }, required: ["type", "geometry", "properties"], type: "object" }, "Feature<(Polygon|MultiPolygon|null),FloorProperties>": { additionalProperties: false, properties: { geometry: { anyOf: [{ $ref: "#/definitions/Polygon" }, { $ref: "#/definitions/MultiPolygon" }, { type: "null" }] }, properties: { $ref: "#/definitions/FloorProperties" }, type: { $ref: "#/definitions/FeatureType" } }, required: ["type", "geometry", "properties"], type: "object" }, "Feature<LineString,EntranceProperties>": { additionalProperties: false, properties: { geometry: { $ref: "#/definitions/LineString" }, properties: { $ref: "#/definitions/EntranceProperties" }, type: { $ref: "#/definitions/FeatureType" } }, required: ["type", "geometry", "properties"], type: "object" }, "Feature<Point,FloorImageProperties>": { additionalProperties: false, properties: { geometry: { $ref: "#/definitions/Point" }, properties: { $ref: "#/definitions/FloorImageProperties" }, type: { $ref: "#/definitions/FeatureType" } }, required: ["type", "geometry", "properties"], type: "object" }, "Feature<Point,FloorTextProperties>": { additionalProperties: false, properties: { geometry: { $ref: "#/definitions/Point" }, properties: { $ref: "#/definitions/FloorTextProperties" }, type: { $ref: "#/definitions/FeatureType" } }, required: ["type", "geometry", "properties"], type: "object" }, "Feature<Point,NodeProperties>": { additionalProperties: false, properties: { geometry: { $ref: "#/definitions/Point" }, properties: { $ref: "#/definitions/NodeProperties" }, type: { $ref: "#/definitions/FeatureType" } }, required: ["type", "geometry", "properties"], type: "object" }, "Feature<Point,TextAreaProperties>": { additionalProperties: false, properties: { geometry: { $ref: "#/definitions/Point" }, properties: { $ref: "#/definitions/TextAreaProperties" }, type: { $ref: "#/definitions/FeatureType" } }, required: ["type", "geometry", "properties"], type: "object" }, "Feature<Polygon,FloorStackFootprintProperties>": { additionalProperties: false, properties: { geometry: { $ref: "#/definitions/Polygon" }, properties: { $ref: "#/definitions/FloorStackFootprintProperties" }, type: { $ref: "#/definitions/FeatureType" } }, required: ["type", "geometry", "properties"], type: "object" }, "FeatureCollection<(Polygon|LineString),ObstructionProperties>": { additionalProperties: false, properties: { features: { items: { $ref: "#/definitions/Feature%3C(Polygon%7CLineString)%2CObstructionProperties%3E" }, type: "array" }, type: { $ref: "#/definitions/FeatureCollectionType" } }, required: ["type", "features"], type: "object" }, "FeatureCollection<(Polygon|LineString|Point),SpaceProperties>": { additionalProperties: false, properties: { features: { items: { $ref: "#/definitions/Feature%3C(Polygon%7CLineString%7CPoint)%2CSpaceProperties%3E" }, type: "array" }, type: { $ref: "#/definitions/FeatureCollectionType" } }, required: ["type", "features"], type: "object" }, "FeatureCollection<(Polygon|MultiPolygon|null),FloorProperties>": { additionalProperties: false, properties: { features: { items: { $ref: "#/definitions/Feature%3C(Polygon%7CMultiPolygon%7Cnull)%2CFloorProperties%3E" }, type: "array" }, type: { $ref: "#/definitions/FeatureCollectionType" } }, required: ["type", "features"], type: "object" }, "FeatureCollection<LineString,EntranceProperties>": { additionalProperties: false, properties: { features: { items: { $ref: "#/definitions/Feature%3CLineString%2CEntranceProperties%3E" }, type: "array" }, type: { $ref: "#/definitions/FeatureCollectionType" } }, required: ["type", "features"], type: "object" }, "FeatureCollection<Point,FloorImageProperties>": { additionalProperties: false, properties: { features: { items: { $ref: "#/definitions/Feature%3CPoint%2CFloorImageProperties%3E" }, type: "array" }, type: { $ref: "#/definitions/FeatureCollectionType" } }, required: ["type", "features"], type: "object" }, "FeatureCollection<Point,FloorTextProperties>": { additionalProperties: false, properties: { features: { items: { $ref: "#/definitions/Feature%3CPoint%2CFloorTextProperties%3E" }, type: "array" }, type: { $ref: "#/definitions/FeatureCollectionType" } }, required: ["type", "features"], type: "object" }, "FeatureCollection<Point,NodeProperties>": { additionalProperties: false, properties: { features: { items: { $ref: "#/definitions/Feature%3CPoint%2CNodeProperties%3E" }, type: "array" }, type: { $ref: "#/definitions/FeatureCollectionType" } }, required: ["type", "features"], type: "object" }, "FeatureCollection<Point,TextAreaProperties>": { additionalProperties: false, properties: { features: { items: { $ref: "#/definitions/Feature%3CPoint%2CTextAreaProperties%3E" }, type: "array" }, type: { $ref: "#/definitions/FeatureCollectionType" } }, required: ["type", "features"], type: "object" }, "FeatureCollection<Polygon,FloorStackFootprintProperties>": { additionalProperties: false, properties: { features: { items: { $ref: "#/definitions/Feature%3CPolygon%2CFloorStackFootprintProperties%3E" }, type: "array" }, type: { $ref: "#/definitions/FeatureCollectionType" } }, required: ["type", "features"], type: "object" }, FeatureCollectionType: { const: "FeatureCollection", description: "The type field used for a collection of GeoJSON features.", type: "string" }, FeatureType: { const: "Feature", description: "The type field used for individual GeoJSON features.", type: "string" }, FloatingFloorTextProperties: { additionalProperties: false, properties: { align: { default: "center", description: "Horizontal alignment of multi-line text.", enum: ["left", "center", "right"], type: "string" }, color: { default: "black", description: "The color of the text in CSS format (e.g. `#000000`, `rgb(0, 0, 0)`, `black`).", type: "string" }, fontFamily: { default: "Droid Sans", description: "The font family of the text.", type: "string" }, fontSize: { default: 12, description: "The em-height (multiplier of the font's height) at which to render the font, in meters. The font height is the distance between the ascender (highest point, height of an A) and descender (lowest point, bottom of a g) of the font. For example, if the font-size is 12, the space for a single character will be 12 meters high.", type: "number" }, rotation: { description: "Rotation in degrees, about the center of the text. North is 0, east is 90.", maximum: 360, minimum: 0, type: "number" }, text: { description: "The text to display. Newline characters are supported.", type: "string" }, verticalOffset: { description: "The vertical offset of the text, in meters.", type: "number" }, visible: { default: true, description: "Whether the text is visible.", type: "boolean" } }, required: ["align", "color", "fontFamily", "fontSize", "rotation", "text", "verticalOffset", "visible"], type: "object" }, FloatingImageProperties: { additionalProperties: false, properties: { height: { description: "The height of the image when represented on the map, in meters.", minimum: 0, type: "number" }, path: { description: "The path to the image. This will be a remote URL.", type: "string" }, rotation: { description: "Rotation in degrees, about the center of the image. North is 0, east is 90.", maximum: 360, minimum: 0, type: "number" }, verticalOffset: { description: "How high to position the image, in meters, relative to the ground plane.", minimum: 0, type: "number" }, width: { description: "The width of the image when represented on the map, in meters.", minimum: 0, type: "number" } }, required: ["height", "path", "rotation", "verticalOffset", "width"], type: "object" }, FloatingTextAreaProperties: { additionalProperties: false, properties: { align: { $ref: "#/definitions/TextAreaAlignment", description: "The alignment of the text within the label. 'Near' means the text will be aligned up against the position. Typically in the SDK the text will be rotated to always be upright, so either the start or end of the text will be up against the position. 'Center' means it will be centered in the middle of the area." }, maxHeight: { description: "The maximum height of the label, in meters. Half the height will be above the feature's position, half below.", exclusiveMinimum: 0, type: "number" }, maxWidth: { description: "The maximum width of the label, in meters. The left edge will start at the feature's position and extend in the rotation direction.", exclusiveMinimum: 0, type: "number" }, rotation: { description: "Rotation in degrees relative to north, about the position of the label. North is 0, east is 90.", maximum: 360, minimum: 0, type: "number" }, verticalOffset: { description: "How high to position the text area, in meters, relative to the ground plane.", minimum: 0, type: "number" } }, required: ["align", "maxHeight", "maxWidth", "rotation", "verticalOffset"], type: "object" }, FloorCollection: { $ref: "#/definitions/FeatureCollection%3C(Polygon%7CMultiPolygon%7Cnull)%2CFloorProperties%3E" }, FloorId: { description: "The m_ prefix is deprecated, from when floors were previously called maps. Use f_ as the prefix instead.", pattern: "^[mf]_[A-Za-z0-9_-]{8,}$", type: "string" }, FloorImageFeatureCollection: { $ref: "#/definitions/FeatureCollection%3CPoint%2CFloorImageProperties%3E", description: "A collection of images to be displayed on a map. They are either attached to a polygon or are floating in space." }, FloorImageProperties: { anyOf: [{ $ref: "#/definitions/AnchoredImageProperties" }, { $ref: "#/definitions/FloatingImageProperties" }] }, FloorProperties: { additionalProperties: false, properties: { elevation: { description: "The elevation of this map relative to other maps in the stack. Must be an integer.", type: "integer" }, externalId: { description: "Use of this property as the name of the map is deprecated. Use the name property instead.", type: "string" }, id: { $ref: "#/definitions/FloorId" }, metadata: { $ref: "#/definitions/Metadata" }, name: { type: "string" }, shortName: { description: "A short name for the map, if it exists. Usually one or two characters (eg, 3, F1, L, etc.) For display in very small spaces, like a floor selector dropdown. Might line up with what is shown on elevator buttons in the physical world.", type: "string" }, subtitle: { description: 'A subtitle for the map, for display in larger spaces, usually beneath the full name. Provides additional context for what is actually on the map, if the name is not clear. For example, if the full name is "Level 1", the subtitle might be "Arrivals and Baggage Claim".\n\nShould be no more than a few words.', type: "string" } }, required: ["id", "externalId", "elevation"], type: "object" }, FloorStack: { additionalProperties: false, properties: { defaultFloor: { $ref: "#/definitions/FloorId", description: "The default floor to use when a floor is not specified." }, externalId: { type: "string" }, floors: { description: "A list of floor IDs that belong to this floor stack.", items: { $ref: "#/definitions/FloorId" }, type: "array" }, footprint: { $ref: "#/definitions/FeatureCollection%3CPolygon%2CFloorStackFootprintProperties%3E", description: "Provides a footprint for the map stack based on the geometry of the maps it contains. This is useful for rendering a map stack without loading all of its maps." }, id: { $ref: "#/definitions/FloorStackId" }, maps: { deprecated: "Use `floors` instead.", description: "A list of floor IDs that belong to this floor stack.", items: { $ref: "#/definitions/FloorId" }, type: "array" }, metadata: { $ref: "#/definitions/Metadata" }, name: { type: "string" }, shortName: { description: "A short name for the map stack, if it exists. For display in small spaces, like a floor selector dropdown.", type: "string" }, type: { description: "The type of MapStack, e.g. Building, Outdoor. Defaults to Building.", enum: ["Building", "Outdoor"], type: "string" } }, required: ["id", "externalId", "name", "maps"], type: "object" }, FloorStackFootprintProperties: { additionalProperties: { not: {} }, type: "object" }, FloorStackId: { description: "The mg_ prefix is deprecated, from when floor stacks were previously called map groups. Use fs_ as the prefix instead.", pattern: "^fs_[A-Za-z0-9_-]{8,}$", type: "string" }, FloorStacks: { items: { $ref: "#/definitions/FloorStack" }, type: "array" }, FloorTextFeatureCollection: { $ref: "#/definitions/FeatureCollection%3CPoint%2CFloorTextProperties%3E", description: "A collection of text to be displayed on a map. They are either attached to a space or are floating." }, FloorTextProperties: { anyOf: [{ $ref: "#/definitions/AnchoredFloorTextProperties" }, { $ref: "#/definitions/FloatingFloorTextProperties" }] }, Hyperlink: { additionalProperties: false, properties: { displayName: { type: "string" }, url: { type: "string" } }, required: ["url"], type: "object" }, Image: { additionalProperties: false, properties: { altText: { type: "string" }, url: { type: "string" } }, required: ["url"], type: "object" }, Language: { additionalProperties: false, properties: { code: { type: "string" }, name: { type: "string" } }, required: ["name", "code"], type: "object" }, Latitude: { description: "A WGS 84-compatible latitude coordinate value.", maximum: 90, minimum: -90, type: "number" }, LineString: { additionalProperties: false, description: "An RFC-7946 compatible GeoJSON LineString geometry.", properties: { coordinates: { items: { $ref: "#/definitions/Position" }, minItems: 2, type: "array" }, type: { const: "LineString", type: "string" } }, required: ["coordinates", "type"], type: "object" }, LineStringStyle: { additionalProperties: false, properties: { altitude: { description: 'How far off the "ground" the objects belonging to this layer should be drawn, in meters.', minimum: 0, type: "number" }, color: { description: "Color should be represented with a hash (#), followed by 6 hexadecimal digits. ex: #RRGGBB", pattern: "^#[0-9a-fA-F]{6}$", type: "string" }, height: { description: "The height of the objects belonging to this layer, in meters.", minimum: 0, type: "number" }, lineStrings: { description: "The line strings which this style applies to.", items: { anyOf: [{ $ref: "#/definitions/EntranceId" }, { $ref: "#/definitions/ObstructionId" }, { $ref: "#/definitions/SpaceId" }] }, type: "array" }, opacity: { maximum: 1, minimum: 0, type: "number" }, width: { description: "The thickness of the line when rendered, in meters, measured from the center to the edge.", exclusiveMinimum: 0, type: "number" } }, required: ["altitude", "color", "height", "lineStrings", "opacity", "width"], type: "object" }, LocalPosition: { description: "A position for a local coordinate system, measured in metres.", items: { type: "number" }, maxItems: 2, minItems: 2, type: "array" }, Location: { additionalProperties: false, properties: { annotations: { items: { $ref: "#/definitions/LocationAnnotationMapping" }, type: "array" }, areas: { items: { $ref: "#/definitions/LocationAreaMapping" }, type: "array" }, categories: { items: { $ref: "#/definitions/CategoryId" }, type: "array" }, connections: { items: { $ref: "#/definitions/ConnectionId" }, type: "array" }, description: { type: "string" }, entrances: { items: { $ref: "#/definitions/LocationEntranceMapping" }, type: "array" }, externalId: { type: "string" }, icon: { description: "The location's icon, one of picture/category/logo", format: "uri", type: "string" }, id: { $ref: "#/definitions/LocationId" }, links: { description: "Web links for the location", items: { $ref: "#/definitions/LocationLink" }, type: "array" }, logo: { description: "The location's logo", format: "uri", type: "string" }, name: { type: "string" }, obstructions: { items: { $ref: "#/definitions/LocationObstructionMapping" }, type: "array" }, openingHoursSpecification: { description: "The location's opening hours", items: { $ref: "#/definitions/OpeningHoursSpecification" }, type: "array" }, phone: { type: "string" }, pictures: { description: "The location's pictures", items: { $ref: "#/definitions/LocationPicture" }, type: "array" }, social: { description: "The location's social media links.", items: { $ref: "#/definitions/LocationSocial" }, type: "array" }, spaces: { items: { $ref: "#/definitions/LocationSpaceMapping" }, type: "array" }, website: { $ref: "#/definitions/LocationLink", description: "The location's website" } }, required: ["id", "name", "categories", "spaces", "obstructions", "entrances", "connections", "annotations", "areas", "social", "pictures", "links", "openingHoursSpecification"], type: "object" }, LocationAnnotationMapping: { additionalProperties: false, properties: { floor: { $ref: "#/definitions/FloorId" }, id: { $ref: "#/definitions/AnnotationId" } }, required: ["floor", "id"], type: "object" }, LocationAreaMapping: { additionalProperties: false, properties: { floor: { $ref: "#/definitions/FloorId" }, id: { $ref: "#/definitions/AreaId" } }, required: ["floor", "id"], type: "object" }, LocationEntranceMapping: { additionalProperties: false, properties: { floor: { $ref: "#/definitions/FloorId" }, id: { $ref: "#/definitions/EntranceId" } }, required: ["floor", "id"], type: "object" }, LocationId: { description: "An ID for a location", pattern: "^loc_[A-Za-z0-9_-]{8,}$", type: "string" }, LocationLink: { additionalProperties: false, properties: { label: { type: "string" }, url: { description: "The URL of the link", format: "uri", type: "string" } }, required: ["label", "url"], type: "object" }, LocationObstructionMapping: { additionalProperties: false, properties: { floor: { $ref: "#/definitions/FloorId" }, id: { $ref: "#/definitions/ObstructionId" } }, required: ["floor", "id"], type: "object" }, LocationPicture: { additionalProperties: false, description: "The location's pictures Single-field object, because it's plausible we might add captions or comments in the future", properties: { url: { format: "uri", type: "string" } }, type: "object" }, LocationSocial: { additionalProperties: false, properties: { name: { description: "The name of the social media platform.", type: "string" }, url: { description: "The URL of the social media profile", format: "uri", type: "string" } }, required: ["name", "url"], type: "object" }, LocationSpaceMapping: { additionalProperties: false, properties: { floor: { $ref: "#/definitions/FloorId" }, id: { $ref: "#/definitions/SpaceId" } }, required: ["floor", "id"], type: "object" }, LocationState: { additionalProperties: false, description: "The state of a location. Start and end dates are optional.", properties: { end: { description: "The start date of the state", format: "date", type: "string" }, start: { description: "The start date of the state", format: "date", type: "string" }, type: { description: "The type of the location state. Technically not limited, but should be one of the following:\n- closed-temporarily\n- new\n- pop-up\n- coming-soon\n- relocated", type: "string" } }, required: ["type"], type: "object" }, Longitude: { description: "A WGS 84-compatible longitude coordinate value.", maximum: 180, minimum: -180, type: "number" }, ManifestCollection: { additionalProperties: false, properties: { features: { items: { $ref: "#/definitions/ManifestFeature" }, maxItems: 1, minItems: 1, type: "array" }, type: { $ref: "#/definitions/FeatureCollectionType" } }, required: ["type", "features"], type: "object" }, ManifestFeature: { additionalProperties: false, properties: { geometry: { $ref: "#/definitions/Point" }, properties: { $ref: "#/definitions/ManifestProperties" }, type: { $ref: "#/definitions/FeatureType" } }, required: ["type", "geometry", "properties"], type: "object" }, ManifestFile: { additionalProperties: false, properties: { name: { type: "string" }, type: { const: "file", type: "string" } }, required: ["type", "name"], type: "object" }, ManifestFolder: { additionalProperties: false, properties: { children: { items: { $ref: "#/definitions/ManifestFile" }, minItems: 1, type: "array" }, name: { type: "string" }, type: { const: "folder", type: "string" } }, required: ["type", "name", "children"], type: "object" }, ManifestProperties: { additionalProperties: false, properties: { folder_struct: { items: { anyOf: [{ $ref: "#/definitions/ManifestFolder" }, { $ref: "#/definitions/ManifestFile" }] }, type: "array" }, language: { description: "The RFC 5646 language tag of the MVF. https://datatracker.ietf.org/doc/html/rfc5646", examples: ["en-US"], type: "string" }, map: { description: "The identifier of the map that this MVF is for.", type: "string" }, name: { type: "string" }, naturalBearing: { description: 'The angle, in degrees, the map is considered to be "naturally oriented" as, rather than facing directly north. 90 degrees means East is "up"', maximum: 360, minimum: 0, type: "number" }, org_id: { type: "string" }, time: { description: "An ISO 8601 date-time string, including timezone offset.", format: "date-time", type: "string" }, tzid: { description: "The map's timezone, from the IANA Time Zone Database. Should be in the format of `America/New_York`", examples: ["America/New_York"], pattern: "^[A-Za-z0-9_-]+\\/[A-Za-z0-9_-]+$", type: "string" }, version: { const: "2.0.0", type: "string" } }, required: ["name", "folder_struct", "version", "time"], type: "object" }, Maps: { deprecated: "This is only present on `map.geojson` which is deprecated. Use\nthe collection on `floor.geojson` instead.", items: { $ref: "#/definitions/FloorProperties" }, type: "array" }, Material: { additionalProperties: false, description: "The color and/or texture that should be applied to an instance of a Shape.\n\nIf both a color and a texture are provided, the color will be applied to the texture via a multiply operation. If neither are provided, the shape will be white.", properties: { color: { description: "The color of this mateial as a hex code.", pattern: "^#[0-9a-fA-F]{6}$", type: "string" }, texture: { $ref: "#/definitions/Texture" } }, type: "object" }, Metadata: { additionalProperties: {}, description: "Can be any extra metadata that is not part of the main MVF spec. Presence of any key or value is not guaranteed. Values are expected to be JSON-serializable.", type: "object" }, ModelInstance: { additionalProperties: false, description: "An instance of a 3D model.", properties: { altitude: { description: "The distance above ground, in metres, where this Decoration's origin point should be placed.", type: "number" }, path: { description: "The path to this asset, relative to the MVF's models folder. Supports GLTF and OBJ.", minLength: 1, type: "string" }, position: { $ref: "#/definitions/Position", description: "The long/lat point that the Decoration's origin point correponds to." }, rotation: { $ref: "#/definitions/Vector3", description: "The rotation, in Euler angles in XYZ order, that will be applied to this Decoration." }, scale: { $ref: "#/definitions/Vector3", description: "The X, Y and Z scale that will be applied to this Decoration." } }, required: ["altitude", "path", "position", "rotation", "scale"], type: "object" }, ModelInstanceCollection: { additionalProperties: { $ref: "#/definitions/ModelInstance" }, description: "A map of model instances, where keys are valid polygon or obstruction IDs. Replaces the specified polygon.", type: "object" }, MultiPolygon: { additionalProperties: false, description: "An RFC-7946 compatible GeoJSON MultiPolygon geometry.", properties: { coordinates: { items: { items: { items: { $ref: "#/definitions/Position" }, type: "array" }, type: "array" }, type: "array" }, type: { const: "MultiPolygon", type: "string" } }, required: ["coordinates", "type"], type: "object" }, NodeCollection: { $ref: "#/definitions/FeatureCollection%3CPoint%2CNodeProperties%3E" }, NodeId: { pattern: "^n_[A-Za-z0-9_-]{8,}$", type: "string" }, NodeProperties: { additionalProperties: false, properties: { externalId: { type: "string" }, floor: { $ref: "#/definitions/FloorId", description: "The ID of the floor this node is found on." }, id: { $ref: "#/definitions/NodeId" }, map: { $ref: "#/definitions/FloorId", deprecated: "use `floor` instead.", description: "The ID of the floor this node is found on." }, neighbors: { description: "A list of nodes that can be navigated to from this node.", items: { additionalProperties: false, properties: { id: { $ref: "#/definitions/NodeId" }, weight: { description: "The cost of navigating to this node.", minimum: 0, type: "number" } }, required: ["id", "weight"], type: "object" }, type: "array" }, preventSmoothing: { description: "Flag that may optionally indicate that a node is part of a custom path network rather than auto generated and should not be removed during smoothing/simplifcation.", type: "boolean" }, space: { description: "The IDs of any spaces this node may be contained within.", items: { $ref: "#/definitions/SpaceId" }, type: "array" } }, required: ["id", "externalId", "map", "space", "neighbors"], type: "object" }, ObstructionCollection: { $ref: "#/definitions/FeatureCollection%3C(Polygon%7CLineString)%2CObstructionProperties%3E" }, ObstructionId: { pattern: "^o_[A-Za-z0-9_-]{8,}$", type: "string" }, ObstructionProperties: { additionalProperties: false, properties: { center: { $ref: "#/definitions/Position", description: "The center of mass of this obstruction, if it is a polygon. This is undefined for line strings as this can be trivially derived." }, details: { $ref: "#/definitions/Details" }, entrances: { description: "A list of entrance IDs corresponding to entrances that can be used to navigate through this obstruction.", items: { $ref: "#/definitions/EntranceId" }, type: "array" }, externalId: { type: "string" }, footprintComponent: { description: "Indicates whether this obstruction is considered part of the footprint of the building it is a part of. For example, an exterior wall would be considered part of the building footprint.", type: "boolean" }, id: { $ref: "#/definitions/ObstructionId" }, kind: { type: "string" }, metadata: { $ref: "#/definitions/Metadata" } }, required: ["id", "externalId", "entrances"], type: "object" }, OpeningHoursSpecification: { additionalProperties: false, description: `We (almost) follow this schema (http://schema.org/OpeningHoursSpecification) The only difference is that we (like Google: https://developers.google.com/search/docs/data-types/local-businesses) accept dayOfWeek as an array as well as an individual day.

Behavioral notes:
- if the "opens" property is not present, the location is closed, and the closes property is ignored (Schema.org style)
- if opens/closes are both set to 00:00, the location is closed (Google style)
- If special hours do not specifiy certain weekdays being open, those weekdays are closed.
- Not specifying dayOfWeek is equivalent to specifying every day of the week.
- we will omit the '@type' property when producing MVFs. But we won't reject 3rd party MVFs that include it.`, properties: { "@type": { const: "OpeningHoursSpecification", default: "OpeningHoursSpecification", description: "The type of opening hours", type: "string" }, closes: { $ref: "#/definitions/Time", description: "The time the opening hours end" }, dayOfWeek: { anyOf: [{ $ref: "#/definitions/DayOrPublicHoliday" }, { items: { $ref: "#/definitions/DayOrPublicHoliday" }, maxItems: 1, minItems: 1, type: "array" }, { items: { $ref: "#/definitions/DayOrPublicHoliday" }, type: "array" }], description: "The days of the week the opening hours apply to" }, opens: { $ref: "#/definitions/Time", description: "The time the opening hours start" }, validFrom: { description: "The date the opening hours start, in ISO 8601 format", format: "date-time", type: "string" }, validThrough: { description: "The date the opening hours end, in ISO 8601 format", format: "date-time", type: "string" } }, type: "object" }, OperationHours: { additionalProperties: false, description: "We (almost) follow this schema (http://schema.org/OpeningHoursSpecification) The only difference is that we (like Google: https://developers.google.com/search/docs/data-types/local-businesses) accept dayOfWeek as an array as well as an individual day.", properties: { "@type": { const: "OpeningHoursSpecification", default: "OpeningHoursSpecification", description: "The type of operation hours", type: "string" }, closes: { $ref: "#/definitions/Time", description: "The time the operation hours end" }, dayOfWeek: { anyOf: [{ $ref: "#/definitions/DayOrPublicHoliday" }, { items: { $ref: "#/definitions/DayOrPublicHoliday" }, maxItems: 1, minItems: 1, type: "array" }, { items: { $ref: "#/definitions/DayOrPublicHoliday" }, type: "array" }], description: "The days of the week the operation hours apply to" }, opens: { $ref: "#/definitions/Time", description: "The time the operation hours start" }, validFrom: { description: "The date the operation hours start, in ISO 8601 format", format: "date-time", type: "string" }, validThrough: { description: "The date the operation hours end, in ISO 8601 format", format: "date-time", type: "string" } }, type: "object" }, ParsedMVF: { additionalProperties: false, properties: { annotation: { additionalProperties: { anyOf: [{ $ref: "#/definitions/AnnotationCollection" }, { not: {} }] }, propertyNames: { pattern: "^[mf]_[A-Za-z0-9_-]{8,}$" }, type: "object" }, area: { additionalProperties: { anyOf: [{ $ref: "#/definitions/AreaCollection" }, { not: {} }] }, propertyNames: { pattern: "^[mf]_[A-Za-z0-9_-]{8,}$" }, type: "object" }, "category.json": { items: { $ref: "#/definitions/Category" }, type: "array" }, "connection.json": { $ref: "#/definitions/Connections" }, enterprise: { $ref: "#/definitions/EnterpriseCollection" }, entrance: { additionalProperties: { anyOf: [{ $ref: "#/definitions/EntranceCollection" }, { not: {} }] }, propertyNames: { pattern: "^[mf]_[A-Za-z0-9_-]{8,}$" }, type: "object" }, facade: { additionalProperties: { anyOf: [{ $ref: "#/definitions/Facade" }, { not: {} }] }, propertyNames: { pattern: "^fs_[A-Za-z0-9_-]{8,}$" }, type: "object" }, "floor.geojson": { $ref: "#/definitions/FloorCollection" }, floorImages: { additionalProperties: { anyOf: [{ $ref: "#/definitions/FloorImageFeatureCollection" }, { not: {} }] }, propertyNames: { pattern: "^[mf]_[A-Za-z0-9_-]{8,}$" }, type: "object" }, "floorstack.json": { $ref: "#/definitions/FloorStacks" }, "location.json": { items: { $ref: "#/definitions/Location" }, type: "array" }, "manifest.geojson": { $ref: "#/definitions/ManifestCollection" }, "map.geojson": { $ref: "#/definitions/Maps", deprecated: "Use `floor.geojson` instead." }, "mapstack.geojson": { $ref: "#/definitions/FloorStacks", deprecated: "Use `floorstack.json` instead." }, "mapstack.json": { $ref: "#/definitions/FloorStacks", deprecated: "Use `floorstack.json` instead." }, modelInstances: { additionalProperties: { anyOf: [{ $ref: "#/definitions/ModelInstanceCollection" }, { not: {} }] }, propertyNames: { pattern: "^[mf]_[A-Za-z0-9_-]{8,}$" }, type: "object" }, "node.geojson": { $ref: "#/definitions/NodeCollection" }, obstruction: { additionalProperties: { anyOf: [{ $ref: "#/definitions/ObstructionCollection" }, { not: {} }] }, propertyNames: { pattern: "^[mf]_[A-Za-z0-9_-]{8,}$" }, type: "object" }, shapeInstances: { additionalProperties: { anyOf: [{ $ref: "#/definitions/ShapeInstanceCollection" }, { not: {} }] }, propertyNames: { pattern: "^[mf]_[A-Za-z0-9_-]{8,}$" }, type: "object" }, "shapes.json": { $ref: "#/definitions/ShapeCollection" }, space: { additionalProperties: { anyOf: [{ $ref: "#/definitions/SpaceCollection" }, { not: {} }] }, propertyNames: { pattern: "^[mf]_[A-Za-z0-9_-]{8,}$" }, type: "object" }, "styles.json": { $ref: "#/definitions/StyleCollection" }, textAreas: { additionalProperties: { anyOf: [{ $ref: "#/definitions/TextAreaFeatureCollection" }, { not: {} }] }, propertyNames: { pattern: "^[mf]_[A-Za-z0-9_-]{8,}$" }, type: "object" }, "tileset.json": { $ref: "#/definitions/TilesetCollection" }, window: { additionalProperties: { anyOf: [{ $ref: "#/definitions/WindowCollection" }, { not: {} }] }, propertyNames: { pattern: "^[mf]_[A-Za-z0-9_-]{8,}$" }, type: "object" } }, required: ["manifest.geojson", "mapstack.geojson", "map.geojson", "space", "obstruction", "connection.json", "node.geojson", "entrance"], type: "object" }, Point: { additionalProperties: false, description: "An RFC-7946 compatible GeoJSON Point geometry.", properties: { coordinates: { $ref: "#/definitions/Position" }, type: { const: "Point", type: "string" } }, required: ["coordinates", "type"], type: "object" }, PointStyle: { additionalProperties: false, properties: { points: { description: "The points which this style applies to.", items: { $ref: "#/definitions/SpaceId" }, type: "array" }, showImage: { description: "Whether or not the first image attached to the space or obstruction should be displayed on the point.", type: "boolean" } }, required: ["points"], type: "object" }, Polygon: { additionalProperties: false, description: "An RFC-7946 compatible GeoJSON Polygon geometry.", properties: { coordinates: { items: { items: { $ref: "#/definitions/Position" }, type: "array" }, type: "array" }, type: { const: "Polygon", type: "string" } }, required: ["coordinates", "type"], type: "object" }, PolygonStyle: { additionalProperties: false, properties: { altitude: { description: 'How far off the "ground" the objects belonging to this layer should be drawn, in meters.', minimum: 0, type: "number" }, color: { description: "Color should be represented with a hash (#), followed by 6 hexadecimal digits. ex: #RRGGBB", pattern: "^#[0-9a-fA-F]{6}$", type: "string" }, height: { description: "The height of the objects belonging to this layer, in meters.", minimum: 0, type: "number" }, opacity: { maximum: 1, minimum: 0, type: "number" }, polygons: { description: "The polygons which this style applies to.", items: { anyOf: [{ $ref: "#/definitions/ObstructionId" }, { $ref: "#/definitions/SpaceId" }] }, type: "array" }, showImage: { description: "Whether or not the first image attached to the space or obstruction should be displayed on the polygon.", type: "boolean" } }, required: ["altitude", "color", "height", "opacity", "polygons"], type: "object" }, Position: { description: "A valid WGS 84 position consisting of a longitude coodinate, followed by a latitude coordinate.", items: [{ $ref: "#/definitions/Longitude" }, { $ref: "#/definitions/Latitude" }], maxItems: 2, minItems: 2, type: "array" }, Ring: { description: "A simple shape for part of a complex polygon", items: { $ref: "#/definitions/LocalPosition" }, minItems: 3, type: "array" }, Shape: { description: "A 3D object made from extruded 2D polygons, that can be rendered to the map as a ShapeInstance.", items: { $ref: "#/definitions/ShapeComponent" }, minItems: 1, type: "array" }, ShapeCollection: { additionalProperties: { $ref: "#/definitions/Shape" }, description: "A group of Shapes, without any information as to how they will be placed in a scene.", propertyNames: { pattern: "^sh_[A-Za-z0-9_-]{8,}$" }, type: "object" }, ShapeComponent: { additionalProperties: false, description: "A single extruded 2D polygon.", properties: { altitude: { description: "In metres.", type: "number" }, geometry: { description: "Can contain holes, like GeoJSON.", items: { $ref: "#/definitions/Ring" }, minItems: 1, type: "array" }, height: { description: "In metres.", exclusiveMinimum: 0, type: "number" } }, required: ["geometry", "altitude", "height"], type: "object" }, ShapeId: { pattern: "^sh_[A-Za-z0-9_-]{8,}$", type: "string" }, ShapeInstance: { additionalProperties: false, description: "An instance of a Shape.", properties: { altitude: { description: "The distance above ground, in metres, where this Decoration's origin point should be placed.", type: "number" }, id: { $ref: "#/definitions/ShapeId", description: "The identifier of the Shape to be placed." }, material: { $ref: "#/definitions/Material", description: "The color and/or texture to apply to this shape instance." }, position: { $ref: "#/definitions/Position", description: "The long/lat point that the Decoration's origin point correponds to." }, rotation: { $ref: "#/definitions/Vector3", description: "The rotation, in Euler angles in XYZ order, that will be applied to this Decoration." }, scale: { $ref: "#/definitions/Vector3", description: "The X, Y and Z scale that will be applied to this Decoration." } }, required: ["altitude", "id", "material", "position", "rotation", "scale"], type: "object" }, ShapeInstanceCollection: { additionalProperties: { $ref: "#/definitions/ShapeInstance" }, description: "A map of shape instances, where keys are valid polygon or obstruction IDs. Replaces the specified polygon.", type: "object" }, SiblingGroup: { additionalProperties: false, properties: { label: { type: "string" }, siblings: { items: { $ref: "#/definitions/EnterpriseLocationId" }, type: "array" } }, required: ["label", "siblings"], type: "object" }, SpaceCollection: { $ref: "#/definitions/FeatureCollection%3C(Polygon%7CLineString%7CPoint)%2CSpaceProperties%3E" }, SpaceId: { pattern: "^s_[A-Za-z0-9_-]{8,}$", type: "string" }, SpaceProperties: { additionalProperties: false, properties: { center: { $ref: "#/definitions/Position", description: "The center of mass of this space, if it is a polygon. This is undefined for line string and point spaces as these can be trivially derived." }, destinationNodes: { description: "A list of node IDs which can be used to navigate to this space.", items: { $ref: "#/definitions/NodeId" }, type: "array" }, details: { $ref: "#/definitions/Details" }, externalId: { type: "string" }, id: { $ref: "#/definitions/SpaceId" }, kind: { type: "string" }, metadata: { $ref: "#/definitions/Metadata" }, tags: { description: "A list of tags that may apply to categorize the space, e.g. Void", items: { type: "string" }, type: "array" } }, required: ["id", "externalId", "destinationNodes"], type: "object" }, StyleCollection: { additionalProperties: { anyOf: [{ $ref: "#/definitions/PolygonStyle" }, { $ref: "#/definitions/LineStringStyle" }, { $ref: "#/definitions/PointStyle" }, { not: {} }] }, description: "A map of layer styles, where keys represent the group IDs of each style.", type: "object" }, TextAreaAlignment: { enum: ["near", "center"], type: "string" }, TextAreaFeatureCollection: { $ref: "#/definitions/FeatureCollection%3CPoint%2CTextAreaProperties%3E", description: "A collection of text areas to be displayed on a map. They are either attached to a polygon or are floating in space." }, TextAreaProperties: { anyOf: [{ $ref: "#/definitions/AnchoredTextAreaProperties" }, { $ref: "#/definitions/FloatingTextAreaProperties" }] }, Texture: { additionalProperties: false, description: "A reference to an image texture and how it should be applied to a Component.", properties: { path: { description: "The path to this asset, relative to the MVF's images folder.", minLength: 1, type: "string" }, repeat: { $ref: "#/definitions/TextureRepeat" } }, required: ["path"], type: "object" }, TextureRepeat: { additionalProperties: false, description: "How a texture should be placed on a Component.", properties: { u: { type: "number" }, v: { type: "number" } }, required: ["u", "v"], type: "object" }, TilesetCollection: { additionalProperties: false, description: "Collection of tileset styles", properties: { default: { $ref: "#/definitions/TilesetStyle", description: "Default tileset style that should be used" }, others: { description: "Additional tileset styles that can be used", items: { $ref: "#/definitions/TilesetStyle" }, type: "array" } }, required: ["default"], type: "object" }, TilesetStyle: { additionalProperties: false, description: "A tileset style definition", properties: { key: { description: "Unique identifier for this tileset style", minLength: 1, type: "string" }, name: { description: "Display name for this tileset style", minLength: 1, type: "string" }, url: { description: "URL to the tileset style definition. This should be a JSON file matching the MapLibre style specification.", format: "uri", type: "string" } }, required: ["key", "name", "url"], type: "object" }, Time: { description: "A time in the format of HH:MM:SS", pattern: "^[0-2][0-9]:[0-6][0-9](:[0-6][0-9])?$", type: "string" }, Vector3: { description: "A three-number tuple.", items: { type: "number" }, maxItems: 3, minItems: 3, type: "array" }, WindowCollection: { additionalProperties: false, properties: { features: { items: { additionalProperties: false, properties: { geometry: { $ref: "#/definitions/LineString" }, properties: { $ref: "#/definitions/WindowProperties" }, type: { $ref: "#/definitions/FeatureType" } }, required: ["type", "geometry", "properties"], type: "object" }, type: "array" }, type: { $ref: "#/definitions/FeatureCollectionType" } }, required: ["type", "features"], type: "object" }, WindowId: { pattern: "^w_[A-Za-z0-9_-]{8,}$", type: "string" }, WindowProperties: { additionalProperties: false, properties: { id: { $ref: "#/definitions/WindowId" } }, required: ["id"], type: "object" } } };
var Tc = MP.default.default(new CP.default.default()).compile(Ec(RP)), LP = H((e) => Tc(e), "validateMvf");
H((e) => {
  var t, r;
  return Tc(e), (r = (t = Tc.errors) == null ? void 0 : t.map((n) => {
    let i = Tc.schema.$ref, s = n.instancePath, a4 = n.message;
    return "".concat(i).concat(s, ": ").concat(a4);
  })) != null ? r : [];
}, "getMvfValidationErrors");
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
var RN = H((e) => {
  if (e === "space" || e === "obstruction" || e === "entrance") return {};
}, "defaultEntry"), CN = /\.json|\.geojson$/, vc = H((e, t, r) => {
  let n = e[t];
  if (typeof n != "object" || Object.keys(n).length === 0) return RN(t);
  let i = {};
  for (let [s, a4] of Object.entries(n)) {
    let f = s.replace(CN, "");
    i[f] = JSON.parse(r(a4));
  }
  return i;
}, "rawFolderToParsed"), MN = ["floorstack.json", "styles.json", "shapes.json", "mapstack.json", "floor.geojson", "tileset.json", "location.json", "category.json"], LN = MN, UN = ["annotation", "textAreas", "enterprise", "floorImages", "shapeInstances", "modelInstances", "window", "area", "facade"], DN = UN;
H((e) => {
  let t = new TextDecoder("utf-8"), r = t.decode.bind(t), n = { "manifest.geojson": JSON.parse(r(e["manifest.geojson"])), "mapstack.geojson": JSON.parse(r(e["mapstack.geojson"])), "map.geojson": JSON.parse(r(e["map.geojson"])), "node.geojson": JSON.parse(r(e["node.geojson"])), "connection.json": JSON.parse(r(e["connection.json"])), space: vc(e, "space", r), obstruction: vc(e, "obstruction", r), entrance: vc(e, "entrance", r) };
  for (let i of LN) e[i] && (n[i] = JSON.parse(r(e[i])));
  for (let i of DN) e[i] && (n[i] = vc(e, i, r));
  return n;
}, "rawToParsedMVF");
a();
a();
a();
a();
a();
a();
var Pe = {};
M(Pe, { HasPropertyKey: () => KN, IsArray: () => zt, IsAsyncIterator: () => $d, IsBigInt: () => Rs, IsBoolean: () => io, IsDate: () => vo, IsFunction: () => wd, IsIterator: () => Pd, IsNull: () => Od, IsNumber: () => Br, IsObject: () => Je, IsRegExp: () => Cs, IsString: () => et, IsSymbol: () => Fd, IsUint8Array: () => jn, IsUndefined: () => ut });
a();
function KN(e, t) {
  return t in e;
}
H(KN, "HasPropertyKey");
function $d(e) {
  return Je(e) && !zt(e) && !jn(e) && Symbol.asyncIterator in e;
}
H($d, "IsAsyncIterator");
function zt(e) {
  return Array.isArray(e);
}
H(zt, "IsArray");
function Rs(e) {
  return typeof e == "bigint";
}
H(Rs, "IsBigInt");
function io(e) {
  return typeof e == "boolean";
}
H(io, "IsBoolean");
function vo(e) {
  return e instanceof globalThis.Date;
}
H(vo, "IsDate");
function wd(e) {
  return typeof e == "function";
}
H(wd, "IsFunction");
function Pd(e) {
  return Je(e) && !zt(e) && !jn(e) && Symbol.iterator in e;
}
H(Pd, "IsIterator");
function Od(e) {
  return e === null;
}
H(Od, "IsNull");
function Br(e) {
  return typeof e == "number";
}
H(Br, "IsNumber");
function Je(e) {
  return typeof e == "object" && e !== null;
}
H(Je, "IsObject");
function Cs(e) {
  return e instanceof globalThis.RegExp;
}
H(Cs, "IsRegExp");
function et(e) {
  return typeof e == "string";
}
H(et, "IsString");
function Fd(e) {
  return typeof e == "symbol";
}
H(Fd, "IsSymbol");
function jn(e) {
  return e instanceof globalThis.Uint8Array;
}
H(jn, "IsUint8Array");
function ut(e) {
  return e === void 0;
}
H(ut, "IsUndefined");
function zN(e) {
  return e.map((t) => Ac(t));
}
H(zN, "ArrayType");
function GN(e) {
  return new Date(e.getTime());
}
H(GN, "DateType");
function BN(e) {
  return new Uint8Array(e);
}
H(BN, "Uint8ArrayType");
function VN(e) {
  return new RegExp(e.source, e.flags);
}
H(VN, "RegExpType");
function WN(e) {
  let t = {};
  for (let r of Object.getOwnPropertyNames(e)) t[r] = Ac(e[r]);
  for (let r of Object.getOwnPropertySymbols(e)) t[r] = Ac(e[r]);
  return t;
}
H(WN, "ObjectType");
function Ac(e) {
  return zt(e) ? zN(e) : vo(e) ? GN(e) : jn(e) ? BN(e) : Cs(e) ? VN(e) : Je(e) ? WN(e) : e;
}
H(Ac, "Visit");
function it(e) {
  return Ac(e);
}
H(it, "Clone");
function UP(e) {
  return e.map((t) => Ms(t));
}
H(UP, "CloneRest");
function Ms(e, t) {
  return t === void 0 ? it(e) : it(F(F({}, t), e));
}
H(Ms, "CloneType");
a();
a();
a();
function jc(e) {
  return pe(e) && Symbol.asyncIterator in e;
}
H(jc, "IsAsyncIterator");
function kc(e) {
  return pe(e) && Symbol.iterator in e;
}
H(kc, "IsIterator");
function Sd(e) {
  return pe(e) && (Object.getPrototypeOf(e) === Object.prototype || Object.getPrototypeOf(e) === null);
}
H(Sd, "IsStandardObject");
function _c(e) {
  return e instanceof Promise;
}
H(_c, "IsPromise");
function Qt(e) {
  return e instanceof Date && Number.isFinite(e.getTime());
}
H(Qt, "IsDate");
function DP(e) {
  return e instanceof globalThis.Map;
}
H(DP, "IsMap");
function qP(e) {
  return e instanceof globalThis.Set;
}
H(qP, "IsSet");
function Or(e) {
  return ArrayBuffer.isView(e);
}
H(Or, "IsTypedArray");
function hi(e) {
  return e instanceof globalThis.Uint8Array;
}
H(hi, "IsUint8Array");
function oe(e, t) {
  return t in e;
}
H(oe, "HasPropertyKey");
function pe(e) {
  return e !== null && typeof e == "object";
}
H(pe, "IsObject");
function ue(e) {
  return Array.isArray(e) && !ArrayBuffer.isView(e);
}
H(ue, "IsArray");
function pt(e) {
  return e === void 0;
}
H(pt, "IsUndefined");
function kn(e) {
  return e === null;
}
H(kn, "IsNull");
function cn(e) {
  return typeof e == "boolean";
}
H(cn, "IsBoolean");
function re(e) {
  return typeof e == "number";
}
H(re, "IsNumber");
function Nc(e) {
  return Number.isInteger(e);
}
H(Nc, "IsInteger");
function Nt(e) {
  return typeof e == "bigint";
}
H(Nt, "IsBigInt");
function Oe(e) {
  return typeof e == "string";
}
H(Oe, "IsString");
function so(e) {
  return typeof e == "function";
}
H(so, "IsFunction");
function _n(e) {
  return typeof e == "symbol";
}
H(_n, "IsSymbol");
function Rt(e) {
  return Nt(e) || cn(e) || kn(e) || re(e) || Oe(e) || _n(e) || pt(e);
}
H(Rt, "IsValueType");
var ze;
(function(e) {
  e.InstanceMode = "default", e.ExactOptionalPropertyTypes = false, e.AllowArrayObject = false, e.AllowNaN = false, e.AllowNullVoid = false;
  function t(a4, f) {
    return e.ExactOptionalPropertyTypes ? f in a4 : a4[f] !== void 0;
  }
  H(t, "IsExactOptionalProperty"), e.IsExactOptionalProperty = t;
  function r(a4) {
    let f = pe(a4);
    return e.AllowArrayObject ? f : f && !ue(a4);
  }
  H(r, "IsObjectLike"), e.IsObjectLike = r;
  function n(a4) {
    return r(a4) && !(a4 instanceof Date) && !(a4 instanceof Uint8Array);
  }
  H(n, "IsRecordLike"), e.IsRecordLike = n;
  function i(a4) {
    return e.AllowNaN ? re(a4) : Number.isFinite(a4);
  }
  H(i, "IsNumberLike"), e.IsNumberLike = i;
  function s(a4) {
    let f = pt(a4);
    return e.AllowNullVoid ? f || a4 === null : f;
  }
  H(s, "IsVoidLike"), e.IsVoidLike = s;
})(ze || (ze = {}));
a();
function HN(e) {
  return globalThis.Object.freeze(e).map((t) => Ls(t));
}
H(HN, "ImmutableArray");
function ZN(e) {
  let t = {};
  for (let r of Object.getOwnPropertyNames(e)) t[r] = Ls(e[r]);
  for (let r of Object.getOwnPropertySymbols(e)) t[r] = Ls(e[r]);
  return globalThis.Object.freeze(t);
}
H(ZN, "ImmutableObject");
function Ls(e) {
  return zt(e) ? HN(e) : vo(e) ? e : jn(e) ? e : Cs(e) ? e : Je(e) ? ZN(e) : e;
}
H(Ls, "Immutable");
function j(e, t) {
  let r = t !== void 0 ? F(F({}, t), e) : e;
  switch (ze.InstanceMode) {
    case "freeze":
      return Ls(r);
    case "clone":
      return it(r);
    default:
      return r;
  }
}
H(j, "CreateType");
a();
var Ed = class Ed2 extends Error {
  constructor(t) {
    super(t);
  }
};
H(Ed, "TypeBoxError");
var ne = Ed;
a();
a();
a();
var st = Symbol.for("TypeBox.Transform"), Nn = Symbol.for("TypeBox.Readonly"), er = Symbol.for("TypeBox.Optional"), Fr = Symbol.for("TypeBox.Hint"), E = Symbol.for("TypeBox.Kind");
function KP(e) {
  return Je(e) && e[Nn] === "Readonly";
}
H(KP, "IsReadonly");
function fn(e) {
  return Je(e) && e[er] === "Optional";
}
H(fn, "IsOptional");
function Td(e) {
  return Ae(e, "Any");
}
H(Td, "IsAny");
function Rn(e) {
  return Ae(e, "Array");
}
H(Rn, "IsArray");
function Us(e) {
  return Ae(e, "AsyncIterator");
}
H(Us, "IsAsyncIterator");
function vd(e) {
  return Ae(e, "BigInt");
}
H(vd, "IsBigInt");
function Ad(e) {
  return Ae(e, "Boolean");
}
H(Ad, "IsBoolean");
function Ds(e) {
  return Ae(e, "Constructor");
}
H(Ds, "IsConstructor");
function JN(e) {
  return Ae(e, "Date");
}
H(JN, "IsDate");
function qs(e) {
  return Ae(e, "Function");
}
H(qs, "IsFunction");
function Ao(e) {
  return Ae(e, "Integer");
}
H(Ao, "IsInteger");
function It(e) {
  return Ae(e, "Intersect");
}
H(It, "IsIntersect");
function Ks(e) {
  return Ae(e, "Iterator");
}
H(Ks, "IsIterator");
function Ae(e, t) {
  return Je(e) && E in e && e[E] === t;
}
H(Ae, "IsKindOf");
function Cn(e) {
  return Ae(e, "Literal");
}
H(Cn, "IsLiteral");
function dr(e) {
  return Ae(e, "MappedKey");
}
H(dr, "IsMappedKey");
function at(e) {
  return Ae(e, "MappedResult");
}
H(at, "IsMappedResult");
function ao(e) {
  return Ae(e, "Never");
}
H(ao, "IsNever");
function YN(e) {
  return Ae(e, "Not");
}
H(YN, "IsNot");
function XN(e) {
  return Ae(e, "Null");
}
H(XN, "IsNull");
function jo(e) {
  return Ae(e, "Number");
}
H(jo, "IsNumber");
function Et(e) {
  return Ae(e, "Object");
}
H(Et, "IsObject");
function ko(e) {
  return Ae(e, "Promise");
}
H(ko, "IsPromise");
function jd(e) {
  return Ae(e, "Record");
}
H(jd, "IsRecord");
function kd(e) {
  return Ae(e, "Ref");
}
H(kd, "IsRef");
function _d(e) {
  return Ae(e, "RegExp");
}
H(_d, "IsRegExp");
function zs(e) {
  return Ae(e, "String");
}
H(zs, "IsString");
function QN(e) {
  return Ae(e, "Symbol");
}
H(QN, "IsSymbol");
function mr(e) {
  return Ae(e, "TemplateLiteral");
}
H(mr, "IsTemplateLiteral");
function eR(e) {
  return Ae(e, "This");
}
H(eR, "IsThis");
function gi(e) {
  return Je(e) && st in e;
}
H(gi, "IsTransform");
function Vr(e) {
  return Ae(e, "Tuple");
}
H(Vr, "IsTuple");
function tR(e) {
  return Ae(e, "Undefined");
}
H(tR, "IsUndefined");
function Ue(e) {
  return Ae(e, "Union");
}
H(Ue, "IsUnion");
function rR(e) {
  return Ae(e, "Uint8Array");
}
H(rR, "IsUint8Array");
function nR(e) {
  return Ae(e, "Unknown");
}
H(nR, "IsUnknown");
function oR(e) {
  return Ae(e, "Unsafe");
}
H(oR, "IsUnsafe");
function iR(e) {
  return Ae(e, "Void");
}
H(iR, "IsVoid");
function co(e) {
  return Je(e) && E in e && et(e[E]);
}
H(co, "IsKind");
function Wr(e) {
  return Td(e) || Rn(e) || Ad(e) || vd(e) || Us(e) || Ds(e) || JN(e) || qs(e) || Ao(e) || It(e) || Ks(e) || Cn(e) || dr(e) || at(e) || ao(e) || YN(e) || XN(e) || jo(e) || Et(e) || ko(e) || jd(e) || kd(e) || _d(e) || zs(e) || QN(e) || mr(e) || eR(e) || Vr(e) || tR(e) || Ue(e) || rR(e) || nR(e) || oR(e) || iR(e) || co(e);
}
H(Wr, "IsSchema");
var x = {};
M(x, { IsAny: () => VP, IsArray: () => WP, IsAsyncIterator: () => HP, IsBigInt: () => ZP, IsBoolean: () => JP, IsConstructor: () => YP, IsDate: () => XP, IsFunction: () => QP, IsInteger: () => eO, IsIntersect: () => tO, IsIterator: () => rO, IsKind: () => SO, IsKindOf: () => Se, IsLiteral: () => Bs, IsLiteralBoolean: () => pR, IsLiteralNumber: () => oO, IsLiteralString: () => nO, IsLiteralValue: () => iO, IsMappedKey: () => sO, IsMappedResult: () => aO, IsNever: () => cO, IsNot: () => fO, IsNull: () => uO, IsNumber: () => pO, IsObject: () => lO, IsOptional: () => uR, IsPromise: () => dO, IsProperties: () => Md, IsReadonly: () => fR, IsRecord: () => mO, IsRecursive: () => lR, IsRef: () => yO, IsRegExp: () => hO, IsSchema: () => Fe, IsString: () => gO, IsSymbol: () => IO, IsTemplateLiteral: () => xO, IsThis: () => bO, IsTransform: () => tt, IsTuple: () => $O, IsUint8Array: () => wO, IsUndefined: () => Ii, IsUnion: () => Ld, IsUnionLiteral: () => dR, IsUnknown: () => PO, IsUnsafe: () => OO, IsVoid: () => FO, TypeGuardUnknownTypeError: () => Nd });
a();
var Ud = class Ud2 extends ne {
};
H(Ud, "TypeGuardUnknownTypeError");
var Nd = Ud, sR = ["Any", "Array", "AsyncIterator", "BigInt", "Boolean", "Constructor", "Date", "Enum", "Function", "Integer", "Intersect", "Iterator", "Literal", "MappedKey", "MappedResult", "Not", "Null", "Number", "Object", "Promise", "Record", "Ref", "RegExp", "String", "Symbol", "TemplateLiteral", "This", "Tuple", "Undefined", "Union", "Uint8Array", "Unknown", "Void"];
function zP(e) {
  try {
    return new RegExp(e), true;
  } catch (t) {
    return false;
  }
}
H(zP, "IsPattern");
function Rd(e) {
  if (!et(e)) return false;
  for (let t = 0; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (r >= 7 && r <= 13 || r === 27 || r === 127) return false;
  }
  return true;
}
H(Rd, "IsControlCharacterFree");
function GP(e) {
  return Cd(e) || Fe(e);
}
H(GP, "IsAdditionalProperties");
function Gs(e) {
  return ut(e) || Rs(e);
}
H(Gs, "IsOptionalBigInt");
function Qe(e) {
  return ut(e) || Br(e);
}
H(Qe, "IsOptionalNumber");
function Cd(e) {
  return ut(e) || io(e);
}
H(Cd, "IsOptionalBoolean");
function Ge(e) {
  return ut(e) || et(e);
}
H(Ge, "IsOptionalString");
function aR(e) {
  return ut(e) || et(e) && Rd(e) && zP(e);
}
H(aR, "IsOptionalPattern");
function cR(e) {
  return ut(e) || et(e) && Rd(e);
}
H(cR, "IsOptionalFormat");
function BP(e) {
  return ut(e) || Fe(e);
}
H(BP, "IsOptionalSchema");
function fR(e) {
  return Je(e) && e[Nn] === "Readonly";
}
H(fR, "IsReadonly");
function uR(e) {
  return Je(e) && e[er] === "Optional";
}
H(uR, "IsOptional");
function VP(e) {
  return Se(e, "Any") && Ge(e.$id);
}
H(VP, "IsAny");
function WP(e) {
  return Se(e, "Array") && e.type === "array" && Ge(e.$id) && Fe(e.items) && Qe(e.minItems) && Qe(e.maxItems) && Cd(e.uniqueItems) && BP(e.contains) && Qe(e.minContains) && Qe(e.maxContains);
}
H(WP, "IsArray");
function HP(e) {
  return Se(e, "AsyncIterator") && e.type === "AsyncIterator" && Ge(e.$id) && Fe(e.items);
}
H(HP, "IsAsyncIterator");
function ZP(e) {
  return Se(e, "BigInt") && e.type === "bigint" && Ge(e.$id) && Gs(e.exclusiveMaximum) && Gs(e.exclusiveMinimum) && Gs(e.maximum) && Gs(e.minimum) && Gs(e.multipleOf);
}
H(ZP, "IsBigInt");
function JP(e) {
  return Se(e, "Boolean") && e.type === "boolean" && Ge(e.$id);
}
H(JP, "IsBoolean");
function YP(e) {
  return Se(e, "Constructor") && e.type === "Constructor" && Ge(e.$id) && zt(e.parameters) && e.parameters.every((t) => Fe(t)) && Fe(e.returns);
}
H(YP, "IsConstructor");
function XP(e) {
  return Se(e, "Date") && e.type === "Date" && Ge(e.$id) && Qe(e.exclusiveMaximumTimestamp) && Qe(e.exclusiveMinimumTimestamp) && Qe(e.maximumTimestamp) && Qe(e.minimumTimestamp) && Qe(e.multipleOfTimestamp);
}
H(XP, "IsDate");
function QP(e) {
  return Se(e, "Function") && e.type === "Function" && Ge(e.$id) && zt(e.parameters) && e.parameters.every((t) => Fe(t)) && Fe(e.returns);
}
H(QP, "IsFunction");
function eO(e) {
  return Se(e, "Integer") && e.type === "integer" && Ge(e.$id) && Qe(e.exclusiveMaximum) && Qe(e.exclusiveMinimum) && Qe(e.maximum) && Qe(e.minimum) && Qe(e.multipleOf);
}
H(eO, "IsInteger");
function Md(e) {
  return Je(e) && Object.entries(e).every(([t, r]) => Rd(t) && Fe(r));
}
H(Md, "IsProperties");
function tO(e) {
  return Se(e, "Intersect") && !(et(e.type) && e.type !== "object") && zt(e.allOf) && e.allOf.every((t) => Fe(t) && !tt(t)) && Ge(e.type) && (Cd(e.unevaluatedProperties) || BP(e.unevaluatedProperties)) && Ge(e.$id);
}
H(tO, "IsIntersect");
function rO(e) {
  return Se(e, "Iterator") && e.type === "Iterator" && Ge(e.$id) && Fe(e.items);
}
H(rO, "IsIterator");
function Se(e, t) {
  return Je(e) && E in e && e[E] === t;
}
H(Se, "IsKindOf");
function nO(e) {
  return Bs(e) && et(e.const);
}
H(nO, "IsLiteralString");
function oO(e) {
  return Bs(e) && Br(e.const);
}
H(oO, "IsLiteralNumber");
function pR(e) {
  return Bs(e) && io(e.const);
}
H(pR, "IsLiteralBoolean");
function Bs(e) {
  return Se(e, "Literal") && Ge(e.$id) && iO(e.const);
}
H(Bs, "IsLiteral");
function iO(e) {
  return io(e) || Br(e) || et(e);
}
H(iO, "IsLiteralValue");
function sO(e) {
  return Se(e, "MappedKey") && zt(e.keys) && e.keys.every((t) => Br(t) || et(t));
}
H(sO, "IsMappedKey");
function aO(e) {
  return Se(e, "MappedResult") && Md(e.properties);
}
H(aO, "IsMappedResult");
function cO(e) {
  return Se(e, "Never") && Je(e.not) && Object.getOwnPropertyNames(e.not).length === 0;
}
H(cO, "IsNever");
function fO(e) {
  return Se(e, "Not") && Fe(e.not);
}
H(fO, "IsNot");
function uO(e) {
  return Se(e, "Null") && e.type === "null" && Ge(e.$id);
}
H(uO, "IsNull");
function pO(e) {
  return Se(e, "Number") && e.type === "number" && Ge(e.$id) && Qe(e.exclusiveMaximum) && Qe(e.exclusiveMinimum) && Qe(e.maximum) && Qe(e.minimum) && Qe(e.multipleOf);
}
H(pO, "IsNumber");
function lO(e) {
  return Se(e, "Object") && e.type === "object" && Ge(e.$id) && Md(e.properties) && GP(e.additionalProperties) && Qe(e.minProperties) && Qe(e.maxProperties);
}
H(lO, "IsObject");
function dO(e) {
  return Se(e, "Promise") && e.type === "Promise" && Ge(e.$id) && Fe(e.item);
}
H(dO, "IsPromise");
function mO(e) {
  return Se(e, "Record") && e.type === "object" && Ge(e.$id) && GP(e.additionalProperties) && Je(e.patternProperties) && ((t) => {
    let r = Object.getOwnPropertyNames(t.patternProperties);
    return r.length === 1 && zP(r[0]) && Je(t.patternProperties) && Fe(t.patternProperties[r[0]]);
  })(e);
}
H(mO, "IsRecord");
function lR(e) {
  return Je(e) && Fr in e && e[Fr] === "Recursive";
}
H(lR, "IsRecursive");
function yO(e) {
  return Se(e, "Ref") && Ge(e.$id) && et(e.$ref);
}
H(yO, "IsRef");
function hO(e) {
  return Se(e, "RegExp") && Ge(e.$id) && et(e.source) && et(e.flags) && Qe(e.maxLength) && Qe(e.minLength);
}
H(hO, "IsRegExp");
function gO(e) {
  return Se(e, "String") && e.type === "string" && Ge(e.$id) && Qe(e.minLength) && Qe(e.maxLength) && aR(e.pattern) && cR(e.format);
}
H(gO, "IsString");
function IO(e) {
  return Se(e, "Symbol") && e.type === "symbol" && Ge(e.$id);
}
H(IO, "IsSymbol");
function xO(e) {
  return Se(e, "TemplateLiteral") && e.type === "string" && et(e.pattern) && e.pattern[0] === "^" && e.pattern[e.pattern.length - 1] === "$";
}
H(xO, "IsTemplateLiteral");
function bO(e) {
  return Se(e, "This") && Ge(e.$id) && et(e.$ref);
}
H(bO, "IsThis");
function tt(e) {
  return Je(e) && st in e;
}
H(tt, "IsTransform");
function $O(e) {
  return Se(e, "Tuple") && e.type === "array" && Ge(e.$id) && Br(e.minItems) && Br(e.maxItems) && e.minItems === e.maxItems && (ut(e.items) && ut(e.additionalItems) && e.minItems === 0 || zt(e.items) && e.items.every((t) => Fe(t)));
}
H($O, "IsTuple");
function Ii(e) {
  return Se(e, "Undefined") && e.type === "undefined" && Ge(e.$id);
}
H(Ii, "IsUndefined");
function dR(e) {
  return Ld(e) && e.anyOf.every((t) => nO(t) || oO(t));
}
H(dR, "IsUnionLiteral");
function Ld(e) {
  return Se(e, "Union") && Ge(e.$id) && Je(e) && zt(e.anyOf) && e.anyOf.every((t) => Fe(t));
}
H(Ld, "IsUnion");
function wO(e) {
  return Se(e, "Uint8Array") && e.type === "Uint8Array" && Ge(e.$id) && Qe(e.minByteLength) && Qe(e.maxByteLength);
}
H(wO, "IsUint8Array");
function PO(e) {
  return Se(e, "Unknown") && Ge(e.$id);
}
H(PO, "IsUnknown");
function OO(e) {
  return Se(e, "Unsafe");
}
H(OO, "IsUnsafe");
function FO(e) {
  return Se(e, "Void") && e.type === "void" && Ge(e.$id);
}
H(FO, "IsVoid");
function SO(e) {
  return Je(e) && E in e && et(e[E]) && !sR.includes(e[E]);
}
H(SO, "IsKind");
function Fe(e) {
  return Je(e) && (VP(e) || WP(e) || JP(e) || ZP(e) || HP(e) || YP(e) || XP(e) || QP(e) || eO(e) || tO(e) || rO(e) || Bs(e) || sO(e) || aO(e) || cO(e) || fO(e) || uO(e) || pO(e) || lO(e) || dO(e) || mO(e) || yO(e) || hO(e) || gO(e) || IO(e) || xO(e) || bO(e) || $O(e) || Ii(e) || Ld(e) || wO(e) || PO(e) || OO(e) || FO(e) || SO(e));
}
H(Fe, "IsSchema");
a();
var Dd = "(true|false)", Vs = "(0|[1-9][0-9]*)", qd = "(.*)", mR = "(?!.*)", Mn = "^".concat(Vs, "$"), Ln = "^".concat(qd, "$"), EO = "^".concat(mR, "$");
a();
var tr = {};
M(tr, { Clear: () => hR, Delete: () => gR, Entries: () => yR, Get: () => bR, Has: () => IR, Set: () => xR });
a();
var xi = /* @__PURE__ */ new Map();
function yR() {
  return new Map(xi);
}
H(yR, "Entries");
function hR() {
  return xi.clear();
}
H(hR, "Clear");
function gR(e) {
  return xi.delete(e);
}
H(gR, "Delete");
function IR(e) {
  return xi.has(e);
}
H(IR, "Has");
function xR(e, t) {
  xi.set(e, t);
}
H(xR, "Set");
function bR(e) {
  return xi.get(e);
}
H(bR, "Get");
var Tt = {};
M(Tt, { Clear: () => wR, Delete: () => PR, Entries: () => $R, Get: () => SR, Has: () => OR, Set: () => FR });
a();
var bi = /* @__PURE__ */ new Map();
function $R() {
  return new Map(bi);
}
H($R, "Entries");
function wR() {
  return bi.clear();
}
H(wR, "Clear");
function PR(e) {
  return bi.delete(e);
}
H(PR, "Delete");
function OR(e) {
  return bi.has(e);
}
H(OR, "Has");
function FR(e, t) {
  bi.set(e, t);
}
H(FR, "Set");
function SR(e) {
  return bi.get(e);
}
H(SR, "Get");
a();
function TO(e, t) {
  return e.includes(t);
}
H(TO, "SetIncludes");
function vO(e) {
  return [...new Set(e)];
}
H(vO, "SetDistinct");
function ER(e, t) {
  return e.filter((r) => t.includes(r));
}
H(ER, "SetIntersect");
function TR(e, t) {
  return e.reduce((r, n) => ER(r, n), t);
}
H(TR, "SetIntersectManyResolve");
function AO(e) {
  return e.length === 1 ? e[0] : e.length > 1 ? TR(e.slice(1), e[0]) : [];
}
H(AO, "SetIntersectMany");
function jO(e) {
  let t = [];
  for (let r of e) t.push(...r);
  return t;
}
H(jO, "SetUnionMany");
a();
function fo(e) {
  return j({ [E]: "Any" }, e);
}
H(fo, "Any");
a();
function Rc(e, t) {
  return j({ [E]: "Array", type: "array", items: e }, t);
}
H(Rc, "Array");
a();
function Cc(e, t) {
  return j({ [E]: "AsyncIterator", type: "AsyncIterator", items: e }, t);
}
H(Cc, "AsyncIterator");
a();
a();
a();
function vR(e, t) {
  let i = e, { [t]: r } = i;
  return J(i, [I(t)]);
}
H(vR, "DiscardKey");
function mt(e, t) {
  return t.reduce((r, n) => vR(r, n), e);
}
H(mt, "Discard");
a();
function Be(e) {
  return j({ [E]: "Never", not: {} }, e);
}
H(Be, "Never");
a();
a();
function je(e) {
  return j({ [E]: "MappedResult", properties: e });
}
H(je, "MappedResult");
a();
a();
function Mc(e, t, r) {
  return j({ [E]: "Constructor", type: "Constructor", parameters: e, returns: t }, r);
}
H(Mc, "Constructor");
a();
function uo(e, t, r) {
  return j({ [E]: "Function", type: "Function", parameters: e, returns: t }, r);
}
H(uo, "Function");
a();
a();
a();
a();
function Ws(e, t) {
  return j({ [E]: "Union", anyOf: e }, t);
}
H(Ws, "UnionCreate");
function AR(e) {
  return e.some((t) => fn(t));
}
H(AR, "IsUnionOptional");
function kO(e) {
  return e.map((t) => fn(t) ? jR(t) : t);
}
H(kO, "RemoveOptionalFromRest");
function jR(e) {
  return mt(e, [er]);
}
H(jR, "RemoveOptionalFromType");
function kR(e, t) {
  return AR(e) ? cr(Ws(kO(e), t)) : Ws(kO(e), t);
}
H(kR, "ResolveUnion");
function un(e, t) {
  return e.length === 0 ? Be(t) : e.length === 1 ? j(e[0], t) : kR(e, t);
}
H(un, "UnionEvaluated");
a();
function Ve(e, t) {
  return e.length === 0 ? Be(t) : e.length === 1 ? j(e[0], t) : Ws(e, t);
}
H(Ve, "Union");
a();
a();
a();
var zd = class zd2 extends ne {
};
H(zd, "TemplateLiteralParserError");
var Lc = zd;
function _R(e) {
  return e.replace(/\\\$/g, "$").replace(/\\\*/g, "*").replace(/\\\^/g, "^").replace(/\\\|/g, "|").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}
H(_R, "Unescape");
function Kd(e, t, r) {
  return e[t] === r && e.charCodeAt(t - 1) !== 92;
}
H(Kd, "IsNonEscaped");
function Un(e, t) {
  return Kd(e, t, "(");
}
H(Un, "IsOpenParen");
function Hs(e, t) {
  return Kd(e, t, ")");
}
H(Hs, "IsCloseParen");
function _O(e, t) {
  return Kd(e, t, "|");
}
H(_O, "IsSeparator");
function NR(e) {
  if (!(Un(e, 0) && Hs(e, e.length - 1))) return false;
  let t = 0;
  for (let r = 0; r < e.length; r++) if (Un(e, r) && (t += 1), Hs(e, r) && (t -= 1), t === 0 && r !== e.length - 1) return false;
  return true;
}
H(NR, "IsGroup");
function RR(e) {
  return e.slice(1, e.length - 1);
}
H(RR, "InGroup");
function CR(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) if (Un(e, r) && (t += 1), Hs(e, r) && (t -= 1), _O(e, r) && t === 0) return true;
  return false;
}
H(CR, "IsPrecedenceOr");
function MR(e) {
  for (let t = 0; t < e.length; t++) if (Un(e, t)) return true;
  return false;
}
H(MR, "IsPrecedenceAnd");
function LR(e) {
  let [t, r] = [0, 0], n = [];
  for (let s = 0; s < e.length; s++) if (Un(e, s) && (t += 1), Hs(e, s) && (t -= 1), _O(e, s) && t === 0) {
    let a4 = e.slice(r, s);
    a4.length > 0 && n.push($i(a4)), r = s + 1;
  }
  let i = e.slice(r);
  return i.length > 0 && n.push($i(i)), n.length === 0 ? { type: "const", const: "" } : n.length === 1 ? n[0] : { type: "or", expr: n };
}
H(LR, "Or");
function UR(e) {
  function t(i, s) {
    if (!Un(i, s)) throw new Lc("TemplateLiteralParser: Index must point to open parens");
    let a4 = 0;
    for (let f = s; f < i.length; f++) if (Un(i, f) && (a4 += 1), Hs(i, f) && (a4 -= 1), a4 === 0) return [s, f];
    throw new Lc("TemplateLiteralParser: Unclosed group parens in expression");
  }
  H(t, "Group");
  function r(i, s) {
    for (let a4 = s; a4 < i.length; a4++) if (Un(i, a4)) return [s, a4];
    return [s, i.length];
  }
  H(r, "Range");
  let n = [];
  for (let i = 0; i < e.length; i++) if (Un(e, i)) {
    let [s, a4] = t(e, i), f = e.slice(s, a4 + 1);
    n.push($i(f)), i = a4;
  } else {
    let [s, a4] = r(e, i), f = e.slice(s, a4);
    f.length > 0 && n.push($i(f)), i = a4 - 1;
  }
  return n.length === 0 ? { type: "const", const: "" } : n.length === 1 ? n[0] : { type: "and", expr: n };
}
H(UR, "And");
function $i(e) {
  return NR(e) ? $i(RR(e)) : CR(e) ? LR(e) : MR(e) ? UR(e) : { type: "const", const: _R(e) };
}
H($i, "TemplateLiteralParse");
function wi(e) {
  return $i(e.slice(1, e.length - 1));
}
H(wi, "TemplateLiteralParseExact");
var Bd = class Bd2 extends ne {
};
H(Bd, "TemplateLiteralFiniteError");
var Gd = Bd;
function DR(e) {
  return e.type === "or" && e.expr.length === 2 && e.expr[0].type === "const" && e.expr[0].const === "0" && e.expr[1].type === "const" && e.expr[1].const === "[1-9][0-9]*";
}
H(DR, "IsNumberExpression");
function qR(e) {
  return e.type === "or" && e.expr.length === 2 && e.expr[0].type === "const" && e.expr[0].const === "true" && e.expr[1].type === "const" && e.expr[1].const === "false";
}
H(qR, "IsBooleanExpression");
function KR(e) {
  return e.type === "const" && e.const === ".*";
}
H(KR, "IsStringExpression");
function _o(e) {
  return DR(e) || KR(e) ? false : qR(e) ? true : e.type === "and" ? e.expr.every((t) => _o(t)) : e.type === "or" ? e.expr.every((t) => _o(t)) : e.type === "const" ? true : (() => {
    throw new Gd("Unknown expression type");
  })();
}
H(_o, "IsTemplateLiteralExpressionFinite");
function Uc(e) {
  let t = wi(e.pattern);
  return _o(t);
}
H(Uc, "IsTemplateLiteralFinite");
a();
var Wd = class Wd2 extends ne {
};
H(Wd, "TemplateLiteralGenerateError");
var Vd = Wd;
function* NO(e) {
  if (e.length === 1) return yield* V(e[0]);
  for (let t of e[0]) for (let r of NO(e.slice(1))) yield "".concat(t).concat(r);
}
H(NO, "GenerateReduce");
function* zR(e) {
  return yield* V(NO(e.expr.map((t) => [...Zs(t)])));
}
H(zR, "GenerateAnd");
function* GR(e) {
  for (let t of e.expr) yield* V(Zs(t));
}
H(GR, "GenerateOr");
function* BR(e) {
  return yield e.const;
}
H(BR, "GenerateConst");
function* Zs(e) {
  return e.type === "and" ? yield* V(zR(e)) : e.type === "or" ? yield* V(GR(e)) : e.type === "const" ? yield* V(BR(e)) : (() => {
    throw new Vd("Unknown expression");
  })();
}
H(Zs, "TemplateLiteralExpressionGenerate");
function Pi(e) {
  let t = wi(e.pattern);
  return _o(t) ? [...Zs(t)] : [];
}
H(Pi, "TemplateLiteralGenerate");
a();
a();
function De(e, t) {
  return j({ [E]: "Literal", const: e, type: typeof e }, t);
}
H(De, "Literal");
a();
function Dc(e) {
  return j({ [E]: "Boolean", type: "boolean" }, e);
}
H(Dc, "Boolean");
a();
function Oi(e) {
  return j({ [E]: "BigInt", type: "bigint" }, e);
}
H(Oi, "BigInt");
a();
function pn(e) {
  return j({ [E]: "Number", type: "number" }, e);
}
H(pn, "Number");
a();
function Sr(e) {
  return j({ [E]: "String", type: "string" }, e);
}
H(Sr, "String");
function* VR(e) {
  let t = e.trim().replace(/"|'/g, "");
  return t === "boolean" ? yield Dc() : t === "number" ? yield pn() : t === "bigint" ? yield Oi() : t === "string" ? yield Sr() : yield (() => {
    let r = t.split("|").map((n) => De(n.trim()));
    return r.length === 0 ? Be() : r.length === 1 ? r[0] : un(r);
  })();
}
H(VR, "FromUnion");
function* WR(e) {
  if (e[1] !== "{") {
    let t = De("$"), r = Hd(e.slice(1));
    return yield* V([t, ...r]);
  }
  for (let t = 2; t < e.length; t++) if (e[t] === "}") {
    let r = VR(e.slice(2, t)), n = Hd(e.slice(t + 1));
    return yield* V([...r, ...n]);
  }
  yield De(e);
}
H(WR, "FromTerminal");
function* Hd(e) {
  for (let t = 0; t < e.length; t++) if (e[t] === "$") {
    let r = De(e.slice(0, t)), n = WR(e.slice(t));
    return yield* V([r, ...n]);
  }
  yield De(e);
}
H(Hd, "FromSyntax");
function RO(e) {
  return [...Hd(e)];
}
H(RO, "TemplateLiteralSyntax");
a();
var Yd = class Yd2 extends ne {
};
H(Yd, "TemplateLiteralPatternError");
var Zd = Yd;
function HR(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
H(HR, "Escape");
function CO(e, t) {
  return mr(e) ? e.pattern.slice(1, e.pattern.length - 1) : Ue(e) ? "(".concat(e.anyOf.map((r) => CO(r, t)).join("|"), ")") : jo(e) ? "".concat(t).concat(Vs) : Ao(e) ? "".concat(t).concat(Vs) : vd(e) ? "".concat(t).concat(Vs) : zs(e) ? "".concat(t).concat(qd) : Cn(e) ? "".concat(t).concat(HR(e.const.toString())) : Ad(e) ? "".concat(t).concat(Dd) : (() => {
    throw new Zd("Unexpected Kind '".concat(e[E], "'"));
  })();
}
H(CO, "Visit");
function Jd(e) {
  return "^".concat(e.map((t) => CO(t, "")).join(""), "$");
}
H(Jd, "TemplateLiteralPattern");
a();
function No(e) {
  let r = Pi(e).map((n) => De(n));
  return un(r);
}
H(No, "TemplateLiteralToUnion");
a();
function qc(e, t) {
  let r = et(e) ? Jd(RO(e)) : Jd(e);
  return j({ [E]: "TemplateLiteral", type: "string", pattern: r }, t);
}
H(qc, "TemplateLiteral");
function ZR(e) {
  return Pi(e).map((r) => r.toString());
}
H(ZR, "FromTemplateLiteral");
function JR(e) {
  let t = [];
  for (let r of e) t.push(...fr(r));
  return t;
}
H(JR, "FromUnion");
function YR(e) {
  return [e.toString()];
}
H(YR, "FromLiteral");
function fr(e) {
  return [...new Set(mr(e) ? ZR(e) : Ue(e) ? JR(e.anyOf) : Cn(e) ? YR(e.const) : jo(e) ? ["[number]"] : Ao(e) ? ["[number]"] : [])];
}
H(fr, "IndexPropertyKeys");
a();
function XR(e, t, r) {
  let n = {};
  for (let i of Object.getOwnPropertyNames(t)) n[i] = Fi(e, fr(t[i]), r);
  return n;
}
H(XR, "FromProperties");
function QR(e, t, r) {
  return XR(e, t.properties, r);
}
H(QR, "FromMappedResult");
function MO(e, t, r) {
  let n = QR(e, t, r);
  return je(n);
}
H(MO, "IndexFromMappedResult");
function UO(e, t) {
  return e.map((r) => DO(r, t));
}
H(UO, "FromRest");
function eC(e) {
  return e.filter((t) => !ao(t));
}
H(eC, "FromIntersectRest");
function tC(e, t) {
  return Kc(eC(UO(e, t)));
}
H(tC, "FromIntersect");
function rC(e) {
  return e.some((t) => ao(t)) ? [] : e;
}
H(rC, "FromUnionRest");
function nC(e, t) {
  return un(rC(UO(e, t)));
}
H(nC, "FromUnion");
function oC(e, t) {
  return t in e ? e[t] : t === "[number]" ? un(e) : Be();
}
H(oC, "FromTuple");
function iC(e, t) {
  return t === "[number]" ? e : Be();
}
H(iC, "FromArray");
function sC(e, t) {
  return t in e ? e[t] : Be();
}
H(sC, "FromProperty");
function DO(e, t) {
  var r;
  return It(e) ? tC(e.allOf, t) : Ue(e) ? nC(e.anyOf, t) : Vr(e) ? oC((r = e.items) != null ? r : [], t) : Rn(e) ? iC(e.items, t) : Et(e) ? sC(e.properties, t) : Be();
}
H(DO, "IndexFromPropertyKey");
function Js(e, t) {
  return t.map((r) => DO(e, r));
}
H(Js, "IndexFromPropertyKeys");
function LO(e, t) {
  return un(Js(e, t));
}
H(LO, "FromSchema");
function Fi(e, t, r) {
  return at(t) ? MO(e, t, r) : dr(t) ? qO(e, t, r) : j(Wr(t) ? LO(e, fr(t)) : LO(e, t), r);
}
H(Fi, "Index");
function aC(e, t, r) {
  return { [t]: Fi(e, [t], it(r)) };
}
H(aC, "MappedIndexPropertyKey");
function cC(e, t, r) {
  return t.reduce((n, i) => F(F({}, n), aC(e, i, r)), {});
}
H(cC, "MappedIndexPropertyKeys");
function fC(e, t, r) {
  return cC(e, t.keys, r);
}
H(fC, "MappedIndexProperties");
function qO(e, t, r) {
  let n = fC(e, t, r);
  return je(n);
}
H(qO, "IndexFromMappedKey");
a();
function zc(e, t) {
  return j({ [E]: "Iterator", type: "Iterator", items: e }, t);
}
H(zc, "Iterator");
a();
function uC(e) {
  let t = [];
  for (let r in e) fn(e[r]) || t.push(r);
  return t;
}
H(uC, "RequiredKeys");
function pC(e, t) {
  let r = uC(e), n = r.length > 0 ? { [E]: "Object", type: "object", properties: e, required: r } : { [E]: "Object", type: "object", properties: e };
  return j(n, t);
}
H(pC, "_Object");
var Ye = pC;
a();
function Gc(e, t) {
  return j({ [E]: "Promise", type: "Promise", item: e }, t);
}
H(Gc, "Promise");
a();
a();
function lC(e) {
  return j(mt(e, [Nn]));
}
H(lC, "RemoveReadonly");
function dC(e) {
  return j(G(F({}, e), { [Nn]: "Readonly" }));
}
H(dC, "AddReadonly");
function mC(e, t) {
  return t === false ? lC(e) : dC(e);
}
H(mC, "ReadonlyWithFlag");
function Er(e, t) {
  let r = t != null ? t : true;
  return at(e) ? KO(e, r) : mC(e, r);
}
H(Er, "Readonly");
function yC(e, t) {
  let r = {};
  for (let n of globalThis.Object.getOwnPropertyNames(e)) r[n] = Er(e[n], t);
  return r;
}
H(yC, "FromProperties");
function hC(e, t) {
  return yC(e.properties, t);
}
H(hC, "FromMappedResult");
function KO(e, t) {
  let r = hC(e, t);
  return je(r);
}
H(KO, "ReadonlyFromMappedResult");
a();
function ln(e, t) {
  return j(e.length > 0 ? { [E]: "Tuple", type: "array", items: e, additionalItems: false, minItems: e.length, maxItems: e.length } : { [E]: "Tuple", type: "array", minItems: e.length, maxItems: e.length }, t);
}
H(ln, "Tuple");
function zO(e, t) {
  return e in t ? Tr(e, t[e]) : je(t);
}
H(zO, "FromMappedResult");
function gC(e) {
  return { [e]: De(e) };
}
H(gC, "MappedKeyToKnownMappedResultProperties");
function IC(e) {
  let t = {};
  for (let r of e) t[r] = De(r);
  return t;
}
H(IC, "MappedKeyToUnknownMappedResultProperties");
function xC(e, t) {
  return TO(t, e) ? gC(e) : IC(t);
}
H(xC, "MappedKeyToMappedResultProperties");
function bC(e, t) {
  let r = xC(e, t);
  return zO(e, r);
}
H(bC, "FromMappedKey");
function Ys(e, t) {
  return t.map((r) => Tr(e, r));
}
H(Ys, "FromRest");
function $C(e, t) {
  let r = {};
  for (let n of globalThis.Object.getOwnPropertyNames(t)) r[n] = Tr(e, t[n]);
  return r;
}
H($C, "FromProperties");
function Tr(e, t) {
  var n;
  let r = F({}, t);
  return fn(t) ? cr(Tr(e, mt(t, [er]))) : KP(t) ? Er(Tr(e, mt(t, [Nn]))) : at(t) ? zO(e, t.properties) : dr(t) ? bC(e, t.keys) : Ds(t) ? Mc(Ys(e, t.parameters), Tr(e, t.returns), r) : qs(t) ? uo(Ys(e, t.parameters), Tr(e, t.returns), r) : Us(t) ? Cc(Tr(e, t.items), r) : Ks(t) ? zc(Tr(e, t.items), r) : It(t) ? ur(Ys(e, t.allOf), r) : Ue(t) ? Ve(Ys(e, t.anyOf), r) : Vr(t) ? ln(Ys(e, (n = t.items) != null ? n : []), r) : Et(t) ? Ye($C(e, t.properties), r) : Rn(t) ? Rc(Tr(e, t.items), r) : ko(t) ? Gc(Tr(e, t.item), r) : t;
}
H(Tr, "FromSchemaType");
function wC(e, t) {
  let r = {};
  for (let n of e) r[n] = Tr(n, t);
  return r;
}
H(wC, "MappedFunctionReturnType");
function GO(e, t, r) {
  let n = Wr(e) ? fr(e) : e, i = t({ [E]: "MappedKey", keys: n }), s = wC(n, i);
  return Ye(s, r);
}
H(GO, "Mapped");
a();
function PC(e) {
  return j(mt(e, [er]));
}
H(PC, "RemoveOptional");
function OC(e) {
  return j(G(F({}, e), { [er]: "Optional" }));
}
H(OC, "AddOptional");
function FC(e, t) {
  return t === false ? PC(e) : OC(e);
}
H(FC, "OptionalWithFlag");
function cr(e, t) {
  let r = t != null ? t : true;
  return at(e) ? BO(e, r) : FC(e, r);
}
H(cr, "Optional");
function SC(e, t) {
  let r = {};
  for (let n of globalThis.Object.getOwnPropertyNames(e)) r[n] = cr(e[n], t);
  return r;
}
H(SC, "FromProperties");
function EC(e, t) {
  return SC(e.properties, t);
}
H(EC, "FromMappedResult");
function BO(e, t) {
  let r = EC(e, t);
  return je(r);
}
H(BO, "OptionalFromMappedResult");
a();
function Xs(e, t = {}) {
  let r = e.every((i) => Et(i)), n = Wr(t.unevaluatedProperties) ? { unevaluatedProperties: t.unevaluatedProperties } : {};
  return j(t.unevaluatedProperties === false || Wr(t.unevaluatedProperties) || r ? G(F({}, n), { [E]: "Intersect", type: "object", allOf: e }) : G(F({}, n), { [E]: "Intersect", allOf: e }), t);
}
H(Xs, "IntersectCreate");
function TC(e) {
  return e.every((t) => fn(t));
}
H(TC, "IsIntersectOptional");
function vC(e) {
  return mt(e, [er]);
}
H(vC, "RemoveOptionalFromType");
function VO(e) {
  return e.map((t) => fn(t) ? vC(t) : t);
}
H(VO, "RemoveOptionalFromRest");
function AC(e, t) {
  return TC(e) ? cr(Xs(VO(e), t)) : Xs(VO(e), t);
}
H(AC, "ResolveIntersect");
function Kc(e, t = {}) {
  if (e.length === 0) return Be(t);
  if (e.length === 1) return j(e[0], t);
  if (e.some((r) => gi(r))) throw new Error("Cannot intersect transform types");
  return AC(e, t);
}
H(Kc, "IntersectEvaluated");
a();
function ur(e, t) {
  if (e.length === 0) return Be(t);
  if (e.length === 1) return j(e[0], t);
  if (e.some((r) => gi(r))) throw new Error("Cannot intersect transform types");
  return Xs(e, t);
}
H(ur, "Intersect");
function WO(e) {
  return e.map((t) => Xd(t));
}
H(WO, "FromRest");
function jC(e) {
  return ur(WO(e));
}
H(jC, "FromIntersect");
function kC(e) {
  return Ve(WO(e));
}
H(kC, "FromUnion");
function _C(e) {
  return Xd(e);
}
H(_C, "FromPromise");
function Xd(e) {
  return It(e) ? jC(e.allOf) : Ue(e) ? kC(e.anyOf) : ko(e) ? _C(e.item) : e;
}
H(Xd, "AwaitedResolve");
function HO(e, t) {
  return j(Xd(e), t);
}
H(HO, "Awaited");
a();
a();
a();
a();
function ZO(e) {
  let t = [];
  for (let r of e) t.push(At(r));
  return t;
}
H(ZO, "FromRest");
function NC(e) {
  let t = ZO(e);
  return jO(t);
}
H(NC, "FromIntersect");
function RC(e) {
  let t = ZO(e);
  return AO(t);
}
H(RC, "FromUnion");
function CC(e) {
  return e.map((t, r) => r.toString());
}
H(CC, "FromTuple");
function MC(e) {
  return ["[number]"];
}
H(MC, "FromArray");
function LC(e) {
  return globalThis.Object.getOwnPropertyNames(e);
}
H(LC, "FromProperties");
function UC(e) {
  return Qd ? globalThis.Object.getOwnPropertyNames(e).map((r) => r[0] === "^" && r[r.length - 1] === "$" ? r.slice(1, r.length - 1) : r) : [];
}
H(UC, "FromPatternProperties");
function At(e) {
  var t;
  return It(e) ? NC(e.allOf) : Ue(e) ? RC(e.anyOf) : Vr(e) ? CC((t = e.items) != null ? t : []) : Rn(e) ? MC(e.items) : Et(e) ? LC(e.properties) : jd(e) ? UC(e.patternProperties) : [];
}
H(At, "KeyOfPropertyKeys");
var Qd = false;
function Dn(e) {
  Qd = true;
  let t = At(e);
  Qd = false;
  let r = t.map((n) => "(".concat(n, ")"));
  return "^(".concat(r.join("|"), ")$");
}
H(Dn, "KeyOfPattern");
function DC(e) {
  return e.map((t) => t === "[number]" ? pn() : De(t));
}
H(DC, "KeyOfPropertyKeysToRest");
function Bc(e, t) {
  if (at(e)) return JO(e, t);
  {
    let r = At(e), n = DC(r), i = un(n);
    return j(i, t);
  }
}
H(Bc, "KeyOf");
function qC(e, t) {
  let r = {};
  for (let n of globalThis.Object.getOwnPropertyNames(e)) r[n] = Bc(e[n], it(t));
  return r;
}
H(qC, "FromProperties");
function KC(e, t) {
  return qC(e.properties, t);
}
H(KC, "FromMappedResult");
function JO(e, t) {
  let r = KC(e, t);
  return je(r);
}
H(JO, "KeyOfFromMappedResult");
a();
function po(e) {
  let t = At(e), r = Js(e, t);
  return t.map((n, i) => [t[i], r[i]]);
}
H(po, "KeyOfPropertyEntries");
function zC(e) {
  let t = [];
  for (let r of e) t.push(...At(r));
  return vO(t);
}
H(zC, "CompositeKeys");
function GC(e) {
  return e.filter((t) => !ao(t));
}
H(GC, "FilterNever");
function BC(e, t) {
  let r = [];
  for (let n of e) r.push(...Js(n, [t]));
  return GC(r);
}
H(BC, "CompositeProperty");
function VC(e, t) {
  let r = {};
  for (let n of t) r[n] = Kc(BC(e, n));
  return r;
}
H(VC, "CompositeProperties");
function YO(e, t) {
  let r = zC(e), n = VC(e, r);
  return Ye(n, t);
}
H(YO, "Composite");
a();
a();
function Vc(e) {
  return j({ [E]: "Date", type: "Date" }, e);
}
H(Vc, "Date");
a();
function Wc(e) {
  return j({ [E]: "Null", type: "null" }, e);
}
H(Wc, "Null");
a();
function Hc(e) {
  return j({ [E]: "Symbol", type: "symbol" }, e);
}
H(Hc, "Symbol");
a();
function Zc(e) {
  return j({ [E]: "Undefined", type: "undefined" }, e);
}
H(Zc, "Undefined");
a();
function Jc(e) {
  return j({ [E]: "Uint8Array", type: "Uint8Array" }, e);
}
H(Jc, "Uint8Array");
a();
function qn(e) {
  return j({ [E]: "Unknown" }, e);
}
H(qn, "Unknown");
function WC(e) {
  return e.map((t) => em(t, false));
}
H(WC, "FromArray");
function HC(e) {
  let t = {};
  for (let r of globalThis.Object.getOwnPropertyNames(e)) t[r] = Er(em(e[r], false));
  return t;
}
H(HC, "FromProperties");
function Yc(e, t) {
  return t === true ? e : Er(e);
}
H(Yc, "ConditionalReadonly");
function em(e, t) {
  return $d(e) ? Yc(fo(), t) : Pd(e) ? Yc(fo(), t) : zt(e) ? Er(ln(WC(e))) : jn(e) ? Jc() : vo(e) ? Vc() : Je(e) ? Yc(Ye(HC(e)), t) : wd(e) ? Yc(uo([], qn()), t) : ut(e) ? Zc() : Od(e) ? Wc() : Fd(e) ? Hc() : Rs(e) ? Oi() : Br(e) ? De(e) : io(e) ? De(e) : et(e) ? De(e) : Ye({});
}
H(em, "FromValue");
function XO(e, t) {
  return j(em(e, true), t);
}
H(XO, "Const");
a();
function QO(e, t) {
  return ln(e.parameters, t);
}
H(QO, "ConstructorParameters");
a();
function Qs(e, t) {
  return e.map((r) => Hr(r, t));
}
H(Qs, "FromRest");
function ZC(e, t) {
  let r = {};
  for (let n of globalThis.Object.getOwnPropertyNames(e)) r[n] = Hr(e[n], t);
  return r;
}
H(ZC, "FromProperties");
function JC(e, t) {
  return e.parameters = Qs(e.parameters, t), e.returns = Hr(e.returns, t), e;
}
H(JC, "FromConstructor");
function YC(e, t) {
  return e.parameters = Qs(e.parameters, t), e.returns = Hr(e.returns, t), e;
}
H(YC, "FromFunction");
function XC(e, t) {
  return e.allOf = Qs(e.allOf, t), e;
}
H(XC, "FromIntersect");
function QC(e, t) {
  return e.anyOf = Qs(e.anyOf, t), e;
}
H(QC, "FromUnion");
function eM(e, t) {
  return ut(e.items) || (e.items = Qs(e.items, t)), e;
}
H(eM, "FromTuple");
function tM(e, t) {
  return e.items = Hr(e.items, t), e;
}
H(tM, "FromArray");
function rM(e, t) {
  return e.properties = ZC(e.properties, t), e;
}
H(rM, "FromObject");
function nM(e, t) {
  return e.item = Hr(e.item, t), e;
}
H(nM, "FromPromise");
function oM(e, t) {
  return e.items = Hr(e.items, t), e;
}
H(oM, "FromAsyncIterator");
function iM(e, t) {
  return e.items = Hr(e.items, t), e;
}
H(iM, "FromIterator");
function sM(e, t) {
  let r = t.find((i) => i.$id === e.$ref);
  if (r === void 0) throw Error("Unable to dereference schema with $id ".concat(e.$ref));
  let n = mt(r, ["$id"]);
  return Hr(n, t);
}
H(sM, "FromRef");
function aM(e, t) {
  return Ds(e) ? JC(e, t) : qs(e) ? YC(e, t) : It(e) ? XC(e, t) : Ue(e) ? QC(e, t) : Vr(e) ? eM(e, t) : Rn(e) ? tM(e, t) : Et(e) ? rM(e, t) : ko(e) ? nM(e, t) : Us(e) ? oM(e, t) : Ks(e) ? iM(e, t) : kd(e) ? sM(e, t) : e;
}
H(aM, "DerefResolve");
function Hr(e, t) {
  return aM(Ms(e), UP(t));
}
H(Hr, "Deref");
a();
function eF(e, t) {
  if (ut(e)) throw new Error("Enum undefined or empty");
  let r = globalThis.Object.getOwnPropertyNames(e).filter((s) => isNaN(s)).map((s) => e[s]), i = [...new Set(r)].map((s) => De(s));
  return Ve(i, G(F({}, t), { [Fr]: "Enum" }));
}
H(eF, "Enum");
a();
a();
a();
var am = class am2 extends ne {
};
H(am, "ExtendsResolverError");
var rm = am, v;
(function(e) {
  e[e.Union = 0] = "Union", e[e.True = 1] = "True", e[e.False = 2] = "False";
})(v || (v = {}));
function vr(e) {
  return e === v.False ? e : v.True;
}
H(vr, "IntoBooleanResult");
function Si(e) {
  throw new rm(e);
}
H(Si, "Throw");
function wt(e) {
  return x.IsNever(e) || x.IsIntersect(e) || x.IsUnion(e) || x.IsUnknown(e) || x.IsAny(e);
}
H(wt, "IsStructuralRight");
function Pt(e, t) {
  return x.IsNever(t) ? aF() : x.IsIntersect(t) ? Xc(e, t) : x.IsUnion(t) ? sm(e, t) : x.IsUnknown(t) ? pF() : x.IsAny(t) ? im() : Si("StructuralRight");
}
H(Pt, "StructuralRight");
function im(e, t) {
  return v.True;
}
H(im, "FromAnyRight");
function cM(e, t) {
  return x.IsIntersect(t) ? Xc(e, t) : x.IsUnion(t) && t.anyOf.some((r) => x.IsAny(r) || x.IsUnknown(r)) ? v.True : x.IsUnion(t) ? v.Union : x.IsUnknown(t) || x.IsAny(t) ? v.True : v.Union;
}
H(cM, "FromAny");
function fM(e, t) {
  return x.IsUnknown(e) ? v.False : x.IsAny(e) ? v.Union : x.IsNever(e) ? v.True : v.False;
}
H(fM, "FromArrayRight");
function uM(e, t) {
  return x.IsObject(t) && Qc(t) ? v.True : wt(t) ? Pt(e, t) : x.IsArray(t) ? vr(We(e.items, t.items)) : v.False;
}
H(uM, "FromArray");
function pM(e, t) {
  return wt(t) ? Pt(e, t) : x.IsAsyncIterator(t) ? vr(We(e.items, t.items)) : v.False;
}
H(pM, "FromAsyncIterator");
function lM(e, t) {
  return wt(t) ? Pt(e, t) : x.IsObject(t) ? Gt(e, t) : x.IsRecord(t) ? Ar(e, t) : x.IsBigInt(t) ? v.True : v.False;
}
H(lM, "FromBigInt");
function iF(e, t) {
  return x.IsLiteralBoolean(e) || x.IsBoolean(e) ? v.True : v.False;
}
H(iF, "FromBooleanRight");
function dM(e, t) {
  return wt(t) ? Pt(e, t) : x.IsObject(t) ? Gt(e, t) : x.IsRecord(t) ? Ar(e, t) : x.IsBoolean(t) ? v.True : v.False;
}
H(dM, "FromBoolean");
function mM(e, t) {
  return wt(t) ? Pt(e, t) : x.IsObject(t) ? Gt(e, t) : x.IsConstructor(t) ? e.parameters.length > t.parameters.length ? v.False : e.parameters.every((r, n) => vr(We(t.parameters[n], r)) === v.True) ? vr(We(e.returns, t.returns)) : v.False : v.False;
}
H(mM, "FromConstructor");
function yM(e, t) {
  return wt(t) ? Pt(e, t) : x.IsObject(t) ? Gt(e, t) : x.IsRecord(t) ? Ar(e, t) : x.IsDate(t) ? v.True : v.False;
}
H(yM, "FromDate");
function hM(e, t) {
  return wt(t) ? Pt(e, t) : x.IsObject(t) ? Gt(e, t) : x.IsFunction(t) ? e.parameters.length > t.parameters.length ? v.False : e.parameters.every((r, n) => vr(We(t.parameters[n], r)) === v.True) ? vr(We(e.returns, t.returns)) : v.False : v.False;
}
H(hM, "FromFunction");
function sF(e, t) {
  return x.IsLiteral(e) && Pe.IsNumber(e.const) || x.IsNumber(e) || x.IsInteger(e) ? v.True : v.False;
}
H(sF, "FromIntegerRight");
function gM(e, t) {
  return x.IsInteger(t) || x.IsNumber(t) ? v.True : wt(t) ? Pt(e, t) : x.IsObject(t) ? Gt(e, t) : x.IsRecord(t) ? Ar(e, t) : v.False;
}
H(gM, "FromInteger");
function Xc(e, t) {
  return t.allOf.every((r) => We(e, r) === v.True) ? v.True : v.False;
}
H(Xc, "FromIntersectRight");
function IM(e, t) {
  return e.allOf.some((r) => We(r, t) === v.True) ? v.True : v.False;
}
H(IM, "FromIntersect");
function xM(e, t) {
  return wt(t) ? Pt(e, t) : x.IsIterator(t) ? vr(We(e.items, t.items)) : v.False;
}
H(xM, "FromIterator");
function bM(e, t) {
  return x.IsLiteral(t) && t.const === e.const ? v.True : wt(t) ? Pt(e, t) : x.IsObject(t) ? Gt(e, t) : x.IsRecord(t) ? Ar(e, t) : x.IsString(t) ? uF(e) : x.IsNumber(t) ? cF(e) : x.IsInteger(t) ? sF(e) : x.IsBoolean(t) ? iF(e) : v.False;
}
H(bM, "FromLiteral");
function aF(e, t) {
  return v.False;
}
H(aF, "FromNeverRight");
function $M(e, t) {
  return v.True;
}
H($M, "FromNever");
function tF(e) {
  let [t, r] = [e, 0];
  for (; x.IsNot(t); ) t = t.not, r += 1;
  return r % 2 === 0 ? t : qn();
}
H(tF, "UnwrapTNot");
function wM(e, t) {
  return x.IsNot(e) ? We(tF(e), t) : x.IsNot(t) ? We(e, tF(t)) : Si("Invalid fallthrough for Not");
}
H(wM, "FromNot");
function PM(e, t) {
  return wt(t) ? Pt(e, t) : x.IsObject(t) ? Gt(e, t) : x.IsRecord(t) ? Ar(e, t) : x.IsNull(t) ? v.True : v.False;
}
H(PM, "FromNull");
function cF(e, t) {
  return x.IsLiteralNumber(e) || x.IsNumber(e) || x.IsInteger(e) ? v.True : v.False;
}
H(cF, "FromNumberRight");
function OM(e, t) {
  return wt(t) ? Pt(e, t) : x.IsObject(t) ? Gt(e, t) : x.IsRecord(t) ? Ar(e, t) : x.IsInteger(t) || x.IsNumber(t) ? v.True : v.False;
}
H(OM, "FromNumber");
function pr(e, t) {
  return Object.getOwnPropertyNames(e.properties).length === t;
}
H(pr, "IsObjectPropertyCount");
function rF(e) {
  return Qc(e);
}
H(rF, "IsObjectStringLike");
function nF(e) {
  return pr(e, 0) || pr(e, 1) && "description" in e.properties && x.IsUnion(e.properties.description) && e.properties.description.anyOf.length === 2 && (x.IsString(e.properties.description.anyOf[0]) && x.IsUndefined(e.properties.description.anyOf[1]) || x.IsString(e.properties.description.anyOf[1]) && x.IsUndefined(e.properties.description.anyOf[0]));
}
H(nF, "IsObjectSymbolLike");
function tm(e) {
  return pr(e, 0);
}
H(tm, "IsObjectNumberLike");
function oF(e) {
  return pr(e, 0);
}
H(oF, "IsObjectBooleanLike");
function FM(e) {
  return pr(e, 0);
}
H(FM, "IsObjectBigIntLike");
function SM(e) {
  return pr(e, 0);
}
H(SM, "IsObjectDateLike");
function EM(e) {
  return Qc(e);
}
H(EM, "IsObjectUint8ArrayLike");
function TM(e) {
  let t = pn();
  return pr(e, 0) || pr(e, 1) && "length" in e.properties && vr(We(e.properties.length, t)) === v.True;
}
H(TM, "IsObjectFunctionLike");
function vM(e) {
  return pr(e, 0);
}
H(vM, "IsObjectConstructorLike");
function Qc(e) {
  let t = pn();
  return pr(e, 0) || pr(e, 1) && "length" in e.properties && vr(We(e.properties.length, t)) === v.True;
}
H(Qc, "IsObjectArrayLike");
function AM(e) {
  let t = uo([fo()], fo());
  return pr(e, 0) || pr(e, 1) && "then" in e.properties && vr(We(e.properties.then, t)) === v.True;
}
H(AM, "IsObjectPromiseLike");
function fF(e, t) {
  return We(e, t) === v.False || x.IsOptional(e) && !x.IsOptional(t) ? v.False : v.True;
}
H(fF, "Property");
function Gt(e, t) {
  return x.IsUnknown(e) ? v.False : x.IsAny(e) ? v.Union : x.IsNever(e) || x.IsLiteralString(e) && rF(t) || x.IsLiteralNumber(e) && tm(t) || x.IsLiteralBoolean(e) && oF(t) || x.IsSymbol(e) && nF(t) || x.IsBigInt(e) && FM(t) || x.IsString(e) && rF(t) || x.IsSymbol(e) && nF(t) || x.IsNumber(e) && tm(t) || x.IsInteger(e) && tm(t) || x.IsBoolean(e) && oF(t) || x.IsUint8Array(e) && EM(t) || x.IsDate(e) && SM(t) || x.IsConstructor(e) && vM(t) || x.IsFunction(e) && TM(t) ? v.True : x.IsRecord(e) && x.IsString(nm(e)) ? t[Fr] === "Record" ? v.True : v.False : x.IsRecord(e) && x.IsNumber(nm(e)) ? pr(t, 0) ? v.True : v.False : v.False;
}
H(Gt, "FromObjectRight");
function jM(e, t) {
  return wt(t) ? Pt(e, t) : x.IsRecord(t) ? Ar(e, t) : x.IsObject(t) ? (() => {
    for (let r of Object.getOwnPropertyNames(t.properties)) {
      if (!(r in e.properties) && !x.IsOptional(t.properties[r])) return v.False;
      if (x.IsOptional(t.properties[r])) return v.True;
      if (fF(e.properties[r], t.properties[r]) === v.False) return v.False;
    }
    return v.True;
  })() : v.False;
}
H(jM, "FromObject");
function kM(e, t) {
  return wt(t) ? Pt(e, t) : x.IsObject(t) && AM(t) ? v.True : x.IsPromise(t) ? vr(We(e.item, t.item)) : v.False;
}
H(kM, "FromPromise");
function nm(e) {
  return Mn in e.patternProperties ? pn() : Ln in e.patternProperties ? Sr() : Si("Unknown record key pattern");
}
H(nm, "RecordKey");
function om(e) {
  return Mn in e.patternProperties ? e.patternProperties[Mn] : Ln in e.patternProperties ? e.patternProperties[Ln] : Si("Unable to get record value schema");
}
H(om, "RecordValue");
function Ar(e, t) {
  let [r, n] = [nm(t), om(t)];
  return x.IsLiteralString(e) && x.IsNumber(r) && vr(We(e, n)) === v.True ? v.True : x.IsUint8Array(e) && x.IsNumber(r) || x.IsString(e) && x.IsNumber(r) || x.IsArray(e) && x.IsNumber(r) ? We(e, n) : x.IsObject(e) ? (() => {
    for (let i of Object.getOwnPropertyNames(e.properties)) if (fF(n, e.properties[i]) === v.False) return v.False;
    return v.True;
  })() : v.False;
}
H(Ar, "FromRecordRight");
function _M(e, t) {
  return wt(t) ? Pt(e, t) : x.IsObject(t) ? Gt(e, t) : x.IsRecord(t) ? We(om(e), om(t)) : v.False;
}
H(_M, "FromRecord");
function NM(e, t) {
  let r = x.IsRegExp(e) ? Sr() : e, n = x.IsRegExp(t) ? Sr() : t;
  return We(r, n);
}
H(NM, "FromRegExp");
function uF(e, t) {
  return x.IsLiteral(e) && Pe.IsString(e.const) || x.IsString(e) ? v.True : v.False;
}
H(uF, "FromStringRight");
function RM(e, t) {
  return wt(t) ? Pt(e, t) : x.IsObject(t) ? Gt(e, t) : x.IsRecord(t) ? Ar(e, t) : x.IsString(t) ? v.True : v.False;
}
H(RM, "FromString");
function CM(e, t) {
  return wt(t) ? Pt(e, t) : x.IsObject(t) ? Gt(e, t) : x.IsRecord(t) ? Ar(e, t) : x.IsSymbol(t) ? v.True : v.False;
}
H(CM, "FromSymbol");
function MM(e, t) {
  return x.IsTemplateLiteral(e) ? We(No(e), t) : x.IsTemplateLiteral(t) ? We(e, No(t)) : Si("Invalid fallthrough for TemplateLiteral");
}
H(MM, "FromTemplateLiteral");
function LM(e, t) {
  return x.IsArray(t) && e.items !== void 0 && e.items.every((r) => We(r, t.items) === v.True);
}
H(LM, "IsArrayOfTuple");
function UM(e, t) {
  return x.IsNever(e) ? v.True : x.IsUnknown(e) ? v.False : x.IsAny(e) ? v.Union : v.False;
}
H(UM, "FromTupleRight");
function DM(e, t) {
  return wt(t) ? Pt(e, t) : x.IsObject(t) && Qc(t) || x.IsArray(t) && LM(e, t) ? v.True : x.IsTuple(t) ? Pe.IsUndefined(e.items) && !Pe.IsUndefined(t.items) || !Pe.IsUndefined(e.items) && Pe.IsUndefined(t.items) ? v.False : Pe.IsUndefined(e.items) && !Pe.IsUndefined(t.items) || e.items.every((r, n) => We(r, t.items[n]) === v.True) ? v.True : v.False : v.False;
}
H(DM, "FromTuple");
function qM(e, t) {
  return wt(t) ? Pt(e, t) : x.IsObject(t) ? Gt(e, t) : x.IsRecord(t) ? Ar(e, t) : x.IsUint8Array(t) ? v.True : v.False;
}
H(qM, "FromUint8Array");
function KM(e, t) {
  return wt(t) ? Pt(e, t) : x.IsObject(t) ? Gt(e, t) : x.IsRecord(t) ? Ar(e, t) : x.IsVoid(t) ? BM(e) : x.IsUndefined(t) ? v.True : v.False;
}
H(KM, "FromUndefined");
function sm(e, t) {
  return t.anyOf.some((r) => We(e, r) === v.True) ? v.True : v.False;
}
H(sm, "FromUnionRight");
function zM(e, t) {
  return e.anyOf.every((r) => We(r, t) === v.True) ? v.True : v.False;
}
H(zM, "FromUnion");
function pF(e, t) {
  return v.True;
}
H(pF, "FromUnknownRight");
function GM(e, t) {
  return x.IsNever(t) ? aF() : x.IsIntersect(t) ? Xc(e, t) : x.IsUnion(t) ? sm(e, t) : x.IsAny(t) ? im() : x.IsString(t) ? uF(e) : x.IsNumber(t) ? cF(e) : x.IsInteger(t) ? sF(e) : x.IsBoolean(t) ? iF(e) : x.IsArray(t) ? fM(e) : x.IsTuple(t) ? UM(e) : x.IsObject(t) ? Gt(e, t) : x.IsUnknown(t) ? v.True : v.False;
}
H(GM, "FromUnknown");
function BM(e, t) {
  return x.IsUndefined(e) || x.IsUndefined(e) ? v.True : v.False;
}
H(BM, "FromVoidRight");
function VM(e, t) {
  return x.IsIntersect(t) ? Xc(e, t) : x.IsUnion(t) ? sm(e, t) : x.IsUnknown(t) ? pF() : x.IsAny(t) ? im() : x.IsObject(t) ? Gt(e, t) : x.IsVoid(t) ? v.True : v.False;
}
H(VM, "FromVoid");
function We(e, t) {
  return x.IsTemplateLiteral(e) || x.IsTemplateLiteral(t) ? MM(e, t) : x.IsRegExp(e) || x.IsRegExp(t) ? NM(e, t) : x.IsNot(e) || x.IsNot(t) ? wM(e, t) : x.IsAny(e) ? cM(e, t) : x.IsArray(e) ? uM(e, t) : x.IsBigInt(e) ? lM(e, t) : x.IsBoolean(e) ? dM(e, t) : x.IsAsyncIterator(e) ? pM(e, t) : x.IsConstructor(e) ? mM(e, t) : x.IsDate(e) ? yM(e, t) : x.IsFunction(e) ? hM(e, t) : x.IsInteger(e) ? gM(e, t) : x.IsIntersect(e) ? IM(e, t) : x.IsIterator(e) ? xM(e, t) : x.IsLiteral(e) ? bM(e, t) : x.IsNever(e) ? $M() : x.IsNull(e) ? PM(e, t) : x.IsNumber(e) ? OM(e, t) : x.IsObject(e) ? jM(e, t) : x.IsRecord(e) ? _M(e, t) : x.IsString(e) ? RM(e, t) : x.IsSymbol(e) ? CM(e, t) : x.IsTuple(e) ? DM(e, t) : x.IsPromise(e) ? kM(e, t) : x.IsUint8Array(e) ? qM(e, t) : x.IsUndefined(e) ? KM(e, t) : x.IsUnion(e) ? zM(e, t) : x.IsUnknown(e) ? GM(e, t) : x.IsVoid(e) ? VM(e, t) : Si("Unknown left type operand '".concat(e[E], "'"));
}
H(We, "Visit");
function lo(e, t) {
  return We(e, t);
}
H(lo, "ExtendsCheck");
a();
a();
a();
function WM(e, t, r, n, i) {
  let s = {};
  for (let a4 of globalThis.Object.getOwnPropertyNames(e)) s[a4] = Ei(e[a4], t, r, n, it(i));
  return s;
}
H(WM, "FromProperties");
function HM(e, t, r, n, i) {
  return WM(e.properties, t, r, n, i);
}
H(HM, "FromMappedResult");
function lF(e, t, r, n, i) {
  let s = HM(e, t, r, n, i);
  return je(s);
}
H(lF, "ExtendsFromMappedResult");
function ZM(e, t, r, n) {
  let i = lo(e, t);
  return i === v.Union ? Ve([r, n]) : i === v.True ? r : n;
}
H(ZM, "ExtendsResolve");
function Ei(e, t, r, n, i) {
  return at(e) ? lF(e, t, r, n, i) : dr(e) ? j(dF(e, t, r, n, i)) : j(ZM(e, t, r, n), i);
}
H(Ei, "Extends");
function JM(e, t, r, n, i) {
  return { [e]: Ei(De(e), t, r, n, it(i)) };
}
H(JM, "FromPropertyKey");
function YM(e, t, r, n, i) {
  return e.reduce((s, a4) => F(F({}, s), JM(a4, t, r, n, i)), {});
}
H(YM, "FromPropertyKeys");
function XM(e, t, r, n, i) {
  return YM(e.keys, t, r, n, i);
}
H(XM, "FromMappedKey");
function dF(e, t, r, n, i) {
  let s = XM(e, t, r, n, i);
  return je(s);
}
H(dF, "ExtendsFromMappedKey");
a();
function QM(e) {
  return e.allOf.every((t) => Kn(t));
}
H(QM, "Intersect");
function eL(e) {
  return e.anyOf.some((t) => Kn(t));
}
H(eL, "Union");
function tL(e) {
  return !Kn(e.not);
}
H(tL, "Not");
function Kn(e) {
  return e[E] === "Intersect" ? QM(e) : e[E] === "Union" ? eL(e) : e[E] === "Not" ? tL(e) : e[E] === "Undefined";
}
H(Kn, "ExtendsUndefinedCheck");
a();
function mF(e, t) {
  return Ti(No(e), t);
}
H(mF, "ExcludeFromTemplateLiteral");
function rL(e, t) {
  let r = e.filter((n) => lo(n, t) === v.False);
  return r.length === 1 ? r[0] : Ve(r);
}
H(rL, "ExcludeRest");
function Ti(e, t, r = {}) {
  return mr(e) ? j(mF(e, t), r) : at(e) ? j(yF(e, t), r) : j(Ue(e) ? rL(e.anyOf, t) : lo(e, t) !== v.False ? Be() : e, r);
}
H(Ti, "Exclude");
function nL(e, t) {
  let r = {};
  for (let n of globalThis.Object.getOwnPropertyNames(e)) r[n] = Ti(e[n], t);
  return r;
}
H(nL, "FromProperties");
function oL(e, t) {
  return nL(e.properties, t);
}
H(oL, "FromMappedResult");
function yF(e, t) {
  let r = oL(e, t);
  return je(r);
}
H(yF, "ExcludeFromMappedResult");
a();
a();
a();
function hF(e, t) {
  return vi(No(e), t);
}
H(hF, "ExtractFromTemplateLiteral");
function iL(e, t) {
  let r = e.filter((n) => lo(n, t) !== v.False);
  return r.length === 1 ? r[0] : Ve(r);
}
H(iL, "ExtractRest");
function vi(e, t, r) {
  return mr(e) ? j(hF(e, t), r) : at(e) ? j(gF(e, t), r) : j(Ue(e) ? iL(e.anyOf, t) : lo(e, t) !== v.False ? e : Be(), r);
}
H(vi, "Extract");
function sL(e, t) {
  let r = {};
  for (let n of globalThis.Object.getOwnPropertyNames(e)) r[n] = vi(e[n], t);
  return r;
}
H(sL, "FromProperties");
function aL(e, t) {
  return sL(e.properties, t);
}
H(aL, "FromMappedResult");
function gF(e, t) {
  let r = aL(e, t);
  return je(r);
}
H(gF, "ExtractFromMappedResult");
a();
function IF(e, t) {
  return j(e.returns, t);
}
H(IF, "InstanceType");
a();
function xF(e) {
  return j({ [E]: "Integer", type: "integer" }, e);
}
H(xF, "Integer");
a();
a();
a();
function cL(e, t, r) {
  return { [e]: Zr(De(e), t, it(r)) };
}
H(cL, "MappedIntrinsicPropertyKey");
function fL(e, t, r) {
  return e.reduce((i, s) => F(F({}, i), cL(s, t, r)), {});
}
H(fL, "MappedIntrinsicPropertyKeys");
function uL(e, t, r) {
  return fL(e.keys, t, r);
}
H(uL, "MappedIntrinsicProperties");
function bF(e, t, r) {
  let n = uL(e, t, r);
  return je(n);
}
H(bF, "IntrinsicFromMappedKey");
function pL(e) {
  let [t, r] = [e.slice(0, 1), e.slice(1)];
  return [t.toLowerCase(), r].join("");
}
H(pL, "ApplyUncapitalize");
function lL(e) {
  let [t, r] = [e.slice(0, 1), e.slice(1)];
  return [t.toUpperCase(), r].join("");
}
H(lL, "ApplyCapitalize");
function dL(e) {
  return e.toUpperCase();
}
H(dL, "ApplyUppercase");
function mL(e) {
  return e.toLowerCase();
}
H(mL, "ApplyLowercase");
function yL(e, t, r) {
  let n = wi(e.pattern);
  if (!_o(n)) return G(F({}, e), { pattern: $F(e.pattern, t) });
  let a4 = [...Zs(n)].map((d) => De(d)), f = wF(a4, t), p = Ve(f);
  return qc([p], r);
}
H(yL, "FromTemplateLiteral");
function $F(e, t) {
  return typeof e == "string" ? t === "Uncapitalize" ? pL(e) : t === "Capitalize" ? lL(e) : t === "Uppercase" ? dL(e) : t === "Lowercase" ? mL(e) : e : e.toString();
}
H($F, "FromLiteralValue");
function wF(e, t) {
  return e.map((r) => Zr(r, t));
}
H(wF, "FromRest");
function Zr(e, t, r = {}) {
  return dr(e) ? bF(e, t, r) : mr(e) ? yL(e, t, r) : Ue(e) ? Ve(wF(e.anyOf, t), r) : Cn(e) ? De($F(e.const, t), r) : j(e, r);
}
H(Zr, "Intrinsic");
function PF(e, t = {}) {
  return Zr(e, "Capitalize", t);
}
H(PF, "Capitalize");
a();
function OF(e, t = {}) {
  return Zr(e, "Lowercase", t);
}
H(OF, "Lowercase");
a();
function FF(e, t = {}) {
  return Zr(e, "Uncapitalize", t);
}
H(FF, "Uncapitalize");
a();
function SF(e, t = {}) {
  return Zr(e, "Uppercase", t);
}
H(SF, "Uppercase");
a();
function EF(e, t) {
  return j({ [E]: "Not", not: e }, t);
}
H(EF, "Not");
a();
a();
a();
function hL(e, t, r) {
  let n = {};
  for (let i of globalThis.Object.getOwnPropertyNames(e)) n[i] = Ai(e[i], t, it(r));
  return n;
}
H(hL, "FromProperties");
function gL(e, t, r) {
  return hL(e.properties, t, r);
}
H(gL, "FromMappedResult");
function TF(e, t, r) {
  let n = gL(e, t, r);
  return je(n);
}
H(TF, "OmitFromMappedResult");
function IL(e, t) {
  return e.map((r) => cm(r, t));
}
H(IL, "FromIntersect");
function xL(e, t) {
  return e.map((r) => cm(r, t));
}
H(xL, "FromUnion");
function bL(e, t) {
  let i = e, { [t]: r } = i;
  return J(i, [I(t)]);
}
H(bL, "FromProperty");
function $L(e, t) {
  return t.reduce((r, n) => bL(r, n), e);
}
H($L, "FromProperties");
function wL(e, t) {
  let r = mt(e, [st, "$id", "required", "properties"]), n = $L(e.properties, t);
  return Ye(n, r);
}
H(wL, "FromObject");
function cm(e, t) {
  return It(e) ? ur(IL(e.allOf, t)) : Ue(e) ? Ve(xL(e.anyOf, t)) : Et(e) ? wL(e, t) : Ye({});
}
H(cm, "OmitResolve");
function Ai(e, t, r) {
  if (dr(t)) return vF(e, t, r);
  if (at(e)) return TF(e, t, r);
  let n = Wr(t) ? fr(t) : t;
  return j(F(F({}, cm(e, n)), r));
}
H(Ai, "Omit");
function PL(e, t, r) {
  return { [t]: Ai(e, [t], it(r)) };
}
H(PL, "FromPropertyKey");
function OL(e, t, r) {
  return t.reduce((n, i) => F(F({}, n), PL(e, i, r)), {});
}
H(OL, "FromPropertyKeys");
function FL(e, t, r) {
  return OL(e, t.keys, r);
}
H(FL, "FromMappedKey");
function vF(e, t, r) {
  let n = FL(e, t, r);
  return je(n);
}
H(vF, "OmitFromMappedKey");
a();
function AF(e, t) {
  return ln(e.parameters, t);
}
H(AF, "Parameters");
a();
a();
function jF(e) {
  return e.map((t) => kF(t));
}
H(jF, "FromRest");
function SL(e) {
  let t = {};
  for (let r of globalThis.Object.getOwnPropertyNames(e)) t[r] = cr(e[r]);
  return t;
}
H(SL, "FromProperties");
function EL(e) {
  let t = mt(e, [st, "$id", "required", "properties"]), r = SL(e.properties);
  return Ye(r, t);
}
H(EL, "FromObject");
function kF(e) {
  return It(e) ? ur(jF(e.allOf)) : Ue(e) ? Ve(jF(e.anyOf)) : Et(e) ? EL(e) : Ye({});
}
H(kF, "PartialResolve");
function ef(e, t) {
  return at(e) ? _F(e, t) : j(F(F({}, kF(e)), t));
}
H(ef, "Partial");
function TL(e, t) {
  let r = {};
  for (let n of globalThis.Object.getOwnPropertyNames(e)) r[n] = ef(e[n], it(t));
  return r;
}
H(TL, "FromProperties");
function vL(e, t) {
  return TL(e.properties, t);
}
H(vL, "FromMappedResult");
function _F(e, t) {
  let r = vL(e, t);
  return je(r);
}
H(_F, "PartialFromMappedResult");
a();
a();
a();
function AL(e, t, r) {
  let n = {};
  for (let i of globalThis.Object.getOwnPropertyNames(e)) n[i] = ji(e[i], t, it(r));
  return n;
}
H(AL, "FromProperties");
function jL(e, t, r) {
  return AL(e.properties, t, r);
}
H(jL, "FromMappedResult");
function NF(e, t, r) {
  let n = jL(e, t, r);
  return je(n);
}
H(NF, "PickFromMappedResult");
function kL(e, t) {
  return e.map((r) => fm(r, t));
}
H(kL, "FromIntersect");
function _L(e, t) {
  return e.map((r) => fm(r, t));
}
H(_L, "FromUnion");
function NL(e, t) {
  let r = {};
  for (let n of t) n in e && (r[n] = e[n]);
  return r;
}
H(NL, "FromProperties");
function RL(e, t) {
  let r = mt(e, [st, "$id", "required", "properties"]), n = NL(e.properties, t);
  return Ye(n, r);
}
H(RL, "FromObject");
function fm(e, t) {
  return It(e) ? ur(kL(e.allOf, t)) : Ue(e) ? Ve(_L(e.anyOf, t)) : Et(e) ? RL(e, t) : Ye({});
}
H(fm, "PickResolve");
function ji(e, t, r) {
  if (dr(t)) return RF(e, t, r);
  if (at(e)) return NF(e, t, r);
  let n = Wr(t) ? fr(t) : t;
  return j(F(F({}, fm(e, n)), r));
}
H(ji, "Pick");
function CL(e, t, r) {
  return { [t]: ji(e, [t], it(r)) };
}
H(CL, "FromPropertyKey");
function ML(e, t, r) {
  return t.reduce((n, i) => F(F({}, n), CL(e, i, r)), {});
}
H(ML, "FromPropertyKeys");
function LL(e, t, r) {
  return ML(e, t.keys, r);
}
H(LL, "FromMappedKey");
function RF(e, t, r) {
  let n = LL(e, t, r);
  return je(n);
}
H(RF, "PickFromMappedKey");
a();
function CF(e) {
  return Er(cr(e));
}
H(CF, "ReadonlyOptional");
a();
function Ro(e, t, r) {
  return j({ [E]: "Record", type: "object", patternProperties: { [e]: t } }, r);
}
H(Ro, "RecordCreateFromPattern");
function um(e, t, r) {
  let n = {};
  for (let i of e) n[i] = t;
  return Ye(n, G(F({}, r), { [Fr]: "Record" }));
}
H(um, "RecordCreateFromKeys");
function UL(e, t, r) {
  return Uc(e) ? um(fr(e), t, r) : Ro(e.pattern, t, r);
}
H(UL, "FromTemplateLiteralKey");
function DL(e, t, r) {
  return um(fr(Ve(e)), t, r);
}
H(DL, "FromUnionKey");
function qL(e, t, r) {
  return um([e.toString()], t, r);
}
H(qL, "FromLiteralKey");
function KL(e, t, r) {
  return Ro(e.source, t, r);
}
H(KL, "FromRegExpKey");
function zL(e, t, r) {
  let n = ut(e.pattern) ? Ln : e.pattern;
  return Ro(n, t, r);
}
H(zL, "FromStringKey");
function GL(e, t, r) {
  return Ro(Ln, t, r);
}
H(GL, "FromAnyKey");
function BL(e, t, r) {
  return Ro(EO, t, r);
}
H(BL, "FromNeverKey");
function VL(e, t, r) {
  return Ro(Mn, t, r);
}
H(VL, "FromIntegerKey");
function WL(e, t, r) {
  return Ro(Mn, t, r);
}
H(WL, "FromNumberKey");
function MF(e, t, r = {}) {
  return Ue(e) ? DL(e.anyOf, t, r) : mr(e) ? UL(e, t, r) : Cn(e) ? qL(e.const, t, r) : Ao(e) ? VL(e, t, r) : jo(e) ? WL(e, t, r) : _d(e) ? KL(e, t, r) : zs(e) ? zL(e, t, r) : Td(e) ? GL(e, t, r) : ao(e) ? BL(e, t, r) : Be(r);
}
H(MF, "Record");
a();
var HL = 0;
function LF(e, t = {}) {
  ut(t.$id) && (t.$id = "T".concat(HL++));
  let r = Ms(e({ [E]: "This", $ref: "".concat(t.$id) }));
  return r.$id = t.$id, j(F({ [Fr]: "Recursive" }, r), t);
}
H(LF, "Recursive");
a();
function UF(e, t) {
  if (et(e)) return j({ [E]: "Ref", $ref: e }, t);
  if (ut(e.$id)) throw new Error("Reference target type must specify an $id");
  return j({ [E]: "Ref", $ref: e.$id }, t);
}
H(UF, "Ref");
a();
function DF(e, t) {
  let r = et(e) ? new globalThis.RegExp(e) : e;
  return j({ [E]: "RegExp", type: "RegExp", source: r.source, flags: r.flags }, t);
}
H(DF, "RegExp");
a();
a();
function qF(e) {
  return e.map((t) => KF(t));
}
H(qF, "FromRest");
function ZL(e) {
  let t = {};
  for (let r of globalThis.Object.getOwnPropertyNames(e)) t[r] = mt(e[r], [er]);
  return t;
}
H(ZL, "FromProperties");
function JL(e) {
  let t = mt(e, [st, "$id", "required", "properties"]), r = ZL(e.properties);
  return Ye(r, t);
}
H(JL, "FromObject");
function KF(e) {
  return It(e) ? ur(qF(e.allOf)) : Ue(e) ? Ve(qF(e.anyOf)) : Et(e) ? JL(e) : Ye({});
}
H(KF, "RequiredResolve");
function tf(e, t) {
  return at(e) ? zF(e, t) : j(F(F({}, KF(e)), t));
}
H(tf, "Required");
function YL(e, t) {
  let r = {};
  for (let n of globalThis.Object.getOwnPropertyNames(e)) r[n] = tf(e[n], t);
  return r;
}
H(YL, "FromProperties");
function XL(e, t) {
  return YL(e.properties, t);
}
H(XL, "FromMappedResult");
function zF(e, t) {
  let r = XL(e, t);
  return je(r);
}
H(zF, "RequiredFromMappedResult");
a();
function QL(e) {
  var t;
  return It(e) ? e.allOf : Ue(e) ? e.anyOf : Vr(e) ? (t = e.items) != null ? t : [] : [];
}
H(QL, "RestResolve");
function GF(e) {
  return QL(e);
}
H(GF, "Rest");
a();
function BF(e, t) {
  return j(e.returns, t);
}
H(BF, "ReturnType");
a();
function VF(e) {
  return JSON.parse(JSON.stringify(e));
}
H(VF, "Strict");
a();
var dm = class dm2 {
  constructor(t) {
    this.schema = t;
  }
  Decode(t) {
    return new lm(this.schema, t);
  }
};
H(dm, "TransformDecodeBuilder");
var pm = dm, mm = class mm2 {
  constructor(t, r) {
    this.schema = t, this.decode = r;
  }
  EncodeTransform(t, r) {
    let s = { Encode: H((a4) => r[st].Encode(t(a4)), "Encode"), Decode: H((a4) => this.decode(r[st].Decode(a4)), "Decode") };
    return G(F({}, r), { [st]: s });
  }
  EncodeSchema(t, r) {
    let n = { Decode: this.decode, Encode: t };
    return G(F({}, r), { [st]: n });
  }
  Encode(t) {
    return gi(this.schema) ? this.EncodeTransform(t, this.schema) : this.EncodeSchema(t, this.schema);
  }
};
H(mm, "TransformEncodeBuilder");
var lm = mm;
function WF(e) {
  return new pm(e);
}
H(WF, "Transform");
a();
function rf(e = {}) {
  var t;
  return j({ [E]: (t = e[E]) != null ? t : "Unsafe" }, e);
}
H(rf, "Unsafe");
a();
function HF(e) {
  return j({ [E]: "Void", type: "void" }, e);
}
H(HF, "Void");
a();
var ym = {};
M(ym, { Any: () => fo, Array: () => Rc, AsyncIterator: () => Cc, Awaited: () => HO, BigInt: () => Oi, Boolean: () => Dc, Capitalize: () => PF, Composite: () => YO, Const: () => XO, Constructor: () => Mc, ConstructorParameters: () => QO, Date: () => Vc, Deref: () => Hr, Enum: () => eF, Exclude: () => Ti, Extends: () => Ei, Extract: () => vi, Function: () => uo, Index: () => Fi, InstanceType: () => IF, Integer: () => xF, Intersect: () => ur, Iterator: () => zc, KeyOf: () => Bc, Literal: () => De, Lowercase: () => OF, Mapped: () => GO, Never: () => Be, Not: () => EF, Null: () => Wc, Number: () => pn, Object: () => Ye, Omit: () => Ai, Optional: () => cr, Parameters: () => AF, Partial: () => ef, Pick: () => ji, Promise: () => Gc, Readonly: () => Er, ReadonlyOptional: () => CF, Record: () => MF, Recursive: () => LF, Ref: () => UF, RegExp: () => DF, Required: () => tf, Rest: () => GF, ReturnType: () => BF, Strict: () => VF, String: () => Sr, Symbol: () => Hc, TemplateLiteral: () => qc, Transform: () => WF, Tuple: () => ln, Uint8Array: () => Jc, Uncapitalize: () => FF, Undefined: () => Zc, Union: () => Ve, Unknown: () => qn, Unsafe: () => rf, Uppercase: () => SF, Void: () => HF });
a();
var u = ym;
var ct = H((e, t) => u.Unsafe(u.String({ $id: t, pattern: "^".concat(e, "_[A-Za-z0-9-]{8,}$") })), "Ident"), Bt = ct("g", "GeometryId"), ke = ct("f", "FloorId"), hm = [Bt, ke];
a();
a();
var ea = u.Object({ externalId: u.String({ description: "An identifier that can be used to link this entity to data outside of the MVF." }), name: u.String({ description: "The name of the entity." }), shortName: u.String({ description: "A short name for the entity." }), description: u.String({ description: "A description of the entity." }), icon: u.String({ format: "uri", description: "A URL to an icon for the entity." }) }, { $id: "BaseDetails", description: "Additional information about a given entity." }), gm = u.Partial(ea, { $id: "Details", description: "Additional information about a given entity." }), Jr = u.Object({ details: u.Optional(u.Ref(gm)) }, { $id: "WithDetails" }), Co = H((e) => {
  let t = [...e].sort(), r = u.Pick(ea, e), n = u.Omit(ea, e);
  return u.Object({ details: u.Intersect([r, u.Partial(n)]) }, { $id: "WithRequiredDetails_".concat(t.join("_")) });
}, "WithRequiredDetails"), Im = [ea, gm];
a();
a();
var xm = u.Record(u.String(), u.Unknown(), { $id: "Extra" }), Yr = u.Object({ extra: u.Optional(u.Ref(xm)) }), bm = [xm];
a();
a();
var ki = u.Object({ geometryId: u.Ref(Bt), floorId: u.Ref(ke) }, { $id: "GeometryAnchor" });
u.Object({ geometryAnchor: u.Ref(ki) });
var Mo = H((e, t) => u.Object({ geometryAnchors: u.Array(u.Ref(ki), e) }, t), "WithGeometryAnchors"), $m = [ki];
a();
a();
a();
a();
a();
var _i = u.Number({ $id: "Longitude", minimum: -180, maximum: 180, description: "A WGS 84-compatible longitude coordinate value." }), Ni = u.Number({ $id: "Latitude", minimum: -90, maximum: 90, description: "A WGS 84-compatible latitude coordinate value." }), Lo = u.Tuple([u.Ref(_i), u.Ref(Ni)], { $id: "Position", minItems: 2, maxItems: 2, description: "A valid WGS 84 position consisting of a longitude value, followed by a latitude value." }), Vt = u.Object({ type: u.Literal("Point"), coordinates: u.Ref(Lo) }, { $id: "Point", description: "An RFC-7946 compatible GeoJSON Point geometry." }), nf = u.Object({ type: u.Literal("MultiPoint"), coordinates: u.Array(u.Ref(Lo)) }, { $id: "MultiPoint", description: "An RFC-7946 compatible GeoJSON MultiPoint geometry." }), of = u.Object({ type: u.Literal("LineString"), coordinates: u.Array(u.Ref(Lo), { minItems: 2, description: "At least two positions are required." }) }, { $id: "LineString", description: "An RFC-7946 compatible GeoJSON LineString geometry." }), sf = u.Object({ type: u.Literal("MultiLineString"), coordinates: u.Array(u.Array(u.Ref(Lo), { minItems: 2 })) }, { $id: "MultiLineString", description: "An RFC-7946 compatible GeoJSON MultiLineString geometry." }), ZF = u.Array(u.Ref(Lo), { $id: "LinearRing", minItems: 4, description: "A linear ring is a building block of a polygon or multi-polygon." }), wm = u.Array(u.Ref(ZF), { $id: "LinearRings", minItems: 1, description: "A collection of linear rings, at least one of which is the exterior ring of a polygon." }), Ri = u.Object({ type: u.Literal("Polygon"), coordinates: u.Ref(wm) }, { $id: "Polygon", description: "An RFC-7946 compatible GeoJSON Polygon geometry." }), Ci = u.Object({ type: u.Literal("MultiPolygon"), coordinates: u.Array(u.Ref(wm)) }, { $id: "MultiPolygon", description: "An RFC-7946 compatible GeoJSON MultiPolygon geometry." }), Ct = H((e, t, r) => u.Object({ type: u.Literal("Feature"), geometry: e, properties: t }, r), "Feature"), rr = H((e, t, r) => u.Object({ type: u.Literal("FeatureCollection"), features: u.Array(e, r) }, t), "FeatureCollection"), Pm = [_i, Ni, Lo, Vt, nf, of, sf, ZF, wm, Ri, Ci];
var JF = u.Intersect([u.Object({ id: u.Ref(ke), elevation: u.Integer({ description: "An ordinal representing the elevation of this map relative to other maps in the stack." }), subtitle: u.Optional(u.String({ description: "The subtitle of the floor." })) }), Jr], { $id: "FloorProperties" }), YF = Ct(u.Union([u.Ref(Ri), u.Ref(Ci), u.Null()]), u.Ref(JF), { $id: "FloorFeature" }), XF = rr(u.Ref(YF), { $id: "FloorCollection" }), t2 = u.Object({ floors: u.Ref(XF) }), QF = { name: "core:floors", intoBundle: H(function* (e) {
  e.floors != null && (yield { path: "floors.geojson", contents: e.floors });
}, "intoBundle"), fromBundle: H((e, t, r) => {
  if (e === "floors.geojson") return { floors: r(t) };
}, "fromBundle"), schema: t2, references: [JF, YF, XF] };
a();
a();
a();
var Om = class Om2 {
  constructor(t) {
    O(this, "_value");
    this._value = t;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    if (this._value == null) return { done: true, value: void 0 };
    let t = this._value;
    return this._value = null, { done: false, value: t };
  }
};
H(Om, "OptionIterator");
var af = Om, Fm = class Fm2 {
  constructor(t) {
    O(this, "_tag", "Some");
    O(this, "_value");
    this._value = t;
  }
  get value() {
    return this._value;
  }
  isSome() {
    return true;
  }
  isSomeAnd(t) {
    return t(this.value);
  }
  isNone() {
    return false;
  }
  equals(t) {
    return t.isSome() && t.value === this.value;
  }
  expect(t) {
    return this.value;
  }
  unwrap() {
    return this.value;
  }
  unwrapOr(t) {
    return this.value;
  }
  unwrapOrElse(t) {
    return this.value;
  }
  inspect(t) {
    return t(this.value), this;
  }
  inspectNone(t) {
    return this;
  }
  map(t) {
    return eS(t(this.value));
  }
  mapAsync(t) {
    return t(this.value).then((r) => eS(r));
  }
  mapOr(t, r) {
    return this.map(t).unwrapOr(r);
  }
  mapOrAsync(t, r) {
    return this.mapAsync(t).then((n) => n.unwrapOr(r));
  }
  mapOrElse(t, r) {
    return this.map(t).unwrapOrElse(r);
  }
  mapOrElseAsync(t, r) {
    return this.mapAsync(t).then((n) => n.unwrapOrElse(r));
  }
  and(t) {
    return t;
  }
  andThen(t) {
    return t(this.value);
  }
  andThenAsync(t) {
    return t(this.value);
  }
  filter(t) {
    return t(this.value) ? this : mo();
  }
  or(t) {
    return this;
  }
  orElse(t) {
    return this;
  }
  xor(t) {
    return t.isSome() ? mo() : this;
  }
  toString() {
    return "Some(".concat(this.value, ")");
  }
  okOr(t) {
    return B(this.value);
  }
  okOrElse(t) {
    return B(this.value);
  }
  iter() {
    return new af(this.value);
  }
  [Symbol.iterator]() {
    return this.iter();
  }
  zip(t) {
    return t.isSome() ? Mi([this.value, t.value]) : mo();
  }
  zipWith(t, r) {
    return t.isSome() ? Mi(r(this.value, t.value)) : mo();
  }
  get [Symbol.toStringTag]() {
    return "Some";
  }
};
H(Fm, "Some");
var cf = Fm, Sm = class Sm2 {
  constructor() {
    O(this, "_tag", "None");
  }
  get value() {
    return null;
  }
  isSome() {
    return false;
  }
  isSomeAnd(t) {
    return false;
  }
  isNone() {
    return true;
  }
  equals(t) {
    return t.isNone();
  }
  expect(t) {
    throw new Error(t);
  }
  unwrap() {
    throw new Error("Tried to unwrap a None value!");
  }
  unwrapOr(t) {
    return t;
  }
  unwrapOrElse(t) {
    return t();
  }
  inspect(t) {
    return this;
  }
  inspectNone(t) {
    return t(), this;
  }
  map(t) {
    return this;
  }
  mapAsync(t) {
    return Promise.resolve(this);
  }
  mapOr(t, r) {
    return r;
  }
  mapOrAsync(t, r) {
    return Promise.resolve(r);
  }
  mapOrElse(t, r) {
    return r();
  }
  mapOrElseAsync(t, r) {
    return r();
  }
  and(t) {
    return this;
  }
  andThen(t) {
    return this;
  }
  andThenAsync(t) {
    return Promise.resolve(this);
  }
  filter(t) {
    return this;
  }
  or(t) {
    return t;
  }
  orElse(t) {
    return t();
  }
  xor(t) {
    return t;
  }
  toString() {
    return "None";
  }
  okOr(t) {
    return W(t);
  }
  okOrElse(t) {
    return W(t());
  }
  iter() {
    return new af(null);
  }
  [Symbol.iterator]() {
    return this.iter();
  }
  zip(t) {
    return this;
  }
  zipWith(t, r) {
    return this;
  }
  get [Symbol.toStringTag]() {
    return "None";
  }
};
H(Sm, "None");
var ff = Sm, Mi = H((e) => new cf(e), "some"), mo = H(() => new ff(), "none"), eS = H((e) => e instanceof cf || e instanceof ff ? e : e == null ? mo() : Mi(e), "option");
var vm = class vm2 {
  constructor(t) {
    O(this, "_value");
    this._value = t;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    if (this._value == null) return { done: true, value: void 0 };
    let t = this._value;
    return this._value = null, { done: false, value: t };
  }
};
H(vm, "ResultIterator");
var uf = vm, Am = class Am2 {
  constructor(t) {
    O(this, "_tag", "Ok");
    O(this, "_value");
    this._value = t;
  }
  get value() {
    return this._value;
  }
  get error() {
    return null;
  }
  isOk() {
    return true;
  }
  isOkAnd(t) {
    return t(this.value);
  }
  isErr() {
    return false;
  }
  isErrAnd(t) {
    return false;
  }
  ok() {
    return Mi(this.value);
  }
  err() {
    return mo();
  }
  expect(t) {
    return this.value;
  }
  expectErr(t) {
    throw new Error(t);
  }
  unwrap() {
    return this.value;
  }
  unwrapOr(t) {
    return this.value;
  }
  unwrapOrElse(t) {
    return this.value;
  }
  inspect(t) {
    return t(this.value), this;
  }
  inspectErr() {
    return this;
  }
  map(t) {
    return B(t(this.value));
  }
  async mapAsync(t) {
    return t(this.value).then(B);
  }
  mapOr(t, r) {
    return t(this.value);
  }
  async mapOrAsync(t, r) {
    return t(this.value);
  }
  mapOrElse(t, r) {
    return t(this.value);
  }
  async mapOrElseAsync(t, r) {
    return t(this.value);
  }
  mapErr(t) {
    return this;
  }
  iter() {
    return new uf(this.value);
  }
  [Symbol.iterator]() {
    return this.iter();
  }
  and(t) {
    return t;
  }
  andThen(t) {
    return t(this.value);
  }
  or(t) {
    return this;
  }
  orElse(t) {
    return this;
  }
  async andThenAsync(t) {
    return t(this.value);
  }
  toString() {
    return "Ok(".concat(this.value, ")");
  }
  get [Symbol.toStringTag]() {
    return "Ok";
  }
};
H(Am, "Ok");
var Em = Am, pf = class pf2 {
  constructor(t) {
    O(this, "_tag", "Err");
    O(this, "_error");
    this._error = t;
  }
  get value() {
    return null;
  }
  get error() {
    return this._error;
  }
  isOk() {
    return false;
  }
  isOkAnd(t) {
    return false;
  }
  isErr() {
    return true;
  }
  isErrAnd(t) {
    return t(this.error);
  }
  ok() {
    return mo();
  }
  err() {
    return Mi(this.error);
  }
  expect(t) {
    throw new Error(t);
  }
  expectErr(t) {
    return this.error;
  }
  unwrap() {
    throw this.error;
  }
  unwrapOr(t) {
    return t;
  }
  unwrapOrElse(t) {
    return t();
  }
  inspect() {
    return this;
  }
  inspectErr(t) {
    return t(this.error), this;
  }
  map(t) {
    return this;
  }
  iter() {
    return new uf(null);
  }
  [Symbol.iterator]() {
    return this.iter();
  }
  async mapAsync(t) {
    return this;
  }
  mapOr(t, r) {
    return r;
  }
  async mapOrAsync(t, r) {
    return r;
  }
  mapOrElse(t, r) {
    return r();
  }
  async mapOrElseAsync(t, r) {
    return r();
  }
  mapErr(t) {
    return new pf2(t(this.error));
  }
  and(t) {
    return this;
  }
  andThen(t) {
    return this;
  }
  async andThenAsync(t) {
    return this;
  }
  or(t) {
    return t;
  }
  orElse(t) {
    return t(this.error);
  }
  toString() {
    return "Err(".concat(this.error, ")");
  }
  get [Symbol.toStringTag]() {
    return "Err";
  }
};
H(pf, "Err");
var Tm = pf, B = H((e) => new Em(e), "ok"), W = H((e) => new Tm(e), "err");
a();
var dn;
(function(e) {
  e.GeometryMissingError = "GeometryMissingError", e.FloorMissingError = "FloorMissingError", e.UnknownFloorError = "UnknownFloorError", e.UnknownGeometryError = "UnknownGeometryError";
})(dn || (dn = {}));
var r2 = H((e) => {
  var t, r;
  return new Map((r = (t = e.floors) == null ? void 0 : t.features.map((n) => [n.properties.id, n])) != null ? r : []);
}, "createFloorMap"), zn = H((e) => {
  let t = r2(e);
  return H((n) => {
    let i = t.get(n);
    return i == null ? W({ kind: dn.UnknownFloorError, properties: { floorId: n } }) : B(i);
  }, "floorLookup");
}, "createFloorLookup");
a();
a();
a();
a();
var yt = H((e) => u.Unsafe(e), "PartialRecord");
a();
var Ee = H((e) => Object.keys(e), "typedKeys");
a();
var tS = H((e) => {
  if (e.floors == null) return W({ kind: dn.FloorMissingError, properties: null });
  if (e.geometry == null) return W({ kind: dn.GeometryMissingError, properties: null });
  let t = zn(e);
  for (let r of Ee(e.geometry)) {
    let n = t(r);
    if (n.isErr()) return n;
  }
  return B(true);
}, "validateGeometry");
var rS = u.Intersect([u.Object({ id: u.Ref(Bt) }), Jr], { $id: "GeometryProperties" }), nS = Ct(u.Union([u.Ref(Vt), u.Ref(nf), u.Ref(of), u.Ref(sf), u.Ref(Ri), u.Ref(Ci)]), u.Ref(rS), { $id: "GeometryFeature" }), oS = rr(u.Ref(nS), { $id: "GeometryCollection" }), n2 = u.Object({ geometry: yt(u.Record(ke, u.Ref(oS), { additionalProperties: false })) }, { $id: "GeometrySchema" }), o2 = /^geometry\/(.*)\.geojson$/, iS = { name: "core:geometry", schema: n2, intoBundle: H(function* (e) {
  if (e.geometry != null) for (let t of Ee(e.geometry)) yield { path: "geometry/".concat(t, ".geojson"), contents: e.geometry[t] };
}, "intoBundle"), fromBundle: H((e, t, r) => {
  var i;
  let n = (i = e.match(o2)) == null ? void 0 : i[1];
  if (n) return { geometry: { [n]: r(t) } };
}, "fromBundle"), references: [rS, nS, oS], integrityCheck: tS };
a();
a();
var _e = H((e) => Object.entries(e), "typedEntries");
var i2 = H((e) => {
  var r;
  let t = /* @__PURE__ */ new Map();
  for (let [n, i] of _e((r = e.geometry) != null ? r : {})) t.set(n, new Map(i == null ? void 0 : i.features.map((s) => [s.properties.id, s])));
  return t;
}, "createLookupMap"), vt = H((e) => {
  let t = i2(e);
  return H((n, i) => {
    let s = t.get(n);
    if (s == null) return W({ kind: dn.UnknownFloorError, properties: { floorId: n } });
    let a4 = s.get(i);
    return a4 == null ? W({ kind: dn.UnknownGeometryError, properties: { floorId: n, geometryId: i } }) : B(a4);
  }, "geometryLookup");
}, "createGeometryLookup");
a();
var jm = u.Object({ type: u.Literal("file"), name: u.String({ description: "The name of the file." }) }, { $id: "ManifestFile" }), sS = u.Recursive((e) => u.Object({ type: u.Literal("folder"), name: u.String({ description: "The name of the folder." }), children: u.Array(u.Union([e, u.Ref(jm)]), { minItems: 1, description: "The children of the folder." }) }), { $id: "ManifestFolder" }), aS = u.Object({ name: u.String({ description: "The name of the map." }), version: u.Literal("3.0.0", { description: "The version of the manifest." }), orgId: u.Optional(u.String({ description: "The identifier of the organization that the map this MVF is for belongs to." })), mapId: u.Optional(u.String({ description: "The identifier of the map that this MVF is for." })), contents: u.Array(u.Union([u.Ref(sS), u.Ref(jm)]), { minItems: 1, description: "The contents of the MVF bundle." }), time: u.String({ format: "date-time", description: "An ISO 8601 date-time string, including timezone offset." }), tzid: u.Optional(u.Unsafe(u.String({ description: "A valid IANA timezone identifier.", pattern: "^[A-Za-z0-9_-]+/[A-Za-z0-9_-]+$" }))), naturalBearing: u.Optional(u.Number({ minimum: 0, maximum: 360, description: 'The angle, in degrees, the map is considered to be "naturally oriented" as, rather than facing directly north. 90 degrees means East is "up"' })), defaultFloor: u.Optional(u.Ref(ke, { description: "The default floor ID of the map." })), language: u.Optional(u.String({ description: "The language code of the map." })) }, { $id: "ManifestProperties" }), cS = rr(Ct(Vt, u.Ref(aS)), { $id: "ManifestCollection" }, { minItems: 1, maxItems: 1 }), s2 = u.Object({ manifest: u.Ref(cS) }), fS = { name: "core:manifest", intoBundle: H(function* (e) {
  e.manifest != null && (yield { path: "manifest.geojson", contents: e.manifest });
}, "intoBundle"), fromBundle: H((e, t, r) => {
  if (e === "manifest.geojson") return { manifest: r(t) };
}, "fromBundle"), schema: s2, references: [jm, sS, aS, cS] };
var jr = u.Object({ geometryId: u.Ref(Bt) }, { $id: "WithGeometryId" }), lf = u.Object({ geometryIds: u.Array(u.Ref(Bt)) }, { $id: "WithGeometryIds" }), km = [jr, lf];
a();
a();
var uS = H((e, t) => u.Unsafe(u.Transform(u.String(t)).Decode((r) => e.includes(r) ? r : "unknown").Encode((r) => r)), "SafeStringEnumSchema"), lr = H((e, t) => {
  let r = uS(e, t), n = [...e, "unknown"], i = Object.freeze(Object.fromEntries([...e, "unknown"].map((s) => [s, s])));
  return { schema: r, values: n, record: i };
}, "SafeStringEnum");
a();
a();
a();
var ta;
(function(e) {
  e.AnnotationNonPointGeometryError = "AnnotationNonPointGeometryError", e.AnnotationUnknownSymbolError = "AnnotationUnknownSymbolError";
})(ta || (ta = {}));
var pS = H((e) => {
  var n;
  if (e.annotations == null) return B(true);
  let t = vt(e), r = new Set(Ee((n = e.annotationSymbols) != null ? n : {}));
  for (let i of Ee(e.annotations)) {
    let s = e.annotations[i];
    if (s != null) for (let a4 of s) {
      if (!r.has(a4.symbolKey)) return W({ kind: ta.AnnotationUnknownSymbolError, properties: { annotationId: a4.id, symbolKey: a4.symbolKey } });
      let f = t(i, a4.geometryId);
      if (f.isErr()) return f;
      if (f.value.geometry.type !== "Point") return W({ kind: ta.AnnotationNonPointGeometryError, properties: { annotationId: a4.id, floorId: i, geometryId: a4.geometryId } });
    }
  }
  return B(true);
}, "validateAnnotations");
var lS = ct("a", "AnnotationId"), _m = u.Intersect([jr, u.Object({ id: u.Ref(lS, { description: "The unique identifier for the annotation." }), externalId: u.Optional(u.String({ description: "The external identifier for the annotation." })), symbolKey: u.String({ description: "The symbol identifier for the annotation." }) })], { $id: "AnnotationProperties" }), dS = u.Object({ url: u.String({ format: "uri", description: "The URL for the symbol." }), name: u.String({ description: "The name of the symbol." }) }, { $id: "AnnotationSymbol" }), a2 = u.Object({ annotations: yt(u.Record(ke, u.Array(u.Ref(_m)), { additionalProperties: false })), annotationSymbols: yt(u.Record(u.Index(_m, ["symbolKey"]), u.Ref(dS))) }, { $id: "AnnotationsSchema" }), c2 = /^annotations\/(.*)\.json$/, mS = { name: "ext:mvf-annotations", schema: a2, intoBundle: H(function* (e) {
  if (e.annotations != null) for (let t of Ee(e.annotations)) yield { path: "annotations/".concat(t, ".json"), contents: e.annotations[t] };
  e.annotationSymbols != null && (yield { path: "annotation-symbols.json", contents: e.annotationSymbols });
}, "intoBundle"), fromBundle: H((e, t, r) => {
  var i;
  if (e === "annotation-symbols.json") return { annotationSymbols: r(t) };
  let n = (i = e.match(c2)) == null ? void 0 : i[1];
  if (n) return { annotations: { [n]: r(t) } };
}, "fromBundle"), references: [lS, _m, dS], integrityCheck: pS };
a();
a();
a();
a();
a();
a();
a();
a();
var Rm = class Rm2 extends ne {
  constructor(t) {
    super("Duplicate type kind '".concat(t, "' detected"));
  }
};
H(Rm, "TypeSystemDuplicateTypeKind");
var Nm = Rm, Cm = class Cm2 extends ne {
  constructor(t) {
    super("Duplicate string format '".concat(t, "' detected"));
  }
};
H(Cm, "TypeSystemDuplicateFormat");
var ra = Cm, df;
(function(e) {
  function t(n, i) {
    if (Tt.Has(n)) throw new Nm(n);
    return Tt.Set(n, i), (s = {}) => rf(G(F({}, s), { [E]: n }));
  }
  H(t, "Type"), e.Type = t;
  function r(n, i) {
    if (tr.Has(n)) throw new ra(n);
    return tr.Set(n, i), n;
  }
  H(r, "Format"), e.Format = r;
})(df || (df = {}));
a();
a();
a();
function f2(e) {
  switch (e.errorType) {
    case T.ArrayContains:
      return "Expected array to contain at least one matching value";
    case T.ArrayMaxContains:
      return "Expected array to contain no more than ".concat(e.schema.maxContains, " matching values");
    case T.ArrayMinContains:
      return "Expected array to contain at least ".concat(e.schema.minContains, " matching values");
    case T.ArrayMaxItems:
      return "Expected array length to be less or equal to ".concat(e.schema.maxItems);
    case T.ArrayMinItems:
      return "Expected array length to be greater or equal to ".concat(e.schema.minItems);
    case T.ArrayUniqueItems:
      return "Expected array elements to be unique";
    case T.Array:
      return "Expected array";
    case T.AsyncIterator:
      return "Expected AsyncIterator";
    case T.BigIntExclusiveMaximum:
      return "Expected bigint to be less than ".concat(e.schema.exclusiveMaximum);
    case T.BigIntExclusiveMinimum:
      return "Expected bigint to be greater than ".concat(e.schema.exclusiveMinimum);
    case T.BigIntMaximum:
      return "Expected bigint to be less or equal to ".concat(e.schema.maximum);
    case T.BigIntMinimum:
      return "Expected bigint to be greater or equal to ".concat(e.schema.minimum);
    case T.BigIntMultipleOf:
      return "Expected bigint to be a multiple of ".concat(e.schema.multipleOf);
    case T.BigInt:
      return "Expected bigint";
    case T.Boolean:
      return "Expected boolean";
    case T.DateExclusiveMinimumTimestamp:
      return "Expected Date timestamp to be greater than ".concat(e.schema.exclusiveMinimumTimestamp);
    case T.DateExclusiveMaximumTimestamp:
      return "Expected Date timestamp to be less than ".concat(e.schema.exclusiveMaximumTimestamp);
    case T.DateMinimumTimestamp:
      return "Expected Date timestamp to be greater or equal to ".concat(e.schema.minimumTimestamp);
    case T.DateMaximumTimestamp:
      return "Expected Date timestamp to be less or equal to ".concat(e.schema.maximumTimestamp);
    case T.DateMultipleOfTimestamp:
      return "Expected Date timestamp to be a multiple of ".concat(e.schema.multipleOfTimestamp);
    case T.Date:
      return "Expected Date";
    case T.Function:
      return "Expected function";
    case T.IntegerExclusiveMaximum:
      return "Expected integer to be less than ".concat(e.schema.exclusiveMaximum);
    case T.IntegerExclusiveMinimum:
      return "Expected integer to be greater than ".concat(e.schema.exclusiveMinimum);
    case T.IntegerMaximum:
      return "Expected integer to be less or equal to ".concat(e.schema.maximum);
    case T.IntegerMinimum:
      return "Expected integer to be greater or equal to ".concat(e.schema.minimum);
    case T.IntegerMultipleOf:
      return "Expected integer to be a multiple of ".concat(e.schema.multipleOf);
    case T.Integer:
      return "Expected integer";
    case T.IntersectUnevaluatedProperties:
      return "Unexpected property";
    case T.Intersect:
      return "Expected all values to match";
    case T.Iterator:
      return "Expected Iterator";
    case T.Literal:
      return "Expected ".concat(typeof e.schema.const == "string" ? "'".concat(e.schema.const, "'") : e.schema.const);
    case T.Never:
      return "Never";
    case T.Not:
      return "Value should not match";
    case T.Null:
      return "Expected null";
    case T.NumberExclusiveMaximum:
      return "Expected number to be less than ".concat(e.schema.exclusiveMaximum);
    case T.NumberExclusiveMinimum:
      return "Expected number to be greater than ".concat(e.schema.exclusiveMinimum);
    case T.NumberMaximum:
      return "Expected number to be less or equal to ".concat(e.schema.maximum);
    case T.NumberMinimum:
      return "Expected number to be greater or equal to ".concat(e.schema.minimum);
    case T.NumberMultipleOf:
      return "Expected number to be a multiple of ".concat(e.schema.multipleOf);
    case T.Number:
      return "Expected number";
    case T.Object:
      return "Expected object";
    case T.ObjectAdditionalProperties:
      return "Unexpected property";
    case T.ObjectMaxProperties:
      return "Expected object to have no more than ".concat(e.schema.maxProperties, " properties");
    case T.ObjectMinProperties:
      return "Expected object to have at least ".concat(e.schema.minProperties, " properties");
    case T.ObjectRequiredProperty:
      return "Expected required property";
    case T.Promise:
      return "Expected Promise";
    case T.RegExp:
      return "Expected string to match regular expression";
    case T.StringFormatUnknown:
      return "Unknown format '".concat(e.schema.format, "'");
    case T.StringFormat:
      return "Expected string to match '".concat(e.schema.format, "' format");
    case T.StringMaxLength:
      return "Expected string length less or equal to ".concat(e.schema.maxLength);
    case T.StringMinLength:
      return "Expected string length greater or equal to ".concat(e.schema.minLength);
    case T.StringPattern:
      return "Expected string to match '".concat(e.schema.pattern, "'");
    case T.String:
      return "Expected string";
    case T.Symbol:
      return "Expected symbol";
    case T.TupleLength:
      return "Expected tuple to have ".concat(e.schema.maxItems || 0, " elements");
    case T.Tuple:
      return "Expected tuple";
    case T.Uint8ArrayMaxByteLength:
      return "Expected byte length less or equal to ".concat(e.schema.maxByteLength);
    case T.Uint8ArrayMinByteLength:
      return "Expected byte length greater or equal to ".concat(e.schema.minByteLength);
    case T.Uint8Array:
      return "Expected Uint8Array";
    case T.Undefined:
      return "Expected undefined";
    case T.Union:
      return "Expected union value";
    case T.Void:
      return "Expected void";
    case T.Kind:
      return "Expected kind '".concat(e.schema[E], "'");
    default:
      return "Unknown error type";
  }
}
H(f2, "DefaultErrorFunction");
var u2 = f2;
function yS() {
  return u2;
}
H(yS, "GetErrorFunction");
a();
var Lm = class Lm2 extends ne {
  constructor(t) {
    super("Unable to dereference schema with $id '".concat(t.$ref, "'")), this.schema = t;
  }
};
H(Lm, "TypeDereferenceError");
var Mm = Lm;
function p2(e, t) {
  let r = t.find((n) => n.$id === e.$ref);
  if (r === void 0) throw new Mm(e);
  return Ne(r, t);
}
H(p2, "Resolve");
function kr(e, t) {
  return !Oe(e.$id) || t.some((r) => r.$id === e.$id) || t.push(e), t;
}
H(kr, "Pushref");
function Ne(e, t) {
  return e[E] === "This" || e[E] === "Ref" ? p2(e, t) : e;
}
H(Ne, "Deref");
a();
var Dm = class Dm2 extends ne {
  constructor(t) {
    super("Unable to hash value"), this.value = t;
  }
};
H(Dm, "ValueHashError");
var Um = Dm, yr;
(function(e) {
  e[e.Undefined = 0] = "Undefined", e[e.Null = 1] = "Null", e[e.Boolean = 2] = "Boolean", e[e.Number = 3] = "Number", e[e.String = 4] = "String", e[e.Object = 5] = "Object", e[e.Array = 6] = "Array", e[e.Date = 7] = "Date", e[e.Uint8Array = 8] = "Uint8Array", e[e.Symbol = 9] = "Symbol", e[e.BigInt = 10] = "BigInt";
})(yr || (yr = {}));
var Li = BigInt("14695981039346656037"), [l2, d2] = [BigInt("1099511628211"), BigInt("18446744073709551616")], m2 = Array.from({ length: 256 }).map((e, t) => BigInt(t)), hS = new Float64Array(1), gS = new DataView(hS.buffer), IS = new Uint8Array(hS.buffer);
function* y2(e) {
  let t = e === 0 ? 1 : Math.ceil(Math.floor(Math.log2(e) + 1) / 8);
  for (let r = 0; r < t; r++) yield e >> 8 * (t - 1 - r) & 255;
}
H(y2, "NumberToBytes");
function h2(e) {
  Wt(yr.Array);
  for (let t of e) Ui(t);
}
H(h2, "ArrayType");
function g2(e) {
  Wt(yr.Boolean), Wt(e ? 1 : 0);
}
H(g2, "BooleanType");
function I2(e) {
  Wt(yr.BigInt), gS.setBigInt64(0, e);
  for (let t of IS) Wt(t);
}
H(I2, "BigIntType");
function x2(e) {
  Wt(yr.Date), Ui(e.getTime());
}
H(x2, "DateType");
function b2(e) {
  Wt(yr.Null);
}
H(b2, "NullType");
function $2(e) {
  Wt(yr.Number), gS.setFloat64(0, e);
  for (let t of IS) Wt(t);
}
H($2, "NumberType");
function w2(e) {
  Wt(yr.Object);
  for (let t of globalThis.Object.getOwnPropertyNames(e).sort()) Ui(t), Ui(e[t]);
}
H(w2, "ObjectType");
function P2(e) {
  Wt(yr.String);
  for (let t = 0; t < e.length; t++) for (let r of y2(e.charCodeAt(t))) Wt(r);
}
H(P2, "StringType");
function O2(e) {
  Wt(yr.Symbol), Ui(e.description);
}
H(O2, "SymbolType");
function F2(e) {
  Wt(yr.Uint8Array);
  for (let t = 0; t < e.length; t++) Wt(e[t]);
}
H(F2, "Uint8ArrayType");
function S2(e) {
  return Wt(yr.Undefined);
}
H(S2, "UndefinedType");
function Ui(e) {
  if (ue(e)) return h2(e);
  if (cn(e)) return g2(e);
  if (Nt(e)) return I2(e);
  if (Qt(e)) return x2(e);
  if (kn(e)) return b2();
  if (re(e)) return $2(e);
  if (pe(e)) return w2(e);
  if (Oe(e)) return P2(e);
  if (_n(e)) return O2(e);
  if (hi(e)) return F2(e);
  if (pt(e)) return S2();
  throw new Um(e);
}
H(Ui, "Visit");
function Wt(e) {
  Li = Li ^ m2[e], Li = Li * l2 % d2;
}
H(Wt, "FNV1A64");
function yo(e) {
  return Li = BigInt("14695981039346656037"), Ui(e), Li;
}
H(yo, "Hash");
a();
var Km = class Km2 extends ne {
  constructor(t) {
    super("Unknown type"), this.schema = t;
  }
};
H(Km, "ValueCheckUnknownTypeError");
var qm = Km;
function E2(e) {
  return e[E] === "Any" || e[E] === "Unknown";
}
H(E2, "IsAnyOrUnknown");
function be(e) {
  return e !== void 0;
}
H(be, "IsDefined");
function T2(e, t, r) {
  return true;
}
H(T2, "FromAny");
function v2(e, t, r) {
  if (!ue(r) || be(e.minItems) && !(r.length >= e.minItems) || be(e.maxItems) && !(r.length <= e.maxItems) || !r.every((s) => Mt(e.items, t, s)) || e.uniqueItems === true && !(function() {
    let s = /* @__PURE__ */ new Set();
    for (let a4 of r) {
      let f = yo(a4);
      if (s.has(f)) return false;
      s.add(f);
    }
    return true;
  })()) return false;
  if (!(be(e.contains) || re(e.minContains) || re(e.maxContains))) return true;
  let n = be(e.contains) ? e.contains : Be(), i = r.reduce((s, a4) => Mt(n, t, a4) ? s + 1 : s, 0);
  return !(i === 0 || re(e.minContains) && i < e.minContains || re(e.maxContains) && i > e.maxContains);
}
H(v2, "FromArray");
function A2(e, t, r) {
  return jc(r);
}
H(A2, "FromAsyncIterator");
function j2(e, t, r) {
  return !(!Nt(r) || be(e.exclusiveMaximum) && !(r < e.exclusiveMaximum) || be(e.exclusiveMinimum) && !(r > e.exclusiveMinimum) || be(e.maximum) && !(r <= e.maximum) || be(e.minimum) && !(r >= e.minimum) || be(e.multipleOf) && r % e.multipleOf !== BigInt(0));
}
H(j2, "FromBigInt");
function k2(e, t, r) {
  return cn(r);
}
H(k2, "FromBoolean");
function _2(e, t, r) {
  return Mt(e.returns, t, r.prototype);
}
H(_2, "FromConstructor");
function N2(e, t, r) {
  return !(!Qt(r) || be(e.exclusiveMaximumTimestamp) && !(r.getTime() < e.exclusiveMaximumTimestamp) || be(e.exclusiveMinimumTimestamp) && !(r.getTime() > e.exclusiveMinimumTimestamp) || be(e.maximumTimestamp) && !(r.getTime() <= e.maximumTimestamp) || be(e.minimumTimestamp) && !(r.getTime() >= e.minimumTimestamp) || be(e.multipleOfTimestamp) && r.getTime() % e.multipleOfTimestamp !== 0);
}
H(N2, "FromDate");
function R2(e, t, r) {
  return so(r);
}
H(R2, "FromFunction");
function C2(e, t, r) {
  return !(!Nc(r) || be(e.exclusiveMaximum) && !(r < e.exclusiveMaximum) || be(e.exclusiveMinimum) && !(r > e.exclusiveMinimum) || be(e.maximum) && !(r <= e.maximum) || be(e.minimum) && !(r >= e.minimum) || be(e.multipleOf) && r % e.multipleOf !== 0);
}
H(C2, "FromInteger");
function M2(e, t, r) {
  let n = e.allOf.every((i) => Mt(i, t, r));
  if (e.unevaluatedProperties === false) {
    let i = new RegExp(Dn(e)), s = Object.getOwnPropertyNames(r).every((a4) => i.test(a4));
    return n && s;
  } else if (Fe(e.unevaluatedProperties)) {
    let i = new RegExp(Dn(e)), s = Object.getOwnPropertyNames(r).every((a4) => i.test(a4) || Mt(e.unevaluatedProperties, t, r[a4]));
    return n && s;
  } else return n;
}
H(M2, "FromIntersect");
function L2(e, t, r) {
  return kc(r);
}
H(L2, "FromIterator");
function U2(e, t, r) {
  return r === e.const;
}
H(U2, "FromLiteral");
function D2(e, t, r) {
  return false;
}
H(D2, "FromNever");
function q2(e, t, r) {
  return !Mt(e.not, t, r);
}
H(q2, "FromNot");
function K2(e, t, r) {
  return kn(r);
}
H(K2, "FromNull");
function z2(e, t, r) {
  return !(!ze.IsNumberLike(r) || be(e.exclusiveMaximum) && !(r < e.exclusiveMaximum) || be(e.exclusiveMinimum) && !(r > e.exclusiveMinimum) || be(e.minimum) && !(r >= e.minimum) || be(e.maximum) && !(r <= e.maximum) || be(e.multipleOf) && r % e.multipleOf !== 0);
}
H(z2, "FromNumber");
function G2(e, t, r) {
  if (!ze.IsObjectLike(r) || be(e.minProperties) && !(Object.getOwnPropertyNames(r).length >= e.minProperties) || be(e.maxProperties) && !(Object.getOwnPropertyNames(r).length <= e.maxProperties)) return false;
  let n = Object.getOwnPropertyNames(e.properties);
  for (let i of n) {
    let s = e.properties[i];
    if (e.required && e.required.includes(i)) {
      if (!Mt(s, t, r[i]) || (Kn(s) || E2(s)) && !(i in r)) return false;
    } else if (ze.IsExactOptionalProperty(r, i) && !Mt(s, t, r[i])) return false;
  }
  if (e.additionalProperties === false) {
    let i = Object.getOwnPropertyNames(r);
    return e.required && e.required.length === n.length && i.length === n.length ? true : i.every((s) => n.includes(s));
  } else return typeof e.additionalProperties == "object" ? Object.getOwnPropertyNames(r).every((s) => n.includes(s) || Mt(e.additionalProperties, t, r[s])) : true;
}
H(G2, "FromObject");
function B2(e, t, r) {
  return _c(r);
}
H(B2, "FromPromise");
function V2(e, t, r) {
  if (!ze.IsRecordLike(r) || be(e.minProperties) && !(Object.getOwnPropertyNames(r).length >= e.minProperties) || be(e.maxProperties) && !(Object.getOwnPropertyNames(r).length <= e.maxProperties)) return false;
  let [n, i] = Object.entries(e.patternProperties)[0], s = new RegExp(n), a4 = Object.entries(r).every(([d, l]) => s.test(d) ? Mt(i, t, l) : true), f = typeof e.additionalProperties == "object" ? Object.entries(r).every(([d, l]) => s.test(d) ? true : Mt(e.additionalProperties, t, l)) : true, p = e.additionalProperties === false ? Object.getOwnPropertyNames(r).every((d) => s.test(d)) : true;
  return a4 && f && p;
}
H(V2, "FromRecord");
function W2(e, t, r) {
  return Mt(Ne(e, t), t, r);
}
H(W2, "FromRef");
function H2(e, t, r) {
  let n = new RegExp(e.source, e.flags);
  return be(e.minLength) && !(r.length >= e.minLength) || be(e.maxLength) && !(r.length <= e.maxLength) ? false : n.test(r);
}
H(H2, "FromRegExp");
function Z2(e, t, r) {
  return !Oe(r) || be(e.minLength) && !(r.length >= e.minLength) || be(e.maxLength) && !(r.length <= e.maxLength) || be(e.pattern) && !new RegExp(e.pattern).test(r) ? false : be(e.format) ? tr.Has(e.format) ? tr.Get(e.format)(r) : false : true;
}
H(Z2, "FromString");
function J2(e, t, r) {
  return _n(r);
}
H(J2, "FromSymbol");
function Y2(e, t, r) {
  return Oe(r) && new RegExp(e.pattern).test(r);
}
H(Y2, "FromTemplateLiteral");
function X2(e, t, r) {
  return Mt(Ne(e, t), t, r);
}
H(X2, "FromThis");
function Q2(e, t, r) {
  if (!ue(r) || e.items === void 0 && r.length !== 0 || r.length !== e.maxItems) return false;
  if (!e.items) return true;
  for (let n = 0; n < e.items.length; n++) if (!Mt(e.items[n], t, r[n])) return false;
  return true;
}
H(Q2, "FromTuple");
function eU(e, t, r) {
  return pt(r);
}
H(eU, "FromUndefined");
function tU(e, t, r) {
  return e.anyOf.some((n) => Mt(n, t, r));
}
H(tU, "FromUnion");
function rU(e, t, r) {
  return !(!hi(r) || be(e.maxByteLength) && !(r.length <= e.maxByteLength) || be(e.minByteLength) && !(r.length >= e.minByteLength));
}
H(rU, "FromUint8Array");
function nU(e, t, r) {
  return true;
}
H(nU, "FromUnknown");
function oU(e, t, r) {
  return ze.IsVoidLike(r);
}
H(oU, "FromVoid");
function iU(e, t, r) {
  return Tt.Has(e[E]) ? Tt.Get(e[E])(e, r) : false;
}
H(iU, "FromKind");
function Mt(e, t, r) {
  let n = be(e.$id) ? [...t, e] : t, i = e;
  switch (i[E]) {
    case "Any":
      return T2();
    case "Array":
      return v2(i, n, r);
    case "AsyncIterator":
      return A2(i, n, r);
    case "BigInt":
      return j2(i, n, r);
    case "Boolean":
      return k2(i, n, r);
    case "Constructor":
      return _2(i, n, r);
    case "Date":
      return N2(i, n, r);
    case "Function":
      return R2(i, n, r);
    case "Integer":
      return C2(i, n, r);
    case "Intersect":
      return M2(i, n, r);
    case "Iterator":
      return L2(i, n, r);
    case "Literal":
      return U2(i, n, r);
    case "Never":
      return D2();
    case "Not":
      return q2(i, n, r);
    case "Null":
      return K2(i, n, r);
    case "Number":
      return z2(i, n, r);
    case "Object":
      return G2(i, n, r);
    case "Promise":
      return B2(i, n, r);
    case "Record":
      return V2(i, n, r);
    case "Ref":
      return W2(i, n, r);
    case "RegExp":
      return H2(i, n, r);
    case "String":
      return Z2(i, n, r);
    case "Symbol":
      return J2(i, n, r);
    case "TemplateLiteral":
      return Y2(i, n, r);
    case "This":
      return X2(i, n, r);
    case "Tuple":
      return Q2(i, n, r);
    case "Undefined":
      return eU(i, n, r);
    case "Union":
      return tU(i, n, r);
    case "Uint8Array":
      return rU(i, n, r);
    case "Unknown":
      return nU();
    case "Void":
      return oU(i, n, r);
    default:
      if (!Tt.Has(i[E])) throw new qm(i);
      return iU(i, n, r);
  }
}
H(Mt, "Visit");
function he(...e) {
  return e.length === 3 ? Mt(e[0], e[1], e[2]) : Mt(e[0], [], e[1]);
}
H(he, "Check");
var T;
(function(e) {
  e[e.ArrayContains = 0] = "ArrayContains", e[e.ArrayMaxContains = 1] = "ArrayMaxContains", e[e.ArrayMaxItems = 2] = "ArrayMaxItems", e[e.ArrayMinContains = 3] = "ArrayMinContains", e[e.ArrayMinItems = 4] = "ArrayMinItems", e[e.ArrayUniqueItems = 5] = "ArrayUniqueItems", e[e.Array = 6] = "Array", e[e.AsyncIterator = 7] = "AsyncIterator", e[e.BigIntExclusiveMaximum = 8] = "BigIntExclusiveMaximum", e[e.BigIntExclusiveMinimum = 9] = "BigIntExclusiveMinimum", e[e.BigIntMaximum = 10] = "BigIntMaximum", e[e.BigIntMinimum = 11] = "BigIntMinimum", e[e.BigIntMultipleOf = 12] = "BigIntMultipleOf", e[e.BigInt = 13] = "BigInt", e[e.Boolean = 14] = "Boolean", e[e.DateExclusiveMaximumTimestamp = 15] = "DateExclusiveMaximumTimestamp", e[e.DateExclusiveMinimumTimestamp = 16] = "DateExclusiveMinimumTimestamp", e[e.DateMaximumTimestamp = 17] = "DateMaximumTimestamp", e[e.DateMinimumTimestamp = 18] = "DateMinimumTimestamp", e[e.DateMultipleOfTimestamp = 19] = "DateMultipleOfTimestamp", e[e.Date = 20] = "Date", e[e.Function = 21] = "Function", e[e.IntegerExclusiveMaximum = 22] = "IntegerExclusiveMaximum", e[e.IntegerExclusiveMinimum = 23] = "IntegerExclusiveMinimum", e[e.IntegerMaximum = 24] = "IntegerMaximum", e[e.IntegerMinimum = 25] = "IntegerMinimum", e[e.IntegerMultipleOf = 26] = "IntegerMultipleOf", e[e.Integer = 27] = "Integer", e[e.IntersectUnevaluatedProperties = 28] = "IntersectUnevaluatedProperties", e[e.Intersect = 29] = "Intersect", e[e.Iterator = 30] = "Iterator", e[e.Kind = 31] = "Kind", e[e.Literal = 32] = "Literal", e[e.Never = 33] = "Never", e[e.Not = 34] = "Not", e[e.Null = 35] = "Null", e[e.NumberExclusiveMaximum = 36] = "NumberExclusiveMaximum", e[e.NumberExclusiveMinimum = 37] = "NumberExclusiveMinimum", e[e.NumberMaximum = 38] = "NumberMaximum", e[e.NumberMinimum = 39] = "NumberMinimum", e[e.NumberMultipleOf = 40] = "NumberMultipleOf", e[e.Number = 41] = "Number", e[e.ObjectAdditionalProperties = 42] = "ObjectAdditionalProperties", e[e.ObjectMaxProperties = 43] = "ObjectMaxProperties", e[e.ObjectMinProperties = 44] = "ObjectMinProperties", e[e.ObjectRequiredProperty = 45] = "ObjectRequiredProperty", e[e.Object = 46] = "Object", e[e.Promise = 47] = "Promise", e[e.RegExp = 48] = "RegExp", e[e.StringFormatUnknown = 49] = "StringFormatUnknown", e[e.StringFormat = 50] = "StringFormat", e[e.StringMaxLength = 51] = "StringMaxLength", e[e.StringMinLength = 52] = "StringMinLength", e[e.StringPattern = 53] = "StringPattern", e[e.String = 54] = "String", e[e.Symbol = 55] = "Symbol", e[e.TupleLength = 56] = "TupleLength", e[e.Tuple = 57] = "Tuple", e[e.Uint8ArrayMaxByteLength = 58] = "Uint8ArrayMaxByteLength", e[e.Uint8ArrayMinByteLength = 59] = "Uint8ArrayMinByteLength", e[e.Uint8Array = 60] = "Uint8Array", e[e.Undefined = 61] = "Undefined", e[e.Union = 62] = "Union", e[e.Void = 63] = "Void";
})(T || (T = {}));
var Gm = class Gm2 extends ne {
  constructor(t) {
    super("Unknown type"), this.schema = t;
  }
};
H(Gm, "ValueErrorsUnknownTypeError");
var zm = Gm;
function Gn(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
H(Gn, "EscapeKey");
function $e(e) {
  return e !== void 0;
}
H($e, "IsDefined");
var Bm = class Bm2 {
  constructor(t) {
    this.iterator = t;
  }
  [Symbol.iterator]() {
    return this.iterator;
  }
  First() {
    let t = this.iterator.next();
    return t.done ? void 0 : t.value;
  }
};
H(Bm, "ValueErrorIterator");
var _r = Bm;
function z(e, t, r, n, i = []) {
  return { type: e, schema: t, path: r, value: n, message: yS()({ errorType: e, path: r, schema: t, value: n, errors: i }), errors: i };
}
H(z, "Create");
function* sU(e, t, r, n) {
}
H(sU, "FromAny");
function* aU(e, t, r, n) {
  if (!ue(n)) return yield z(T.Array, e, r, n);
  $e(e.minItems) && !(n.length >= e.minItems) && (yield z(T.ArrayMinItems, e, r, n)), $e(e.maxItems) && !(n.length <= e.maxItems) && (yield z(T.ArrayMaxItems, e, r, n));
  for (let a4 = 0; a4 < n.length; a4++) yield* V(Lt(e.items, t, "".concat(r, "/").concat(a4), n[a4]));
  if (e.uniqueItems === true && !(function() {
    let a4 = /* @__PURE__ */ new Set();
    for (let f of n) {
      let p = yo(f);
      if (a4.has(p)) return false;
      a4.add(p);
    }
    return true;
  })() && (yield z(T.ArrayUniqueItems, e, r, n)), !($e(e.contains) || $e(e.minContains) || $e(e.maxContains))) return;
  let i = $e(e.contains) ? e.contains : Be(), s = n.reduce((a4, f, p) => Lt(i, t, "".concat(r).concat(p), f).next().done === true ? a4 + 1 : a4, 0);
  s === 0 && (yield z(T.ArrayContains, e, r, n)), re(e.minContains) && s < e.minContains && (yield z(T.ArrayMinContains, e, r, n)), re(e.maxContains) && s > e.maxContains && (yield z(T.ArrayMaxContains, e, r, n));
}
H(aU, "FromArray");
function* cU(e, t, r, n) {
  jc(n) || (yield z(T.AsyncIterator, e, r, n));
}
H(cU, "FromAsyncIterator");
function* fU(e, t, r, n) {
  if (!Nt(n)) return yield z(T.BigInt, e, r, n);
  $e(e.exclusiveMaximum) && !(n < e.exclusiveMaximum) && (yield z(T.BigIntExclusiveMaximum, e, r, n)), $e(e.exclusiveMinimum) && !(n > e.exclusiveMinimum) && (yield z(T.BigIntExclusiveMinimum, e, r, n)), $e(e.maximum) && !(n <= e.maximum) && (yield z(T.BigIntMaximum, e, r, n)), $e(e.minimum) && !(n >= e.minimum) && (yield z(T.BigIntMinimum, e, r, n)), $e(e.multipleOf) && n % e.multipleOf !== BigInt(0) && (yield z(T.BigIntMultipleOf, e, r, n));
}
H(fU, "FromBigInt");
function* uU(e, t, r, n) {
  cn(n) || (yield z(T.Boolean, e, r, n));
}
H(uU, "FromBoolean");
function* pU(e, t, r, n) {
  yield* V(Lt(e.returns, t, r, n.prototype));
}
H(pU, "FromConstructor");
function* lU(e, t, r, n) {
  if (!Qt(n)) return yield z(T.Date, e, r, n);
  $e(e.exclusiveMaximumTimestamp) && !(n.getTime() < e.exclusiveMaximumTimestamp) && (yield z(T.DateExclusiveMaximumTimestamp, e, r, n)), $e(e.exclusiveMinimumTimestamp) && !(n.getTime() > e.exclusiveMinimumTimestamp) && (yield z(T.DateExclusiveMinimumTimestamp, e, r, n)), $e(e.maximumTimestamp) && !(n.getTime() <= e.maximumTimestamp) && (yield z(T.DateMaximumTimestamp, e, r, n)), $e(e.minimumTimestamp) && !(n.getTime() >= e.minimumTimestamp) && (yield z(T.DateMinimumTimestamp, e, r, n)), $e(e.multipleOfTimestamp) && n.getTime() % e.multipleOfTimestamp !== 0 && (yield z(T.DateMultipleOfTimestamp, e, r, n));
}
H(lU, "FromDate");
function* dU(e, t, r, n) {
  so(n) || (yield z(T.Function, e, r, n));
}
H(dU, "FromFunction");
function* mU(e, t, r, n) {
  if (!Nc(n)) return yield z(T.Integer, e, r, n);
  $e(e.exclusiveMaximum) && !(n < e.exclusiveMaximum) && (yield z(T.IntegerExclusiveMaximum, e, r, n)), $e(e.exclusiveMinimum) && !(n > e.exclusiveMinimum) && (yield z(T.IntegerExclusiveMinimum, e, r, n)), $e(e.maximum) && !(n <= e.maximum) && (yield z(T.IntegerMaximum, e, r, n)), $e(e.minimum) && !(n >= e.minimum) && (yield z(T.IntegerMinimum, e, r, n)), $e(e.multipleOf) && n % e.multipleOf !== 0 && (yield z(T.IntegerMultipleOf, e, r, n));
}
H(mU, "FromInteger");
function* yU(e, t, r, n) {
  let i = false;
  for (let s of e.allOf) for (let a4 of Lt(s, t, r, n)) i = true, yield a4;
  if (i) return yield z(T.Intersect, e, r, n);
  if (e.unevaluatedProperties === false) {
    let s = new RegExp(Dn(e));
    for (let a4 of Object.getOwnPropertyNames(n)) s.test(a4) || (yield z(T.IntersectUnevaluatedProperties, e, "".concat(r, "/").concat(a4), n));
  }
  if (typeof e.unevaluatedProperties == "object") {
    let s = new RegExp(Dn(e));
    for (let a4 of Object.getOwnPropertyNames(n)) if (!s.test(a4)) {
      let f = Lt(e.unevaluatedProperties, t, "".concat(r, "/").concat(a4), n[a4]).next();
      f.done || (yield f.value);
    }
  }
}
H(yU, "FromIntersect");
function* hU(e, t, r, n) {
  kc(n) || (yield z(T.Iterator, e, r, n));
}
H(hU, "FromIterator");
function* gU(e, t, r, n) {
  n !== e.const && (yield z(T.Literal, e, r, n));
}
H(gU, "FromLiteral");
function* IU(e, t, r, n) {
  yield z(T.Never, e, r, n);
}
H(IU, "FromNever");
function* xU(e, t, r, n) {
  Lt(e.not, t, r, n).next().done === true && (yield z(T.Not, e, r, n));
}
H(xU, "FromNot");
function* bU(e, t, r, n) {
  kn(n) || (yield z(T.Null, e, r, n));
}
H(bU, "FromNull");
function* $U(e, t, r, n) {
  if (!ze.IsNumberLike(n)) return yield z(T.Number, e, r, n);
  $e(e.exclusiveMaximum) && !(n < e.exclusiveMaximum) && (yield z(T.NumberExclusiveMaximum, e, r, n)), $e(e.exclusiveMinimum) && !(n > e.exclusiveMinimum) && (yield z(T.NumberExclusiveMinimum, e, r, n)), $e(e.maximum) && !(n <= e.maximum) && (yield z(T.NumberMaximum, e, r, n)), $e(e.minimum) && !(n >= e.minimum) && (yield z(T.NumberMinimum, e, r, n)), $e(e.multipleOf) && n % e.multipleOf !== 0 && (yield z(T.NumberMultipleOf, e, r, n));
}
H($U, "FromNumber");
function* wU(e, t, r, n) {
  if (!ze.IsObjectLike(n)) return yield z(T.Object, e, r, n);
  $e(e.minProperties) && !(Object.getOwnPropertyNames(n).length >= e.minProperties) && (yield z(T.ObjectMinProperties, e, r, n)), $e(e.maxProperties) && !(Object.getOwnPropertyNames(n).length <= e.maxProperties) && (yield z(T.ObjectMaxProperties, e, r, n));
  let i = Array.isArray(e.required) ? e.required : [], s = Object.getOwnPropertyNames(e.properties), a4 = Object.getOwnPropertyNames(n);
  for (let f of i) a4.includes(f) || (yield z(T.ObjectRequiredProperty, e.properties[f], "".concat(r, "/").concat(Gn(f)), void 0));
  if (e.additionalProperties === false) for (let f of a4) s.includes(f) || (yield z(T.ObjectAdditionalProperties, e, "".concat(r, "/").concat(Gn(f)), n[f]));
  if (typeof e.additionalProperties == "object") for (let f of a4) s.includes(f) || (yield* V(Lt(e.additionalProperties, t, "".concat(r, "/").concat(Gn(f)), n[f])));
  for (let f of s) {
    let p = e.properties[f];
    e.required && e.required.includes(f) ? (yield* V(Lt(p, t, "".concat(r, "/").concat(Gn(f)), n[f])), Kn(e) && !(f in n) && (yield z(T.ObjectRequiredProperty, p, "".concat(r, "/").concat(Gn(f)), void 0))) : ze.IsExactOptionalProperty(n, f) && (yield* V(Lt(p, t, "".concat(r, "/").concat(Gn(f)), n[f])));
  }
}
H(wU, "FromObject");
function* PU(e, t, r, n) {
  _c(n) || (yield z(T.Promise, e, r, n));
}
H(PU, "FromPromise");
function* OU(e, t, r, n) {
  if (!ze.IsRecordLike(n)) return yield z(T.Object, e, r, n);
  $e(e.minProperties) && !(Object.getOwnPropertyNames(n).length >= e.minProperties) && (yield z(T.ObjectMinProperties, e, r, n)), $e(e.maxProperties) && !(Object.getOwnPropertyNames(n).length <= e.maxProperties) && (yield z(T.ObjectMaxProperties, e, r, n));
  let [i, s] = Object.entries(e.patternProperties)[0], a4 = new RegExp(i);
  for (let [f, p] of Object.entries(n)) a4.test(f) && (yield* V(Lt(s, t, "".concat(r, "/").concat(Gn(f)), p)));
  if (typeof e.additionalProperties == "object") for (let [f, p] of Object.entries(n)) a4.test(f) || (yield* V(Lt(e.additionalProperties, t, "".concat(r, "/").concat(Gn(f)), p)));
  if (e.additionalProperties === false) {
    for (let [f, p] of Object.entries(n)) if (!a4.test(f)) return yield z(T.ObjectAdditionalProperties, e, "".concat(r, "/").concat(Gn(f)), p);
  }
}
H(OU, "FromRecord");
function* FU(e, t, r, n) {
  yield* V(Lt(Ne(e, t), t, r, n));
}
H(FU, "FromRef");
function* SU(e, t, r, n) {
  if (!Oe(n)) return yield z(T.String, e, r, n);
  if ($e(e.minLength) && !(n.length >= e.minLength) && (yield z(T.StringMinLength, e, r, n)), $e(e.maxLength) && !(n.length <= e.maxLength) && (yield z(T.StringMaxLength, e, r, n)), !new RegExp(e.source, e.flags).test(n)) return yield z(T.RegExp, e, r, n);
}
H(SU, "FromRegExp");
function* EU(e, t, r, n) {
  if (!Oe(n)) return yield z(T.String, e, r, n);
  $e(e.minLength) && !(n.length >= e.minLength) && (yield z(T.StringMinLength, e, r, n)), $e(e.maxLength) && !(n.length <= e.maxLength) && (yield z(T.StringMaxLength, e, r, n)), Oe(e.pattern) && (new RegExp(e.pattern).test(n) || (yield z(T.StringPattern, e, r, n))), Oe(e.format) && (tr.Has(e.format) ? tr.Get(e.format)(n) || (yield z(T.StringFormat, e, r, n)) : yield z(T.StringFormatUnknown, e, r, n));
}
H(EU, "FromString");
function* TU(e, t, r, n) {
  _n(n) || (yield z(T.Symbol, e, r, n));
}
H(TU, "FromSymbol");
function* vU(e, t, r, n) {
  if (!Oe(n)) return yield z(T.String, e, r, n);
  new RegExp(e.pattern).test(n) || (yield z(T.StringPattern, e, r, n));
}
H(vU, "FromTemplateLiteral");
function* AU(e, t, r, n) {
  yield* V(Lt(Ne(e, t), t, r, n));
}
H(AU, "FromThis");
function* jU(e, t, r, n) {
  if (!ue(n)) return yield z(T.Tuple, e, r, n);
  if (e.items === void 0 && n.length !== 0) return yield z(T.TupleLength, e, r, n);
  if (n.length !== e.maxItems) return yield z(T.TupleLength, e, r, n);
  if (e.items) for (let i = 0; i < e.items.length; i++) yield* V(Lt(e.items[i], t, "".concat(r, "/").concat(i), n[i]));
}
H(jU, "FromTuple");
function* kU(e, t, r, n) {
  pt(n) || (yield z(T.Undefined, e, r, n));
}
H(kU, "FromUndefined");
function* _U(e, t, r, n) {
  if (he(e, t, n)) return;
  let i = e.anyOf.map((s) => new _r(Lt(s, t, r, n)));
  yield z(T.Union, e, r, n, i);
}
H(_U, "FromUnion");
function* NU(e, t, r, n) {
  if (!hi(n)) return yield z(T.Uint8Array, e, r, n);
  $e(e.maxByteLength) && !(n.length <= e.maxByteLength) && (yield z(T.Uint8ArrayMaxByteLength, e, r, n)), $e(e.minByteLength) && !(n.length >= e.minByteLength) && (yield z(T.Uint8ArrayMinByteLength, e, r, n));
}
H(NU, "FromUint8Array");
function* RU(e, t, r, n) {
}
H(RU, "FromUnknown");
function* CU(e, t, r, n) {
  ze.IsVoidLike(n) || (yield z(T.Void, e, r, n));
}
H(CU, "FromVoid");
function* MU(e, t, r, n) {
  Tt.Get(e[E])(e, n) || (yield z(T.Kind, e, r, n));
}
H(MU, "FromKind");
function* Lt(e, t, r, n) {
  let i = $e(e.$id) ? [...t, e] : t, s = e;
  switch (s[E]) {
    case "Any":
      return yield* V(sU());
    case "Array":
      return yield* V(aU(s, i, r, n));
    case "AsyncIterator":
      return yield* V(cU(s, i, r, n));
    case "BigInt":
      return yield* V(fU(s, i, r, n));
    case "Boolean":
      return yield* V(uU(s, i, r, n));
    case "Constructor":
      return yield* V(pU(s, i, r, n));
    case "Date":
      return yield* V(lU(s, i, r, n));
    case "Function":
      return yield* V(dU(s, i, r, n));
    case "Integer":
      return yield* V(mU(s, i, r, n));
    case "Intersect":
      return yield* V(yU(s, i, r, n));
    case "Iterator":
      return yield* V(hU(s, i, r, n));
    case "Literal":
      return yield* V(gU(s, i, r, n));
    case "Never":
      return yield* V(IU(s, i, r, n));
    case "Not":
      return yield* V(xU(s, i, r, n));
    case "Null":
      return yield* V(bU(s, i, r, n));
    case "Number":
      return yield* V($U(s, i, r, n));
    case "Object":
      return yield* V(wU(s, i, r, n));
    case "Promise":
      return yield* V(PU(s, i, r, n));
    case "Record":
      return yield* V(OU(s, i, r, n));
    case "Ref":
      return yield* V(FU(s, i, r, n));
    case "RegExp":
      return yield* V(SU(s, i, r, n));
    case "String":
      return yield* V(EU(s, i, r, n));
    case "Symbol":
      return yield* V(TU(s, i, r, n));
    case "TemplateLiteral":
      return yield* V(vU(s, i, r, n));
    case "This":
      return yield* V(AU(s, i, r, n));
    case "Tuple":
      return yield* V(jU(s, i, r, n));
    case "Undefined":
      return yield* V(kU(s, i, r, n));
    case "Union":
      return yield* V(_U(s, i, r, n));
    case "Uint8Array":
      return yield* V(NU(s, i, r, n));
    case "Unknown":
      return yield* V(RU());
    case "Void":
      return yield* V(CU(s, i, r, n));
    default:
      if (!Tt.Has(s[E])) throw new zm(e);
      return yield* V(MU(s, i, r, n));
  }
}
H(Lt, "Visit");
function mn(...e) {
  let t = e.length === 3 ? Lt(e[0], e[1], "", e[2]) : Lt(e[0], [], "", e[1]);
  return new _r(t);
}
H(mn, "Errors");
a();
var LU = function(e, t, r, n, i) {
  if (typeof t == "function" ? e !== t || true : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, r), r;
}, bS = function(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, Vm, mf, $S, Hm = class Hm2 extends ne {
  constructor(t) {
    let r = t.First();
    super(r === void 0 ? "Invalid Value" : r.message), Vm.add(this), mf.set(this, void 0), LU(this, mf, t), this.error = r;
  }
  Errors() {
    return new _r(bS(this, Vm, "m", $S).call(this));
  }
};
H(Hm, "AssertError");
var Wm = Hm;
mf = /* @__PURE__ */ new WeakMap(), Vm = /* @__PURE__ */ new WeakSet(), $S = H(function* () {
  this.error && (yield this.error), yield* V(bS(this, mf, "f"));
}, "_AssertError_Iterator");
function xS(e, t, r) {
  if (!he(e, t, r)) throw new Wm(mn(e, t, r));
}
H(xS, "AssertValue");
function yf(...e) {
  return e.length === 3 ? xS(e[0], e[1], e[2]) : xS(e[0], [], e[1]);
}
H(yf, "Assert");
a();
a();
a();
function UU(e) {
  let t = {};
  for (let r of Object.getOwnPropertyNames(e)) t[r] = Re(e[r]);
  for (let r of Object.getOwnPropertySymbols(e)) t[r] = Re(e[r]);
  return t;
}
H(UU, "FromObject");
function DU(e) {
  return e.map((t) => Re(t));
}
H(DU, "FromArray");
function qU(e) {
  return e.slice();
}
H(qU, "FromTypedArray");
function KU(e) {
  return new Map(Re([...e.entries()]));
}
H(KU, "FromMap");
function zU(e) {
  return new Set(Re([...e.entries()]));
}
H(zU, "FromSet");
function GU(e) {
  return new Date(e.toISOString());
}
H(GU, "FromDate");
function Re(e) {
  if (ue(e)) return DU(e);
  if (Qt(e)) return GU(e);
  if (Or(e)) return qU(e);
  if (DP(e)) return KU(e);
  if (qP(e)) return zU(e);
  if (pe(e)) return UU(e);
  if (Rt(e)) return e;
  throw new Error("ValueClone: Unable to clone value");
}
H(Re, "Clone");
var Zm = class Zm2 extends ne {
  constructor(t, r) {
    super(r), this.schema = t;
  }
};
H(Zm, "ValueCreateError");
var hr = Zm;
function Ce(e) {
  return so(e) ? e() : Re(e);
}
H(Ce, "FromDefault");
function BU(e, t) {
  return oe(e, "default") ? Ce(e.default) : {};
}
H(BU, "FromAny");
function VU(e, t) {
  if (e.uniqueItems === true && !oe(e, "default")) throw new hr(e, "Array with the uniqueItems constraint requires a default value");
  if ("contains" in e && !oe(e, "default")) throw new hr(e, "Array with the contains constraint requires a default value");
  return "default" in e ? Ce(e.default) : e.minItems !== void 0 ? Array.from({ length: e.minItems }).map((r) => gr(e.items, t)) : [];
}
H(VU, "FromArray");
function WU(e, t) {
  return oe(e, "default") ? Ce(e.default) : (function() {
    return U(this, null, function* () {
    });
  })();
}
H(WU, "FromAsyncIterator");
function HU(e, t) {
  return oe(e, "default") ? Ce(e.default) : BigInt(0);
}
H(HU, "FromBigInt");
function ZU(e, t) {
  return oe(e, "default") ? Ce(e.default) : false;
}
H(ZU, "FromBoolean");
function JU(e, t) {
  if (oe(e, "default")) return Ce(e.default);
  {
    let r = gr(e.returns, t);
    return typeof r == "object" && !Array.isArray(r) ? class {
      constructor() {
        for (let [n, i] of Object.entries(r)) {
          let s = this;
          s[n] = i;
        }
      }
    } : class {
    };
  }
}
H(JU, "FromConstructor");
function YU(e, t) {
  return oe(e, "default") ? Ce(e.default) : e.minimumTimestamp !== void 0 ? new Date(e.minimumTimestamp) : /* @__PURE__ */ new Date();
}
H(YU, "FromDate");
function XU(e, t) {
  return oe(e, "default") ? Ce(e.default) : () => gr(e.returns, t);
}
H(XU, "FromFunction");
function QU(e, t) {
  return oe(e, "default") ? Ce(e.default) : e.minimum !== void 0 ? e.minimum : 0;
}
H(QU, "FromInteger");
function eD(e, t) {
  if (oe(e, "default")) return Ce(e.default);
  {
    let r = e.allOf.reduce((n, i) => {
      let s = gr(i, t);
      return typeof s == "object" ? F(F({}, n), s) : s;
    }, {});
    if (!he(e, t, r)) throw new hr(e, "Intersect produced invalid value. Consider using a default value.");
    return r;
  }
}
H(eD, "FromIntersect");
function tD(e, t) {
  return oe(e, "default") ? Ce(e.default) : (function* () {
  })();
}
H(tD, "FromIterator");
function rD(e, t) {
  return oe(e, "default") ? Ce(e.default) : e.const;
}
H(rD, "FromLiteral");
function nD(e, t) {
  if (oe(e, "default")) return Ce(e.default);
  throw new hr(e, "Never types cannot be created. Consider using a default value.");
}
H(nD, "FromNever");
function oD(e, t) {
  if (oe(e, "default")) return Ce(e.default);
  throw new hr(e, "Not types must have a default value");
}
H(oD, "FromNot");
function iD(e, t) {
  return oe(e, "default") ? Ce(e.default) : null;
}
H(iD, "FromNull");
function sD(e, t) {
  return oe(e, "default") ? Ce(e.default) : e.minimum !== void 0 ? e.minimum : 0;
}
H(sD, "FromNumber");
function aD(e, t) {
  if (oe(e, "default")) return Ce(e.default);
  {
    let r = new Set(e.required), n = {};
    for (let [i, s] of Object.entries(e.properties)) r.has(i) && (n[i] = gr(s, t));
    return n;
  }
}
H(aD, "FromObject");
function cD(e, t) {
  return oe(e, "default") ? Ce(e.default) : Promise.resolve(gr(e.item, t));
}
H(cD, "FromPromise");
function fD(e, t) {
  let [r, n] = Object.entries(e.patternProperties)[0];
  if (oe(e, "default")) return Ce(e.default);
  if (r === Ln || r === Mn) return {};
  {
    let i = r.slice(1, r.length - 1).split("|"), s = {};
    for (let a4 of i) s[a4] = gr(n, t);
    return s;
  }
}
H(fD, "FromRecord");
function uD(e, t) {
  return oe(e, "default") ? Ce(e.default) : gr(Ne(e, t), t);
}
H(uD, "FromRef");
function pD(e, t) {
  if (oe(e, "default")) return Ce(e.default);
  throw new hr(e, "RegExp types cannot be created. Consider using a default value.");
}
H(pD, "FromRegExp");
function lD(e, t) {
  if (e.pattern !== void 0) {
    if (oe(e, "default")) return Ce(e.default);
    throw new hr(e, "String types with patterns must specify a default value");
  } else if (e.format !== void 0) {
    if (oe(e, "default")) return Ce(e.default);
    throw new hr(e, "String types with formats must specify a default value");
  } else return oe(e, "default") ? Ce(e.default) : e.minLength !== void 0 ? Array.from({ length: e.minLength }).map(() => " ").join("") : "";
}
H(lD, "FromString");
function dD(e, t) {
  return oe(e, "default") ? Ce(e.default) : "value" in e ? Symbol.for(e.value) : Symbol();
}
H(dD, "FromSymbol");
function mD(e, t) {
  if (oe(e, "default")) return Ce(e.default);
  if (!Uc(e)) throw new hr(e, "Can only create template literals that produce a finite variants. Consider using a default value.");
  return Pi(e)[0];
}
H(mD, "FromTemplateLiteral");
function yD(e, t) {
  if (wS++ > PD) throw new hr(e, "Cannot create recursive type as it appears possibly infinite. Consider using a default.");
  return oe(e, "default") ? Ce(e.default) : gr(Ne(e, t), t);
}
H(yD, "FromThis");
function hD(e, t) {
  return oe(e, "default") ? Ce(e.default) : e.items === void 0 ? [] : Array.from({ length: e.minItems }).map((r, n) => gr(e.items[n], t));
}
H(hD, "FromTuple");
function gD(e, t) {
  if (oe(e, "default")) return Ce(e.default);
}
H(gD, "FromUndefined");
function ID(e, t) {
  if (oe(e, "default")) return Ce(e.default);
  if (e.anyOf.length === 0) throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
  return gr(e.anyOf[0], t);
}
H(ID, "FromUnion");
function xD(e, t) {
  return oe(e, "default") ? Ce(e.default) : e.minByteLength !== void 0 ? new Uint8Array(e.minByteLength) : new Uint8Array(0);
}
H(xD, "FromUint8Array");
function bD(e, t) {
  return oe(e, "default") ? Ce(e.default) : {};
}
H(bD, "FromUnknown");
function $D(e, t) {
  if (oe(e, "default")) return Ce(e.default);
}
H($D, "FromVoid");
function wD(e, t) {
  if (oe(e, "default")) return Ce(e.default);
  throw new Error("User defined types must specify a default value");
}
H(wD, "FromKind");
function gr(e, t) {
  let r = kr(e, t), n = e;
  switch (n[E]) {
    case "Any":
      return BU(n);
    case "Array":
      return VU(n, r);
    case "AsyncIterator":
      return WU(n);
    case "BigInt":
      return HU(n);
    case "Boolean":
      return ZU(n);
    case "Constructor":
      return JU(n, r);
    case "Date":
      return YU(n);
    case "Function":
      return XU(n, r);
    case "Integer":
      return QU(n);
    case "Intersect":
      return eD(n, r);
    case "Iterator":
      return tD(n);
    case "Literal":
      return rD(n);
    case "Never":
      return nD(n);
    case "Not":
      return oD(n);
    case "Null":
      return iD(n);
    case "Number":
      return sD(n);
    case "Object":
      return aD(n, r);
    case "Promise":
      return cD(n, r);
    case "Record":
      return fD(n, r);
    case "Ref":
      return uD(n, r);
    case "RegExp":
      return pD(n);
    case "String":
      return lD(n);
    case "Symbol":
      return dD(n);
    case "TemplateLiteral":
      return mD(n);
    case "This":
      return yD(n, r);
    case "Tuple":
      return hD(n, r);
    case "Undefined":
      return gD(n);
    case "Union":
      return ID(n, r);
    case "Uint8Array":
      return xD(n);
    case "Unknown":
      return bD(n);
    case "Void":
      return $D(n);
    default:
      if (!Tt.Has(n[E])) throw new hr(n, "Unknown type");
      return wD(n);
  }
}
H(gr, "Visit");
var PD = 512, wS = 0;
function Nr(...e) {
  return wS = 0, e.length === 2 ? gr(e[0], e[1]) : gr(e[0], []);
}
H(Nr, "Create");
var Ym = class Ym2 extends ne {
  constructor(t, r) {
    super(r), this.schema = t;
  }
};
H(Ym, "ValueCastError");
var hf = Ym;
function OD(e, t, r) {
  if (e[E] === "Object" && typeof r == "object" && !kn(r)) {
    let n = e, i = Object.getOwnPropertyNames(r), s = Object.entries(n.properties), [a4, f] = [1 / s.length, s.length];
    return s.reduce((p, [d, l]) => {
      let m4 = l[E] === "Literal" && l.const === r[d] ? f : 0, g = he(l, t, r[d]) ? a4 : 0, b = i.includes(d) ? a4 : 0;
      return p + (m4 + g + b);
    }, 0);
  } else return he(e, t, r) ? 1 : 0;
}
H(OD, "ScoreUnion");
function FD(e, t, r) {
  let n = e.anyOf.map((a4) => Ne(a4, t)), [i, s] = [n[0], 0];
  for (let a4 of n) {
    let f = OD(a4, t, r);
    f > s && (i = a4, s = f);
  }
  return i;
}
H(FD, "SelectUnion");
function SD(e, t, r) {
  if ("default" in e) return typeof r == "function" ? e.default : Re(e.default);
  {
    let n = FD(e, t, r);
    return Jm(n, t, r);
  }
}
H(SD, "CastUnion");
function ED(e, t, r) {
  return he(e, t, r) ? Re(r) : Nr(e, t);
}
H(ED, "DefaultClone");
function TD(e, t, r) {
  return he(e, t, r) ? r : Nr(e, t);
}
H(TD, "Default");
function vD(e, t, r) {
  if (he(e, t, r)) return Re(r);
  let n = ue(r) ? Re(r) : Nr(e, t), i = re(e.minItems) && n.length < e.minItems ? [...n, ...Array.from({ length: e.minItems - n.length }, () => null)] : n, a4 = (re(e.maxItems) && i.length > e.maxItems ? i.slice(0, e.maxItems) : i).map((p) => yn(e.items, t, p));
  if (e.uniqueItems !== true) return a4;
  let f = [...new Set(a4)];
  if (!he(e, t, f)) throw new hf(e, "Array cast produced invalid data due to uniqueItems constraint");
  return f;
}
H(vD, "FromArray");
function AD(e, t, r) {
  if (he(e, t, r)) return Nr(e, t);
  let n = new Set(e.returns.required || []), i = H(function() {
  }, "result");
  for (let [s, a4] of Object.entries(e.returns.properties)) !n.has(s) && r.prototype[s] === void 0 || (i.prototype[s] = yn(a4, t, r.prototype[s]));
  return i;
}
H(AD, "FromConstructor");
function jD(e, t, r) {
  let n = Nr(e, t), i = pe(n) && pe(r) ? F(F({}, n), r) : r;
  return he(e, t, i) ? i : Nr(e, t);
}
H(jD, "FromIntersect");
function kD(e, t, r) {
  throw new hf(e, "Never types cannot be cast");
}
H(kD, "FromNever");
function _D(e, t, r) {
  if (he(e, t, r)) return r;
  if (r === null || typeof r != "object") return Nr(e, t);
  let n = new Set(e.required || []), i = {};
  for (let [s, a4] of Object.entries(e.properties)) !n.has(s) && r[s] === void 0 || (i[s] = yn(a4, t, r[s]));
  if (typeof e.additionalProperties == "object") {
    let s = Object.getOwnPropertyNames(e.properties);
    for (let a4 of Object.getOwnPropertyNames(r)) s.includes(a4) || (i[a4] = yn(e.additionalProperties, t, r[a4]));
  }
  return i;
}
H(_D, "FromObject");
function ND(e, t, r) {
  if (he(e, t, r)) return Re(r);
  if (r === null || typeof r != "object" || Array.isArray(r) || r instanceof Date) return Nr(e, t);
  let n = Object.getOwnPropertyNames(e.patternProperties)[0], i = e.patternProperties[n], s = {};
  for (let [a4, f] of Object.entries(r)) s[a4] = yn(i, t, f);
  return s;
}
H(ND, "FromRecord");
function RD(e, t, r) {
  return yn(Ne(e, t), t, r);
}
H(RD, "FromRef");
function CD(e, t, r) {
  return yn(Ne(e, t), t, r);
}
H(CD, "FromThis");
function MD(e, t, r) {
  return he(e, t, r) ? Re(r) : ue(r) ? e.items === void 0 ? [] : e.items.map((n, i) => yn(n, t, r[i])) : Nr(e, t);
}
H(MD, "FromTuple");
function LD(e, t, r) {
  return he(e, t, r) ? Re(r) : SD(e, t, r);
}
H(LD, "FromUnion");
function yn(e, t, r) {
  let n = Oe(e.$id) ? [...t, e] : t, i = e;
  switch (e[E]) {
    case "Array":
      return vD(i, n, r);
    case "Constructor":
      return AD(i, n, r);
    case "Intersect":
      return jD(i, n, r);
    case "Never":
      return kD(i);
    case "Object":
      return _D(i, n, r);
    case "Record":
      return ND(i, n, r);
    case "Ref":
      return RD(i, n, r);
    case "This":
      return CD(i, n, r);
    case "Tuple":
      return MD(i, n, r);
    case "Union":
      return LD(i, n, r);
    case "Date":
    case "Symbol":
    case "Uint8Array":
      return ED(e, t, r);
    default:
      return TD(i, n, r);
  }
}
H(yn, "Visit");
function Jm(...e) {
  return e.length === 3 ? yn(e[0], e[1], e[2]) : yn(e[0], [], e[1]);
}
H(Jm, "Cast");
a();
function UD(e) {
  return co(e) && e[E] !== "Unsafe";
}
H(UD, "IsCheckable");
function DD(e, t, r) {
  return ue(r) ? r.map((n) => Ir(e.items, t, n)) : r;
}
H(DD, "FromArray");
function qD(e, t, r) {
  let n = e.unevaluatedProperties, s = e.allOf.map((f) => Ir(f, t, Re(r))).reduce((f, p) => pe(p) ? F(F({}, f), p) : p, {});
  if (!pe(r) || !pe(s) || !co(n)) return s;
  let a4 = At(e);
  for (let f of Object.getOwnPropertyNames(r)) a4.includes(f) || he(n, t, r[f]) && (s[f] = Ir(n, t, r[f]));
  return s;
}
H(qD, "FromIntersect");
function KD(e, t, r) {
  if (!pe(r) || ue(r)) return r;
  let n = e.additionalProperties;
  for (let i of Object.getOwnPropertyNames(r)) {
    if (oe(e.properties, i)) {
      r[i] = Ir(e.properties[i], t, r[i]);
      continue;
    }
    if (co(n) && he(n, t, r[i])) {
      r[i] = Ir(n, t, r[i]);
      continue;
    }
    delete r[i];
  }
  return r;
}
H(KD, "FromObject");
function zD(e, t, r) {
  if (!pe(r)) return r;
  let n = e.additionalProperties, i = Object.getOwnPropertyNames(r), [s, a4] = Object.entries(e.patternProperties)[0], f = new RegExp(s);
  for (let p of i) {
    if (f.test(p)) {
      r[p] = Ir(a4, t, r[p]);
      continue;
    }
    if (co(n) && he(n, t, r[p])) {
      r[p] = Ir(n, t, r[p]);
      continue;
    }
    delete r[p];
  }
  return r;
}
H(zD, "FromRecord");
function GD(e, t, r) {
  return Ir(Ne(e, t), t, r);
}
H(GD, "FromRef");
function BD(e, t, r) {
  return Ir(Ne(e, t), t, r);
}
H(BD, "FromThis");
function VD(e, t, r) {
  if (!ue(r)) return r;
  if (pt(e.items)) return [];
  let n = Math.min(r.length, e.items.length);
  for (let i = 0; i < n; i++) r[i] = Ir(e.items[i], t, r[i]);
  return r.length > n ? r.slice(0, n) : r;
}
H(VD, "FromTuple");
function WD(e, t, r) {
  for (let n of e.anyOf) if (UD(n) && he(n, t, r)) return Ir(n, t, r);
  return r;
}
H(WD, "FromUnion");
function Ir(e, t, r) {
  let n = Oe(e.$id) ? [...t, e] : t, i = e;
  switch (i[E]) {
    case "Array":
      return DD(i, n, r);
    case "Intersect":
      return qD(i, n, r);
    case "Object":
      return KD(i, n, r);
    case "Record":
      return zD(i, n, r);
    case "Ref":
      return GD(i, n, r);
    case "This":
      return BD(i, n, r);
    case "Tuple":
      return VD(i, n, r);
    case "Union":
      return WD(i, n, r);
    default:
      return r;
  }
}
H(Ir, "Visit");
function gf(...e) {
  return e.length === 3 ? Ir(e[0], e[1], e[2]) : Ir(e[0], [], e[1]);
}
H(gf, "Clean");
a();
function If(e) {
  return Oe(e) && !isNaN(e) && !isNaN(parseFloat(e));
}
H(If, "IsStringNumeric");
function HD(e) {
  return Nt(e) || cn(e) || re(e);
}
H(HD, "IsValueToString");
function na(e) {
  return e === true || re(e) && e === 1 || Nt(e) && e === BigInt("1") || Oe(e) && (e.toLowerCase() === "true" || e === "1");
}
H(na, "IsValueTrue");
function oa(e) {
  return e === false || re(e) && (e === 0 || Object.is(e, -0)) || Nt(e) && e === BigInt("0") || Oe(e) && (e.toLowerCase() === "false" || e === "0" || e === "-0");
}
H(oa, "IsValueFalse");
function ZD(e) {
  return Oe(e) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(e);
}
H(ZD, "IsTimeStringWithTimeZone");
function JD(e) {
  return Oe(e) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(e);
}
H(JD, "IsTimeStringWithoutTimeZone");
function YD(e) {
  return Oe(e) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(e);
}
H(YD, "IsDateTimeStringWithTimeZone");
function XD(e) {
  return Oe(e) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(e);
}
H(XD, "IsDateTimeStringWithoutTimeZone");
function QD(e) {
  return Oe(e) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test(e);
}
H(QD, "IsDateString");
function eq(e, t) {
  let r = OS(e);
  return r === t ? r : e;
}
H(eq, "TryConvertLiteralString");
function tq(e, t) {
  let r = FS(e);
  return r === t ? r : e;
}
H(tq, "TryConvertLiteralNumber");
function rq(e, t) {
  let r = PS(e);
  return r === t ? r : e;
}
H(rq, "TryConvertLiteralBoolean");
function nq(e, t) {
  return Oe(e.const) ? eq(t, e.const) : re(e.const) ? tq(t, e.const) : cn(e.const) ? rq(t, e.const) : t;
}
H(nq, "TryConvertLiteral");
function PS(e) {
  return na(e) ? true : oa(e) ? false : e;
}
H(PS, "TryConvertBoolean");
function oq(e) {
  let t = H((r) => r.split(".")[0], "truncateInteger");
  return If(e) ? BigInt(t(e)) : re(e) ? BigInt(Math.trunc(e)) : oa(e) ? BigInt(0) : na(e) ? BigInt(1) : e;
}
H(oq, "TryConvertBigInt");
function OS(e) {
  return HD(e) ? e.toString() : _n(e) && e.description !== void 0 ? e.description.toString() : e;
}
H(OS, "TryConvertString");
function FS(e) {
  return If(e) ? parseFloat(e) : na(e) ? 1 : oa(e) ? 0 : e;
}
H(FS, "TryConvertNumber");
function iq(e) {
  return If(e) ? parseInt(e) : re(e) ? e | 0 : na(e) ? 1 : oa(e) ? 0 : e;
}
H(iq, "TryConvertInteger");
function sq(e) {
  return Oe(e) && e.toLowerCase() === "null" ? null : e;
}
H(sq, "TryConvertNull");
function aq(e) {
  return Oe(e) && e === "undefined" ? void 0 : e;
}
H(aq, "TryConvertUndefined");
function cq(e) {
  return Qt(e) ? e : re(e) ? new Date(e) : na(e) ? /* @__PURE__ */ new Date(1) : oa(e) ? /* @__PURE__ */ new Date(0) : If(e) ? new Date(parseInt(e)) : JD(e) ? new Date("1970-01-01T".concat(e, ".000Z")) : ZD(e) ? new Date("1970-01-01T".concat(e)) : XD(e) ? new Date("".concat(e, ".000Z")) : YD(e) ? new Date(e) : QD(e) ? new Date("".concat(e, "T00:00:00.000Z")) : e;
}
H(cq, "TryConvertDate");
function fq(e, t, r) {
  return (ue(r) ? r : [r]).map((i) => hn(e.items, t, i));
}
H(fq, "FromArray");
function uq(e, t, r) {
  return oq(r);
}
H(uq, "FromBigInt");
function pq(e, t, r) {
  return PS(r);
}
H(pq, "FromBoolean");
function lq(e, t, r) {
  return cq(r);
}
H(lq, "FromDate");
function dq(e, t, r) {
  return iq(r);
}
H(dq, "FromInteger");
function mq(e, t, r) {
  return e.allOf.reduce((n, i) => hn(i, t, n), r);
}
H(mq, "FromIntersect");
function yq(e, t, r) {
  return nq(e, r);
}
H(yq, "FromLiteral");
function hq(e, t, r) {
  return sq(r);
}
H(hq, "FromNull");
function gq(e, t, r) {
  return FS(r);
}
H(gq, "FromNumber");
function Iq(e, t, r) {
  if (!pe(r)) return r;
  for (let n of Object.getOwnPropertyNames(e.properties)) oe(r, n) && (r[n] = hn(e.properties[n], t, r[n]));
  return r;
}
H(Iq, "FromObject");
function xq(e, t, r) {
  if (!pe(r)) return r;
  let i = Object.getOwnPropertyNames(e.patternProperties)[0], s = e.patternProperties[i];
  for (let [a4, f] of Object.entries(r)) r[a4] = hn(s, t, f);
  return r;
}
H(xq, "FromRecord");
function bq(e, t, r) {
  return hn(Ne(e, t), t, r);
}
H(bq, "FromRef");
function $q(e, t, r) {
  return OS(r);
}
H($q, "FromString");
function wq(e, t, r) {
  return Oe(r) || re(r) ? Symbol(r) : r;
}
H(wq, "FromSymbol");
function Pq(e, t, r) {
  return hn(Ne(e, t), t, r);
}
H(Pq, "FromThis");
function Oq(e, t, r) {
  return ue(r) && !pt(e.items) ? r.map((i, s) => s < e.items.length ? hn(e.items[s], t, i) : i) : r;
}
H(Oq, "FromTuple");
function Fq(e, t, r) {
  return aq(r);
}
H(Fq, "FromUndefined");
function Sq(e, t, r) {
  for (let n of e.anyOf) {
    let i = hn(n, t, Re(r));
    if (he(n, t, i)) return i;
  }
  return r;
}
H(Sq, "FromUnion");
function hn(e, t, r) {
  let n = kr(e, t), i = e;
  switch (e[E]) {
    case "Array":
      return fq(i, n, r);
    case "BigInt":
      return uq(i, n, r);
    case "Boolean":
      return pq(i, n, r);
    case "Date":
      return lq(i, n, r);
    case "Integer":
      return dq(i, n, r);
    case "Intersect":
      return mq(i, n, r);
    case "Literal":
      return yq(i, n, r);
    case "Null":
      return hq(i, n, r);
    case "Number":
      return gq(i, n, r);
    case "Object":
      return Iq(i, n, r);
    case "Record":
      return xq(i, n, r);
    case "Ref":
      return bq(i, n, r);
    case "String":
      return $q(i, n, r);
    case "Symbol":
      return wq(i, n, r);
    case "This":
      return Pq(i, n, r);
    case "Tuple":
      return Oq(i, n, r);
    case "Undefined":
      return Fq(i, n, r);
    case "Union":
      return Sq(i, n, r);
    default:
      return r;
  }
}
H(hn, "Visit");
function xf(...e) {
  return e.length === 3 ? hn(e[0], e[1], e[2]) : hn(e[0], [], e[1]);
}
H(xf, "Convert");
a();
a();
var Xm = class Xm2 extends ne {
  constructor(t, r, n) {
    super("Unable to decode value as it does not match the expected schema"), this.schema = t, this.value = r, this.error = n;
  }
};
H(Xm, "TransformDecodeCheckError");
var Di = Xm, Qm = class Qm2 extends ne {
  constructor(t, r, n, i) {
    super(i instanceof Error ? i.message : "Unknown error"), this.schema = t, this.path = r, this.value = n, this.error = i;
  }
};
H(Qm, "TransformDecodeError");
var Uo = Qm;
function lt(e, t, r) {
  try {
    return tt(e) ? e[st].Decode(r) : r;
  } catch (n) {
    throw new Uo(e, t, r, n);
  }
}
H(lt, "Default");
function Eq(e, t, r, n) {
  return ue(n) ? lt(e, r, n.map((i, s) => gn(e.items, t, "".concat(r, "/").concat(s), i))) : lt(e, r, n);
}
H(Eq, "FromArray");
function Tq(e, t, r, n) {
  if (!pe(n) || Rt(n)) return lt(e, r, n);
  let i = po(e), s = i.map((l) => l[0]), a4 = F({}, n);
  for (let [l, m4] of i) l in a4 && (a4[l] = gn(m4, t, "".concat(r, "/").concat(l), a4[l]));
  if (!tt(e.unevaluatedProperties)) return lt(e, r, a4);
  let f = Object.getOwnPropertyNames(a4), p = e.unevaluatedProperties, d = F({}, a4);
  for (let l of f) s.includes(l) || (d[l] = lt(p, "".concat(r, "/").concat(l), d[l]));
  return lt(e, r, d);
}
H(Tq, "FromIntersect");
function vq(e, t, r, n) {
  return lt(e, r, gn(e.not, t, r, n));
}
H(vq, "FromNot");
function Aq(e, t, r, n) {
  if (!pe(n)) return lt(e, r, n);
  let i = At(e), s = F({}, n);
  for (let d of i) oe(s, d) && (pt(s[d]) && (!Ii(e.properties[d]) || ze.IsExactOptionalProperty(s, d)) || (s[d] = gn(e.properties[d], t, "".concat(r, "/").concat(d), s[d])));
  if (!Fe(e.additionalProperties)) return lt(e, r, s);
  let a4 = Object.getOwnPropertyNames(s), f = e.additionalProperties, p = F({}, s);
  for (let d of a4) i.includes(d) || (p[d] = lt(f, "".concat(r, "/").concat(d), p[d]));
  return lt(e, r, p);
}
H(Aq, "FromObject");
function jq(e, t, r, n) {
  if (!pe(n)) return lt(e, r, n);
  let i = Object.getOwnPropertyNames(e.patternProperties)[0], s = new RegExp(i), a4 = F({}, n);
  for (let l of Object.getOwnPropertyNames(n)) s.test(l) && (a4[l] = gn(e.patternProperties[i], t, "".concat(r, "/").concat(l), a4[l]));
  if (!Fe(e.additionalProperties)) return lt(e, r, a4);
  let f = Object.getOwnPropertyNames(a4), p = e.additionalProperties, d = F({}, a4);
  for (let l of f) s.test(l) || (d[l] = lt(p, "".concat(r, "/").concat(l), d[l]));
  return lt(e, r, d);
}
H(jq, "FromRecord");
function kq(e, t, r, n) {
  let i = Ne(e, t);
  return lt(e, r, gn(i, t, r, n));
}
H(kq, "FromRef");
function _q(e, t, r, n) {
  let i = Ne(e, t);
  return lt(e, r, gn(i, t, r, n));
}
H(_q, "FromThis");
function Nq(e, t, r, n) {
  return ue(n) && ue(e.items) ? lt(e, r, e.items.map((i, s) => gn(i, t, "".concat(r, "/").concat(s), n[s]))) : lt(e, r, n);
}
H(Nq, "FromTuple");
function Rq(e, t, r, n) {
  for (let i of e.anyOf) {
    if (!he(i, t, n)) continue;
    let s = gn(i, t, r, n);
    return lt(e, r, s);
  }
  return lt(e, r, n);
}
H(Rq, "FromUnion");
function gn(e, t, r, n) {
  let i = kr(e, t), s = e;
  switch (e[E]) {
    case "Array":
      return Eq(s, i, r, n);
    case "Intersect":
      return Tq(s, i, r, n);
    case "Not":
      return vq(s, i, r, n);
    case "Object":
      return Aq(s, i, r, n);
    case "Record":
      return jq(s, i, r, n);
    case "Ref":
      return kq(s, i, r, n);
    case "Symbol":
      return lt(s, r, n);
    case "This":
      return _q(s, i, r, n);
    case "Tuple":
      return Nq(s, i, r, n);
    case "Union":
      return Rq(s, i, r, n);
    default:
      return lt(s, r, n);
  }
}
H(gn, "Visit");
function qi(e, t, r) {
  return gn(e, t, "", r);
}
H(qi, "TransformDecode");
a();
var ey = class ey2 extends ne {
  constructor(t, r, n) {
    super("The encoded value does not match the expected schema"), this.schema = t, this.value = r, this.error = n;
  }
};
H(ey, "TransformEncodeCheckError");
var Ki = ey, ty = class ty2 extends ne {
  constructor(t, r, n, i) {
    super("".concat(i instanceof Error ? i.message : "Unknown error")), this.schema = t, this.path = r, this.value = n, this.error = i;
  }
};
H(ty, "TransformEncodeError");
var Do = ty;
function Ht(e, t, r) {
  try {
    return tt(e) ? e[st].Encode(r) : r;
  } catch (n) {
    throw new Do(e, t, r, n);
  }
}
H(Ht, "Default");
function Cq(e, t, r, n) {
  let i = Ht(e, r, n);
  return ue(i) ? i.map((s, a4) => In(e.items, t, "".concat(r, "/").concat(a4), s)) : i;
}
H(Cq, "FromArray");
function Mq(e, t, r, n) {
  let i = Ht(e, r, n);
  if (!pe(n) || Rt(n)) return i;
  let s = po(e), a4 = s.map((m4) => m4[0]), f = F({}, i);
  for (let [m4, g] of s) m4 in f && (f[m4] = In(g, t, "".concat(r, "/").concat(m4), f[m4]));
  if (!tt(e.unevaluatedProperties)) return f;
  let p = Object.getOwnPropertyNames(f), d = e.unevaluatedProperties, l = F({}, f);
  for (let m4 of p) a4.includes(m4) || (l[m4] = Ht(d, "".concat(r, "/").concat(m4), l[m4]));
  return l;
}
H(Mq, "FromIntersect");
function Lq(e, t, r, n) {
  return Ht(e.not, r, Ht(e, r, n));
}
H(Lq, "FromNot");
function Uq(e, t, r, n) {
  let i = Ht(e, r, n);
  if (!pe(i)) return i;
  let s = At(e), a4 = F({}, i);
  for (let l of s) oe(a4, l) && (pt(a4[l]) && (!Ii(e.properties[l]) || ze.IsExactOptionalProperty(a4, l)) || (a4[l] = In(e.properties[l], t, "".concat(r, "/").concat(l), a4[l])));
  if (!Fe(e.additionalProperties)) return a4;
  let f = Object.getOwnPropertyNames(a4), p = e.additionalProperties, d = F({}, a4);
  for (let l of f) s.includes(l) || (d[l] = Ht(p, "".concat(r, "/").concat(l), d[l]));
  return d;
}
H(Uq, "FromObject");
function Dq(e, t, r, n) {
  let i = Ht(e, r, n);
  if (!pe(n)) return i;
  let s = Object.getOwnPropertyNames(e.patternProperties)[0], a4 = new RegExp(s), f = F({}, i);
  for (let m4 of Object.getOwnPropertyNames(n)) a4.test(m4) && (f[m4] = In(e.patternProperties[s], t, "".concat(r, "/").concat(m4), f[m4]));
  if (!Fe(e.additionalProperties)) return f;
  let p = Object.getOwnPropertyNames(f), d = e.additionalProperties, l = F({}, f);
  for (let m4 of p) a4.test(m4) || (l[m4] = Ht(d, "".concat(r, "/").concat(m4), l[m4]));
  return l;
}
H(Dq, "FromRecord");
function qq(e, t, r, n) {
  let i = Ne(e, t), s = In(i, t, r, n);
  return Ht(e, r, s);
}
H(qq, "FromRef");
function Kq(e, t, r, n) {
  let i = Ne(e, t), s = In(i, t, r, n);
  return Ht(e, r, s);
}
H(Kq, "FromThis");
function zq(e, t, r, n) {
  let i = Ht(e, r, n);
  return ue(e.items) ? e.items.map((s, a4) => In(s, t, "".concat(r, "/").concat(a4), i[a4])) : [];
}
H(zq, "FromTuple");
function Gq(e, t, r, n) {
  for (let i of e.anyOf) {
    if (!he(i, t, n)) continue;
    let s = In(i, t, r, n);
    return Ht(e, r, s);
  }
  for (let i of e.anyOf) {
    let s = In(i, t, r, n);
    if (he(e, t, s)) return Ht(e, r, s);
  }
  return Ht(e, r, n);
}
H(Gq, "FromUnion");
function In(e, t, r, n) {
  let i = kr(e, t), s = e;
  switch (e[E]) {
    case "Array":
      return Cq(s, i, r, n);
    case "Intersect":
      return Mq(s, i, r, n);
    case "Not":
      return Lq(s, i, r, n);
    case "Object":
      return Uq(s, i, r, n);
    case "Record":
      return Dq(s, i, r, n);
    case "Ref":
      return qq(s, i, r, n);
    case "This":
      return Kq(s, i, r, n);
    case "Tuple":
      return zq(s, i, r, n);
    case "Union":
      return Gq(s, i, r, n);
    default:
      return Ht(s, r, n);
  }
}
H(In, "Visit");
function bf(e, t, r) {
  return In(e, t, "", r);
}
H(bf, "TransformEncode");
a();
function Bq(e, t) {
  return tt(e) || jt(e.items, t);
}
H(Bq, "FromArray");
function Vq(e, t) {
  return tt(e) || jt(e.items, t);
}
H(Vq, "FromAsyncIterator");
function Wq(e, t) {
  return tt(e) || jt(e.returns, t) || e.parameters.some((r) => jt(r, t));
}
H(Wq, "FromConstructor");
function Hq(e, t) {
  return tt(e) || jt(e.returns, t) || e.parameters.some((r) => jt(r, t));
}
H(Hq, "FromFunction");
function Zq(e, t) {
  return tt(e) || tt(e.unevaluatedProperties) || e.allOf.some((r) => jt(r, t));
}
H(Zq, "FromIntersect");
function Jq(e, t) {
  return tt(e) || jt(e.items, t);
}
H(Jq, "FromIterator");
function Yq(e, t) {
  return tt(e) || jt(e.not, t);
}
H(Yq, "FromNot");
function Xq(e, t) {
  return tt(e) || Object.values(e.properties).some((r) => jt(r, t)) || Fe(e.additionalProperties) && jt(e.additionalProperties, t);
}
H(Xq, "FromObject");
function Qq(e, t) {
  return tt(e) || jt(e.item, t);
}
H(Qq, "FromPromise");
function e9(e, t) {
  let r = Object.getOwnPropertyNames(e.patternProperties)[0], n = e.patternProperties[r];
  return tt(e) || jt(n, t) || Fe(e.additionalProperties) && tt(e.additionalProperties);
}
H(e9, "FromRecord");
function t9(e, t) {
  return tt(e) ? true : jt(Ne(e, t), t);
}
H(t9, "FromRef");
function r9(e, t) {
  return tt(e) ? true : jt(Ne(e, t), t);
}
H(r9, "FromThis");
function n9(e, t) {
  return tt(e) || !pt(e.items) && e.items.some((r) => jt(r, t));
}
H(n9, "FromTuple");
function o9(e, t) {
  return tt(e) || e.anyOf.some((r) => jt(r, t));
}
H(o9, "FromUnion");
function jt(e, t) {
  let r = kr(e, t), n = e;
  if (e.$id && ry.has(e.$id)) return false;
  switch (e.$id && ry.add(e.$id), e[E]) {
    case "Array":
      return Bq(n, r);
    case "AsyncIterator":
      return Vq(n, r);
    case "Constructor":
      return Wq(n, r);
    case "Function":
      return Hq(n, r);
    case "Intersect":
      return Zq(n, r);
    case "Iterator":
      return Jq(n, r);
    case "Not":
      return Yq(n, r);
    case "Object":
      return Xq(n, r);
    case "Promise":
      return Qq(n, r);
    case "Record":
      return e9(n, r);
    case "Ref":
      return t9(n, r);
    case "This":
      return r9(n, r);
    case "Tuple":
      return n9(n, r);
    case "Union":
      return o9(n, r);
    default:
      return tt(e);
  }
}
H(jt, "Visit");
var ry = /* @__PURE__ */ new Set();
function xn(e, t) {
  return ry.clear(), jt(e, t);
}
H(xn, "HasTransform");
function SS(...e) {
  let [t, r, n] = e.length === 3 ? [e[0], e[1], e[2]] : [e[0], [], e[1]];
  if (!he(t, r, n)) throw new Di(t, n, mn(t, r, n).First());
  return xn(t, r) ? qi(t, r, n) : n;
}
H(SS, "Decode");
a();
function Bn(e, t) {
  let r = oe(e, "default") ? e.default : void 0, n = so(r) ? r() : Re(r);
  return pt(t) ? n : pe(t) && pe(n) ? Object.assign(n, t) : t;
}
H(Bn, "ValueOrDefault");
function ny(e) {
  return co(e) && "default" in e;
}
H(ny, "HasDefaultProperty");
function i9(e, t, r) {
  let n = Bn(e, r);
  if (!ue(n)) return n;
  for (let i = 0; i < n.length; i++) n[i] = xr(e.items, t, n[i]);
  return n;
}
H(i9, "FromArray");
function s9(e, t, r) {
  return Qt(r) ? r : Bn(e, r);
}
H(s9, "FromDate");
function a9(e, t, r) {
  let n = Bn(e, r);
  return e.allOf.reduce((i, s) => {
    let a4 = xr(s, t, n);
    return pe(a4) ? F(F({}, i), a4) : a4;
  }, {});
}
H(a9, "FromIntersect");
function c9(e, t, r) {
  let n = Bn(e, r);
  if (!pe(n)) return n;
  let i = Object.getOwnPropertyNames(e.properties);
  for (let s of i) {
    let a4 = xr(e.properties[s], t, n[s]);
    pt(a4) || (n[s] = xr(e.properties[s], t, n[s]));
  }
  if (!ny(e.additionalProperties)) return n;
  for (let s of Object.getOwnPropertyNames(n)) i.includes(s) || (n[s] = xr(e.additionalProperties, t, n[s]));
  return n;
}
H(c9, "FromObject");
function f9(e, t, r) {
  let n = Bn(e, r);
  if (!pe(n)) return n;
  let i = e.additionalProperties, [s, a4] = Object.entries(e.patternProperties)[0], f = new RegExp(s);
  for (let p of Object.getOwnPropertyNames(n)) f.test(p) && ny(a4) && (n[p] = xr(a4, t, n[p]));
  if (!ny(i)) return n;
  for (let p of Object.getOwnPropertyNames(n)) f.test(p) || (n[p] = xr(i, t, n[p]));
  return n;
}
H(f9, "FromRecord");
function u9(e, t, r) {
  return xr(Ne(e, t), t, Bn(e, r));
}
H(u9, "FromRef");
function p9(e, t, r) {
  return xr(Ne(e, t), t, r);
}
H(p9, "FromThis");
function l9(e, t, r) {
  let n = Bn(e, r);
  if (!ue(n) || pt(e.items)) return n;
  let [i, s] = [e.items, Math.max(e.items.length, n.length)];
  for (let a4 = 0; a4 < s; a4++) a4 < i.length && (n[a4] = xr(i[a4], t, n[a4]));
  return n;
}
H(l9, "FromTuple");
function d9(e, t, r) {
  let n = Bn(e, r);
  for (let i of e.anyOf) {
    let s = xr(i, t, Re(n));
    if (he(i, t, s)) return s;
  }
  return n;
}
H(d9, "FromUnion");
function xr(e, t, r) {
  let n = kr(e, t), i = e;
  switch (i[E]) {
    case "Array":
      return i9(i, n, r);
    case "Date":
      return s9(i, n, r);
    case "Intersect":
      return a9(i, n, r);
    case "Object":
      return c9(i, n, r);
    case "Record":
      return f9(i, n, r);
    case "Ref":
      return u9(i, n, r);
    case "This":
      return p9(i, n, r);
    case "Tuple":
      return l9(i, n, r);
    case "Union":
      return d9(i, n, r);
    default:
      return Bn(i, r);
  }
}
H(xr, "Visit");
function $f(...e) {
  return e.length === 3 ? xr(e[0], e[1], e[2]) : xr(e[0], [], e[1]);
}
H($f, "Default");
a();
a();
var Rr = {};
M(Rr, { Delete: () => y9, Format: () => ia, Get: () => g9, Has: () => h9, Set: () => m9, ValuePointerRootDeleteError: () => Pf, ValuePointerRootSetError: () => wf });
a();
var oy = class oy2 extends ne {
  constructor(t, r, n) {
    super("Cannot set root value"), this.value = t, this.path = r, this.update = n;
  }
};
H(oy, "ValuePointerRootSetError");
var wf = oy, iy = class iy2 extends ne {
  constructor(t, r) {
    super("Cannot delete root value"), this.value = t, this.path = r;
  }
};
H(iy, "ValuePointerRootDeleteError");
var Pf = iy;
function ES(e) {
  return e.indexOf("~") === -1 ? e : e.replace(/~1/g, "/").replace(/~0/g, "~");
}
H(ES, "Escape");
function* ia(e) {
  if (e === "") return;
  let [t, r] = [0, 0];
  for (let n = 0; n < e.length; n++) e.charAt(n) === "/" ? (n === 0 || (r = n, yield ES(e.slice(t, r))), t = n + 1) : r = n;
  yield ES(e.slice(t));
}
H(ia, "Format");
function m9(e, t, r) {
  if (t === "") throw new wf(e, t, r);
  let [n, i, s] = [null, e, ""];
  for (let a4 of ia(t)) i[a4] === void 0 && (i[a4] = {}), n = i, i = i[a4], s = a4;
  n[s] = r;
}
H(m9, "Set");
function y9(e, t) {
  if (t === "") throw new Pf(e, t);
  let [r, n, i] = [null, e, ""];
  for (let s of ia(t)) {
    if (n[s] === void 0 || n[s] === null) return;
    r = n, n = n[s], i = s;
  }
  if (Array.isArray(r)) {
    let s = parseInt(i);
    r.splice(s, 1);
  } else delete r[i];
}
H(y9, "Delete");
function h9(e, t) {
  if (t === "") return true;
  let [r, n, i] = [null, e, ""];
  for (let s of ia(t)) {
    if (n[s] === void 0) return false;
    r = n, n = n[s], i = s;
  }
  return Object.getOwnPropertyNames(r).includes(i);
}
H(h9, "Has");
function g9(e, t) {
  if (t === "") return e;
  let r = e;
  for (let n of ia(t)) {
    if (r[n] === void 0) return;
    r = r[n];
  }
  return r;
}
H(g9, "Get");
a();
function I9(e, t) {
  if (!pe(t)) return false;
  let r = [...Object.keys(e), ...Object.getOwnPropertySymbols(e)], n = [...Object.keys(t), ...Object.getOwnPropertySymbols(t)];
  return r.length !== n.length ? false : r.every((i) => qo(e[i], t[i]));
}
H(I9, "ObjectType");
function x9(e, t) {
  return Qt(t) && e.getTime() === t.getTime();
}
H(x9, "DateType");
function b9(e, t) {
  return !ue(t) || e.length !== t.length ? false : e.every((r, n) => qo(r, t[n]));
}
H(b9, "ArrayType");
function $9(e, t) {
  return !Or(t) || e.length !== t.length || Object.getPrototypeOf(e).constructor.name !== Object.getPrototypeOf(t).constructor.name ? false : e.every((r, n) => qo(r, t[n]));
}
H($9, "TypedArrayType");
function w9(e, t) {
  return e === t;
}
H(w9, "ValueType");
function qo(e, t) {
  if (Qt(e)) return x9(e, t);
  if (Or(e)) return $9(e, t);
  if (ue(e)) return b9(e, t);
  if (pe(e)) return I9(e, t);
  if (Rt(e)) return w9(e, t);
  throw new Error("ValueEquals: Unable to compare value");
}
H(qo, "Equal");
var P9 = Ye({ type: De("insert"), path: Sr(), value: qn() }), O9 = Ye({ type: De("update"), path: Sr(), value: qn() }), F9 = Ye({ type: De("delete"), path: Sr() }), vS = Ve([P9, O9, F9]), sy = class sy2 extends ne {
  constructor(t, r) {
    super(r), this.value = t;
  }
};
H(sy, "ValueDiffError");
var Of = sy;
function Ff(e, t) {
  return { type: "update", path: e, value: t };
}
H(Ff, "CreateUpdate");
function AS(e, t) {
  return { type: "insert", path: e, value: t };
}
H(AS, "CreateInsert");
function jS(e) {
  return { type: "delete", path: e };
}
H(jS, "CreateDelete");
function TS(e) {
  if (globalThis.Object.getOwnPropertySymbols(e).length > 0) throw new Of(e, "Cannot diff objects with symbols");
}
H(TS, "AssertDiffable");
function* S9(e, t, r) {
  if (TS(t), TS(r), !Sd(r)) return yield Ff(e, r);
  let n = globalThis.Object.getOwnPropertyNames(t), i = globalThis.Object.getOwnPropertyNames(r);
  for (let s of i) oe(t, s) || (yield AS("".concat(e, "/").concat(s), r[s]));
  for (let s of n) oe(r, s) && (qo(t, r) || (yield* V(Sf("".concat(e, "/").concat(s), t[s], r[s]))));
  for (let s of n) oe(r, s) || (yield jS("".concat(e, "/").concat(s)));
}
H(S9, "ObjectType");
function* E9(e, t, r) {
  if (!ue(r)) return yield Ff(e, r);
  for (let n = 0; n < Math.min(t.length, r.length); n++) yield* V(Sf("".concat(e, "/").concat(n), t[n], r[n]));
  for (let n = 0; n < r.length; n++) n < t.length || (yield AS("".concat(e, "/").concat(n), r[n]));
  for (let n = t.length - 1; n >= 0; n--) n < r.length || (yield jS("".concat(e, "/").concat(n)));
}
H(E9, "ArrayType");
function* T9(e, t, r) {
  if (!Or(r) || t.length !== r.length || globalThis.Object.getPrototypeOf(t).constructor.name !== globalThis.Object.getPrototypeOf(r).constructor.name) return yield Ff(e, r);
  for (let n = 0; n < Math.min(t.length, r.length); n++) yield* V(Sf("".concat(e, "/").concat(n), t[n], r[n]));
}
H(T9, "TypedArrayType");
function* v9(e, t, r) {
  t !== r && (yield Ff(e, r));
}
H(v9, "ValueType");
function* Sf(e, t, r) {
  if (Sd(t)) return yield* V(S9(e, t, r));
  if (ue(t)) return yield* V(E9(e, t, r));
  if (Or(t)) return yield* V(T9(e, t, r));
  if (Rt(t)) return yield* V(v9(e, t, r));
  throw new Of(t, "Unable to diff value");
}
H(Sf, "Visit");
function kS(e, t) {
  return [...Sf("", e, t)];
}
H(kS, "Diff");
function A9(e) {
  return e.length > 0 && e[0].path === "" && e[0].type === "update";
}
H(A9, "IsRootUpdate");
function j9(e) {
  return e.length === 0;
}
H(j9, "IsIdentity");
function _S(e, t) {
  if (A9(t)) return Re(t[0].value);
  if (j9(t)) return Re(e);
  let r = Re(e);
  for (let n of t) switch (n.type) {
    case "insert": {
      Rr.Set(r, n.path, n.value);
      break;
    }
    case "update": {
      Rr.Set(r, n.path, n.value);
      break;
    }
    case "delete": {
      Rr.Delete(r, n.path);
      break;
    }
  }
  return r;
}
H(_S, "Patch");
a();
function NS(...e) {
  let [t, r, n] = e.length === 3 ? [e[0], e[1], e[2]] : [e[0], [], e[1]], i = xn(t, r) ? bf(t, r, n) : n;
  if (!he(t, r, i)) throw new Ki(t, i, mn(t, r, i).First());
  return i;
}
H(NS, "Encode");
a();
var cy = class cy2 extends ne {
  constructor(t) {
    super(t);
  }
};
H(cy, "ValueMutateError");
var Ef = cy;
function k9(e, t, r, n) {
  if (!pe(r)) Rr.Set(e, t, Re(n));
  else {
    let i = Object.getOwnPropertyNames(r), s = Object.getOwnPropertyNames(n);
    for (let a4 of i) s.includes(a4) || delete r[a4];
    for (let a4 of s) i.includes(a4) || (r[a4] = null);
    for (let a4 of s) ay(e, "".concat(t, "/").concat(a4), r[a4], n[a4]);
  }
}
H(k9, "ObjectType");
function _9(e, t, r, n) {
  if (!ue(r)) Rr.Set(e, t, Re(n));
  else {
    for (let i = 0; i < n.length; i++) ay(e, "".concat(t, "/").concat(i), r[i], n[i]);
    r.splice(n.length);
  }
}
H(_9, "ArrayType");
function N9(e, t, r, n) {
  if (Or(r) && r.length === n.length) for (let i = 0; i < r.length; i++) r[i] = n[i];
  else Rr.Set(e, t, Re(n));
}
H(N9, "TypedArrayType");
function R9(e, t, r, n) {
  r !== n && Rr.Set(e, t, n);
}
H(R9, "ValueType");
function ay(e, t, r, n) {
  if (ue(n)) return _9(e, t, r, n);
  if (Or(n)) return N9(e, t, r, n);
  if (pe(n)) return k9(e, t, r, n);
  if (Rt(n)) return R9(e, t, r, n);
}
H(ay, "Visit");
function RS(e) {
  return Or(e) || Rt(e);
}
H(RS, "IsNonMutableValue");
function C9(e, t) {
  return pe(e) && ue(t) || ue(e) && pe(t);
}
H(C9, "IsMismatchedValue");
function CS(e, t) {
  if (RS(e) || RS(t)) throw new Ef("Only object and array types can be mutated at the root level");
  if (C9(e, t)) throw new Ef("Cannot assign due type mismatch of assignable values");
  ay(e, "", e, t);
}
H(CS, "Mutate");
a();
var M9 = [(e, t, r) => Re(r), (e, t, r) => $f(e, t, r), (e, t, r) => gf(e, t, r), (e, t, r) => xf(e, t, r), (e, t, r) => (yf(e, t, r), r), (e, t, r) => xn(e, t) ? qi(e, t, r) : r];
function MS(e, t, r) {
  return M9.reduce((n, i) => i(e, t, n), r);
}
H(MS, "ParseValue");
function LS(...e) {
  return e.length === 3 ? MS(e[0], e[1], e[2]) : MS(e[0], [], e[1]);
}
H(LS, "Parse");
a();
var Vn = {};
M(Vn, { Assert: () => yf, Cast: () => Jm, Check: () => he, Clean: () => gf, Clone: () => Re, Convert: () => xf, Create: () => Nr, Decode: () => SS, Default: () => $f, Diff: () => kS, Edit: () => vS, Encode: () => NS, Equal: () => qo, Errors: () => mn, Hash: () => yo, Mutate: () => CS, Parse: () => LS, Patch: () => _S, ValueErrorIterator: () => _r });
a();
a();
var uy = class uy2 extends ne {
  constructor(r) {
    super("Unable to dereference schema with $id '".concat(r.$ref, "'"));
    O(this, "schema");
    this.schema = r;
  }
};
H(uy, "TypeDereferenceError");
var fy = uy;
function L9(e, t) {
  let r = t.find((n) => n.$id === e.$ref);
  if (r === void 0) throw new fy(e);
  return Ko(r, t);
}
H(L9, "Resolve");
function Tf(e, t) {
  return !Pe.IsString(e.$id) || t.some((r) => r.$id === e.$id) || t.push(e), t;
}
H(Tf, "Pushref");
function Ko(e, t) {
  return e[E] === "This" || e[E] === "Ref" ? L9(e, t) : e;
}
H(Ko, "Deref");
a();
function U9(e, t, r) {
  let n = e.get(t);
  if (n !== void 0) return n;
  let i = xn(t, r);
  return e.set(t, i), i;
}
H(U9, "HasTransformCached");
function vf() {
  let e = /* @__PURE__ */ new WeakMap();
  return { HasTransform: H((t, r) => U9(e, t, r), "HasTransform") };
}
H(vf, "CreateTransformCache");
function dt(e, t, r) {
  try {
    return x.IsTransform(e) ? e[st].Decode(r) : r;
  } catch (n) {
    throw new Uo(e, t, r, n);
  }
}
H(dt, "Default");
function D9(e, t, r, n, i) {
  return Pe.IsArray(n) ? dt(e, r, n.map((s, a4) => bn(e.items, t, "".concat(r, "/").concat(a4), s, i))) : dt(e, r, n);
}
H(D9, "FromArray");
function q9(e, t, r, n, i) {
  if (!Pe.IsObject(n) || Rt(n)) return dt(e, r, n);
  let s = po(e), a4 = s.map((m4) => m4[0]), f = F({}, n);
  for (let [m4, g] of s) m4 in f && (f[m4] = bn(g, t, "".concat(r, "/").concat(m4), f[m4], i));
  if (!x.IsTransform(e.unevaluatedProperties)) return dt(e, r, f);
  let p = Object.getOwnPropertyNames(f), d = e.unevaluatedProperties, l = F({}, f);
  for (let m4 of p) a4.includes(m4) || (l[m4] = dt(d, "".concat(r, "/").concat(m4), l[m4]));
  return dt(e, r, l);
}
H(q9, "FromIntersect");
function K9(e, t, r, n, i) {
  return dt(e, r, bn(e.not, t, r, n, i));
}
H(K9, "FromNot");
function z9(e, t, r, n, i) {
  if (!Pe.IsObject(n)) return dt(e, r, n);
  let s = At(e), a4 = F({}, n);
  for (let l of s) Pe.HasPropertyKey(a4, l) && (Pe.IsUndefined(a4[l]) && (!x.IsUndefined(e.properties[l]) || ze.IsExactOptionalProperty(a4, l)) || (a4[l] = bn(e.properties[l], t, "".concat(r, "/").concat(l), a4[l], i)));
  if (!x.IsSchema(e.additionalProperties)) return dt(e, r, a4);
  let f = Object.getOwnPropertyNames(a4), p = e.additionalProperties, d = F({}, a4);
  for (let l of f) s.includes(l) || (d[l] = dt(p, "".concat(r, "/").concat(l), d[l]));
  return dt(e, r, d);
}
H(z9, "FromObject");
function G9(e, t, r, n, i) {
  if (!Pe.IsObject(n)) return dt(e, r, n);
  let s = Object.getOwnPropertyNames(e.patternProperties)[0], a4 = new RegExp(s), f = F({}, n);
  for (let m4 of Object.getOwnPropertyNames(n)) a4.test(m4) && (f[m4] = bn(e.patternProperties[s], t, "".concat(r, "/").concat(m4), f[m4], i));
  if (!x.IsSchema(e.additionalProperties)) return dt(e, r, f);
  let p = Object.getOwnPropertyNames(f), d = e.additionalProperties, l = F({}, f);
  for (let m4 of p) a4.test(m4) || (l[m4] = dt(d, "".concat(r, "/").concat(m4), l[m4]));
  return dt(e, r, l);
}
H(G9, "FromRecord");
function B9(e, t, r, n, i) {
  let s = Ko(e, t);
  return dt(e, r, bn(s, t, r, n, i));
}
H(B9, "FromRef");
function V9(e, t, r, n, i) {
  let s = Ko(e, t);
  return dt(e, r, bn(s, t, r, n, i));
}
H(V9, "FromThis");
function W9(e, t, r, n, i) {
  return Pe.IsArray(n) && Pe.IsArray(e.items) ? dt(e, r, e.items.map((s, a4) => bn(s, t, "".concat(r, "/").concat(a4), n[a4], i))) : dt(e, r, n);
}
H(W9, "FromTuple");
function H9(e, t, r, n, i) {
  for (let s of e.anyOf) {
    if (!Vn.Check(s, t, n)) continue;
    let a4 = bn(s, t, r, n, i);
    return dt(e, r, a4);
  }
  return dt(e, r, n);
}
H(H9, "FromUnion");
function bn(e, t, r, n, i) {
  if (!i.HasTransform(e, t)) return n;
  let s = Tf(e, t), a4 = e;
  switch (e[E]) {
    case "Array":
      return D9(a4, s, r, n, i);
    case "Intersect":
      return q9(a4, s, r, n, i);
    case "Not":
      return K9(a4, s, r, n, i);
    case "Object":
      return z9(a4, s, r, n, i);
    case "Record":
      return G9(a4, s, r, n, i);
    case "Ref":
      return B9(a4, s, r, n, i);
    case "Symbol":
      return dt(a4, r, n);
    case "This":
      return V9(a4, s, r, n, i);
    case "Tuple":
      return W9(a4, s, r, n, i);
    case "Union":
      return H9(a4, s, r, n, i);
    default:
      return dt(a4, r, n);
  }
}
H(bn, "Visit");
function US(e, t, r) {
  let n = vf();
  return bn(e, t, "", r, n);
}
H(US, "FastTransformDecode");
a();
function Zt(e, t, r) {
  try {
    return x.IsTransform(e) ? e[st].Encode(r) : r;
  } catch (n) {
    throw new Do(e, t, r, n);
  }
}
H(Zt, "Default");
function Z9(e, t, r, n, i) {
  let s = Zt(e, r, n);
  return Pe.IsArray(s) ? s.map((a4, f) => $n(e.items, t, "".concat(r, "/").concat(f), a4, i)) : s;
}
H(Z9, "FromArray");
function J9(e, t, r, n, i) {
  let s = Zt(e, r, n);
  if (!Pe.IsObject(n) || Rt(n)) return s;
  let a4 = po(e), f = a4.map((g) => g[0]), p = F({}, s);
  for (let [g, b] of a4) g in p && (p[g] = $n(b, t, "".concat(r, "/").concat(g), p[g], i));
  if (!x.IsTransform(e.unevaluatedProperties)) return p;
  let d = Object.getOwnPropertyNames(p), l = e.unevaluatedProperties, m4 = F({}, p);
  for (let g of d) f.includes(g) || (m4[g] = Zt(l, "".concat(r, "/").concat(g), m4[g]));
  return m4;
}
H(J9, "FromIntersect");
function Y9(e, t, r, n) {
  return Zt(e.not, r, Zt(e, r, n));
}
H(Y9, "FromNot");
function X9(e, t, r, n, i) {
  let s = Zt(e, r, n);
  if (!Pe.IsObject(s)) return s;
  let a4 = At(e), f = F({}, s);
  for (let m4 of a4) Pe.HasPropertyKey(f, m4) && (Pe.IsUndefined(f[m4]) && (!x.IsUndefined(e.properties[m4]) || ze.IsExactOptionalProperty(f, m4)) || (f[m4] = $n(e.properties[m4], t, "".concat(r, "/").concat(m4), f[m4], i)));
  if (!x.IsSchema(e.additionalProperties)) return f;
  let p = Object.getOwnPropertyNames(f), d = e.additionalProperties, l = F({}, f);
  for (let m4 of p) a4.includes(m4) || (l[m4] = Zt(d, "".concat(r, "/").concat(m4), l[m4]));
  return l;
}
H(X9, "FromObject");
function Q9(e, t, r, n, i) {
  let s = Zt(e, r, n);
  if (!Pe.IsObject(n)) return s;
  let a4 = Object.getOwnPropertyNames(e.patternProperties)[0], f = new RegExp(a4), p = F({}, s);
  for (let g of Object.getOwnPropertyNames(n)) f.test(g) && (p[g] = $n(e.patternProperties[a4], t, "".concat(r, "/").concat(g), p[g], i));
  if (!x.IsSchema(e.additionalProperties)) return p;
  let d = Object.getOwnPropertyNames(p), l = e.additionalProperties, m4 = F({}, p);
  for (let g of d) f.test(g) || (m4[g] = Zt(l, "".concat(r, "/").concat(g), m4[g]));
  return m4;
}
H(Q9, "FromRecord");
function eK(e, t, r, n, i) {
  let s = Ko(e, t), a4 = $n(s, t, r, n, i);
  return Zt(e, r, a4);
}
H(eK, "FromRef");
function tK(e, t, r, n, i) {
  let s = Ko(e, t), a4 = $n(s, t, r, n, i);
  return Zt(e, r, a4);
}
H(tK, "FromThis");
function rK(e, t, r, n, i) {
  let s = Zt(e, r, n);
  return Pe.IsArray(e.items) ? e.items.map((a4, f) => $n(a4, t, "".concat(r, "/").concat(f), s[f], i)) : [];
}
H(rK, "FromTuple");
function nK(e, t, r, n, i) {
  for (let s of e.anyOf) {
    if (!Vn.Check(s, t, n)) continue;
    let a4 = $n(s, t, r, n, i);
    return Zt(e, r, a4);
  }
  for (let s of e.anyOf) {
    let a4 = $n(s, t, r, n, i);
    if (Vn.Check(e, t, a4)) return Zt(e, r, a4);
  }
  return Zt(e, r, n);
}
H(nK, "FromUnion");
function $n(e, t, r, n, i) {
  if (!i.HasTransform(e, t)) return n;
  let s = Tf(e, t), a4 = e;
  switch (e[E]) {
    case "Array":
      return Z9(a4, s, r, n, i);
    case "Intersect":
      return J9(a4, s, r, n, i);
    case "Not":
      return Y9(a4, s, r, n);
    case "Object":
      return X9(a4, s, r, n, i);
    case "Record":
      return Q9(a4, s, r, n, i);
    case "Ref":
      return eK(a4, s, r, n, i);
    case "This":
      return tK(a4, s, r, n, i);
    case "Tuple":
      return rK(a4, s, r, n, i);
    case "Union":
      return nK(a4, s, r, n, i);
    default:
      return Zt(a4, r, n);
  }
}
H($n, "Visit");
function DS(e, t, r) {
  let n = vf();
  return $n(e, t, "", r, n);
}
H(DS, "FastTransformEncode");
a();
var yy = class yy2 {
  constructor(t, r, n, i) {
    this.schema = t, this.references = r, this.checkFunc = n, this.code = i, this.hasTransform = xn(t, r);
  }
  Code() {
    return this.code;
  }
  Errors(t) {
    return mn(this.schema, this.references, t);
  }
  Check(t) {
    return this.checkFunc(t);
  }
  Decode(t) {
    if (!this.checkFunc(t)) throw new Di(this.schema, t, this.Errors(t).First());
    return this.hasTransform ? qi(this.schema, this.references, t) : t;
  }
  Encode(t) {
    let r = this.hasTransform ? bf(this.schema, this.references, t) : t;
    if (!this.checkFunc(r)) throw new Ki(this.schema, t, this.Errors(t).First());
    return r;
  }
};
H(yy, "TypeCheck");
var py = yy, Wn;
(function(e) {
  function t(s) {
    return s === 36;
  }
  H(t, "DollarSign"), e.DollarSign = t;
  function r(s) {
    return s === 95;
  }
  H(r, "IsUnderscore"), e.IsUnderscore = r;
  function n(s) {
    return s >= 65 && s <= 90 || s >= 97 && s <= 122;
  }
  H(n, "IsAlpha"), e.IsAlpha = n;
  function i(s) {
    return s >= 48 && s <= 57;
  }
  H(i, "IsNumeric"), e.IsNumeric = i;
})(Wn || (Wn = {}));
var Af;
(function(e) {
  function t(s) {
    return s.length === 0 ? false : Wn.IsNumeric(s.charCodeAt(0));
  }
  H(t, "IsFirstCharacterNumeric");
  function r(s) {
    if (t(s)) return false;
    for (let a4 = 0; a4 < s.length; a4++) {
      let f = s.charCodeAt(a4);
      if (!(Wn.IsAlpha(f) || Wn.IsNumeric(f) || Wn.DollarSign(f) || Wn.IsUnderscore(f))) return false;
    }
    return true;
  }
  H(r, "IsAccessor");
  function n(s) {
    return s.replace(/'/g, "\\'");
  }
  H(n, "EscapeHyphen");
  function i(s, a4) {
    return r(a4) ? "".concat(s, ".").concat(a4) : "".concat(s, "['").concat(n(a4), "']");
  }
  H(i, "Encode"), e.Encode = i;
})(Af || (Af = {}));
var ly;
(function(e) {
  function t(r) {
    let n = [];
    for (let i = 0; i < r.length; i++) {
      let s = r.charCodeAt(i);
      Wn.IsNumeric(s) || Wn.IsAlpha(s) ? n.push(r.charAt(i)) : n.push("_".concat(s, "_"));
    }
    return n.join("").replace(/__/g, "_");
  }
  H(t, "Encode"), e.Encode = t;
})(ly || (ly = {}));
var dy;
(function(e) {
  function t(r) {
    return r.replace(/'/g, "\\'");
  }
  H(t, "Escape"), e.Escape = t;
})(dy || (dy = {}));
var hy = class hy2 extends ne {
  constructor(t) {
    super("Unknown type"), this.schema = t;
  }
};
H(hy, "TypeCompilerUnknownTypeError");
var my = hy, gy = class gy2 extends ne {
  constructor(t) {
    super("Preflight validation check failed to guard for the given schema"), this.schema = t;
  }
};
H(gy, "TypeCompilerTypeGuardError");
var jf = gy, zo;
(function(e) {
  function t(a4, f, p) {
    return ze.ExactOptionalPropertyTypes ? "('".concat(f, "' in ").concat(a4, " ? ").concat(p, " : true)") : "(".concat(Af.Encode(a4, f), " !== undefined ? ").concat(p, " : true)");
  }
  H(t, "IsExactOptionalProperty"), e.IsExactOptionalProperty = t;
  function r(a4) {
    return ze.AllowArrayObject ? "(typeof ".concat(a4, " === 'object' && ").concat(a4, " !== null)") : "(typeof ".concat(a4, " === 'object' && ").concat(a4, " !== null && !Array.isArray(").concat(a4, "))");
  }
  H(r, "IsObjectLike"), e.IsObjectLike = r;
  function n(a4) {
    return ze.AllowArrayObject ? "(typeof ".concat(a4, " === 'object' && ").concat(a4, " !== null && !(").concat(a4, " instanceof Date) && !(").concat(a4, " instanceof Uint8Array))") : "(typeof ".concat(a4, " === 'object' && ").concat(a4, " !== null && !Array.isArray(").concat(a4, ") && !(").concat(a4, " instanceof Date) && !(").concat(a4, " instanceof Uint8Array))");
  }
  H(n, "IsRecordLike"), e.IsRecordLike = n;
  function i(a4) {
    return ze.AllowNaN ? "typeof ".concat(a4, " === 'number'") : "Number.isFinite(".concat(a4, ")");
  }
  H(i, "IsNumberLike"), e.IsNumberLike = i;
  function s(a4) {
    return ze.AllowNullVoid ? "(".concat(a4, " === undefined || ").concat(a4, " === null)") : "".concat(a4, " === undefined");
  }
  H(s, "IsVoidLike"), e.IsVoidLike = s;
})(zo || (zo = {}));
var kf;
(function(e) {
  function t(I4) {
    return I4[E] === "Any" || I4[E] === "Unknown";
  }
  H(t, "IsAnyOrUnknown");
  function* r(I4, _, $) {
    yield "true";
  }
  H(r, "FromAny");
  function* n(I4, _, $) {
    yield "Array.isArray(".concat($, ")");
    let [K, L3] = [ht("value", "any"), ht("acc", "number")];
    re(I4.maxItems) && (yield "".concat($, ".length <= ").concat(I4.maxItems)), re(I4.minItems) && (yield "".concat($, ".length >= ").concat(I4.minItems));
    let q = xt(I4.items, _, "value");
    if (yield "".concat($, ".every((").concat(K, ") => ").concat(q, ")"), Fe(I4.contains) || re(I4.minContains) || re(I4.maxContains)) {
      let ie = Fe(I4.contains) ? I4.contains : Be(), Jt = xt(ie, _, "value"), Fn = re(I4.minContains) ? ["(count >= ".concat(I4.minContains, ")")] : [], Ur = re(I4.maxContains) ? ["(count <= ".concat(I4.maxContains, ")")] : [], tn = "const count = value.reduce((".concat(L3, ", ").concat(K, ") => ").concat(Jt, " ? acc + 1 : acc, 0)"), da = ["(count > 0)", ...Fn, ...Ur].join(" && ");
      yield "((".concat(K, ") => { ").concat(tn, "; return ").concat(da, "})(").concat($, ")");
    }
    if (I4.uniqueItems === true) {
      let Jt = "const set = new Set(); for(const element of value) { ".concat("const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true", " }");
      yield "((".concat(K, ") => { ").concat(Jt, " )(").concat($, ")");
    }
  }
  H(n, "FromArray");
  function* i(I4, _, $) {
    yield "(typeof value === 'object' && Symbol.asyncIterator in ".concat($, ")");
  }
  H(i, "FromAsyncIterator");
  function* s(I4, _, $) {
    yield "(typeof ".concat($, " === 'bigint')"), Nt(I4.exclusiveMaximum) && (yield "".concat($, " < BigInt(").concat(I4.exclusiveMaximum, ")")), Nt(I4.exclusiveMinimum) && (yield "".concat($, " > BigInt(").concat(I4.exclusiveMinimum, ")")), Nt(I4.maximum) && (yield "".concat($, " <= BigInt(").concat(I4.maximum, ")")), Nt(I4.minimum) && (yield "".concat($, " >= BigInt(").concat(I4.minimum, ")")), Nt(I4.multipleOf) && (yield "(".concat($, " % BigInt(").concat(I4.multipleOf, ")) === 0"));
  }
  H(s, "FromBigInt");
  function* a4(I4, _, $) {
    yield "(typeof ".concat($, " === 'boolean')");
  }
  H(a4, "FromBoolean");
  function* f(I4, _, $) {
    yield* V(ft(I4.returns, _, "".concat($, ".prototype")));
  }
  H(f, "FromConstructor");
  function* p(I4, _, $) {
    yield "(".concat($, " instanceof Date) && Number.isFinite(").concat($, ".getTime())"), re(I4.exclusiveMaximumTimestamp) && (yield "".concat($, ".getTime() < ").concat(I4.exclusiveMaximumTimestamp)), re(I4.exclusiveMinimumTimestamp) && (yield "".concat($, ".getTime() > ").concat(I4.exclusiveMinimumTimestamp)), re(I4.maximumTimestamp) && (yield "".concat($, ".getTime() <= ").concat(I4.maximumTimestamp)), re(I4.minimumTimestamp) && (yield "".concat($, ".getTime() >= ").concat(I4.minimumTimestamp)), re(I4.multipleOfTimestamp) && (yield "(".concat($, ".getTime() % ").concat(I4.multipleOfTimestamp, ") === 0"));
  }
  H(p, "FromDate");
  function* d(I4, _, $) {
    yield "(typeof ".concat($, " === 'function')");
  }
  H(d, "FromFunction");
  function* l(I4, _, $) {
    yield "Number.isInteger(".concat($, ")"), re(I4.exclusiveMaximum) && (yield "".concat($, " < ").concat(I4.exclusiveMaximum)), re(I4.exclusiveMinimum) && (yield "".concat($, " > ").concat(I4.exclusiveMinimum)), re(I4.maximum) && (yield "".concat($, " <= ").concat(I4.maximum)), re(I4.minimum) && (yield "".concat($, " >= ").concat(I4.minimum)), re(I4.multipleOf) && (yield "(".concat($, " % ").concat(I4.multipleOf, ") === 0"));
  }
  H(l, "FromInteger");
  function* m4(I4, _, $) {
    let K = I4.allOf.map((L3) => xt(L3, _, $)).join(" && ");
    if (I4.unevaluatedProperties === false) {
      let L3 = Ft("".concat(new RegExp(Dn(I4)), ";")), q = "Object.getOwnPropertyNames(".concat($, ").every(key => ").concat(L3, ".test(key))");
      yield "(".concat(K, " && ").concat(q, ")");
    } else if (Fe(I4.unevaluatedProperties)) {
      let L3 = Ft("".concat(new RegExp(Dn(I4)), ";")), q = "Object.getOwnPropertyNames(".concat($, ").every(key => ").concat(L3, ".test(key) || ").concat(xt(I4.unevaluatedProperties, _, "".concat($, "[key]")), ")");
      yield "(".concat(K, " && ").concat(q, ")");
    } else yield "(".concat(K, ")");
  }
  H(m4, "FromIntersect");
  function* g(I4, _, $) {
    yield "(typeof value === 'object' && Symbol.iterator in ".concat($, ")");
  }
  H(g, "FromIterator");
  function* b(I4, _, $) {
    typeof I4.const == "number" || typeof I4.const == "boolean" ? yield "(".concat($, " === ").concat(I4.const, ")") : yield "(".concat($, " === '").concat(dy.Escape(I4.const), "')");
  }
  H(b, "FromLiteral");
  function* P4(I4, _, $) {
    yield "false";
  }
  H(P4, "FromNever");
  function* F4(I4, _, $) {
    let K = xt(I4.not, _, $);
    yield "(!".concat(K, ")");
  }
  H(F4, "FromNot");
  function* w(I4, _, $) {
    yield "(".concat($, " === null)");
  }
  H(w, "FromNull");
  function* O4(I4, _, $) {
    yield zo.IsNumberLike($), re(I4.exclusiveMaximum) && (yield "".concat($, " < ").concat(I4.exclusiveMaximum)), re(I4.exclusiveMinimum) && (yield "".concat($, " > ").concat(I4.exclusiveMinimum)), re(I4.maximum) && (yield "".concat($, " <= ").concat(I4.maximum)), re(I4.minimum) && (yield "".concat($, " >= ").concat(I4.minimum)), re(I4.multipleOf) && (yield "(".concat($, " % ").concat(I4.multipleOf, ") === 0"));
  }
  H(O4, "FromNumber");
  function* N4(I4, _, $) {
    yield zo.IsObjectLike($), re(I4.minProperties) && (yield "Object.getOwnPropertyNames(".concat($, ").length >= ").concat(I4.minProperties)), re(I4.maxProperties) && (yield "Object.getOwnPropertyNames(".concat($, ").length <= ").concat(I4.maxProperties));
    let K = Object.getOwnPropertyNames(I4.properties);
    for (let L3 of K) {
      let q = Af.Encode($, L3), ie = I4.properties[L3];
      if (I4.required && I4.required.includes(L3)) yield* V(ft(ie, _, q)), (Kn(ie) || t(ie)) && (yield "('".concat(L3, "' in ").concat($, ")"));
      else {
        let Jt = xt(ie, _, q);
        yield zo.IsExactOptionalProperty($, L3, Jt);
      }
    }
    if (I4.additionalProperties === false) if (I4.required && I4.required.length === K.length) yield "Object.getOwnPropertyNames(".concat($, ").length === ").concat(K.length);
    else {
      let L3 = "[".concat(K.map((q) => "'".concat(q, "'")).join(", "), "]");
      yield "Object.getOwnPropertyNames(".concat($, ").every(key => ").concat(L3, ".includes(key))");
    }
    if (typeof I4.additionalProperties == "object") {
      let L3 = xt(I4.additionalProperties, _, "".concat($, "[key]")), q = "[".concat(K.map((ie) => "'".concat(ie, "'")).join(", "), "]");
      yield "(Object.getOwnPropertyNames(".concat($, ").every(key => ").concat(q, ".includes(key) || ").concat(L3, "))");
    }
  }
  H(N4, "FromObject");
  function* A(I4, _, $) {
    yield "(typeof value === 'object' && typeof ".concat($, ".then === 'function')");
  }
  H(A, "FromPromise");
  function* k(I4, _, $) {
    yield zo.IsRecordLike($), re(I4.minProperties) && (yield "Object.getOwnPropertyNames(".concat($, ").length >= ").concat(I4.minProperties)), re(I4.maxProperties) && (yield "Object.getOwnPropertyNames(".concat($, ").length <= ").concat(I4.maxProperties));
    let [K, L3] = Object.entries(I4.patternProperties)[0], q = Ft("".concat(new RegExp(K))), ie = xt(L3, _, "value"), Jt = Fe(I4.additionalProperties) ? xt(I4.additionalProperties, _, $) : I4.additionalProperties === false ? "false" : "true", Fn = "(".concat(q, ".test(key) ? ").concat(ie, " : ").concat(Jt, ")");
    yield "(Object.entries(".concat($, ").every(([key, value]) => ").concat(Fn, "))");
  }
  H(k, "FromRecord");
  function* R3(I4, _, $) {
    let K = Ne(I4, _);
    if (xe.functions.has(I4.$ref)) return yield "".concat(bt(I4.$ref), "(").concat($, ")");
    yield* V(ft(K, _, $));
  }
  H(R3, "FromRef");
  function* V$1(I4, _, $) {
    let K = Ft("".concat(new RegExp(I4.source, I4.flags), ";"));
    yield "(typeof ".concat($, " === 'string')"), re(I4.maxLength) && (yield "".concat($, ".length <= ").concat(I4.maxLength)), re(I4.minLength) && (yield "".concat($, ".length >= ").concat(I4.minLength)), yield "".concat(K, ".test(").concat($, ")");
  }
  H(V$1, "FromRegExp");
  function* J4(I4, _, $) {
    if (yield "(typeof ".concat($, " === 'string')"), re(I4.maxLength) && (yield "".concat($, ".length <= ").concat(I4.maxLength)), re(I4.minLength) && (yield "".concat($, ".length >= ").concat(I4.minLength)), I4.pattern !== void 0) {
      let K = Ft("".concat(new RegExp(I4.pattern), ";"));
      yield "".concat(K, ".test(").concat($, ")");
    }
    I4.format !== void 0 && (yield "format('".concat(I4.format, "', ").concat($, ")"));
  }
  H(J4, "FromString");
  function* D(I4, _, $) {
    yield "(typeof ".concat($, " === 'symbol')");
  }
  H(D, "FromSymbol");
  function* U4(I4, _, $) {
    yield "(typeof ".concat($, " === 'string')");
    let K = Ft("".concat(new RegExp(I4.pattern), ";"));
    yield "".concat(K, ".test(").concat($, ")");
  }
  H(U4, "FromTemplateLiteral");
  function* ae(I4, _, $) {
    yield "".concat(bt(I4.$ref), "(").concat($, ")");
  }
  H(ae, "FromThis");
  function* se(I4, _, $) {
    if (yield "Array.isArray(".concat($, ")"), I4.items === void 0) return yield "".concat($, ".length === 0");
    yield "(".concat($, ".length === ").concat(I4.maxItems, ")");
    for (let K = 0; K < I4.items.length; K++) {
      let L3 = xt(I4.items[K], _, "".concat($, "[").concat(K, "]"));
      yield "".concat(L3);
    }
  }
  H(se, "FromTuple");
  function* M3(I4, _, $) {
    yield "".concat($, " === undefined");
  }
  H(M3, "FromUndefined");
  function* le(I4, _, $) {
    let K = I4.anyOf.map((L3) => xt(L3, _, $));
    yield "(".concat(K.join(" || "), ")");
  }
  H(le, "FromUnion");
  function* ce(I4, _, $) {
    yield "".concat($, " instanceof Uint8Array"), re(I4.maxByteLength) && (yield "(".concat($, ".length <= ").concat(I4.maxByteLength, ")")), re(I4.minByteLength) && (yield "(".concat($, ".length >= ").concat(I4.minByteLength, ")"));
  }
  H(ce, "FromUint8Array");
  function* Te(I4, _, $) {
    yield "true";
  }
  H(Te, "FromUnknown");
  function* Ie(I4, _, $) {
    yield zo.IsVoidLike($);
  }
  H(Ie, "FromVoid");
  function* Ke(I4, _, $) {
    let K = xe.instances.size;
    xe.instances.set(K, I4), yield "kind('".concat(I4[E], "', ").concat(K, ", ").concat($, ")");
  }
  H(Ke, "FromKind");
  function* ft(I4, _, $, K = true) {
    let L3 = Oe(I4.$id) ? [..._, I4] : _, q = I4;
    if (K && Oe(I4.$id)) {
      let ie = bt(I4.$id);
      if (xe.functions.has(ie)) return yield "".concat(ie, "(").concat($, ")");
      {
        let Jt = St(ie, I4, _, "value", false);
        return xe.functions.set(ie, Jt), yield "".concat(ie, "(").concat($, ")");
      }
    }
    switch (q[E]) {
      case "Any":
        return yield* V(r());
      case "Array":
        return yield* V(n(q, L3, $));
      case "AsyncIterator":
        return yield* V(i(q, L3, $));
      case "BigInt":
        return yield* V(s(q, L3, $));
      case "Boolean":
        return yield* V(a4(q, L3, $));
      case "Constructor":
        return yield* V(f(q, L3, $));
      case "Date":
        return yield* V(p(q, L3, $));
      case "Function":
        return yield* V(d(q, L3, $));
      case "Integer":
        return yield* V(l(q, L3, $));
      case "Intersect":
        return yield* V(m4(q, L3, $));
      case "Iterator":
        return yield* V(g(q, L3, $));
      case "Literal":
        return yield* V(b(q, L3, $));
      case "Never":
        return yield* V(P4());
      case "Not":
        return yield* V(F4(q, L3, $));
      case "Null":
        return yield* V(w(q, L3, $));
      case "Number":
        return yield* V(O4(q, L3, $));
      case "Object":
        return yield* V(N4(q, L3, $));
      case "Promise":
        return yield* V(A(q, L3, $));
      case "Record":
        return yield* V(k(q, L3, $));
      case "Ref":
        return yield* V(R3(q, L3, $));
      case "RegExp":
        return yield* V(V$1(q, L3, $));
      case "String":
        return yield* V(J4(q, L3, $));
      case "Symbol":
        return yield* V(D(q, L3, $));
      case "TemplateLiteral":
        return yield* V(U4(q, L3, $));
      case "This":
        return yield* V(ae(q, L3, $));
      case "Tuple":
        return yield* V(se(q, L3, $));
      case "Undefined":
        return yield* V(M3(q, L3, $));
      case "Union":
        return yield* V(le(q, L3, $));
      case "Uint8Array":
        return yield* V(ce(q, L3, $));
      case "Unknown":
        return yield* V(Te());
      case "Void":
        return yield* V(Ie(q, L3, $));
      default:
        if (!Tt.Has(q[E])) throw new my(I4);
        return yield* V(Ke(q, L3, $));
    }
  }
  H(ft, "Visit");
  let xe = { language: "javascript", functions: /* @__PURE__ */ new Map(), variables: /* @__PURE__ */ new Map(), instances: /* @__PURE__ */ new Map() };
  function xt(I4, _, $, K = true) {
    return "(".concat([...ft(I4, _, $, K)].join(" && "), ")");
  }
  H(xt, "CreateExpression");
  function bt(I4) {
    return "check_".concat(ly.Encode(I4));
  }
  H(bt, "CreateFunctionName");
  function Ft(I4) {
    let _ = "local_".concat(xe.variables.size);
    return xe.variables.set(_, "const ".concat(_, " = ").concat(I4)), _;
  }
  H(Ft, "CreateVariable");
  function St(I4, _, $, K, L3 = true) {
    let [q, ie] = ["\n", (tn) => "".padStart(tn, " ")], Jt = ht("value", "any"), Fn = X("boolean"), Ur = [...ft(_, $, K, L3)].map((tn) => "".concat(ie(4)).concat(tn)).join(" &&".concat(q));
    return "function ".concat(I4, "(").concat(Jt, ")").concat(Fn, " {").concat(q).concat(ie(2), "return (").concat(q).concat(Ur).concat(q).concat(ie(2), ")\n}");
  }
  H(St, "CreateFunction");
  function ht(I4, _) {
    let $ = xe.language === "typescript" ? ": ".concat(_) : "";
    return "".concat(I4).concat($);
  }
  H(ht, "CreateParameter");
  function X(I4) {
    return xe.language === "typescript" ? ": ".concat(I4) : "";
  }
  H(X, "CreateReturns");
  function ee(I4, _, $) {
    let K = St("check", I4, _, "value"), L3 = ht("value", "any"), q = X("boolean"), ie = [...xe.functions.values()], Jt = [...xe.variables.values()], Fn = Oe(I4.$id) ? "return function check(".concat(L3, ")").concat(q, " {\n  return ").concat(bt(I4.$id), "(value)\n}") : "return ".concat(K);
    return [...Jt, ...ie, Fn].join("\n");
  }
  H(ee, "Build");
  function Z(...I4) {
    let _ = { language: "javascript" }, [$, K, L3] = I4.length === 2 && ue(I4[1]) ? [I4[0], I4[1], _] : I4.length === 2 && !ue(I4[1]) ? [I4[0], [], I4[1]] : I4.length === 3 ? [I4[0], I4[1], I4[2]] : I4.length === 1 ? [I4[0], [], _] : [null, [], _];
    if (xe.language = L3.language, xe.variables.clear(), xe.functions.clear(), xe.instances.clear(), !Fe($)) throw new jf($);
    for (let q of K) if (!Fe(q)) throw new jf(q);
    return ee($, K);
  }
  H(Z, "Code"), e.Code = Z;
  function te(I4, _ = []) {
    let $ = Z(I4, _, { language: "javascript" }), K = globalThis.Function("kind", "format", "hash", $), L3 = new Map(xe.instances);
    function q(Ur, tn, da) {
      if (!Tt.Has(Ur) || !L3.has(tn)) return false;
      let E1 = Tt.Get(Ur), T1 = L3.get(tn);
      return E1(T1, da);
    }
    H(q, "typeRegistryFunction");
    function ie(Ur, tn) {
      return tr.Has(Ur) ? tr.Get(Ur)(tn) : false;
    }
    H(ie, "formatRegistryFunction");
    function Jt(Ur) {
      return yo(Ur);
    }
    H(Jt, "hashFunction");
    let Fn = K(q, ie, Jt);
    return new py(I4, _, Fn, $);
  }
  H(te, "Compile"), e.Compile = te;
})(kf || (kf = {}));
a();
a();
var qS = {}, oK = H(function(e, t, r, n, i) {
  var s = new Worker(qS[t] || (qS[t] = URL.createObjectURL(new Blob([e + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], { type: "text/javascript" }))));
  return s.onmessage = function(a4) {
    var f = a4.data, p = f.$e$;
    if (p) {
      var d = new Error(p[0]);
      d.code = p[1], d.stack = p[2], i(d, null);
    } else i(null, f);
  }, s.postMessage(r, n), s;
}, "wk"), rt = Uint8Array, nr = Uint16Array, ca = Int32Array, Vi = new rt([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), Wi = new rt([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), sa = new rt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), BS = H(function(e, t) {
  for (var r = new nr(31), n = 0; n < 31; ++n) r[n] = t += 1 << e[n - 1];
  for (var i = new ca(r[30]), n = 1; n < 30; ++n) for (var s = r[n]; s < r[n + 1]; ++s) i[s] = s - r[n] << 5 | n;
  return { b: r, r: i };
}, "freb"), VS = BS(Vi, 2), Oy = VS.b, Mf = VS.r;
Oy[28] = 258, Mf[258] = 28;
var WS = BS(Wi, 0), HS = WS.b, xy = WS.r, aa = new nr(32768);
for (qe = 0; qe < 32768; ++qe) Hn = (qe & 43690) >> 1 | (qe & 21845) << 1, Hn = (Hn & 52428) >> 2 | (Hn & 13107) << 2, Hn = (Hn & 61680) >> 4 | (Hn & 3855) << 4, aa[qe] = ((Hn & 65280) >> 8 | (Hn & 255) << 8) >> 1;
var Hn, qe, Mr = H(function(e, t, r) {
  for (var n = e.length, i = 0, s = new nr(t); i < n; ++i) e[i] && ++s[e[i] - 1];
  var a4 = new nr(t);
  for (i = 1; i < t; ++i) a4[i] = a4[i - 1] + s[i - 1] << 1;
  var f;
  if (r) {
    f = new nr(1 << t);
    var p = 15 - t;
    for (i = 0; i < n; ++i) if (e[i]) for (var d = i << 4 | e[i], l = t - e[i], m4 = a4[e[i] - 1]++ << l, g = m4 | (1 << l) - 1; m4 <= g; ++m4) f[aa[m4] >> p] = d;
  } else for (f = new nr(n), i = 0; i < n; ++i) e[i] && (f[i] = aa[a4[e[i] - 1]++] >> 15 - e[i]);
  return f;
}, "hMap"), Zn = new rt(288);
for (qe = 0; qe < 144; ++qe) Zn[qe] = 8;
var qe;
for (qe = 144; qe < 256; ++qe) Zn[qe] = 9;
var qe;
for (qe = 256; qe < 280; ++qe) Zn[qe] = 7;
var qe;
for (qe = 280; qe < 288; ++qe) Zn[qe] = 8;
var qe, Bi = new rt(32);
for (qe = 0; qe < 32; ++qe) Bi[qe] = 5;
var qe, ZS = Mr(Zn, 9, 0), JS = Mr(Zn, 9, 1), YS = Mr(Bi, 5, 0), XS = Mr(Bi, 5, 1), Nf = H(function(e) {
  for (var t = e[0], r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
  return t;
}, "max"), Cr = H(function(e, t, r) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8) >> (t & 7) & r;
}, "bits"), Rf = H(function(e, t) {
  var r = t / 8 | 0;
  return (e[r] | e[r + 1] << 8 | e[r + 2] << 16) >> (t & 7);
}, "bits16"), fa = H(function(e) {
  return (e + 7) / 8 | 0;
}, "shft"), Go = H(function(e, t, r) {
  return (t == null || t < 0) && (t = 0), (r == null || r > e.length) && (r = e.length), new rt(e.subarray(t, r));
}, "slc"), qf = { UnexpectedEOF: 0, InvalidBlockType: 1, InvalidLengthLiteral: 2, InvalidDistance: 3, StreamFinished: 4, NoStreamHandler: 5, InvalidHeader: 6, NoCallback: 7, InvalidUTF8: 8, ExtraFieldTooLong: 9, InvalidDate: 10, FilenameTooLong: 11, StreamFinishing: 12, InvalidZipData: 13, UnknownCompressionMethod: 14 }, QS = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], Ot = H(function(e, t, r) {
  var n = new Error(t || QS[e]);
  if (n.code = e, Error.captureStackTrace && Error.captureStackTrace(n, Ot), !r) throw n;
  return n;
}, "err"), eE = H(function(e, t, r, n) {
  var i = e.length, s = n ? n.length : 0;
  if (!i || t.f && !t.l) return r || new rt(0);
  var a4 = !r, f = a4 || t.i != 2, p = t.i;
  a4 && (r = new rt(i * 3));
  var d = H(function($) {
    var K = r.length;
    if ($ > K) {
      var L3 = new rt(Math.max(K * 2, $));
      L3.set(r), r = L3;
    }
  }, "cbuf"), l = t.f || 0, m4 = t.p || 0, g = t.b || 0, b = t.l, P4 = t.d, F4 = t.m, w = t.n, O4 = i * 8;
  do {
    if (!b) {
      l = Cr(e, m4, 1);
      var N4 = Cr(e, m4 + 1, 3);
      if (m4 += 3, N4) if (N4 == 1) b = JS, P4 = XS, F4 = 9, w = 5;
      else if (N4 == 2) {
        var V4 = Cr(e, m4, 31) + 257, J4 = Cr(e, m4 + 10, 15) + 4, D = V4 + Cr(e, m4 + 5, 31) + 1;
        m4 += 14;
        for (var U4 = new rt(D), ae = new rt(19), se = 0; se < J4; ++se) ae[sa[se]] = Cr(e, m4 + se * 3, 7);
        m4 += J4 * 3;
        for (var M3 = Nf(ae), le = (1 << M3) - 1, ce = Mr(ae, M3, 1), se = 0; se < D; ) {
          var Te = ce[Cr(e, m4, le)];
          m4 += Te & 15;
          var A = Te >> 4;
          if (A < 16) U4[se++] = A;
          else {
            var Ie = 0, Ke = 0;
            for (A == 16 ? (Ke = 3 + Cr(e, m4, 3), m4 += 2, Ie = U4[se - 1]) : A == 17 ? (Ke = 3 + Cr(e, m4, 7), m4 += 3) : A == 18 && (Ke = 11 + Cr(e, m4, 127), m4 += 7); Ke--; ) U4[se++] = Ie;
          }
        }
        var ft = U4.subarray(0, V4), xe = U4.subarray(V4);
        F4 = Nf(ft), w = Nf(xe), b = Mr(ft, F4, 1), P4 = Mr(xe, w, 1);
      } else Ot(1);
      else {
        var A = fa(m4) + 4, k = e[A - 4] | e[A - 3] << 8, R3 = A + k;
        if (R3 > i) {
          p && Ot(0);
          break;
        }
        f && d(g + k), r.set(e.subarray(A, R3), g), t.b = g += k, t.p = m4 = R3 * 8, t.f = l;
        continue;
      }
      if (m4 > O4) {
        p && Ot(0);
        break;
      }
    }
    f && d(g + 131072);
    for (var xt = (1 << F4) - 1, bt = (1 << w) - 1, Ft = m4; ; Ft = m4) {
      var Ie = b[Rf(e, m4) & xt], St = Ie >> 4;
      if (m4 += Ie & 15, m4 > O4) {
        p && Ot(0);
        break;
      }
      if (Ie || Ot(2), St < 256) r[g++] = St;
      else if (St == 256) {
        Ft = m4, b = null;
        break;
      } else {
        var ht = St - 254;
        if (St > 264) {
          var se = St - 257, X = Vi[se];
          ht = Cr(e, m4, (1 << X) - 1) + Oy[se], m4 += X;
        }
        var ee = P4[Rf(e, m4) & bt], Z = ee >> 4;
        ee || Ot(3), m4 += ee & 15;
        var xe = HS[Z];
        if (Z > 3) {
          var X = Wi[Z];
          xe += Rf(e, m4) & (1 << X) - 1, m4 += X;
        }
        if (m4 > O4) {
          p && Ot(0);
          break;
        }
        f && d(g + 131072);
        var te = g + ht;
        if (g < xe) {
          var I4 = s - xe, _ = Math.min(xe, te);
          for (I4 + g < 0 && Ot(3); g < _; ++g) r[g] = n[I4 + g];
        }
        for (; g < te; ++g) r[g] = r[g - xe];
      }
    }
    t.l = b, t.p = Ft, t.b = g, t.f = l, b && (l = 1, t.m = F4, t.d = P4, t.n = w);
  } while (!l);
  return g != r.length && a4 ? Go(r, 0, g) : r.subarray(0, g);
}, "inflt"), wn = H(function(e, t, r) {
  r <<= t & 7;
  var n = t / 8 | 0;
  e[n] |= r, e[n + 1] |= r >> 8;
}, "wbits"), zi = H(function(e, t, r) {
  r <<= t & 7;
  var n = t / 8 | 0;
  e[n] |= r, e[n + 1] |= r >> 8, e[n + 2] |= r >> 16;
}, "wbits16"), Cf = H(function(e, t) {
  for (var r = [], n = 0; n < e.length; ++n) e[n] && r.push({ s: n, f: e[n] });
  var i = r.length, s = r.slice();
  if (!i) return { t: Sy, l: 0 };
  if (i == 1) {
    var a4 = new rt(r[0].s + 1);
    return a4[r[0].s] = 1, { t: a4, l: 1 };
  }
  r.sort(function(R3, V4) {
    return R3.f - V4.f;
  }), r.push({ s: -1, f: 25001 });
  var f = r[0], p = r[1], d = 0, l = 1, m4 = 2;
  for (r[0] = { s: -1, f: f.f + p.f, l: f, r: p }; l != i - 1; ) f = r[r[d].f < r[m4].f ? d++ : m4++], p = r[d != l && r[d].f < r[m4].f ? d++ : m4++], r[l++] = { s: -1, f: f.f + p.f, l: f, r: p };
  for (var g = s[0].s, n = 1; n < i; ++n) s[n].s > g && (g = s[n].s);
  var b = new nr(g + 1), P4 = Lf(r[l - 1], b, 0);
  if (P4 > t) {
    var n = 0, F4 = 0, w = P4 - t, O4 = 1 << w;
    for (s.sort(function(V4, J4) {
      return b[J4.s] - b[V4.s] || V4.f - J4.f;
    }); n < i; ++n) {
      var N4 = s[n].s;
      if (b[N4] > t) F4 += O4 - (1 << P4 - b[N4]), b[N4] = t;
      else break;
    }
    for (F4 >>= w; F4 > 0; ) {
      var A = s[n].s;
      b[A] < t ? F4 -= 1 << t - b[A]++ - 1 : ++n;
    }
    for (; n >= 0 && F4; --n) {
      var k = s[n].s;
      b[k] == t && (--b[k], ++F4);
    }
    P4 = t;
  }
  return { t: new rt(b), l: P4 };
}, "hTree"), Lf = H(function(e, t, r) {
  return e.s == -1 ? Math.max(Lf(e.l, t, r + 1), Lf(e.r, t, r + 1)) : t[e.s] = r;
}, "ln"), by = H(function(e) {
  for (var t = e.length; t && !e[--t]; ) ;
  for (var r = new nr(++t), n = 0, i = e[0], s = 1, a4 = H(function(p) {
    r[n++] = p;
  }, "w"), f = 1; f <= t; ++f) if (e[f] == i && f != t) ++s;
  else {
    if (!i && s > 2) {
      for (; s > 138; s -= 138) a4(32754);
      s > 2 && (a4(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0);
    } else if (s > 3) {
      for (a4(i), --s; s > 6; s -= 6) a4(8304);
      s > 2 && (a4(s - 3 << 5 | 8208), s = 0);
    }
    for (; s--; ) a4(i);
    s = 1, i = e[f];
  }
  return { c: r.subarray(0, n), n: t };
}, "lc"), Gi = H(function(e, t) {
  for (var r = 0, n = 0; n < t.length; ++n) r += e[n] * t[n];
  return r;
}, "clen"), Fy = H(function(e, t, r) {
  var n = r.length, i = fa(t + 2);
  e[i] = n & 255, e[i + 1] = n >> 8, e[i + 2] = e[i] ^ 255, e[i + 3] = e[i + 1] ^ 255;
  for (var s = 0; s < n; ++s) e[i + s + 4] = r[s];
  return (i + 4 + n) * 8;
}, "wfblk"), $y = H(function(e, t, r, n, i, s, a4, f, p, d, l) {
  wn(t, l++, r), ++i[256];
  for (var m4 = Cf(i, 15), g = m4.t, b = m4.l, P4 = Cf(s, 15), F4 = P4.t, w = P4.l, O4 = by(g), N4 = O4.c, A = O4.n, k = by(F4), R3 = k.c, V4 = k.n, J4 = new nr(19), D = 0; D < N4.length; ++D) ++J4[N4[D] & 31];
  for (var D = 0; D < R3.length; ++D) ++J4[R3[D] & 31];
  for (var U4 = Cf(J4, 7), ae = U4.t, se = U4.l, M3 = 19; M3 > 4 && !ae[sa[M3 - 1]]; --M3) ;
  var le = d + 5 << 3, ce = Gi(i, Zn) + Gi(s, Bi) + a4, Te = Gi(i, g) + Gi(s, F4) + a4 + 14 + 3 * M3 + Gi(J4, ae) + 2 * J4[16] + 3 * J4[17] + 7 * J4[18];
  if (p >= 0 && le <= ce && le <= Te) return Fy(t, l, e.subarray(p, p + d));
  var Ie, Ke, ft, xe;
  if (wn(t, l, 1 + (Te < ce)), l += 2, Te < ce) {
    Ie = Mr(g, b, 0), Ke = g, ft = Mr(F4, w, 0), xe = F4;
    var xt = Mr(ae, se, 0);
    wn(t, l, A - 257), wn(t, l + 5, V4 - 1), wn(t, l + 10, M3 - 4), l += 14;
    for (var D = 0; D < M3; ++D) wn(t, l + 3 * D, ae[sa[D]]);
    l += 3 * M3;
    for (var bt = [N4, R3], Ft = 0; Ft < 2; ++Ft) for (var St = bt[Ft], D = 0; D < St.length; ++D) {
      var ht = St[D] & 31;
      wn(t, l, xt[ht]), l += ae[ht], ht > 15 && (wn(t, l, St[D] >> 5 & 127), l += St[D] >> 12);
    }
  } else Ie = ZS, Ke = Zn, ft = YS, xe = Bi;
  for (var D = 0; D < f; ++D) {
    var X = n[D];
    if (X > 255) {
      var ht = X >> 18 & 31;
      zi(t, l, Ie[ht + 257]), l += Ke[ht + 257], ht > 7 && (wn(t, l, X >> 23 & 31), l += Vi[ht]);
      var ee = X & 31;
      zi(t, l, ft[ee]), l += xe[ee], ee > 3 && (zi(t, l, X >> 5 & 8191), l += Wi[ee]);
    } else zi(t, l, Ie[X]), l += Ke[X];
  }
  return zi(t, l, Ie[256]), l + Ke[256];
}, "wblk"), tE = new ca([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Sy = new rt(0), rE = H(function(e, t, r, n, i, s) {
  var a4 = s.z || e.length, f = new rt(n + a4 + 5 * (1 + Math.ceil(a4 / 7e3)) + i), p = f.subarray(n, f.length - i), d = s.l, l = (s.r || 0) & 7;
  if (t) {
    l && (p[0] = s.r >> 3);
    for (var m4 = tE[t - 1], g = m4 >> 13, b = m4 & 8191, P4 = (1 << r) - 1, F4 = s.p || new nr(32768), w = s.h || new nr(P4 + 1), O4 = Math.ceil(r / 3), N4 = 2 * O4, A = H(function(q) {
      return (e[q] ^ e[q + 1] << O4 ^ e[q + 2] << N4) & P4;
    }, "hsh"), k = new ca(25e3), R3 = new nr(288), V4 = new nr(32), J4 = 0, D = 0, U4 = s.i || 0, ae = 0, se = s.w || 0, M3 = 0; U4 + 2 < a4; ++U4) {
      var le = A(U4), ce = U4 & 32767, Te = w[le];
      if (F4[ce] = Te, w[le] = ce, se <= U4) {
        var Ie = a4 - U4;
        if ((J4 > 7e3 || ae > 24576) && (Ie > 423 || !d)) {
          l = $y(e, p, 0, k, R3, V4, D, ae, M3, U4 - M3, l), ae = J4 = D = 0, M3 = U4;
          for (var Ke = 0; Ke < 286; ++Ke) R3[Ke] = 0;
          for (var Ke = 0; Ke < 30; ++Ke) V4[Ke] = 0;
        }
        var ft = 2, xe = 0, xt = b, bt = ce - Te & 32767;
        if (Ie > 2 && le == A(U4 - bt)) for (var Ft = Math.min(g, Ie) - 1, St = Math.min(32767, U4), ht = Math.min(258, Ie); bt <= St && --xt && ce != Te; ) {
          if (e[U4 + ft] == e[U4 + ft - bt]) {
            for (var X = 0; X < ht && e[U4 + X] == e[U4 + X - bt]; ++X) ;
            if (X > ft) {
              if (ft = X, xe = bt, X > Ft) break;
              for (var ee = Math.min(bt, X - 2), Z = 0, Ke = 0; Ke < ee; ++Ke) {
                var te = U4 - bt + Ke & 32767, I4 = F4[te], _ = te - I4 & 32767;
                _ > Z && (Z = _, Te = te);
              }
            }
          }
          ce = Te, Te = F4[ce], bt += ce - Te & 32767;
        }
        if (xe) {
          k[ae++] = 268435456 | Mf[ft] << 18 | xy[xe];
          var $ = Mf[ft] & 31, K = xy[xe] & 31;
          D += Vi[$] + Wi[K], ++R3[257 + $], ++V4[K], se = U4 + ft, ++J4;
        } else k[ae++] = e[U4], ++R3[e[U4]];
      }
    }
    for (U4 = Math.max(U4, se); U4 < a4; ++U4) k[ae++] = e[U4], ++R3[e[U4]];
    l = $y(e, p, d, k, R3, V4, D, ae, M3, U4 - M3, l), d || (s.r = l & 7 | p[l / 8 | 0] << 3, l -= 7, s.h = w, s.p = F4, s.i = U4, s.w = se);
  } else {
    for (var U4 = s.w || 0; U4 < a4 + d; U4 += 65535) {
      var L3 = U4 + 65535;
      L3 >= a4 && (p[l / 8 | 0] = d, L3 = a4), l = Fy(p, l + 1, e.subarray(U4, L3));
    }
    s.i = a4;
  }
  return Go(f, 0, n + fa(l) + i);
}, "dflt"), iK = (function() {
  for (var e = new Int32Array(256), t = 0; t < 256; ++t) {
    for (var r = t, n = 9; --n; ) r = (r & 1 && -306674912) ^ r >>> 1;
    e[t] = r;
  }
  return e;
})(), sK = H(function() {
  var e = -1;
  return { p: H(function(t) {
    for (var r = e, n = 0; n < t.length; ++n) r = iK[r & 255 ^ t[n]] ^ r >>> 8;
    e = r;
  }, "p"), d: H(function() {
    return ~e;
  }, "d") };
}, "crc");
var nE = H(function(e, t, r, n, i) {
  if (!i && (i = { l: 1 }, t.dictionary)) {
    var s = t.dictionary.subarray(-32768), a4 = new rt(s.length + e.length);
    a4.set(s), a4.set(e, s.length), e = a4, i.w = s.length;
  }
  return rE(e, t.level == null ? 6 : t.level, t.mem == null ? i.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + t.mem, r, n, i);
}, "dopt"), Ey = H(function(e, t) {
  var r = {};
  for (var n in e) r[n] = e[n];
  for (var n in t) r[n] = t[n];
  return r;
}, "mrg"), KS = H(function(e, t, r) {
  for (var n = e(), i = e.toString(), s = i.slice(i.indexOf("[") + 1, i.lastIndexOf("]")).replace(/\s+/g, "").split(","), a4 = 0; a4 < n.length; ++a4) {
    var f = n[a4], p = s[a4];
    if (typeof f == "function") {
      t += ";" + p + "=";
      var d = f.toString();
      if (f.prototype) if (d.indexOf("[native code]") != -1) {
        var l = d.indexOf(" ", 8) + 1;
        t += d.slice(l, d.indexOf("(", l));
      } else {
        t += d;
        for (var m4 in f.prototype) t += ";" + p + ".prototype." + m4 + "=" + f.prototype[m4].toString();
      }
      else t += d;
    } else r[p] = f;
  }
  return t;
}, "wcln"), _f = [], aK = H(function(e) {
  var t = [];
  for (var r in e) e[r].buffer && t.push((e[r] = new e[r].constructor(e[r])).buffer);
  return t;
}, "cbfs"), cK = H(function(e, t, r, n) {
  if (!_f[r]) {
    for (var i = "", s = {}, a4 = e.length - 1, f = 0; f < a4; ++f) i = KS(e[f], i, s);
    _f[r] = { c: KS(e[a4], i, s), e: s };
  }
  var p = Ey({}, _f[r].e);
  return oK(_f[r].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + t.toString() + "}", r, p, aK(p), n);
}, "wrkr"), fK = H(function() {
  return [rt, nr, ca, Vi, Wi, sa, Oy, HS, JS, XS, aa, QS, Mr, Nf, Cr, Rf, fa, Go, Ot, eE, vy, Kf, oE];
}, "bInflt"), uK = H(function() {
  return [rt, nr, ca, Vi, Wi, sa, Mf, xy, ZS, Zn, YS, Bi, aa, tE, Sy, Mr, wn, zi, Cf, Lf, by, Gi, Fy, $y, fa, Go, rE, nE, Ty, Kf];
}, "bDflt");
var Kf = H(function(e) {
  return postMessage(e, [e.buffer]);
}, "pbf"), oE = H(function(e) {
  return e && { out: e.size && new rt(e.size), dictionary: e.dictionary };
}, "gopt"), iE = H(function(e, t, r, n, i, s) {
  var a4 = cK(r, n, i, function(f, p) {
    a4.terminate(), s(f, p);
  });
  return a4.postMessage([e, t], t.consume ? [e.buffer] : []), function() {
    a4.terminate();
  };
}, "cbify");
var Pn = H(function(e, t) {
  return e[t] | e[t + 1] << 8;
}, "b2"), Xr = H(function(e, t) {
  return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
}, "b4"), Iy = H(function(e, t) {
  return Xr(e, t) + Xr(e, t + 4) * 4294967296;
}, "b8"), Ut = H(function(e, t, r) {
  for (; r; ++t) e[t] = r, r >>>= 8;
}, "wbytes");
function pK(e, t, r) {
  return r || (r = t, t = {}), typeof r != "function" && Ot(7), iE(e, t, [uK], function(n) {
    return Kf(Ty(n.data[0], n.data[1]));
  }, 0, r);
}
H(pK, "deflate");
function Ty(e, t) {
  return nE(e, t || {}, 0, 0);
}
H(Ty, "deflateSync");
function lK(e, t, r) {
  return r || (r = t, t = {}), typeof r != "function" && Ot(7), iE(e, t, [fK], function(n) {
    return Kf(vy(n.data[0], oE(n.data[1])));
  }, 1, r);
}
H(lK, "inflate");
function vy(e, t) {
  return eE(e, { i: 2 }, t && t.out, t && t.dictionary);
}
H(vy, "inflateSync");
var sE = H(function(e, t, r, n) {
  for (var i in e) {
    var s = e[i], a4 = t + i, f = n;
    Array.isArray(s) && (f = Ey(n, s[1]), s = s[0]), s instanceof rt ? r[a4] = [s, f] : (r[a4 += "/"] = [new rt(0), f], sE(s, a4, r, n));
  }
}, "fltn"), zS = typeof TextEncoder < "u" && new TextEncoder(), wy = typeof TextDecoder < "u" && new TextDecoder(), dK = 0;
try {
  wy.decode(Sy, { stream: true }), dK = 1;
} catch (e) {
}
var mK = H(function(e) {
  for (var t = "", r = 0; ; ) {
    var n = e[r++], i = (n > 127) + (n > 223) + (n > 239);
    if (r + i > e.length) return { s: t, r: Go(e, r - 1) };
    i ? i == 3 ? (n = ((n & 15) << 18 | (e[r++] & 63) << 12 | (e[r++] & 63) << 6 | e[r++] & 63) - 65536, t += String.fromCharCode(55296 | n >> 10, 56320 | n & 1023)) : i & 1 ? t += String.fromCharCode((n & 31) << 6 | e[r++] & 63) : t += String.fromCharCode((n & 15) << 12 | (e[r++] & 63) << 6 | e[r++] & 63) : t += String.fromCharCode(n);
  }
}, "dutf8");
function Uf(e, t) {
  if (t) {
    for (var r = new rt(e.length), n = 0; n < e.length; ++n) r[n] = e.charCodeAt(n);
    return r;
  }
  if (zS) return zS.encode(e);
  for (var i = e.length, s = new rt(e.length + (e.length >> 1)), a4 = 0, f = H(function(l) {
    s[a4++] = l;
  }, "w"), n = 0; n < i; ++n) {
    if (a4 + 5 > s.length) {
      var p = new rt(a4 + 8 + (i - n << 1));
      p.set(s), s = p;
    }
    var d = e.charCodeAt(n);
    d < 128 || t ? f(d) : d < 2048 ? (f(192 | d >> 6), f(128 | d & 63)) : d > 55295 && d < 57344 ? (d = 65536 + (d & 1047552) | e.charCodeAt(++n) & 1023, f(240 | d >> 18), f(128 | d >> 12 & 63), f(128 | d >> 6 & 63), f(128 | d & 63)) : (f(224 | d >> 12), f(128 | d >> 6 & 63), f(128 | d & 63));
  }
  return Go(s, 0, a4);
}
H(Uf, "strToU8");
function Ay(e, t) {
  if (t) {
    for (var r = "", n = 0; n < e.length; n += 16384) r += String.fromCharCode.apply(null, e.subarray(n, n + 16384));
    return r;
  } else {
    if (wy) return wy.decode(e);
    var i = mK(e), s = i.s, r = i.r;
    return r.length && Ot(8), s;
  }
}
H(Ay, "strFromU8");
var yK = H(function(e, t) {
  return t + 30 + Pn(e, t + 26) + Pn(e, t + 28);
}, "slzh"), hK = H(function(e, t, r) {
  var n = Pn(e, t + 28), i = Ay(e.subarray(t + 46, t + 46 + n), !(Pn(e, t + 8) & 2048)), s = t + 46 + n, a4 = Xr(e, t + 20), f = r && a4 == 4294967295 ? gK(e, s) : [a4, Xr(e, t + 24), Xr(e, t + 42)], p = f[0], d = f[1], l = f[2];
  return [Pn(e, t + 10), p, d, i, s + Pn(e, t + 30) + Pn(e, t + 32), l];
}, "zh"), gK = H(function(e, t) {
  for (; Pn(e, t) != 1; t += 4 + Pn(e, t + 2)) ;
  return [Iy(e, t + 12), Iy(e, t + 4), Iy(e, t + 20)];
}, "z64e"), Py = H(function(e) {
  var t = 0;
  if (e) for (var r in e) {
    var n = e[r].length;
    n > 65535 && Ot(9), t += n + 4;
  }
  return t;
}, "exfl"), GS = H(function(e, t, r, n, i, s, a4, f) {
  var p = n.length, d = r.extra, l = f && f.length, m4 = Py(d);
  Ut(e, t, a4 != null ? 33639248 : 67324752), t += 4, a4 != null && (e[t++] = 20, e[t++] = r.os), e[t] = 20, t += 2, e[t++] = r.flag << 1 | (s < 0 && 8), e[t++] = i && 8, e[t++] = r.compression & 255, e[t++] = r.compression >> 8;
  var g = new Date(r.mtime == null ? Date.now() : r.mtime), b = g.getFullYear() - 1980;
  if ((b < 0 || b > 119) && Ot(10), Ut(e, t, b << 25 | g.getMonth() + 1 << 21 | g.getDate() << 16 | g.getHours() << 11 | g.getMinutes() << 5 | g.getSeconds() >> 1), t += 4, s != -1 && (Ut(e, t, r.crc), Ut(e, t + 4, s < 0 ? -s - 2 : s), Ut(e, t + 8, r.size)), Ut(e, t + 12, p), Ut(e, t + 14, m4), t += 16, a4 != null && (Ut(e, t, l), Ut(e, t + 6, r.attrs), Ut(e, t + 10, a4), t += 14), e.set(n, t), t += p, m4) for (var P4 in d) {
    var F4 = d[P4], w = F4.length;
    Ut(e, t, +P4), Ut(e, t + 2, w), e.set(F4, t + 4), t += 4 + w;
  }
  return l && (e.set(f, t), t += l), t;
}, "wzh"), IK = H(function(e, t, r, n, i) {
  Ut(e, t, 101010256), Ut(e, t + 8, r), Ut(e, t + 10, r), Ut(e, t + 12, n), Ut(e, t + 16, i);
}, "wzf");
function aE(e, t, r) {
  r || (r = t, t = {}), typeof r != "function" && Ot(7);
  var n = {};
  sE(e, "", n, t);
  var i = Object.keys(n), s = i.length, a4 = 0, f = 0, p = s, d = new Array(s), l = [], m4 = H(function() {
    for (var w = 0; w < l.length; ++w) l[w]();
  }, "tAll"), g = H(function(w, O4) {
    Df(function() {
      r(w, O4);
    });
  }, "cbd");
  Df(function() {
    g = r;
  });
  var b = H(function() {
    var w = new rt(f + 22), O4 = a4, N4 = f - a4;
    f = 0;
    for (var A = 0; A < p; ++A) {
      var k = d[A];
      try {
        var R3 = k.c.length;
        GS(w, f, k, k.f, k.u, R3);
        var V4 = 30 + k.f.length + Py(k.extra), J4 = f + V4;
        w.set(k.c, J4), GS(w, a4, k, k.f, k.u, R3, f, k.m), a4 += 16 + V4 + (k.m ? k.m.length : 0), f = J4 + R3;
      } catch (D) {
        return g(D, null);
      }
    }
    IK(w, a4, d.length, N4, O4), g(null, w);
  }, "cbf");
  s || b();
  for (var P4 = H(function(w) {
    var O4 = i[w], N4 = n[O4], A = N4[0], k = N4[1], R3 = sK(), V4 = A.length;
    R3.p(A);
    var J4 = Uf(O4), D = J4.length, U4 = k.comment, ae = U4 && Uf(U4), se = ae && ae.length, M3 = Py(k.extra), le = k.level == 0 ? 0 : 8, ce = H(function(Te, Ie) {
      if (Te) m4(), g(Te, null);
      else {
        var Ke = Ie.length;
        d[w] = Ey(k, { size: V4, crc: R3.d(), c: Ie, f: J4, m: ae, u: D != O4.length || ae && U4.length != se, compression: le }), a4 += 30 + D + M3 + Ke, f += 76 + 2 * (D + M3) + (se || 0) + Ke, --s || b();
      }
    }, "cbl");
    if (D > 65535 && ce(Ot(11, 0, 1), null), !le) ce(null, A);
    else if (V4 < 16e4) try {
      ce(null, Ty(A, k));
    } catch (Te) {
      ce(Te, null);
    }
    else l.push(pK(A, k, ce));
  }, "_loop_1"), F4 = 0; F4 < p; ++F4) P4(F4);
  return m4;
}
H(aE, "zip");
var Df = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(e) {
  e();
};
function cE(e, t, r) {
  r || (r = t, t = {}), typeof r != "function" && Ot(7);
  var n = [], i = H(function() {
    for (var w = 0; w < n.length; ++w) n[w]();
  }, "tAll"), s = {}, a4 = H(function(w, O4) {
    Df(function() {
      r(w, O4);
    });
  }, "cbd");
  Df(function() {
    a4 = r;
  });
  for (var f = e.length - 22; Xr(e, f) != 101010256; --f) if (!f || e.length - f > 65558) return a4(Ot(13, 0, 1), null), i;
  var p = Pn(e, f + 8);
  if (p) {
    var d = p, l = Xr(e, f + 16), m4 = l == 4294967295 || d == 65535;
    if (m4) {
      var g = Xr(e, f - 12);
      m4 = Xr(e, g) == 101075792, m4 && (d = p = Xr(e, g + 32), l = Xr(e, g + 48));
    }
    for (var b = t && t.filter, P4 = H(function(w) {
      var O4 = hK(e, l, m4), N4 = O4[0], A = O4[1], k = O4[2], R3 = O4[3], V4 = O4[4], J4 = O4[5], D = yK(e, J4);
      l = V4;
      var U4 = H(function(se, M3) {
        se ? (i(), a4(se, null)) : (M3 && (s[R3] = M3), --p || a4(null, s));
      }, "cbl");
      if (!b || b({ name: R3, size: A, originalSize: k, compression: N4 })) if (!N4) U4(null, Go(e, D, D + A));
      else if (N4 == 8) {
        var ae = e.subarray(D, D + A);
        if (k < 524288 || A > 0.8 * k) try {
          U4(null, vy(ae, { out: new rt(k) }));
        } catch (se) {
          U4(se, null);
        }
        else n.push(lK(ae, { size: k }, U4));
      } else U4(Ot(14, "unknown compression type " + N4, 1), null);
      else U4(null, null);
    }, "_loop_3"), F4 = 0; F4 < d; ++F4) P4(F4);
  } else a4(null, {});
  return i;
}
H(cE, "unzip");
a();
var xK = H((e) => {
  if (e != null) return e.trim() === "" ? void 0 : e;
}, "maybePath"), bK = H((e) => e != null, "notNull"), zf = H((e, t, r = 0) => {
  var n;
  if (x.IsNull(e)) return "null";
  if (x.IsUndefined(e)) return "undefined";
  if (x.IsString(e)) return "<string>";
  if (x.IsNumber(e)) return "<number>";
  if (x.IsBoolean(e)) return "<boolean>";
  if (x.IsLiteral(e)) return typeof e.const == "string" ? "'".concat(e.const, "'") : "".concat(e.const);
  if (x.IsRef(e)) {
    let i = t.find((s) => s.$id === e.$ref);
    return i == null ? e.$ref : zf(i, t, r);
  }
  if (x.IsArray(e)) return "".concat(zf(e.items, t, r + 1), "[]");
  if (x.IsUnion(e) && (!(e.anyOf.length > 5) || e.$id == null)) {
    let s = "".concat(e.anyOf.map((a4) => zf(a4, t, r + 1)).filter(bK).join(" | "));
    return r > 0 ? "(".concat(s, ")") : s;
  }
  return (n = e.$id) != null ? n : "";
}, "resolveSchemaIdent"), $K = H((e, t, r) => {
  var s;
  let n = t.message;
  x.IsUnion(t.schema) && (n = "Expected one of: ".concat(zf(t.schema, r)));
  let i = "#/definitions/".concat(e).concat((s = xK(t.path)) != null ? s : "");
  return "".concat(i, ": ").concat(n);
}, "errorHandler"), Gf = H((e, t, r) => {
  let n = t.First();
  if (n != null) return $K(e, n, r);
}, "shortError");
var Hi;
(function(e) {
  e.Archive = "Archive", e.Validate = "Validate", e.Encode = "Encode", e.Unknown = "Unknown";
})(Hi || (Hi = {}));
var ky = class ky2 extends Error {
  constructor(r, n) {
    super(n);
    O(this, "name");
    O(this, "kind");
    this.name = "CompressError", this.kind = r;
  }
};
H(ky, "CompressError");
var Zi = ky, wK = H((e) => new Zi(Hi.Archive, e.message), "flateErrorIntoCompressError"), PK = H((e) => {
  let t = Object.values(qf);
  return e instanceof Error && "code" in e && typeof e.code == "number" && t.includes(e.code);
}, "isFlateError"), OK = H((e, t, r) => {
  var n;
  return new Zi(Hi.Validate, (n = Gf(e, t, r)) != null ? n : "Unknown validate error");
}, "checkErrorIntoCompressError"), FK = H((e) => new Zi(Hi.Encode, e.message), "encodeErrorIntoCompressError"), SK = H((e) => new Zi(Hi.Unknown, e instanceof Error ? e.message : String(e)), "unknownErrorIntoCompressError"), jy = H((e, t, r) => t instanceof Do ? FK(t) : t instanceof _r ? OK(e, t, r) : PK(t) ? wK(t) : SK(t), "intoCompressError");
a();
var Ji;
(function(e) {
  e.Unarchive = "Unarchive", e.Validate = "Validate", e.Decode = "Decode", e.Unknown = "Unknown";
})(Ji || (Ji = {}));
var Ny = class Ny2 extends Error {
  constructor(r, n) {
    super(n);
    O(this, "name");
    O(this, "kind");
    this.name = "DecompressError", this.kind = r;
  }
};
H(Ny, "DecompressError");
var Yi = Ny, EK = H((e) => new Yi(Ji.Unarchive, e.message), "flateErrorIntoDecompressError"), TK = H((e) => {
  let t = Object.values(qf);
  return e instanceof Error && "code" in e && typeof e.code == "number" && t.includes(e.code);
}, "isFlateError"), vK = H((e, t, r) => {
  var n;
  return new Yi(Ji.Validate, (n = Gf(e, t, r)) != null ? n : "Unknown validate error");
}, "checkErrorIntoDecompressError"), AK = H((e) => new Yi(Ji.Decode, e.message), "decodeErrorIntoDecompressError"), jK = H((e) => new Yi(Ji.Unknown, e instanceof Error ? e.message : String(e)), "unknownErrorIntoDecompressError"), _y = H((e, t, r) => t instanceof Uo ? AK(t) : t instanceof _r ? vK(e, t, r) : TK(t) ? EK(t) : jK(t), "intoDecompressError");
a();
a();
a();
var kK = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, _K = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], NK = H((e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), "isLeapYear"), Bf = H((e) => {
  let t = kK.exec(e);
  if (!t) return false;
  let r = +t[1], n = +t[2], i = +t[3];
  return n >= 1 && n <= 12 && i >= 1 && i <= (n === 2 && NK(r) ? 29 : _K[n]);
}, "date");
a();
var RK = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i, Vf = H((e) => {
  let t = RK.exec(e);
  if (!t) return false;
  let r = +t[1], n = +t[2], i = +t[3], s = t[4], a4 = t[5] === "-" ? -1 : 1, f = +(t[6] || 0), p = +(t[7] || 0);
  if (f > 23 || p > 59 || !s) return false;
  if (r <= 23 && n <= 59 && i < 60) return true;
  let d = n - p * a4, l = r - f * a4 - (d < 0 ? 1 : 0);
  return (l === 23 || l === -1) && (d === 59 || d === -1) && i < 61;
}, "time");
var CK = /t|\s/i, fE = H((e) => {
  let t = e.split(CK);
  return t.length === 2 && Bf(t[0]) && Vf(t[1]);
}, "dateTime");
a();
var MK = /\/|:/, LK = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, uE = H((e) => MK.test(e) && LK.test(e), "uri");
var UK = [["date", Bf], ["time", Vf], ["date-time", fE], ["uri", uE]], pE = H(() => {
  for (let [e, t] of UK) try {
    df.Format(e, t);
  } catch (r) {
    if (r instanceof ra) continue;
    throw r;
  }
}, "registerFormats");
a();
a();
a();
var lE = H((e) => e instanceof Error ? e : new Error(String(e)), "asError");
var Wf = H((e) => (...t) => {
  try {
    return B(e(...t));
  } catch (r) {
    return W(lE(r));
  }
}, "safeFn");
var DK = Wf((e, t) => {
  let r = {};
  for (let n of t) for (let i of n.intoBundle(e)) r[i.path] = Uf(JSON.stringify(i.contents));
  return r;
}), Ry = H(async (e, t, r) => DK(e, t).andThenAsync((n) => new Promise((i) => {
  aE(n, G(F({}, r), { consume: true }), (s, a4) => {
    i(s ? W(s) : B(a4));
  });
})), "compress");
a();
a();
function Hf(e, t, r = []) {
  let n = F({}, e);
  for (let [i, s] of Object.entries(t)) if (s !== void 0) if (i in n) {
    let a4 = i;
    if (Array.isArray(s) && s.length > 0) {
      let f = qK(s[0], r);
      if (f) {
        let p = n[a4];
        if (!Array.isArray(p)) throw new Error("Expected array at ".concat(i, ", got ").concat(typeof p));
        let d = new Map(s.map((g) => [dE(g, f), g])), m4 = p.map((g) => {
          let b = d.get(dE(g, f));
          return b ? Hf(g, b, r) : g;
        });
        n[a4] = m4;
      } else n[a4] = s;
    } else {
      let f = n[a4];
      typeof f == "object" && f !== null && typeof s == "object" && s !== null ? Object.keys(s).length === 0 ? n[a4] = s : n[a4] = Hf(f, s, r) : n[i] = s;
    }
  } else n[i] = s;
  return n;
}
H(Hf, "deepMergeOn");
function qK(e, t) {
  function r(n) {
    if (typeof n != "object" || n === null) return null;
    for (let i of t) if (i in n && typeof n[i] < "u") return [i];
    if (Array.isArray(n)) return null;
    for (let [i, s] of Object.entries(n)) {
      let a4 = r(s);
      if (a4) return [i, ...a4];
    }
    return null;
  }
  return H(r, "search"), r(e);
}
H(qK, "findIdentifierKey");
function dE(e, t) {
  return t.reduce((r, n) => {
    if (r && typeof r == "object") return r[n];
  }, e);
}
H(dE, "getValueByKeyPath");
var KK = H((e) => e, "identity"), zK = H((e) => JSON.parse(Ay(e)), "jsonDecode"), GK = H((e, t) => t.some((r) => r.fromBundle(e.name, new Uint8Array(), KK) !== void 0), "isFileExpected"), BK = Wf((e, t) => {
  let r = {};
  for (let n of Object.keys(e)) {
    let i = e[n];
    for (let s of t) {
      let a4 = s.fromBundle(n, i, zK);
      if (a4) {
        r = Hf(r, a4, []);
        break;
      }
    }
  }
  return r;
}), Cy = H(async (e, t) => new Promise((r) => cE(e, { filter: H((n) => GK(n, t), "filter") }, (n, i) => {
  r(n ? W(n) : B(i));
})).then((r) => r.andThen((n) => BK(n, t))), "decompress");
a();
var VK = H((e) => typeof e == "object" && e != null && "$ref" in e && typeof e.$ref == "string", "isRef"), WK = H((e) => {
  if (e.length < 2) return false;
  let t = e.filter(VK);
  if (t.length !== e.length) return false;
  let r = t[0].$ref;
  return t.slice(1).every((n) => n.$ref === r);
}, "isDuplicateRef"), Zf = H((e) => typeof e == "object" && e != null && "allOf" in e && Array.isArray(e.allOf) && WK(e.allOf) ? e.allOf[0] : typeof e == "object" && e != null && !Array.isArray(e) ? Object.fromEntries(Object.entries(e).map(([t, r]) => [t, Zf(r)])) : Array.isArray(e) ? e.map(Zf) : e, "fixDuplicateAllOf");
a();
var Jf = H((e) => typeof e == "object" && e != null && "$ref" in e ? G(F({}, e), { $ref: "#/definitions/".concat(e.$ref) }) : typeof e == "object" && e != null && !Array.isArray(e) ? Object.fromEntries(Object.entries(e).map(([t, r]) => [t, Jf(r)])) : Array.isArray(e) ? e.map(Jf) : e, "prefixReferences");
var Xi;
(function(e) {
  e.InvalidTypeboxSchema = "InvalidTypeboxSchema", e.MissingReferenceId = "MissingReferenceId", e.DuplicateReferenceId = "DuplicateReferenceId", e.TypeboxError = "TypeboxError", e.UnknownError = "UnknownError";
})(Xi || (Xi = {}));
var HK = H((e) => ({ next() {
  for (let r of e) {
    let n = r.next();
    if (!n.done) return n;
  }
  return { done: true, value: void 0 };
}, [Symbol.iterator]() {
  return this;
} }), "join"), ZK = H((...e) => {
  let t = /* @__PURE__ */ new Map();
  for (let r of HK(e)) {
    if (!r.$id) continue;
    let n = t.get(r.$id);
    if (n != null && n !== r) return W({ kind: Xi.DuplicateReferenceId, message: "Failed to register a reference for a schema with an $id that has already been used", schema: r });
    t.set(r.$id, r);
  }
  return B(t);
}, "computeReferenceMap"), Lr, Bo, Jn, Qr, Xf = class Xf2 {
  constructor(t, r, n, i) {
    Q(this, Lr);
    Q(this, Bo);
    Q(this, Jn, []);
    Q(this, Qr);
    R(this, Lr, t), R(this, Bo, r), R(this, Jn, n), R(this, Qr, i), this.is = this.is.bind(this), this.parse = this.parse.bind(this), this.verify = this.verify.bind(this), this.jsonSchema = this.jsonSchema.bind(this), this.compress = this.compress.bind(this), this.decompress = this.decompress.bind(this);
  }
  static create(t, r = "CoreMVF") {
    let n = u.Composite(t.extensions.map((s) => s.schema), { $id: r });
    if (!x.IsSchema(n)) return W({ kind: Xi.InvalidTypeboxSchema, message: "Attempting to merge schemas produced an invalid schema", schema: n });
    let i = ZK(Pm.values(), hm.values(), Im.values(), bm.values(), $m.values(), km.values(), t.extensions.flatMap((s) => {
      var a4;
      return (a4 = s.references) != null ? a4 : [];
    }).values());
    if (!i.isOk()) return i;
    try {
      pE();
      let s = kf.Compile(n, [...i.value.values()]);
      return B(new Xf2(n, s, t.extensions, i.value));
    } catch (s) {
      return s instanceof ne ? W({ kind: Xi.TypeboxError, message: s.message, original: s }) : W({ kind: Xi.UnknownError, message: "An unknown error occurred while compiling the schema", original: s });
    }
  }
  is(t) {
    return P(this, Bo).Check(t);
  }
  parse(t) {
    return P(this, Bo).Check(t) ? B(t) : W(P(this, Bo).Errors(t));
  }
  decode(t) {
    try {
      return B(US(P(this, Lr), [...P(this, Qr).values()], t));
    } catch (r) {
      return W(r);
    }
  }
  encode(t) {
    try {
      return B(DS(P(this, Lr), [...P(this, Qr).values()], t));
    } catch (r) {
      return W(r);
    }
  }
  verify(t) {
    for (let r of P(this, Jn)) if (r.integrityCheck) {
      let n = r.integrityCheck(t);
      if (n.isErr()) return W(n.error);
    }
    return B(true);
  }
  jsonSchema() {
    var n;
    let t = JSON.parse(JSON.stringify([P(this, Lr), ...P(this, Qr).values()])), r = Zf(Jf({ $id: "#/definitions/".concat((n = P(this, Lr).$id) != null ? n : "CoreMVF"), $schema: "http://json-schema.org/draft-07/schema#", references: t }));
    return JSON.stringify(r, null, 2);
  }
  async compress(t) {
    return this.encode(t).andThen((r) => this.parse(r)).andThenAsync((r) => Ry(r, P(this, Jn))).then((r) => r.mapErr((n) => {
      var i;
      return jy((i = P(this, Lr).$id) != null ? i : "CoreMVF", n, [...P(this, Qr).values()]);
    }));
  }
  async compressUnsafe(t) {
    return this.encode(t).andThenAsync((r) => Ry(r, P(this, Jn))).then((r) => r.mapErr((n) => {
      var i;
      return jy((i = P(this, Lr).$id) != null ? i : "CoreMVF", n, [...P(this, Qr).values()]);
    }));
  }
  async decompress(t) {
    return Cy(t, P(this, Jn)).then((r) => r.andThen((n) => this.parse(n)).andThen((n) => this.decode(n)).mapErr((n) => {
      var i;
      return _y((i = P(this, Lr).$id) != null ? i : "CoreMVF", n, [...P(this, Qr).values()]);
    }));
  }
  async decompressUnsafe(t) {
    return Cy(t, P(this, Jn)).then((r) => r.andThen((n) => this.decode(n)).mapErr((n) => {
      var i;
      return _y((i = P(this, Lr).$id) != null ? i : "CoreMVF", n, [...P(this, Qr).values()]);
    }));
  }
};
Lr = /* @__PURE__ */ new WeakMap(), Bo = /* @__PURE__ */ new WeakMap(), Jn = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), H(Xf, "MVFParser");
var Yf = Xf;
var Qi, My = class My2 {
  constructor() {
    Q(this, Qi, []);
    this.extend = this.extend.bind(this);
  }
  extend(t) {
    return P(this, Qi).push(t), this;
  }
  extendOptional(t) {
    let r = G(F({}, t), { schema: u.Partial(t.schema) });
    return P(this, Qi).push(r), this;
  }
  build() {
    return Yf.create(this);
  }
  get extensions() {
    return P(this, Qi);
  }
};
Qi = /* @__PURE__ */ new WeakMap(), H(My, "MVFParserBuilder");
var Qf = My;
var mE = H(() => new Qf().extend(QF).extend(iS).extend(fS), "createParser");
var Vo = ct("lcat", "LocationCategoryId"), Ly = u.Intersect([u.Object({ id: u.Ref(Vo), parent: u.Optional(u.Ref(Vo)) }), Co(["name"]), Yr], { $id: "LocationCategory" }), yE = [Vo, Ly];
a();
a();
var Wo;
(function(e) {
  e.UnknownCategoryError = "UnknownCategoryError", e.UnknownParentCategoryError = "UnknownParentCategoryError", e.UnknownParentLocationError = "UnknownParentLocationError";
})(Wo || (Wo = {}));
var hE = H((e) => {
  var i, s, a4, f, p, d, l, m4, g;
  if (e.locationCategories == null && e.locations == null) return B(true);
  let t = new Set((s = (i = e.locationCategories) == null ? void 0 : i.map((b) => b.id)) != null ? s : []);
  for (let b of (a4 = e.locationCategories) != null ? a4 : []) if (b.parent != null && !t.has(b.parent)) return W({ kind: Wo.UnknownParentCategoryError, properties: { categoryId: b.id, parentCategoryId: b.parent } });
  let r = vt(e);
  for (let b of (f = e.locations) != null ? f : []) {
    for (let P4 of b.categories) if (!t.has(P4)) return W({ kind: Wo.UnknownCategoryError, properties: { locationId: b.id, categoryId: P4 } });
    for (let P4 of b.geometryAnchors) {
      let F4 = r(P4.floorId, P4.geometryId);
      if (F4.isErr()) return F4;
    }
  }
  let n = new Set((d = (p = e.locations) == null ? void 0 : p.map((b) => b.id)) != null ? d : []);
  for (let b of (l = e.locationInstances) != null ? l : []) {
    if (!n.has(b.parentId)) return W({ kind: Wo.UnknownParentLocationError, properties: { locationInstanceId: b.id, parentLocationId: b.parentId } });
    for (let P4 of (m4 = b.categories) != null ? m4 : []) if (!t.has(P4)) return W({ kind: Wo.UnknownCategoryError, properties: { locationId: b.id, categoryId: P4 } });
    for (let P4 of (g = b.geometryAnchors) != null ? g : []) {
      let F4 = r(P4.floorId, P4.geometryId);
      if (F4.isErr()) return F4;
    }
  }
  return B(true);
}, "validateLocations");
a();
var Ho = ct("loc", "LocationId"), eu = ct("loci", "LocationInstanceId"), gE = u.Object({ name: u.String(), url: u.String({ format: "uri" }) }, { $id: "LocationSocial" }), IE = u.Object({ url: u.String({ format: "uri" }) }, { $id: "LocationImage" }), Uy = u.Object({ label: u.String(), url: u.String({ format: "uri" }) }, { $id: "LocationLink" }), Dy = u.String({ pattern: "^[0-2][0-9]:[0-6][0-9](:[0-6][0-9])?$", $id: "OpeningHoursTime" }), xE = u.Union([u.Literal("Sunday"), u.Literal("Monday"), u.Literal("Tuesday"), u.Literal("Wednesday"), u.Literal("Thursday"), u.Literal("Friday"), u.Literal("Saturday")], { $id: "OpeningHoursDay" }), JK = "PublicHolidays", qy = u.Union([xE, u.Literal(JK)], { $id: "OpeningHoursDayOrPublicHoliday" }), tu = u.Object({ "@type": u.Optional(u.Literal("OpeningHoursSpecification", { description: "The type of opening hours" })), opens: u.Optional(u.Ref(Dy, { description: "The time the opening hours start" })), closes: u.Optional(u.Ref(Dy, { description: "The time the opening hours end" })), dayOfWeek: u.Optional(u.Union([u.Ref(qy), u.Array(u.Ref(qy))], { description: "The days of the week the opening hours apply to" })), validFrom: u.Optional(u.String({ format: "date-time", description: "The date the opening hours start, in ISO 8601 format" })), validTo: u.Optional(u.String({ format: "date-time", description: "The date the opening hours end, in ISO 8601 format" })) }, { $id: "OpeningHoursSpecification" }), ru = u.Intersect([u.Object({ id: u.Ref(Ho), categories: u.Array(u.Ref(Vo)), logo: u.Optional(u.String({ format: "uri" })), phone: u.Optional(u.String()), social: u.Array(u.Ref(gE)), images: u.Array(u.Ref(IE)), links: u.Array(u.Ref(Uy)), website: u.Optional(u.Ref(Uy)), openingHours: u.Optional(u.Array(u.Ref(tu))) }), Co(["name"]), Mo(), Yr], { $id: "Location" }), Ky = u.Intersect([u.Object({ id: u.Ref(eu), parentId: u.Ref(Ho) }), u.Partial(u.Omit(ru, ["id", "parentId"]))], { $id: "LocationInstance" }), nu = [Ho, eu, gE, IE, Uy, Dy, xE, qy, tu, ru, Ky];
var YK = u.Object({ locations: u.Array(u.Ref(ru)), locationCategories: u.Array(u.Ref(Ly)), locationInstances: u.Optional(u.Array(u.Ref(Ky))) }, { $id: "LocationsExtensionSchema" }), bE = "locations.json", $E = "location-categories.json", wE = "location-instances.json", PE = { name: "ext:locations", schema: YK, intoBundle: H(function* (e) {
  e.locations != null && (yield { path: bE, contents: e.locations }), e.locationCategories != null && (yield { path: $E, contents: e.locationCategories }), e.locationInstances != null && (yield { path: wE, contents: e.locationInstances });
}, "intoBundle"), fromBundle: H((e, t, r) => {
  if (e === bE) return { locations: r(t) };
  if (e === $E) return { locationCategories: r(t) };
  if (e === wE) return { locationInstances: r(t) };
}, "fromBundle"), references: [...yE, ...nu], integrityCheck: hE };
a();
a();
var On;
(function(e) {
  e.UnknownEnterpriseLocationError = "UnknownEnterpriseLocationError", e.EnterpriseLocationWithUnknownLocationError = "EnterpriseLocationWithUnknownLocationError", e.EnterpriseCategoryWithUnknownLocationCategoryError = "EnterpriseCategoryWithUnknownLocationCategoryError", e.InstanceWithUnknownLocationInstanceError = "InstanceWithUnknownLocationInstanceError", e.InstanceWithUnknownEnterpriseLocationError = "InstanceWithUnknownEnterpriseLocationError", e.EnterpriseLocationWithUnknownSibling = "EnterpriseLocationWithUnknownSibling", e.EnterpriseLocationInstanceWithUnknownSibling = "EnterpriseLocationInstanceWithUnknownSibling";
})(On || (On = {}));
var OE = H((e) => {
  var p, d, l, m4, g, b, P4, F4, w, O4, N4, A, k, R3, V4, J4, D, U4, ae, se;
  if (e.enterprise == null) return B(true);
  let t = e.enterprise, r = new Set((d = (p = e.locationCategories) == null ? void 0 : p.map((M3) => M3.id)) != null ? d : []);
  for (let M3 of (l = t.categories) != null ? l : []) if (!r.has(M3.categoryId)) return W({ kind: On.EnterpriseCategoryWithUnknownLocationCategoryError, properties: { enterpriseCategoryId: M3.id, locationCategoryId: M3.categoryId } });
  let n = new Set((g = (m4 = e.locations) == null ? void 0 : m4.map((M3) => M3.id)) != null ? g : []);
  for (let M3 of (b = t.locations) != null ? b : []) {
    if (!n.has(M3.locationId)) return W({ kind: On.EnterpriseLocationWithUnknownLocationError, properties: { enterpriseLocationId: M3.id, locationId: M3.locationId } });
    for (let le of (P4 = M3.siblingGroups) != null ? P4 : []) for (let ce of (F4 = le.siblings) != null ? F4 : []) if (!n.has(ce)) return W({ kind: On.EnterpriseLocationWithUnknownSibling, properties: { enterpriseLocationId: M3.id, siblingLocationId: ce, label: le.label } });
  }
  let i = new Set((O4 = (w = e.enterprise.locations) == null ? void 0 : w.map((M3) => M3.id)) != null ? O4 : []);
  if (((N4 = t.venue) == null ? void 0 : N4.topLocations) != null) {
    for (let M3 of t.venue.topLocations) if (!i.has(M3)) return W({ kind: On.UnknownEnterpriseLocationError, properties: { enterpriseLocationId: M3 } });
  }
  let s = new Set((k = (A = e.locationInstances) == null ? void 0 : A.map((M3) => M3.id)) != null ? k : []);
  for (let M3 of (R3 = t.locationInstances) != null ? R3 : []) {
    if (!i.has(M3.parentId)) return W({ kind: On.InstanceWithUnknownEnterpriseLocationError, properties: { enterpriseLocationInstanceId: M3.id, enterpriseLocationId: M3.parentId } });
    if (!s.has(M3.locationInstanceId)) return W({ kind: On.InstanceWithUnknownLocationInstanceError, properties: { enterpriseLocationInstanceId: M3.id, locationInstanceId: M3.locationInstanceId } });
    for (let le of (V4 = M3.siblingGroups) != null ? V4 : []) for (let ce of (J4 = le.siblings) != null ? J4 : []) if (!n.has(ce)) return W({ kind: On.EnterpriseLocationInstanceWithUnknownSibling, properties: { enterpriseLocationInstanceId: M3.id, siblingLocationId: ce, label: le.label } });
  }
  let a4 = zn(e), f = vt(e);
  for (let [M3, le] of _e((D = t.floorText) != null ? D : {})) {
    let ce = a4(M3);
    if (ce.isErr()) return ce;
    for (let Te of le.features) {
      if (!("geometryId" in Te.properties)) continue;
      let Ie = f(M3, Te.properties.geometryId);
      if (Ie.isErr()) return Ie;
    }
  }
  for (let [M3, le] of _e((U4 = t.textures) != null ? U4 : {})) {
    let ce = a4(M3);
    if (ce.isErr()) return ce;
    for (let Te of le) {
      let Ie = f(M3, Te.geometryId);
      if (Ie.isErr()) return Ie;
    }
  }
  for (let [M3, le] of _e((ae = t.layers) != null ? ae : {})) {
    let ce = a4(M3);
    if (ce.isErr()) return ce;
    for (let Te of Ee(le != null ? le : {})) {
      let Ie = f(M3, Te);
      if (Ie.isErr()) return Ie;
    }
  }
  for (let [M3, le] of _e((se = t.textAreas) != null ? se : {})) {
    let ce = a4(M3);
    if (ce.isErr()) return ce;
    for (let Te of le.features) if ("geometryId" in Te.properties) {
      let Ie = f(M3, Te.properties.geometryId);
      if (Ie.isErr()) return Ie;
    }
  }
  return B(true);
}, "validateCMS");
a();
a();
var Zo = ct("el", "EnterpriseLocationId"), zy = ct("ec", "EnterpriseCategoryId"), Gy = ct("eli", "EnterpriseLocationInstanceId"), By = ct("ev", "EnterpriseVenueId"), Vy = ct("eft", "EnterpriseFloorTextId"), FE = [Zo, zy, Gy, By, Vy];
var SE = u.Object({ id: u.Ref(zy), categoryId: u.Ref(Vo), color: u.Optional(u.String()), sortOrder: u.Number(), iconFromDefaultList: u.Optional(u.Union([u.String(), u.Null()])), picture: u.Optional(u.String({ format: "uri", description: "The category's picture" })) }, { $id: "EnterpriseCategory" }), Wy = u.Object({ categories: u.Optional(u.Array(u.Ref(SE))) }, { $id: "EnterpriseCategoriesSchema" }), EE = [SE, Wy];
a();
var TE = lr(["left", "center", "right"]), XK = TE.schema;
TE.values;
var Hy = u.Object({ id: u.Ref(Vy), text: u.String(), visible: u.Boolean({ default: true }), fontSize: u.Number({ default: 12, minimum: 1 }), fontFamily: u.String({ default: "Droid Sans" }), color: u.String({ default: "black" }), rotation: u.Number({ minimum: 0, maximum: 360 }), align: XK }, { $id: "FloorTextCommonProperties" }), Zy = u.Intersect([u.Ref(Hy), jr], { $id: "AnchoredFloorTextProperties" }), Jy = u.Intersect([u.Ref(Hy), u.Object({ verticalOffset: u.Number() })], { $id: "FloatingFloorTextProperties" }), vE = u.Union([u.Ref(Zy), u.Ref(Jy)], { $id: "FloorTextProperties" }), AE = Ct(Vt, u.Ref(vE), { $id: "FloorTextFeature" }), QK = Ct(Vt, u.Ref(Zy), { $id: "AnchoredFloorTextFeature" }), e3 = Ct(Vt, u.Ref(Jy), { $id: "FloatingFloorTextFeature" }), jE = rr(u.Ref(AE), { $id: "EnterpriseFloorTextFeatureCollection" }), kE = u.Record(ke, u.Ref(jE), { $id: "EnterpriseFloorTextCollectionsByFloor", additionalProperties: false }), Yy = u.Object({ floorText: u.Optional(u.Ref(kE)) }, { $id: "EnterpriseFloorTextSchema" }), _E = [Hy, Zy, Jy, vE, AE, QK, e3, jE, kE, Yy];
a();
var NE = yt(u.Record(Bt, u.String({ minLength: 1 }), { additionalProperties: false, $id: "EnterpriseLayers" })), RE = yt(u.Record(ke, u.Ref(NE), { additionalProperties: false, $id: "EnterpriseLayersByFloor" })), Xy = u.Object({ layers: u.Optional(u.Ref(RE)) }, { $id: "EnterpriseLayersSchema" }), CE = [NE, RE, Xy];
a();
a();
a();
var Qy = lr(["closed-temporarily", "new", "pop-up", "coming-soon", "relocated"]), t3 = Qy.schema;
Qy.values;
Qy.record;
var eh = u.Object({ type: t3, start: u.Optional(u.String({ format: "date", description: "The start date of the state" })), end: u.Optional(u.String({ format: "date", description: "The end date of the state" })) }, { $id: "LocationState", description: "The state of a location. Start and end dates are optional." }), th = u.Object({ label: u.String(), siblings: u.Array(u.Ref(Ho)) }, { $id: "SiblingGroup" }), ou = u.Object({ name: u.String(), code: u.String() }, { $id: "Language" }), ME = [eh, th, ou];
var iu = u.Object({ id: u.Ref(Zo), locationId: u.Ref(Ho), type: u.String(), sortOrder: u.Number(), tags: u.Optional(u.Array(u.String())), picture: u.Optional(u.String({ format: "uri", description: "The picture of the location" })), states: u.Optional(u.Array(u.Ref(eh), { description: "The location's state. No more than one state should be active at a time, and all but at most one should have dates set" })), siblingGroups: u.Optional(u.Array(u.Ref(th))), gallery: u.Optional(u.Array(u.Object({ caption: u.Optional(u.String()), image: u.String({ format: "uri" }), embeddedUrl: u.Optional(u.String({ format: "uri", description: "The URL to link from the image" })) }, { description: "The location's image gallery" }), { description: "The location's image gallery" })), showFloatingLabelWhenImagePresent: u.Optional(u.Boolean({ description: "Whether to show the flat label when an image is present" })), amenity: u.Optional(u.String({ description: "The location's amenity type. Only set if the location is an amenity" })), showLogo: u.Optional(u.Boolean({ description: "Whether to show the logo of the location" })) }, { $id: "EnterpriseLocation" }), rh = u.Object({ locations: u.Optional(u.Array(u.Ref(iu))) }, { $id: "EnterpriseLocationsSchema" }), LE = [iu, rh];
var UE = u.Intersect([u.Object({ id: u.Ref(Gy), parentId: u.Ref(Zo), locationInstanceId: u.Ref(eu) }), u.Partial(u.Omit(iu, ["id", "parentId", "locationId"]))], { $id: "EnterpriseLocationInstance", description: "A locationInstance is a particular instance of an Enterprise Location that has some properties different from the parent." }), nh = u.Object({ locationInstances: u.Optional(u.Array(u.Ref(UE))) }, { $id: "EnterpriseLocationInstancesSchema" }), DE = [UE, nh];
a();
var oh = lr(["near", "center"], { $id: "EnterpriseTextAreaAlignment" }), qE = oh.schema;
oh.values;
oh.record;
var ih = u.Object({ maxWidth: u.Number({ exclusiveMinimum: 0, description: "The maximum width of the label, in meters." }), maxHeight: u.Number({ exclusiveMinimum: 0, description: "The maximum height of the label, in meters." }), align: u.Ref(qE), rotation: u.Number({ minimum: 0, maximum: 360, description: "Rotation in degrees, about the center of the image. North is 0, east is 90." }) }, { $id: "EnterpriseBaseTextAreaProperties" }), KE = u.Intersect([u.Ref(ih), jr], { $id: "EnterpriseAnchoredTextAreaProperties" }), zE = u.Intersect([u.Ref(ih), u.Object({ verticalOffset: u.Number({ minimum: 0, description: "How high to position the image, in meters, relative to the ground plane." }) })], { $id: "EnterpriseFloatingTextAreaProperties" }), GE = u.Union([KE, zE], { $id: "EnterpriseTextAreaProperties" }), BE = Ct(u.Ref(Vt), GE, { $id: "EnterpriseTextAreaFeature" }), VE = rr(u.Ref(BE), { $id: "EnterpriseTextAreaCollection" }), WE = u.Record(ke, u.Ref(VE), { $id: "EnterpriseTextAreasByFloor", additionalProperties: false }), HE = u.Object({ textAreas: u.Optional(u.Ref(WE)) }, { $id: "EnterpriseTextAreasSchema" }), ZE = [qE, ih, KE, zE, GE, BE, VE, WE];
a();
var sh = u.Object({ u: u.Number(), v: u.Number() }, { $id: "EnterpriseTextureUV" }), ah = lr(["top", "side"], { $id: "EnterpriseTextureFace" }), JE = ah.schema;
ah.values;
ah.record;
var ch = lr(["inside", "outside", "both"], { $id: "EnterpriseTextureSurface" }), YE = ch.schema;
ch.values;
ch.record;
var XE = u.Tuple([_i, Ni, _i, Ni], { $id: "EnterpriseTextureBounds" }), QE = u.Intersect([u.Object({ repeat: u.Ref(sh), offset: u.Ref(sh), rotation: u.Number({ minimum: 0, maximum: 360 }), path: u.String({ format: "uri" }), face: u.Ref(JE), surface: u.Ref(YE), bounds: u.Ref(XE) }, { $id: "EnterpriseTextureProperties" }), jr], { $id: "EnterpriseTexture" }), eT = u.Array(u.Ref(QE), { $id: "EnterpriseTextures" }), tT = u.Record(ke, u.Ref(eT), { $id: "EnterpriseTexturesByFloor", additionalProperties: false }), fh = u.Object({ textures: u.Optional(u.Ref(tT)) }, { $id: "EnterpriseTexturesSchema" }), rT = [QE, eT, fh, sh, JE, YE, XE, tT];
a();
var nT = u.Intersect([u.Object({ id: u.Ref(By), slug: u.String(), defaultLanguage: u.Ref(ou), languages: u.Array(u.Ref(ou)), countrycode: u.Optional(u.String()), logo: u.Optional(u.String({ format: "uri" })), mappedinWebUrl: u.Optional(u.String({ format: "uri" })), topLocations: u.Optional(u.Array(u.Ref(Zo))), operationHours: u.Optional(u.Array(u.Ref(tu))), coverImage: u.Optional(u.String({ format: "uri" })) }), Co(["name"]), Yr], { $id: "EnterpriseVenue" }), uh = u.Object({ venue: u.Optional(u.Ref(nT)) }, { $id: "EnterpriseVenueSchema" }), oT = [nT, uh];
var sT = u.Intersect([uh, rh, nh, Wy, fh, Yy, Xy, HE], { $id: "EnterpriseProperties" }), iT = u.Object({ enterprise: u.Optional(u.Ref(sT)) }, { $id: "CMSExtensionSchema" }), r3 = /^enterprise\/(?:([^/]+)\/)?([^/]+)\.(?:json|geojson)$/, aT = { name: "ext:cms", schema: iT, intoBundle: H(function* (e) {
  var r, n, i, s, a4, f;
  if (e.enterprise == null) return;
  let t = e.enterprise;
  for (let p of Ee(t)) switch (p) {
    case "floorText":
      for (let d of Ee((r = t.floorText) != null ? r : {})) yield { path: "enterprise/floorText/".concat(d, ".geojson"), contents: ((n = t.floorText) != null ? n : {})[d] };
      continue;
    case "textures":
      for (let d of Ee((i = t.textures) != null ? i : {})) yield { path: "enterprise/textures/".concat(d, ".json"), contents: ((s = t.textures) != null ? s : {})[d] };
      continue;
    case "textAreas":
      for (let d of Ee((a4 = t.textAreas) != null ? a4 : {})) yield { path: "enterprise/textAreas/".concat(d, ".geojson"), contents: ((f = t.textAreas) != null ? f : {})[d] };
      continue;
    default:
      yield { path: "enterprise/".concat(p, ".json"), contents: t[p] };
      continue;
  }
}, "intoBundle"), fromBundle: H((e, t, r) => {
  let n = e.match(r3);
  if (!n) return;
  let [, i, s] = n, a4 = r(t);
  switch (i) {
    case "floorText":
    case "textures":
    case "textAreas":
      return { enterprise: { [i]: { [s]: a4 } } };
    default:
      return { enterprise: { [s]: a4 } };
  }
}, "fromBundle"), references: [sT, iT, ...oT, ...LE, ...DE, ...EE, ...rT, ...CE, ..._E, ...ZE, ...FE, ...ME, ...nu], integrityCheck: OE };
a();
a();
a();
a();
var en;
(function(e) {
  e.NavigationFlagMissingDeclaration = "NavigationFlagMissingDeclaration", e.NavigationFlagDuplicateBit = "NavigationFlagDuplicateBit", e.NavigationFlagIncorrectFlagsLength = "NavigationFlagIncorrectFlagsLength", e.NavigationFlagValueTooBig = "NavigationFlagValueTooBig";
})(en || (en = {}));
var cT = H((e) => {
  let { navigationFlags: t } = e;
  if (!t || Object.keys(t).length === 0) return B(true);
  let r = Object.entries(t).map(([s, a4]) => F({ key: s }, a4)).sort((s, a4) => s.index !== a4.index ? s.index - a4.index : s.bit - a4.bit), n = 0, i = -1;
  for (let s of r) {
    if (s.bit === i) return W({ kind: en.NavigationFlagDuplicateBit, properties: { index: s.index, bit: s.bit, path: "navigationFlags.".concat(s.key) } });
    if (s.index != n) {
      if (i != 31) return W({ kind: en.NavigationFlagMissingDeclaration, properties: { index: n, bit: i + 1, path: "navigationFlags" } });
      if (s.index != n + 1 || s.bit != 0) return W({ kind: en.NavigationFlagMissingDeclaration, properties: { index: n + 1, bit: 0, path: "navigationFlags" } });
      n = s.index, i = 0;
    } else {
      if (s.bit !== i + 1) return W({ kind: en.NavigationFlagMissingDeclaration, properties: { index: s.index, bit: i + 1, path: "navigationFlags" } });
      i = s.bit;
    }
  }
  return B(true);
}, "validateNavigationFlags");
a();
function es(e, t) {
  return t && (e.flags[t.index] & 1 << t.bit) !== 0;
}
H(es, "hasFlag");
a();
var fT = 2 ** 32 - 1, ua = H((e) => {
  var i;
  let t = Object.keys((i = e.navigationFlags) != null ? i : {}).length;
  if (t === 0) return { index: -1, flag: 0 };
  let r = Math.floor(t / 32), n = t % 32;
  return { index: r, flag: 2 ** n - 1 };
}, "determineMaxNavigationFlags"), ts = H((e, t, r) => {
  if (t.index == -1 && e.length === 0) return B(true);
  let n = t.flag > 0 || t.index === -1 ? t.index + 1 : t.index;
  if (e.length !== n) return W({ kind: en.NavigationFlagIncorrectFlagsLength, properties: { expected: n, actual: e.length, path: r } });
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (i < t.index) {
      if (s > fT) return W({ kind: en.NavigationFlagValueTooBig, properties: { index: i, flagValue: s, expectedMaxFlagValue: fT, path: r } });
      continue;
    } else if (s > t.flag) return W({ kind: en.NavigationFlagValueTooBig, properties: { index: i, flagValue: s, expectedMaxFlagValue: t.flag, path: r } });
  }
  return B(true);
}, "validateFlags");
var n3 = u.Object({ index: u.Integer({ description: "The index of the flag in a flags array.", minimum: 0 }), bit: u.Integer({ description: "The bit position of the flag in a flag's bitfield.", minimum: 0, maximum: 31 }) }, { $id: "NavigationFlagDeclarationCore" }), uT = u.Intersect([n3, Jr], { $id: "NavigationFlagDeclaration", description: 'A NavigationFlagDeclaration describes the relationship between a "key" that a developer might use to wayfind using that flag, and the index and bit position in an object\'s `flags` array.' }), ph = { accessible: "accessible", outdoors: "outdoors" }, pT = u.Record(u.String(), uT, { $id: "NavigationFlagDeclarations", description: "Any well known and custom flags present in the MVF" }), o3 = u.Object({ navigationFlags: u.Ref(pT) }, { $id: "NavigationFlagsSchema" }), su = u.Array(u.Integer({ minimum: 0, maximum: Math.pow(2, 32) - 1 }), { $id: "Flags" }), lh = u.Object({ flags: u.Ref(su) }, { $id: "WithFlags" }), Jo = u.Intersect([ki, lh], { $id: "FlaggedGeometryAnchor" }), i3 = u.Object({ geometryAnchor: Jo }, { $id: "WithFlaggedGeometryAnchor" }), s3 = u.Object({ geometryAnchors: u.Array(Jo) }, { $id: "WithFlaggedGeometryAnchors" }), lT = { name: "ext:mvf-navigation-flags", schema: o3, intoBundle: H(function* (e) {
  e.navigationFlags != null && (yield { path: "navigationFlags.json", contents: e.navigationFlags });
}, "intoBundle"), fromBundle: H((e, t, r) => e !== "navigationFlags.json" ? void 0 : { navigationFlags: r(t) }, "fromBundle"), references: [uT, pT, su, Jo, i3, s3], integrityCheck: cT };
a();
var dT = H((e) => {
  if (e.connections == null) return B(true);
  let t = vt(e), r = ua(e);
  for (let [n, i] of e.connections.entries()) {
    for (let [s, a4] of i.entrances.entries()) {
      let f = t(a4.floorId, a4.geometryId);
      if (f.isErr()) return f;
      let p = ts(a4.flags, r, "connections[".concat(n, "].entrances[").concat(s, "]"));
      if (p.isErr()) return p;
    }
    for (let [s, a4] of i.exits.entries()) {
      let f = t(a4.floorId, a4.geometryId);
      if (f.isErr()) return f;
      let p = ts(a4.flags, r, "connections[".concat(n, "].exits[").concat(s, "]"));
      if (p.isErr()) return p;
    }
  }
  return B(true);
}, "validateConnections");
var yT = ct("c", "ConnectionId"), { schema: a3, values: Zme, record: c3 } = lr(["elevator", "escalator", "travelator", "stairs", "door", "ramp"], { $id: "ConnectionType" }), hT = a3;
var dh = c3, gT = u.Intersect([u.Object({ id: u.Ref(yT, { description: "The unique identifier for the connection." }), entrances: u.Array(u.Ref(Jo)), exits: u.Array(u.Ref(Jo)), entryCost: u.Number({ description: "The cost to enter the connection.", minimum: 0 }), floorCostMultiplier: u.Number({ description: "The cost multiplier for each floor transitioned.", minimum: 1 }), type: u.Ref(hT, { description: "The type of connection." }) }), Jr, Yr], { $id: "ConnectionsProperties" }), IT = u.Array(u.Ref(gT), { $id: "ConnectionsCollection" }), f3 = u.Object({ connections: u.Ref(IT) }, { $id: "ConnectionsExtensionSchema" }), mT = "connections.json", xT = { name: "ext:connections", schema: f3, intoBundle: H(function* (e) {
  e.connections != null && (yield { path: mT, contents: e.connections });
}, "intoBundle"), fromBundle: H((e, t, r) => {
  if (e === mT) return { connections: r(t) };
}, "fromBundle"), references: [gT, IT, hT, yT, Jo, su], integrityCheck: dT };
a();
a();
var bT = H((e) => {
  if (e.defaultStyle == null) return B(true);
  let t = vt(e);
  for (let r of Object.values(e.defaultStyle)) if (r != null) for (let n of r.geometryAnchors) {
    let i = t(n.floorId, n.geometryId);
    if (i.isErr()) return i;
  }
  return B(true);
}, "validateDefaultStyle");
var $T = u.Intersect([Mo(), Yr, u.Object({ altitude: u.Number({ description: "How far off the bottom of the floor the objects with this style should be drawn, in meters." }), color: u.String({ pattern: "^#[0-9a-fA-F]{6}$", description: "Color should be represented with a hash (#), followed by 6 hexadecimal digits. ex: #RRGGBB" }), height: u.Number({ minimum: 0, description: "The height of the objects belonging to this layer, in meters." }), opacity: u.Number({ minimum: 0, maximum: 1, description: "The opacity of the objects belonging to this layer, from 0 to 1." }), buffer: u.Number({ description: "The buffer amount to apply to the geometry, in meters. This can be used to inflate line string geometry for walls, but might also be applicable as a way to grow or shrink polygon geometry for aesthetic purposes. Can be negative." }), hidden: u.Optional(u.Boolean({ description: "Whether or not the objects with this style should be hidden." })) })], { $id: "DefaultStyle" }), wT = u.Record(u.String(), u.Ref($T), { $id: "DefaultStyleCollection", additionalProperties: false }), u3 = u.Object({ defaultStyle: u.Ref(wT) }, { $id: "DefaultStyleSchema" }), PT = { name: "ext:mvf-default-style", schema: u3, intoBundle: H(function* (e) {
  e.defaultStyle != null && (yield { path: "default-style.json", contents: e.defaultStyle });
}, "intoBundle"), fromBundle: H((e, t, r) => {
  if (e === "default-style.json") return { defaultStyle: r(t) };
}, "fromBundle"), references: [$T, wT], integrityCheck: bT };
a();
a();
a();
a();
var au;
(function(e) {
  e.InvalidDefaultFloorError = "InvalidDefaultFloorError";
})(au || (au = {}));
var OT = H((e) => {
  if (e.floorStacks == null) return B(true);
  let t = zn(e);
  for (let r of e.floorStacks) {
    for (let n of r.floors) {
      let i = t(n);
      if (i.isErr()) return i;
    }
    if (r.defaultFloor != null && !r.floors.includes(r.defaultFloor)) return W({ kind: au.InvalidDefaultFloorError, properties: { floorStackId: r.id, floorId: r.defaultFloor } });
  }
  return B(true);
}, "validateFloorStacks");
var cu = ct("fs", "FloorStackId"), ST = u.Intersect([u.Object({ id: u.Ref(cu, { description: "The unique identifier for the floor stack." }), floors: u.Array(u.Ref(ke), { uniqueItems: true, minItems: 1, description: "The floors that are part of this floor stack." }), defaultFloor: u.Optional(u.Ref(ke, { description: "The default floor for the floor stack." })) }), Jr], { $id: "FloorStacksProperties" }), ET = u.Array(u.Ref(ST), { $id: "FloorStackCollection" }), p3 = u.Object({ floorStacks: u.Ref(ET) }, { $id: "FloorStackExtensionSchema" }), FT = "floor-stacks.json", TT = { name: "ext:floor-stacks", schema: p3, intoBundle: H(function* (e) {
  e.floorStacks != null && (yield { path: FT, contents: e.floorStacks });
}, "intoBundle"), fromBundle: H((e, t, r) => {
  if (e === FT) return { floorStacks: r(t) };
}, "fromBundle"), references: [cu, ST, ET], integrityCheck: OT };
a();
a();
var pa;
(function(e) {
  e.MissingFloorStackError = "MissingFloorStackError", e.UnknownFloorStackError = "UnknownFloorStackError";
})(pa || (pa = {}));
var vT = H((e) => {
  if (e.facade == null) return B(true);
  if (e.floorStacks == null) return W({ kind: pa.MissingFloorStackError, properties: null });
  let t = new Set(e.floorStacks.map((n) => n.id)), r = vt(e);
  for (let [n, i] of _e(e.facade)) if (i != null) {
    if (!t.has(n)) return W({ kind: pa.UnknownFloorStackError, properties: { floorStackId: n } });
    for (let s of i.geometryAnchors) {
      let a4 = r(s.floorId, s.geometryId);
      if (a4.isErr()) return a4;
    }
  }
  return B(true);
}, "validateFacade");
var AT = ct("fc", "FacadeId"), jT = u.Intersect([u.Object({ id: u.Ref(AT) }), Mo({ minItems: 1 })], { $id: "FacadeProperties" }), l3 = u.Object({ facade: yt(u.Record(cu, u.Ref(jT), { additionalProperties: false })) }, { $id: "FacadeExtensionSchema" }), d3 = /^facade\/(.*)\.json$/, kT = { name: "ext:facade", schema: l3, intoBundle: H(function* (e) {
  if (e.facade != null) for (let t of Ee(e.facade)) yield { path: "facade/".concat(t, ".json"), contents: e.facade[t] };
}, "intoBundle"), fromBundle: H((e, t, r) => {
  var i;
  let n = (i = e.match(d3)) == null ? void 0 : i[1];
  if (n) return { facade: { [n]: r(t) } };
}, "fromBundle"), references: [AT, jT], integrityCheck: vT };
a();
a();
var _T = H((e) => {
  if (e.floorImages == null) return B(true);
  let t = vt(e);
  for (let [r, n] of _e(e.floorImages)) if (n != null) for (let i of n.features) {
    if (!("geometryId" in i.properties)) continue;
    let s = i.properties.geometryId, a4 = t(r, s);
    if (a4.isErr()) return a4;
  }
  return B(true);
}, "validateFloorImages");
var mh = u.Object({ path: u.String({ format: "uri", description: "The path to the image. This will be a remote URL." }), width: u.Number({ minimum: 0, description: "The width of the image when represented on the map, in meters." }), height: u.Number({ minimum: 0, description: "The height of the image when represented on the map, in meters." }), rotation: u.Number({ minimum: 0, maximum: 360, description: "Rotation in degrees, about the center of the image. North is 0, east is 90." }) }, { $id: "BaseFloorImageProperties" }), NT = u.Intersect([u.Ref(mh), jr], { $id: "AnchoredFloorImageProperties" }), RT = u.Intersect([u.Ref(mh), u.Object({ verticalOffset: u.Number({ minimum: 0, description: "How high to position the image, in meters, relative to the ground plane." }) })], { $id: "FloatingFloorImageProperties" }), CT = u.Union([NT, RT], { $id: "FloorImageProperties" }), MT = Ct(u.Ref(Vt), CT, { $id: "FloorImageFeature" }), LT = rr(u.Ref(MT), { $id: "FloorImageCollection" }), m3 = u.Object({ floorImages: yt(u.Record(ke, u.Ref(LT), { additionalProperties: false })) }, { $id: "FloorImagesExtensionSchema" }), y3 = /^floorImages\/(.*)\.geojson$/, UT = { name: "ext:floor-images", schema: m3, intoBundle: H(function* (e) {
  if (e.floorImages != null) for (let t of Ee(e.floorImages)) yield { path: "floorImages/".concat(t, ".geojson"), contents: e.floorImages[t] };
}, "intoBundle"), fromBundle: H((e, t, r) => {
  var i;
  let n = (i = e.match(y3)) == null ? void 0 : i[1];
  if (n) return { floorImages: { [n]: r(t) } };
}, "fromBundle"), references: [mh, NT, RT, CT, MT, LT], integrityCheck: _T };
a();
a();
var DT = H((e) => {
  if (e.kinds == null) return B(true);
  let t = vt(e);
  for (let [r, n] of _e(e.kinds)) if (n != null) for (let i of Ee(n)) {
    let s = t(r, i);
    if (s.isErr()) return s;
  }
  return B(true);
}, "validateKinds");
var { values: yhe, schema: h3, record: hhe } = lr(["room", "hallway", "wall", "desk", "poi", "area", "window"], { $id: "Kind" }), qT = h3;
var KT = yt(u.Record(Bt, u.Ref(qT), { additionalProperties: false, $id: "GeometryKinds" })), g3 = u.Object({ kinds: yt(u.Record(ke, u.Ref(KT), { additionalProperties: false })) }, { $id: "KindsExtensionSchema" }), I3 = /^kinds\/(.*)\.json$/, zT = { name: "ext:kinds", schema: g3, intoBundle: H(function* (e) {
  if (e.kinds != null) for (let t of Ee(e.kinds)) yield { path: "kinds/".concat(t, ".json"), contents: e.kinds[t] };
}, "intoBundle"), fromBundle: H((e, t, r) => {
  var i;
  let n = (i = e.match(I3)) == null ? void 0 : i[1];
  if (n) return { kinds: { [n]: r(t) } };
}, "fromBundle"), references: [qT, KT], integrityCheck: DT };
a();
a();
a();
var fu;
(function(e) {
  e.UnknownNeighbor = "UnknownNeighbor";
})(fu || (fu = {}));
var GT = H((e) => {
  if (e.nodes == null) return B(true);
  let t = vt(e), r = ua(e);
  for (let [n, i] of _e(e.nodes)) {
    if (i == null) continue;
    let s = new Set(i.features.map((a4) => a4.properties.id));
    for (let [a4, f] of i.features.entries()) {
      for (let p of f.properties.geometryIds) {
        let d = t(n, p);
        if (d.isErr()) return d;
      }
      for (let [p, d] of f.properties.neighbors.entries()) {
        if (!s.has(d.id)) return W({ kind: fu.UnknownNeighbor, properties: { floorId: n, nodeId: f.properties.id, neighborId: d.id } });
        let l = ts(d.flags, r, 'nodes["'.concat(n, '"].features[').concat(a4, "].properties.neighbors[").concat(p, "]"));
        if (l.isErr()) return l;
      }
    }
  }
  return B(true);
}, "validateNodes");
var yh = ct("n", "NodeId"), BT = u.Intersect([u.Object({ id: u.Ref(yh, { description: "The unique identifier for the node." }), extraCost: u.Number({ minimum: 0, description: "The extra cost to traverse to the node, above the straight-line distance." }) }), lh], { $id: "NodeNeighbor" }), VT = u.Intersect([u.Object({ id: u.Ref(yh, { description: "The unique identifier for the node." }), neighbors: u.Array(u.Ref(BT), { description: "The neighbors of the node." }) }), lf], { $id: "NodeProperties" }), WT = Ct(u.Ref(Vt), VT, { $id: "NodeFeature" }), HT = rr(u.Ref(WT), { $id: "NodeCollection" }), x3 = u.Object({ nodes: yt(u.Record(ke, u.Ref(HT), { additionalProperties: false })) }, { $id: "NodesExtensionSchema" }), b3 = /^nodes\/(.*)\.json$/, ZT = { name: "ext:nodes", schema: x3, intoBundle: H(function* (e) {
  if (e.nodes != null) for (let t of Ee(e.nodes)) yield { path: "nodes/".concat(t, ".json"), contents: e.nodes[t] };
}, "intoBundle"), fromBundle: H((e, t, r) => {
  var i;
  let n = (i = e.match(b3)) == null ? void 0 : i[1];
  if (n) return { nodes: { [n]: r(t) } };
}, "fromBundle"), references: [yh, BT, VT, WT, HT], integrityCheck: GT };
a();
a();
a();
var uu;
(function(e) {
  e.FloorInFloorStackError = "FloorInFloorStackError";
})(uu || (uu = {}));
var JT = H((e) => {
  if (e.outdoors == null) return B(true);
  let t = zn(e);
  for (let r of e.outdoors.floors) {
    let n = t(r);
    if (n.isErr()) return n;
    if (e.floorStacks != null) {
      for (let i of e.floorStacks) if (i.floors.includes(r)) return W({ kind: uu.FloorInFloorStackError, properties: { floorId: r, floorStackId: i.id } });
    }
  }
  return B(true);
}, "validateOutdoors");
var XT = u.Object({ floors: u.Array(u.Ref(ke), { uniqueItems: true, description: "A list of floor IDs that should be considered to contain outdoor features." }) }, { $id: "Outdoors" }), $3 = u.Object({ outdoors: u.Ref(XT) }, { $id: "OutdoorsExtensionSchema" }), YT = "outdoors.json", QT = { name: "ext:outdoors", schema: $3, intoBundle: H(function* (e) {
  e.outdoors != null && (yield { path: YT, contents: e.outdoors });
}, "intoBundle"), fromBundle: H((e, t, r) => {
  if (e === YT) return { outdoors: r(t) };
}, "fromBundle"), references: [XT], integrityCheck: JT };
a();
a();
a();
var pu;
(function(e) {
  e.TilesetDuplicateKeyError = "TilesetDuplicateKeyError";
})(pu || (pu = {}));
var e1 = H((e) => {
  if (e.tileset == null) return B(true);
  let t = /* @__PURE__ */ new Set();
  if (t.add(e.tileset.default.key), e.tileset.others) for (let r of e.tileset.others) {
    if (t.has(r.key)) return W({ kind: pu.TilesetDuplicateKeyError, properties: { key: r.key } });
    t.add(r.key);
  }
  return B(true);
}, "validateTilesets");
var hh = u.Object({ key: u.String({ minLength: 1, description: "Unique identifier for the tileset style." }), name: u.String({ minLength: 1, description: "Display name of the tileset style." }), url: u.String({ format: "uri", description: "URL of the tileset style." }) }, { $id: "TilesetStyle", description: "A tileset style definition." }), t1 = u.Object({ default: u.Ref(hh, { description: "The default tileset style, which should be used." }), others: u.Optional(u.Array(u.Ref(hh, { description: "Additional tileset styles that can be used." }))) }, { $id: "TilesetCollection" }), w3 = u.Object({ tileset: u.Ref(t1) }, { $id: "TilesetExtensionSchema" }), r1 = { name: "ext:mvf-tileset", schema: w3, intoBundle: H(function* (e) {
  e.tileset != null && (yield { path: "tileset.json", contents: e.tileset });
}, "intoBundle"), fromBundle: H((e, t, r) => {
  if (e === "tileset.json") return { tileset: r(t) };
}, "fromBundle"), references: [hh, t1], integrityCheck: e1 };
a();
var n1 = u.Object({}, { $id: "WalkableProperties" }), o1 = u.Object({}, { $id: "NonWalkableProperties" }), i1 = yt(u.Record(Bt, u.Ref(n1), { $id: "WalkableGeometries", additionalProperties: false })), s1 = yt(u.Record(Bt, u.Ref(o1), { $id: "NonWalkableGeometries", additionalProperties: false })), P3 = u.Object({ walkable: yt(u.Record(ke, u.Ref(i1), { additionalProperties: false })), nonwalkable: yt(u.Record(ke, u.Ref(s1), { additionalProperties: false })) }, { $id: "TraversabilitySchema" }), O3 = /^walkable\/(.*)\.json$/, F3 = /^nonwalkable\/(.*)\.json$/, a1 = { name: "ext:mvf-traversability", schema: P3, intoBundle: H(function* (e) {
  if (e.walkable != null) for (let t of Ee(e.walkable)) yield { path: "walkable/".concat(t, ".json"), contents: e.walkable[t] };
  if (e.nonwalkable != null) for (let t of Ee(e.nonwalkable)) yield { path: "nonwalkable/".concat(t, ".json"), contents: e.nonwalkable[t] };
}, "intoBundle"), fromBundle: H((e, t, r) => {
  var s, a4;
  let n = (s = e.match(O3)) == null ? void 0 : s[1];
  if (n != null) return { walkable: { [n]: r(t) } };
  let i = (a4 = e.match(F3)) == null ? void 0 : a4[1];
  if (i != null) return { nonwalkable: { [i]: r(t) } };
}, "fromBundle"), references: [n1, o1, i1, s1] };
a();
a();
function c1(e) {
  return e.replace(/^g_/, "s_");
}
H(c1, "toSpaceId");
function S3(e) {
  return e.replace(/^g_/, "o_");
}
H(S3, "toObstructionId");
function E3(e) {
  return e.replace(/^g_/, "w_");
}
H(E3, "toWindowId");
function T3(e) {
  return e.replace(/^g_/, "ar_");
}
H(T3, "convertAreaId");
function v3(e, t, r) {
  switch (e.geometry.type) {
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon": {
      let n = [], i = 0, s = e.geometry.type.replace("Multi", "");
      for (let a4 of e.geometry.coordinates) n.push(G(F({}, e), { geometry: { type: s, coordinates: a4 }, properties: G(F({}, e.properties), { id: "".concat(t, "-").concat(i++), kind: r }) }));
      return n;
    }
    default:
      return [G(F({}, e), { properties: G(F({}, e.properties), { id: t, kind: r }) })];
  }
}
H(v3, "splitMultiPartGeometryFeatureWithNewId");
function la(e, t, r, n) {
  let i = /* @__PURE__ */ new Map();
  for (let { feature: s, floorId: a4 } of e) {
    let f = s.properties.id, p = n.get(f);
    if (t.has(f)) {
      let d = v3(s, r(f), p), l = d.map((g) => g.properties.id), m4 = l.map((g) => ({ geometryId: g, floorId: a4 }));
      i.set(f, { ids: l, features: d, anchors: m4 });
    }
  }
  return i;
}
H(la, "mapGeometryToOtherIds");
function f1(e) {
  var p, d, l;
  let t = { space: /* @__PURE__ */ new Map(), obstruction: /* @__PURE__ */ new Map(), area: /* @__PURE__ */ new Map(), window: /* @__PURE__ */ new Map() };
  if (!e.geometry) return t;
  let r = new Map(Object.values((p = e.kinds) != null ? p : {}).filter((m4) => m4 !== void 0).flatMap(_e)), n = _e(e.geometry).flatMap(([m4, g]) => {
    var b;
    return ((b = g == null ? void 0 : g.features) != null ? b : []).map((P4) => ({ feature: P4, floorId: m4 }));
  }).flat(), i = new Set(Object.values((d = e.walkable) != null ? d : {}).filter((m4) => m4 !== void 0).flatMap(Ee)), s = new Set(Object.values((l = e.nonwalkable) != null ? l : {}).filter((m4) => m4 !== void 0).flatMap(Ee)), a4 = new Set(Array.from(r.entries()).filter(([m4, g]) => g === "area").map(([m4]) => m4)), f = new Set(Array.from(r.entries()).filter(([m4, g]) => g === "window").map(([m4]) => m4));
  return i.size > 0 && (t.space = la(n, i, c1, r)), s.size > 0 && (t.obstruction = la(n, s, S3, r)), a4.size > 0 && (t.area = la(n, a4, T3, r)), f.size > 0 && (t.window = la(n, f, E3, r)), i.size === 0 && s.size === 0 && a4.size === 0 && (t.space = la(n, new Set(n.map((m4) => m4.feature.properties.id)), c1, r)), t;
}
H(f1, "createGeometryMaps");
function u1(e) {
  let t = A3(e), r = f1(e), n = j3(e);
  return { geometryMaps: r, nodesByGeometryId: t, geometryFeatureById: n };
}
H(u1, "buildBuilderOptions");
function A3(e) {
  var r, n, i;
  let t = /* @__PURE__ */ new Map();
  for (let s of Object.values((r = e.nodes) != null ? r : {})) for (let a4 of (n = s == null ? void 0 : s.features) != null ? n : []) if (a4.properties.geometryIds.length > 0) for (let f of a4.properties.geometryIds) {
    let p = (i = t.get(f)) != null ? i : [];
    p.push(a4.properties.id), t.set(f, p);
  }
  return t;
}
H(A3, "buildNodesByGeometryId");
function j3(e) {
  var r, n;
  let t = /* @__PURE__ */ new Map();
  for (let i of Object.values((r = e.geometry) != null ? r : {})) for (let s of (n = i == null ? void 0 : i.features) != null ? n : []) t.set(s.properties.id, s);
  return t;
}
H(j3, "buildGeometryFeatureById");
a();
function p1(e, t) {
  if (!e.annotations || !e.annotationSymbols || !e.geometry) return {};
  let r = {};
  for (let [n, i] of _e(e.annotations)) {
    if (!i || i.length === 0 || !e.geometry[n] || e.geometry[n].features.length === 0) continue;
    let s = new Map(e.geometry[n].features.map((f) => [f.properties.id, f])), a4 = { type: "FeatureCollection", features: [] };
    for (let f of i) {
      let p = s.get(f.geometryId);
      if (!p || p.geometry.type !== "Point") continue;
      let d = { id: f.id, externalId: f.externalId, symbolId: f.symbolKey };
      a4.features.push({ type: "Feature", geometry: p.geometry, properties: d });
    }
    r[n] = a4;
  }
  return { annotation: r };
}
H(p1, "buildAnnotations");
a();
function l1(e, { nodesByGeometryId: t }) {
  var a4, f, p, d, l, m4, g;
  let r = { "connection.json": [], entrance: {} }, n = (a4 = e.navigationFlags) == null ? void 0 : a4[ph.accessible], i = (f = e.navigationFlags) == null ? void 0 : f[ph.outdoors], s = new Map(Object.values((p = e.geometry) != null ? p : {}).flatMap((b) => {
    var P4;
    return (P4 = b == null ? void 0 : b.features) != null ? P4 : [];
  }).map((b) => [b.properties.id, b]));
  for (let b of (d = e.connections) != null ? d : []) {
    if (gh(b, s)) {
      let O4 = k3(b, s, t, i);
      for (let [N4, A] of O4) r.entrance[N4] || (r.entrance[N4] = { type: "FeatureCollection", features: [] }), r.entrance[N4].features.push(A);
      continue;
    }
    let P4 = n != null && b.entrances.every((O4) => es(O4, n)) && b.exits.every((O4) => es(O4, n)), F4 = Array.from(new Set([...b.entrances.map((O4) => t.get(O4.geometryId)), ...b.exits.map((O4) => t.get(O4.geometryId))].flat().filter((O4) => O4 != null))), w = { id: b.id, externalId: (m4 = (l = b.details) == null ? void 0 : l.externalId) != null ? m4 : "", type: b.type, accessible: P4, nodes: F4 };
    (g = b.details) != null && g.name && (w.details = { name: b.details.name }), b.extra && (w.extra = b.extra), r["connection.json"].push(w);
  }
  return r;
}
H(l1, "buildConnections");
function gh(e, t) {
  return e.type == dh.door && e.entrances.every((r) => {
    let n = t.get(r.geometryId);
    return (n == null ? void 0 : n.geometry.type) === "LineString";
  });
}
H(gh, "isLineDoor");
function k3(e, t, r, n) {
  var s, a4;
  if (e.type !== dh.door) return [];
  let i = [];
  for (let f of e.entrances) {
    let p = t.get(f.geometryId);
    if ((p == null ? void 0 : p.geometry.type) === "LineString") {
      let d = { type: "Feature", geometry: p.geometry, properties: { id: e.id, externalId: (a4 = (s = e.details) == null ? void 0 : s.externalId) != null ? a4 : "", isExterior: _3(e, n) } }, l = e.details;
      l && (d.properties.details = { name: l.name, description: l.description }, l.icon && (d.properties.details.images = [{ url: l.icon, altText: "".concat(l.name, " icon") }]));
      let m4 = r.get(f.geometryId);
      m4 && m4.length > 0 && (d.properties.node = m4[0]), i.push([f.floorId, d]);
    }
  }
  return i;
}
H(k3, "buildEntranceFeaturesFromConnection");
function _3(e, t) {
  return e.entrances.some((r) => es(r, t)) || e.exits.some((r) => es(r, t));
}
H(_3, "isExterior");
a();
function m1(e, { geometryMaps: t, nodesByGeometryId: r }) {
  var N4, A, k, R3, V4, J4, D, U4, ae, se, M3, le, ce, Te, Ie, Ke, ft, xe, xt, bt, Ft, St, ht;
  if (!e.enterprise) return {};
  let n = { categories: [], locations: [], locationInstances: [], layers: [], venue: { slug: "", name: "", externalId: "", defaultLanguage: { name: "", code: "" }, languages: [] } }, i = (N4 = e.manifest) == null ? void 0 : N4.features[0];
  if (i && (n.venue.defaultFloor = i.properties.defaultFloor, n.venue.tzid = i.properties.tzid, n.venue.name = i.properties.name), e.enterprise.venue) {
    let X = e.enterprise.venue;
    n.venue = G(F({}, n.venue), { slug: X.slug, name: (A = X.details.name) != null ? A : n.venue.name, externalId: (k = X.details.externalId) != null ? k : "", defaultLanguage: X.defaultLanguage, languages: X.languages, countrycode: X.countrycode, coverImage: X.coverImage, logo: X.logo, icon: X.details.icon, extra: X.extra, mappedinWebUrl: X.mappedinWebUrl, operationHours: X.operationHours, topLocations: X.topLocations });
  }
  let s = /* @__PURE__ */ new Map(), a4 = /* @__PURE__ */ new Map(), f = e.locations, p = e.enterprise.locations;
  if (f && p) {
    let X = new Map(f.map((ee) => [ee.id, ee]));
    for (let ee of p) {
      let Z = X.get(ee.locationId);
      if (Z) {
        let te = Z.details, I4 = { id: ee.id, name: te.name, externalId: (R3 = te.externalId) != null ? R3 : "", type: ee.type, sortOrder: ee.sortOrder, amenity: ee.amenity, description: te.description, extra: Z.extra, links: Z.links, operationHours: Z.openingHours, gallery: ee.gallery, logo: Z.logo, shortName: te.shortName, picture: ee.picture, showFloatingLabelWhenImagePresent: ee.showFloatingLabelWhenImagePresent, showLogo: ee.showLogo, siblingGroups: ee.siblingGroups, states: ee.states, tags: ee.tags, spaces: [], nodes: [], polygons: [] };
        Z.phone && (I4.phone = { number: Z.phone });
        let _ = d1(Z.social);
        Z.website && (_.website = Z.website.url), I4.social = _;
        for (let $ of Z.geometryAnchors) {
          let K = t.space.get($.geometryId);
          if (K) {
            let q = new Set(K.features.filter((ie) => ie.geometry.type === "Polygon").map((ie) => ie.properties.id));
            for (let ie of K.anchors) I4.spaces.push({ floor: ie.floorId, id: ie.geometryId }), q.has(ie.geometryId) && I4.polygons.push({ map: ie.floorId, id: ie.geometryId });
          }
          let L3 = r.get($.geometryId);
          for (let q of L3 != null ? L3 : []) I4.nodes.push({ map: $.floorId, id: q });
        }
        n.locations.push(I4);
        for (let $ of Z.categories) s.set($, [...(V4 = s.get($)) != null ? V4 : [], ee.id]);
        a4.set(ee.id, Z.categories);
      }
    }
  }
  let d = e.enterprise.locationInstances, l = e.locationInstances;
  if (d && l) {
    let X = new Map(l.map((Z) => [Z.id, Z])), ee = [];
    for (let Z of d) {
      let te = X.get(Z.locationInstanceId);
      if (te) {
        let I4 = { id: Z.id, parent: Z.parentId, name: (J4 = te.details) == null ? void 0 : J4.name, externalId: (D = te.details) == null ? void 0 : D.externalId, type: Z.type, sortOrder: Z.sortOrder, amenity: Z.amenity, description: (U4 = te.details) == null ? void 0 : U4.description, extra: te.extra, links: te.links, operationHours: te.openingHours, gallery: Z.gallery, picture: Z.picture, showFloatingLabelWhenImagePresent: Z.showFloatingLabelWhenImagePresent, showLogo: Z.showLogo, siblingGroups: Z.siblingGroups, states: Z.states, tags: Z.tags, logo: te.logo, shortName: (ae = te.details) == null ? void 0 : ae.shortName };
        te.phone && (I4.phone = { number: te.phone });
        let _ = d1((se = te.social) != null ? se : []);
        if (te.website && (_.website = te.website.url), Object.keys(_).length > 0 && (I4.social = _), (M3 = te.geometryAnchors) != null && M3.length) {
          let $ = te.geometryAnchors.flatMap((K) => {
            var L3, q;
            return (q = (L3 = t.space.get(K.geometryId)) == null ? void 0 : L3.anchors) != null ? q : [];
          });
          $.length > 0 && (I4.spaces = $.map((K) => ({ floor: K.floorId, id: K.geometryId })));
        }
        if (te.geometryAnchors) {
          I4.spaces = [], I4.polygons = [], I4.nodes = [];
          for (let $ of te.geometryAnchors) {
            let K = t.space.get($.geometryId);
            if (K) {
              let q = new Set(K.features.filter((ie) => ie.geometry.type === "Polygon").map((ie) => ie.properties.id));
              for (let ie of K.anchors) I4.spaces.push({ floor: ie.floorId, id: ie.geometryId }), q.has(ie.geometryId) && I4.polygons.push({ map: ie.floorId, id: ie.geometryId });
            }
            let L3 = r.get($.geometryId);
            for (let q of L3 != null ? L3 : []) I4.nodes.push({ map: $.floorId, id: q });
          }
        }
        ee.push(I4);
      }
    }
    ee.length > 0 && (n.locationInstances = ee);
  }
  let m4 = e.locationCategories, g = e.enterprise.categories;
  if (m4 && g) {
    let X = [], ee = new Map(m4.map((_) => [_.id, _])), Z = new Map(g.map((_) => [_.categoryId, _.id])), te = /* @__PURE__ */ new Map();
    for (let _ of m4) {
      let $ = Z.get(_.parent);
      if ($) {
        let K = (le = te.get($)) != null ? le : [];
        K.push(_.id), te.set($, K);
      }
    }
    for (let _ of g) {
      let $ = ee.get(_.categoryId);
      if ($) {
        let L3 = ((ce = te.get(_.id)) != null ? ce : []).map((ie) => Z.get(ie)).filter((ie) => ie !== void 0), q = { id: _.id, name: $.details.name, externalId: (Te = $.details.externalId) != null ? Te : "", sortOrder: _.sortOrder, children: L3, locations: (Ie = s.get(_.categoryId)) != null ? Ie : [], icon: $.details.icon, picture: _.picture, color: _.color, extra: $.extra, iconFromDefaultList: _.iconFromDefaultList };
        X.push(q);
      }
    }
    n.categories = X;
    let I4 = {};
    for (let [_, $] of a4.entries()) I4[_] = $.map((K) => Z.get(K)).filter((K) => K !== void 0);
    n.categoryPriorities = I4;
  }
  let b = {};
  for (let [X, ee] of Object.entries((Ke = e.defaultStyle) != null ? Ke : {})) if (ee.buffer > 0) {
    let Z = ee.geometryAnchors.flatMap((te) => {
      var I4, _;
      return (_ = (I4 = t.space.get(te.geometryId)) == null ? void 0 : I4.anchors) != null ? _ : [];
    });
    b[X] = { edgeOffset: ee.buffer, geometryAnchors: Z };
  }
  Object.keys(b).length > 0 && (n.enterpriseStyles = b);
  let P4 = /* @__PURE__ */ new Map();
  for (let X of Object.values((ft = e.enterprise.layers) != null ? ft : {})) if (X) for (let [ee, Z] of _e(X)) {
    if (typeof Z != "string") continue;
    let te = (xe = P4.get(Z)) != null ? xe : { name: Z, id: "ely_".concat(Z), spaces: [] };
    te.spaces.push(...(bt = (xt = t.space.get(ee)) == null ? void 0 : xt.anchors.map((I4) => ({ floorId: I4.floorId, spaceId: I4.geometryId }))) != null ? bt : []), P4.set(Z, te);
  }
  P4.size > 0 && (n.layers = Array.from(P4.values()));
  let F$1 = [];
  for (let X of Object.values((Ft = e.enterprise.textures) != null ? Ft : {})) for (let ee of X) {
    let Z = (St = t.space.get(ee.geometryId)) == null ? void 0 : St.anchors;
    !Z || Z.length < 1 || ee.face === "unknown" || ee.surface === "unknown" || F$1.push({ repeat: ee.repeat, offset: ee.offset, rotation: ee.rotation, path: ee.path, face: ee.face, surface: ee.surface, bounds: ee.bounds, geometryAnchors: Z });
  }
  F$1.length > 0 && (n.textures = F$1);
  let w = {};
  for (let [X, ee] of Object.entries((ht = e.enterprise.floorText) != null ? ht : {})) {
    let Z = { type: "FeatureCollection", features: [] };
    for (let te of ee.features) {
      if (te.properties.align === "unknown") continue;
      let I4 = { align: te.properties.align, color: te.properties.color, fontFamily: te.properties.fontFamily, fontSize: te.properties.fontSize, rotation: te.properties.rotation, text: te.properties.text, visible: te.properties.visible };
      "geometryId" in te.properties ? I4.geometryId = te.properties.geometryId : I4.verticalOffset = te.properties.verticalOffset, Z.features.push({ type: "Feature", geometry: te.geometry, properties: I4 });
    }
    Z.features.length > 0 && (w[X] = Z);
  }
  Object.keys(w).length > 0 && (n.floorText = w);
  let O4 = { enterprise: n };
  if (e.enterprise.textAreas) {
    let X = {};
    for (let [ee, Z] of _e(e.enterprise.textAreas)) {
      let te = { type: "FeatureCollection", features: [] };
      for (let I4 of Z.features) {
        if (I4.properties.align === "unknown") continue;
        let _ = { align: I4.properties.align, maxWidth: I4.properties.maxWidth, maxHeight: I4.properties.maxHeight, rotation: I4.properties.rotation };
        "geometryId" in I4.properties ? _.anchorId = I4.properties.geometryId : _.verticalOffset = I4.properties.verticalOffset;
        let $ = { type: "Feature", geometry: I4.geometry, properties: _ };
        te.features.push($);
      }
      X[ee] = te;
    }
    O4.textAreas = X;
  }
  return O4;
}
H(m1, "buildEnterprise");
var N3 = ["facebook", "instagram", "twitter"];
function d1(e) {
  let t = {};
  for (let { name: r, url: n } of e) {
    let i = r.toLowerCase();
    N3.includes(i) && (t[i] = n);
  }
  return t;
}
H(d1, "convertSocials");
a();
function y1(e, { geometryMaps: t }) {
  if (!e.facade) return {};
  let r = {}, n = {};
  for (let [i, s] of _e(e.facade)) s && (n[i] = { id: s.id, spaces: s.geometryAnchors.flatMap(({ floorId: a4, geometryId: f }) => {
    var p;
    return (p = t.space.get(f)) == null ? void 0 : p.ids.map((d) => ({ floorId: a4, spaceId: d }));
  }).filter((a4) => a4 !== void 0) });
  return Object.keys(n).length > 0 && (r.facade = n), r;
}
H(y1, "buildFacade");
a();
function h1(e, t = {}) {
  var i, s, a4, f, p, d, l, m4, g, b, P4, F4;
  let r = { type: "FeatureCollection", features: [] }, n = [];
  for (let w of e.floors.features) n.push({ id: w.properties.id.replace(/^f_/, "m_"), externalId: (s = (i = w.properties.details) == null ? void 0 : i.externalId) != null ? s : "", elevation: w.properties.elevation, name: (f = (a4 = w.properties.details) == null ? void 0 : a4.name) != null ? f : "", shortName: (d = (p = w.properties.details) == null ? void 0 : p.shortName) != null ? d : "", subtitle: w.properties.subtitle }), r.features.push({ type: "Feature", geometry: w.geometry, properties: { id: w.properties.id, externalId: (m4 = (l = w.properties.details) == null ? void 0 : l.externalId) != null ? m4 : "", elevation: w.properties.elevation, name: (b = (g = w.properties.details) == null ? void 0 : g.name) != null ? b : "", shortName: (F4 = (P4 = w.properties.details) == null ? void 0 : P4.shortName) != null ? F4 : "", subtitle: w.properties.subtitle } });
  return { "floor.geojson": r, "map.geojson": n };
}
H(h1, "buildFloors");
a();
function g1(e, { geometryMaps: t }) {
  var i, s, f, p, d;
  let r = {}, n = {};
  for (let [l, m4] of _e((i = e.floorImages) != null ? i : {})) {
    let g = { features: [], type: "FeatureCollection" };
    for (let b of (s = m4 == null ? void 0 : m4.features) != null ? s : []) if ("verticalOffset" in b.properties) g.features.push(b);
    else {
      let a4 = b.properties, { geometryId: P4 } = a4, F$1 = J(a4, ["geometryId"]), w = (d = (f = t.space.get(P4)) == null ? void 0 : f.ids[0]) != null ? d : (p = t.obstruction.get(P4)) == null ? void 0 : p.ids[0];
      if (!w) continue;
      let O4 = { geometry: b.geometry, properties: G(F({}, F$1), { anchorId: w }), type: b.type };
      g.features.push(O4);
    }
    n[l] = g;
  }
  return Object.keys(n).length > 0 && (r.floorImages = n), r;
}
H(g1, "buildFloorImages");
a();
function I1(e, t = {}) {
  var i, s, a4, f, p, d, l;
  let r = [];
  for (let m4 of (i = e == null ? void 0 : e.floorStacks) != null ? i : []) {
    let g = { id: m4.id, floors: m4.floors, maps: m4.floors, externalId: (a4 = (s = m4.details) == null ? void 0 : s.externalId) != null ? a4 : "", name: (p = (f = m4.details) == null ? void 0 : f.name) != null ? p : "", shortName: (l = (d = m4.details) == null ? void 0 : d.shortName) != null ? l : "", type: "Building" };
    m4.defaultFloor && (g.defaultFloor = m4.defaultFloor), r.push(g);
  }
  if (e.outdoors) {
    let m4 = { id: "outdoors", floors: e.outdoors.floors, maps: e.outdoors.floors, type: "Outdoor", name: "Outdoors", externalId: "outdoors" };
    r.push(m4);
  }
  return { "floorstack.json": r, "mapstack.geojson": r };
}
H(I1, "buildFloorStacks");
a();
a();
var $1 = N(b1(), 1);
var U3 = H((e) => {
  let t = e.geometry.coordinates[0], r = 0;
  for (let n = 0; n < t.length - 1; n++) r += t[n][0] * t[n + 1][1] - t[n + 1][0] * t[n][1];
  return Math.abs(r / 2);
}, "calculateArea"), D3 = H((e, t) => {
  let [r, n] = e, i = t.geometry.coordinates[0], s = false;
  for (let a4 = 0, f = i.length - 1; a4 < i.length; f = a4++) {
    let [p, d] = i[a4], [l, m4] = i[f];
    d > n != m4 > n && r < (l - p) * (n - d) / (m4 - d) + p && (s = !s);
  }
  return s;
}, "pointInPolygon"), q3 = H((e) => {
  let t = e.geometry.coordinates[0], r = 0, n = 0;
  for (let i = 0; i < t.length - 1; i++) r += t[i][0], n += t[i][1];
  return { geometry: { coordinates: [r / (t.length - 1), n / (t.length - 1)] } };
}, "calculateCenterOfMass"), K3 = H((e) => {
  let t = U3(e), r = Number.isFinite(t) ? Math.max(t, 1) : 1;
  return Math.sqrt(r) * 1e-6;
}, "estimatePrecision"), du = H((e) => {
  try {
    let r = q3(e).geometry.coordinates;
    if (!D3(r, e)) {
      let i = (0, $1.default)(e.geometry.coordinates, K3(e));
      return B([i[0], i[1]]);
    }
    return B(r);
  } catch (t) {
    return W(new Error("Unable to calculate center of polygon"));
  }
}, "labelCenter");
function xh(e) {
  var t;
  return ((t = e == null ? void 0 : e.geometry) == null ? void 0 : t.type) === "Polygon";
}
H(xh, "isPolygonFeature");
function w1(e, { geometryMaps: t, nodesByGeometryId: r }) {
  var d, l, m4, g, b, P4, F4, w, O4;
  let n = W3(e.defaultStyle), i = {}, s = {}, a4 = {}, f = {};
  for (let N4 of Ee(e.geometry)) {
    let A = e.geometry[N4];
    if (!A) continue;
    let k = [], R3 = [], V4 = [], J4 = [];
    for (let D of A.features) {
      let U4 = D.properties.id, ae = n.has(U4), se = (d = r.get(U4)) != null ? d : [];
      for (let M3 of (m4 = (l = t.space.get(U4)) == null ? void 0 : l.features) != null ? m4 : []) k.push(z3(M3, se));
      for (let M3 of (b = (g = t.obstruction.get(U4)) == null ? void 0 : g.features) != null ? b : []) R3.push(G3(M3, ae));
      for (let M3 of (F4 = (P4 = t.area.get(U4)) == null ? void 0 : P4.features) != null ? F4 : []) V4.push(B3(M3, se));
      for (let M3 of (O4 = (w = t.window.get(U4)) == null ? void 0 : w.features) != null ? O4 : []) J4.push(V3(M3));
    }
    k.length > 0 && (i[N4] = { type: "FeatureCollection", features: k.filter((D) => D !== null) }), R3.length > 0 && (s[N4] = { type: "FeatureCollection", features: R3.filter((D) => D !== null) }), V4.length > 0 && (a4[N4] = { type: "FeatureCollection", features: V4.filter((D) => D !== null) }), J4.length > 0 && (f[N4] = { type: "FeatureCollection", features: J4.filter((D) => D !== null) });
  }
  let p = { space: i, obstruction: s };
  return Object.keys(a4).length > 0 && (p.area = a4), Object.keys(f).length > 0 && (p.window = f), p;
}
H(w1, "buildGeometry");
function z3(e, t) {
  var n, i;
  switch (e.geometry.type) {
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
      return null;
  }
  let r = { type: "Feature", geometry: e.geometry, properties: { destinationNodes: t, id: e.properties.id, externalId: (i = (n = e.properties.details) == null ? void 0 : n.externalId) != null ? i : "", kind: e.properties.kind } };
  return e.properties.details && (r.properties.details = { name: e.properties.details.name, description: e.properties.details.description, images: e.properties.details.icon ? [{ url: e.properties.details.icon, altText: e.properties.details.name ? "".concat(e.properties.details.name, " icon") : "icon" }] : void 0 }), xh(r) && (r.properties.center = du(r).unwrapOr(void 0)), r;
}
H(z3, "buildSpace");
function G3(e, t) {
  var i, s;
  switch (e.geometry.type) {
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
    case "Point":
      return null;
  }
  let r = e.properties, n = { type: "Feature", geometry: e.geometry, properties: { id: r.id, externalId: (s = (i = r.details) == null ? void 0 : i.externalId) != null ? s : "", entrances: [], kind: r.kind, footprintComponent: t } };
  return xh(n) && (n.properties.center = du(n).unwrapOr(void 0)), r.details && (n.properties.details = { name: r.details.name, description: r.details.description, images: r.details.icon ? [{ url: r.details.icon, altText: r.details.name ? "".concat(r.details.name, " icon") : "icon" }] : void 0 }), n;
}
H(G3, "buildObstruction");
function B3(e, t) {
  var i, s;
  if (e.geometry.type !== "Polygon") return null;
  let r = e.properties, n = { type: "Feature", geometry: e.geometry, properties: { id: r.id, externalId: (s = (i = r.details) == null ? void 0 : i.externalId) != null ? s : "", destinationNodes: t } };
  return xh(n) && (n.properties.center = du(n).unwrapOr(void 0)), r.details && (n.properties.details = { name: r.details.name, description: r.details.description, images: r.details.icon ? [{ url: r.details.icon, altText: r.details.name ? "".concat(r.details.name, " icon") : "icon" }] : void 0 }), n;
}
H(B3, "buildArea");
function V3(e) {
  return e.geometry.type !== "LineString" ? null : { type: "Feature", geometry: e.geometry, properties: { id: e.properties.id } };
}
H(V3, "buildWindow");
function W3(e) {
  var n, i, s, a4;
  let t = [...(i = (n = e == null ? void 0 : e.ExteriorWalls) == null ? void 0 : n.geometryAnchors) != null ? i : [], ...(a4 = (s = e == null ? void 0 : e.Walls) == null ? void 0 : s.geometryAnchors) != null ? a4 : []];
  return new Set(t.map((f) => f.geometryId));
}
H(W3, "calculateFootprintGeometry");
a();
function P1(e, { geometryMaps: t, geometryFeatureById: r }) {
  var i, s, a4, f, p, d, l, m4, g, b, P4, F4, w;
  if (!e.locationCategories && !e.locations) return {};
  let n = {};
  if ((i = e.locationCategories) != null && i.length) {
    let O4 = [];
    for (let N4 of e.locationCategories) {
      let A = { id: N4.id, name: N4.details.name, icon: (s = N4.details.icon) != null ? s : "" };
      N4.parent && (A.parent = N4.parent), O4.push(A);
    }
    n["category.json"] = O4;
  }
  if ((a4 = e.locations) != null && a4.length) {
    let O4 = H3(e, { geometryFeatureById: r }), N4 = [];
    for (let A of e.locations) {
      let k = { id: A.id, name: A.details.name, categories: A.categories, spaces: [], obstructions: [], areas: [], annotations: [], connections: [], entrances: [], links: A.links, openingHoursSpecification: (f = A.openingHours) != null ? f : [], pictures: A.images, social: A.social, description: A.details.description, externalId: A.details.externalId, icon: A.details.icon, logo: A.logo, phone: A.phone, website: A.website };
      N4.push(k);
      for (let { geometryId: R3, floorId: V4 } of A.geometryAnchors) k.spaces.push(...(d = (p = t.space.get(R3)) == null ? void 0 : p.ids.map((J4) => ({ id: J4, floor: V4 }))) != null ? d : []), k.obstructions.push(...(m4 = (l = t.obstruction.get(R3)) == null ? void 0 : l.ids.map((J4) => ({ id: J4, floor: V4 }))) != null ? m4 : []), k.areas.push(...(b = (g = t.area.get(R3)) == null ? void 0 : g.ids.map((J4) => ({ id: J4, floor: V4 }))) != null ? b : []), k.entrances.push(...(P4 = O4.entrancesByGeometryId.get(R3)) != null ? P4 : []), k.connections.push(...(F4 = O4.connectionsByGeometryId.get(R3)) != null ? F4 : []), k.annotations.push(...(w = O4.annotationsByGeometryId.get(R3)) != null ? w : []);
    }
    n["location.json"] = N4;
  }
  return n;
}
H(P1, "buildLocations");
function H3(e, { geometryFeatureById: t }) {
  var n, i, s;
  let r = { annotationsByGeometryId: /* @__PURE__ */ new Map(), connectionsByGeometryId: /* @__PURE__ */ new Map(), entrancesByGeometryId: /* @__PURE__ */ new Map() };
  if (e.annotations) for (let [a4, f] of _e(e.annotations)) for (let p of f != null ? f : []) {
    let d = p.geometryId, l = p.id, m4 = (n = r.annotationsByGeometryId.get(d)) != null ? n : [];
    m4.push({ floor: a4, id: l }), r.annotationsByGeometryId.set(d, m4);
  }
  if (e.connections) for (let a4 of e.connections) {
    let f = gh(a4, t), p = Array.from(new Map([...a4.entrances, ...a4.exits].map((d) => ["".concat(d.geometryId, "_").concat(d.floorId), d])).values());
    for (let d of p) {
      let l = d.geometryId;
      if (f) {
        let m4 = (i = r.entrancesByGeometryId.get(l)) != null ? i : [];
        m4.push({ floor: d.floorId, id: a4.id }), r.entrancesByGeometryId.set(l, m4);
      } else {
        let m4 = (s = r.connectionsByGeometryId.get(l)) != null ? s : [];
        m4.push(a4.id), r.connectionsByGeometryId.set(l, m4);
      }
    }
  }
  return r;
}
H(H3, "buildLocationAttachmentMaps");
a();
function O1(e, t) {
  let r = { features: [], type: "FeatureCollection" }, n = { "manifest.geojson": r }, i = e.manifest;
  if (i.features.length > 0) {
    let s = i.features[0], a4 = s.properties, f = { type: "Feature", geometry: s.geometry, properties: { folder_struct: [], version: "2.0.0", time: a4.time, name: a4.name, naturalBearing: a4.naturalBearing, tzid: a4.tzid, map: a4.mapId, org_id: a4.orgId, language: a4.language } };
    r.features.push(f);
  }
  return n;
}
H(O1, "buildManifest");
a();
function F1(e, { geometryMaps: t }) {
  var f, p, d, l, m4, g, b, P4, F$1, w, O4, N4, A, k, R3;
  let r = { "node.geojson": { type: "FeatureCollection", features: [] } }, n = r["node.geojson"].features, i = /* @__PURE__ */ new Map();
  for (let V4 of (p = (f = e.floors) == null ? void 0 : f.features) != null ? p : []) i.set(V4.properties.id, V4.properties.elevation);
  let s = /* @__PURE__ */ new Map();
  for (let V4 of Object.values((d = e.nodes) != null ? d : {})) for (let J4 of (l = V4 == null ? void 0 : V4.features) != null ? l : []) for (let D of J4.properties.geometryIds) s.set(D, [...(m4 = s.get(D)) != null ? m4 : [], J4.properties.id]);
  let a4 = /* @__PURE__ */ new Map();
  for (let V4 of (g = e.connections) != null ? g : []) {
    let J4 = V4.exits.map((D) => {
      var U4;
      return G(F({}, D), { nodes: (U4 = s.get(D.geometryId)) != null ? U4 : [] });
    });
    for (let D of V4.entrances) {
      let U4 = (b = s.get(D.geometryId)) != null ? b : [];
      for (let ae of U4) for (let se of J4) {
        let M3 = Math.abs(((P4 = i.get(D.floorId)) != null ? P4 : 0) - ((F$1 = i.get(se.floorId)) != null ? F$1 : 0)) * V4.floorCostMultiplier, le = (w = a4.get(ae)) != null ? w : [];
        le.push(...se.nodes.map((ce) => ({ id: ce, weight: M3 + V4.entryCost }))), a4.set(ae, le);
      }
    }
  }
  for (let [V4, J4] of _e((O4 = e.nodes) != null ? O4 : {})) for (let D of (N4 = J4 == null ? void 0 : J4.features) != null ? N4 : []) {
    let U4 = (A = t.space.get(D.properties.geometryIds[0])) == null ? void 0 : A.features[0], ae = (U4 == null ? void 0 : U4.geometry.type) === "Point" && ((k = U4 == null ? void 0 : U4.properties.details) != null && k.externalId) ? U4.properties.details.externalId : "", se = { type: "Feature", geometry: D.geometry, properties: { id: D.properties.id, floor: V4, space: D.properties.geometryIds.map((M3) => {
      var le;
      return (le = t.space.get(M3)) == null ? void 0 : le.ids;
    }).flat().filter((M3) => M3 !== void 0), neighbors: [...D.properties.neighbors.map((M3) => ({ id: M3.id, weight: M3.extraCost })), ...(R3 = a4.get(D.properties.id)) != null ? R3 : []], map: V4, externalId: ae } };
    n.push(se);
  }
  return r;
}
H(F1, "buildNodes");
a();
function Z3(e, t) {
  let r = {};
  for (let i of e) {
    let s = t.get(i);
    s && (r[s] != null || (r[s] = []), r[s].push(i));
  }
  return r;
}
H(Z3, "groupGeometryByType");
function S1(e, { geometryMaps: t }) {
  var a4, f, p;
  if (!e.defaultStyle) return {};
  let r = {}, n = {};
  r["styles.json"] = n;
  let i = [...Array.from(t.space.values()).map((d) => d.features), ...Array.from(t.obstruction.values()).map((d) => d.features)], s = new Map(i.flatMap((d) => d.map((l) => [l.properties.id, l.geometry.type])));
  for (let [d, l] of _e(e.defaultStyle)) {
    let m4 = Z3(l.geometryAnchors.flatMap((g) => {
      var b, P4, F4, w;
      return [...(P4 = (b = t.space.get(g.geometryId)) == null ? void 0 : b.ids) != null ? P4 : [], ...(w = (F4 = t.obstruction.get(g.geometryId)) == null ? void 0 : F4.ids) != null ? w : []];
    }), s);
    if (m4.Point && m4.Point.length > 0) {
      let g = { points: Array.from(m4.Point.values()), showImage: ((a4 = l.extra) == null ? void 0 : a4.showImage) !== void 0 ? ((f = l.extra) == null ? void 0 : f.showImage) === true : l.opacity !== 0 };
      n["".concat(d, ".Point")] = g;
    }
    if (m4.LineString && m4.LineString.length > 0) {
      let g = { lineStrings: Array.from(m4.LineString.values()), altitude: l.altitude, color: l.color, height: l.height, opacity: l.opacity, width: l.buffer };
      n["".concat(d, ".LineString")] = g;
    }
    if (m4.Polygon && m4.Polygon.length > 0) {
      let g = { polygons: Array.from(m4.Polygon.values()), altitude: l.altitude, color: l.color, height: l.height, opacity: l.opacity };
      ((p = l.extra) == null ? void 0 : p.showImage) !== void 0 && (g.showImage = l.extra.showImage === true), n["".concat(d, ".Polygon")] = g;
    }
  }
  return r;
}
H(S1, "buildStyles");
var J3 = mE().extendOptional(lT).extendOptional(ZT).extendOptional(xT).extendOptional(zT).extendOptional(a1).extendOptional(PT).extendOptional(TT).extendOptional(QT).extendOptional(r1).extendOptional(UT).extendOptional(kT).extendOptional(mS).extendOptional(PE).extendOptional(aT).build().expect("Invalid parser, this should never happen. Likely a bug in the MVFv2 library, or one of the extensions.");
function Y3(e) {
  let t = u1(e), r = h1(e, t), n = w1(e, t), i = F1(e, t), s = l1(e, t), a4 = S1(e, t), f = I1(e, t), p = g1(e, t), d = y1(e, t), l = p1(e), m4 = P1(e, t), g = m1(e, t), b = O1(e);
  return F(F(F(F(F(F(G(F(F(F(F(F(F({}, r), n), i), s), a4), f), { "tileset.json": e.tileset }), p), d), l), m4), g), b);
}
H(Y3, "convertUnzippedStandardMVFv3ToParsedMVFv2");
async function X3(e) {
  let t = await J3.decompress(e);
  return t.isOk() ? B(Y3(t.value)) : W(t.error);
}
H(X3, "extractAndConvertMVFv3");
H((e) => {
  try {
    return LP(e) ? Oh(e) : false;
  } catch (t) {
    return false;
  }
}, "check");
export {
  Aa as AnchoredFloorTextUnknownObstructionError,
  va as AnchoredFloorTextUnknownSpaceError,
  ja as AnchoredImageUnknownObstructionError,
  Ta as AnchoredImageUnknownSpaceError,
  ba as ConnectionUnknownNodeError,
  Ba as DuplicateTilesetKeyError,
  Da as EnterpriseCyclicalCategoryReferenceError,
  Ua as EnterpriseInconsistentMapError,
  qa as EnterpriseInvalidTimeZoneError,
  _a as EnterpriseLayerUnknownSpaceError,
  Ma as EnterpriseLocationUnknownSpaceError,
  Na as EnterpriseStyleGeometryAnchorsUnknownSpaceError,
  Ra as EnterpriseTextureUnknownSpaceError,
  La as EnterpriseUnknownCategoryError,
  ns as EnterpriseUnknownLocationError,
  os as EnterpriseUnknownMapError,
  za as FacadeUnknownFloorError,
  Ka as FacadeUnknownFloorStackError,
  Ga as FacadeUnknownSpaceError,
  ya as FloorStackUnknownMapError,
  $t as IntegrityError,
  Ea as InvalidStyleError,
  $a as NodeUnknownFloorError,
  Pa as NodeUnknownNeighborError,
  wa as NodeUnknownSpaceError,
  Ia as ObstructionCollectionUnknownMapError,
  xa as ObstructionUnknownEntranceError,
  ha as SpaceCollectionUnknownMapError,
  ga as SpaceUnknownNodeError,
  Fa as StyleUnknownLineStringError,
  Sa as StyleUnknownPointError,
  Oa as StyleUnknownPolygonError,
  Ca as TextAreaUnknownObstructionError,
  ka as TextAreaUnknownSpaceError,
  X3 as extractAndConvertMVFv3,
  LP as validateMvf,
  Oh as verifyMvfIntegrity
};
