!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(window,(function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n,t){var r=t(1);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,t(4).default)("554d391a",r,!1,{})},function(e,n,t){(e.exports=t(2)(!0)).push([e.i,"\n.crumbs[data-v-0b978ac5] {\n  list-style: none;\n}\n.crumbs a[data-v-0b978ac5],\n  .crumbs a[data-v-0b978ac5]:visited,\n  .crumbs a[data-v-0b978ac5]:active {\n    color: #0095da;\n    text-decoration: none;\n}\n.crumbs a[data-v-0b978ac5]:hover,\n    .crumbs a[data-v-0b978ac5]:visited:hover,\n    .crumbs a[data-v-0b978ac5]:active:hover {\n      color: #606060;\n}\n.crumbs li[data-v-0b978ac5] {\n    display: inline;\n    margin-right: 5px;\n    color: #606060;\n}\n.crumbs li[data-v-0b978ac5]:after {\n      margin-left: 5px;\n      content: \"/\";\n}\n.crumbs li[data-v-0b978ac5]:last-of-type:after {\n      content: '';\n}\n","",{version:3,sources:["/Users/kimlarocca/Documents/Code/nuxt-test/components/Breadcrumbs.vue"],names:[],mappings:";AAAA;EACE,iBAAiB;CAAE;AACnB;;;IAGE,eAAe;IACf,sBAAsB;CAAE;AACxB;;;MAGE,eAAe;CAAE;AACrB;IACE,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;CAAE;AACjB;MACE,iBAAiB;MACjB,aAAa;CAAE;AACjB;MACE,YAAY;CAAE",file:"Breadcrumbs.vue",sourcesContent:[".crumbs {\n  list-style: none; }\n  .crumbs a,\n  .crumbs a:visited,\n  .crumbs a:active {\n    color: #0095da;\n    text-decoration: none; }\n    .crumbs a:hover,\n    .crumbs a:visited:hover,\n    .crumbs a:active:hover {\n      color: #606060; }\n  .crumbs li {\n    display: inline;\n    margin-right: 5px;\n    color: #606060; }\n    .crumbs li:after {\n      margin-left: 5px;\n      content: \"/\"; }\n    .crumbs li:last-of-type:after {\n      content: ''; }\n"],sourceRoot:""}])},function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),a=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[t].concat(a).concat([o]).join("\n")}return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="("+i[2]+") and ("+t+")"),n.push(i))}},n}},function(e,n,t){"use strict";t.r(n);var r={name:"Breadcrumbs",props:{crumbs:Array},methods:{hasLink:e=>!!e.link}},o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"breadcrumbs"},[t("div",{staticClass:"grid-x container"},[t("div",{staticClass:"cell large-auto"},[t("ul",{staticClass:"crumbs"},e._l(e.crumbs,(function(n,r){return t("li",{key:r},[e.hasLink(n)?t("a",{attrs:{href:n.link}},[e._v(e._s(n.name))]):t("span",[e._v(e._s(n.name))])])})),0)])])])};o._withStripped=!0;var a=function(e,n,t,r,o,a,i,s){var c=typeof(e=e||{}).default;"object"!==c&&"function"!==c||(e=e.default);var u,f="function"==typeof e?e.options:e;if(n&&(f.render=n,f.staticRenderFns=[],f._compiled=!0),f._scopeId=a,o&&(u=o),u)if(f.functional){f._injectStyles=u;var l=f.render;f.render=function(e,n){return u.call(n),l(e,n)}}else{var d=f.beforeCreate;f.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:f}}(r,o,0,0,(function(e){t(0)}),"data-v-0b978ac5");a.options.__file="components/Breadcrumbs.vue",n.default=a.exports},function(e,n,t){"use strict";function r(e,n){for(var t=[],r={},o=0;o<n.length;o++){var a=n[o],i=a[0],s={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):t.push(r[i]={id:i,parts:[s]})}return t}t.r(n),t.d(n,"default",(function(){return v}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},i=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,f=function(){},l=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,n,t,o){u=t,l=o||{};var i=r(e,n);return m(i),function(n){for(var t=[],o=0;o<i.length;o++){var s=i[o];(c=a[s.id]).refs--,t.push(c)}for(n?m(i=r(e,n)):i=[],o=0;o<t.length;o++){var c;if(0===(c=t[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete a[c.id]}}}}function m(e){for(var n=0;n<e.length;n++){var t=e[n],r=a[t.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](t.parts[o]);for(;o<t.parts.length;o++)r.parts.push(A(t.parts[o]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{var i=[];for(o=0;o<t.parts.length;o++)i.push(A(t.parts[o]));a[t.id]={id:t.id,refs:1,parts:i}}}}function b(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function A(e){var n,t,r=document.querySelector("style["+d+'~="'+e.id+'"]');if(r){if(u)return f;r.parentNode.removeChild(r)}if(p){var o=c++;r=s||(s=b()),n=y.bind(null,r,o,!1),t=y.bind(null,r,o,!0)}else r=b(),n=function(e,n){var t=n.css,r=n.media,o=n.sourceMap;if(r&&e.setAttribute("media",r),l.ssrId&&e.setAttribute(d,n.id),o&&(t+="\n/*# sourceURL="+o.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,r),t=function(){r.parentNode.removeChild(r)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else t()}}var h=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}();function y(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=h(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}}])}));