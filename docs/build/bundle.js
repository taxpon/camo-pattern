var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function i(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function a(t,e,n,s){return t[1]&&s?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](s(e))):n.ctx}function l(t,e,n,s,i,o,r){const l=function(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|i[s];return t}return e.dirty|i}return e.dirty}(e,s,i,o);if(l){const i=a(e,n,s,r);t.p(i,l)}}function c(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function f(){return p(" ")}function g(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t){return""===t?null:+t}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e){t.value=null==e?"":e}let v;function b(t){v=t}function $(){if(!v)throw new Error("Function called outside component initialization");return v}function w(t){$().$$.on_mount.push(t)}const M=[],P=[],k=[],C=[],A=Promise.resolve();let E=!1;function I(t){k.push(t)}function T(t){C.push(t)}let q=!1;const F=new Set;function B(){if(!q){q=!0;do{for(let t=0;t<M.length;t+=1){const e=M[t];b(e),j(e.$$)}for(b(null),M.length=0;P.length;)P.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];F.has(e)||(F.add(e),e())}k.length=0}while(M.length);for(;C.length;)C.pop()();E=!1,q=!1,F.clear()}}function j(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const O=new Set;function S(t,e){t&&t.i&&(O.delete(t),t.i(e))}function D(t,e,n,s){if(t&&t.o){if(O.has(t))return;O.add(t),undefined.c.push((()=>{O.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}const G="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function X(t,e){t.d(1),e.delete(t.key)}function Y(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function U(t){t&&t.c()}function L(t,n,o,r){const{fragment:a,on_mount:l,on_destroy:c,after_update:h}=t.$$;a&&a.m(n,o),r||I((()=>{const n=l.map(e).filter(i);c?c.push(...n):s(n),t.$$.on_mount=[]})),h.forEach(I)}function N(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&(M.push(t),E||(E=!0,A.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(e,i,o,r,a,l,c=[-1]){const h=v;b(e);const d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:i.context||[]),callbacks:n(),dirty:c,skip_bound:!1};let p=!1;if(d.ctx=o?o(e,i.props||{},((t,n,...s)=>{const i=s.length?s[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=i)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](i),p&&H(e,t)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!r&&r(d.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();i.intro&&S(e.$$.fragment),L(e,i.target,i.anchor,i.customElement),B()}b(h)}class z{$destroy(){N(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(t){let e,n;const s=t[1].default,i=function(t,e,n,s){if(t){const i=a(t,e,n,s);return t[0](i)}}(s,t,t[0],null);return{c(){e=d("div"),i&&i.c(),m(e,"class","control-column svelte-mws8dq")},m(t,s){h(t,e,s),i&&i.m(e,null),n=!0},p(t,[e]){i&&i.p&&(!n||1&e)&&l(i,s,t,t[0],e,null,null)},i(t){n||(S(i,t),n=!0)},o(t){D(i,t),n=!1},d(t){t&&u(e),i&&i.d(t)}}}function J(t,e,n){let{$$slots:s={},$$scope:i}=e;return t.$$set=t=>{"$$scope"in t&&n(0,i=t.$$scope)},[i,s]}class K extends z{constructor(t){super(),R(this,t,J,W,o,{})}}const Q=[];function V(e,n=t){let s;const i=[];function r(t){if(o(e,t)&&(e=t,s)){const t=!Q.length;for(let t=0;t<i.length;t+=1){const n=i[t];n[1](),Q.push(n,e)}if(t){for(let t=0;t<Q.length;t+=2)Q[t][0](Q[t+1]);Q.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(o,a=t){const l=[o,a];return i.push(l),1===i.length&&(s=n(r)||t),o(e),()=>{const t=i.indexOf(l);-1!==t&&i.splice(t,1),0===i.length&&(s(),s=null)}}}}const Z=V(100),tt=V(2),et=V(0),nt=V(0),st=V(!1),it=V(!1);class ot{constructor(t,e,n){this._id=t,this._name=e,this._colors=n}get id(){return this._id}get name(){return this._name}get colors(){return this._colors}}class rt{static loadDefaultPalettes(){rt._defaultPalettes=new Map,rt._defaultPalettes.set("green",new ot("green","Green",["#6C7C52","#4A4F44","#3B3845","#B2B096"])),rt._defaultPalettes.set("blue",new ot("blue","Blue",["#3770DB","#172F5C","#7B9FE0","#32415C","#2A56A8"])),rt._defaultPalettes.set("desert",new ot("desert","Desert",["#B8A79B","#72625D","#A69887","#6D4C2D"])),rt._defaultPalettes.set("orange",new ot("orange","Orange",["#FF824D","#782400","#F74A00","#7A442C","#C73B00"])),rt._defaultPalettes.set("uc1",new ot("uc1","UC1",["#C4B9B5","#683A31","#4A5F56"])),rt._defaultPalettes.set("uc2",new ot("uc2","UC2",["#262527","#513A3E","#424B50"])),rt._defaultPalettes.set("bw",new ot("bw","BW",["#FFFFFF","#000000"]))}static loadUserPalettes(){this._userPalettes=new Map;JSON.parse(window.localStorage.getItem("userPalettes")||"[]").forEach((t=>{const e=new ot(t._id,t._name,t._colors);this._userPalettes.set(e.id,e)}))}static getDefaultPalettes(){return this._defaultPalettes}static getUserPalettes(){return this._userPalettes}static getBaseColorFromPalette(t){return(this._defaultPalettes.get(t)||this._userPalettes.get(t)).colors[0]}static colorGeneratorFromPalette(t){return this.colorGenerator((this._defaultPalettes.get(t)||this._userPalettes.get(t)).colors)}static*colorGenerator(t){for(;;){let e=this.range(0,t.length-1);for(let t=e.length;1<t;t--){let n=Math.floor(Math.random()*t);[e[n],e[t-1]]=[e[t-1],e[n]]}for(let n=0;n<e.length;n++)yield t[e[n]]}}}rt.ctor=(rt.loadDefaultPalettes(),void rt.loadUserPalettes()),rt.range=(t,e)=>Array.from({length:e-t+1},((e,n)=>n+t));const{Map:at}=G;function lt(t,e,n){const s=t.slice();return s[16]=e[n][0],s[17]=e[n][1],s}function ct(t){let e,n,i,o,r,a,l,_,v,b,$,w,M,P,k,C,A,E,I,T,q,F,B,j,O,S,D,G,X,Y,U;return{c(){e=d("div"),n=d("div"),n.textContent="Pattern Parameter",i=f(),o=d("div"),r=d("div"),a=p("Number of Points ("),l=d("span"),_=p(t[2]),v=p(")"),b=f(),$=d("div"),w=d("input"),M=f(),P=d("div"),k=d("div"),C=p("Camo Depth ("),A=d("span"),E=p(t[3]),I=p(")"),T=f(),q=d("div"),F=d("input"),B=f(),j=d("div"),O=d("div"),O.textContent="Control",S=f(),D=d("span"),D.textContent="Animate",G=f(),X=d("span"),X.textContent="Mouse Track",m(n,"class","control-section-title svelte-14sbs4o"),m(l,"id","num-points-val"),m(r,"class","control-section-sub-title svelte-14sbs4o"),m(w,"type","range"),m(w,"name","num-points"),m(w,"min","1"),m(w,"max","500"),m(w,"class","svelte-14sbs4o"),m(o,"class","control-section-sub svelte-14sbs4o"),m(A,"id","camo-depth-val"),m(k,"class","control-section-sub-title svelte-14sbs4o"),m(F,"type","range"),m(F,"name","camo-depth"),m(F,"min","1"),m(F,"max","20"),m(F,"class","svelte-14sbs4o"),m(P,"class","control-section-sub svelte-14sbs4o"),m(O,"class","control-section-sub-title svelte-14sbs4o"),m(D,"class","button svelte-14sbs4o"),m(X,"class","button svelte-14sbs4o"),m(j,"class","control-section-sub svelte-14sbs4o"),m(e,"class","control-section svelte-14sbs4o")},m(s,u){h(s,e,u),c(e,n),c(e,i),c(e,o),c(o,r),c(r,a),c(r,l),c(l,_),c(r,v),c(o,b),c(o,$),c($,w),y(w,t[2]),c(e,M),c(e,P),c(P,k),c(k,C),c(k,A),c(A,E),c(k,I),c(P,T),c(P,q),c(q,F),y(F,t[3]),c(e,B),c(e,j),c(j,O),c(j,S),c(j,D),c(j,G),c(j,X),Y||(U=[g(w,"change",t[12]),g(w,"input",t[12]),g(F,"change",t[13]),g(F,"input",t[13]),g(D,"mousedown",t[7]),g(X,"mousedown",t[8])],Y=!0)},p(t,e){4&e&&x(_,t[2]),4&e&&y(w,t[2]),8&e&&x(E,t[3]),8&e&&y(F,t[3])},d(t){t&&u(e),Y=!1,s(U)}}}function ht(t,e){let n,s,i,o,r,a,l,_,x,y,v,b=e[17].name+"";return{key:t,first:null,c(){n=d("div"),s=d("label"),i=d("input"),o=f(),r=d("span"),r.innerHTML='<span class="inside"></span>',a=f(),l=d("span"),_=p(b),x=f(),m(i,"type","radio"),i.__value=e[16],i.value=i.__value,e[10][1].push(i),m(r,"class","outside"),m(l,"class","radio-name"),m(s,"class","svelte-14sbs4o"),this.first=n},m(t,u){h(t,n,u),c(n,s),c(s,i),i.checked=i.__value===e[1],c(s,o),c(s,r),c(s,a),c(s,l),c(l,_),c(n,x),y||(v=g(i,"change",e[14]),y=!0)},p(t,n){e=t,2&n&&(i.checked=i.__value===e[1])},d(t){t&&u(n),e[10][1].splice(e[10][1].indexOf(i),1),y=!1,v()}}}function ut(t){let e,n,i,o,r,a,l,p,_,x,y,v,b,$,w,M,P,k,C,A,E,I,T,q,F,B,j,O,D,G,Y,U,L,N,H=[],R=new at,z="m90p2"===t[0]&&ct(t),W=[...t[4]];const J=t=>t[16];for(let e=0;e<W.length;e+=1){let n=lt(t,W,e),s=J(n);R.set(s,H[e]=ht(s,n))}return{c(){e=d("div"),n=d("div"),n.textContent="Camo Pattern",i=f(),o=d("div"),r=d("div"),a=d("label"),l=d("input"),p=f(),_=d("span"),_.innerHTML='<span class="inside"></span>',x=f(),y=d("span"),y.textContent="M90(1)",v=f(),b=d("div"),$=d("label"),w=d("input"),M=f(),P=d("span"),P.innerHTML='<span class="inside"></span>',k=f(),C=d("span"),C.textContent="M90(2)",A=f(),E=d("div"),I=f(),T=d("div"),q=d("span"),q.textContent="Refresh",F=f(),B=d("span"),B.textContent="Download",j=f(),z&&z.c(),O=f(),D=d("div"),G=d("div"),G.textContent="Color Palette",Y=f(),U=d("div");for(let t=0;t<H.length;t+=1)H[t].c();var s,c,h;m(n,"class","control-section-title svelte-14sbs4o"),m(l,"type","radio"),l.__value="m90p1",l.value=l.__value,t[10][0].push(l),m(_,"class","outside"),m(y,"class","radio-name"),m(a,"class","svelte-14sbs4o"),m(w,"type","radio"),w.__value="m90p2",w.value=w.__value,t[10][0].push(w),m(P,"class","outside"),m(C,"class","radio-name"),m($,"class","svelte-14sbs4o"),s="clear",c="both",E.style.setProperty(s,c,h?"important":""),m(o,"class","control-section-sub svelte-14sbs4o"),m(q,"class","button svelte-14sbs4o"),m(B,"class","button svelte-14sbs4o"),m(T,"class","control-section-sub svelte-14sbs4o"),m(e,"class","control-section svelte-14sbs4o"),m(G,"class","control-section-title svelte-14sbs4o"),m(U,"class","control-section-sub svelte-14sbs4o"),m(D,"class","control-section svelte-14sbs4o")},m(s,u){h(s,e,u),c(e,n),c(e,i),c(e,o),c(o,r),c(r,a),c(a,l),l.checked=l.__value===t[0],c(a,p),c(a,_),c(a,x),c(a,y),c(o,v),c(o,b),c(b,$),c($,w),w.checked=w.__value===t[0],c($,M),c($,P),c($,k),c($,C),c(b,A),c(b,E),c(e,I),c(e,T),c(T,q),c(T,F),c(T,B),h(s,j,u),z&&z.m(s,u),h(s,O,u),h(s,D,u),c(D,G),c(D,Y),c(D,U);for(let t=0;t<H.length;t+=1)H[t].m(U,null);L||(N=[g(l,"change",t[9]),g(w,"change",t[11]),g(q,"mousedown",t[5]),g(B,"mousedown",t[6])],L=!0)},p(t,e){1&e&&(l.checked=l.__value===t[0]),1&e&&(w.checked=w.__value===t[0]),"m90p2"===t[0]?z?z.p(t,e):(z=ct(t),z.c(),z.m(O.parentNode,O)):z&&(z.d(1),z=null),18&e&&(W=[...t[4]],H=function(t,e,n,s,i,o,r,a,l,c,h,u){let d=t.length,p=o.length,f=d;const g={};for(;f--;)g[t[f].key]=f;const m=[],_=new Map,x=new Map;for(f=p;f--;){const t=u(i,o,f),a=n(t);let l=r.get(a);l?s&&l.p(t,e):(l=c(a,t),l.c()),_.set(a,m[f]=l),a in g&&x.set(a,Math.abs(f-g[a]))}const y=new Set,v=new Set;function b(t){S(t,1),t.m(a,h),r.set(t.key,t),h=t.first,p--}for(;d&&p;){const e=m[p-1],n=t[d-1],s=e.key,i=n.key;e===n?(h=e.first,d--,p--):_.has(i)?!r.has(s)||y.has(s)?b(e):v.has(i)?d--:x.get(s)>x.get(i)?(v.add(s),b(e)):(y.add(i),d--):(l(n,r),d--)}for(;d--;){const e=t[d];_.has(e.key)||l(e,r)}for(;p;)b(m[p-1]);return m}(H,e,J,1,t,W,R,U,X,ht,null,lt))},d(n){n&&u(e),t[10][0].splice(t[10][0].indexOf(l),1),t[10][0].splice(t[10][0].indexOf(w),1),n&&u(j),z&&z.d(n),n&&u(O),n&&u(D);for(let t=0;t<H.length;t+=1)H[t].d();L=!1,s(N)}}}function dt(t){let e,n,s,i;return s=new K({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){e=d("div"),n=d("div"),U(s.$$.fragment),m(n,"class","control-columns svelte-14sbs4o"),m(e,"class","control-panel svelte-14sbs4o")},m(t,o){h(t,e,o),c(e,n),L(s,n,null),i=!0},p(t,[e]){const n={};1048591&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){i||(S(s.$$.fragment,t),i=!0)},o(t){D(s.$$.fragment,t),i=!1},d(t){t&&u(e),N(s)}}}function pt(t,e,n){let{camoPattern:s="m90p2"}=e,{colorPalette:i="green"}=e,o=[...rt.getDefaultPalettes()];(new Map).set("green","foo");let r=100,a=2;w((()=>{console.log(o),console.log([...o])}));return t.$$set=t=>{"camoPattern"in t&&n(0,s=t.camoPattern),"colorPalette"in t&&n(1,i=t.colorPalette)},t.$$.update=()=>{12&t.$$.dirty&&(Z.set(r),tt.set(a))},[s,i,r,a,o,function(){et.update((t=>(t+1)%2))},function(){nt.update((t=>(t+1)%2))},function(){it.update((t=>!t))},function(){st.update((t=>!t))},function(){s=this.__value,n(0,s)},[[],[]],function(){s=this.__value,n(0,s)},function(){r=_(this.value),n(2,r)},function(){a=_(this.value),n(3,a)},function(){i=this.__value,n(1,i)}]}class ft extends z{constructor(t){super(),R(this,t,pt,dt,o,{camoPattern:0,colorPalette:1})}}class gt{constructor(t){this.ctx=t}drawCircle(t){this.ctx.fillStyle=t.color,this.ctx.beginPath(),this.ctx.arc(t.center.x,t.center.y,t.radius,0,2*Math.PI,!0),this.ctx.closePath(),this.ctx.fill()}drawPolygon(t,e,n){e?(this.ctx.fillStyle=e,this.ctx.strokeStyle=n||e):(this.ctx.fillStyle=t.color,this.ctx.strokeStyle=t.strokeColor||t.color),this.ctx.beginPath(),t.points.forEach(((t,e)=>{0===e?this.ctx.moveTo(...t.coord):this.ctx.lineTo(...t.coord)})),this.ctx.closePath(),this.ctx.stroke(),this.ctx.fill()}}class mt{constructor(t,e,n=null){this._x=t,this._y=e,this._index=n}get coord(){return[this._x,this._y]}get x(){return this._x}set x(t){this._x=t}get y(){return this._y}set y(t){this._y=t}get key(){return`${this.x},${this.y}`}get hasIndex(){return!!this._index}get keyIndex(){return this._index}dist(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y}div(t){return this.x/=t,this.y/=t,this}static of(t,e){let n=`${t},${e}`;return void 0===this._cache[n]&&(this._cache[n]=new mt(t,e)),this._cache[n]}static randomOf(t=0,e=0,n,s){return mt.of(t+Math.random()*n,e+Math.random()*s)}static randomPointsOf(t,e,n,s){let i=[];for(let t=0;t<s;t++)i.push(2*Math.PI*Math.random());return i.sort(),i.map((s=>mt.of(t+n*Math.cos(s),e+n*Math.sin(s))))}static randomPoints2Of(t,e,n,s){let i=[],o=2*Math.PI*Math.random();for(let t=0;t<s;t++){let e=1.5*Math.random()-.75,n=2*Math.PI/s*t+e;i.push(n+o)}return i.sort(),i.map((s=>mt.of(t+n*Math.cos(s),e+n*Math.sin(s))))}}mt._cache={};class _t{constructor(t,e,n){this._points=t,this._color=e,this._strokeColor=n,this._center=this._points.reduce(((t,e,n,s)=>new mt(t.x+e.x,t.y+e.y))).div(this._points.length),this._points.sort(this.comparePoints.bind(this)),this.setMinMax()}get points(){return this._points}get color(){return this._color}set color(t){this._color=t}get strokeColor(){return this._strokeColor}set strokeColor(t){this._strokeColor=t}get key(){return this.points.map((t=>t.key)).join("/")}get keyIndex(){return this.points.map((t=>t.keyIndex.toString())).join("/")}equals(t){if(this.points.length!=t.points.length)return!1;for(let e=0;e<this.points.length;e++)if(!this.points[e].equals(t.points[e]))return!1;return!0}isContaining(t){let e=!1;if(t.x<this.minX||t.x>this.maxX||t.y<this.minY||t.y>this.maxY)return!1;for(let n=0,s=this.points.length-1;n<this.points.length;s=n++)this.points[n].y>t.y!=this.points[s].y>t.y&&t.x<(this.points[s].x-this.points[n].x)*(t.y-this.points[n].y)/(this.points[s].y-this.points[n].y)+this.points[n].x&&(e=!e);return e}setMinMax(){this.minX=this.points[0].x,this.maxX=this.points[0].x,this.minY=this.points[0].y,this.maxY=this.points[0].y;for(let t=1;t<this.points.length;t++){let e=this.points[t];this.minX=Math.min(e.x,this.minX),this.maxX=Math.max(e.x,this.maxX),this.minY=Math.min(e.y,this.minY),this.maxY=Math.max(e.y,this.maxY)}}comparePoints(t,e){if(t.equals(e))return 0;return(()=>{if(t.x-this._center.x>=0&&e.x-this._center.x<0)return!0;if(t.x-this._center.x<0&&e.x-this._center.x>=0)return!1;if(t.x-this._center.x==0&&e.x-this._center.x==0)return t.y-this._center.y>=0||e.y-this._center.y>=0?t.y>e.y:e.y>t.y;let n=(t.x-this._center.x)*(e.y-this._center.y)-(e.x-this._center.x)*(t.y-this._center.y);return n<0||!(n>0)&&(t.x-this._center.x)*(t.x-this._center.x)+(t.y-this._center.y)*(t.y-this._center.y)>(e.x-this._center.x)*(e.x-this._center.x)+(e.y-this._center.y)*(e.y-this._center.y)})()?1:-1}}class xt extends gt{startAnimate(){}stopAnimate(){}handleMouseMove(t){}draw(t,e,n){const s=500;let i=Math.ceil(t/s),o=Math.ceil(e/s);for(let t=0;t<i;t++)for(let e=0;e<o;e++){let i=s*t,o=s*e,r=n.next(),a=4,l=Math.random();if(l>.66?a=5:l>.33&&(a=6),Math.random()>.8)continue;let c=new _t(mt.randomPoints2Of(i,o,s,a),r.value);this.drawPolygon(c)}const r=200;i=Math.ceil(t/r),o=Math.ceil(e/r);for(let t=0;t<i;t++)for(let e=0;e<o;e++){let s=r*t,i=r*e,o=n.next(),a=4,l=Math.random();if(l>.66?a=5:l>.33&&(a=6),Math.random()>.8)continue;let c=new _t(mt.randomPoints2Of(s,i,r,a),o.value);this.drawPolygon(c)}}}class yt{constructor(t,e,n){this._center=t,this._radius=e,this._color=n}get center(){return this._center}get radius(){return this._radius}get color(){return this._color}isContaining(t){return this.center.dist(t)<this.radius}}class vt{}vt.range=(t,e)=>Array.from({length:e-t+1},((e,n)=>n+t));class bt{constructor(t,e){t.hasIndex&&e.hasIndex?t.keyIndex<e.keyIndex?(this._start=t,this._end=e):(this._start=e,this._end=t):t.x<=e.x?(this._start=t,this._end=e):(this._start=e,this._end=t)}get start(){return this._start}get end(){return this._end}get key(){return`${this.start.key}/${this.end.key}`}get keyIndex(){return`${this.start.keyIndex}-${this.end.keyIndex}`}equals(t){return this._start.equals(t._start)&&this._end.equals(t._end)||this._start.equals(t._end)&&this._end.equals(t._start)}}class $t extends _t{constructor(t,e){if(3!=t.length)throw Error("Triangle must have 3 points");super(t,e)}get area(){return this._area||(this._area=Math.abs(.5*(this.points[0].x*(this.points[1].y-this.points[2].y)+this.points[1].x*(this.points[2].y-this.points[0].y)+this.points[2].x*(this.points[0].y-this.points[1].y)))),this._area}get edges(){return this._edges||(this._edges=[],this._edges.push(new bt(this.points[0],this.points[1])),this._edges.push(new bt(this.points[1],this.points[2])),this._edges.push(new bt(this.points[2],this.points[0]))),this._edges}getCircumcircle(){if(!this._circumcircle){const t=this.points[0].x,e=this.points[0].y,n=this.points[1].x,s=this.points[1].y,i=this.points[2].x,o=this.points[2].y,r=Math.pow(t,2),a=Math.pow(n,2),l=Math.pow(i,2),c=Math.pow(e,2),h=Math.pow(s,2),u=Math.pow(o,2),d=2*((n-t)*(o-e)-(s-e)*(i-t)),p=((o-e)*(a-r+h-c)+(e-s)*(l-r+u-c))/d,f=((t-i)*(a-r+h-c)+(n-t)*(l-r+u-c))/d,g=Math.sqrt(Math.pow(t-p,2)+Math.pow(e-f,2));this._circumcircle=new yt(new mt(p,f),g,"white")}return this._circumcircle}}class wt{static incrementAndGet(){return void 0===this._index&&(this._index=0),this._index++}static reset(){this._index=0}}class Mt extends gt{constructor(t){super(t),this.activeTriangle=new Array(2)}draw(t,e,n,s){this.points=[];const i=Math.ceil(t/500),o=Math.ceil(e/500);wt.reset();for(let n=0;n<i+1;n++)for(let s=0;s<o+1;s++)this.points.push(new mt(t/i*n,e/o*s,wt.incrementAndGet()));let r=s.num_points-1;vt.range(0,r).forEach(((n,s)=>{this.points.push(new mt(Math.random()*t,Math.random()*e,wt.incrementAndGet()))}));const a=Math.sqrt(t*t+e*e)/2,l=new mt(t/2,e/2);this.drawCircle(new yt(l,a,"rgba(1, 1, 1, 0)"));const c=new mt(l.x-Math.sqrt(3)*a,l.y-a,wt.incrementAndGet()),h=new mt(l.x+Math.sqrt(3)*a,l.y-a,wt.incrementAndGet()),u=new mt(l.x,l.y+2*a,wt.incrementAndGet()),d=new $t([c,h,u],"pink");n.next();let p=[d];this.points.forEach(((t,e)=>{let s=[];p.forEach(((e,n)=>{e.getCircumcircle().isContaining(t)&&(s=s.concat(e.edges),delete p[n])})),s.map(((t,e)=>{for(let n=0;n<s.length;n++)if(e!=n&&t.equals(s[n]))return null;return t})).filter((t=>t)).forEach((e=>{p.push(new $t([e.start,e.end,t],n.next().value))}))})),this.triangles=p.filter((t=>t)),this.triangleAreas=this.triangles.map((t=>t.area)).sort(((t,e)=>t-e)),this.triangleAreaMedian=this.triangleAreas[Math.floor(this.triangleAreas.length/2)],this.buildEdgeMap(),this.visitMap={};for(let t=0;t<this.triangles.length;t++){const e=this.triangles[t];this.visitMap[e.keyIndex]||this.makeCamouflage(e,n.next().value,s.camo_depth)}}makeCamouflage(t,e,n,s=null){if(s=s||n,t.color=e,this.visitMap[t.keyIndex]=e,0==n)return void this.drawPolygon(t,e);let i=n===s,o=[];t.edges.forEach(((r,a)=>{const l=this.edgeMap[r.keyIndex].filter((e=>!e.equals(t)))[0];l&&o.push(l),l&&!this.visitMap[l.keyIndex]&&(i=!1,(l.area<5e3||Math.random()<n/s)&&this.makeCamouflage(l,e,n-1,s))})),i?0==o.length?console.error("Failed to find adjacentTriangle"):(t.color=this.visitMap[o[0].keyIndex],this.drawPolygon(t,t.color,t.color)):this.drawPolygon(t,e)}startAnimate(){this.interval=setInterval(this.animate.bind(this),50)}stopAnimate(){clearInterval(this.interval)}animate(){this.points.forEach(((t,e)=>{this.points[e].x+=4*(Math.random()-.5),this.points[e].y+=4*(Math.random()-.5)})),this.triangles.forEach((t=>{this.isActiveTriangle(t)?this.drawPolygon(t,"red"):this.adjacentPolygons&&this.adjacentPolygons[t.keyIndex]?this.drawPolygon(t,"blue"):this.drawPolygon(t)}))}handleMouseMove(t){this.triangles.forEach((e=>{e.isContaining(t)?(this.updateActiveTriangle(e),this.drawPolygon(e,"red")):this.drawPolygon(e)})),Object.keys(this.adjacentPolygons).forEach((t=>{this.drawPolygon(this.adjacentPolygons[t],"blue")}))}buildEdgeMap(){this.edgeMap={},this.triangles.forEach((t=>{t.edges.forEach((e=>{void 0===this.edgeMap[e.keyIndex]&&(this.edgeMap[e.keyIndex]=[]),this.edgeMap[e.keyIndex].push(t)})),this.drawPolygon(t)}))}updateActiveTriangle(t){if(!this.isActiveTriangle(t)){this.activeTriangle[1]=this.activeTriangle[0],this.activeTriangle[0]=t,this.adjacentPolygons={};for(let e=0;e<t.edges.length;e++){const n=this.edgeMap[t.edges[e].keyIndex];n&&n.length>1&&n.forEach((e=>{e.equals(t)||(this.adjacentPolygons[e.keyIndex]=e)}))}}}isActiveTriangle(t){return this.activeTriangle[0]&&this.activeTriangle[0].equals(t)}}function Pt(e){let n,i,o,r;return{c(){n=d("div"),i=d("canvas"),m(n,"class","canvas-wrapper svelte-pol47w")},m(t,s){h(t,n,s),c(n,i),e[5](i),o||(r=[g(window,"resize",e[1]),g(i,"mousemove",e[2])],o=!0)},p:t,i:t,o:t,d(t){t&&u(n),e[5](null),o=!1,s(r)}}}function kt(t,e,n){let s,i;r(t,Z,(t=>n(10,s=t))),r(t,tt,(t=>n(11,i=t)));let o,a,l,c,{pattern:h="m90p2"}=e,{color:u}=e,d=!1;w((()=>{c=o.getContext("2d"),a=new xt(c),l=new Mt(c),_()}));const p=et.subscribe(_),f=st.subscribe((t=>d=t)),g=it.subscribe((t=>{l&&(t?l.startAnimate():l.stopAnimate())}));var m;function _(){if(!c)return;let t=document.documentElement.clientWidth,e=document.documentElement.clientHeight;!function(t,e){o.setAttribute("width",t.toString()),o.setAttribute("height",e.toString()),c.fillStyle=rt.getBaseColorFromPalette(u),c.fillRect(0,0,t,e)}(t,e),function(t,e){let n=rt.colorGeneratorFromPalette(u);if("m90p1"===h)a.draw(t,e,n);else{if("m90p2"!==h)throw Error(`Unsupported pattern type: ${h}`);{const o={num_points:s,camo_depth:i};l.draw(t,e,n,o)}}}(t,e)}return nt.subscribe((function(){if(!o)return;let t=document.createElement("a");document.body.appendChild(t),t.setAttribute("download","camo-pattern.png"),t.setAttribute("href",o.toDataURL("image/png").replace("image/png","image/octet-stream")),t.click(),document.body.removeChild(t)})),m=_,$().$$.before_update.push(m),function(t){$().$$.on_destroy.push(t)}((()=>{p(),f(),g(),g()})),t.$$set=t=>{"pattern"in t&&n(3,h=t.pattern),"color"in t&&n(4,u=t.color)},[o,_,function(t){d&&"m90p2"===h&&l.handleMouseMove(new mt(t.clientX,t.clientY))},h,u,function(t){P[t?"unshift":"push"]((()=>{o=t,n(0,o)}))}]}class Ct extends z{constructor(t){super(),R(this,t,kt,Pt,o,{pattern:3,color:4})}}function At(t){let e,n,s,i,o,r,a;function l(e){t[3](e)}function p(e){t[4](e)}let g={};return void 0!==t[0]&&(g.camoPattern=t[0]),void 0!==t[1]&&(g.colorPalette=t[1]),n=new ft({props:g}),P.push((()=>Y(n,"camoPattern",l))),P.push((()=>Y(n,"colorPalette",p))),r=new Ct({props:{pattern:t[0],color:t[1]}}),{c(){e=d("main"),U(n.$$.fragment),o=f(),U(r.$$.fragment),m(e,"class","svelte-g2cdjv")},m(t,s){h(t,e,s),L(n,e,null),c(e,o),L(r,e,null),a=!0},p(t,[e]){const o={};!s&&1&e&&(s=!0,o.camoPattern=t[0],T((()=>s=!1))),!i&&2&e&&(i=!0,o.colorPalette=t[1],T((()=>i=!1))),n.$set(o);const a={};1&e&&(a.pattern=t[0]),2&e&&(a.color=t[1]),r.$set(a)},i(t){a||(S(n.$$.fragment,t),S(r.$$.fragment,t),a=!0)},o(t){D(n.$$.fragment,t),D(r.$$.fragment,t),a=!1},d(t){t&&u(e),N(n),N(r)}}}function Et(t,e,n){let s,{name:i}=e,o="green";return t.$$set=t=>{"name"in t&&n(2,i=t.name)},[s,o,i,function(t){s=t,n(0,s)},function(t){o=t,n(1,o)}]}return new class extends z{constructor(t){super(),R(this,t,Et,At,o,{name:2})}}({target:document.body,props:{name:"world"}})}();