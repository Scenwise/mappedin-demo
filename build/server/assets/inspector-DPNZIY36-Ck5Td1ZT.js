import { O as O$1, bI as WW, H as H$1, n as nl, bJ as ui, bK as ve$1, bL as Se, K as Kg, G, F, g as Ft, Q, R as R$1, P as P$1, S as S$1, a } from "./_virtual_netlify-server-DZKFn6bU.js";
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
a();
var H = class H2 {
  constructor(t, o, e, r, l = "div") {
    this.parent = t, this.object = o, this.property = e, this._disabled = false, this._hidden = false, this.initialValue = this.getValue(), this.domElement = document.createElement(l), this.domElement.classList.add("controller"), this.domElement.classList.add(r), this.$name = document.createElement("div"), this.$name.classList.add("name"), H2.nextNameID = H2.nextNameID || 0, this.$name.id = "lil-gui-name-".concat(++H2.nextNameID), this.$widget = document.createElement("div"), this.$widget.classList.add("widget"), this.$disable = this.$widget, this.domElement.appendChild(this.$name), this.domElement.appendChild(this.$widget), this.domElement.addEventListener("keydown", (s) => s.stopPropagation()), this.domElement.addEventListener("keyup", (s) => s.stopPropagation()), this.parent.children.push(this), this.parent.controllers.push(this), this.parent.$children.appendChild(this.domElement), this._listenCallback = this._listenCallback.bind(this), this.name(e);
  }
  name(t) {
    return this._name = t, this.$name.textContent = t, this;
  }
  onChange(t) {
    return this._onChange = t, this;
  }
  _callOnChange() {
    this.parent._callOnChange(this), this._onChange !== void 0 && this._onChange.call(this, this.getValue()), this._changed = true;
  }
  onFinishChange(t) {
    return this._onFinishChange = t, this;
  }
  _callOnFinishChange() {
    this._changed && (this.parent._callOnFinishChange(this), this._onFinishChange !== void 0 && this._onFinishChange.call(this, this.getValue())), this._changed = false;
  }
  reset() {
    return this.setValue(this.initialValue), this._callOnFinishChange(), this;
  }
  enable(t = true) {
    return this.disable(!t);
  }
  disable(t = true) {
    return t === this._disabled ? this : (this._disabled = t, this.domElement.classList.toggle("disabled", t), this.$disable.toggleAttribute("disabled", t), this);
  }
  show(t = true) {
    return this._hidden = !t, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  hide() {
    return this.show(false);
  }
  options(t) {
    let o = this.parent.add(this.object, this.property, t);
    return o.name(this._name), this.destroy(), o;
  }
  min(t) {
    return this;
  }
  max(t) {
    return this;
  }
  step(t) {
    return this;
  }
  decimals(t) {
    return this;
  }
  listen(t = true) {
    return this._listening = t, this._listenCallbackID !== void 0 && (cancelAnimationFrame(this._listenCallbackID), this._listenCallbackID = void 0), this._listening && this._listenCallback(), this;
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
    let t = this.save();
    t !== this._listenPrevValue && this.updateDisplay(), this._listenPrevValue = t;
  }
  getValue() {
    return this.object[this.property];
  }
  setValue(t) {
    return this.getValue() !== t && (this.object[this.property] = t, this._callOnChange(), this.updateDisplay()), this;
  }
  updateDisplay() {
    return this;
  }
  load(t) {
    return this.setValue(t), this._callOnFinishChange(), this;
  }
  save() {
    return this.getValue();
  }
  destroy() {
    this.listen(false), this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1), this.parent.$children.removeChild(this.domElement);
  }
};
H$1(H, "Controller");
var T = H, ht = class ht2 extends T {
  constructor(t, o, e) {
    super(t, o, e, "boolean", "label"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "checkbox"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$input.addEventListener("change", () => {
      this.setValue(this.$input.checked), this._callOnFinishChange();
    }), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.checked = this.getValue(), this;
  }
};
H$1(ht, "BooleanController");
var rt = ht;
function st(i) {
  let t, o;
  return (t = i.match(/(#|0x)?([a-f0-9]{6})/i)) ? o = t[2] : (t = i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) ? o = parseInt(t[1]).toString(16).padStart(2, 0) + parseInt(t[2]).toString(16).padStart(2, 0) + parseInt(t[3]).toString(16).padStart(2, 0) : (t = i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (o = t[1] + t[1] + t[2] + t[2] + t[3] + t[3]), o ? "#" + o : false;
}
H$1(st, "normalizeColorString");
var te = { isPrimitive: true, match: H$1((i) => typeof i == "string", "match"), fromHexString: st, toHexString: st }, J = { isPrimitive: true, match: H$1((i) => typeof i == "number", "match"), fromHexString: H$1((i) => parseInt(i.substring(1), 16), "fromHexString"), toHexString: H$1((i) => "#" + i.toString(16).padStart(6, 0), "toHexString") }, ee = { isPrimitive: false, match: H$1((i) => Array.isArray(i), "match"), fromHexString(i, t, o = 1) {
  let e = J.fromHexString(i);
  t[0] = (e >> 16 & 255) / 255 * o, t[1] = (e >> 8 & 255) / 255 * o, t[2] = (e & 255) / 255 * o;
}, toHexString([i, t, o], e = 1) {
  e = 255 / e;
  let r = i * e << 16 ^ t * e << 8 ^ o * e << 0;
  return J.toHexString(r);
} }, ie = { isPrimitive: false, match: H$1((i) => Object(i) === i, "match"), fromHexString(i, t, o = 1) {
  let e = J.fromHexString(i);
  t.r = (e >> 16 & 255) / 255 * o, t.g = (e >> 8 & 255) / 255 * o, t.b = (e & 255) / 255 * o;
}, toHexString({ r: i, g: t, b: o }, e = 1) {
  e = 255 / e;
  let r = i * e << 16 ^ t * e << 8 ^ o * e << 0;
  return J.toHexString(r);
} }, oe = [te, J, ee, ie];
function ne(i) {
  return oe.find((t) => t.match(i));
}
H$1(ne, "getColorFormat");
var ut = class ut2 extends T {
  constructor(t, o, e, r) {
    super(t, o, e, "color"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "color"), this.$input.setAttribute("tabindex", -1), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$text = document.createElement("input"), this.$text.setAttribute("type", "text"), this.$text.setAttribute("spellcheck", "false"), this.$text.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$display.appendChild(this.$input), this.$widget.appendChild(this.$display), this.$widget.appendChild(this.$text), this._format = ne(this.initialValue), this._rgbScale = r, this._initialValueHexString = this.save(), this._textFocused = false, this.$input.addEventListener("input", () => {
      this._setValueFromHexString(this.$input.value);
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$text.addEventListener("input", () => {
      let l = st(this.$text.value);
      l && this._setValueFromHexString(l);
    }), this.$text.addEventListener("focus", () => {
      this._textFocused = true, this.$text.select();
    }), this.$text.addEventListener("blur", () => {
      this._textFocused = false, this.updateDisplay(), this._callOnFinishChange();
    }), this.$disable = this.$text, this.updateDisplay();
  }
  reset() {
    return this._setValueFromHexString(this._initialValueHexString), this;
  }
  _setValueFromHexString(t) {
    if (this._format.isPrimitive) {
      let o = this._format.fromHexString(t);
      this.setValue(o);
    } else this._format.fromHexString(t, this.getValue(), this._rgbScale), this._callOnChange(), this.updateDisplay();
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale);
  }
  load(t) {
    return this._setValueFromHexString(t), this._callOnFinishChange(), this;
  }
  updateDisplay() {
    return this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale), this._textFocused || (this.$text.value = this.$input.value.substring(1)), this.$display.style.backgroundColor = this.$input.value, this;
  }
};
H$1(ut, "ColorController");
var at = ut, pt = class pt2 extends T {
  constructor(t, o, e) {
    super(t, o, e, "function"), this.$button = document.createElement("button"), this.$button.appendChild(this.$name), this.$widget.appendChild(this.$button), this.$button.addEventListener("click", (r) => {
      r.preventDefault(), this.getValue().call(this.object), this._callOnChange();
    }), this.$button.addEventListener("touchstart", () => {
    }, { passive: true }), this.$disable = this.$button;
  }
};
H$1(pt, "FunctionController");
var R = pt, gt = class gt2 extends T {
  constructor(t, o, e, r, l, s) {
    super(t, o, e, "number"), this._initInput(), this.min(r), this.max(l);
    let d = s !== void 0;
    this.step(d ? s : this._getImplicitStep(), d), this.updateDisplay();
  }
  decimals(t) {
    return this._decimals = t, this.updateDisplay(), this;
  }
  min(t) {
    return this._min = t, this._onUpdateMinMax(), this;
  }
  max(t) {
    return this._max = t, this._onUpdateMinMax(), this;
  }
  step(t, o = true) {
    return this._step = t, this._stepExplicit = o, this;
  }
  updateDisplay() {
    let t = this.getValue();
    if (this._hasSlider) {
      let o = (t - this._min) / (this._max - this._min);
      o = Math.max(0, Math.min(o, 1)), this.$fill.style.width = o * 100 + "%";
    }
    return this._inputFocused || (this.$input.value = this._decimals === void 0 ? t : t.toFixed(this._decimals)), this;
  }
  _initInput() {
    this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("aria-labelledby", this.$name.id), window.matchMedia("(pointer: coarse)").matches && (this.$input.setAttribute("type", "number"), this.$input.setAttribute("step", "any")), this.$widget.appendChild(this.$input), this.$disable = this.$input;
    let o = H$1(() => {
      let v = parseFloat(this.$input.value);
      isNaN(v) || (this._stepExplicit && (v = this._snap(v)), this.setValue(this._clamp(v)));
    }, "onInput"), e = H$1((v) => {
      let M = parseFloat(this.$input.value);
      isNaN(M) || (this._snapClampSetValue(M + v), this.$input.value = this.getValue());
    }, "increment"), r = H$1((v) => {
      v.key === "Enter" && this.$input.blur(), v.code === "ArrowUp" && (v.preventDefault(), e(this._step * this._arrowKeyMultiplier(v))), v.code === "ArrowDown" && (v.preventDefault(), e(this._step * this._arrowKeyMultiplier(v) * -1));
    }, "onKeyDown"), l = H$1((v) => {
      this._inputFocused && (v.preventDefault(), e(this._step * this._normalizeMouseWheel(v)));
    }, "onWheel"), s = false, d, c, g, h, p, a2 = 5, b = H$1((v) => {
      d = v.clientX, c = g = v.clientY, s = true, h = this.getValue(), p = 0, window.addEventListener("mousemove", u), window.addEventListener("mouseup", m);
    }, "onMouseDown"), u = H$1((v) => {
      if (s) {
        let M = v.clientX - d, B = v.clientY - c;
        Math.abs(B) > a2 ? (v.preventDefault(), this.$input.blur(), s = false, this._setDraggingStyle(true, "vertical")) : Math.abs(M) > a2 && m();
      }
      if (!s) {
        let M = v.clientY - g;
        p -= M * this._step * this._arrowKeyMultiplier(v), h + p > this._max ? p = this._max - h : h + p < this._min && (p = this._min - h), this._snapClampSetValue(h + p);
      }
      g = v.clientY;
    }, "onMouseMove"), m = H$1(() => {
      this._setDraggingStyle(false, "vertical"), this._callOnFinishChange(), window.removeEventListener("mousemove", u), window.removeEventListener("mouseup", m);
    }, "onMouseUp"), y = H$1(() => {
      this._inputFocused = true;
    }, "onFocus"), f = H$1(() => {
      this._inputFocused = false, this.updateDisplay(), this._callOnFinishChange();
    }, "onBlur");
    this.$input.addEventListener("input", o), this.$input.addEventListener("keydown", r), this.$input.addEventListener("wheel", l, { passive: false }), this.$input.addEventListener("mousedown", b), this.$input.addEventListener("focus", y), this.$input.addEventListener("blur", f);
  }
  _initSlider() {
    this._hasSlider = true, this.$slider = document.createElement("div"), this.$slider.classList.add("slider"), this.$fill = document.createElement("div"), this.$fill.classList.add("fill"), this.$slider.appendChild(this.$fill), this.$widget.insertBefore(this.$slider, this.$input), this.domElement.classList.add("hasSlider");
    let t = H$1((f, v, M, B, K) => (f - v) / (M - v) * (K - B) + B, "map"), o = H$1((f) => {
      let v = this.$slider.getBoundingClientRect(), M = t(f, v.left, v.right, this._min, this._max);
      this._snapClampSetValue(M);
    }, "setValueFromX"), e = H$1((f) => {
      this._setDraggingStyle(true), o(f.clientX), window.addEventListener("mousemove", r), window.addEventListener("mouseup", l);
    }, "mouseDown"), r = H$1((f) => {
      o(f.clientX);
    }, "mouseMove"), l = H$1(() => {
      this._callOnFinishChange(), this._setDraggingStyle(false), window.removeEventListener("mousemove", r), window.removeEventListener("mouseup", l);
    }, "mouseUp"), s = false, d, c, g = H$1((f) => {
      f.preventDefault(), this._setDraggingStyle(true), o(f.touches[0].clientX), s = false;
    }, "beginTouchDrag"), h = H$1((f) => {
      f.touches.length > 1 || (this._hasScrollBar ? (d = f.touches[0].clientX, c = f.touches[0].clientY, s = true) : g(f), window.addEventListener("touchmove", p, { passive: false }), window.addEventListener("touchend", a2));
    }, "onTouchStart"), p = H$1((f) => {
      if (s) {
        let v = f.touches[0].clientX - d, M = f.touches[0].clientY - c;
        Math.abs(v) > Math.abs(M) ? g(f) : (window.removeEventListener("touchmove", p), window.removeEventListener("touchend", a2));
      } else f.preventDefault(), o(f.touches[0].clientX);
    }, "onTouchMove"), a2 = H$1(() => {
      this._callOnFinishChange(), this._setDraggingStyle(false), window.removeEventListener("touchmove", p), window.removeEventListener("touchend", a2);
    }, "onTouchEnd"), b = this._callOnFinishChange.bind(this), u = 400, m, y = H$1((f) => {
      if (Math.abs(f.deltaX) < Math.abs(f.deltaY) && this._hasScrollBar) return;
      f.preventDefault();
      let M = this._normalizeMouseWheel(f) * this._step;
      this._snapClampSetValue(this.getValue() + M), this.$input.value = this.getValue(), clearTimeout(m), m = setTimeout(b, u);
    }, "onWheel");
    this.$slider.addEventListener("mousedown", e), this.$slider.addEventListener("touchstart", h, { passive: false }), this.$slider.addEventListener("wheel", y, { passive: false });
  }
  _setDraggingStyle(t, o = "horizontal") {
    this.$slider && this.$slider.classList.toggle("active", t), document.body.classList.toggle("lil-gui-dragging", t), document.body.classList.toggle("lil-gui-".concat(o), t);
  }
  _getImplicitStep() {
    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1;
  }
  _onUpdateMinMax() {
    !this._hasSlider && this._hasMin && this._hasMax && (this._stepExplicit || this.step(this._getImplicitStep(), false), this._initSlider(), this.updateDisplay());
  }
  _normalizeMouseWheel(t) {
    let { deltaX: o, deltaY: e } = t;
    return Math.floor(t.deltaY) !== t.deltaY && t.wheelDelta && (o = 0, e = -t.wheelDelta / 120, e *= this._stepExplicit ? 1 : 10), o + -e;
  }
  _arrowKeyMultiplier(t) {
    let o = this._stepExplicit ? 1 : 10;
    return t.shiftKey ? o *= 10 : t.altKey && (o /= 10), o;
  }
  _snap(t) {
    let o = Math.round(t / this._step) * this._step;
    return parseFloat(o.toPrecision(15));
  }
  _clamp(t) {
    return t < this._min && (t = this._min), t > this._max && (t = this._max), t;
  }
  _snapClampSetValue(t) {
    this.setValue(this._clamp(this._snap(t)));
  }
  get _hasScrollBar() {
    let t = this.parent.root.$children;
    return t.scrollHeight > t.clientHeight;
  }
  get _hasMin() {
    return this._min !== void 0;
  }
  get _hasMax() {
    return this._max !== void 0;
  }
};
H$1(gt, "NumberController");
var lt = gt, ft = class ft2 extends T {
  constructor(t, o, e, r) {
    super(t, o, e, "option"), this.$select = document.createElement("select"), this.$select.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$select.addEventListener("change", () => {
      this.setValue(this._values[this.$select.selectedIndex]), this._callOnFinishChange();
    }), this.$select.addEventListener("focus", () => {
      this.$display.classList.add("focus");
    }), this.$select.addEventListener("blur", () => {
      this.$display.classList.remove("focus");
    }), this.$widget.appendChild(this.$select), this.$widget.appendChild(this.$display), this.$disable = this.$select, this.options(r);
  }
  options(t) {
    return this._values = Array.isArray(t) ? t : Object.values(t), this._names = Array.isArray(t) ? t : Object.keys(t), this.$select.replaceChildren(), this._names.forEach((o) => {
      let e = document.createElement("option");
      e.textContent = o, this.$select.appendChild(e);
    }), this.updateDisplay(), this;
  }
  updateDisplay() {
    let t = this.getValue(), o = this._values.indexOf(t);
    return this.$select.selectedIndex = o, this.$display.textContent = o === -1 ? t : this._names[o], this;
  }
};
H$1(ft, "OptionController");
var dt = ft, mt = class mt2 extends T {
  constructor(t, o, e) {
    super(t, o, e, "string"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("spellcheck", "false"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$input.addEventListener("input", () => {
      this.setValue(this.$input.value);
    }), this.$input.addEventListener("keydown", (r) => {
      r.code === "Enter" && this.$input.blur();
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$widget.appendChild(this.$input), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.value = this.getValue(), this;
  }
};
H$1(mt, "StringController");
var ct = mt, re = '.lil-gui {\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  line-height: 1;\n  font-weight: normal;\n  font-style: normal;\n  text-align: left;\n  color: var(--text-color);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  --background-color: #1f1f1f;\n  --text-color: #ebebeb;\n  --title-background-color: #111111;\n  --title-text-color: #ebebeb;\n  --widget-color: #424242;\n  --hover-color: #4f4f4f;\n  --focus-color: #595959;\n  --number-color: #2cc9ff;\n  --string-color: #a2db3c;\n  --font-size: 11px;\n  --input-font-size: 11px;\n  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;\n  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;\n  --padding: 4px;\n  --spacing: 4px;\n  --widget-height: 20px;\n  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);\n  --name-width: 45%;\n  --slider-knob-width: 2px;\n  --slider-input-width: 27%;\n  --color-input-width: 27%;\n  --slider-input-min-width: 45px;\n  --color-input-min-width: 45px;\n  --folder-indent: 7px;\n  --widget-padding: 0 0 0 3px;\n  --widget-border-radius: 2px;\n  --checkbox-size: calc(0.75 * var(--widget-height));\n  --scrollbar-width: 5px;\n}\n.lil-gui, .lil-gui * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.lil-gui.root {\n  width: var(--width, 245px);\n  display: flex;\n  flex-direction: column;\n  background: var(--background-color);\n}\n.lil-gui.root > .title {\n  background: var(--title-background-color);\n  color: var(--title-text-color);\n}\n.lil-gui.root > .children {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.lil-gui.root > .children::-webkit-scrollbar {\n  width: var(--scrollbar-width);\n  height: var(--scrollbar-width);\n  background: var(--background-color);\n}\n.lil-gui.root > .children::-webkit-scrollbar-thumb {\n  border-radius: var(--scrollbar-width);\n  background: var(--focus-color);\n}\n@media (pointer: coarse) {\n  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {\n    --widget-height: 28px;\n    --padding: 6px;\n    --spacing: 6px;\n    --font-size: 13px;\n    --input-font-size: 16px;\n    --folder-indent: 10px;\n    --scrollbar-width: 7px;\n    --slider-input-min-width: 50px;\n    --color-input-min-width: 65px;\n  }\n}\n.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {\n  --widget-height: 28px;\n  --padding: 6px;\n  --spacing: 6px;\n  --font-size: 13px;\n  --input-font-size: 16px;\n  --folder-indent: 10px;\n  --scrollbar-width: 7px;\n  --slider-input-min-width: 50px;\n  --color-input-min-width: 65px;\n}\n.lil-gui.autoPlace {\n  max-height: 100%;\n  position: fixed;\n  top: 0;\n  right: 15px;\n  z-index: 1001;\n}\n\n.lil-gui .controller {\n  display: flex;\n  align-items: center;\n  padding: 0 var(--padding);\n  margin: var(--spacing) 0;\n}\n.lil-gui .controller.disabled {\n  opacity: 0.5;\n}\n.lil-gui .controller.disabled, .lil-gui .controller.disabled * {\n  pointer-events: none !important;\n}\n.lil-gui .controller > .name {\n  min-width: var(--name-width);\n  flex-shrink: 0;\n  white-space: pre;\n  padding-right: var(--spacing);\n  line-height: var(--widget-height);\n}\n.lil-gui .controller .widget {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: var(--widget-height);\n}\n.lil-gui .controller.string input {\n  color: var(--string-color);\n}\n.lil-gui .controller.boolean {\n  cursor: pointer;\n}\n.lil-gui .controller.color .display {\n  width: 100%;\n  height: var(--widget-height);\n  border-radius: var(--widget-border-radius);\n  position: relative;\n}\n@media (hover: hover) {\n  .lil-gui .controller.color .display:hover:before {\n    content: " ";\n    display: block;\n    position: absolute;\n    border-radius: var(--widget-border-radius);\n    border: 1px solid #fff9;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n}\n.lil-gui .controller.color input[type=color] {\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.lil-gui .controller.color input[type=text] {\n  margin-left: var(--spacing);\n  font-family: var(--font-family-mono);\n  min-width: var(--color-input-min-width);\n  width: var(--color-input-width);\n  flex-shrink: 0;\n}\n.lil-gui .controller.option select {\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  max-width: 100%;\n}\n.lil-gui .controller.option .display {\n  position: relative;\n  pointer-events: none;\n  border-radius: var(--widget-border-radius);\n  height: var(--widget-height);\n  line-height: var(--widget-height);\n  max-width: 100%;\n  overflow: hidden;\n  word-break: break-all;\n  padding-left: 0.55em;\n  padding-right: 1.75em;\n  background: var(--widget-color);\n}\n@media (hover: hover) {\n  .lil-gui .controller.option .display.focus {\n    background: var(--focus-color);\n  }\n}\n.lil-gui .controller.option .display.active {\n  background: var(--focus-color);\n}\n.lil-gui .controller.option .display:after {\n  font-family: "lil-gui";\n  content: "↕";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding-right: 0.375em;\n}\n.lil-gui .controller.option .widget,\n.lil-gui .controller.option select {\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .lil-gui .controller.option .widget:hover .display {\n    background: var(--hover-color);\n  }\n}\n.lil-gui .controller.number input {\n  color: var(--number-color);\n}\n.lil-gui .controller.number.hasSlider input {\n  margin-left: var(--spacing);\n  width: var(--slider-input-width);\n  min-width: var(--slider-input-min-width);\n  flex-shrink: 0;\n}\n.lil-gui .controller.number .slider {\n  width: 100%;\n  height: var(--widget-height);\n  background: var(--widget-color);\n  border-radius: var(--widget-border-radius);\n  padding-right: var(--slider-knob-width);\n  overflow: hidden;\n  cursor: ew-resize;\n  touch-action: pan-y;\n}\n@media (hover: hover) {\n  .lil-gui .controller.number .slider:hover {\n    background: var(--hover-color);\n  }\n}\n.lil-gui .controller.number .slider.active {\n  background: var(--focus-color);\n}\n.lil-gui .controller.number .slider.active .fill {\n  opacity: 0.95;\n}\n.lil-gui .controller.number .fill {\n  height: 100%;\n  border-right: var(--slider-knob-width) solid var(--number-color);\n  box-sizing: content-box;\n}\n\n.lil-gui-dragging .lil-gui {\n  --hover-color: var(--widget-color);\n}\n.lil-gui-dragging * {\n  cursor: ew-resize !important;\n}\n\n.lil-gui-dragging.lil-gui-vertical * {\n  cursor: ns-resize !important;\n}\n\n.lil-gui .title {\n  height: var(--title-height);\n  line-height: calc(var(--title-height) - 4px);\n  font-weight: 600;\n  padding: 0 var(--padding);\n  -webkit-tap-highlight-color: transparent;\n  cursor: pointer;\n  outline: none;\n  text-decoration-skip: objects;\n}\n.lil-gui .title:before {\n  font-family: "lil-gui";\n  content: "▾";\n  padding-right: 2px;\n  display: inline-block;\n}\n.lil-gui .title:active {\n  background: var(--title-background-color);\n  opacity: 0.75;\n}\n@media (hover: hover) {\n  body:not(.lil-gui-dragging) .lil-gui .title:hover {\n    background: var(--title-background-color);\n    opacity: 0.85;\n  }\n  .lil-gui .title:focus {\n    text-decoration: underline var(--focus-color);\n  }\n}\n.lil-gui.root > .title:focus {\n  text-decoration: none !important;\n}\n.lil-gui.closed > .title:before {\n  content: "▸";\n}\n.lil-gui.closed > .children {\n  transform: translateY(-7px);\n  opacity: 0;\n}\n.lil-gui.closed:not(.transition) > .children {\n  display: none;\n}\n.lil-gui.transition > .children {\n  transition-duration: 300ms;\n  transition-property: height, opacity, transform;\n  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);\n  overflow: hidden;\n  pointer-events: none;\n}\n.lil-gui .children:empty:before {\n  content: "Empty";\n  padding: 0 var(--padding);\n  margin: var(--spacing) 0;\n  display: block;\n  height: var(--widget-height);\n  font-style: italic;\n  line-height: var(--widget-height);\n  opacity: 0.5;\n}\n.lil-gui.root > .children > .lil-gui > .title {\n  border: 0 solid var(--widget-color);\n  border-width: 1px 0;\n  transition: border-color 300ms;\n}\n.lil-gui.root > .children > .lil-gui.closed > .title {\n  border-bottom-color: transparent;\n}\n.lil-gui + .controller {\n  border-top: 1px solid var(--widget-color);\n  margin-top: 0;\n  padding-top: var(--spacing);\n}\n.lil-gui .lil-gui .lil-gui > .title {\n  border: none;\n}\n.lil-gui .lil-gui .lil-gui > .children {\n  border: none;\n  margin-left: var(--folder-indent);\n  border-left: 2px solid var(--widget-color);\n}\n.lil-gui .lil-gui .controller {\n  border: none;\n}\n\n.lil-gui label, .lil-gui input, .lil-gui button {\n  -webkit-tap-highlight-color: transparent;\n}\n.lil-gui input {\n  border: 0;\n  outline: none;\n  font-family: var(--font-family);\n  font-size: var(--input-font-size);\n  border-radius: var(--widget-border-radius);\n  height: var(--widget-height);\n  background: var(--widget-color);\n  color: var(--text-color);\n  width: 100%;\n}\n@media (hover: hover) {\n  .lil-gui input:hover {\n    background: var(--hover-color);\n  }\n  .lil-gui input:active {\n    background: var(--focus-color);\n  }\n}\n.lil-gui input:disabled {\n  opacity: 1;\n}\n.lil-gui input[type=text],\n.lil-gui input[type=number] {\n  padding: var(--widget-padding);\n  -moz-appearance: textfield;\n}\n.lil-gui input[type=text]:focus,\n.lil-gui input[type=number]:focus {\n  background: var(--focus-color);\n}\n.lil-gui input[type=checkbox] {\n  appearance: none;\n  width: var(--checkbox-size);\n  height: var(--checkbox-size);\n  border-radius: var(--widget-border-radius);\n  text-align: center;\n  cursor: pointer;\n}\n.lil-gui input[type=checkbox]:checked:before {\n  font-family: "lil-gui";\n  content: "✓";\n  font-size: var(--checkbox-size);\n  line-height: var(--checkbox-size);\n}\n@media (hover: hover) {\n  .lil-gui input[type=checkbox]:focus {\n    box-shadow: inset 0 0 0 1px var(--focus-color);\n  }\n}\n.lil-gui button {\n  outline: none;\n  cursor: pointer;\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  color: var(--text-color);\n  width: 100%;\n  height: var(--widget-height);\n  text-transform: none;\n  background: var(--widget-color);\n  border-radius: var(--widget-border-radius);\n  border: none;\n}\n@media (hover: hover) {\n  .lil-gui button:hover {\n    background: var(--hover-color);\n  }\n  .lil-gui button:focus {\n    box-shadow: inset 0 0 0 1px var(--focus-color);\n  }\n}\n.lil-gui button:active {\n  background: var(--focus-color);\n}\n\n@font-face {\n  font-family: "lil-gui";\n  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");\n}';
function se(i) {
  let t = document.createElement("style");
  t.innerHTML = i;
  let o = document.querySelector("head link[rel=stylesheet], head style");
  o ? document.head.insertBefore(t, o) : document.head.appendChild(t);
}
H$1(se, "_injectStyles");
var Ot = false, q = class q2 {
  constructor({ parent: t, autoPlace: o = t === void 0, container: e, width: r, title: l = "Controls", closeFolders: s = false, injectStyles: d = true, touchStyles: c = true } = {}) {
    if (this.parent = t, this.root = t ? t.root : this, this.children = [], this.controllers = [], this.folders = [], this._closed = false, this._hidden = false, this.domElement = document.createElement("div"), this.domElement.classList.add("lil-gui"), this.$title = document.createElement("div"), this.$title.classList.add("title"), this.$title.setAttribute("role", "button"), this.$title.setAttribute("aria-expanded", true), this.$title.setAttribute("tabindex", 0), this.$title.addEventListener("click", () => this.openAnimated(this._closed)), this.$title.addEventListener("keydown", (g) => {
      (g.code === "Enter" || g.code === "Space") && (g.preventDefault(), this.$title.click());
    }), this.$title.addEventListener("touchstart", () => {
    }, { passive: true }), this.$children = document.createElement("div"), this.$children.classList.add("children"), this.domElement.appendChild(this.$title), this.domElement.appendChild(this.$children), this.title(l), this.parent) {
      this.parent.children.push(this), this.parent.folders.push(this), this.parent.$children.appendChild(this.domElement);
      return;
    }
    this.domElement.classList.add("root"), c && this.domElement.classList.add("allow-touch-styles"), !Ot && d && (se(re), Ot = true), e ? e.appendChild(this.domElement) : o && (this.domElement.classList.add("autoPlace"), document.body.appendChild(this.domElement)), r && this.domElement.style.setProperty("--width", r + "px"), this._closeFolders = s;
  }
  add(t, o, e, r, l) {
    if (Object(e) === e) return new dt(this, t, o, e);
    let s = t[o];
    switch (typeof s) {
      case "number":
        return new lt(this, t, o, e, r, l);
      case "boolean":
        return new rt(this, t, o);
      case "string":
        return new ct(this, t, o);
      case "function":
        return new R(this, t, o);
    }
    console.error("gui.add failed\n	property:", o, "\n	object:", t, "\n	value:", s);
  }
  addColor(t, o, e = 1) {
    return new at(this, t, o, e);
  }
  addFolder(t) {
    let o = new q2({ parent: this, title: t });
    return this.root._closeFolders && o.close(), o;
  }
  load(t, o = true) {
    return t.controllers && this.controllers.forEach((e) => {
      e instanceof R || e._name in t.controllers && e.load(t.controllers[e._name]);
    }), o && t.folders && this.folders.forEach((e) => {
      e._title in t.folders && e.load(t.folders[e._title]);
    }), this;
  }
  save(t = true) {
    let o = { controllers: {}, folders: {} };
    return this.controllers.forEach((e) => {
      if (!(e instanceof R)) {
        if (e._name in o.controllers) throw new Error('Cannot save GUI with duplicate property "'.concat(e._name, '"'));
        o.controllers[e._name] = e.save();
      }
    }), t && this.folders.forEach((e) => {
      if (e._title in o.folders) throw new Error('Cannot save GUI with duplicate folder "'.concat(e._title, '"'));
      o.folders[e._title] = e.save();
    }), o;
  }
  open(t = true) {
    return this._setClosed(!t), this.$title.setAttribute("aria-expanded", !this._closed), this.domElement.classList.toggle("closed", this._closed), this;
  }
  close() {
    return this.open(false);
  }
  _setClosed(t) {
    this._closed !== t && (this._closed = t, this._callOnOpenClose(this));
  }
  show(t = true) {
    return this._hidden = !t, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  hide() {
    return this.show(false);
  }
  openAnimated(t = true) {
    return this._setClosed(!t), this.$title.setAttribute("aria-expanded", !this._closed), requestAnimationFrame(() => {
      let o = this.$children.clientHeight;
      this.$children.style.height = o + "px", this.domElement.classList.add("transition");
      let e = H$1((l) => {
        l.target === this.$children && (this.$children.style.height = "", this.domElement.classList.remove("transition"), this.$children.removeEventListener("transitionend", e));
      }, "onTransitionEnd");
      this.$children.addEventListener("transitionend", e);
      let r = t ? this.$children.scrollHeight : 0;
      this.domElement.classList.toggle("closed", !t), requestAnimationFrame(() => {
        this.$children.style.height = r + "px";
      });
    }), this;
  }
  title(t) {
    return this._title = t, this.$title.textContent = t, this;
  }
  reset(t = true) {
    return (t ? this.controllersRecursive() : this.controllers).forEach((e) => e.reset()), this;
  }
  onChange(t) {
    return this._onChange = t, this;
  }
  _callOnChange(t) {
    this.parent && this.parent._callOnChange(t), this._onChange !== void 0 && this._onChange.call(this, { object: t.object, property: t.property, value: t.getValue(), controller: t });
  }
  onFinishChange(t) {
    return this._onFinishChange = t, this;
  }
  _callOnFinishChange(t) {
    this.parent && this.parent._callOnFinishChange(t), this._onFinishChange !== void 0 && this._onFinishChange.call(this, { object: t.object, property: t.property, value: t.getValue(), controller: t });
  }
  onOpenClose(t) {
    return this._onOpenClose = t, this;
  }
  _callOnOpenClose(t) {
    this.parent && this.parent._callOnOpenClose(t), this._onOpenClose !== void 0 && this._onOpenClose.call(this, t);
  }
  destroy() {
    this.parent && (this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.folders.splice(this.parent.folders.indexOf(this), 1)), this.domElement.parentElement && this.domElement.parentElement.removeChild(this.domElement), Array.from(this.children).forEach((t) => t.destroy());
  }
  controllersRecursive() {
    let t = Array.from(this.controllers);
    return this.folders.forEach((o) => {
      t = t.concat(o.controllersRecursive());
    }), t;
  }
  foldersRecursive() {
    let t = Array.from(this.folders);
    return this.folders.forEach((o) => {
      t = t.concat(o.foldersRecursive());
    }), t;
  }
};
H$1(q, "GUI");
var j = q, V = j;
a();
a();
var S = (() => {
  let i = new Ft();
  return H$1(function(o) {
    return i.set(o), "#".concat(i.getHexString());
  }, "normalize");
})();
function Tt(i) {
  let t;
  for (t of i) t();
}
H$1(Tt, "runAll");
function bt(i, t) {
  let o = window.location.href, e = new URL(o), r = new URLSearchParams(e.search);
  for (let l in i) if (i.hasOwnProperty(l)) {
    let s = "".concat(t, ".").concat(l);
    r.set(s, i[l]);
  }
  e.search = r.toString(), history.pushState({ path: e.toString() }, "", e.toString());
}
H$1(bt, "updateCurrentUrlParamsWithNamespace");
function yt(i, t) {
  let o = new URLSearchParams(window.location.search), e = {};
  for (let [r, l] of o) if (r.startsWith("".concat(i, "."))) {
    let s = r.slice(i.length + 1);
    l === "true" || l === "false" ? e[s] = l === "true" : typeof (t == null ? void 0 : t[s]) == "number" ? e[s] = Number(l) : e[s] = l;
  }
  return { namespace: i, params: e };
}
H$1(yt, "getUrlParamsWithNamespace");
var ae = ["interactive"];
function tt(i, t, o) {
  var r, l;
  let e = o.addFolder("".concat(t.type, "-").concat(t.id));
  for (let s in t) {
    if (s === "visible" && e.add(t, s).onChange((d) => {
      i.updateState(t.id, { [s]: d });
    }), s === "color" || s === "hoverColor") {
      t[s] = S(t[s]), e.addColor(t, s).onChange((d) => {
        i.updateState(t.id, { [s]: d });
      });
      continue;
    }
    if (s === "height") {
      e.add(t, s, 0, 20, 1).onChange((d) => {
        i.updateState(t.id, { [s]: d });
      });
      continue;
    }
    if (s === "texture" && t.texture) {
      (r = e.addFolder("Texture - side").add(t, "texture")) == null || r.onChange((c) => {
        i.updateState(t.id, { texture: { url: c } });
      });
      continue;
    }
    if (s === "topTexture" && t.topTexture) {
      (l = e.addFolder("Texture - top").add(t, "topTexture")) == null || l.onChange((c) => {
        i.updateState(t.id, { topTexture: { url: c } });
      });
      continue;
    }
    if (s === "opacity") {
      e.add(t, s, 0, 1, 0.1).onChange((d) => {
        i.updateState(t.id, { [s]: d });
      });
      continue;
    }
    if (s === "altitude") {
      e.add(t, s, 0, 100, 1).onChange((d) => {
        i.updateState(t.id, { [s]: d });
      });
      continue;
    }
    ae.includes(s) && e.add(t, s).onChange((d) => {
      i.updateState(t.id, { [s]: d });
    });
  }
  return t.isInView && (e.add(t, "isInView").listen().disable(), e.add(t, "isInViewCheck")), { cleanup() {
    e.destroy();
  } };
}
H$1(tt, "renderByProp");
a();
a();
function le() {
  let i = [];
  function t(r, l) {
    var c;
    let s = Object.values(r.getMapData())[0], d = l;
    if (d && ui.is(d)) {
      let g = (c = s.getByType("enterprise-location")) == null ? void 0 : c.find((h) => h.spaces.some((p) => p.id === d.id));
      g && (d = g);
    }
    return d;
  }
  H$1(t, "getHighlightTarget");
  async function o(r, l) {
    return l instanceof Kg ? r.Camera.focusOn(l.locations.flatMap((s) => s.spaces), W) : l instanceof nl ? r.Camera.focusOn(l.spaces, W) : r.Camera.focusOn(l, W);
  }
  H$1(o, "focusOn");
  function e(r, l, { focus: s = false } = {}) {
    if (!window.enableHighlightCard) return () => {
    };
    let d = t(r, l), c = document.createElement("div");
    if (c.style.cssText = "\n				position: absolute;\n				top: 20px;\n				left: 20px;\n				background-color: rgba(30, 30, 30, 0.95);\n				box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n				border-radius: 12px;\n				padding: 24px;\n				max-width: 320px;\n				z-index: 1000;\n				font-family: 'Arial', sans-serif;\n				transition: all 0.3s ease;\n				color: #e0e0e0;\n			", "name" in d) {
      let h = document.createElement("h3");
      h.textContent = d.name, h.style.cssText = "\n				margin: 0 0 16px;\n				font-size: 22px;\n				font-weight: 600;\n				color: #ffffff;\n				letter-spacing: -0.5px;\n			", c.appendChild(h);
    }
    if (d instanceof nl) {
      if (d.description) {
        let h = document.createElement("p");
        h.textContent = d.description, h.style.cssText = "\n					margin: 0 0 16px;\n					font-size: 14px;\n					color: #b0b0b0;\n					line-height: 1.5;\n				", c.appendChild(h);
      }
      if (d.tags && d.tags.length > 0) {
        let h = document.createElement("div");
        h.style.cssText = "\n					display: flex;\n					flex-wrap: nowrap;\n					gap: 8px;\n					margin-bottom: 16px;\n					overflow-x: hidden;\n					max-height: 30px; /* Adjust this value based on your font size and padding */\n				", d.tags.forEach((p) => {
          let a2 = document.createElement("span");
          a2.textContent = p, a2.style.cssText = "\n						background-color: #3a3a3a;\n						color: #e0e0e0;\n						padding: 6px 12px;\n						border-radius: 16px;\n						font-size: 12px;\n						font-weight: 500;\n						text-transform: uppercase;\n						white-space: nowrap;\n					", h.appendChild(a2);
        }), c.appendChild(h);
      }
    }
    let g;
    if (!(l instanceof Kg)) {
      let h = new V({ autoPlace: false });
      h.domElement.style.cssText = "\n					position: relative;\n					overflow-y: auto;\n					margin-top: 16px;\n					border-top: 1px solid #444;\n					padding-top: 16px;\n				";
      let p = r.getState(l);
      p && (tt(r, F({ id: l.id }, p), h), c.appendChild(h.domElement)), g = h;
    }
    return document.body.appendChild(c), s && o(r, d), () => {
      c.style.opacity = "0", c.style.transform = "translateY(-10px)", setTimeout(() => c.remove(), 300), g == null || g.destroy();
    };
  }
  return H$1(e, "highlightCard"), { highlightCard: e, highlight: H$1((r, l, { focus: s = true } = {}) => {
    i.length > 0 && i.forEach((c) => r.Markers.remove(c));
    let d = t(r, l);
    if (d instanceof nl) s && r.Camera.focusOn(d.spaces, W), i.push(...d.spaces.map((c) => r.Markers.add(c, '<div style="padding: 15px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width: 250px; position: relative;">\n							<h3 style="margin: 0 0 10px; color: #333; font-size: 16px; font-weight: 600;">'.concat(d.name, "</h3>\n							").concat(d.description ? '<p style="margin: 0 0 10px; color: #666; font-size: 14px; font-weight: 400;">'.concat(d.description, "</p>") : "", "\n							").concat(d.tags ? d.tags.map((g) => '<span style="display: inline-block; padding: 3px 8px; background-color: #e0f2f1; color: #00796b; border-radius: 12px; font-size: 12px;">'.concat(g, "</span>")).join(" ") : "", '\n							<div style="position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 10px solid #ffffff;"></div>\n						</div>'), { rank: "always-visible", anchor: "top" })));
    else if (d instanceof Kg) {
      s && r.Camera.focusOn(d.locations.flatMap((h) => h.spaces), W);
      let c = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Set();
      d.locations.forEach((h) => {
        c.has(h.name) || (h.spaces.forEach((p) => {
          i.push(r.Markers.add(p, '<div style="padding: 12px; background-color: rgba(0, 153, 51, 0.95); border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); transform: translateY(-4px); transition: all 0.3s ease;">\n									<span style="font-weight: 600; color: #FFFFFF; font-size: 16px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">'.concat(h.name, "</span>\n								</div>"), { rank: "always-visible" }));
        }), c.set(h.name, true));
      }), d.locations.forEach((h) => {
        h.coordinates.forEach((p) => {
          let a2 = "".concat(p.latitude, ",").concat(p.longitude);
          if (!g.has(a2) && !c.has(h.name)) {
            let b = r.Markers.add(p, '<div style="padding: 10px; background-color: rgba(51, 102, 204, 0.9); border-radius: 6px; box-shadow: 0 3px 6px rgba(0,0,0,0.2);">\n								<span style="font-weight: 500; color: #FFFFFF; font-size: 16px;">'.concat(h.name, '</span>\n								<br>\n								<span style="color: #FFFFFF; font-size: 12px; font-weight: 400;">Node</span>\n							</div>'), { rank: "always-visible" });
            g.add(a2), i.push(b);
          }
        });
      });
    }
    return () => {
      i.forEach((c) => r.Markers.remove(c));
    };
  }, "highlight") };
}
H$1(le, "createHighlightControl");
var W = { duration: 300, easing: "ease-in-out" }, et = le();
a();
var w = { search: "", results: void 0, options: { places: { fields: { name: true, description: true, link: true, category: true }, limit: 5 }, locations: { fields: { name: true, tag: true, description: true }, limit: 5 }, categories: { fields: { name: true }, limit: 5 } } };
function de(i) {
  i.add(w.options.places.fields, "name").name("Places: Name"), i.add(w.options.places.fields, "description").name("Places: Description"), i.add(w.options.places.fields, "link").name("Places: Link"), i.add(w.options.places.fields, "category").name("Places: Category"), i.add(w.options.places, "limit"), i.add(w.options.locations.fields, "name").name("Locations: Name"), i.add(w.options.locations.fields, "tag").name("Locations: Tag"), i.add(w.options.locations.fields, "description").name("Locations: Description"), i.add(w.options.places, "limit"), i.add(w.options.categories.fields, "name").name("Categories: Name");
}
H$1(de, "createAdvancedSettings");
function Dt(i, t, o) {
  var h;
  let e = new Se(), r = o.addFolder("Search");
  r.open();
  let l = r.add(w, "search").onChange(async (p) => {
    let a2 = await t.Search.query(p, w.options);
    a2 && (w.results = a2, d(a2, e));
  }), s = document.createElement("div");
  s.style.marginLeft = "10px", (h = l.domElement.parentElement) == null || h.appendChild(s);
  let { renderSearch: d, close: c } = ce(i, t, s, l.$input), g = r.addFolder("Advanced");
  return g.close(), de(g), document.addEventListener("keydown", (p) => {
    (p.metaKey || p.ctrlKey) && p.key === "k" ? (p.preventDefault(), r._closed && r.open(), l.$input.focus()) : p.key === "Escape" && (c(), e.publish("highlight", void 0));
  }), { pubsub: e };
}
H$1(Dt, "createSearchControl");
function ce(i, t, o, e) {
  let r, l;
  e.addEventListener("input", async (d) => {
    d instanceof InputEvent && (d.inputType === "insertText" || d.inputType === "insertCompositionText") && (clearTimeout(r), r = setTimeout(async () => {
      var g;
      let c = await t.Search.suggest(e.value);
      c && c.length > 0 && s((g = c[0]) == null ? void 0 : g.suggestion);
    }, 100));
  });
  function s(d) {
    if (!d) {
      e.placeholder = "";
      return;
    }
    let c = e.value;
    e.value = d, e.setSelectionRange(c.length, d.length);
  }
  return H$1(s, "renderSuggestion"), { renderSearch(d, c) {
    var g, h;
    if (d.places.length === 0 && ((g = d.enterpriseCategories) == null ? void 0 : g.length) === 0 && ((h = d.enterpriseLocations) == null ? void 0 : h.length) === 0) {
      o.textContent = "No results found.";
      return;
    }
    l = he(o, d, i, c);
  }, close() {
    l.destroy();
  } };
}
H$1(ce, "mount");
function he(i, t, o, e) {
  i.innerHTML = "";
  let r = document.createElement("div");
  Object.assign(r.style, it.dropdownContainer);
  let l = document.createElement("ul");
  l.className = "options-list", Object.assign(l.style, it.optionsList), l.style.display = "block";
  let s = [], d = H$1((a2, b) => {
    if (b && b.length > 0) {
      let u = document.createElement("li");
      u.textContent = a2, Object.assign(u.style, it.sectionHeader), l.appendChild(u), b.forEach((m, y) => {
        let f = document.createElement("li");
        f.textContent = "".concat("name" in m.item ? m.item.name : "", " (").concat(m.type, ")"), Object.assign(f.style, it.option), f.tabIndex = 0, f.addEventListener("focus", () => {
          g(s.indexOf(f));
        }), f.addEventListener("mouseover", () => {
          f.style.backgroundColor = "#f0f0f0";
        }), f.addEventListener("mouseout", () => {
          f.style.backgroundColor = "";
        }), f.addEventListener("click", () => {
        }), f.setAttribute("data-type", a2), f.setAttribute("data-index", y.toString()), l.appendChild(f), s.push(f);
      });
    }
  }, "addSection");
  d("enterpriseLocations", t.enterpriseLocations), d("enterpriseCategories", t.enterpriseCategories), d("Places", t.places), r.appendChild(l), i.appendChild(r);
  let c = [], g = H$1((a2) => {
    c.forEach((f) => f()), c = [], s.forEach((f, v) => {
      v === a2 ? f.style.backgroundColor = "#e0e0e0" : f.style.backgroundColor = "";
    });
    let b = s[a2], u = b.getAttribute("data-type"), m = parseInt(b.getAttribute("data-index") || "0", 10);
    if (!u) return;
    let { item: y } = t[u.toLowerCase()][m];
    e.publish("highlight", y);
  }, "highlightOption"), h = H$1((a2) => {
    !r.contains(a2.target) && a2.target !== i && p();
  }, "handleClickOutside");
  document.addEventListener("click", h);
  let p = H$1(() => {
    i.innerHTML = "", document.removeEventListener("click", h);
  }, "destroy");
  return { destroy() {
    i.innerHTML = "", e.publish("highlight", void 0);
  } };
}
H$1(he, "createCustomDropdown");
var it = { dropdownContainer: { position: "absolute", color: "#202020" }, optionsList: { display: "block", zIndex: "1002", position: "relative", maxHeight: "200px", overflowY: "auto", border: "1px solid #ccc", backgroundColor: "#fff", listStyleType: "none", margin: "0", padding: "0" }, sectionHeader: { fontWeight: "bold", padding: "5px", backgroundColor: "#f0f0f0" }, option: { padding: "5px", cursor: "pointer" } };
function Pt(i, t, o) {
  o.domElement.id = "interactionPanel";
  let e = [], { pubsub: r } = Dt(i, t, o);
  r.on("highlight", (h) => {
    if (h) {
      e.forEach((a2) => a2()), e = [];
      let p = h instanceof nl ? h.spaces[0] : h;
      if (i.Camera.focusOn(h), p && !ui.is(p)) return;
      e.push(et.highlightCard(i, p, { focus: true }));
    } else e.forEach((p) => p()), e = [];
  });
  let l = o.addFolder("Click 👇").close(), { sub: s } = ue(i, l);
  s.on("click", (h) => {
    e.forEach((p) => p()), e = [], h.spaces[0] && (e = [et.highlightCard(i, h.spaces[0])]);
  });
  let d = o.addFolder("Hover 🚁").close(), { sub: c } = pe(i, d), g;
  c.on("hover", (h) => {
    h.spaces[0] ? (g == null || g(), e.length === 0 && (g = et.highlightCard(i, h.spaces[0]))) : (g == null || g(), g = void 0);
  });
}
H$1(Pt, "createInteractionControls");
function ue(i, t) {
  let o = new Se(), e = { position: "", hoverColor: S(i.getHoverColor()) }, r = t.add(e, "position").disable(), l = [];
  function s() {
    l.forEach((c) => c()), l.length = 0;
  }
  H$1(s, "reset");
  let d = 0;
  return i.on("click", (c) => {
    var u;
    let { labels: g, markers: h, coordinate: p } = c;
    s(), o.publish("click", c), clearInterval(d), r.load(JSON.stringify([p.longitude, p.latitude]));
    let a2 = g[0] || h[0];
    if (a2) {
      let m = Ct(i, a2, t);
      if (!m) return;
      l.push(m.destroy), m.labelItemFolder.openAnimated();
    }
    let b = (u = c.spaces[0]) != null ? u : c.objects[0];
    if (b) {
      let m = G(F({ id: b.id }, i.getState(b.id)), { type: b.type, isInView: false, isInViewCheck: vt(i, b.id) }), { cleanup: y } = tt(i, m, t);
      d = setInterval(() => {
        m.isInView = i.isInView(a2 || b);
      }, 500), l.push(y);
    }
  }), { sub: o };
}
H$1(ue, "createClickControls");
function pe(i, t) {
  let o = new Se();
  i.setHoverColor("#1f3a7a");
  let e = { position: "", hoverColor: S(i.getHoverColor()), intersected: "", type: "", id: "" }, r = t.add(e, "position").disable();
  t.add(e, "id").disable().listen(), t.add(e, "type").disable().listen(), t.addColor(e, "hoverColor").onChange((d) => {
    i.setHoverColor(d);
  });
  let l = [];
  function s() {
    l.forEach((d) => d()), l.length = 0;
  }
  return H$1(s, "reset"), i.on("hover", (d) => {
    var m, y, f;
    let { coordinate: c, spaces: g, objects: h, markers: p, labels: a2 } = d;
    s(), o.publish("hover", d), r.load(JSON.stringify([c.longitude, c.latitude]));
    let b = (f = (y = (m = g[0]) != null ? m : h[0]) != null ? y : p[0]) != null ? f : a2[0];
    if (!b) return;
    let u = i.getState(b);
    u && (e.type = u.type, e.id = b.id);
  }), { sub: o };
}
H$1(pe, "createHoverControls");
function vt(i, t) {
  return H$1(function() {
    console.log("isInView", i.isInView(t));
  }, "isInView");
}
H$1(vt, "createIsInViewHandler");
function Bt(i, t, o) {
  let e = { labels: {}, all() {
    o.Labels.all().forEach((b) => {
      this.labels[b.id] = b;
    }), c();
  }, removeAllLabels() {
    o.Labels.removeAll().forEach((b) => {
      delete this.labels[b.id];
    }), c();
  } }, { addLabel: r, destroy: l } = ge(i, o);
  i.add(e, "all"), i.add(e, "removeAllLabels");
  let s = i.addFolder("Label List");
  i.close();
  let d = /* @__PURE__ */ new Map(), { rerender: c } = g();
  function g() {
    function a2(m) {
      var y;
      delete e.labels[m.id], (y = d.get(m.id)) == null || y.destroy();
    }
    H$1(a2, "remove");
    function b(m) {
      let y = Ct(o, m, s, { onRemove: H$1((v) => {
        a2(v);
      }, "onRemove") });
      if (!y) return;
      let { labelItemFolder: f } = y;
      d.set(m.id, f);
    }
    H$1(b, "add");
    function u() {
      s.destroy(), s = i.addFolder("Label");
      for (let m in e.labels) {
        let y = e.labels[m];
        b(y);
      }
    }
    return H$1(u, "rerender"), { rerender: u, add: b, remove: a2 };
  }
  H$1(g, "createLabelControls"), i.domElement.classList.add("list-items");
  let h;
  o.on("click", ({ labels: a2, coordinate: b }) => {
    if (!i._closed) if (a2[0]) {
      h == null || h.close();
      let u = d.get(a2[0].id);
      if (i.open(), !u) return;
      u == null || u.open(), u == null || u.domElement.scrollIntoView({ block: "start" }), u == null || u.domElement.focus(), h = u;
    } else r(b);
  });
  function p(a2) {
    for (let b of a2) e.labels[b.id] = b;
    c();
  }
  return H$1(p, "populatelabels"), { populatelabels: p, destroy() {
    l();
  } };
}
H$1(Bt, "createLabelControls");
function Ct(i, t, o, { onRemove: e } = {}) {
  var g, h, p, a2;
  let r = o.addFolder("".concat((g = t.text) == null ? void 0 : g.substring(0, 12)));
  r.onChange((b) => {
    i.updateState(t, { appearance: c.appearance, interactive: c.interactive });
  }), r.close();
  let l = i.getState(t);
  if ((l == null ? void 0 : l.type) !== "label") throw new Error("error getting state for label: ".concat(t.id));
  let { appearance: s, interactive: d } = l;
  if (!s || s.margin == null || d == null) throw new Error("incomplte label state");
  let c = { text: t.text, interactive: d, appearance: G(F({}, s), { margin: s.margin || 0, marker: { foregroundColor: (p = (h = s.marker) == null ? void 0 : h.foregroundColor) != null && p.active ? S((a2 = s.marker.foregroundColor) == null ? void 0 : a2.active) : "black" }, text: { foregroundColor: S(s.text.foregroundColor) } }), remove() {
    i.Labels.remove(t), e == null || e(t), r.destroy();
  }, isInView: vt(i, t.id) };
  return r.add(c.appearance, "margin", 0, 20).name("margin"), r.add(c, "text"), r.add(c, "interactive"), r.addColor(c.appearance.marker, "foregroundColor").name("marker foreground"), r.addColor(c.appearance.text, "foregroundColor").name("text forground"), r.add(c, "isInView"), r.add(c, "remove"), { labelItemFolder: r, destroy() {
    r.destroy();
  } };
}
H$1(Ct, "addLabelControlToFolder");
function ge(i, t) {
  let o = i.addFolder("Add"), e = { onClick: false, margin: 0, text: "New Label!", interactive: true, marginForegroundColor: S("skyblue"), marginBackgroundColor: S("coral"), textForegroundColor: S("slategray"), textBackgroundColor: S("white") };
  return o.add(e, "onClick"), o.add(e, "margin"), o.add(e, "interactive"), o.add(e, "text"), o.addColor(e, "marginForegroundColor"), o.addColor(e, "marginBackgroundColor"), o.addColor(e, "textForegroundColor"), o.addColor(e, "textBackgroundColor"), { destroy() {
    o.destroy();
  }, addLabel(r) {
    return o._closed || !e.onClick ? void 0 : t.Labels.add(r, e.text, { appearance: { margin: e.margin, marker: { foregroundColor: { active: e.marginForegroundColor, inactive: e.marginForegroundColor }, backgroundColor: { active: e.marginBackgroundColor, inactive: e.marginBackgroundColor } }, text: { foregroundColor: e.textForegroundColor, backgroundColor: e.marginBackgroundColor } }, interactive: e.interactive });
  } };
}
H$1(ge, "createAddControl");
var zt = {};
a();
var Gt = "camera-ui";
function Ut(i, t, o) {
  var wt, Ft2;
  let e = i.addFolder("Camera 📷").onOpenClose((C) => {
    bt({ opened: !C._closed }, Gt);
  }), { params: r } = yt(Gt);
  r.opened || e.close();
  let l = t.Camera.center.toJSON(), s = document.createElement("div");
  Object.assign(s.style, { display: "none", position: "absolute", left: "0px", zIndex: 999, top: "0px", bottom: "0px", right: "0px", backgroundColor: "aqua", pointerEvents: "none", opacity: 0.5 }), t.__core.container.appendChild(s);
  let d = H$1(() => t.getDimensions(), "getContainerDimensions"), [c, g, h, p] = (wt = o == null ? void 0 : o.padding) != null ? wt : [t.Camera.screenOffsets.top, t.Camera.screenOffsets.right, t.Camera.screenOffsets.bottom, t.Camera.screenOffsets.left], a2 = { center_lat: l.latitude, center_lon: l.longitude, zoomLevel: t.Camera.zoomLevel, pitch: t.Camera.pitch, bearing: t.Camera.bearing, minZoomLevel: t.Camera.minZoomLevel, maxZoomLevel: t.Camera.maxZoomLevel, inset_type: o != null && o.padding ? "pixel" : t.Camera.screenOffsets.type, inset_top: c, inset_left: p, inset_right: g, inset_bottom: h, animateOnLoad: true, persist: H$1(() => {
    bt(e.save().controllers, "camera"), navigator.clipboard.writeText(window.location.href);
  }, "persist"), visualizeInset: !!(c || g || h || p), "Focus on click": (Ft2 = o == null ? void 0 : o.focusOnClick) != null ? Ft2 : true, "Focus on current floor": H$1(() => {
    t.Camera.focusOn([t.currentFloor], { screenOffsets: { top: 20, left: 20, right: 20, bottom: 20 } });
  }, "Focus on current floor") };
  function b() {
    a2.inset_type = t.Camera.screenOffsets.type, a2.inset_left = t.Camera.screenOffsets.left, a2.inset_top = t.Camera.screenOffsets.top, a2.inset_right = t.Camera.screenOffsets.right, a2.inset_bottom = t.Camera.screenOffsets.bottom;
    let { width: C, height: E } = d();
    a2.inset_type === "portion" ? Object.assign(s.style, { left: a2.inset_left * C + "px", top: a2.inset_top * E + "px", bottom: a2.inset_bottom * E + "px", right: a2.inset_right * C + "px" }) : Object.assign(s.style, { left: a2.inset_left + "px", top: a2.inset_top + "px", bottom: a2.inset_bottom + "px", right: a2.inset_right + "px" });
  }
  H$1(b, "updateInsetVisualizer"), e.add(a2, "center_lat").listen().disable(), e.add(a2, "center_lon").listen().disable(), e.add(a2, "zoomLevel", 16, 22, 0.5).listen().disable(), e.add(a2, "pitch").listen().disable(), e.add(a2, "bearing").listen().disable(), e.add(a2, "minZoomLevel", 5, 22, 0.5).onChange((C) => {
    t.Camera.setMinZoomLevel(C);
  }), e.add(a2, "maxZoomLevel", 10, 22, 0.5).onChange((C) => {
    t.Camera.setMaxZoomLevel(C);
  }), e.add(a2, "animateOnLoad"), e.add(a2, "visualizeInset").onChange(Et), Et(a2.visualizeInset);
  let u, m, y, f;
  function v() {
    let { width: C, height: E } = d(), ot = t.Camera.screenOffsets.type, nt = a2.inset_type;
    ot !== nt && (nt === "portion" && ot === "pixel" ? (a2.inset_top = C > 0 ? Math.min(a2.inset_top / E, 1) : 0, a2.inset_bottom = C > 0 ? Math.min(a2.inset_bottom / E, 1) : 0, a2.inset_left = E > 0 ? Math.min(a2.inset_left / C, 1) : 0, a2.inset_right = E > 0 ? Math.min(a2.inset_right / C, 1) : 0) : nt === "pixel" && ot === "portion" && (a2.inset_top = Math.round(a2.inset_top * E), a2.inset_bottom = Math.round(a2.inset_bottom * E), a2.inset_left = Math.round(a2.inset_left * C), a2.inset_right = Math.round(a2.inset_right * C))), u && u.destroy(), m && m.destroy(), y && y.destroy(), f && f.destroy(), a2.inset_type === "portion" ? (u = e.add(a2, "inset_top", 0, 1, 0.01).onChange(L), m = e.add(a2, "inset_bottom", 0, 1, 0.01).onChange(L), y = e.add(a2, "inset_left", 0, 1, 0.01).onChange(L), f = e.add(a2, "inset_right", 0, 1, 0.01).onChange(L)) : (u = e.add(a2, "inset_top", 0, E, 1).onChange(L), m = e.add(a2, "inset_bottom", 0, E, 1).onChange(L), y = e.add(a2, "inset_left", 0, C, 1).onChange(L), f = e.add(a2, "inset_right", 0, C, 1).onChange(L));
  }
  H$1(v, "updateInsetControlRanges"), e.add(a2, "inset_type", ["pixel", "portion"]).onChange(() => {
    v(), L();
  }), v();
  let M = me(t);
  e.add(a2, "Focus on click").onChange((C) => {
    C ? t.on("click", M) : t.off("click", M);
  }), a2["Focus on click"] && t.on("click", M), e.add(a2, "persist"), e.add(a2, "Focus on current floor");
  let B = H$1((C) => {
    e._closed || (a2.center_lat = C.center.latitude, a2.center_lon = C.center.longitude, a2.zoomLevel = C.zoomLevel, a2.bearing = C.bearing, a2.pitch = C.pitch);
  }, "onCameraChanged");
  t.on("camera-change", B);
  let { params: K } = yt("camera", a2);
  if (Object.keys(K).length > 0) {
    let C = K;
    t.Camera.setScreenOffsets({ top: C.inset_top, left: C.inset_left, right: C.inset_right, bottom: C.inset_bottom, type: C.inset_type });
    let E = { pitch: C.pitch, center: new ve$1(C.center_lat, C.center_lon), bearing: C.bearing, zoomLevel: C.zoomLevel };
    C.animateOnLoad ? t.Camera.animateTo(E) : t.Camera.set(E), e.load({ controllers: C, folders: {} }), b();
  }
  let Vt = [() => {
    t.off("camera-change", B);
  }];
  function L() {
    t.Camera.setScreenOffsets({ top: a2.inset_top, left: a2.inset_left, right: a2.inset_right, bottom: a2.inset_bottom, type: a2.inset_type }), b();
  }
  H$1(L, "updateInset"), (a2.inset_top || a2.inset_right || a2.inset_bottom || a2.inset_left) && L();
  function Et(C) {
    b(), C ? s.style.display = "block" : s.style.display = "none";
  }
  return H$1(Et, "visualizeInsetUpdated"), () => ({ destroy() {
    e.destroy(), Tt(Vt);
  } });
}
H$1(Ut, "createCameraControls");
function me(i) {
  return H$1(function(o) {
    var s;
    let { spaces: e, objects: r } = o, l = (s = e[0]) != null ? s : r[0];
    l && i.Camera.focusOn(l);
  }, "handler");
}
H$1(me, "createHandler");
a();
function Ht(i, t, o) {
  let e = { markers: {}, removeAllMarkers() {
    o.Markers.removeAll().forEach((b) => {
      delete this.markers[b.id];
    }), c();
  } }, { addMarker: r, destroy: l } = ye(i, o);
  i.add(e, "removeAllMarkers");
  let s = i.addFolder("Marker List");
  i.close();
  let d = /* @__PURE__ */ new Map(), { rerender: c } = g();
  function g() {
    function a2(m) {
      var y;
      delete e.markers[m.id], (y = d.get(m.id)) == null || y.destroy();
    }
    H$1(a2, "remove");
    function b(m) {
      let y = be(o, m, s, { onRemove: H$1((v) => {
        a2(v);
      }, "onRemove") });
      if (!y) return;
      let { markerItemFolder: f } = y;
      d.set(m.id, f);
    }
    H$1(b, "add");
    function u() {
      s.destroy(), s = i.addFolder("marker");
      for (let m in e.markers) {
        let y = e.markers[m];
        b(y);
      }
    }
    return H$1(u, "rerender"), { rerender: u, add: b, remove: a2 };
  }
  H$1(g, "createMarkerControls"), i.domElement.classList.add("list-items");
  let h;
  o.on("click", ({ markers: a2, coordinate: b }) => {
    if (!i._closed) if (a2[0]) {
      h == null || h.close();
      let u = d.get(a2[0].id);
      if (i.open(), !u) return;
      u == null || u.open(), u == null || u.domElement.scrollIntoView({ block: "start" }), u == null || u.domElement.focus(), h = u;
    } else r(b);
  });
  function p(a2) {
    for (let b of a2) e.markers[b.id] = b;
    c();
  }
  return H$1(p, "populateMarkers"), { populateMarkers: p, destroy() {
    l();
  } };
}
H$1(Ht, "createMarkerControls");
function be(i, t, o, { onRemove: e } = {}) {
  let r = o.addFolder("".concat(t.id.toString().substring(0, 8)));
  r.onChange((c) => {
    i.updateState(t, { interactive: d.interactive });
  }), r.close();
  let l = i.getState(t);
  if ((l == null ? void 0 : l.type) !== "marker") throw new Error("error getting state for marker: ".concat(t.id));
  let { interactive: s } = l;
  if (s == null) throw new Error("incomplte label state");
  let d = { interactive: s, remove() {
    i.Markers.remove(t), e == null || e(t), r.destroy();
  } };
  return r.add(d, "interactive"), r.add(d, "remove"), { markerItemFolder: r, destroy() {
    r.destroy();
  } };
}
H$1(be, "addMarkerControlToFolder");
function ye(i, t) {
  let o = i.addFolder("Add"), e = { onClick: false, interactive: true };
  return o.add(e, "onClick"), o.add(e, "interactive"), { destroy() {
    o.destroy();
  }, addMarker(r) {
    return o._closed || !e.onClick ? void 0 : t.Markers.add(r, "<div>New Marker</div>", { interactive: e.interactive });
  } };
}
H$1(ye, "createAddControl");
a();
function jt(i, t) {
  let o = i.addFolder("Walls").close(), e = { visible: true, topColor: "#b1fa87", color: "#e8e8e8", texture: { url: "" }, topTexture: { url: "" } };
  o.add(e, "visible").onChange((s) => {
    t.updateState("walls", { visible: s });
  }), o.addColor(e, "topColor").onChange((s) => {
    t.updateState("walls", { topColor: s });
  }), o.addColor(e, "color").onChange((s) => {
    t.updateState("walls", { color: s });
  }), o.addFolder("Texture - side").add(e.texture, "url").onFinishChange((s) => {
    t.updateState("walls", { texture: { url: s } });
  }), o.addFolder("Texture - top").add(e.topTexture, "url").onFinishChange((s) => {
    t.updateState("walls", { topTexture: { url: s } });
  }), t.updateState("walls", { topColor: e.topColor }), t.updateState("walls", { color: e.color });
}
H$1(jt, "createGeometryControl");
a();
function Yt(i, t, o) {
  var l, s;
  i.close();
  let e = { language: (s = (l = o.currentLanguage) == null ? void 0 : l.code) != null ? s : "en" }, r = o.getByType("enterprise-venue");
  i.add(e, "language", r == null ? void 0 : r.languages.map((d) => d.code)).onChange((d) => {
    o.changeLanguage(d);
  });
}
H$1(Yt, "createMiscControl");
a();
function Nt(i, t, o) {
  let e = i.addFolder("Debug");
  e.close();
  let r = t.Debug.state, l = { showPolygonLabelTextAreaMesh: r.showPolygonLabelTextAreaMesh, showCollisionBoxes: r.showCollisionBoxes, showEnvMap: r.showEnvMap };
  e.add(l, "showPolygonLabelTextAreaMesh").onChange((s) => {
    t.Debug.update({ showPolygonLabelTextAreaMesh: s });
  }).name("Show Flat Label Text Area Mesh"), e.add(l, "showCollisionBoxes").onChange((s) => {
    t.Debug.update({ showCollisionBoxes: s });
  }).name("Show Collision Boxes"), e.add(l, "showEnvMap").onChange((s) => {
    t.Debug.update({ showEnvMap: s });
  }).name("Show Environment Map"), t.Debug.update(l);
}
H$1(Nt, "createDebugControl");
a();
function Rt(i, t, o) {
  let e = i.addFolder("Text3D").close(), r = { all: H$1(() => {
    t.Text3D.labelAll();
  }, "all"), removeAll: H$1(() => {
    t.Text3D.removeAll();
  }, "removeAll") };
  e.add(r, "all").name("Show All"), e.add(r, "removeAll").name("Remove All");
}
H$1(Rt, "createText3DControl");
a();
a();
a();
var I, X, D, _, P, O, Jt, At, Wt, _t = class _t2 {
  constructor(t = new j({ autoPlace: true })) {
    Q(this, O);
    Q(this, I);
    Q(this, X, []);
    Q(this, D, {});
    Q(this, _, {});
    Q(this, P, {});
    R$1(this, I, t), P$1(this, I).domElement.style.left = "0";
  }
  add(t, o, e) {
    if (P$1(this, _)[t]) throw new Error("Control ".concat(t, " already exists"));
    P$1(this, D)[t] = o, P$1(this, P)[t] = o.default, S$1(this, O, Jt).call(this, t, o, e), this.show();
  }
  addColor(t, o, e) {
    if (P$1(this, _)[t]) throw new Error("Control ".concat(t, " already exists"));
    P$1(this, D)[t] = o, P$1(this, P)[t] = o.default, S$1(this, O, Wt).call(this, t, o, e), this.show();
  }
  update(t, o) {
    if (!P$1(this, _)[t]) throw new Error("Control ".concat(t, " does not exist"));
    P$1(this, _)[t].setValue(o), P$1(this, D)[t].onChange && P$1(this, D)[t].onChange(o, t);
  }
  replace(t, o, e) {
    if (!P$1(this, _)[t]) {
      this.add(t, o, e);
      return;
    }
    o.args && P$1(this, _)[t].options(o.args), o.default && P$1(this, _)[t].setValue(o.default), o.onChange && P$1(this, _)[t].onChange((r) => {
      o.onChange(r, t);
    });
  }
  remove(t) {
    if (!P$1(this, _)[t]) throw new Error("Control ".concat(t, " does not exist"));
    P$1(this, _)[t].destroy(), P$1(this, _)[t].parent.children.length === 0 && P$1(this, _)[t].parent.hide(), delete P$1(this, _)[t], delete P$1(this, D)[t], delete P$1(this, P)[t];
  }
  show() {
    P$1(this, I).show();
  }
  hide() {
    P$1(this, I).hide();
  }
  removeAll() {
    for (let t in P$1(this, _)) this.remove(t);
  }
  destroy() {
    P$1(this, I).destroy();
  }
};
I = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakSet(), Jt = H$1(function(t, o, e) {
  let l = S$1(this, O, At).call(this, e).add(P$1(this, P), t, o.args, o.max, o.step);
  o.onChange && l.onChange((s) => {
    o.onChange(s, t);
  }), o.onAdd && o.onAdd(o.default, t), P$1(this, _)[t] = l;
}, "#addControl"), At = H$1(function(t) {
  if (!t) return P$1(this, I);
  let o = P$1(this, X).find((e) => e._title === t);
  return o ? (o.show(), o) : (o = P$1(this, I).addFolder(t), P$1(this, X).push(o), o);
}, "#getFolder"), Wt = H$1(function(t, o, e) {
  let l = S$1(this, O, At).call(this, e).addColor(P$1(this, P), t);
  o.onChange && l.onChange((s) => {
    o.onChange(s, t);
  }), P$1(this, _)[t] = l;
}, "#addColorControl"), H$1(_t, "GUI");
var xt = _t;
function ve(i, t, o) {
  var d;
  let e = {}, r = i.getByType("floor"), l = i.getByType("floor-stack");
  l.length > 1 && (e.FloorStack = { default: t.currentFloorStack.id, args: l.reduce((c, { id: g, name: h }) => G(F({}, c), { [h]: g }), {}), onChange: H$1((c) => {
    c !== t.currentFloorStack.id && (t.setFloorStack(c), o.replace("Floor", { default: t.currentFloor.id, args: t.currentFloorStack.floors.reduce((g, { id: h, name: p }) => G(F({}, g), { [p]: h }), {}) }));
  }, "onChange") }), r.length > 1 && (e.Floor = { default: t.currentFloor.id, args: [...t.currentFloorStack.floors.sort((c, g) => g.elevation - c.elevation)].reduce((c, { id: g, name: h }) => G(F({}, c), { [h]: g }), {}), onChange: H$1((c) => {
    c !== t.currentFloor.id && t.setFloor(c);
  }, "onChange"), onAdd: H$1(() => {
    t.on("floor-change", (c) => {
      c != null && c.floor.id && (l.length > 1 && o.replace("FloorStack", { default: t.currentFloorStack.id }), o.replace("Floor", { default: t.currentFloor.id, args: t.currentFloorStack.floors.reduce((h, { id: p, name: a2 }) => G(F({}, h), { [a2]: p }), {}) }));
    });
  }, "onAdd") });
  let s = i.getByType("enterprise-venue");
  return s && s.languages.length > 1 && (e.Language = { default: ((d = i.currentLanguage) == null ? void 0 : d.code) || s.languages[0].code, args: s.languages.reduce((c, { code: g, name: h }) => G(F({}, c), { [h]: g }), {}), onChange: H$1((c) => {
    i.changeLanguage(c);
  }, "onChange") }), e;
}
H$1(ve, "createDefaultControls");
function Xt(i, t, o = new j()) {
  let e = new xt(o), r = ve(i, t, e);
  Object.keys(r).length || e.hide();
  for (let l in r) e.add(l, r[l]);
  return e;
}
H$1(Xt, "createGUI");
async function Kt(i, t, { initialfloorsInStack: o, root: e, floorsInDirections: r, showLabelsPerFloor: l = true }) {
  async function s(u) {
    i.StackedMaps.changeFloorOnElevationChanges(false), i.Outdoor.setOpacity(0.15), i.StackedMaps.setFloorVisiblityMode("only-current-floor"), i.Camera.setPanMode("default"), await i.Camera.focusOn(u, { pitch: 10 });
  }
  H$1(s, "zoomToFloor");
  async function d() {
    i.Outdoor.setOpacity(0.25), i.StackedMaps.changeFloorOnElevationChanges(true), i.Camera.setPanMode("elevation"), i.StackedMaps.setFloorVisiblityMode("all-floors"), await i.Camera.focusOn(i.currentFloor, { axisAlignedPadding: { vertical: i.StackedMaps.distanceBetweenFloors }, pitch: 90 });
  }
  H$1(d, "showCurrentFloorWithPadding");
  async function c(u) {
    await i.Camera.animateElevation(u.elevation * i.StackedMaps.distanceBetweenFloors);
  }
  H$1(c, "scrollToFloor");
  let g = i.currentFloor;
  i.on("floor-change", async (u) => {
    i.StackedMaps.expanded && u.reason !== "stacked-maps-elevation-change" && (i.StackedMaps.changeFloorOnElevationChanges(false), i.StackedMaps.setFloorVisiblityMode("all-floors"), await i.Camera.focusOn(g, { axisAlignedPadding: { vertical: i.StackedMaps.distanceBetweenFloors }, pitch: 90, duration: 500 }), i.StackedMaps.changeFloorOnElevationChanges(true), await c(i.currentFloor), await s(i.currentFloor), i.StackedMaps.setFloorVisiblityMode("only-current-floor")), g = i.currentFloor;
  }), i.on("stacked-maps-state-change", ({ state: u }) => {
    console.log("stacked-maps-state-change", u);
  });
  let h = t.getByType("space");
  if (l) {
    let u = h.reduce((m, y) => (m.has(y.floor) || m.set(y.floor, []), y.name && y.name !== "" && m.get(y.floor).push(i.Labels.add(y, y.name)), m), /* @__PURE__ */ new Map());
    i.on("floor-change", () => {
      u.forEach((m, y) => {
        m.forEach((f) => {
          i.updateState(f, { enabled: i.currentFloor === y });
        });
      });
    });
  }
  let p = Xt(t, i, e), a2 = o != null ? o : [];
  async function b() {
    i.Outdoor.setOpacity(0.25), a2 = t.getByType("floor"), await i.Camera.animateTo({ pitch: 90 }), await i.StackedMaps.collapse(), i.StackedMaps.clearCachedFloorSeparationDistance(), await i.StackedMaps.expand({ distanceBetweenFloors: "auto" });
  }
  return H$1(b, "expandAll"), p.add("Expand - All", { default: H$1(async () => {
    await b();
  }, "default") }, "Stack Maps"), r && p.add("Expand - Only Navigation", { default: H$1(async () => {
    i.Outdoor.setOpacity(0.25), a2 = r, await i.StackedMaps.collapse(), i.setFloor(r[0]), await i.StackedMaps.expand({ includedFloors: r, distanceBetweenFloors: "auto" });
  }, "default") }, "Stack Maps"), p.add("Show All Floors", { default: H$1(async () => {
    a2 = t.getByType("floor"), i.Outdoor.setOpacity(0.25), i.StackedMaps.setFloorVisiblityMode("all-floors"), i.StackedMaps.changeFloorOnElevationChanges(false), i.Camera.setPanMode("elevation"), i.Camera.focusOn(a2, { pitch: 90 });
  }, "default") }, "Stack Maps"), p.add("Show Current Floor with padding", { default: H$1(async () => {
    await d();
  }, "default") }, "Stack Maps"), p.add("Zoom to Current Floor", { default: H$1(async () => {
    s(i.currentFloor);
  }, "default") }, "Stack Maps"), p.add("Collapse", { default: H$1(() => {
    i.Outdoor.setOpacity("initial"), i.StackedMaps.collapse();
  }, "default") }, "Stack Maps"), p.add("Default", { default: H$1(async () => {
    i.Camera.setPanMode("default");
  }, "default") }, "Camera Pan Mode"), p.add("Elevation", { default: H$1(async () => {
    i.Camera.setPanMode("elevation");
  }, "default") }, "Camera Pan Mode"), p.add("zoom in to floor 2", { default: H$1(async () => {
    i.Outdoor.setOpacity(0.25), console.log(i.currentFloor.name), await i.Camera.focusOn(i.currentFloor, { axisAlignedPadding: { vertical: i.StackedMaps.distanceBetweenFloors }, pitch: 90 }), i.StackedMaps.expanded || await i.StackedMaps.expand({ distanceBetweenFloors: i.StackedMaps.distanceBetweenFloors });
    let u = i.StackedMaps.includedFloors[2], m = a2.findIndex((y) => y.id === u.id);
    i.StackedMaps.changeFloorOnElevationChanges(true), i.Camera.setPanMode("elevation"), i.StackedMaps.setFloorVisiblityMode("all-floors"), await i.Camera.animateElevation(m * i.StackedMaps.distanceBetweenFloors), i.Outdoor.setOpacity(0.15), console.log("focusing on", u.name), await i.Camera.focusOn(u, { pitch: 10 }), i.StackedMaps.setFloorVisiblityMode("only-current-floor"), i.Camera.setPanMode("default"), i.StackedMaps.changeFloorOnElevationChanges(false);
  }, "default") }, "Camera Pan Mode"), p.add("All Floors", { default: H$1(async () => {
    i.StackedMaps.setFloorVisiblityMode("all-floors");
  }, "default") }, "Visibility Mode"), p.add("Only Active Floor", { default: H$1(async () => {
    i.StackedMaps.setFloorVisiblityMode("only-current-floor");
  }, "default") }, "Visibility Mode"), p.add("Up", { default: H$1(async () => {
    let u = a2.find((m) => m.elevation === i.currentFloor.elevation + 1);
    u && await c(u);
  }, "default") }, "Floors Up/Down"), p.add("Down", { default: H$1(async () => {
    let u = a2.find((m) => m.elevation === i.currentFloor.elevation - 1);
    u && await c(u);
  }, "default") }, "Floors Up/Down"), { zoomToFloor: s, expandAll: b };
}
H$1(Kt, "createStackMapsControl");
function Zt(i, t, o) {
  let e = i.addFolder("StackedMaps");
  e.close(), Kt(t, o, { root: e, showLabelsPerFloor: false });
}
H$1(Zt, "createStackmapsControl");
function qt(i, t, o) {
  Ce();
  let e = new V({ title: "SDK Controls" });
  e.domElement.classList.add("mappedin-js-inspector"), Pt(t, i, e), Ut(e, t, o == null ? void 0 : o.camera);
  let r = e.addFolder("Levels").close(), l = e.addFolder("Scene Controls");
  l.close();
  let s = e.addFolder("Labels");
  Rt(e, t);
  let d = e.addFolder("Markers");
  jt(e, t), Zt(e, t, i);
  let c = e.addFolder("misc");
  Nt(e, t), Yt(c, t, i);
  let g = { level: t.currentFloor.id }, { populatelabels: h } = Bt(s, i, t), { populateMarkers: p } = Ht(d, i, t), a2 = i.getByType("floor").reduce((u, m) => (u[m.name] = m.id, u), {}), b = r.add(g, "level", a2).onChange((u) => {
    t.setFloor(u), g.level = t.currentFloor.id, b.updateDisplay();
  });
  return t.on("floor-change-start", (u) => {
    r.controllers[0].setValue(u.floor.id);
  }), i.getByType("space").forEach((u) => {
    t.updateState(u, { interactive: true });
  }), i.getByType("object").forEach((u) => {
    t.updateState(u, { interactive: true });
  }), i.getByType("object").forEach((u) => {
    t.updateState(u, { interactive: true });
  }), t.setHoverColor("#a2b7e6"), t.Camera.setMaxZoomLevel(20), { populatelabels: h, sceneFolder: l, populateMarkers: p };
}
H$1(qt, "createUi");
var Qt = "mappedin-sdk-debug-css";
function Ce() {
  if (document.getElementById(Qt)) return;
  let i = document.createElement("style");
  i.id = Qt, i.textContent = zt, document.head.appendChild(i);
}
H$1(Ce, "injectCss");
var kt = class kt2 {
  constructor(t, o) {
    O$1(this, "_enabled", false);
    O$1(this, "mv");
    O$1(this, "api");
    O$1(this, "mapData");
    O$1(this, "scenegraphVisualizerMounted", false);
    O$1(this, "storeStateToLocalStorageEnabled", false);
    this.mv = t, this.api = o, this.mapData = this.api.getMapData();
  }
  setMapData(t) {
    this.mapData = t;
  }
  async enable(t = {}) {
    var e;
    if (this._enabled) return;
    if (this._enabled = true, !this.mapData) throw new Error("Please set mapData before enable debug.");
    let { sceneFolder: o } = qt(this.mapData, this.mv, t);
    o.onOpenClose((r) => {
      r === o && !r._closed && !this.scenegraphVisualizerMounted && (this.scenegraphVisualizerMounted = true, WW(this.api.core, o));
    }), (e = this.api.getMapDataInternal()) == null || e.spaces.forEach((r) => {
      this.mv.updateState(r.id, { interactive: true });
    });
  }
  get enabled() {
    return this._enabled;
  }
};
H$1(kt, "Inspector");
var Mt = kt;
export {
  Mt as Inspector
};
