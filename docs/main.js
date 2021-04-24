(()=>{"use strict";var t,n,e,r,o,i,a,c,s,u,l,p,h,f,d,A,g,y,m,b,v,w,C={539:(t,n,e)=>{e.d(n,{Z:()=>c});var r=e(15),o=e.n(r),i=e(645),a=e.n(i)()(o());a.push([t.id,"body{margin:0;padding:0;font-family:sans-serif}.ui-wrapper{position:absolute;width:100%;height:100%}.controls{position:absolute;margin:10px;padding:10px;border:3px dashed gray;background:rgba(128,128,128,.3)}.controls .ui-buttons .ui-button{background:gray;margin:10px;padding:10px 20px;display:inline-block;cursor:pointer;user-select:none;border:3px solid #666}.controls .ui-buttons .ui-button:hover{background:#d3d3d3}.controls .controls-section{margin:10px}.controls .controls-section .controls-section-title{margin-bottom:10px;font-weight:bold}.controls .controls-section label{user-select:none;cursor:pointer}.controls .controls-section input[type=range]{width:100%}.controls .controls-section #m90p2-control{display:none;margin-top:20px}.controls .controls-section input[value=m90p2]:checked~#m90p2-control{display:block}@media only screen and (max-device-width: 812px){.controls{bottom:0;font-size:4rem}.controls .ui-buttons .ui-button{padding:20px 40px}}","",{version:3,sources:["webpack://./src/style.scss"],names:[],mappings:"AAAA,KACE,QAAA,CACA,SAAA,CACA,sBAAA,CAGF,YACE,iBAAA,CACA,UAAA,CACA,WAAA,CAGF,UACE,iBAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CACA,+BAAA,CAGE,iCACE,eAAA,CACA,WAAA,CACA,iBAAA,CACA,oBAAA,CACA,cAAA,CACA,gBAAA,CACA,qBAAA,CAEA,uCACE,kBAAA,CAKN,4BAEE,WAAA,CAEA,oDACE,kBAAA,CACA,gBAAA,CAGF,kCACE,gBAAA,CACA,cAAA,CAGF,8CACE,UAAA,CAGF,2CACE,YAAA,CACA,eAAA,CAGF,sEAEE,aAAA,CAON,iDAEE,UACE,QAAA,CACA,cAAA,CAGE,iCACE,iBAAA,CAAA",sourcesContent:['body {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\n.ui-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.controls {\n  position: absolute;\n  margin: 10px;\n  padding: 10px;\n  border: 3px dashed gray;\n  background: rgba(128, 128, 128, 0.3);\n\n  .ui-buttons {\n    .ui-button {\n      background: grey;\n      margin: 10px;\n      padding: 10px 20px;\n      display: inline-block;\n      cursor: pointer;\n      user-select: none;\n      border: 3px solid #666;\n\n      &:hover {\n        background: lightgray;\n      }\n    }\n  }\n\n  .controls-section {\n    //border: 3px dashed gray;\n    margin: 10px;\n\n    .controls-section-title {\n      margin-bottom: 10px;\n      font-weight: bold;\n    }\n\n    label {\n      user-select: none;\n      cursor: pointer;\n    }\n\n    input[type=range] {\n      width: 100%;\n    }\n\n    #m90p2-control {\n      display: none;\n      margin-top: 20px;\n    }\n\n    input[value="m90p2"]:checked ~ #m90p2-control\n    {\n      display: block;\n    }\n  }\n\n\n}\n\n@media only screen\n  and (max-device-width: 812px) {\n  .controls {\n    bottom: 0;\n    font-size: 4rem;\n\n    .ui-buttons {\n      .ui-button {\n        padding: 20px 40px;\n      }\n    }\n  }\n}\n\n'],sourceRoot:""}]);const c=a},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);r&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),n.push(s))}},n}},15:t=>{function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}t.exports=function(t){var e,r,o=(r=4,function(t){if(Array.isArray(t))return t}(e=t)||function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return e}}(e,r)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],a=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(s," */"),l=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[i].concat(l).concat([u]).join("\n")}return[i].join("\n")}},379:(t,n,e)=>{var r,o=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),i=[];function a(t){for(var n=-1,e=0;e<i.length;e++)if(i[e].identifier===t){n=e;break}return n}function c(t,n){for(var e={},r=[],o=0;o<t.length;o++){var c=t[o],s=n.base?c[0]+n.base:c[0],u=e[s]||0,l="".concat(s," ").concat(u);e[s]=u+1;var p=a(l),h={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(i[p].references++,i[p].updater(h)):i.push({identifier:l,updater:A(h,n),references:1}),r.push(l)}return r}function s(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=e.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,l=(u=[],function(t,n){return u[t]=n,u.filter(Boolean).join("\n")});function p(t,n,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}function h(t,n,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f=null,d=0;function A(t,n){var e,r,o;if(n.singleton){var i=d++;e=f||(f=s(n)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=s(n),r=h.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var e=c(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var o=a(e[r]);i[o].references--}for(var s=c(t,n),u=0;u<e.length;u++){var l=a(e[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}e=s}}}}},x={};function _(t){var n=x[t];if(void 0!==n)return n.exports;var e=x[t]={id:t,exports:{}};return C[t](e,e.exports,_),e.exports}_.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return _.d(n,{a:n}),n},_.d=(t,n)=>{for(var e in n)_.o(n,e)&&!_.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},_.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),n=function(){function t(){}return t.getInstance=function(){return void 0===this._instance&&(this._instance=new t),this._instance},t.getState=function(t,n){return void 0===n&&(n=void 0),this.getInstance()[t]||n},t.setState=function(n,e,r){var o=this;void 0===r&&(r=!0),this.getInstance()[n]=e,r&&t._callbacks.forEach((function(t){t(o)}))},t.registerCallback=function(t){this._callbacks.add(t)},t.deregisterCallback=function(t){this._callbacks.delete(t)},t._callbacks=new Set,t}(),e="pattern",r="palette",o="num-points",i=function(){function t(){}return t.getBaseColorFromPalette=function(t){return this._palettes[t][0]},t.colorGeneratorFromPalette=function(t){return this.colorGenerator(this._palettes[t])},t.colorGenerator=function(t){var n,e,r,o;return function(t,n){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(i){switch(i.label){case 0:for(n=this.range(0,t.length),r=n.length;1<r;r--)e=Math.floor(Math.random()*r),o=[n[r-1],n[e]],n[e]=o[0],n[r-1]=o[1];r=0,i.label=1;case 1:return r<n.length?[4,t[n[r]]]:[3,4];case 2:i.sent(),i.label=3;case 3:return r++,[3,1];case 4:return[3,0];case 5:return[2]}}))},t._palettes={green:["#6C7C52","#4A4F44","#3B3845","#B2B096"],blue:["#3770DB","#172F5C","#7B9FE0","#32415C","#2A56A8"],desert:["#B8A79B","#72625D","#A69887","#6D4C2D"]},t.range=function(t,n){return Array.from({length:n-t+1},(function(n,e){return e+t}))},t}(),a=function(){function t(t){this.ctx=t}return t.prototype.drawCircle=function(t){this.ctx.fillStyle=t.color,this.ctx.beginPath(),this.ctx.arc(t.center.x,t.center.y,t.radius,0,2*Math.PI,!0),this.ctx.closePath(),this.ctx.fill()},t.prototype.drawPolygon=function(t){var n=this;this.ctx.fillStyle=t.color,this.ctx.strokeStyle=t.color,this.ctx.beginPath(),t.points.forEach((function(t,e){var r,o;0===e?(r=n.ctx).moveTo.apply(r,t.coord):(o=n.ctx).lineTo.apply(o,t.coord)})),this.ctx.closePath(),this.ctx.stroke(),this.ctx.fill()},t}(),c=function(){function t(t,n){this._points=t,this._color=n}return Object.defineProperty(t.prototype,"points",{get:function(){return this._points},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){return this._color},enumerable:!1,configurable:!0}),t}(),s=function(){function t(t,n){this._x=t,this._y=n}return Object.defineProperty(t.prototype,"coord",{get:function(){return[this._x,this._y]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"x",{get:function(){return this._x},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._y},enumerable:!1,configurable:!0}),t.prototype.dist=function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))},t.prototype.equals=function(t){return this.x===t.x&&this.y===t.y},t.of=function(n,e){var r=n+","+e;return void 0===this._cache[r]&&(this._cache[r]=new t(n,e)),this._cache[r]},t.randomOf=function(n,e,r,o){return void 0===n&&(n=0),void 0===e&&(e=0),t.of(n+Math.random()*r,e+Math.random()*o)},t.randomPointsOf=function(n,e,r,o){for(var i=[],a=0;a<o;a++)i.push(2*Math.PI*Math.random());return i.sort(),i.map((function(o){return t.of(n+r*Math.cos(o),e+r*Math.sin(o))}))},t.randomPoints2Of=function(n,e,r,o){for(var i=[],a=2*Math.PI*Math.random(),c=0;c<o;c++){var s=1.5*Math.random()-.75,u=2*Math.PI/o*c+s;i.push(u+a)}return i.sort(),i.map((function(o){return t.of(n+r*Math.cos(o),e+r*Math.sin(o))}))},t._cache={},t}(),t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(n,e)},u=function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.draw=function(t,e){for(var r=i.colorGeneratorFromPalette(n.getState("palette","green")),o=500,a=Math.ceil(t/o),u=Math.ceil(e/o),l=0;l<a;l++)for(var p=0;p<u;p++){var h=o*l,f=o*p,d=r.next(),A=4;if((m=Math.random())>.66?A=5:m>.33&&(A=6),!(Math.random()>.8)){var g=new c(s.randomPoints2Of(h,f,o,A),d.value);this.drawPolygon(g)}}var y=200;for(a=Math.ceil(t/y),u=Math.ceil(e/y),l=0;l<a;l++)for(p=0;p<u;p++){var m;h=y*l,f=y*p,d=r.next(),A=4,(m=Math.random())>.66?A=5:m>.33&&(A=6),Math.random()>.8||(g=new c(s.randomPoints2Of(h,f,y,A),d.value),this.drawPolygon(g))}},e}(a),p=function(){function t(t,n,e){this._center=t,this._radius=n,this._color=e}return Object.defineProperty(t.prototype,"center",{get:function(){return this._center},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"radius",{get:function(){return this._radius},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){return this._color},enumerable:!1,configurable:!0}),t.prototype.isIncluding=function(t){return this.center.dist(t)<this.radius},t}(),h=function(){function t(){}return t.range=function(t,n){return Array.from({length:n-t+1},(function(n,e){return e+t}))},t}(),f=function(){function t(t,n){this._start=t,this._end=n}return Object.defineProperty(t.prototype,"start",{get:function(){return this._start},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"end",{get:function(){return this._end},enumerable:!1,configurable:!0}),t.prototype.equals=function(t){return this._start.equals(t._start)&&this._end.equals(t._end)||this._start.equals(t._end)&&this._end.equals(t._start)},t}(),d=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),A=function(t){function n(n,e){if(3!=n.length)throw Error("Triangle must have 3 points");return t.call(this,n,e)||this}return d(n,t),Object.defineProperty(n.prototype,"edges",{get:function(){return this._edges||(this._edges=[],this._edges.push(new f(this.points[0],this.points[1])),this._edges.push(new f(this.points[1],this.points[2])),this._edges.push(new f(this.points[2],this.points[0]))),this._edges},enumerable:!1,configurable:!0}),n.prototype.getCircumcircle=function(){if(!this._circumcircle){var t=this.points[0].x,n=this.points[0].y,e=this.points[1].x,r=this.points[1].y,o=this.points[2].x,i=this.points[2].y,a=Math.pow(t,2),c=Math.pow(e,2),u=Math.pow(o,2),l=Math.pow(n,2),h=Math.pow(r,2),f=Math.pow(i,2),d=2*((e-t)*(i-n)-(r-n)*(o-t)),A=((i-n)*(c-a+h-l)+(n-r)*(u-a+f-l))/d,g=((t-o)*(c-a+h-l)+(e-t)*(u-a+f-l))/d,y=Math.sqrt(Math.pow(t-A,2)+Math.pow(n-g,2));this._circumcircle=new p(new s(A,g),y,"white")}return this._circumcircle},n}(c),g=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return g(e,t),e.prototype.draw=function(t,e){var a=this,c=[new s(0,0),new s(t,0),new s(0,e),new s(t,e)],u=n.getState(o)-1;h.range(0,u).forEach((function(n){c.push(new s(Math.random()*t,Math.random()*e))}));var l=Math.sqrt(t*t+e*e)/2,f=new s(t/2,e/2);this.drawCircle(new p(f,l,"rgba(1, 1, 1, 0)"));var d=new s(f.x-Math.sqrt(3)*l,f.y-l),g=new s(f.x+Math.sqrt(3)*l,f.y-l),y=new s(f.x,f.y+2*l),m=new A([d,g,y],"pink"),b=i.colorGeneratorFromPalette(n.getState(r,"green")),v=[m];c.forEach((function(t,n){var e=[];v.forEach((function(n,r){n.getCircumcircle().isIncluding(t)&&(e=e.concat(n.edges),delete v[r])})),e.map((function(t,n){for(var r=0;r<e.length;r++)if(n!=r&&t.equals(e[r]))return null;return t})).filter((function(t){return t})).forEach((function(n){v.push(new A([n.start,n.end,t],b.next().value))}))})),v.forEach((function(t){a.drawPolygon(t)}))},e}(a),m=function(){function t(t){void 0===t&&(t="#6C7C52"),this._baseCol=t,this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.logics={m90p1:new l(this.ctx),m90p2:new y(this.ctx)},window.onresize=this.redrawHandler.bind(this),n.registerCallback(this.redrawHandler.bind(this)),this.redrawHandler()}return t.prototype.reDraw=function(){this.ctx.fillStyle=i.getBaseColorFromPalette(n.getState(r)),this.ctx.fillRect(0,0,this.width,this.height),this.draw()},t.prototype.redrawHandler=function(t){this.width=document.documentElement.clientWidth,this.height=document.documentElement.clientHeight,this.canvas.setAttribute("width",this.width.toString()),this.canvas.setAttribute("height",this.height.toString()),this.ctx.fillStyle=i.getBaseColorFromPalette(n.getState(r)),this.ctx.fillRect(0,0,this.width,this.height),this.draw()},t.prototype.draw=function(){this.logics[n.getState("pattern")].draw(this.width,this.height)},t}(),b=_(379),v=_.n(b),w=_(539),v()(w.Z,{insert:"head",singleton:!1}),w.Z.locals,window.onload=function(){document.getElementById("download").onclick=function(t){var n=document.getElementById("canvas"),e=document.createElement("a");document.body.appendChild(e),e.setAttribute("download","camo-pattern.png"),e.setAttribute("href",n.toDataURL("image/png").replace("image/png","image/octet-stream")),e.click(),document.body.removeChild(e)},document.getElementById("refresh").onclick=function(){c.reDraw()};var t=document.getElementById("controls-values");n.setState(e,t["camo-pattern"].value),n.setState(r,t["color-palette"].value),n.setState(o,t["num-points"].value),document.querySelectorAll("#camo-pattern input[type=radio]").forEach((function(t){t.onclick=function(){n.getState(e)!=t.value&&n.setState(e,t.value)}}));var i=document.querySelector("#camo-pattern input[name=num-points]"),a=document.getElementById("num-points-val");i.onchange=function(t){a.textContent=i.value,n.getState(o)!=i.value&&n.setState(o,i.value)},document.querySelectorAll("#color-palette input[type=radio]").forEach((function(t){t.onclick=function(){n.getState(r)!=t.value&&n.setState(r,t.value)}}));var c=new m}})();