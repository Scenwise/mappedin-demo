import{O as I,c2 as it,g as l,s as Y,c3 as pe,c4 as at,c5 as ie,K as Z,G as O,F as $,y as ot,Q as B,R as rt,j as C,l as R,h as A}from"./index-Q-qB9Xut.js";import"./chunk-C37GKA54-Cea7C6Y9.js";import"./index-Ctv2K4ti.js";A();A();A();A();var ge=class N{constructor(e,i,n,o,r="div"){this.parent=e,this.object=i,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(o),this.$name=document.createElement("div"),this.$name.classList.add("name"),N.nextNameID=N.nextNameID||0,this.$name.id="lil-gui-name-".concat(++N.nextNameID),this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",d=>d.stopPropagation()),this.domElement.addEventListener("keyup",d=>d.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let i=this.parent.add(this.object,this.property,e);return i.name(this._name),this.destroy(),i}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}};l(ge,"Controller");var z=ge,me=class extends z{constructor(e,i,n){super(e,i,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};l(me,"BooleanController");var lt=me;function U(t){let e,i;return(e=t.match(/(#|0x)?([a-f0-9]{6})/i))?i=e[2]:(e=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),i?"#"+i:!1}l(U,"normalizeColorString");var st={isPrimitive:!0,match:l(t=>typeof t=="string","match"),fromHexString:U,toHexString:U},j={isPrimitive:!0,match:l(t=>typeof t=="number","match"),fromHexString:l(t=>parseInt(t.substring(1),16),"fromHexString"),toHexString:l(t=>"#"+t.toString(16).padStart(6,0),"toHexString")},dt={isPrimitive:!1,match:l(t=>Array.isArray(t),"match"),fromHexString(t,e,i=1){let n=j.fromHexString(t);e[0]=(n>>16&255)/255*i,e[1]=(n>>8&255)/255*i,e[2]=(n&255)/255*i},toHexString([t,e,i],n=1){n=255/n;let o=t*n<<16^e*n<<8^i*n<<0;return j.toHexString(o)}},ct={isPrimitive:!1,match:l(t=>Object(t)===t,"match"),fromHexString(t,e,i=1){let n=j.fromHexString(t);e.r=(n>>16&255)/255*i,e.g=(n>>8&255)/255*i,e.b=(n&255)/255*i},toHexString({r:t,g:e,b:i},n=1){n=255/n;let o=t*n<<16^e*n<<8^i*n<<0;return j.toHexString(o)}},ht=[st,j,dt,ct];function fe(t){return ht.find(e=>e.match(t))}l(fe,"getColorFormat");var ve=class extends z{constructor(e,i,n,o){super(e,i,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=fe(this.initialValue),this._rgbScale=o,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=U(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let i=this._format.fromHexString(e);this.setValue(i)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}};l(ve,"ColorController");var ut=ve,be=class extends z{constructor(e,i,n){super(e,i,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",o=>{o.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}};l(be,"FunctionController");var Q=be,ye=class extends z{constructor(e,i,n,o,r,d){super(e,i,n,"number"),this._initInput(),this.min(o),this.max(r);let s=d!==void 0;this.step(s?d:this._getImplicitStep(),s),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,i=!0){return this._step=e,this._stepExplicit=i,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let i=(e-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=l(()=>{let u=parseFloat(this.$input.value);isNaN(u)||(this._stepExplicit&&(u=this._snap(u)),this.setValue(this._clamp(u)))},"onInput"),i=l(u=>{let w=parseFloat(this.$input.value);isNaN(w)||(this._snapClampSetValue(w+u),this.$input.value=this.getValue())},"increment"),n=l(u=>{u.key==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),i(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),i(this._step*this._arrowKeyMultiplier(u)*-1))},"onKeyDown"),o=l(u=>{this._inputFocused&&(u.preventDefault(),i(this._step*this._normalizeMouseWheel(u)))},"onWheel"),r=!1,d,s,c,p,h,m=5,g=l(u=>{d=u.clientX,s=c=u.clientY,r=!0,p=this.getValue(),h=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",a)},"onMouseDown"),v=l(u=>{if(r){let w=u.clientX-d,E=u.clientY-s;Math.abs(E)>m?(u.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(w)>m&&a()}if(!r){let w=u.clientY-c;h-=w*this._step*this._arrowKeyMultiplier(u),p+h>this._max?h=this._max-p:p+h<this._min&&(h=this._min-p),this._snapClampSetValue(p+h)}c=u.clientY},"onMouseMove"),a=l(()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",a)},"onMouseUp"),f=l(()=>{this._inputFocused=!0},"onFocus"),b=l(()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()},"onBlur");this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",o,{passive:!1}),this.$input.addEventListener("mousedown",g),this.$input.addEventListener("focus",f),this.$input.addEventListener("blur",b)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");let e=l((u,w,E,V,H)=>(u-w)/(E-w)*(H-V)+V,"map"),i=l(u=>{let w=this.$slider.getBoundingClientRect(),E=e(u,w.left,w.right,this._min,this._max);this._snapClampSetValue(E)},"setValueFromX"),n=l(u=>{this._setDraggingStyle(!0),i(u.clientX),window.addEventListener("mousemove",o),window.addEventListener("mouseup",r)},"mouseDown"),o=l(u=>{i(u.clientX)},"mouseMove"),r=l(()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",r)},"mouseUp"),d=!1,s,c,p=l(u=>{u.preventDefault(),this._setDraggingStyle(!0),i(u.touches[0].clientX),d=!1},"beginTouchDrag"),h=l(u=>{u.touches.length>1||(this._hasScrollBar?(s=u.touches[0].clientX,c=u.touches[0].clientY,d=!0):p(u),window.addEventListener("touchmove",m,{passive:!1}),window.addEventListener("touchend",g))},"onTouchStart"),m=l(u=>{if(d){let w=u.touches[0].clientX-s,E=u.touches[0].clientY-c;Math.abs(w)>Math.abs(E)?p(u):(window.removeEventListener("touchmove",m),window.removeEventListener("touchend",g))}else u.preventDefault(),i(u.touches[0].clientX)},"onTouchMove"),g=l(()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",m),window.removeEventListener("touchend",g)},"onTouchEnd"),v=this._callOnFinishChange.bind(this),a=400,f,b=l(u=>{if(Math.abs(u.deltaX)<Math.abs(u.deltaY)&&this._hasScrollBar)return;u.preventDefault();let w=this._normalizeMouseWheel(u)*this._step;this._snapClampSetValue(this.getValue()+w),this.$input.value=this.getValue(),clearTimeout(f),f=setTimeout(v,a)},"onWheel");this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",b,{passive:!1})}_setDraggingStyle(e,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-".concat(i),e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:i,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(i=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),i+-n}_arrowKeyMultiplier(e){let i=this._stepExplicit?1:10;return e.shiftKey?i*=10:e.altKey&&(i/=10),i}_snap(e){let i=Math.round(e/this._step)*this._step;return parseFloat(i.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}};l(ye,"NumberController");var pt=ye,Ce=class extends z{constructor(e,i,n,o){super(e,i,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(o)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(i=>{let n=document.createElement("option");n.textContent=i,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),i=this._values.indexOf(e);return this.$select.selectedIndex=i,this.$display.textContent=i===-1?e:this._names[i],this}};l(Ce,"OptionController");var gt=Ce,we=class extends z{constructor(e,i,n){super(e,i,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",o=>{o.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}};l(we,"StringController");var mt=we,ft=`.lil-gui {
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
}`;function xe(t){let e=document.createElement("style");e.innerHTML=t;let i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(e,i):document.head.appendChild(e)}l(xe,"_injectStyles");var ce=!1,Ae=class _e{constructor({parent:e,autoPlace:i=e===void 0,container:n,width:o,title:r="Controls",closeFolders:d=!1,injectStyles:s=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",p=>{(p.code==="Enter"||p.code==="Space")&&(p.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!ce&&s&&(xe(ft),ce=!0),n?n.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),o&&this.domElement.style.setProperty("--width",o+"px"),this._closeFolders=d}add(e,i,n,o,r){if(Object(n)===n)return new gt(this,e,i,n);let d=e[i];switch(typeof d){case"number":return new pt(this,e,i,n,o,r);case"boolean":return new lt(this,e,i);case"string":return new mt(this,e,i);case"function":return new Q(this,e,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,e,`
	value:`,d)}addColor(e,i,n=1){return new ut(this,e,i,n)}addFolder(e){let i=new _e({parent:this,title:e});return this.root._closeFolders&&i.close(),i}load(e,i=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Q||n._name in e.controllers&&n.load(e.controllers[n._name])}),i&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){let i={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Q)){if(n._name in i.controllers)throw new Error('Cannot save GUI with duplicate property "'.concat(n._name,'"'));i.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in i.folders)throw new Error('Cannot save GUI with duplicate folder "'.concat(n._title,'"'));i.folders[n._title]=n.save()}),i}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");let n=l(r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))},"onTransitionEnd");this.$children.addEventListener("transitionend",n);let o=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=o+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(i=>{e=e.concat(i.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(i=>{e=e.concat(i.foldersRecursive())}),e}};l(Ae,"GUI");var ae=Ae,ke=ae;A();A();var M=(()=>{let t=new ot;return l(function(e){return t.set(e),"#".concat(t.getHexString())},"normalize")})();function Ee(t){let e;for(e of t)e()}l(Ee,"runAll");function te(t,e){let i=window.location.href,n=new URL(i),o=new URLSearchParams(n.search);for(let r in t)if(t.hasOwnProperty(r)){let d="".concat(e,".").concat(r);o.set(d,t[r])}n.search=o.toString(),history.pushState({path:n.toString()},"",n.toString())}l(te,"updateCurrentUrlParamsWithNamespace");function ne(t,e){let i=new URLSearchParams(window.location.search),n={};for(let[o,r]of i)if(o.startsWith("".concat(t,"."))){let d=o.slice(t.length+1);r==="true"||r==="false"?n[d]=r==="true":typeof e?.[d]=="number"?n[d]=Number(r):n[d]=r}return{namespace:t,params:n}}l(ne,"getUrlParamsWithNamespace");var vt=["interactive"];function oe(t,e,i){var n,o;let r=i.addFolder("".concat(e.type,"-").concat(e.id));for(let d in e){if(d==="visible"&&r.add(e,d).onChange(s=>{t.updateState(e.id,{[d]:s})}),d==="color"||d==="hoverColor"){e[d]=M(e[d]),r.addColor(e,d).onChange(s=>{t.updateState(e.id,{[d]:s})});continue}if(d==="height"){r.add(e,d,0,20,1).onChange(s=>{t.updateState(e.id,{[d]:s})});continue}if(d==="texture"&&e.texture){(n=r.addFolder("Texture - side").add(e,"texture"))==null||n.onChange(s=>{t.updateState(e.id,{texture:{url:s}})});continue}if(d==="topTexture"&&e.topTexture){(o=r.addFolder("Texture - top").add(e,"topTexture"))==null||o.onChange(s=>{t.updateState(e.id,{topTexture:{url:s}})});continue}if(d==="opacity"){r.add(e,d,0,1,.1).onChange(s=>{t.updateState(e.id,{[d]:s})});continue}if(d==="altitude"){r.add(e,d,0,100,1).onChange(s=>{t.updateState(e.id,{[d]:s})});continue}vt.includes(d)&&r.add(e,d).onChange(s=>{t.updateState(e.id,{[d]:s})})}return e.isInView&&(r.add(e,"isInView").listen().disable(),r.add(e,"isInViewCheck")),{cleanup(){r.destroy()}}}l(oe,"renderByProp");A();A();function Fe(){let t=[];function e(o,r){var d;let s=Object.values(o.getMapData())[0],c=r;if(c&&pe.is(c)){let p=(d=s.getByType("enterprise-location"))==null?void 0:d.find(h=>h.spaces.some(m=>m.id===c.id));p&&(c=p)}return c}l(e,"getHighlightTarget");async function i(o,r){return r instanceof Z?o.Camera.focusOn(r.locations.flatMap(d=>d.spaces),P):r instanceof Y?o.Camera.focusOn(r.spaces,P):o.Camera.focusOn(r,P)}l(i,"focusOn");function n(o,r,{focus:d=!1}={}){if(!window.enableHighlightCard)return()=>{};let s=e(o,r),c=document.createElement("div");if(c.style.cssText=`
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
			`,"name"in s){let h=document.createElement("h3");h.textContent=s.name,h.style.cssText=`
				margin: 0 0 16px;
				font-size: 22px;
				font-weight: 600;
				color: #ffffff;
				letter-spacing: -0.5px;
			`,c.appendChild(h)}if(s instanceof Y){if(s.description){let h=document.createElement("p");h.textContent=s.description,h.style.cssText=`
					margin: 0 0 16px;
					font-size: 14px;
					color: #b0b0b0;
					line-height: 1.5;
				`,c.appendChild(h)}if(s.tags&&s.tags.length>0){let h=document.createElement("div");h.style.cssText=`
					display: flex;
					flex-wrap: nowrap;
					gap: 8px;
					margin-bottom: 16px;
					overflow-x: hidden;
					max-height: 30px; /* Adjust this value based on your font size and padding */
				`,s.tags.forEach(m=>{let g=document.createElement("span");g.textContent=m,g.style.cssText=`
						background-color: #3a3a3a;
						color: #e0e0e0;
						padding: 6px 12px;
						border-radius: 16px;
						font-size: 12px;
						font-weight: 500;
						text-transform: uppercase;
						white-space: nowrap;
					`,h.appendChild(g)}),c.appendChild(h)}}let p;if(!(r instanceof Z)){let h=new ke({autoPlace:!1});h.domElement.style.cssText=`
					position: relative;
					overflow-y: auto;
					margin-top: 16px;
					border-top: 1px solid #444;
					padding-top: 16px;
				`;let m=o.getState(r);m&&(oe(o,$({id:r.id},m),h),c.appendChild(h.domElement)),p=h}return document.body.appendChild(c),d&&i(o,s),()=>{c.style.opacity="0",c.style.transform="translateY(-10px)",setTimeout(()=>c.remove(),300),p?.destroy()}}return l(n,"highlightCard"),{highlightCard:n,highlight:l((o,r,{focus:d=!0}={})=>{t.length>0&&t.forEach(c=>o.Markers.remove(c));let s=e(o,r);if(s instanceof Y)d&&o.Camera.focusOn(s.spaces,P),t.push(...s.spaces.map(c=>o.Markers.add(c,`<div style="padding: 15px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width: 250px; position: relative;">
							<h3 style="margin: 0 0 10px; color: #333; font-size: 16px; font-weight: 600;">`.concat(s.name,`</h3>
							`).concat(s.description?'<p style="margin: 0 0 10px; color: #666; font-size: 14px; font-weight: 400;">'.concat(s.description,"</p>"):"",`
							`).concat(s.tags?s.tags.map(p=>'<span style="display: inline-block; padding: 3px 8px; background-color: #e0f2f1; color: #00796b; border-radius: 12px; font-size: 12px;">'.concat(p,"</span>")).join(" "):"",`
							<div style="position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 10px solid #ffffff;"></div>
						</div>`),{rank:"always-visible",anchor:"top"})));else if(s instanceof Z){d&&o.Camera.focusOn(s.locations.flatMap(h=>h.spaces),P);let c=new Map,p=new Set;s.locations.forEach(h=>{c.has(h.name)||(h.spaces.forEach(m=>{t.push(o.Markers.add(m,`<div style="padding: 12px; background-color: rgba(0, 153, 51, 0.95); border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); transform: translateY(-4px); transition: all 0.3s ease;">
									<span style="font-weight: 600; color: #FFFFFF; font-size: 16px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">`.concat(h.name,`</span>
								</div>`),{rank:"always-visible"}))}),c.set(h.name,!0))}),s.locations.forEach(h=>{h.coordinates.forEach(m=>{let g="".concat(m.latitude,",").concat(m.longitude);if(!p.has(g)&&!c.has(h.name)){let v=o.Markers.add(m,`<div style="padding: 10px; background-color: rgba(51, 102, 204, 0.9); border-radius: 6px; box-shadow: 0 3px 6px rgba(0,0,0,0.2);">
								<span style="font-weight: 500; color: #FFFFFF; font-size: 16px;">`.concat(h.name,`</span>
								<br>
								<span style="color: #FFFFFF; font-size: 12px; font-weight: 400;">Node</span>
							</div>`),{rank:"always-visible"});p.add(g),t.push(v)}})})}return()=>{t.forEach(c=>o.Markers.remove(c))}},"highlight")}}l(Fe,"createHighlightControl");var P={duration:300,easing:"ease-in-out"},q=Fe();A();var k={search:"",results:void 0,options:{places:{fields:{name:!0,description:!0,link:!0,category:!0},limit:5},locations:{fields:{name:!0,tag:!0,description:!0},limit:5},categories:{fields:{name:!0},limit:5}}};function Se(t){t.add(k.options.places.fields,"name").name("Places: Name"),t.add(k.options.places.fields,"description").name("Places: Description"),t.add(k.options.places.fields,"link").name("Places: Link"),t.add(k.options.places.fields,"category").name("Places: Category"),t.add(k.options.places,"limit"),t.add(k.options.locations.fields,"name").name("Locations: Name"),t.add(k.options.locations.fields,"tag").name("Locations: Tag"),t.add(k.options.locations.fields,"description").name("Locations: Description"),t.add(k.options.places,"limit"),t.add(k.options.categories.fields,"name").name("Categories: Name")}l(Se,"createAdvancedSettings");function Me(t,e,i){var n;let o=new ie,r=i.addFolder("Search");r.open();let d=r.add(k,"search").onChange(async m=>{let g=await e.Search.query(m,k.options);g&&(k.results=g,c(g,o))}),s=document.createElement("div");s.style.marginLeft="10px",(n=d.domElement.parentElement)==null||n.appendChild(s);let{renderSearch:c,close:p}=$e(t,e,s,d.$input),h=r.addFolder("Advanced");return h.close(),Se(h),document.addEventListener("keydown",m=>{(m.metaKey||m.ctrlKey)&&m.key==="k"?(m.preventDefault(),r._closed&&r.open(),d.$input.focus()):m.key==="Escape"&&(p(),o.publish("highlight",void 0))}),{pubsub:o}}l(Me,"createSearchControl");function $e(t,e,i,n){let o,r;n.addEventListener("input",async s=>{s instanceof InputEvent&&(s.inputType==="insertText"||s.inputType==="insertCompositionText")&&(clearTimeout(o),o=setTimeout(async()=>{var c;let p=await e.Search.suggest(n.value);p&&p.length>0&&d((c=p[0])==null?void 0:c.suggestion)},100))});function d(s){if(!s){n.placeholder="";return}let c=n.value;n.value=s,n.setSelectionRange(c.length,s.length)}return l(d,"renderSuggestion"),{renderSearch(s,c){var p,h;if(s.places.length===0&&((p=s.enterpriseCategories)==null?void 0:p.length)===0&&((h=s.enterpriseLocations)==null?void 0:h.length)===0){i.textContent="No results found.";return}r=Le(i,s,t,c)},close(){r.destroy()}}}l($e,"mount");function Le(t,e,i,n){t.innerHTML="";let o=document.createElement("div");Object.assign(o.style,W.dropdownContainer);let r=document.createElement("ul");r.className="options-list",Object.assign(r.style,W.optionsList),r.style.display="block";let d=[],s=l((g,v)=>{if(v&&v.length>0){let a=document.createElement("li");a.textContent=g,Object.assign(a.style,W.sectionHeader),r.appendChild(a),v.forEach((f,b)=>{let u=document.createElement("li");u.textContent="".concat("name"in f.item?f.item.name:""," (").concat(f.type,")"),Object.assign(u.style,W.option),u.tabIndex=0,u.addEventListener("focus",()=>{p(d.indexOf(u))}),u.addEventListener("mouseover",()=>{u.style.backgroundColor="#f0f0f0"}),u.addEventListener("mouseout",()=>{u.style.backgroundColor=""}),u.addEventListener("click",()=>{}),u.setAttribute("data-type",g),u.setAttribute("data-index",b.toString()),r.appendChild(u),d.push(u)})}},"addSection");s("enterpriseLocations",e.enterpriseLocations),s("enterpriseCategories",e.enterpriseCategories),s("Places",e.places),o.appendChild(r),t.appendChild(o);let c=[],p=l(g=>{c.forEach(u=>u()),c=[],d.forEach((u,w)=>{w===g?u.style.backgroundColor="#e0e0e0":u.style.backgroundColor=""});let v=d[g],a=v.getAttribute("data-type"),f=parseInt(v.getAttribute("data-index")||"0",10);if(!a)return;let{item:b}=e[a.toLowerCase()][f];n.publish("highlight",b)},"highlightOption"),h=l(g=>{!o.contains(g.target)&&g.target!==t&&m()},"handleClickOutside");document.addEventListener("click",h);let m=l(()=>{t.innerHTML="",document.removeEventListener("click",h)},"destroy");return{destroy(){t.innerHTML="",n.publish("highlight",void 0)}}}l(Le,"createCustomDropdown");var W={dropdownContainer:{position:"absolute",color:"#202020"},optionsList:{display:"block",zIndex:"1002",position:"relative",maxHeight:"200px",overflowY:"auto",border:"1px solid #ccc",backgroundColor:"#fff",listStyleType:"none",margin:"0",padding:"0"},sectionHeader:{fontWeight:"bold",padding:"5px",backgroundColor:"#f0f0f0"},option:{padding:"5px",cursor:"pointer"}};function Oe(t,e,i){i.domElement.id="interactionPanel";let n=[],{pubsub:o}=Me(t,e,i);o.on("highlight",h=>{if(h){n.forEach(g=>g()),n=[];let m=h instanceof Y?h.spaces[0]:h;if(t.Camera.focusOn(h),m&&!pe.is(m))return;n.push(q.highlightCard(t,m,{focus:!0}))}else n.forEach(m=>m()),n=[]});let r=i.addFolder("Click 👇").close(),{sub:d}=De(t,r);d.on("click",h=>{n.forEach(m=>m()),n=[],h.spaces[0]&&(n=[q.highlightCard(t,h.spaces[0])])});let s=i.addFolder("Hover 🚁").close(),{sub:c}=Ve(t,s),p;c.on("hover",h=>{h.spaces[0]?(p?.(),n.length===0&&(p=q.highlightCard(t,h.spaces[0]))):(p?.(),p=void 0)})}l(Oe,"createInteractionControls");function De(t,e){let i=new ie,n={position:"",hoverColor:M(t.getHoverColor())},o=e.add(n,"position").disable(),r=[];function d(){r.forEach(c=>c()),r.length=0}l(d,"reset");let s=0;return t.on("click",c=>{var p;let{labels:h,markers:m,coordinate:g}=c;d(),i.publish("click",c),clearInterval(s),o.load(JSON.stringify([g.longitude,g.latitude]));let v=h[0]||m[0];if(v){let f=le(t,v,e);if(!f)return;r.push(f.destroy),f.labelItemFolder.openAnimated()}let a=(p=c.spaces[0])!=null?p:c.objects[0];if(a){let f=O($({id:a.id},t.getState(a.id)),{type:a.type,isInView:!1,isInViewCheck:re(t,a.id)}),{cleanup:b}=oe(t,f,e);s=setInterval(()=>{f.isInView=t.isInView(v||a)},500),r.push(b)}}),{sub:i}}l(De,"createClickControls");function Ve(t,e){let i=new ie;t.setHoverColor("#1f3a7a");let n={position:"",hoverColor:M(t.getHoverColor()),intersected:"",type:"",id:""},o=e.add(n,"position").disable();e.add(n,"id").disable().listen(),e.add(n,"type").disable().listen(),e.addColor(n,"hoverColor").onChange(s=>{t.setHoverColor(s)});let r=[];function d(){r.forEach(s=>s()),r.length=0}return l(d,"reset"),t.on("hover",s=>{var c,p,h;let{coordinate:m,spaces:g,objects:v,markers:a,labels:f}=s;d(),i.publish("hover",s),o.load(JSON.stringify([m.longitude,m.latitude]));let b=(h=(p=(c=g[0])!=null?c:v[0])!=null?p:a[0])!=null?h:f[0];if(!b)return;let u=t.getState(b);u&&(n.type=u.type,n.id=b.id)}),{sub:i}}l(Ve,"createHoverControls");function re(t,e){return l(function(){console.log("isInView",t.isInView(e))},"isInView")}l(re,"createIsInViewHandler");function Ie(t,e,i){let n={labels:{},all(){i.Labels.all().forEach(g=>{this.labels[g.id]=g}),c()},removeAllLabels(){i.Labels.removeAll().forEach(g=>{delete this.labels[g.id]}),c()}},{addLabel:o,destroy:r}=Be(t,i);t.add(n,"all"),t.add(n,"removeAllLabels");let d=t.addFolder("Label List");t.close();let s=new Map,{rerender:c}=p();function p(){function g(f){var b;delete n.labels[f.id],(b=s.get(f.id))==null||b.destroy()}l(g,"remove");function v(f){let b=le(i,f,d,{onRemove:l(w=>{g(w)},"onRemove")});if(!b)return;let{labelItemFolder:u}=b;s.set(f.id,u)}l(v,"add");function a(){d.destroy(),d=t.addFolder("Label");for(let f in n.labels){let b=n.labels[f];v(b)}}return l(a,"rerender"),{rerender:a,add:v,remove:g}}l(p,"createLabelControls"),t.domElement.classList.add("list-items");let h;i.on("click",({labels:g,coordinate:v})=>{if(!t._closed)if(g[0]){h?.close();let a=s.get(g[0].id);if(t.open(),!a)return;a?.open(),a?.domElement.scrollIntoView({block:"start"}),a?.domElement.focus(),h=a}else o(v)});function m(g){for(let v of g)n.labels[v.id]=v;c()}return l(m,"populatelabels"),{populatelabels:m,destroy(){r()}}}l(Ie,"createLabelControls");function le(t,e,i,{onRemove:n}={}){var o,r,d,s;let c=i.addFolder("".concat((o=e.text)==null?void 0:o.substring(0,12)));c.onChange(v=>{t.updateState(e,{appearance:g.appearance,interactive:g.interactive})}),c.close();let p=t.getState(e);if(p?.type!=="label")throw new Error("error getting state for label: ".concat(e.id));let{appearance:h,interactive:m}=p;if(!h||h.margin==null||m==null)throw new Error("incomplte label state");let g={text:e.text,interactive:m,appearance:O($({},h),{margin:h.margin||0,marker:{foregroundColor:(d=(r=h.marker)==null?void 0:r.foregroundColor)!=null&&d.active?M((s=h.marker.foregroundColor)==null?void 0:s.active):"black"},text:{foregroundColor:M(h.text.foregroundColor)}}),remove(){t.Labels.remove(e),n?.(e),c.destroy()},isInView:re(t,e.id)};return c.add(g.appearance,"margin",0,20).name("margin"),c.add(g,"text"),c.add(g,"interactive"),c.addColor(g.appearance.marker,"foregroundColor").name("marker foreground"),c.addColor(g.appearance.text,"foregroundColor").name("text forground"),c.add(g,"isInView"),c.add(g,"remove"),{labelItemFolder:c,destroy(){c.destroy()}}}l(le,"addLabelControlToFolder");function Be(t,e){let i=t.addFolder("Add"),n={onClick:!1,margin:0,text:"New Label!",interactive:!0,marginForegroundColor:M("skyblue"),marginBackgroundColor:M("coral"),textForegroundColor:M("slategray"),textBackgroundColor:M("white")};return i.add(n,"onClick"),i.add(n,"margin"),i.add(n,"interactive"),i.add(n,"text"),i.addColor(n,"marginForegroundColor"),i.addColor(n,"marginBackgroundColor"),i.addColor(n,"textForegroundColor"),i.addColor(n,"textBackgroundColor"),{destroy(){i.destroy()},addLabel(o){return i._closed||!n.onClick?void 0:e.Labels.add(o,n.text,{appearance:{margin:n.margin,marker:{foregroundColor:{active:n.marginForegroundColor,inactive:n.marginForegroundColor},backgroundColor:{active:n.marginBackgroundColor,inactive:n.marginBackgroundColor}},text:{foregroundColor:n.textForegroundColor,backgroundColor:n.marginBackgroundColor}},interactive:n.interactive})}}}l(Be,"createAddControl");var bt={};A();var he="camera-ui";function Te(t,e,i){var n,o;let r=t.addFolder("Camera 📷").onOpenClose(y=>{te({opened:!y._closed},he)}),{params:d}=ne(he);d.opened||r.close();let s=e.Camera.center.toJSON(),c=document.createElement("div");Object.assign(c.style,{display:"none",position:"absolute",left:"0px",zIndex:999,top:"0px",bottom:"0px",right:"0px",backgroundColor:"aqua",pointerEvents:"none",opacity:.5}),e.__core.container.appendChild(c);let p=l(()=>e.getDimensions(),"getContainerDimensions"),[h,m,g,v]=(n=i?.padding)!=null?n:[e.Camera.screenOffsets.top,e.Camera.screenOffsets.right,e.Camera.screenOffsets.bottom,e.Camera.screenOffsets.left],a={center_lat:s.latitude,center_lon:s.longitude,zoomLevel:e.Camera.zoomLevel,pitch:e.Camera.pitch,bearing:e.Camera.bearing,minZoomLevel:e.Camera.minZoomLevel,maxZoomLevel:e.Camera.maxZoomLevel,inset_type:i!=null&&i.padding?"pixel":e.Camera.screenOffsets.type,inset_top:h,inset_left:v,inset_right:m,inset_bottom:g,animateOnLoad:!0,persist:l(()=>{te(r.save().controllers,"camera"),navigator.clipboard.writeText(window.location.href)},"persist"),visualizeInset:!!(h||m||g||v),"Focus on click":(o=i?.focusOnClick)!=null?o:!0,"Focus on current floor":l(()=>{e.Camera.focusOn([e.currentFloor],{screenOffsets:{top:20,left:20,right:20,bottom:20}})},"Focus on current floor")};function f(){a.inset_type=e.Camera.screenOffsets.type,a.inset_left=e.Camera.screenOffsets.left,a.inset_top=e.Camera.screenOffsets.top,a.inset_right=e.Camera.screenOffsets.right,a.inset_bottom=e.Camera.screenOffsets.bottom;let{width:y,height:_}=p();a.inset_type==="portion"?Object.assign(c.style,{left:a.inset_left*y+"px",top:a.inset_top*_+"px",bottom:a.inset_bottom*_+"px",right:a.inset_right*y+"px"}):Object.assign(c.style,{left:a.inset_left+"px",top:a.inset_top+"px",bottom:a.inset_bottom+"px",right:a.inset_right+"px"})}l(f,"updateInsetVisualizer"),r.add(a,"center_lat").listen().disable(),r.add(a,"center_lon").listen().disable(),r.add(a,"zoomLevel",16,22,.5).listen().disable(),r.add(a,"pitch").listen().disable(),r.add(a,"bearing").listen().disable(),r.add(a,"minZoomLevel",5,22,.5).onChange(y=>{e.Camera.setMinZoomLevel(y)}),r.add(a,"maxZoomLevel",10,22,.5).onChange(y=>{e.Camera.setMaxZoomLevel(y)}),r.add(a,"animateOnLoad"),r.add(a,"visualizeInset").onChange(J),J(a.visualizeInset);let b,u,w,E;function V(){let{width:y,height:_}=p(),K=e.Camera.screenOffsets.type,X=a.inset_type;K!==X&&(X==="portion"&&K==="pixel"?(a.inset_top=y>0?Math.min(a.inset_top/_,1):0,a.inset_bottom=y>0?Math.min(a.inset_bottom/_,1):0,a.inset_left=_>0?Math.min(a.inset_left/y,1):0,a.inset_right=_>0?Math.min(a.inset_right/y,1):0):X==="pixel"&&K==="portion"&&(a.inset_top=Math.round(a.inset_top*_),a.inset_bottom=Math.round(a.inset_bottom*_),a.inset_left=Math.round(a.inset_left*y),a.inset_right=Math.round(a.inset_right*y))),b&&b.destroy(),u&&u.destroy(),w&&w.destroy(),E&&E.destroy(),a.inset_type==="portion"?(b=r.add(a,"inset_top",0,1,.01).onChange(F),u=r.add(a,"inset_bottom",0,1,.01).onChange(F),w=r.add(a,"inset_left",0,1,.01).onChange(F),E=r.add(a,"inset_right",0,1,.01).onChange(F)):(b=r.add(a,"inset_top",0,_,1).onChange(F),u=r.add(a,"inset_bottom",0,_,1).onChange(F),w=r.add(a,"inset_left",0,y,1).onChange(F),E=r.add(a,"inset_right",0,y,1).onChange(F))}l(V,"updateInsetControlRanges"),r.add(a,"inset_type",["pixel","portion"]).onChange(()=>{V(),F()}),V();let H=ze(e);r.add(a,"Focus on click").onChange(y=>{y?e.on("click",H):e.off("click",H)}),a["Focus on click"]&&e.on("click",H),r.add(a,"persist"),r.add(a,"Focus on current floor");let se=l(y=>{r._closed||(a.center_lat=y.center.latitude,a.center_lon=y.center.longitude,a.zoomLevel=y.zoomLevel,a.bearing=y.bearing,a.pitch=y.pitch)},"onCameraChanged");e.on("camera-change",se);let{params:de}=ne("camera",a);if(Object.keys(de).length>0){let y=de;e.Camera.setScreenOffsets({top:y.inset_top,left:y.inset_left,right:y.inset_right,bottom:y.inset_bottom,type:y.inset_type});let _={pitch:y.pitch,center:new at(y.center_lat,y.center_lon),bearing:y.bearing,zoomLevel:y.zoomLevel};y.animateOnLoad?e.Camera.animateTo(_):e.Camera.set(_),r.load({controllers:y,folders:{}}),f()}let nt=[()=>{e.off("camera-change",se)}];function F(){e.Camera.setScreenOffsets({top:a.inset_top,left:a.inset_left,right:a.inset_right,bottom:a.inset_bottom,type:a.inset_type}),f()}l(F,"updateInset"),(a.inset_top||a.inset_right||a.inset_bottom||a.inset_left)&&F();function J(y){f(),y?c.style.display="block":c.style.display="none"}return l(J,"visualizeInsetUpdated"),()=>({destroy(){r.destroy(),Ee(nt)}})}l(Te,"createCameraControls");function ze(t){return l(function(e){var i;let{spaces:n,objects:o}=e,r=(i=n[0])!=null?i:o[0];r&&t.Camera.focusOn(r)},"handler")}l(ze,"createHandler");A();function He(t,e,i){let n={markers:{},removeAllMarkers(){i.Markers.removeAll().forEach(g=>{delete this.markers[g.id]}),c()}},{addMarker:o,destroy:r}=je(t,i);t.add(n,"removeAllMarkers");let d=t.addFolder("Marker List");t.close();let s=new Map,{rerender:c}=p();function p(){function g(f){var b;delete n.markers[f.id],(b=s.get(f.id))==null||b.destroy()}l(g,"remove");function v(f){let b=Pe(i,f,d,{onRemove:l(w=>{g(w)},"onRemove")});if(!b)return;let{markerItemFolder:u}=b;s.set(f.id,u)}l(v,"add");function a(){d.destroy(),d=t.addFolder("marker");for(let f in n.markers){let b=n.markers[f];v(b)}}return l(a,"rerender"),{rerender:a,add:v,remove:g}}l(p,"createMarkerControls"),t.domElement.classList.add("list-items");let h;i.on("click",({markers:g,coordinate:v})=>{if(!t._closed)if(g[0]){h?.close();let a=s.get(g[0].id);if(t.open(),!a)return;a?.open(),a?.domElement.scrollIntoView({block:"start"}),a?.domElement.focus(),h=a}else o(v)});function m(g){for(let v of g)n.markers[v.id]=v;c()}return l(m,"populateMarkers"),{populateMarkers:m,destroy(){r()}}}l(He,"createMarkerControls");function Pe(t,e,i,{onRemove:n}={}){let o=i.addFolder("".concat(e.id.toString().substring(0,8)));o.onChange(c=>{t.updateState(e,{interactive:s.interactive})}),o.close();let r=t.getState(e);if(r?.type!=="marker")throw new Error("error getting state for marker: ".concat(e.id));let{interactive:d}=r;if(d==null)throw new Error("incomplte label state");let s={interactive:d,remove(){t.Markers.remove(e),n?.(e),o.destroy()}};return o.add(s,"interactive"),o.add(s,"remove"),{markerItemFolder:o,destroy(){o.destroy()}}}l(Pe,"addMarkerControlToFolder");function je(t,e){let i=t.addFolder("Add"),n={onClick:!1,interactive:!0};return i.add(n,"onClick"),i.add(n,"interactive"),{destroy(){i.destroy()},addMarker(o){return i._closed||!n.onClick?void 0:e.Markers.add(o,"<div>New Marker</div>",{interactive:n.interactive})}}}l(je,"createAddControl");A();function We(t,e){let i=t.addFolder("Walls").close(),n={visible:!0,topColor:"#b1fa87",color:"#e8e8e8",texture:{url:""},topTexture:{url:""}};i.add(n,"visible").onChange(o=>{e.updateState("walls",{visible:o})}),i.addColor(n,"topColor").onChange(o=>{e.updateState("walls",{topColor:o})}),i.addColor(n,"color").onChange(o=>{e.updateState("walls",{color:o})}),i.addFolder("Texture - side").add(n.texture,"url").onFinishChange(o=>{e.updateState("walls",{texture:{url:o}})}),i.addFolder("Texture - top").add(n.topTexture,"url").onFinishChange(o=>{e.updateState("walls",{topTexture:{url:o}})}),e.updateState("walls",{topColor:n.topColor}),e.updateState("walls",{color:n.color})}l(We,"createGeometryControl");A();function Ye(t,e,i){var n,o;t.close();let r={language:(o=(n=i.currentLanguage)==null?void 0:n.code)!=null?o:"en"},d=i.getByType("enterprise-venue");t.add(r,"language",d?.languages.map(s=>s.code)).onChange(s=>{i.changeLanguage(s)})}l(Ye,"createMiscControl");A();function Ne(t,e,i){let n=t.addFolder("Debug");n.close();let o=e.Debug.state,r={showPolygonLabelTextAreaMesh:o.showPolygonLabelTextAreaMesh,showCollisionBoxes:o.showCollisionBoxes,showEnvMap:o.showEnvMap};n.add(r,"showPolygonLabelTextAreaMesh").onChange(d=>{e.Debug.update({showPolygonLabelTextAreaMesh:d})}).name("Show Flat Label Text Area Mesh"),n.add(r,"showCollisionBoxes").onChange(d=>{e.Debug.update({showCollisionBoxes:d})}).name("Show Collision Boxes"),n.add(r,"showEnvMap").onChange(d=>{e.Debug.update({showEnvMap:d})}).name("Show Environment Map"),e.Debug.update(r)}l(Ne,"createDebugControl");A();function Ge(t,e,i){let n=t.addFolder("Text3D").close(),o={all:l(()=>{e.Text3D.labelAll()},"all"),removeAll:l(()=>{e.Text3D.removeAll()},"removeAll")};n.add(o,"all").name("Show All"),n.add(o,"removeAll").name("Remove All")}l(Ge,"createText3DControl");A();A();A();var S,G,L,x,D,T,Re,ee,Ue,Je=class{constructor(e=new ae({autoPlace:!0})){B(this,T),B(this,S),B(this,G,[]),B(this,L,{}),B(this,x,{}),B(this,D,{}),rt(this,S,e),C(this,S).domElement.style.left="0"}add(e,i,n){if(C(this,x)[e])throw new Error("Control ".concat(e," already exists"));C(this,L)[e]=i,C(this,D)[e]=i.default,R(this,T,Re).call(this,e,i,n),this.show()}addColor(e,i,n){if(C(this,x)[e])throw new Error("Control ".concat(e," already exists"));C(this,L)[e]=i,C(this,D)[e]=i.default,R(this,T,Ue).call(this,e,i,n),this.show()}update(e,i){if(!C(this,x)[e])throw new Error("Control ".concat(e," does not exist"));C(this,x)[e].setValue(i),C(this,L)[e].onChange&&C(this,L)[e].onChange(i,e)}replace(e,i,n){if(!C(this,x)[e]){this.add(e,i,n);return}i.args&&C(this,x)[e].options(i.args),i.default&&C(this,x)[e].setValue(i.default),i.onChange&&C(this,x)[e].onChange(o=>{i.onChange(o,e)})}remove(e){if(!C(this,x)[e])throw new Error("Control ".concat(e," does not exist"));C(this,x)[e].destroy(),C(this,x)[e].parent.children.length===0&&C(this,x)[e].parent.hide(),delete C(this,x)[e],delete C(this,L)[e],delete C(this,D)[e]}show(){C(this,S).show()}hide(){C(this,S).hide()}removeAll(){for(let e in C(this,x))this.remove(e)}destroy(){C(this,S).destroy()}};S=new WeakMap,G=new WeakMap,L=new WeakMap,x=new WeakMap,D=new WeakMap,T=new WeakSet,Re=l(function(t,e,i){let n=R(this,T,ee).call(this,i).add(C(this,D),t,e.args,e.max,e.step);e.onChange&&n.onChange(o=>{e.onChange(o,t)}),e.onAdd&&e.onAdd(e.default,t),C(this,x)[t]=n},"#addControl"),ee=l(function(t){if(!t)return C(this,S);let e=C(this,G).find(i=>i._title===t);return e?(e.show(),e):(e=C(this,S).addFolder(t),C(this,G).push(e),e)},"#getFolder"),Ue=l(function(t,e,i){let n=R(this,T,ee).call(this,i).addColor(C(this,D),t);e.onChange&&n.onChange(o=>{e.onChange(o,t)}),C(this,x)[t]=n},"#addColorControl"),l(Je,"GUI");var yt=Je;function Ke(t,e,i){var n;let o={},r=t.getByType("floor"),d=t.getByType("floor-stack");d.length>1&&(o.FloorStack={default:e.currentFloorStack.id,args:d.reduce((c,{id:p,name:h})=>O($({},c),{[h]:p}),{}),onChange:l(c=>{c!==e.currentFloorStack.id&&(e.setFloorStack(c),i.replace("Floor",{default:e.currentFloor.id,args:e.currentFloorStack.floors.reduce((p,{id:h,name:m})=>O($({},p),{[m]:h}),{})}))},"onChange")}),r.length>1&&(o.Floor={default:e.currentFloor.id,args:[...e.currentFloorStack.floors.sort((c,p)=>p.elevation-c.elevation)].reduce((c,{id:p,name:h})=>O($({},c),{[h]:p}),{}),onChange:l(c=>{c!==e.currentFloor.id&&e.setFloor(c)},"onChange"),onAdd:l(()=>{e.on("floor-change",c=>{c!=null&&c.floor.id&&(d.length>1&&i.replace("FloorStack",{default:e.currentFloorStack.id}),i.replace("Floor",{default:e.currentFloor.id,args:e.currentFloorStack.floors.reduce((p,{id:h,name:m})=>O($({},p),{[m]:h}),{})}))})},"onAdd")});let s=t.getByType("enterprise-venue");return s&&s.languages.length>1&&(o.Language={default:((n=t.currentLanguage)==null?void 0:n.code)||s.languages[0].code,args:s.languages.reduce((c,{code:p,name:h})=>O($({},c),{[h]:p}),{}),onChange:l(c=>{t.changeLanguage(c)},"onChange")}),o}l(Ke,"createDefaultControls");function Xe(t,e,i=new ae){let n=new yt(i),o=Ke(t,e,n);Object.keys(o).length||n.hide();for(let r in o)n.add(r,o[r]);return n}l(Xe,"createGUI");async function Ze(t,e,{initialfloorsInStack:i,root:n,floorsInDirections:o,showLabelsPerFloor:r=!0}){async function d(a){t.StackedMaps.changeFloorOnElevationChanges(!1),t.Outdoor.setOpacity(.15),t.StackedMaps.setFloorVisiblityMode("only-current-floor"),t.Camera.setPanMode("default"),await t.Camera.focusOn(a,{pitch:10})}l(d,"zoomToFloor");async function s(){t.Outdoor.setOpacity(.25),t.StackedMaps.changeFloorOnElevationChanges(!0),t.Camera.setPanMode("elevation"),t.StackedMaps.setFloorVisiblityMode("all-floors"),await t.Camera.focusOn(t.currentFloor,{axisAlignedPadding:{vertical:t.StackedMaps.distanceBetweenFloors},pitch:90})}l(s,"showCurrentFloorWithPadding");async function c(a){await t.Camera.animateElevation(a.elevation*t.StackedMaps.distanceBetweenFloors)}l(c,"scrollToFloor");let p=t.currentFloor;t.on("floor-change",async a=>{t.StackedMaps.expanded&&a.reason!=="stacked-maps-elevation-change"&&(t.StackedMaps.changeFloorOnElevationChanges(!1),t.StackedMaps.setFloorVisiblityMode("all-floors"),await t.Camera.focusOn(p,{axisAlignedPadding:{vertical:t.StackedMaps.distanceBetweenFloors},pitch:90,duration:500}),t.StackedMaps.changeFloorOnElevationChanges(!0),await c(t.currentFloor),await d(t.currentFloor),t.StackedMaps.setFloorVisiblityMode("only-current-floor")),p=t.currentFloor}),t.on("stacked-maps-state-change",({state:a})=>{console.log("stacked-maps-state-change",a)});let h=e.getByType("space");if(r){let a=h.reduce((f,b)=>(f.has(b.floor)||f.set(b.floor,[]),b.name&&b.name!==""&&f.get(b.floor).push(t.Labels.add(b,b.name)),f),new Map);t.on("floor-change",()=>{a.forEach((f,b)=>{f.forEach(u=>{t.updateState(u,{enabled:t.currentFloor===b})})})})}let m=Xe(e,t,n),g=i??[];async function v(){t.Outdoor.setOpacity(.25),g=e.getByType("floor"),await t.Camera.animateTo({pitch:90}),await t.StackedMaps.collapse(),t.StackedMaps.clearCachedFloorSeparationDistance(),await t.StackedMaps.expand({distanceBetweenFloors:"auto"})}return l(v,"expandAll"),m.add("Expand - All",{default:l(async()=>{await v()},"default")},"Stack Maps"),o&&m.add("Expand - Only Navigation",{default:l(async()=>{t.Outdoor.setOpacity(.25),g=o,await t.StackedMaps.collapse(),t.setFloor(o[0]),await t.StackedMaps.expand({includedFloors:o,distanceBetweenFloors:"auto"})},"default")},"Stack Maps"),m.add("Show All Floors",{default:l(async()=>{g=e.getByType("floor"),t.Outdoor.setOpacity(.25),t.StackedMaps.setFloorVisiblityMode("all-floors"),t.StackedMaps.changeFloorOnElevationChanges(!1),t.Camera.setPanMode("elevation"),t.Camera.focusOn(g,{pitch:90})},"default")},"Stack Maps"),m.add("Show Current Floor with padding",{default:l(async()=>{await s()},"default")},"Stack Maps"),m.add("Zoom to Current Floor",{default:l(async()=>{d(t.currentFloor)},"default")},"Stack Maps"),m.add("Collapse",{default:l(()=>{t.Outdoor.setOpacity("initial"),t.StackedMaps.collapse()},"default")},"Stack Maps"),m.add("Default",{default:l(async()=>{t.Camera.setPanMode("default")},"default")},"Camera Pan Mode"),m.add("Elevation",{default:l(async()=>{t.Camera.setPanMode("elevation")},"default")},"Camera Pan Mode"),m.add("zoom in to floor 2",{default:l(async()=>{t.Outdoor.setOpacity(.25),console.log(t.currentFloor.name),await t.Camera.focusOn(t.currentFloor,{axisAlignedPadding:{vertical:t.StackedMaps.distanceBetweenFloors},pitch:90}),t.StackedMaps.expanded||await t.StackedMaps.expand({distanceBetweenFloors:t.StackedMaps.distanceBetweenFloors});let a=t.StackedMaps.includedFloors[2],f=g.findIndex(b=>b.id===a.id);t.StackedMaps.changeFloorOnElevationChanges(!0),t.Camera.setPanMode("elevation"),t.StackedMaps.setFloorVisiblityMode("all-floors"),await t.Camera.animateElevation(f*t.StackedMaps.distanceBetweenFloors),t.Outdoor.setOpacity(.15),console.log("focusing on",a.name),await t.Camera.focusOn(a,{pitch:10}),t.StackedMaps.setFloorVisiblityMode("only-current-floor"),t.Camera.setPanMode("default"),t.StackedMaps.changeFloorOnElevationChanges(!1)},"default")},"Camera Pan Mode"),m.add("All Floors",{default:l(async()=>{t.StackedMaps.setFloorVisiblityMode("all-floors")},"default")},"Visibility Mode"),m.add("Only Active Floor",{default:l(async()=>{t.StackedMaps.setFloorVisiblityMode("only-current-floor")},"default")},"Visibility Mode"),m.add("Up",{default:l(async()=>{let a=g.find(f=>f.elevation===t.currentFloor.elevation+1);a&&await c(a)},"default")},"Floors Up/Down"),m.add("Down",{default:l(async()=>{let a=g.find(f=>f.elevation===t.currentFloor.elevation-1);a&&await c(a)},"default")},"Floors Up/Down"),{zoomToFloor:d,expandAll:v}}l(Ze,"createStackMapsControl");function Qe(t,e,i){let n=t.addFolder("StackedMaps");n.close(),Ze(e,i,{root:n,showLabelsPerFloor:!1})}l(Qe,"createStackmapsControl");function qe(t,e,i){et();let n=new ke({title:"SDK Controls"});n.domElement.classList.add("mappedin-js-inspector"),Oe(e,t,n),Te(n,e,i?.camera);let o=n.addFolder("Levels").close(),r=n.addFolder("Scene Controls");r.close();let d=n.addFolder("Labels");Ge(n,e);let s=n.addFolder("Markers");We(n,e),Qe(n,e,t);let c=n.addFolder("misc");Ne(n,e),Ye(c,e,t);let p={level:e.currentFloor.id},{populatelabels:h}=Ie(d,t,e),{populateMarkers:m}=He(s,t,e),g=t.getByType("floor").reduce((a,f)=>(a[f.name]=f.id,a),{}),v=o.add(p,"level",g).onChange(a=>{e.setFloor(a),p.level=e.currentFloor.id,v.updateDisplay()});return e.on("floor-change-start",a=>{o.controllers[0].setValue(a.floor.id)}),t.getByType("space").forEach(a=>{e.updateState(a,{interactive:!0})}),t.getByType("object").forEach(a=>{e.updateState(a,{interactive:!0})}),t.getByType("object").forEach(a=>{e.updateState(a,{interactive:!0})}),e.setHoverColor("#a2b7e6"),e.Camera.setMaxZoomLevel(20),{populatelabels:h,sceneFolder:r,populateMarkers:m}}l(qe,"createUi");var ue="mappedin-sdk-debug-css";function et(){if(document.getElementById(ue))return;let t=document.createElement("style");t.id=ue,t.textContent=bt,document.head.appendChild(t)}l(et,"injectCss");var tt=class{constructor(e,i){I(this,"_enabled",!1),I(this,"mv"),I(this,"api"),I(this,"mapData"),I(this,"scenegraphVisualizerMounted",!1),I(this,"storeStateToLocalStorageEnabled",!1),this.mv=e,this.api=i,this.mapData=this.api.getMapData()}setMapData(e){this.mapData=e}async enable(e={}){var i;if(this._enabled)return;if(this._enabled=!0,!this.mapData)throw new Error("Please set mapData before enable debug.");let{sceneFolder:n}=qe(this.mapData,this.mv,e);n.onOpenClose(o=>{o===n&&!o._closed&&!this.scenegraphVisualizerMounted&&(this.scenegraphVisualizerMounted=!0,it(this.api.core,n))}),(i=this.api.getMapDataInternal())==null||i.spaces.forEach(o=>{this.mv.updateState(o.id,{interactive:!0})})}get enabled(){return this._enabled}};l(tt,"Inspector");var Lt=tt;export{Lt as Inspector};
