/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=478)})({0:function(e,t){e.exports=function(e,t,n,r){var o,u=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,u=e.default);var f="function"==typeof u?u.options:u;if(t&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns),n&&(f._scopeId=n),r){var s=f.computed||(f.computed={});Object.keys(r).forEach((function(e){var t=r[e];s[e]=function(){return t}}))}return{esModule:o,exports:u,options:f}}},109:function(e,t,n){"use strict";function r(e){e.component("md-whiteframe",u.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(365),u=(function(e){return e&&e.__esModule?e:{default:e}})(o);e.exports=t.default},195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"md-whiteframe",props:{mdElevation:{type:[String,Number],default:1},mdTag:{type:String,default:"div"}},computed:{classes:function(){var e=parseInt(this.mdElevation,10),t="md-whiteframe-";return isNaN(e)||"number"!=typeof e?this.mdElevation.indexOf("dp")>-1&&(t+=this.mdElevation):(t+=e,t+="dp"),t}},render:function(e){return e(this.mdTag,{staticClass:"md-whiteframe",class:this.classes},this.$slots.default)}},e.exports=t.default},241:function(e,t){},365:function(e,t,n){n(241);var r=n(0)(n(195),null,null,null);e.exports=r.exports},478:function(e,t,n){e.exports=n(109)}})}));