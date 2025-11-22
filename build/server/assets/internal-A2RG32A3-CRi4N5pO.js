import { Q as Q$1, O as O$1, R as R$1, o as or, S, b as Q$2, N, P as P$1, H as H$1, z as z3, $ as $l, c as Vg, d as Ps, n as nl, K as Kg, G as G$1, F as F$1, a } from "./_virtual_netlify-server-CRqbjBQB.js";
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
import "@radix-ui/react-slider";
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
var Ce = "ENTRIES", pe = "KEYS", me = "VALUES", w = "", H = class H2 {
  constructor(e, t) {
    let s = e._tree, i = Array.from(s.keys());
    this.set = e, this._type = t, this._path = i.length > 0 ? [{ node: s, keys: i }] : [];
  }
  next() {
    let e = this.dive();
    return this.backtrack(), e;
  }
  dive() {
    if (this._path.length === 0) return { done: true, value: void 0 };
    let { node: e, keys: t } = F(this._path);
    if (F(t) === w) return { done: false, value: this.result() };
    let s = e.get(F(t));
    return this._path.push({ node: s, keys: Array.from(s.keys()) }), this.dive();
  }
  backtrack() {
    if (this._path.length === 0) return;
    let e = F(this._path).keys;
    e.pop(), !(e.length > 0) && (this._path.pop(), this.backtrack());
  }
  key() {
    return this.set._prefix + this._path.map(({ keys: e }) => F(e)).filter((e) => e !== w).join("");
  }
  value() {
    return F(this._path).node.get(w);
  }
  result() {
    switch (this._type) {
      case me:
        return this.value();
      case pe:
        return this.key();
      default:
        return [this.key(), this.value()];
    }
  }
  [Symbol.iterator]() {
    return this;
  }
};
H$1(H, "TreeIterator");
var L = H, F = H$1((r) => r[r.length - 1], "last$1"), Le = H$1((r, e, t) => {
  let s = /* @__PURE__ */ new Map();
  if (e === void 0) return s;
  let i = e.length + 1, n = i + t, o = new Uint8Array(n * i).fill(t + 1);
  for (let c = 0; c < i; ++c) o[c] = c;
  for (let c = 1; c < n; ++c) o[c * i] = c;
  return ge(r, e, t, s, o, 1, i, ""), s;
}, "fuzzySearch"), ge = H$1((r, e, t, s, i, n, o, c) => {
  let a2 = n * o;
  e: for (let u of r.keys()) if (u === w) {
    let l = i[a2 - 1];
    l <= t && s.set(c, [r.get(u), l]);
  } else {
    let l = n;
    for (let f = 0; f < u.length; ++f, ++l) {
      let d = u[f], m = o * l, S2 = m - o, p = i[m], g = Math.max(0, l - t - 1), x = Math.min(o - 1, l + t);
      for (let b = g; b < x; ++b) {
        let W = d !== e[b], B = i[S2 + b] + +W, A = i[S2 + b + 1] + 1, z = i[m + b] + 1, C = i[m + b + 1] = Math.min(B, A, z);
        C < p && (p = C);
      }
      if (p > t) continue e;
    }
    ge(r.get(u), e, t, s, i, l, o, c + u);
  }
}, "recurse"), I = class I2 {
  constructor(e = /* @__PURE__ */ new Map(), t = "") {
    this._size = void 0, this._tree = e, this._prefix = t;
  }
  atPrefix(e) {
    if (!e.startsWith(this._prefix)) throw new Error("Mismatched prefix");
    let [t, s] = j(this._tree, e.slice(this._prefix.length));
    if (t === void 0) {
      let [i, n] = Y(s);
      for (let o of i.keys()) if (o !== w && o.startsWith(n)) {
        let c = /* @__PURE__ */ new Map();
        return c.set(o.slice(n.length), i.get(o)), new I2(c, e);
      }
    }
    return new I2(t, e);
  }
  clear() {
    this._size = void 0, this._tree.clear();
  }
  delete(e) {
    return this._size = void 0, Oe(this._tree, e);
  }
  entries() {
    return new L(this, Ce);
  }
  forEach(e) {
    for (let [t, s] of this) e(t, s, this);
  }
  fuzzyGet(e, t) {
    return Le(this._tree, e, t);
  }
  get(e) {
    let t = U(this._tree, e);
    return t !== void 0 ? t.get(w) : void 0;
  }
  has(e) {
    let t = U(this._tree, e);
    return t !== void 0 && t.has(w);
  }
  keys() {
    return new L(this, pe);
  }
  set(e, t) {
    if (typeof e != "string") throw new Error("key must be a string");
    return this._size = void 0, $(this._tree, e).set(w, t), this;
  }
  get size() {
    if (this._size) return this._size;
    this._size = 0;
    let e = this.entries();
    for (; !e.next().done; ) this._size += 1;
    return this._size;
  }
  update(e, t) {
    if (typeof e != "string") throw new Error("key must be a string");
    this._size = void 0;
    let s = $(this._tree, e);
    return s.set(w, t(s.get(w))), this;
  }
  fetch(e, t) {
    if (typeof e != "string") throw new Error("key must be a string");
    this._size = void 0;
    let s = $(this._tree, e), i = s.get(w);
    return i === void 0 && s.set(w, i = t()), i;
  }
  values() {
    return new L(this, me);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  static from(e) {
    let t = new I2();
    for (let [s, i] of e) t.set(s, i);
    return t;
  }
  static fromObject(e) {
    return I2.from(Object.entries(e));
  }
};
H$1(I, "SearchableMap");
var O = I, j = H$1((r, e, t = []) => {
  if (e.length === 0 || r == null) return [r, t];
  for (let s of r.keys()) if (s !== w && e.startsWith(s)) return t.push([r, s]), j(r.get(s), e.slice(s.length), t);
  return t.push([r, e]), j(void 0, "", t);
}, "trackDown"), U = H$1((r, e) => {
  if (e.length === 0 || r == null) return r;
  for (let t of r.keys()) if (t !== w && e.startsWith(t)) return U(r.get(t), e.slice(t.length));
}, "lookup"), $ = H$1((r, e) => {
  let t = e.length;
  e: for (let s = 0; r && s < t; ) {
    for (let n of r.keys()) if (n !== w && e[s] === n[0]) {
      let o = Math.min(t - s, n.length), c = 1;
      for (; c < o && e[s + c] === n[c]; ) ++c;
      let a2 = r.get(n);
      if (c === n.length) r = a2;
      else {
        let u = /* @__PURE__ */ new Map();
        u.set(n.slice(c), a2), r.set(e.slice(s, s + c), u), r.delete(n), r = u;
      }
      s += c;
      continue e;
    }
    let i = /* @__PURE__ */ new Map();
    return r.set(e.slice(s), i), i;
  }
  return r;
}, "createPath"), Oe = H$1((r, e) => {
  let [t, s] = j(r, e);
  if (t !== void 0) {
    if (t.delete(w), t.size === 0) _e(s);
    else if (t.size === 1) {
      let [i, n] = t.entries().next().value;
      ye(s, i, n);
    }
  }
}, "remove"), _e = H$1((r) => {
  if (r.length === 0) return;
  let [e, t] = Y(r);
  if (e.delete(t), e.size === 0) _e(r.slice(0, -1));
  else if (e.size === 1) {
    let [s, i] = e.entries().next().value;
    s !== w && ye(r.slice(0, -1), s, i);
  }
}, "cleanup"), ye = H$1((r, e, t) => {
  if (r.length === 0) return;
  let [s, i] = Y(r);
  s.set(i + e, t), s.delete(i);
}, "merge"), Y = H$1((r) => r[r.length - 1], "last"), Z = "or", Se = "and", ke = "and_not", M = class M2 {
  constructor(e) {
    if ((e == null ? void 0 : e.fields) == null) throw new Error('MiniSearch: option "fields" must be provided');
    let t = e.autoVacuum == null || e.autoVacuum === true ? Q : e.autoVacuum;
    this._options = G$1(F$1(F$1({}, q), e), { autoVacuum: t, searchOptions: F$1(F$1({}, le), e.searchOptions || {}), autoSuggestOptions: F$1(F$1({}, Re), e.autoSuggestOptions || {}) }), this._index = new O(), this._documentCount = 0, this._documentIds = /* @__PURE__ */ new Map(), this._idToShortId = /* @__PURE__ */ new Map(), this._fieldIds = {}, this._fieldLength = /* @__PURE__ */ new Map(), this._avgFieldLength = [], this._nextId = 0, this._storedFields = /* @__PURE__ */ new Map(), this._dirtCount = 0, this._currentVacuum = null, this._enqueuedVacuum = null, this._enqueuedVacuumConditions = K, this.addFields(this._options.fields);
  }
  add(e) {
    let { extractField: t, tokenize: s, processTerm: i, fields: n, idField: o } = this._options, c = t(e, o);
    if (c == null) throw new Error('MiniSearch: document does not have ID field "'.concat(o, '"'));
    if (this._idToShortId.has(c)) throw new Error("MiniSearch: duplicate ID ".concat(c));
    let a2 = this.addDocumentId(c);
    this.saveStoredFields(a2, e);
    for (let u of n) {
      let l = t(e, u);
      if (l == null) continue;
      let f = s(l.toString(), u), d = this._fieldIds[u], m = new Set(f).size;
      this.addFieldLength(a2, d, this._documentCount - 1, m);
      for (let S2 of f) {
        let p = i(S2, u);
        if (Array.isArray(p)) for (let g of p) this.addTerm(d, a2, g);
        else p && this.addTerm(d, a2, p);
      }
    }
  }
  addAll(e) {
    for (let t of e) this.add(t);
  }
  addAllAsync(e, t = {}) {
    let { chunkSize: s = 10 } = t, i = { chunk: [], promise: Promise.resolve() }, { chunk: n, promise: o } = e.reduce(({ chunk: c, promise: a2 }, u, l) => (c.push(u), (l + 1) % s === 0 ? { chunk: [], promise: a2.then(() => new Promise((f) => setTimeout(f, 0))).then(() => this.addAll(c)) } : { chunk: c, promise: a2 }), i);
    return o.then(() => this.addAll(n));
  }
  remove(e) {
    let { tokenize: t, processTerm: s, extractField: i, fields: n, idField: o } = this._options, c = i(e, o);
    if (c == null) throw new Error('MiniSearch: document does not have ID field "'.concat(o, '"'));
    let a2 = this._idToShortId.get(c);
    if (a2 == null) throw new Error("MiniSearch: cannot remove document with ID ".concat(c, ": it is not in the index"));
    for (let u of n) {
      let l = i(e, u);
      if (l == null) continue;
      let f = t(l.toString(), u), d = this._fieldIds[u], m = new Set(f).size;
      this.removeFieldLength(a2, d, this._documentCount, m);
      for (let S2 of f) {
        let p = s(S2, u);
        if (Array.isArray(p)) for (let g of p) this.removeTerm(d, a2, g);
        else p && this.removeTerm(d, a2, p);
      }
    }
    this._storedFields.delete(a2), this._documentIds.delete(a2), this._idToShortId.delete(c), this._fieldLength.delete(a2), this._documentCount -= 1;
  }
  removeAll(e) {
    if (e) for (let t of e) this.remove(t);
    else {
      if (arguments.length > 0) throw new Error("Expected documents to be present. Omit the argument to remove all documents.");
      this._index = new O(), this._documentCount = 0, this._documentIds = /* @__PURE__ */ new Map(), this._idToShortId = /* @__PURE__ */ new Map(), this._fieldLength = /* @__PURE__ */ new Map(), this._avgFieldLength = [], this._storedFields = /* @__PURE__ */ new Map(), this._nextId = 0;
    }
  }
  discard(e) {
    let t = this._idToShortId.get(e);
    if (t == null) throw new Error("MiniSearch: cannot discard document with ID ".concat(e, ": it is not in the index"));
    this._idToShortId.delete(e), this._documentIds.delete(t), this._storedFields.delete(t), (this._fieldLength.get(t) || []).forEach((s, i) => {
      this.removeFieldLength(t, i, this._documentCount, s);
    }), this._fieldLength.delete(t), this._documentCount -= 1, this._dirtCount += 1, this.maybeAutoVacuum();
  }
  maybeAutoVacuum() {
    if (this._options.autoVacuum === false) return;
    let { minDirtFactor: e, minDirtCount: t, batchSize: s, batchWait: i } = this._options.autoVacuum;
    this.conditionalVacuum({ batchSize: s, batchWait: i }, { minDirtCount: t, minDirtFactor: e });
  }
  discardAll(e) {
    let t = this._options.autoVacuum;
    try {
      this._options.autoVacuum = false;
      for (let s of e) this.discard(s);
    } finally {
      this._options.autoVacuum = t;
    }
    this.maybeAutoVacuum();
  }
  replace(e) {
    let { idField: t, extractField: s } = this._options, i = s(e, t);
    this.discard(i), this.add(e);
  }
  vacuum(e = {}) {
    return this.conditionalVacuum(e);
  }
  conditionalVacuum(e, t) {
    return this._currentVacuum ? (this._enqueuedVacuumConditions = this._enqueuedVacuumConditions && t, this._enqueuedVacuum != null ? this._enqueuedVacuum : (this._enqueuedVacuum = this._currentVacuum.then(() => {
      let s = this._enqueuedVacuumConditions;
      return this._enqueuedVacuumConditions = K, this.performVacuuming(e, s);
    }), this._enqueuedVacuum)) : this.vacuumConditionsMet(t) === false ? Promise.resolve() : (this._currentVacuum = this.performVacuuming(e), this._currentVacuum);
  }
  async performVacuuming(e, t) {
    let s = this._dirtCount;
    if (this.vacuumConditionsMet(t)) {
      let i = e.batchSize || G.batchSize, n = e.batchWait || G.batchWait, o = 1;
      for (let [c, a2] of this._index) {
        for (let [u, l] of a2) for (let [f] of l) this._documentIds.has(f) || (l.size <= 1 ? a2.delete(u) : l.delete(f));
        this._index.get(c).size === 0 && this._index.delete(c), o % i === 0 && await new Promise((u) => setTimeout(u, n)), o += 1;
      }
      this._dirtCount -= s;
    }
    await null, this._currentVacuum = this._enqueuedVacuum, this._enqueuedVacuum = null;
  }
  vacuumConditionsMet(e) {
    if (e == null) return true;
    let { minDirtCount: t, minDirtFactor: s } = e;
    return t = t || Q.minDirtCount, s = s || Q.minDirtFactor, this.dirtCount >= t && this.dirtFactor >= s;
  }
  get isVacuuming() {
    return this._currentVacuum != null;
  }
  get dirtCount() {
    return this._dirtCount;
  }
  get dirtFactor() {
    return this._dirtCount / (1 + this._documentCount + this._dirtCount);
  }
  has(e) {
    return this._idToShortId.has(e);
  }
  getStoredFields(e) {
    let t = this._idToShortId.get(e);
    if (t != null) return this._storedFields.get(t);
  }
  search(e, t = {}) {
    let { searchOptions: s } = this._options, i = F$1(F$1({}, s), t), n = this.executeQuery(e, t), o = [];
    for (let [c, { score: a2, terms: u, match: l }] of n) {
      let f = u.length || 1, d = { id: this._documentIds.get(c), score: a2 * f, terms: Object.keys(l), queryTerms: u, match: l };
      Object.assign(d, this._storedFields.get(c)), (i.filter == null || i.filter(d)) && o.push(d);
    }
    return e === M2.wildcard && i.boostDocument == null || o.sort(he), o;
  }
  autoSuggest(e, t = {}) {
    t = F$1(F$1({}, this._options.autoSuggestOptions), t);
    let s = /* @__PURE__ */ new Map();
    for (let { score: n, terms: o } of this.search(e, t)) {
      let c = o.join(" "), a2 = s.get(c);
      a2 != null ? (a2.score += n, a2.count += 1) : s.set(c, { score: n, terms: o, count: 1 });
    }
    let i = [];
    for (let [n, { score: o, terms: c, count: a2 }] of s) i.push({ suggestion: n, terms: c, score: o / a2 });
    return i.sort(he), i;
  }
  get documentCount() {
    return this._documentCount;
  }
  get termCount() {
    return this._index.size;
  }
  static loadJSON(e, t) {
    if (t == null) throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");
    return this.loadJS(JSON.parse(e), t);
  }
  static async loadJSONAsync(e, t) {
    if (t == null) throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");
    return this.loadJSAsync(JSON.parse(e), t);
  }
  static getDefault(e) {
    if (q.hasOwnProperty(e)) return J(q, e);
    throw new Error('MiniSearch: unknown option "'.concat(e, '"'));
  }
  static loadJS(e, t) {
    let { index: s, documentIds: i, fieldLength: n, storedFields: o, serializationVersion: c } = e, a2 = this.instantiateMiniSearch(e, t);
    a2._documentIds = R(i), a2._fieldLength = R(n), a2._storedFields = R(o);
    for (let [u, l] of a2._documentIds) a2._idToShortId.set(l, u);
    for (let [u, l] of s) {
      let f = /* @__PURE__ */ new Map();
      for (let d of Object.keys(l)) {
        let m = l[d];
        c === 1 && (m = m.ds), f.set(parseInt(d, 10), R(m));
      }
      a2._index.set(u, f);
    }
    return a2;
  }
  static async loadJSAsync(e, t) {
    let { index: s, documentIds: i, fieldLength: n, storedFields: o, serializationVersion: c } = e, a2 = this.instantiateMiniSearch(e, t);
    a2._documentIds = await D(i), a2._fieldLength = await D(n), a2._storedFields = await D(o);
    for (let [l, f] of a2._documentIds) a2._idToShortId.set(f, l);
    let u = 0;
    for (let [l, f] of s) {
      let d = /* @__PURE__ */ new Map();
      for (let m of Object.keys(f)) {
        let S2 = f[m];
        c === 1 && (S2 = S2.ds), d.set(parseInt(m, 10), await D(S2));
      }
      ++u % 1e3 === 0 && await we(0), a2._index.set(l, d);
    }
    return a2;
  }
  static instantiateMiniSearch(e, t) {
    let { documentCount: s, nextId: i, fieldIds: n, averageFieldLength: o, dirtCount: c, serializationVersion: a2 } = e;
    if (a2 !== 1 && a2 !== 2) throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");
    let u = new M2(t);
    return u._documentCount = s, u._nextId = i, u._idToShortId = /* @__PURE__ */ new Map(), u._fieldIds = n, u._avgFieldLength = o, u._dirtCount = c || 0, u._index = new O(), u;
  }
  executeQuery(e, t = {}) {
    if (e === M2.wildcard) return this.executeWildcardQuery(t);
    if (typeof e != "string") {
      let d = G$1(F$1(F$1({}, t), e), { queries: void 0 }), m = e.queries.map((S2) => this.executeQuery(S2, d));
      return this.combineResults(m, d.combineWith);
    }
    let { tokenize: s, processTerm: i, searchOptions: n } = this._options, o = F$1(F$1({ tokenize: s, processTerm: i }, n), t), { tokenize: c, processTerm: a2 } = o, f = c(e).flatMap((d) => a2(d)).filter((d) => !!d).map(Ve(o)).map((d) => this.executeQuerySpec(d, o));
    return this.combineResults(f, o.combineWith);
  }
  executeQuerySpec(e, t) {
    let s = F$1(F$1({}, this._options.searchOptions), t), i = (s.fields || this._options.fields).reduce((p, g) => G$1(F$1({}, p), { [g]: J(s.boost, g) || 1 }), {}), { boostDocument: n, weights: o, maxFuzzy: c, bm25: a2 } = s, { fuzzy: u, prefix: l } = F$1(F$1({}, le.weights), o), f = this._index.get(e.term), d = this.termResults(e.term, e.term, 1, e.termBoost, f, i, n, a2), m, S2;
    if (e.prefix && (m = this._index.atPrefix(e.term)), e.fuzzy) {
      let p = e.fuzzy === true ? 0.2 : e.fuzzy, g = p < 1 ? Math.min(c, Math.round(e.term.length * p)) : p;
      g && (S2 = this._index.fuzzyGet(e.term, g));
    }
    if (m) for (let [p, g] of m) {
      let x = p.length - e.term.length;
      if (!x) continue;
      S2 == null || S2.delete(p);
      let b = l * p.length / (p.length + 0.3 * x);
      this.termResults(e.term, p, b, e.termBoost, g, i, n, a2, d);
    }
    if (S2) for (let p of S2.keys()) {
      let [g, x] = S2.get(p);
      if (!x) continue;
      let b = u * p.length / (p.length + x);
      this.termResults(e.term, p, b, e.termBoost, g, i, n, a2, d);
    }
    return d;
  }
  executeWildcardQuery(e) {
    let t = /* @__PURE__ */ new Map(), s = F$1(F$1({}, this._options.searchOptions), e);
    for (let [i, n] of this._documentIds) {
      let o = s.boostDocument ? s.boostDocument(n, "", this._storedFields.get(i)) : 1;
      t.set(i, { score: o, terms: [], match: {} });
    }
    return t;
  }
  combineResults(e, t = Z) {
    if (e.length === 0) return /* @__PURE__ */ new Map();
    let s = t.toLowerCase(), i = Ae[s];
    if (!i) throw new Error("Invalid combination operator: ".concat(t));
    return e.reduce(i) || /* @__PURE__ */ new Map();
  }
  toJSON() {
    let e = [];
    for (let [t, s] of this._index) {
      let i = {};
      for (let [n, o] of s) i[n] = Object.fromEntries(o);
      e.push([t, i]);
    }
    return { documentCount: this._documentCount, nextId: this._nextId, documentIds: Object.fromEntries(this._documentIds), fieldIds: this._fieldIds, fieldLength: Object.fromEntries(this._fieldLength), averageFieldLength: this._avgFieldLength, storedFields: Object.fromEntries(this._storedFields), dirtCount: this._dirtCount, index: e, serializationVersion: 2 };
  }
  termResults(e, t, s, i, n, o, c, a2, u = /* @__PURE__ */ new Map()) {
    if (n == null) return u;
    for (let l of Object.keys(o)) {
      let f = o[l], d = this._fieldIds[l], m = n.get(d);
      if (m == null) continue;
      let S2 = m.size, p = this._avgFieldLength[d];
      for (let g of m.keys()) {
        if (!this._documentIds.has(g)) {
          this.removeTerm(d, g, t), S2 -= 1;
          continue;
        }
        let x = c ? c(this._documentIds.get(g), t, this._storedFields.get(g)) : 1;
        if (!x) continue;
        let b = m.get(g), W = this._fieldLength.get(g)[d], B = Ee(b, S2, this._documentCount, W, p, a2), A = s * i * f * x * B, z = u.get(g);
        if (z) {
          z.score += A, De(z.terms, e);
          let C = J(z.match, t);
          C ? C.push(l) : z.match[t] = [l];
        } else u.set(g, { score: A, terms: [e], match: { [t]: [l] } });
      }
    }
    return u;
  }
  addTerm(e, t, s) {
    let i = this._index.fetch(s, fe), n = i.get(e);
    if (n == null) n = /* @__PURE__ */ new Map(), n.set(t, 1), i.set(e, n);
    else {
      let o = n.get(t);
      n.set(t, (o || 0) + 1);
    }
  }
  removeTerm(e, t, s) {
    if (!this._index.has(s)) {
      this.warnDocumentChanged(t, e, s);
      return;
    }
    let i = this._index.fetch(s, fe), n = i.get(e);
    n == null || n.get(t) == null ? this.warnDocumentChanged(t, e, s) : n.get(t) <= 1 ? n.size <= 1 ? i.delete(e) : n.delete(t) : n.set(t, n.get(t) - 1), this._index.get(s).size === 0 && this._index.delete(s);
  }
  warnDocumentChanged(e, t, s) {
    for (let i of Object.keys(this._fieldIds)) if (this._fieldIds[i] === t) {
      this._options.logger("warn", "MiniSearch: document with ID ".concat(this._documentIds.get(e), ' has changed before removal: term "').concat(s, '" was not present in field "').concat(i, '". Removing a document after it has changed can corrupt the index!'), "version_conflict");
      return;
    }
  }
  addDocumentId(e) {
    let t = this._nextId;
    return this._idToShortId.set(e, t), this._documentIds.set(t, e), this._documentCount += 1, this._nextId += 1, t;
  }
  addFields(e) {
    for (let t = 0; t < e.length; t++) this._fieldIds[e[t]] = t;
  }
  addFieldLength(e, t, s, i) {
    let n = this._fieldLength.get(e);
    n == null && this._fieldLength.set(e, n = []), n[t] = i;
    let c = (this._avgFieldLength[t] || 0) * s + i;
    this._avgFieldLength[t] = c / (s + 1);
  }
  removeFieldLength(e, t, s, i) {
    if (s === 1) {
      this._avgFieldLength[t] = 0;
      return;
    }
    let n = this._avgFieldLength[t] * s - i;
    this._avgFieldLength[t] = n / (s - 1);
  }
  saveStoredFields(e, t) {
    let { storeFields: s, extractField: i } = this._options;
    if (s == null || s.length === 0) return;
    let n = this._storedFields.get(e);
    n == null && this._storedFields.set(e, n = {});
    for (let o of s) {
      let c = i(t, o);
      c !== void 0 && (n[o] = c);
    }
  }
};
H$1(M, "MiniSearch");
var v = M;
v.wildcard = Symbol("*");
var J = H$1((r, e) => Object.prototype.hasOwnProperty.call(r, e) ? r[e] : void 0, "getOwnProperty"), Ae = { [Z]: (r, e) => {
  for (let t of e.keys()) {
    let s = r.get(t);
    if (s == null) r.set(t, e.get(t));
    else {
      let { score: i, terms: n, match: o } = e.get(t);
      s.score = s.score + i, s.match = Object.assign(s.match, o), de(s.terms, n);
    }
  }
  return r;
}, [Se]: (r, e) => {
  let t = /* @__PURE__ */ new Map();
  for (let s of e.keys()) {
    let i = r.get(s);
    if (i == null) continue;
    let { score: n, terms: o, match: c } = e.get(s);
    de(i.terms, o), t.set(s, { score: i.score + n, terms: i.terms, match: Object.assign(i.match, c) });
  }
  return t;
}, [ke]: (r, e) => {
  for (let t of e.keys()) r.delete(t);
  return r;
} }, Te = { k: 1.2, b: 0.7, d: 0.5 }, Ee = H$1((r, e, t, s, i, n) => {
  let { k: o, b: c, d: a2 } = n;
  return Math.log(1 + (t - e + 0.5) / (e + 0.5)) * (a2 + r * (o + 1) / (r + o * (1 - c + c * s / i)));
}, "calcBM25Score"), Ve = H$1((r) => (e, t, s) => {
  let i = typeof r.fuzzy == "function" ? r.fuzzy(e, t, s) : r.fuzzy || false, n = typeof r.prefix == "function" ? r.prefix(e, t, s) : r.prefix === true, o = typeof r.boostTerm == "function" ? r.boostTerm(e, t, s) : 1;
  return { term: e, fuzzy: i, prefix: n, termBoost: o };
}, "termToQuerySpec"), q = { idField: "id", extractField: H$1((r, e) => r[e], "extractField"), tokenize: H$1((r) => r.split(je), "tokenize"), processTerm: H$1((r) => r.toLowerCase(), "processTerm"), fields: void 0, searchOptions: void 0, storeFields: [], logger: H$1((r, e) => {
  typeof (console == null ? void 0 : console[r]) == "function" && console[r](e);
}, "logger"), autoVacuum: true }, le = { combineWith: Z, prefix: false, fuzzy: false, maxFuzzy: 6, boost: {}, weights: { fuzzy: 0.45, prefix: 0.375 }, bm25: Te }, Re = { combineWith: Se, prefix: H$1((r, e, t) => e === t.length - 1, "prefix") }, G = { batchSize: 1e3, batchWait: 10 }, K = { minDirtFactor: 0.1, minDirtCount: 20 }, Q = F$1(F$1({}, G), K), De = H$1((r, e) => {
  r.includes(e) || r.push(e);
}, "assignUniqueTerm"), de = H$1((r, e) => {
  for (let t of e) r.includes(t) || r.push(t);
}, "assignUniqueTerms"), he = H$1(({ score: r }, { score: e }) => e - r, "byScore"), fe = H$1(() => /* @__PURE__ */ new Map(), "createMap"), R = H$1((r) => {
  let e = /* @__PURE__ */ new Map();
  for (let t of Object.keys(r)) e.set(parseInt(t, 10), r[t]);
  return e;
}, "objectToNumericMap"), D = H$1(async (r) => {
  let e = /* @__PURE__ */ new Map(), t = 0;
  for (let s of Object.keys(r)) e.set(parseInt(s, 10), r[s]), ++t % 1e3 === 0 && await we(0);
  return e;
}, "objectToNumericMapAsync"), we = H$1((r) => new Promise((e) => setTimeout(e, r)), "wait"), je = new RegExp("[\\n\\r\\p{Z}\\p{P}]+", "u");
var ze = N(z3(), 1);
var k, P, Ie, ee = class ee2 {
  constructor(e) {
    Q$1(this, P);
    O$1(this, "mapData");
    O$1(this, "indexes");
    O$1(this, "ready");
    Q$1(this, k);
    this.mapData = e, this.indexes = Be(e), this.ready = this.populate(), R$1(this, k, or(S(this, P, Ie).bind(this), 2e3));
  }
  async populate() {
    let { places: e, enterpriseLocations: t, enterpriseCategories: s } = this.indexes, i = this.mapData, n = [];
    return e.removeAll(), n = n.concat([e.addAllAsync(i.getByType("space")), e.addAllAsync(i.getByType("point-of-interest")), e.addAllAsync(i.getByType("connection")), e.addAllAsync(i.getByType("floor")), e.addAllAsync(i.getByType("door")), e.addAllAsync(i.getByType("annotation")), e.addAllAsync(i.getByType("area"))]), t && (t == null || t.removeAll(), n.push(t.addAllAsync(i.getByType("enterprise-location")))), s && (s == null || s.removeAll(), n.push(s.addAllAsync(i.getByType("enterprise-category")))), Promise.all(n);
  }
  async search(e, t = {}) {
    var a2, u;
    await this.ready, Ne.parse(t);
    let s = (0, ze.default)({}, t, We), i = this.indexes.places.search(e, { fields: Object.keys(s.places.fields).filter((l) => s.places.fields[l]) });
    s.places.limit && (i = i.slice(0, s.places.limit));
    let n = (a2 = this.indexes.enterpriseLocations) == null ? void 0 : a2.search(e, { fields: Object.keys(s.enterpriseLocations.fields).filter((l) => s.enterpriseLocations.fields[l]) });
    n && s.enterpriseLocations.limit && (n = n.slice(0, s.enterpriseLocations.limit));
    let o = (u = this.indexes.enterpriseCategories) == null ? void 0 : u.search(e, { fields: Object.keys(s.enterpriseCategories.fields).filter((l) => s.enterpriseCategories.fields[l]) });
    o && s.enterpriseCategories.limit && (o = o.slice(0, s.enterpriseCategories.limit));
    let c = Pe(this.mapData, { placesResult: i, locationsResult: n, categoriesResult: o });
    return P$1(this, k).call(this, e), c;
  }
  async suggest(e, t = {}) {
    await this.ready, $e.parse(t);
    let s = [], { places: { enabled: i = true } = {}, enterpriseLocations: { enabled: n = true } = {} } = t;
    return n && this.indexes.enterpriseLocations && this.indexes.enterpriseLocations.autoSuggest(e, { fields: ["name", "tags"], combineWith: "AND", prefix: true, boost: { name: 2, tags: 1 } }).forEach((o) => s.push(o)), i && this.indexes.places.autoSuggest(e, { fields: ["name"], combineWith: "AND", prefix: true }).forEach((o) => s.push(o)), s.sort((o, c) => c.score - o.score), this.mapData.Analytics.capture("$query-suggest", { query: e, suggestions: s.map((o) => o.suggestion) }), s;
  }
};
k = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakSet(), Ie = H$1(function(e) {
  this.mapData.Analytics.capture("$query-search", { query: e });
}, "#trackSearch"), H$1(ee, "InternalSearch");
var be = ee;
function Pe(r, { placesResult: e, locationsResult: t, categoriesResult: s }) {
  let i = e.reduce((c, { id: a2, match: u, score: l, __type: f }) => {
    let d = r.getById(f, a2);
    return d != null && !$l.is(d) && !Vg.is(d) && !Ps.is(d) && !nl.is(d) && !Kg.is(d) && c.push({ type: d.__type, match: u, score: l, item: d }), c;
  }, []), n;
  if (t) {
    n = [];
    for (let { id: c, match: a2, score: u } of t) {
      let l = r.getById("enterprise-location", c);
      l && n.push({ type: l.__type, match: a2, score: u, item: l });
    }
  }
  let o;
  if (s) {
    o = [];
    for (let { id: c, match: a2, score: u } of s) {
      let l = r.getById("enterprise-category", c);
      l && o.push({ type: l.__type, match: a2, score: u, item: l });
    }
  }
  return { places: i, enterpriseLocations: n, enterpriseCategories: o };
}
H$1(Pe, "processSearchResult");
var We = { places: { fields: { name: true, description: true } }, enterpriseCategories: { fields: { name: true, description: false, "locations.name": true } }, enterpriseLocations: { fields: { name: true, tags: true, description: true } } };
function X(r) {
  return r.normalize("NFD").replace(/[\u0300-\u036f|\u2019|\u0027|\']/g, "").toLowerCase();
}
H$1(X, "removeAccents");
function Be(r) {
  let e = new v({ fields: ["name", "description"], storeFields: ["id", "__type"], searchOptions: { fuzzy: 0.2, prefix: true, boost: { name: 2 }, combineWith: "AND" }, extractField: H$1((o, c) => {
    let a2 = o[c];
    return typeof a2 == "string" ? X(a2) : o[c];
  }, "extractField"), processTerm: H$1((o) => Je.has(o) ? "" : o.toLowerCase(), "processTerm") }), t = r.getByType("enterprise-location"), s;
  t && (s = new v({ fields: ["name", "tags", "description"], storeFields: ["id", "__type"], searchOptions: { combineWith: "OR", prefix: true, fuzzy: 0.2, boost: { name: 3, tags: 2, description: 1 } }, extractField: H$1((o, c) => Array.isArray(o[c]) ? o[c].join(" ") : typeof o[c] == "string" ? X(o[c]) : o[c], "extractField") }));
  let i = r.getByType("enterprise-category"), n;
  return i && (n = new v({ fields: ["name", "description", "locations.name"], storeFields: ["id", "__type"], extractField(o, c) {
    return c === "locations.name" ? o.locations.reduce((u, l) => u + " ".concat(xe, " ") + l.name, "") + " ".concat(xe) : typeof o[c] == "string" ? X(o[c]) : o[c];
  }, searchOptions: { combineWith: "OR", prefix: true, fuzzy: 0.2, boost: { name: 2, "locations.name": 2 } } })), { enterpriseCategories: n, enterpriseLocations: s, places: e };
}
H$1(Be, "buildIndexes");
var Ne = Q$2.object({ places: Q$2.object({ fields: Q$2.object({ name: Q$2.boolean().optional(), description: Q$2.boolean().optional() }).optional(), limit: Q$2.number().positive().optional() }).optional(), enterpriseCategories: Q$2.object({ fields: Q$2.object({ name: Q$2.boolean().optional(), description: Q$2.boolean().optional(), "locations.name": Q$2.boolean().optional() }).optional(), limit: Q$2.number().positive().optional() }).optional(), enterpriseLocations: Q$2.object({ fields: Q$2.object({ name: Q$2.boolean().optional(), tags: Q$2.boolean().optional(), description: Q$2.boolean().optional() }).optional(), limit: Q$2.number().positive().optional() }).optional() }), $e = Q$2.object({ places: Q$2.object({ enabled: Q$2.boolean().optional() }).optional(), enterpriseLocations: Q$2.object({ enabled: Q$2.boolean().optional() }).optional() }), Je = /* @__PURE__ */ new Set(["the", "an", "and", "or", "of", "in", "on", "at", "to", "from", "with", "by", "for"]), xe = "";
export {
  be as InternalSearch,
  X as removeAccents
};
