!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{var n=t("object"==typeof exports?require("vue"):e.Vue);for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}("undefined"!=typeof self?self:this,function(e){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=269)}({0:function(e,t,n){"use strict";n.d(t,"c",function(){return a});var i=n(2),r=n.n(i),s=n(3),c=n(5);n.d(t,"a",function(){return s.a}),n.d(t,"b",function(){return c.a});var a=r.a.prototype.$isServer},1:function(e,t,n){"use strict";function i(e,t,n,i,r,s){var c,a=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(c=e,a=e.default);var u="function"==typeof a?a.options:a;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId=r);var l;if(s?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=l):i&&(l=i),l){var f=u.functional,d=f?u.render:u.beforeCreate;f?(u._injectStyles=l,u.render=function(e,t){return l.call(t),d(e,t)}):u.beforeCreate=d?[].concat(d,l):[l]}return{esModule:c,exports:a,options:u}}t.a=i},149:function(e,t,n){"use strict";var i=n(0),r=n(64);t.a=Object(i.a)({name:"wv-search-bar",components:{Cell:r.default},props:{value:String,autofocus:Boolean,show:Boolean,placeholder:{type:String,default:"搜索"},cancelText:{type:String,default:"取消"},resultTextKey:String,result:Array},data:function(){return{isActive:!1,currentValue:this.value}},mounted:function(){this.autofocus&&(this.isActive=!0)},methods:{textClick:function(){this.$refs.input.focus(),this.isActive=!0},clear:function(){this.currentValue=""},cancel:function(){this.clear(),this.isActive=!1}},watch:{currentValue:function(e){this.$emit("input",e)},value:function(e){this.currentValue=e}}})},2:function(t,n){t.exports=e},269:function(e,t,n){"use strict";function i(e){n(270)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),s=n(149),c=n(271),a=i,o=Object(r.a)(s.a,c.a,!1,a,"data-v-25b1265a",null);t.default=o.exports},270:function(e,t){},271:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"weui-search-bar"},[n("div",{staticClass:"weui-search-bar__form"},[n("div",{staticClass:"weui-search-bar__box"},[n("i",{staticClass:"weui-icon-search"}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-search-bar__input",attrs:{placeholder:e.placeholder,autofocus:e.autofocus},domProps:{value:e.currentValue},on:{input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}),e._v(" "),n("div",{staticClass:"weui-icon-clear",on:{click:e.clear}})]),e._v(" "),n("label",{directives:[{name:"show",rawName:"v-show",value:!e.isActive,expression:"!isActive"}],staticClass:"weui-search-bar__label",on:{click:e.textClick}},[n("i",{staticClass:"weui-icon-search"}),e._v(" "),n("span",{domProps:{textContent:e._s(e.placeholder)}})])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"weui-search-bar__cancel-btn",domProps:{textContent:e._s(e.cancelText)},on:{click:e.cancel}})]),e._v(" "),e._t("default",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show||e.currentValue,expression:"show || currentValue"}],staticClass:"weui-cells searchbar-result"},e._l(e.result,function(t,i){return n("wv-cell",{key:i,attrs:{title:"object"==typeof t?t[e.resultTextKey]:t},on:{click:function(n){e.$emit("click-result",t)}}})}))])],2)},r=[],s={render:i,staticRenderFns:r};t.a=s},3:function(e,t,n){"use strict";var i=n(4);t.a=function(e){return e.mixins=e.mixins||[],e.components=e.components||{},e.install=e.install||i.a,e}},34:function(e,t,n){"use strict";t.a={props:{url:String,replace:Boolean,to:[String,Object]},methods:{routerLink:function(){var e=this.to,t=this.url,n=this.$router,i=this.replace;e&&n?n[i?"replace":"push"](e):t&&(i?location.replace(t):location.href=t)}}}},4:function(e,t,n){"use strict";t.a=function(e){e.component(this.name,this)}},44:function(e,t,n){"use strict";var i=n(0),r=n(34);t.a=Object(i.a)({name:"wv-cell",mixins:[r.a],props:{title:{type:[String,Number]},value:{type:[String,Number]},isLink:Boolean},methods:{onClick:function(){this.$emit("click"),this.routerLink()}}})},5:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=function(e){return e.changedTouches[0]||e.touches[0]}},64:function(e,t,n){"use strict";function i(e){n(65)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),s=n(44),c=n(66),a=i,o=Object(r.a)(s.a,c.a,!1,a,"data-v-586397b9",null);t.default=o.exports},65:function(e,t){},66:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"weui-cell",class:{"weui-cell_access":e.isLink},on:{click:e.onClick}},[n("div",{staticClass:"weui-cell_hd"},[e._t("icon")],2),e._v(" "),n("div",{staticClass:"weui-cell__bd"},[e._t("bd",[n("p",{domProps:{innerHTML:e._s(e.title)}})])],2),e._v(" "),n("div",{staticClass:"weui-cell__ft"},[e._t("ft",[e._v(e._s(e.value))])],2)])},r=[],s={render:i,staticRenderFns:r};t.a=s}})});