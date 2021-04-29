(()=>{"use strict";var t,e,n,r,o,i,a,s,c,u,l,h,p,f,d,y,g,m,A,v,b,x,w,_,C,M,k={539:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(15),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,"body{margin:0;padding:0;font-family:sans-serif}.ui-wrapper{position:absolute;width:100%;height:100%}.controls{position:absolute;margin:10px;padding:10px;border:3px dashed gray;background:rgba(128,128,128,.3)}.controls .button{background:gray;margin:10px;padding:10px 20px;display:inline-block;cursor:pointer;user-select:none;border:3px solid #666}.controls .button:hover{background:#d3d3d3}.controls .controls-section{margin:10px}.controls .controls-section .controls-section-title{margin-bottom:10px;font-weight:bold}.controls .controls-section label{user-select:none;cursor:pointer}.controls .controls-section input[type=range]{width:100%}.controls .controls-section #m90p2-control{display:none;margin-top:20px}.controls .controls-section input[value=m90p2]:checked~#m90p2-control{display:block}@media only screen and (max-device-width: 812px){.controls{bottom:0;font-size:4rem}.controls .ui-buttons .ui-button{padding:20px 40px}}","",{version:3,sources:["webpack://./src/style.scss"],names:[],mappings:"AAAA,KACE,QAAA,CACA,SAAA,CACA,sBAAA,CAGF,YACE,iBAAA,CACA,UAAA,CACA,WAAA,CAGF,UACE,iBAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CACA,+BAAA,CAEA,kBACE,eAAA,CACA,WAAA,CACA,iBAAA,CACA,oBAAA,CACA,cAAA,CACA,gBAAA,CACA,qBAAA,CAEA,wBACE,kBAAA,CAIJ,4BAEE,WAAA,CAEA,oDACE,kBAAA,CACA,gBAAA,CAGF,kCACE,gBAAA,CACA,cAAA,CAGF,8CACE,UAAA,CAGF,2CACE,YAAA,CACA,eAAA,CAGF,sEAEE,aAAA,CAON,iDAEE,UACE,QAAA,CACA,cAAA,CAGE,iCACE,iBAAA,CAAA",sourcesContent:['body {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\n.ui-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.controls {\n  position: absolute;\n  margin: 10px;\n  padding: 10px;\n  border: 3px dashed gray;\n  background: rgba(128, 128, 128, 0.3);\n\n  .button {\n    background: grey;\n    margin: 10px;\n    padding: 10px 20px;\n    display: inline-block;\n    cursor: pointer;\n    user-select: none;\n    border: 3px solid #666;\n\n    &:hover {\n      background: lightgray;\n    }\n  }\n\n  .controls-section {\n    //border: 3px dashed gray;\n    margin: 10px;\n\n    .controls-section-title {\n      margin-bottom: 10px;\n      font-weight: bold;\n    }\n\n    label {\n      user-select: none;\n      cursor: pointer;\n    }\n\n    input[type=range] {\n      width: 100%;\n    }\n\n    #m90p2-control {\n      display: none;\n      margin-top: 20px;\n    }\n\n    input[value="m90p2"]:checked ~ #m90p2-control\n    {\n      display: block;\n    }\n  }\n\n\n}\n\n@media only screen\n  and (max-device-width: 812px) {\n  .controls {\n    bottom: 0;\n    font-size: 4rem;\n\n    .ui-buttons {\n      .ui-button {\n        padding: 20px 40px;\n      }\n    }\n  }\n}\n\n'],sourceRoot:""}]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},15:t=>{function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.exports=function(t){var n,r,o=(r=4,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}(n,r)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],a=o[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),u="/*# ".concat(c," */"),l=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[i].concat(l).concat([u]).join("\n")}return[i].join("\n")}},379:(t,e,n)=>{var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},r=[],o=0;o<t.length;o++){var s=t[o],c=e.base?s[0]+e.base:s[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var h=a(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==h?(i[h].references++,i[h].updater(p)):i.push({identifier:l,updater:y(p,e),references:1}),r.push(l)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,l=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function h(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f=null,d=0;function y(t,e){var n,r,o;if(e.singleton){var i=d++;n=f||(f=c(e)),r=h.bind(null,n,i,!1),o=h.bind(null,n,i,!0)}else n=c(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=s(t,e),u=0;u<n.length;u++){var l=a(n[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=c}}}}},S={};function E(t){var e=S[t];if(void 0!==e)return e.exports;var n=S[t]={id:t,exports:{}};return k[t](n,n.exports,E),n.exports}E.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return E.d(e,{a:e}),e},E.d=(t,e)=>{for(var n in e)E.o(e,n)&&!E.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},E.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e=function(){function t(){}return t.getInstance=function(){return void 0===this._instance&&(this._instance=new t),this._instance},t.getState=function(t,e){return void 0===e&&(e=void 0),this.getInstance()[t]||e},t.setState=function(e,n,r){var o=this;void 0===r&&(r=!0),this.getInstance()[e]=n,r&&t._callbacks.forEach((function(t){t(o,e,n)}))},t.registerCallback=function(t){this._callbacks.add(t)},t.deregisterCallback=function(t){this._callbacks.delete(t)},t._callbacks=new Set,t}(),n="pattern",r="palette",o="num-points",i="animate",a="mouse-pos",s="camo-depth",c=function(){function t(){}return t.getBaseColorFromPalette=function(t){return this._palettes[t][0]},t.colorGeneratorFromPalette=function(t){return this.colorGenerator(this._palettes[t])},t.colorGenerator=function(t){var e,n,r,o;return function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(i){switch(i.label){case 0:for(e=this.range(0,t.length-1),r=e.length;1<r;r--)n=Math.floor(Math.random()*r),o=[e[r-1],e[n]],e[n]=o[0],e[r-1]=o[1];r=0,i.label=1;case 1:return r<e.length?[4,t[e[r]]]:[3,4];case 2:i.sent(),i.label=3;case 3:return r++,[3,1];case 4:return[3,0];case 5:return[2]}}))},t._palettes={green:["#6C7C52","#4A4F44","#3B3845","#B2B096"],blue:["#3770DB","#172F5C","#7B9FE0","#32415C","#2A56A8"],desert:["#B8A79B","#72625D","#A69887","#6D4C2D"],orange:["#FF824D","#782400","#F74A00","#7A442C","#C73B00"]},t.range=function(t,e){return Array.from({length:e-t+1},(function(e,n){return n+t}))},t}(),u=function(){function t(t){this.ctx=t}return t.prototype.drawCircle=function(t){this.ctx.fillStyle=t.color,this.ctx.beginPath(),this.ctx.arc(t.center.x,t.center.y,t.radius,0,2*Math.PI,!0),this.ctx.closePath(),this.ctx.fill()},t.prototype.drawPolygon=function(t,e){var n=this;void 0===e&&(e=void 0),e?(this.ctx.fillStyle=e,this.ctx.strokeStyle=e):(this.ctx.fillStyle=t.color,this.ctx.strokeStyle=t.color),this.ctx.beginPath(),t.points.forEach((function(t,e){var r,o;0===e?(r=n.ctx).moveTo.apply(r,t.coord):(o=n.ctx).lineTo.apply(o,t.coord)})),this.ctx.closePath(),this.ctx.stroke(),this.ctx.fill()},t}(),l=function(){function t(t,e,n){void 0===n&&(n=null),this._x=t,this._y=e,this._index=n}return Object.defineProperty(t.prototype,"coord",{get:function(){return[this._x,this._y]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"key",{get:function(){return this.x+","+this.y},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasIndex",{get:function(){return!!this._index},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"keyIndex",{get:function(){return this._index},enumerable:!1,configurable:!0}),t.prototype.dist=function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))},t.prototype.equals=function(t){return this.x===t.x&&this.y===t.y},t.prototype.div=function(t){return this.x/=t,this.y/=t,this},t.of=function(e,n){var r=e+","+n;return void 0===this._cache[r]&&(this._cache[r]=new t(e,n)),this._cache[r]},t.randomOf=function(e,n,r,o){return void 0===e&&(e=0),void 0===n&&(n=0),t.of(e+Math.random()*r,n+Math.random()*o)},t.randomPointsOf=function(e,n,r,o){for(var i=[],a=0;a<o;a++)i.push(2*Math.PI*Math.random());return i.sort(),i.map((function(o){return t.of(e+r*Math.cos(o),n+r*Math.sin(o))}))},t.randomPoints2Of=function(e,n,r,o){for(var i=[],a=2*Math.PI*Math.random(),s=0;s<o;s++){var c=1.5*Math.random()-.75,u=2*Math.PI/o*s+c;i.push(u+a)}return i.sort(),i.map((function(o){return t.of(e+r*Math.cos(o),n+r*Math.sin(o))}))},t._cache={},t}(),h=function(){function t(t,e){this._points=t,this._color=e,this._center=this._points.reduce((function(t,e,n,r){return new l(t.x+e.x,t.y+e.y)})).div(this._points.length),this._points.sort(this.comparePoints.bind(this)),this.setMinMax()}return Object.defineProperty(t.prototype,"points",{get:function(){return this._points},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){return this._color},set:function(t){this._color=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"key",{get:function(){return this.points.map((function(t){return t.key})).join("/")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"keyIndex",{get:function(){return this.points.map((function(t){return t.keyIndex.toString()})).join("/")},enumerable:!1,configurable:!0}),t.prototype.equals=function(t){if(this.points.length!=t.points.length)return!1;for(var e=0;e<this.points.length;e++)if(!this.points[e].equals(t.points[e]))return!1;return!0},t.prototype.isContaining=function(t){var e=!1;if(t.x<this.minX||t.x>this.maxX||t.y<this.minY||t.y>this.maxY)return!1;for(var n=0,r=this.points.length-1;n<this.points.length;r=n++)this.points[n].y>t.y!=this.points[r].y>t.y&&t.x<(this.points[r].x-this.points[n].x)*(t.y-this.points[n].y)/(this.points[r].y-this.points[n].y)+this.points[n].x&&(e=!e);return e},t.prototype.setMinMax=function(){this.minX=this.points[0].x,this.maxX=this.points[0].x,this.minY=this.points[0].y,this.maxY=this.points[0].y;for(var t=1;t<this.points.length;t++){var e=this.points[t];this.minX=Math.min(e.x,this.minX),this.maxX=Math.max(e.x,this.maxX),this.minY=Math.min(e.y,this.minY),this.maxY=Math.max(e.y,this.maxY)}},t.prototype.comparePoints=function(t,e){var n=this;return t.equals(e)?0:function(){if(t.x-n._center.x>=0&&e.x-n._center.x<0)return!0;if(t.x-n._center.x<0&&e.x-n._center.x>=0)return!1;if(t.x-n._center.x==0&&e.x-n._center.x==0)return t.y-n._center.y>=0||e.y-n._center.y>=0?t.y>e.y:e.y>t.y;var r=(t.x-n._center.x)*(e.y-n._center.y)-(e.x-n._center.x)*(t.y-n._center.y);return r<0||!(r>0)&&(t.x-n._center.x)*(t.x-n._center.x)+(t.y-n._center.y)*(t.y-n._center.y)>(e.x-n._center.x)*(e.x-n._center.x)+(e.y-n._center.y)*(e.y-n._center.y)}()?1:-1},t}(),t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)},p=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)},f=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return p(n,t),n.prototype.startAnimate=function(){},n.prototype.stopAnimate=function(){},n.prototype.handleMouseMove=function(t){},n.prototype.draw=function(t,n){for(var r=c.colorGeneratorFromPalette(e.getState("palette","green")),o=500,i=Math.ceil(t/o),a=Math.ceil(n/o),s=0;s<i;s++)for(var u=0;u<a;u++){var p=o*s,f=o*u,d=r.next(),y=4;if((A=Math.random())>.66?y=5:A>.33&&(y=6),!(Math.random()>.8)){var g=new h(l.randomPoints2Of(p,f,o,y),d.value);this.drawPolygon(g)}}var m=200;for(i=Math.ceil(t/m),a=Math.ceil(n/m),s=0;s<i;s++)for(u=0;u<a;u++){var A;p=m*s,f=m*u,d=r.next(),y=4,(A=Math.random())>.66?y=5:A>.33&&(y=6),Math.random()>.8||(g=new h(l.randomPoints2Of(p,f,m,y),d.value),this.drawPolygon(g))}},n}(u),d=function(){function t(t,e,n){this._center=t,this._radius=e,this._color=n}return Object.defineProperty(t.prototype,"center",{get:function(){return this._center},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"radius",{get:function(){return this._radius},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){return this._color},enumerable:!1,configurable:!0}),t.prototype.isContaining=function(t){return this.center.dist(t)<this.radius},t}(),y=function(){function t(){}return t.range=function(t,e){return Array.from({length:e-t+1},(function(e,n){return n+t}))},t}(),g=function(){function t(t,e){t.hasIndex&&e.hasIndex?t.keyIndex<e.keyIndex?(this._start=t,this._end=e):(this._start=e,this._end=t):t.x<=e.x?(this._start=t,this._end=e):(this._start=e,this._end=t)}return Object.defineProperty(t.prototype,"start",{get:function(){return this._start},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"end",{get:function(){return this._end},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"key",{get:function(){return this.start.key+"/"+this.end.key},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"keyIndex",{get:function(){return this.start.keyIndex+"-"+this.end.keyIndex},enumerable:!1,configurable:!0}),t.prototype.equals=function(t){return this._start.equals(t._start)&&this._end.equals(t._end)||this._start.equals(t._end)&&this._end.equals(t._start)},t}(),m=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),A=function(t){function e(e,n){if(3!=e.length)throw Error("Triangle must have 3 points");return t.call(this,e,n)||this}return m(e,t),Object.defineProperty(e.prototype,"area",{get:function(){return this._area||(this._area=Math.abs(.5*(this.points[0].x*(this.points[1].y-this.points[2].y)+this.points[1].x*(this.points[2].y-this.points[0].y)+this.points[2].x*(this.points[0].y-this.points[1].y)))),this._area},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"edges",{get:function(){return this._edges||(this._edges=[],this._edges.push(new g(this.points[0],this.points[1])),this._edges.push(new g(this.points[1],this.points[2])),this._edges.push(new g(this.points[2],this.points[0]))),this._edges},enumerable:!1,configurable:!0}),e.prototype.getCircumcircle=function(){if(!this._circumcircle){var t=this.points[0].x,e=this.points[0].y,n=this.points[1].x,r=this.points[1].y,o=this.points[2].x,i=this.points[2].y,a=Math.pow(t,2),s=Math.pow(n,2),c=Math.pow(o,2),u=Math.pow(e,2),h=Math.pow(r,2),p=Math.pow(i,2),f=2*((n-t)*(i-e)-(r-e)*(o-t)),y=((i-e)*(s-a+h-u)+(e-r)*(c-a+p-u))/f,g=((t-o)*(s-a+h-u)+(n-t)*(c-a+p-u))/f,m=Math.sqrt(Math.pow(t-y,2)+Math.pow(e-g,2));this._circumcircle=new d(new l(y,g),m,"white")}return this._circumcircle},e}(h),v=function(){function t(){}return t.incrementAndGet=function(){return void 0===this._index&&(this._index=0),this._index++},t.reset=function(){this._index=0},t}(),b=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),x=function(t){function n(e){var n=t.call(this,e)||this;return n.activeTriangle=new Array(2),window.onmousedown=n.debugAdjacent.bind(n),n}return b(n,t),n.prototype.debugAdjacent=function(){console.log(this.adjacentPolygons,this.activeTriangle[0].area)},n.prototype.draw=function(t,n){var i=this;this.points=[];var a=Math.ceil(t/500),u=Math.ceil(n/500);v.reset();for(var h=0;h<a+1;h++)for(var p=0;p<u+1;p++)this.points.push(new l(t/a*h,n/u*p,v.incrementAndGet()));var f=e.getState(o)-1;y.range(0,f).forEach((function(e,r){i.points.push(new l(Math.random()*t,Math.random()*n,v.incrementAndGet()))}));var g=Math.sqrt(t*t+n*n)/2,m=new l(t/2,n/2);this.drawCircle(new d(m,g,"rgba(1, 1, 1, 0)"));var b=new l(m.x-Math.sqrt(3)*g,m.y-g,v.incrementAndGet()),x=new l(m.x+Math.sqrt(3)*g,m.y-g,v.incrementAndGet()),w=new l(m.x,m.y+2*g,v.incrementAndGet()),_=new A([b,x,w],"pink"),C=c.colorGeneratorFromPalette(e.getState(r,"green"));C.next();var M=[_];for(this.points.forEach((function(t,e){var n=[];M.forEach((function(e,r){e.getCircumcircle().isContaining(t)&&(n=n.concat(e.edges),delete M[r])})),n.map((function(t,e){for(var r=0;r<n.length;r++)if(e!=r&&t.equals(n[r]))return null;return t})).filter((function(t){return t})).forEach((function(e){M.push(new A([e.start,e.end,t],C.next().value))}))})),this.triangles=M.filter((function(t){return t})),this.triangleAreas=this.triangles.map((function(t){return t.area})).sort((function(t,e){return t-e})),this.triangleAreaMedian=this.triangleAreas[Math.floor(this.triangleAreas.length/2)],this.buildEdgeMap(),this.visitMap={},h=0;h<this.triangles.length;h++){var k=this.triangles[h];this.visitMap[k.keyIndex]||this.makeCamouflage(k,C.next().value,e.getState(s))}},n.prototype.makeCamouflage=function(t,e,n,r){var o=this;if(void 0===r&&(r=null),r=r||n,t.color=e,this.drawPolygon(t,e),this.visitMap[t.keyIndex]=!0,0!=n){var i=n===r;t.edges.forEach((function(a,s){var c=o.edgeMap[a.keyIndex].filter((function(e){return!e.equals(t)}))[0];c&&!o.visitMap[c.keyIndex]&&(i=!1,(c.area<5e3||Math.random()<n/r)&&o.makeCamouflage(c,e,n-1,r))})),i&&console.log("I am alone",t,t.area)}},n.prototype.startAnimate=function(){this.interval=setInterval(this.animate.bind(this),50)},n.prototype.stopAnimate=function(){clearInterval(this.interval)},n.prototype.animate=function(){var t=this;this.points.forEach((function(e,n){t.points[n].x+=2*(Math.random()-.5),t.points[n].y+=2*(Math.random()-.5)})),this.triangles.forEach((function(e){t.isActiveTriangle(e)?t.drawPolygon(e,"red"):t.adjacentPolygons[e.keyIndex]?t.drawPolygon(e,"blue"):t.drawPolygon(e)}))},n.prototype.handleMouseMove=function(t){var e=this;this.triangles.forEach((function(n){n.isContaining(t)?(e.updateActiveTriangle(n),e.drawPolygon(n,"red")):e.drawPolygon(n)})),Object.keys(this.adjacentPolygons).forEach((function(t){e.drawPolygon(e.adjacentPolygons[t],"blue")}))},n.prototype.buildEdgeMap=function(){var t=this;this.edgeMap={},this.triangles.forEach((function(e){e.edges.forEach((function(n){void 0===t.edgeMap[n.keyIndex]&&(t.edgeMap[n.keyIndex]=[]),t.edgeMap[n.keyIndex].push(e)})),t.drawPolygon(e)}))},n.prototype.updateActiveTriangle=function(t){var e=this;if(!this.isActiveTriangle(t)){this.activeTriangle[1]=this.activeTriangle[0],this.activeTriangle[0]=t,this.adjacentPolygons={};for(var n=0;n<t.edges.length;n++){var r=this.edgeMap[t.edges[n].keyIndex];r&&r.length>1&&r.forEach((function(n){n.equals(t)||(e.adjacentPolygons[n.keyIndex]=n)}))}}},n.prototype.isActiveTriangle=function(t){return this.activeTriangle[0]&&this.activeTriangle[0].equals(t)},n}(u),w=function(){function t(t){void 0===t&&(t="#6C7C52"),this._baseCol=t,this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.logics={m90p1:new f(this.ctx),m90p2:new x(this.ctx)},window.onresize=this.redrawHandler.bind(this),e.registerCallback(this.redrawHandler.bind(this)),this.redrawHandler(null,null,null)}return t.prototype.reDraw=function(){this.ctx.fillStyle=c.getBaseColorFromPalette(e.getState(r)),this.ctx.fillRect(0,0,this.width,this.height),this.draw()},t.prototype.redrawHandler=function(t,n,o){var s=this.logics[e.getState("pattern")];n===i?o?s.startAnimate():s.stopAnimate():n===a?s.handleMouseMove(o):(this.width=document.documentElement.clientWidth,this.height=document.documentElement.clientHeight,this.canvas.setAttribute("width",this.width.toString()),this.canvas.setAttribute("height",this.height.toString()),this.ctx.fillStyle=c.getBaseColorFromPalette(e.getState(r)),this.ctx.fillRect(0,0,this.width,this.height),this.draw())},t.prototype.draw=function(){this.logics[e.getState("pattern")].draw(this.width,this.height)},t}(),_=E(379),C=E.n(_),M=E(539),C()(M.Z,{insert:"head",singleton:!1}),M.Z.locals,window.onload=function(){document.getElementById("download").onclick=function(t){var e=document.getElementById("canvas"),n=document.createElement("a");document.body.appendChild(n),n.setAttribute("download","camo-pattern.png"),n.setAttribute("href",e.toDataURL("image/png").replace("image/png","image/octet-stream")),n.click(),document.body.removeChild(n)},document.getElementById("refresh").onclick=function(){f.reDraw()};var t=document.getElementById("controls-values");e.setState(n,t["camo-pattern"].value),e.setState(r,t["color-palette"].value),e.setState(o,t["num-points"].value),e.setState(s,t["camo-depth"].value),e.setState(i,!1),document.querySelectorAll("#camo-pattern input[type=radio]").forEach((function(t){t.onclick=function(){e.getState(n)!=t.value&&e.setState(n,t.value)}}));var c=document.querySelector("#camo-pattern input[name=num-points]"),u=document.getElementById("num-points-val");c.onchange=function(t){u.textContent=c.value,e.getState(o)!=c.value&&e.setState(o,c.value)};var h=document.querySelector("#camo-pattern input[name=camo-depth]"),p=document.getElementById("camo-depth-val");h.onchange=function(t){p.textContent=h.value,e.getState(s)!=h.value&&e.setState(s,h.value)},document.getElementById("start-animate").onclick=function(t){!0!==e.getState(i)&&e.setState(i,!0)},document.getElementById("stop-animate").onclick=function(t){!1!==e.getState(i)&&e.setState(i,!1)},document.querySelectorAll("#color-palette input[type=radio]").forEach((function(t){t.onclick=function(){e.getState(r)!=t.value&&e.setState(r,t.value)}})),window.onmousemove=function(t){e.getState(a)&&e.getState(a).equals(l.of(t.clientX,t.clientY))||e.setState(a,l.of(t.clientX,t.clientY))};var f=new w}})();