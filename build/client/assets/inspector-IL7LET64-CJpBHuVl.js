import{M as k,aP as ae,m as z,aQ as ee,aR as re,aS as R,y as V,F as te,E as D,p as se,aT as W,aU as de,$ as x}from"./index-CTgVHcLT.js";import"./chunk-UIGDSWPH-74DChMva.js";import"./index-Boai_r5o.js";x();x();x();x();var L=class O{constructor(e,n,i,r,l="div"){this.parent=e,this.object=n,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(l),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),O.nextNameID=O.nextNameID||0,this.$name.id="lil-gui-name-".concat(++O.nextNameID),this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",h=>h.stopPropagation()),this.domElement.addEventListener("keyup",h=>h.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let n=this.parent.add(this.object,this.property,e);return n.name(this._name),this.destroy(),n}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},he=class extends L{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function j(t){let e,n;return(e=t.match(/(#|0x)?([a-f0-9]{6})/i))?n=e[2]:(e=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),n?"#"+n:!1}var ce={isPrimitive:!0,match:t=>typeof t=="string",fromHexString:j,toHexString:j},S={isPrimitive:!0,match:t=>typeof t=="number",fromHexString:t=>parseInt(t.substring(1),16),toHexString:t=>"#"+t.toString(16).padStart(6,0)},ue={isPrimitive:!1,match:t=>Array.isArray(t),fromHexString(t,e,n=1){let i=S.fromHexString(t);e[0]=(i>>16&255)/255*n,e[1]=(i>>8&255)/255*n,e[2]=(i&255)/255*n},toHexString([t,e,n],i=1){i=255/i;let r=t*i<<16^e*i<<8^n*i<<0;return S.toHexString(r)}},pe={isPrimitive:!1,match:t=>Object(t)===t,fromHexString(t,e,n=1){let i=S.fromHexString(t);e.r=(i>>16&255)/255*n,e.g=(i>>8&255)/255*n,e.b=(i&255)/255*n},toHexString({r:t,g:e,b:n},i=1){i=255/i;let r=t*i<<16^e*i<<8^n*i<<0;return S.toHexString(r)}},ge=[ce,S,ue,pe];function me(t){return ge.find(e=>e.match(t))}var fe=class extends L{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=me(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=j(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){let e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},H=class extends L{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},be=class extends L{constructor(t,e,n,i,r,l){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(r);let h=l!==void 0;this.step(h?l:this._getImplicitStep(),h),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){let t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let t=()=>{let s=parseFloat(this.$input.value);isNaN(s)||(this._stepExplicit&&(s=this._snap(s)),this.setValue(this._clamp(s)))},e=s=>{let m=parseFloat(this.$input.value);isNaN(m)||(this._snapClampSetValue(m+s),this.$input.value=this.getValue())},n=s=>{s.key==="Enter"&&this.$input.blur(),s.code==="ArrowUp"&&(s.preventDefault(),e(this._step*this._arrowKeyMultiplier(s))),s.code==="ArrowDown"&&(s.preventDefault(),e(this._step*this._arrowKeyMultiplier(s)*-1))},i=s=>{this._inputFocused&&(s.preventDefault(),e(this._step*this._normalizeMouseWheel(s)))},r=!1,l,h,o,d,p,c=5,g=s=>{l=s.clientX,h=o=s.clientY,r=!0,d=this.getValue(),p=0,window.addEventListener("mousemove",u),window.addEventListener("mouseup",b)},u=s=>{if(r){let m=s.clientX-l,y=s.clientY-h;Math.abs(y)>c?(s.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(m)>c&&b()}if(!r){let m=s.clientY-o;p-=m*this._step*this._arrowKeyMultiplier(s),d+p>this._max?p=this._max-d:d+p<this._min&&(p=this._min-d),this._snapClampSetValue(d+p)}o=s.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",b)},a=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",g),this.$input.addEventListener("focus",a),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");let t=(s,m,y,A,F)=>(s-m)/(y-m)*(F-A)+A,e=s=>{let m=this.$slider.getBoundingClientRect(),y=t(s,m.left,m.right,this._min,this._max);this._snapClampSetValue(y)},n=s=>{this._setDraggingStyle(!0),e(s.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=s=>{e(s.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)},l=!1,h,o,d=s=>{s.preventDefault(),this._setDraggingStyle(!0),e(s.touches[0].clientX),l=!1},p=s=>{s.touches.length>1||(this._hasScrollBar?(h=s.touches[0].clientX,o=s.touches[0].clientY,l=!0):d(s),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",g))},c=s=>{if(l){let m=s.touches[0].clientX-h,y=s.touches[0].clientY-o;Math.abs(m)>Math.abs(y)?d(s):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",g))}else s.preventDefault(),e(s.touches[0].clientX)},g=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",g)},u=this._callOnFinishChange.bind(this),b=400,a,f=s=>{if(Math.abs(s.deltaX)<Math.abs(s.deltaY)&&this._hasScrollBar)return;s.preventDefault();let m=this._normalizeMouseWheel(s)*this._step;this._snapClampSetValue(this.getValue()+m),this.$input.value=this.getValue(),clearTimeout(a),a=setTimeout(u,b)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",p,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-".concat(e),t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){let t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},ve=class extends L{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{let n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){let t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}},ye=class extends L{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},xe=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function we(t){let e=document.createElement("style");e.innerHTML=t;let n=document.querySelector("head link[rel=stylesheet], head style");n?document.head.insertBefore(e,n):document.head.appendChild(e)}var K=!1,Ce=class ie{constructor({parent:e,autoPlace:n=e===void 0,container:i,width:r,title:l="Controls",closeFolders:h=!1,injectStyles:o=!0,touchStyles:d=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",p=>{(p.code==="Enter"||p.code==="Space")&&(p.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(l),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),d&&this.domElement.classList.add("allow-touch-styles"),!K&&o&&(we(xe),K=!0),i?i.appendChild(this.domElement):n&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=h}add(e,n,i,r,l){if(Object(i)===i)return new ve(this,e,n,i);let h=e[n];switch(typeof h){case"number":return new be(this,e,n,i,r,l);case"boolean":return new he(this,e,n);case"string":return new ye(this,e,n);case"function":return new H(this,e,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,e,`
	value:`,h)}addColor(e,n,i=1){return new fe(this,e,n,i)}addFolder(e){let n=new ie({parent:this,title:e});return this.root._closeFolders&&n.close(),n}load(e,n=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof H||i._name in e.controllers&&i.load(e.controllers[i._name])}),n&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){let n={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof H)){if(i._name in n.controllers)throw new Error('Cannot save GUI with duplicate property "'.concat(i._name,'"'));n.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in n.folders)throw new Error('Cannot save GUI with duplicate folder "'.concat(i._title,'"'));n.folders[i._title]=i.save()}),n}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("transition");let i=l=>{l.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(n=>{e=e.concat(n.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(n=>{e=e.concat(n.foldersRecursive())}),e}},ne=Ce;x();x();var E=(()=>{let t=new se;return function(e){return t.set(e),"#".concat(t.getHexString())}})();function Ae(t){let e;for(e of t)e()}function Z(t,e){let n=window.location.href,i=new URL(n),r=new URLSearchParams(i.search);for(let l in t)if(t.hasOwnProperty(l)){let h="".concat(e,".").concat(l);r.set(h,t[l])}i.search=r.toString(),history.pushState({path:i.toString()},"",i.toString())}function U(t,e){let n=new URLSearchParams(window.location.search),i={};for(let[r,l]of n)if(r.startsWith("".concat(t,"."))){let h=r.slice(t.length+1);l==="true"||l==="false"?i[h]=l==="true":typeof e?.[h]=="number"?i[h]=Number(l):i[h]=l}return{namespace:t,params:i}}var _e=["interactive"];function le(t,e,n){var i,r;let l={id:e.id,__type:e.__type},h=n.addFolder("".concat(e.type,"-").concat(e.id));for(let o in e){if(o==="visible"&&h.add(e,o).onChange(d=>{t.updateState(l,{[o]:d})}),o==="color"||o==="hoverColor"){e[o]=E(e[o]),h.addColor(e,o).onChange(d=>{t.updateState(l,{[o]:d})});continue}if(o==="height"){h.add(e,o,0,20,1).onChange(d=>{t.updateState(l,{[o]:d})});continue}if(o==="texture"&&e.texture){(i=h.addFolder("Texture - side").add(e,"texture"))==null||i.onChange(d=>{t.updateState(l,{texture:{url:d}})});continue}if(o==="topTexture"&&e.topTexture){(r=h.addFolder("Texture - top").add(e,"topTexture"))==null||r.onChange(d=>{t.updateState(l,{topTexture:{url:d}})});continue}if(o==="opacity"){h.add(e,o,0,1,.1).onChange(d=>{t.updateState(l,{[o]:d})});continue}if(o==="altitude"){h.add(e,o,0,100,1).onChange(d=>{t.updateState(l,{[o]:d})});continue}_e.includes(o)&&h.add(e,o).onChange(d=>{t.updateState(l,{[o]:d})})}return e.isInView&&(h.add(e,"isInView").listen().disable(),h.add(e,"isInViewCheck")),{cleanup(){h.destroy()}}}x();x();function Ee(){let t=[];function e(r,l){var h;let o=Object.values(r.getMapData())[0],d=l;if(d&&ee.is(d)){let p=(h=o.getByType("enterprise-location"))==null?void 0:h.find(c=>c.spaces.some(g=>g.id===d.id));p&&(d=p)}return d}async function n(r,l){return l instanceof V?r.Camera.focusOn(l.locations.flatMap(h=>h.spaces),$):l instanceof z?r.Camera.focusOn(l.spaces,$):r.Camera.focusOn(l,$)}function i(r,l,{focus:h=!1}={}){if(!window.enableHighlightCard)return()=>{};let o=e(r,l),d=document.createElement("div");if(d.style.cssText=`
				position: absolute;
				top: 20px;
				left: 20px;
				background-color: rgba(30, 30, 30, 0.95);
				box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
				border-radius: 12px;
				padding: 24px;
				max-width: 320px;
				z-index: 1000;
				font-family: 'Arial', sans-serif;
				transition: all 0.3s ease;
				color: #e0e0e0;
			`,"name"in o){let c=document.createElement("h3");c.textContent=o.name,c.style.cssText=`
				margin: 0 0 16px;
				font-size: 22px;
				font-weight: 600;
				color: #ffffff;
				letter-spacing: -0.5px;
			`,d.appendChild(c)}if(o instanceof z){if(o.description){let c=document.createElement("p");c.textContent=o.description,c.style.cssText=`
					margin: 0 0 16px;
					font-size: 14px;
					color: #b0b0b0;
					line-height: 1.5;
				`,d.appendChild(c)}if(o.tags&&o.tags.length>0){let c=document.createElement("div");c.style.cssText=`
					display: flex;
					flex-wrap: nowrap;
					gap: 8px;
					margin-bottom: 16px;
					overflow-x: hidden;
					max-height: 30px; /* Adjust this value based on your font size and padding */
				`,o.tags.forEach(g=>{let u=document.createElement("span");u.textContent=g,u.style.cssText=`
						background-color: #3a3a3a;
						color: #e0e0e0;
						padding: 6px 12px;
						border-radius: 16px;
						font-size: 12px;
						font-weight: 500;
						text-transform: uppercase;
						white-space: nowrap;
					`,c.appendChild(u)}),d.appendChild(c)}}let p;if(!(l instanceof V)){let c=new ne({autoPlace:!1});c.domElement.style.cssText=`
					position: relative;
					overflow-y: auto;
					margin-top: 16px;
					border-top: 1px solid #444;
					padding-top: 16px;
				`;let g=r.getState(l);g&&(le(r,D({id:l.id},g),c),d.appendChild(c.domElement)),p=c}return document.body.appendChild(d),h&&n(r,o),()=>{d.style.opacity="0",d.style.transform="translateY(-10px)",setTimeout(()=>d.remove(),300),p?.destroy()}}return{highlightCard:i,highlight:(r,l,{focus:h=!0}={})=>{t.length>0&&t.forEach(d=>r.Markers.remove(d));let o=e(r,l);if(o instanceof z)h&&r.Camera.focusOn(o.spaces,$),t.push(...o.spaces.map(d=>r.Markers.add(d,`<div style="padding: 15px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width: 250px; position: relative;">
							<h3 style="margin: 0 0 10px; color: #333; font-size: 16px; font-weight: 600;">`.concat(o.name,`</h3>
							`).concat(o.description?'<p style="margin: 0 0 10px; color: #666; font-size: 14px; font-weight: 400;">'.concat(o.description,"</p>"):"",`
							`).concat(o.tags?o.tags.map(p=>'<span style="display: inline-block; padding: 3px 8px; background-color: #e0f2f1; color: #00796b; border-radius: 12px; font-size: 12px;">'.concat(p,"</span>")).join(" "):"",`
							<div style="position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 10px solid #ffffff;"></div>
						</div>`),{rank:"always-visible",placement:"top"})));else if(o instanceof V){h&&r.Camera.focusOn(o.locations.flatMap(c=>c.spaces),$);let d=new Map,p=new Set;o.locations.forEach(c=>{d.has(c.name)||(c.spaces.forEach(g=>{t.push(r.Markers.add(g,`<div style="padding: 12px; background-color: rgba(0, 153, 51, 0.95); border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); transform: translateY(-4px); transition: all 0.3s ease;">
									<span style="font-weight: 600; color: #FFFFFF; font-size: 16px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">`.concat(c.name,`</span>
								</div>`),{rank:"always-visible"}))}),d.set(c.name,!0))}),o.locations.forEach(c=>{c.coordinates.forEach(g=>{let u="".concat(g.latitude,",").concat(g.longitude);if(!p.has(u)&&!d.has(c.name)){let b=r.Markers.add(g,`<div style="padding: 10px; background-color: rgba(51, 102, 204, 0.9); border-radius: 6px; box-shadow: 0 3px 6px rgba(0,0,0,0.2);">
								<span style="font-weight: 500; color: #FFFFFF; font-size: 16px;">`.concat(c.name,`</span>
								<br>
								<span style="color: #FFFFFF; font-size: 12px; font-weight: 400;">Node</span>
							</div>`),{rank:"always-visible"});p.add(u),t.push(b)}})})}return()=>{t.forEach(d=>r.Markers.remove(d))}}}}var $={duration:300,easing:"ease-in-out"},B=Ee();x();var C={search:"",results:void 0,options:{places:{fields:{name:!0,description:!0,link:!0,category:!0},limit:5},locations:{fields:{name:!0,tag:!0,description:!0},limit:5},categories:{fields:{name:!0},limit:5}}};function ke(t){t.add(C.options.places.fields,"name").name("Places: Name"),t.add(C.options.places.fields,"description").name("Places: Description"),t.add(C.options.places.fields,"link").name("Places: Link"),t.add(C.options.places.fields,"category").name("Places: Category"),t.add(C.options.places,"limit"),t.add(C.options.locations.fields,"name").name("Locations: Name"),t.add(C.options.locations.fields,"tag").name("Locations: Tag"),t.add(C.options.locations.fields,"description").name("Locations: Description"),t.add(C.options.places,"limit"),t.add(C.options.categories.fields,"name").name("Categories: Name")}function Le(t,e,n){var i;let r=new R,l=n.addFolder("Search");l.open();let h=l.add(C,"search").onChange(async g=>{let u=await e.Search.query(g,C.options);u&&(C.results=u,d(u,r))}),o=document.createElement("div");o.style.marginLeft="10px",(i=h.domElement.parentElement)==null||i.appendChild(o);let{renderSearch:d,close:p}=$e(t,e,o,h.$input),c=l.addFolder("Advanced");return c.close(),ke(c),document.addEventListener("keydown",g=>{(g.metaKey||g.ctrlKey)&&g.key==="k"?(g.preventDefault(),l._closed&&l.open(),h.$input.focus()):g.key==="Escape"&&(p(),r.publish("highlight",void 0))}),{pubsub:r}}function $e(t,e,n,i){let r,l;i.addEventListener("input",async o=>{o instanceof InputEvent&&(o.inputType==="insertText"||o.inputType==="insertCompositionText")&&(clearTimeout(r),r=setTimeout(async()=>{var d;let p=await e.Search.suggest(i.value);p&&p.length>0&&h((d=p[0])==null?void 0:d.suggestion)},100))});function h(o){if(!o){i.placeholder="";return}let d=i.value;i.value=o,i.setSelectionRange(d.length,o.length)}return{renderSearch(o,d){var p,c;if(o.places.length===0&&((p=o.enterpriseCategories)==null?void 0:p.length)===0&&((c=o.enterpriseLocations)==null?void 0:c.length)===0){n.textContent="No results found.";return}l=Se(n,o,t,d)},close(){l.destroy()}}}function Se(t,e,n,i){t.innerHTML="";let r=document.createElement("div");Object.assign(r.style,M.dropdownContainer);let l=document.createElement("ul");l.className="options-list",Object.assign(l.style,M.optionsList),l.style.display="block";let h=[],o=(u,b)=>{if(b&&b.length>0){let a=document.createElement("li");a.textContent=u,Object.assign(a.style,M.sectionHeader),l.appendChild(a),b.forEach((f,s)=>{let m=document.createElement("li");m.textContent="".concat("name"in f.item?f.item.name:""," (").concat(f.type,")"),Object.assign(m.style,M.option),m.tabIndex=0,m.addEventListener("focus",()=>{p(h.indexOf(m))}),m.addEventListener("mouseover",()=>{m.style.backgroundColor="#f0f0f0"}),m.addEventListener("mouseout",()=>{m.style.backgroundColor=""}),m.addEventListener("click",()=>{}),m.setAttribute("data-type",u),m.setAttribute("data-index",s.toString()),l.appendChild(m),h.push(m)})}};o("enterpriseLocations",e.enterpriseLocations),o("enterpriseCategories",e.enterpriseCategories),o("Places",e.places),r.appendChild(l),t.appendChild(r);let d=[],p=u=>{d.forEach(m=>m()),d=[],h.forEach((m,y)=>{y===u?m.style.backgroundColor="#e0e0e0":m.style.backgroundColor=""});let b=h[u],a=b.getAttribute("data-type"),f=parseInt(b.getAttribute("data-index")||"0",10);if(!a)return;let{item:s}=e[a.toLowerCase()][f];i.publish("highlight",s)},c=u=>{!r.contains(u.target)&&u.target!==t&&g()};document.addEventListener("click",c);let g=()=>{t.innerHTML="",document.removeEventListener("click",c)};return{destroy(){t.innerHTML="",i.publish("highlight",void 0)}}}var M={dropdownContainer:{position:"absolute",color:"#202020"},optionsList:{display:"block",zIndex:"1002",position:"relative",maxHeight:"200px",overflowY:"auto",border:"1px solid #ccc",backgroundColor:"#fff",listStyleType:"none",margin:"0",padding:"0"},sectionHeader:{fontWeight:"bold",padding:"5px",backgroundColor:"#f0f0f0"},option:{padding:"5px",cursor:"pointer"}};function Fe(t,e,n){n.domElement.id="interactionPanel";let i=[],{pubsub:r}=Le(t,e,n);r.on("highlight",c=>{if(c){i.forEach(u=>u()),i=[];let g=c instanceof z?c.spaces[0]:c;if(t.Camera.focusOn(c),g&&!ee.is(g))return;i.push(B.highlightCard(t,g,{focus:!0}))}else i.forEach(g=>g()),i=[]});let l=n.addFolder("Click 👇").close(),{sub:h}=Me(t,l);h.on("click",c=>{var g;i.forEach(u=>u()),i=[],(g=c.spaces)!=null&&g[0]&&(i=[B.highlightCard(t,c.spaces[0])])});let o=n.addFolder("Hover 🚁").close(),{sub:d}=ze(t,o),p;d.on("hover",c=>{var g;(g=c.spaces)!=null&&g[0]?(p?.(),i.length===0&&(p=B.highlightCard(t,c.spaces[0]))):(p?.(),p=void 0)})}function Me(t,e){let n=new R,i={position:"",hoverColor:E(t.getHoverColor())},r=e.add(i,"position").disable(),l=[];function h(){l.forEach(d=>d()),l.length=0}let o=0;return t.on("click",d=>{var p,c,g;let{labels:u,coordinate:b}=d;h(),n.publish("click",d),clearInterval(o),r.load(JSON.stringify([b.longitude,b.latitude]));let a=u?.[0];if(a!=null){let s=N(t,a,e);if(!s)return;l.push(s.destroy),s.labelItemFolder.openAnimated()}let f=(g=(p=d.spaces)==null?void 0:p[0])!=null?g:(c=d.objects)==null?void 0:c[0];if(f){let s=te(D(D({},f),t.getState(f)),{isInView:!1,isInViewCheck:Y(t,f.id)}),{cleanup:m}=le(t,s,e);o=setInterval(()=>{s.isInView=t.isInView(a||f)},500),l.push(m)}}),{sub:n}}function ze(t,e){let n=new R;t.setHoverColor("#1f3a7a");let i={position:"",hoverColor:E(t.getHoverColor()),intersected:"",type:"",id:""},r=e.add(i,"position").disable();e.add(i,"id").disable().listen(),e.add(i,"type").disable().listen(),e.addColor(i,"hoverColor").onChange(o=>{t.setHoverColor(o)});let l=[];function h(){l.forEach(o=>o()),l.length=0}return t.on("hover",o=>{var d,p,c;let{coordinate:g,spaces:u,objects:b,markers:a,labels:f}=o;h(),n.publish("hover",o),r.load(JSON.stringify([g.longitude,g.latitude]));let s=(c=(p=(d=u?.[0])!=null?d:b?.[0])!=null?p:a?.[0])!=null?c:f?.[0];if(!s)return;let m=t.getState(s);m&&(i.type=m.type,i.id=s.id)}),{sub:n}}function Y(t,e){return function(){console.log("isInView",t.isInView(e))}}function Oe(t,e,n){let i={labels:{},all(){n.Labels.__EXPERIMENTAL__all().forEach(u=>{this.labels[u.id]=u}),d()},removeAllLabels(){n.Labels.removeAll().forEach(u=>{delete this.labels[u.id]}),d()}},{addLabel:r,destroy:l}=Pe(t,n);t.add(i,"all"),t.add(i,"removeAllLabels");let h=t.addFolder("Label List");t.close();let o=new Map,{rerender:d}=p();function p(){function u(f){var s;delete i.labels[f.id],(s=o.get(f.id))==null||s.destroy()}function b(f){let s=N(n,f,h,{onRemove:y=>{u(y)}});if(!s)return;let{labelItemFolder:m}=s;o.set(f.id,m)}function a(){h.destroy(),h=t.addFolder("Label");for(let f in i.labels){let s=i.labels[f];b(s)}}return{rerender:a,add:b,remove:u}}t.domElement.classList.add("list-items");let c;n.on("click",({labels:u,coordinate:b})=>{if(!t._closed)if(u!=null&&u[0]){c?.close();let a=o.get(u[0].id);if(t.open(),!a)return;a?.open(),a?.domElement.scrollIntoView({block:"start"}),a?.domElement.focus(),c=a}else r(b)});function g(u){for(let b of u)i.labels[b.id]=b;d()}return{populatelabels:g,destroy(){l()}}}function De(t,e,n,i,r){var l,h,o;let{interactive:d,enabled:p,rank:c,anchor:g,dynamicResize:u,zIndex:b,contentHTML:a,lowPriorityPin:f}=i;if(d==null||p==null)throw new Error("incomplete marker state");let s={interactive:d,enabled:p,rank:c||"medium",anchor:Array.isArray(g)?g.join(", "):g||"center",dynamicResize:u||!1,zIndex:b||0,contentHTML:a||"",lowPriorityPin:{enabled:(l=f?.enabled)!=null?l:!0,size:(h=f?.size)!=null?h:8,color:E((o=f?.color)!=null?o:"#666")},remove(){t.Markers.remove(e),r?.(e),n.destroy()},isInView:Y(t,e.id)};n.onChange(y=>{let A={interactive:s.interactive,enabled:s.enabled,rank:s.rank,dynamicResize:s.dynamicResize,contentHTML:s.contentHTML,lowPriorityPin:{enabled:s.lowPriorityPin.enabled,size:s.lowPriorityPin.size,color:s.lowPriorityPin.color}};s.rank==="always-visible"&&(A.zIndex=s.zIndex),t.updateState(e,A)}),n.add(s,"interactive"),n.add(s,"enabled"),n.add(s,"rank",["medium","high","always-visible","initial"]).name("rank"),n.add(s,"anchor").name("anchor (read-only)").disable(),n.add(s,"dynamicResize").name("dynamic resize"),s.rank==="always-visible"&&n.add(s,"zIndex",0,1e3,1).name("z-index"),n.add(s,"contentHTML").name("content HTML");let m=n.addFolder("Low Priority Pin");m.add(s.lowPriorityPin,"enabled"),m.add(s.lowPriorityPin,"size",1,20,1),m.addColor(s.lowPriorityPin,"color"),m.close(),n.add(s,"isInView"),n.add(s,"remove")}function Ie(t,e,n,i,r){let{appearance:l,interactive:h}=i;if(!l||l.margin==null||h==null)throw new Error("incomplte label state");let o={text:e.text,interactive:h,appearance:te(D({},l),{margin:l.margin||0,pinColor:l.pinColor?E(l.pinColor):"black",textColor:l.textColor?E(l.textColor):"black"}),remove(){t.Labels.remove(e),r?.(e),n.destroy()},isInView:Y(t,e.id)};n.onChange(d=>{t.updateState(e,{appearance:o.appearance,interactive:o.interactive})}),n.add(o.appearance,"margin",0,20).name("margin"),n.add(o,"text"),n.add(o,"interactive"),n.addColor(o.appearance,"pinColor").name("pin color"),n.addColor(o.appearance,"pinOutlineColor").name("pin outline color"),n.addColor(o.appearance,"textColor").name("text color"),n.addColor(o.appearance,"textOutlineColor").name("text outline color"),n.add(o,"isInView"),n.add(o,"remove")}function N(t,e,n,{onRemove:i}={}){var r;let l=t.getState(e);if(!l)throw new Error("error getting state for entity: ".concat(e.id));let h=l.type===W?((r=e.text)==null?void 0:r.substring(0,12))||"Label":"Marker ".concat(e.id.toString().substring(0,8)),o=n.addFolder(h);if(o.close(),l.type===W)Ie(t,e,o,l,i);else if(l.type===de)De(t,e,o,l,i);else throw new Error("unsupported entity type: ".concat(l.type));return{labelItemFolder:o,destroy(){o.destroy()}}}function Pe(t,e){let n=t.addFolder("Add"),i={onClick:!1,margin:6,text:"New Label!",interactive:!0,marginForegroundColor:E("skyblue"),marginBackgroundColor:E("coral"),textForegroundColor:E("slategray"),textBackgroundColor:E("white")};return n.add(i,"onClick"),n.add(i,"margin"),n.add(i,"interactive"),n.add(i,"text"),{destroy(){n.destroy()},addLabel(r){return n._closed||!i.onClick?void 0:e.Labels.add(r,i.text,{appearance:{margin:i.margin,pinColor:i.marginForegroundColor,pinOutlineColor:i.marginBackgroundColor,textColor:i.textForegroundColor,textOutlineColor:i.textBackgroundColor},interactive:i.interactive})}}}var Te={};x();var Q="camera-ui";function Ve(t,e,n){var i,r;let l=t.addFolder("Camera 📷").onOpenClose(v=>{Z({opened:!v._closed},Q)}),{params:h}=U(Q);h.opened||l.close();let o=e.Camera.center.toJSON(),d=document.createElement("div");Object.assign(d.style,{display:"none",position:"absolute",left:"0px",zIndex:999,top:"0px",bottom:"0px",right:"0px",backgroundColor:"aqua",pointerEvents:"none",opacity:.5}),e.container.appendChild(d);let p=()=>e.getDimensions(),[c,g,u,b]=(i=n?.padding)!=null?i:[e.Camera.screenOffsets.top,e.Camera.screenOffsets.right,e.Camera.screenOffsets.bottom,e.Camera.screenOffsets.left],a={center_lat:o.latitude,center_lon:o.longitude,zoomLevel:e.Camera.zoomLevel,pitch:e.Camera.pitch,bearing:e.Camera.bearing,minZoomLevel:e.Camera.minZoomLevel,maxZoomLevel:e.Camera.maxZoomLevel,inset_type:n!=null&&n.padding?"pixel":e.Camera.screenOffsets.type,inset_top:c,inset_left:b,inset_right:g,inset_bottom:u,animateOnLoad:!0,persist:()=>{Z(l.save().controllers,"camera"),navigator.clipboard.writeText(window.location.href)},visualizeInset:!!(c||g||u||b),"Focus on click":(r=n?.focusOnClick)!=null?r:!0,"Focus on current floor":()=>{e.Camera.focusOn([e.currentFloor],{screenOffsets:{top:20,left:20,right:20,bottom:20}})}};function f(){a.inset_type=e.Camera.screenOffsets.type,a.inset_left=e.Camera.screenOffsets.left,a.inset_top=e.Camera.screenOffsets.top,a.inset_right=e.Camera.screenOffsets.right,a.inset_bottom=e.Camera.screenOffsets.bottom;let{width:v,height:w}=p();a.inset_type==="portion"?Object.assign(d.style,{left:a.inset_left*v+"px",top:a.inset_top*w+"px",bottom:a.inset_bottom*w+"px",right:a.inset_right*v+"px"}):Object.assign(d.style,{left:a.inset_left+"px",top:a.inset_top+"px",bottom:a.inset_bottom+"px",right:a.inset_right+"px"})}l.add(a,"center_lat").listen().disable(),l.add(a,"center_lon").listen().disable(),l.add(a,"zoomLevel",16,22,.5).listen().disable(),l.add(a,"pitch").listen().disable(),l.add(a,"bearing").listen().disable(),l.add(a,"minZoomLevel",5,22,.5).onChange(v=>{e.Camera.setMinZoomLevel(v)}),l.add(a,"maxZoomLevel",10,22,.5).onChange(v=>{e.Camera.setMaxZoomLevel(v)}),l.add(a,"animateOnLoad"),l.add(a,"visualizeInset").onChange(X),X(a.visualizeInset);let s,m,y,A;function F(){let{width:v,height:w}=p(),P=e.Camera.screenOffsets.type,T=a.inset_type;P!==T&&(T==="portion"&&P==="pixel"?(a.inset_top=v>0?Math.min(a.inset_top/w,1):0,a.inset_bottom=v>0?Math.min(a.inset_bottom/w,1):0,a.inset_left=w>0?Math.min(a.inset_left/v,1):0,a.inset_right=w>0?Math.min(a.inset_right/v,1):0):T==="pixel"&&P==="portion"&&(a.inset_top=Math.round(a.inset_top*w),a.inset_bottom=Math.round(a.inset_bottom*w),a.inset_left=Math.round(a.inset_left*v),a.inset_right=Math.round(a.inset_right*v))),s&&s.destroy(),m&&m.destroy(),y&&y.destroy(),A&&A.destroy(),a.inset_type==="portion"?(s=l.add(a,"inset_top",0,1,.01).onChange(_),m=l.add(a,"inset_bottom",0,1,.01).onChange(_),y=l.add(a,"inset_left",0,1,.01).onChange(_),A=l.add(a,"inset_right",0,1,.01).onChange(_)):(s=l.add(a,"inset_top",0,w,1).onChange(_),m=l.add(a,"inset_bottom",0,w,1).onChange(_),y=l.add(a,"inset_left",0,v,1).onChange(_),A=l.add(a,"inset_right",0,v,1).onChange(_))}l.add(a,"inset_type",["pixel","portion"]).onChange(()=>{F(),_()}),F();let I=He(e);l.add(a,"Focus on click").onChange(v=>{v?e.on("click",I):e.off("click",I)}),a["Focus on click"]&&e.on("click",I),l.add(a,"persist"),l.add(a,"Focus on current floor");let G=v=>{l._closed||(a.center_lat=v.center.latitude,a.center_lon=v.center.longitude,a.zoomLevel=v.zoomLevel,a.bearing=v.bearing,a.pitch=v.pitch)};e.on("camera-change",G);let{params:J}=U("camera",a);if(Object.keys(J).length>0){let v=J;e.Camera.setScreenOffsets({top:v.inset_top,left:v.inset_left,right:v.inset_right,bottom:v.inset_bottom,type:v.inset_type});let w={pitch:v.pitch,center:new re(v.center_lat,v.center_lon),bearing:v.bearing,zoomLevel:v.zoomLevel};v.animateOnLoad?e.Camera.animateTo(w):e.Camera.set(w),l.load({controllers:v,folders:{}}),f()}let oe=[()=>{e.off("camera-change",G)}];function _(){e.Camera.setScreenOffsets({top:a.inset_top,left:a.inset_left,right:a.inset_right,bottom:a.inset_bottom,type:a.inset_type}),f()}(a.inset_top||a.inset_right||a.inset_bottom||a.inset_left)&&_();function X(v){f(),v?d.style.display="block":d.style.display="none"}return()=>({destroy(){l.destroy(),Ae(oe)}})}function He(t){return function(e){var n;let{spaces:i,objects:r}=e,l=(n=i?.[0])!=null?n:r?.[0];l&&t.Camera.focusOn(l)}}x();function Be(t,e,n){let i={markers:{},removeAllMarkers(){n.Markers.removeAll().forEach(u=>{delete this.markers[u.id]}),d()}},{addMarker:r,destroy:l}=je(t,n);t.add(i,"removeAllMarkers");let h=t.addFolder("Marker List");t.close();let o=new Map,{rerender:d}=p();function p(){function u(f){var s;delete i.markers[f.id],(s=o.get(f.id))==null||s.destroy()}function b(f){let s=N(n,f,h,{onRemove:y=>{u(y)}});if(!s)return;let{labelItemFolder:m}=s;o.set(f.id,m)}function a(){h.destroy(),h=t.addFolder("marker");for(let f in i.markers){let s=i.markers[f];b(s)}}return{rerender:a,add:b,remove:u}}t.domElement.classList.add("list-items");let c;n.on("click",({markers:u,coordinate:b})=>{if(!t._closed)if(u!=null&&u[0]){c?.close();let a=o.get(u[0].id);if(t.open(),!a)return;a?.open(),a?.domElement.scrollIntoView({block:"start"}),a?.domElement.focus(),c=a}else r(b)});function g(u){for(let b of u)i.markers[b.id]=b;d()}return{populateMarkers:g,destroy(){l()}}}function je(t,e){let n=t.addFolder("Add"),i={onClick:!1,interactive:!0,rank:"medium",anchor:"center",dynamicResize:!1,enabled:!0,zIndex:0,lowPriorityPin:{enabled:!0,size:8,color:"#666"},contentHTML:'<div style="padding: 8px; background: white; border: 2px solid #333; border-radius: 4px;">New Marker</div>'};n.add(i,"onClick"),n.add(i,"interactive"),n.add(i,"enabled"),n.add(i,"rank",["medium","high","always-visible","initial"]).name("rank"),n.add(i,"anchor",["center","top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"]).name("anchor"),n.add(i,"dynamicResize").name("dynamic resize"),n.add(i,"zIndex",0,1e3,1).name("z-index (always-visible only)"),n.add(i,"contentHTML").name("content HTML");let r=n.addFolder("Low Priority Pin");return r.add(i.lowPriorityPin,"enabled"),r.add(i.lowPriorityPin,"size",1,20,1),r.addColor(i.lowPriorityPin,"color"),r.close(),{destroy(){n.destroy()},addMarker(l){if(n._closed||!i.onClick)return;let h={interactive:i.interactive,enabled:i.enabled,rank:i.rank,anchor:i.anchor,dynamicResize:i.dynamicResize,lowPriorityPin:{enabled:i.lowPriorityPin.enabled,size:i.lowPriorityPin.size,color:i.lowPriorityPin.color}};return i.rank==="always-visible"&&(h.zIndex=i.zIndex),e.Markers.add(l,i.contentHTML,h)}}}x();function Re(t,e){let n=t.addFolder("Walls").close(),i={visible:!0,topColor:"#b1fa87",color:"#e8e8e8",texture:{url:""},topTexture:{url:""}};n.add(i,"visible").onChange(r=>{e.updateState("exterior-walls",{visible:r})}),n.addColor(i,"topColor").onChange(r=>{e.updateState("exterior-walls",{topColor:r})}),n.addColor(i,"color").onChange(r=>{e.updateState("exterior-walls",{color:r})}),n.addFolder("Texture - side").add(i.texture,"url").onFinishChange(r=>{e.updateState("exterior-walls",{texture:{url:r}})}),n.addFolder("Texture - top").add(i.topTexture,"url").onFinishChange(r=>{e.updateState("exterior-walls",{topTexture:{url:r}})}),e.updateState("exterior-walls",{topColor:i.topColor}),e.updateState("exterior-walls",{color:i.color})}x();function Ye(t,e,n){var i,r;t.close();let l={language:(r=(i=n.currentLanguage)==null?void 0:i.code)!=null?r:"en"},h=n.getByType("enterprise-venue");t.add(l,"language",h?.languages.map(o=>o.code)).onChange(o=>{n.changeLanguage(o)})}x();function Ne(t,e,n){let i=t.addFolder("Debug");i.close();let r=e.Debug.state,l={showPolygonLabelTextAreaMesh:r.showPolygonLabelTextAreaMesh,showCollisionBoxes:r.showCollisionBoxes,showEnvMap:r.showEnvMap};i.add(l,"showPolygonLabelTextAreaMesh").onChange(h=>{e.Debug.update({showPolygonLabelTextAreaMesh:h})}).name("Show Flat Label Text Area Mesh"),i.add(l,"showCollisionBoxes").onChange(h=>{e.Debug.update({showCollisionBoxes:h})}).name("Show Collision Boxes"),i.add(l,"showEnvMap").onChange(h=>{e.Debug.update({showEnvMap:h})}).name("Show Environment Map"),e.Debug.update(l)}x();function Ge(t,e,n){let i=t.addFolder("Text3D").close(),r={all:()=>{e.Text3D.labelAll()},removeAll:()=>{e.Text3D.removeAll()}};i.add(r,"all").name("Show All"),i.add(r,"removeAll").name("Remove All")}function Je(t,e,n){Xe();let i=new ne({title:"SDK Controls"});i.domElement.classList.add("mappedin-js-inspector"),Fe(e,t,i),Ve(i,e,n?.camera);let r=i.addFolder("Levels").close(),l=i.addFolder("Scene Controls");l.close();let h=i.addFolder("Labels");Ge(i,e);let o=i.addFolder("Markers");Re(i,e);let d=i.addFolder("misc");Ne(i,e),Ye(d,e,t);let p={level:e.currentFloor.id},{populatelabels:c}=Oe(h,t,e),{populateMarkers:g}=Be(o,t,e),u=t.getByType("floor").reduce((a,f)=>(a[f.name]=f.id,a),{}),b=r.add(p,"level",u).onChange(a=>{e.setFloor(a),p.level=e.currentFloor.id,b.updateDisplay()});return e.on("floor-change-start",a=>{r.controllers[0].setValue(a.floor.id)}),t.getByType("space").forEach(a=>{e.updateState(a,{interactive:!0})}),t.getByType("object").forEach(a=>{e.updateState(a,{interactive:!0})}),t.getByType("object").forEach(a=>{e.updateState(a,{interactive:!0})}),e.setHoverColor("#a2b7e6"),e.Camera.setMaxZoomLevel(20),{populatelabels:c,sceneFolder:l,populateMarkers:g}}var q="mappedin-sdk-debug-css";function Xe(){if(document.getElementById(q))return;let t=document.createElement("style");t.id=q,t.textContent=Te,document.head.appendChild(t)}var Ue=class{constructor(t,e){k(this,"_enabled",!1),k(this,"mv"),k(this,"api"),k(this,"mapData"),k(this,"scenegraphVisualizerMounted",!1),k(this,"storeStateToLocalStorageEnabled",!1),this.mv=t,this.api=e,this.mapData=this.api.getMapData()}setMapData(t){this.mapData=t}async enable(t={}){var e;if(this._enabled)return;if(this._enabled=!0,!this.mapData)throw new Error("Please set mapData before enable debug.");let{sceneFolder:n}=Je(this.mapData,this.mv,t);n.onOpenClose(i=>{i===n&&!i._closed&&!this.scenegraphVisualizerMounted&&(this.scenegraphVisualizerMounted=!0,ae(this.api.core,n))}),(e=this.api.getMapDataInternal())==null||e.spaces.forEach(i=>{this.mv.updateState(i,{interactive:!0})})}get enabled(){return this._enabled}};export{Ue as Inspector};
