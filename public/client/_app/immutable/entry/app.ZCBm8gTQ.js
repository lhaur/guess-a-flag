import{B,C as y,D as S,w as F,g as v,p as U,a as j,v as b,b as R,F as q}from"../chunks/runtime.psRWym4x.js";import{A as M,x as P,B as w,c as g,C as N,g as O,b as E,s as A,a as W,o as z,y as k,h as G,D as H,d as T,E as J,F as L}from"../chunks/disclose-version.BE1H4JuN.js";import{o as K}from"../chunks/main-client._B59Dg30.js";function Q(a){return class extends X{constructor(t){super({component:a,...t})}}}class X{#t={};#e;constructor(t){this.#e=M(t.component,{target:t.target,props:{...t.props,$$events:this.#t},context:t.context,intro:t.intro,recover:t.recover});for(const e of Object.keys(this.#e))e==="$set"||e==="$destroy"||B(this,e,{get(){return this.#e[e]},set(n){this.#e[e]=n},enumerable:!0})}$set(t){this.#e.$set(t)}$on(t,e){this.#t[t]=this.#t[t]||[];const n=(...i)=>e.call(this,...i);return this.#t[t].push(n),()=>{this.#t[t]=this.#t[t].filter(i=>i!==n)}}$destroy(){this.#e.$destroy()}}const Y="modulepreload",Z=function(a,t){return new URL(a,t).href},C={},d=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const l=document.getElementsByTagName("link");i=Promise.all(e.map(r=>{if(r=Z(r,n),r in C)return;C[r]=!0;const m=r.endsWith(".css"),h=m?'[rel="stylesheet"]':"";if(!!n)for(let s=l.length-1;s>=0;s--){const o=l[s];if(o.href===r&&(!m||o.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${h}`))return;const c=document.createElement("link");if(c.rel=m?"stylesheet":Y,m||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),m)return new Promise((s,o)=>{c.addEventListener("load",s),c.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${r}`)))})}))}return i.then(()=>t()).catch(l=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=l,window.dispatchEvent(r),!r.defaultPrevented)throw l})},at={};var $=T('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),tt=T("<!> <!>",!0);function et(a,t){j(t,!0);let e=y(t,"components",11,()=>[]),n=y(t,"data_0",3,null),i=y(t,"data_1",3,null);S(()=>t.stores.page.set(t.page)),F(()=>{t.stores,t.page,t.constructors,e(),t.form,n(),i(),t.stores.page.notify()});let l=b(!1),r=b(!1),m=b(null);K(()=>{const s=t.stores.page.subscribe(()=>{v(l)&&(R(r,!0),q().then(()=>{R(m,J(document.title||"untitled page"))}))});return R(l,!0),s});var h=z(a,!0,tt),p=E(h),c=A(A(p));P(p,()=>t.constructors[1],s=>{var o=k(s),_=E(o);w(_,()=>t.constructors[0],f=>{L(f(_,{get data(){return n()},children:(u,rt)=>{var x=k(u),D=E(x);w(D,()=>t.constructors[1],I=>{L(I(D,{get data(){return i()},get form(){return t.form}}),V=>e()[1]=V)}),g(u,x)}}),u=>e()[0]=u)}),g(s,o)},s=>{var o=k(s),_=E(o);w(_,()=>t.constructors[0],f=>{L(f(_,{get data(){return n()},get form(){return t.form}}),u=>e()[0]=u)}),g(s,o)}),P(c,()=>v(l),s=>{var o=G(s,!0,$),_=W(o);P(_,()=>v(r),f=>{var u=H(f);N(u,()=>v(m)),O(f,u)},null),O(s,o)},null),g(a,h),U()}const it=Q(et),lt=[()=>d(()=>import("../nodes/0.qY3y3FSO.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url),()=>d(()=>import("../nodes/1.zxXXgwCM.js"),__vite__mapDeps([12,2,3,10,5,6,7]),import.meta.url),()=>d(()=>import("../nodes/2.zc7BDSoQ.js"),__vite__mapDeps([13,2,3,8,6,14,9,4,15]),import.meta.url),()=>d(()=>import("../nodes/3.DN0GTBhs.js"),__vite__mapDeps([16,2,3,1,5,6,7,9]),import.meta.url),()=>d(()=>import("../nodes/4.Q8KlOs1A.js"),__vite__mapDeps([17,2,3,5,6,7,1,9]),import.meta.url),()=>d(()=>import("../nodes/5.XDgEz9Uj.js"),__vite__mapDeps([18,7,9,6,2,3,1]),import.meta.url),()=>d(()=>import("../nodes/6.HPWoQ4MB.js"),__vite__mapDeps([19,2,3,14,4,8,6]),import.meta.url)],ct=[],ut={"/":[2],"/auth/login":[3],"/auth/register":[4],"/profile":[5],"/scores":[6]},mt={handleError:({error:a})=>{console.error(a)}};export{ut as dictionary,mt as hooks,at as matchers,lt as nodes,it as root,ct as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.qY3y3FSO.js","../chunks/firebase.app._ydC3NI3.js","../chunks/disclose-version.BE1H4JuN.js","../chunks/runtime.psRWym4x.js","../chunks/main-client._B59Dg30.js","../chunks/entry.47W80qTr.js","../chunks/index.K1lkvplB.js","../chunks/control.pJ1mnnAb.js","../chunks/store.xwJxxw6r.js","../chunks/session.Tg9dBN4O.js","../chunks/stores.fDnZpSC4.js","../assets/0.lT__kFeb.css","../nodes/1.zxXXgwCM.js","../nodes/2.zc7BDSoQ.js","../chunks/each.qvh00t1l.js","../assets/2.5gks_xXy.css","../nodes/3.DN0GTBhs.js","../nodes/4.Q8KlOs1A.js","../nodes/5.XDgEz9Uj.js","../nodes/6.HPWoQ4MB.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}