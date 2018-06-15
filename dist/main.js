!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=16)}([function(t,e,n){var r=n(12).Symbol;t.exports=r},function(t,e){t.exports=Vue},function(t,e,n){t.exports=function(t){"use strict";t=t&&"default"in t?t.default:t;var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.reduce(function(t,n){var r=n.passengers[0];return r="function"==typeof r?r(e):n.passengers,t.concat(r)},[])}var i={},s=new(t.extend({data:function(){return{transports:i}},methods:{open:function(n){var r,o=n.to,i=n.from,s=n.passengers;if(o&&i&&s){n.passengers=(r=s,Array.isArray(r)||"object"===(void 0===r?"undefined":e(r))?Object.freeze(r):r);var a=Object.keys(this.transports);-1===a.indexOf(o)&&t.set(this.transports,o,[]);var u=this.getTransportIndex(n),l=this.transports[o].slice(0);-1===u?l.push(n):l[u]=n,l.sort(function(t,e){return t.order-e.order}),this.transports[o]=l}},close:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.to,r=t.from;if(n&&r&&this.transports[n])if(e)this.transports[n]=[];else{var o=this.getTransportIndex(t);if(o>=0){var i=this.transports[n].slice(0);i.splice(o,1),this.transports[n]=i}}},hasTarget:function(t){return this.transports.hasOwnProperty(t)},hasContentFor:function(t){return!!this.transports[t]&&this.getContentFor(t).length>0},getSourceFor:function(t){return this.transports[t]&&this.transports[t][0].from},getContentFor:function(t){var e=this.transports[t];if(e)return o(e)},getTransportIndex:function(t){var e=t.to,n=t.from;for(var r in this.transports[e])if(this.transports[e][r].from===n)return r;return-1}}}))(i),a=/^(attrs|props|on|nativeOn|class|style|hook)$/,u=function(t){return t.reduce(function(t,e){var n,r,o,i,s;for(o in e)if(n=t[o],r=e[o],n&&a.test(o))if("class"===o&&("string"==typeof n&&(s=n,t[o]=n={},n[s]=!0),"string"==typeof r&&(s=r,e[o]=r={},r[s]=!0)),"on"===o||"nativeOn"===o||"hook"===o)for(i in r)n[i]=l(n[i],r[i]);else if(Array.isArray(n))t[o]=n.concat(r);else if(Array.isArray(r))t[o]=[n].concat(r);else for(i in r)n[i]=r[i];else t[o]=e[o];return t},{})};function l(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}}var c={abstract:!1,name:"portalTarget",props:{attributes:{type:Object,default:function(){return{}}},multiple:{type:Boolean,default:!1},name:{type:String,required:!0},slim:{type:Boolean,default:!1},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},transition:{type:[Boolean,String,Object],default:!1},transitionEvents:{type:Object,default:function(){return{}}}},data:function(){return{transports:s.transports,firstRender:!0}},created:function(){this.transports[this.name]||this.$set(this.transports,this.name,[])},mounted:function(){var t=this;this.unwatch=this.$watch("ownTransports",this.emitChange),this.$nextTick(function(){t.transition&&(t.firstRender=!1)}),this.$options.abstract&&(this.$options.abstract=!1)},updated:function(){this.$options.abstract&&(this.$options.abstract=!1)},beforeDestroy:function(){this.unwatch(),this.$el.innerHTML=""},methods:{emitChange:function(t,e){if(this.multiple)this.$emit("change",[].concat(r(t)),[].concat(r(e)));else{var o=0===t.length?void 0:t[0],i=0===e.length?void 0:e[0];this.$emit("change",n({},o),n({},i))}}},computed:{ownTransports:function(){var t=this.transports[this.name]||[];return this.multiple?t:0===t.length?[]:[t[t.length-1]]},passengers:function(){return o(this.ownTransports,this.slotProps)},children:function(){return 0!==this.passengers.length?this.passengers:this.$slots.default||[]},hasAttributes:function(){return Object.keys(this.attributes).length>0},noWrapper:function(){var t=!this.hasAttributes&&this.slim;return t&&this.children.length>1&&console.warn("[portal-vue]: PortalTarget with `slim` option received more than one child element."),t},withTransition:function(){return!!this.transition},transitionData:function(){var t=this.transition,n={};return this.firstRender&&"object"===e(this.transition)&&!this.transition.appear?(n.props={name:"__notranstition__portal-vue__"},n):("string"==typeof t?n.props={name:t}:"object"===(void 0===t?"undefined":e(t))&&(n.props=t),this.renderSlim&&(n.props.tag=this.tag),n.on=this.transitionEvents,n)}},render:function(t){this.$options.abstract=!0;var e=this.noWrapper?"transition":"transition-group",n=this.tag;if(this.withTransition)return t(e,u([this.transitionData,{class:"vue-portal-target"}]),[this.children]);var r=this.ownTransports.length;return this.noWrapper?this.children[0]:t(n,u([{class:"vue-portal-target"},this.attributes,{key:r}]),[this.children])}},f="undefined"!=typeof window,p=1,h={abstract:!1,name:"portal",props:{disabled:{type:Boolean,default:!1},name:{type:String,default:function(){return String(p++)}},order:{type:Number,default:0},slim:{type:Boolean,default:!1},slotProps:{type:Object,default:function(){return{}}},tag:{type:[String],default:"DIV"},targetEl:{type:f?[String,HTMLElement]:String},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}}},mounted:function(){this.targetEl&&this.mountToTarget(),this.disabled||this.sendUpdate(),this.$options.abstract&&(this.$options.abstract=!1)},updated:function(){this.disabled?this.clear():this.sendUpdate(),this.$options.abstract&&(this.$options.abstract=!1)},beforeDestroy:function(){this.clear(),this.mountedComp&&this.mountedComp.$destroy()},watch:{to:function(t,e){e&&this.clear(e),this.sendUpdate()},targetEl:function(t,e){t&&this.mountToTarget()}},methods:{normalizedSlots:function(){return this.$scopedSlots.default?[this.$scopedSlots.default]:this.$slots.default},sendUpdate:function(){var t=this.normalizedSlots();t?s.open({from:this.name,to:this.to,passengers:[].concat(r(t)),order:this.order}):this.clear()},clear:function(t){s.close({from:this.name,to:t||this.to})},mountToTarget:function(){var e=void 0,r=this.targetEl;if("string"==typeof r)e=document.querySelector(r);else{if(!(r instanceof HTMLElement))return void console.warn("[vue-portal]: value of targetEl must be of type String or HTMLElement");e=r}if(e){var o=new t(n({},c,{parent:this,propsData:{name:this.to,tag:e.tagName,attributes:function(t){for(var e=t.hasAttributes()?t.attributes:[],n={},r=0;r<e.length;r++){var o=e[r];o.value&&(n[o.name]=""===o.value||o.value)}var i=void 0,s=void 0;return n.class&&(i=n.class,delete n.class),n.style&&(s=n.style,delete n.style),{attrs:n,class:i,style:s}}(e)}}));o.$mount(e),this.mountedComp=o}else console.warn("[vue-portal]: The specified targetEl "+r+" was not found")},normalizeChildren:function(t){return"function"==typeof t?t(this.slotProps):t}},render:function(t){var e=this.$slots.default||this.$scopedSlots.default||[],n=this.tag;return e.length&&this.disabled?(this.$options.abstract=!0,e.length<=1&&this.slim?e[0]:t(n,null,[this.normalizeChildren(e)])):t(n,{class:"v-portal",style:"display: none",key:"v-portal-placeholder"},[])}};function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.portalName||"portal",h),t.component(e.portalTargetName||"portalTarget",c)}return"undefined"!=typeof window&&window.Vue&&window.Vue.use({install:d}),{install:d,Portal:h,PortalTarget:c,Wormhole:s}}(n(1))},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r=n(0),o=Object.prototype,i=o.hasOwnProperty,s=o.toString,a=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(t){}var o=s.call(t);return r&&(e?t[a]=n:delete t[a]),o}},function(t,e,n){var r=n(0),o=n(5),i=n(4),s="[object Null]",a="[object Undefined]",u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?a:s:u&&u in Object(t)?o(t):i(t)}},function(t,e,n){var r=n(6),o=n(3),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==i}},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(10))},function(t,e,n){var r=n(11),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e,n){var r=n(0),o=n(9),i=n(8),s=n(7),a=1/0,u=r?r.prototype:void 0,l=u?u.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return o(e,t)+"";if(s(e))return l?l.call(e):"";var n=e+"";return"0"==n&&1/e==-a?"-0":n}},function(t,e,n){var r=n(13);t.exports=function(t){return null==t?"":r(t)}},function(t,e,n){var r=n(14),o=0;t.exports=function(t){var e=++o;return r(t)+e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=s(n(15)),o=n(2),i=s(n(1));function s(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={name:"VcPortal",props:{getContainer:{type:Function,required:!0},didUpdate:Function,targetClass:[String,Object,Array]},data:function(){return{name:(0,r.default)("portal")}},mounted:function(){this.createContainer()},updated:function(){this.didUpdate&&this.didUpdate()},beforeDestroy:function(){this.removeContainer()},methods:{createContainer:function(){var t=this.targetClass,e=this.name,n=document.createElement("div");this._container=this.getContainer(),this._container.appendChild(n),this._target=new i.default(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){a(t,e,n[e])})}return t}({el:n},o.PortalTarget,{class:"test",propsData:{name:e,attributes:{class:t}}})),this.$forceUpdate()},removeContainer:function(){this._target&&this._target.$el.remove()}},render:function(){var t=arguments[0];if(this._container){var e=this.name;return t(o.Portal,{attrs:{to:e}},[this.$slots.default])}return null}};e.default=u}]);