!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("bootstrap-slider")):"function"==typeof define&&define.amd?define(["exports","bootstrap-slider"],e):e(t.vueBootstrapSlider=t.vueBootstrapSlider||{},t.Slider)}(this,function(t,e){"use strict";e=e&&"default"in e?e.default:e;var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-inline-block"},[e("input",{ref:"input",attrs:{type:"text"}})])},staticRenderFns:[],mixins:[{props:{min:{type:Number,default:0},max:{type:Number,default:10},step:{type:Number,default:1},precision:{type:Number},orientation:{type:String,default:"horizontal"},value:{type:[Number,Array],default:function(){return null}},range:{type:Boolean,default:!1},selection:{type:String,default:"before"},tooltip:{type:String,default:"show"},tooltipSplit:{type:Boolean,default:!1},tooltipPosition:{type:String},handle:{type:String,default:"round"},reversed:{type:Boolean,default:!1},rtl:{type:String,default:"auto"},formatter:{type:Function},naturalArrowKeys:{type:Boolean,default:!1},ticks:{type:Array,default:function(){return[]}},ticksPositions:{type:Array,default:function(){return[]}},ticksLabels:{type:Array,default:function(){return[]}},ticksSnapBounds:{type:Number,default:0},ticksTooltip:{type:Boolean,default:!1},scale:{type:String,default:"linear"},focus:{type:Boolean,default:!1},labelledby:{type:[String,Array],default:function(){return null}},rangeHighlights:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},triggerSlideEvent:{type:Boolean,default:!1},triggerChangeEvent:{type:Boolean,default:!1},debounce:{type:Number,default:0}}},{watch:{min:function(){this.slider&&this.slider.setAttribute("min",this.min)},max:function(){this.slider&&this.slider.setAttribute("max",this.max)},step:function(){this.slider&&this.slider.setAttribute("step",this.step)},precision:function(){this.slider&&this.slider.setAttribute("precision",this.precision)},orientation:function(){this.slider&&this.slider.setAttribute("orientation",this.orientation)},range:function(){this.slider&&this.slider.setAttribute("range",this.range)},selection:function(){this.slider&&this.slider.setAttribute("selection",this.selection)},tooltip:function(){this.slider&&this.slider.setAttribute("tooltip",this.tooltip)},tooltipSplit:function(){this.slider&&this.slider.setAttribute("tooltipSplit",this.tooltipSplit)},tooltipPosition:function(){this.slider&&this.slider.setAttribute("tooltipPosition",this.tooltipPosition)},handle:function(){this.slider&&this.slider.setAttribute("handle",this.handle)},reversed:function(){this.slider&&this.slider.setAttribute("reversed",this.reversed)},rtl:function(){this.slider&&this.slider.setAttribute("rtl",this.rtl)},formatter:function(){this.slider&&this.slider.setAttribute("formatter",this.formatter)},naturalArrowKeys:function(){this.slider&&this.slider.setAttribute("naturalArrowKeys",this.naturalArrowKeys)},ticks:function(){this.slider&&this.slider.setAttribute("ticks",this.ticks)},ticksPositions:function(){this.slider&&this.slider.setAttribute("ticksPositions",this.ticksPositions)},ticksLabels:function(){this.slider&&this.slider.setAttribute("ticksLabels",this.ticksLabels)},ticksSnapBounds:function(){this.slider&&this.slider.setAttribute("ticksSnapBounds",this.ticksSnapBounds)},ticksTooltip:function(){this.slider&&this.slider.setAttribute("ticksTooltip",this.ticksTooltip)},scale:function(){this.slider&&this.slider.setAttribute("scale",this.scale)},focus:function(){this.slider&&this.slider.setAttribute("focus",this.focus)},labelledby:function(){this.slider&&this.slider.setAttribute("labelledby",this.labelledby)},rangeHighlights:function(){this.slider&&this.slider.setAttribute("rangeHighlights",this.rangeHighlights)},disabled:function(){this.disabled?this.slider.disable():this.slider.enable()},value:function(){this.slider.setValue(this.value,this.triggerSlideEvent,this.triggerChangeEvent)}}}],data:function(){return{slider:null,lastEvent:{}}},mounted:function(){var t=this,i={};for(var s in t.$props){if(t.$props.hasOwnProperty(s))i["rangeHighlights"===s?s:s.replace(/([A-Z])/g,function(t){return"_"+t.toLowerCase()})]=t.$props[s]}i.enabled=!this.disabled,this.slider=new e(this.$refs.input,i);["slide","slideStart","slideStop","change","slideEnabled","slideDisabled"].forEach(function(e){("change"===e||t._events[e])&&t.slider.on(e,function(i){if(t.debounce>0){var s=(new Date).getTime();if(null!==t.lastEvent[e]&&s<=t.lastEvent[e]+t.debounce)return;t.lastEvent[e]=s}t.$emit(e,i),"change"===e&&t.$emit("input",i.newValue)})})},beforeDestroy:function(){this.slider&&(this.slider.destroy(),delete this.slider)}},s={install:function(t){t._vue_bootstrap_slider_installed||(t._vue_bootstrap_slider_installed=!0,t.component("bFormSlider",i))}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(s),t.default=s,t.bFormSlider=i,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=vue-bootstrap-slider.js.map
