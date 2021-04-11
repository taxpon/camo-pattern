(()=>{"use strict";var t,e,n,r,o,a,i,c,s={539:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(15),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"body{margin:0;padding:0;font-family:sans-serif}.ui-buttons{position:absolute;margin:10px;padding:10px}.ui-buttons .ui-button{margin:10px;padding:10px}","",{version:3,sources:["webpack://./src/style.scss"],names:[],mappings:"AAAA,KACE,QAAA,CACA,SAAA,CACA,sBAAA,CAGF,YACE,iBAAA,CACA,WAAA,CACA,YAAA,CAEA,uBACE,WAAA,CACA,YAAA",sourcesContent:["body {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\n.ui-buttons {\n  position: absolute;\n  margin: 10px;\n  padding: 10px;\n\n  .ui-button {\n    margin: 10px;\n    padding: 10px;\n  }\n}\n"],sourceRoot:""}]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},15:t=>{function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.exports=function(t){var n,r,o=(r=4,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(n,r)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(s," */"),l=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[a].concat(l).concat([u]).join("\n")}return[a].join("\n")}},379:(t,e,n)=>{var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function i(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var c=t[o],s=e.base?c[0]+e.base:c[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var f=i(l),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:m(d,e),references:1}),r.push(l)}return r}function s(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var i=o(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,l=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function f(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function d(t,e,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,p=0;function m(t,e){var n,r,o;if(e.singleton){var a=p++;n=h||(h=s(e)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=s(e),r=d.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=i(n[r]);a[o].references--}for(var s=c(t,e),u=0;u<n.length;u++){var l=i(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=s}}}}},u={};function l(t){var e=u[t];if(void 0!==e)return e.exports;var n=u[t]={id:t,exports:{}};return s[t](n,n.exports,l),n.exports}l.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return l.d(e,{a:e}),e},l.d=(t,e)=>{for(var n in e)l.o(e,n)&&!l.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},l.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t=function(){function t(t,e){this.x=t,this.y=e}return Object.defineProperty(t.prototype,"coord",{get:function(){return[this.x,this.y]},enumerable:!1,configurable:!0}),t.of=function(e,n){var r=e+","+n;return void 0===this._cache[r]&&(this._cache[r]=new t(e,n)),this._cache[r]},t.randomOf=function(e,n,r,o){return void 0===e&&(e=0),void 0===n&&(n=0),t.of(e+Math.random()*r,n+Math.random()*o)},t.randomPointsOf=function(e,n,r,o){for(var a=[],i=0;i<o;i++)a.push(2*Math.PI*Math.random());return a.sort(),a.map((function(o){return t.of(e+r*Math.cos(o),n+r*Math.sin(o))}))},t.randomPoints2Of=function(e,n,r,o){for(var a=[],i=2*Math.PI*Math.random(),c=0;c<o;c++){var s=1.5*Math.random()-.75,u=2*Math.PI/o*c+s;a.push(u+i)}return a.sort(),a.map((function(o){return t.of(e+r*Math.cos(o),n+r*Math.sin(o))}))},t._cache={},t}(),e=function(){function t(t,e){this._points=t,this._color=e}return Object.defineProperty(t.prototype,"points",{get:function(){return this._points},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){return this._color},enumerable:!1,configurable:!0}),t}(),n=function(){function t(){}return t.getInstance=function(){return void 0===this._instance&&(this._instance=new t),this._instance},t.getState=function(t,e){return void 0===e&&(e=void 0),this.getInstance()[t]||e},t.setState=function(e,n,r){var o=this;void 0===r&&(r=!0),this.getInstance()[e]=n,r&&t._callbacks.forEach((function(t){t(o)}))},t.registerCallback=function(t){this._callbacks.add(t)},t.deregisterCallback=function(t){this._callbacks.delete(t)},t._callbacks=new Set,t}(),r=function(){function t(){}return t.getBaseColorFromPalette=function(t){return this._palettes[t][0]},t.colorGeneratorFromPalette=function(t){return this.colorGenerator(this._palettes[t])},t.colorGenerator=function(t){var e,n,r,o;return function(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(a){switch(a.label){case 0:for(e=this.range(0,t.length),r=e.length;1<r;r--)n=Math.floor(Math.random()*r),o=[e[r-1],e[n]],e[n]=o[0],e[r-1]=o[1];r=0,a.label=1;case 1:return r<e.length?[4,t[e[r]]]:[3,4];case 2:a.sent(),a.label=3;case 3:return r++,[3,1];case 4:return[3,0];case 5:return[2]}}))},t._palettes={green:["#6C7C52","#4A4F44","#3B3845","#B2B096"],blue:["#3770DB","#172F5C","#7B9FE0","#32415C","#2A56A8"]},t.range=function(t,e){return Array.from({length:e-t+1},(function(e,n){return n+t}))},t}(),o=function(){function o(t){void 0===t&&(t="#6C7C52"),this._baseCol=t,this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.redrawHandler(),window.onresize=this.redrawHandler.bind(this),n.registerCallback(this.redrawHandler.bind(this))}return o.prototype.reDraw=function(){this.ctx.fillStyle=r.getBaseColorFromPalette(n.getState("palette","green")),this.ctx.fillRect(0,0,this.width,this.height),this.draw()},o.prototype.redrawHandler=function(t){this.width=document.documentElement.clientWidth,this.height=document.documentElement.clientHeight,this.canvas.setAttribute("width",this.width.toString()),this.canvas.setAttribute("height",this.height.toString()),this.ctx.fillStyle=r.getBaseColorFromPalette(n.getState("palette","green")),this.ctx.fillRect(0,0,this.width,this.height),this.draw()},o.prototype.drawPolygon=function(t){var e=this;this.ctx.fillStyle=t.color,this.ctx.beginPath(),t.points.forEach((function(t,n){var r,o;0===n?(r=e.ctx).moveTo.apply(r,t.coord):(o=e.ctx).lineTo.apply(o,t.coord)})),this.ctx.closePath(),this.ctx.fill()},o.prototype.draw=function(){for(var o=r.colorGeneratorFromPalette(n.getState("palette","green")),a=500,i=Math.ceil(this.width/a),c=Math.ceil(this.height/a),s=0;s<i;s++)for(var u=0;u<c;u++){var l=a*s,f=a*u,d=o.next(),h=4;if((g=Math.random())>.66?h=5:g>.33&&(h=6),!(Math.random()>.8)){var p=new e(t.randomPoints2Of(l,f,a,h),d.value);this.drawPolygon(p)}}var m=200;for(i=Math.ceil(this.width/m),c=Math.ceil(this.height/m),s=0;s<i;s++)for(u=0;u<c;u++){var g;l=m*s,f=m*u,d=o.next(),h=4,(g=Math.random())>.66?h=5:g>.33&&(h=6),Math.random()>.8||(p=new e(t.randomPoints2Of(l,f,m,h),d.value),this.drawPolygon(p))}},o}(),a=l(379),i=l.n(a),c=l(539),i()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,window.onload=function(){var t=new o;document.getElementById("download").onclick=function(t){var e=document.getElementById("canvas"),n=document.createElement("a");document.body.appendChild(n),n.setAttribute("download","camo-pattern.png"),n.setAttribute("href",e.toDataURL("image/png").replace("image/png","image/octet-stream")),n.click(),document.body.removeChild(n)},document.getElementById("refresh").onclick=function(){t.reDraw()},document.querySelectorAll("#color-palette input[type=radio]").forEach((function(t){t.onclick=function(){n.getState("palette","green")!=t.value&&n.setState("palette",t.value)}}))}})();