import{B as P,q as j,i as z,z as w,G as D,H as ie,I as S,o as B,w as $,U as N,J as H,K as ce,L as K,M as ae,d as v,N as fe,O as ue,r as g,b as R,P as de,j as C,Q as _e,R as me,S as he,a as pe,T as ge,p as ye,V as be,W as ve,X as xe,Y as ke,Z as we,_ as Ne,$ as Se,a0 as U,v as W,a1 as Ce}from"./runtime.DkaAAcCG.js";const y=Symbol("$state"),Te=Object.prototype,Ee=Array.prototype,ze=Object.getPrototypeOf,Oe=Object.isFrozen;function E(e,t=!0){if(typeof e=="object"&&e!=null&&!Oe(e)){if(y in e)return e[y].p;const s=ze(e);if(s===Te||s===Ee){const n=new Proxy(e,Ae);return P(e,y,{value:$e(e,n,t),writable:!1}),n}}return e}function $e(e,t,s){return{s:new Map,v:j(0),a:z(e),i:s,p:t}}const Ae={defineProperty(e,t,s){if(s.value){const n=e[y],l=n.s.get(t);l!==void 0&&w(l,E(s.value,n.i))}return Reflect.defineProperty(e,t,s)},deleteProperty(e,t){const s=e[y],n=s.s.get(t),l=s.a,o=delete e[t];if(l&&o){const r=s.s.get("length"),a=e.length-1;r!==void 0&&r.v!==a&&w(r,a)}return n!==void 0&&w(n,N),t in e&&D(s.v),o},get(e,t,s){const n=e[y];let l=n.s.get(t);if(l===void 0&&(H()||ie)&&(!(t in e)||S(e,t)?.writable)&&(l=(n.i?j:B)(E(e[t],n.i)),n.s.set(t,l)),l!==void 0){const o=$(l);return o===N?void 0:o}return Reflect.get(e,t,s)},getOwnPropertyDescriptor(e,t){const s=Reflect.getOwnPropertyDescriptor(e,t);if(s&&"value"in s){const l=e[y].s.get(t);l&&(s.value=$(l))}return s},has(e,t){if(t===y)return!0;const s=e[y],n=Reflect.has(e,t);let l=s.s.get(t);return(l!==void 0||H()&&(!n||S(e,t)?.writable))&&(l===void 0&&(l=(s.i?j:B)(n?E(e[t],s.i):N),s.s.set(t,l)),$(l)===N)?!1:n},set(e,t,s){const n=e[y],l=n.s.get(t);l!==void 0&&w(l,E(s,n.i));const o=n.a,r=!(t in e);if(o&&t==="length")for(let a=s;a<e.length;a+=1){const _=n.s.get(a+"");_!==void 0&&w(_,N)}if(r&&D(n.v),e[t]=s,o&&r){const a=n.s.get("length"),_=e.length;a!==void 0&&a.v!==_&&w(a,_)}return!0},ownKeys(e){const t=e[y];return $(t.v),Reflect.ownKeys(e)}};let d=null;function b(e){d=e}function I(e){const t=[];let s=e,n=null;for(;s!==null;){const l=s.nodeType,o=s.nextSibling;if(l===8){const r=s.data;if(r.startsWith("ssr:")){const a=r.slice(4);if(n===null)n=a;else{if(a===n)return t;t.push(s)}s=o;continue}}n!==null&&t.push(s),s=o}return null}function O(e,t){let s=e;if(d!==null)if(t&&(s=s.firstChild),s.nodeType===8){let n=s.$$fragment;n===void 0?n=I(s):ce(()=>{s.$$fragment=void 0}),b(n)}else{const n=s.firstChild;b(n===null?[]:[n])}}var x,A,Y,L,Z,J,M,Q,X,ee,Le;function Pe(){x===void 0&&(x=Node.prototype,A=Element.prototype,Y=Text.prototype,L=Map.prototype,Z=x.appendChild,J=x.cloneNode,L.set,L.get,L.delete,Le=document,A.__click=void 0,Y.__nodeValue=" ",A.__className="",M=S(x,"firstChild").get,Q=S(x,"nextSibling").get,X=S(x,"textContent").set,ee=S(A,"className").set)}function F(e,t){Z.call(e,t)}function Re(e,t){return J.call(e,t)}function Ie(e){const t=M.call(e);if(d!==null)if(t===null){const s=document.createTextNode("");return e.appendChild(s),s}else return q(t);return t}function Ze(e){if(d!==null){const t=e[0];return d!==null&&t!==null?q(t):t}return M.call(e)}function Je(e){const t=Q.call(e);return d!==null&&t!==null?q(t):t}function je(e,t){ee.call(e,t)}function Qe(e){X.call(e,"")}function q(e){if(e.nodeType===8&&e.data.startsWith("ssr:")&&d.at(-1)!==e){const t=I(e),n=(t.at(-1)||e).nextSibling;return n.$$fragment=t,n}return e}function Ve(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function Me(e,t,s){if(z(e)){for(var n=0,l;n<e.length;n++)l=e[n],s===null?F(t,l):s.before(l);return e[0]}else e!==null&&(s===null?F(t,e):s.before(e));return e}function h(e){var t=e;if(z(e))for(var s=0,n;s<e.length;s++)n=e[s],s===0&&(t=n),n.isConnected&&n.remove();else e.isConnected&&e.remove();return t}function T(e,t,s){const n=[];for(const l of e){const o=l.r,r=l.e;t==="in"?(o==="in"||o==="both"?l.in():l.c(),l.d.inert=!1,K(r,r,!1)):t==="key"?o==="key"&&(l.p=l.i(s),l.in()):((o==="out"||o==="both")&&(l.p=l.i(),n.push(l.o)),l.d.inert=!0,K(r,r,!0))}if(n.length>0){const l=ae(()=>{v(l);const o=fe(()=>{v(o),ue(n)})},!1)}}const te=new Set,V=new Set;function ne(){return document.createTextNode("")}function se(e,t){let s;return()=>{if(s===void 0){const n=Ve(e);s=t?n:Ie(n)}return s}}function le(e,t,s,n){if(d!==null){s!==null&&O(s,!1);const l=d;if(l!==null)return e?l:l[0]}return t?Re(n(),!0):document.importNode(n(),!0)}function qe(e,t,s){return le(!1,t,e,s)}function De(e,t,s){return le(!0,t,e,s)}const Be=se(" ",!1),He=se("<!>",!0);function Xe(e){return qe(e,!0,Be)}function et(e){return De(e,!0,He)}function re(e,t,s){const n=ve,l=t?z(e)?e:Array.from(e.childNodes):e;s!==null&&d===null&&Me(l,null,s),n.d=l}function tt(e,t){re(t,!1,e)}function nt(e,t){re(t,!0,e)}function st(e,t){const s=e.__className,n=Ue(t),l=d!==null;l&&e.className===n?e.__className=n:(s!==n||l&&e.className!==n)&&(n===""?e.removeAttribute("class"):je(e,n),e.__className=n)}function lt(e,t){g(()=>Ke(e,t()))}function Ke(e,t){const s=e.__nodeValue,n=Ye(t);d!==null&&e.nodeValue===n?e.__nodeValue=n:s!==n&&(e.nodeValue=n,e.__nodeValue=n)}function Ue(e){return e??""}function We(e,t,s){s?e.classList.add(t):e.classList.remove(t)}function rt(e,t,s){g(()=>{const n=s();We(e,t,n)})}function ot(e,t,s){W(()=>{t(e),g(()=>()=>{g(()=>{W(()=>{(!Ce(s)||s.v===e)&&t(null)})})})})}function it(e){for(let t=0;t<e.length;t++)te.add(e[t]);for(const t of V)t(e)}function G(e,t){const s=t.type,n=t.composedPath?.()||[];let l=n[0]||t.target;t.target!==l&&P(t,"target",{configurable:!0,value:l});let o=0;const r=t.__root;if(r){const a=n.indexOf(r);if(a!==-1&&e===document)return;a<n.indexOf(e)&&(o=a)}for(l=n[o]||t.target,P(t,"currentTarget",{configurable:!0,get(){return l||document}});l!==null;){const a=l.parentNode||l.host||null,_="__"+s,c=l[_];if(c!==void 0&&!l.disabled)if(z(c)){const[i,...f]=c;i.apply(l,[t,...f])}else c.call(l,t);if(t.cancelBubble||a===e)break;l=a}t.__root=e}function ct(e,t,s,n){O(e),t===void 0?n!==null&&n(e):t(e,s)}function at(e,t,s,n){const l=de();O(e);const o=d;let r=null,a=null,_=!1,c=!1;const i=g(()=>{const p=!!t();if(l.v!==p||!_){if(l.v=p,_){const m=l.c,k=l.a;p?(k===null||k.size===0?C(u):T(k,"out"),m===null||m.size===0?C(f):T(m,"in")):(m===null||m.size===0?C(f):T(m,"out"),k===null||k.size===0?C(u):T(k,"in"))}else if(d!==null){const m=d?.[0]?.data;!m||m==="ssr:if:true"&&!p||m==="ssr:if:false"&&p?(h(d),b(null)):d.shift()}_=!0}},l,!1),f=g(()=>{r!==null&&(h(r),r=null),l.v&&(s(e),c||(b(o),c=!0)),r=l.d,l.d=null},l,!0);l.ce=f;const u=g(()=>{a!==null&&(h(a),a=null),l.v||(n!==null&&n(e),c||(b(o),c=!0)),a=l.d,l.d=null},l,!0);l.ae=u,R(i,()=>{r!==null&&h(r),a!==null&&h(a),v(f),v(u)}),l.e=i}function ft(e){const t=_e(),s=d!==null?I(document.head.firstChild):null,n=d;b(s);try{const l=g(()=>{const o=t.d;o!==null&&(h(o),t.d=null);let r=null;d===null&&(r=ne(),document.head.appendChild(r)),e(r)},t,!1);R(l,()=>{const o=t.d;o!==null&&h(o)}),t.e=l}finally{b(n)}}function ut(e,t,s){const n=xe();let l=null;O(e);let o=null;n.r=c=>{const i=l,f=i.s;f.add(c),c.f(()=>{f.delete(c),f.size===0&&i.e!==null&&(i.d!==null&&(h(i.d),i.d=null),v(i.e),i.e=null)})};const r=()=>{const c={d:null,e:null,s:new Set,p:l},i=g(()=>{const f=n.d;f!==null&&(h(f),n.d=null),o&&s(o),c.d=n.d,n.d=null},n,!0);c.e=i,l=c},a=()=>{const c=l;if(c===null){r();return}const i=c.s;i.size===0?(c.d!==null&&(h(c.d),c.d=null),c.e?C(c.e):r()):(r(),T(i,"out"))},_=g(()=>{const c=t();o!==c&&(o=c,a())},n,!1);R(_,()=>{let c=l;for(;c!==null;){const i=c.d;i!==null&&h(i);const f=c.e;f!==null&&v(f),c=c.p}}),n.e=_}function dt(e,t,s){const n=ke();let l=null;O(e);let o=N,r=!1;n.r=i=>{const f=l,u=f.s;u.add(i),i.f(()=>{u.delete(i),u.size===0&&f.e!==null&&(f.d!==null&&(h(f.d),f.d=null),v(f.e),f.e=null)})};const a=()=>{const i={d:null,e:null,s:new Set,p:l},f=g(()=>{s(e),i.d=n.d,n.d=null},n,!0,!0);i.e=f,l=i},_=()=>{const i=l;if(i===null){a();return}const f=i.s;f.size===0?(i.d!==null&&(h(i.d),i.d=null),i.e?C(i.e):a()):(T(f,"out"),a())},c=g(()=>{const i=o;o=t(),r&&we(i,o)&&_()},n,!1);_(),r=!0,R(c,()=>{let i=l;for(;i!==null;){const f=i.d;f!==null&&h(f);const u=i.e;u!==null&&v(u),i=i.p}}),n.e=c}function Ye(e){return typeof e=="string"?e:e==null?"":e+""}function _t(e,t,s){s=s==null?null:s+"",(d===null||e.getAttribute(t)!==s&&t!=="src"&&t!=="href"&&t!=="srcset")&&(s===null?e.removeAttribute(t):e.setAttribute(t,s))}function mt(e,t){const s=E(t.props||{},!1);let[n,l]=oe(e,{...t,props:s});const o={$set:r=>{Ne(s,r)},$destroy:l};for(const r of me(n||{}))P(o,r,{get(){return n[r]},set(a){Se(()=>n[r]=a)},enumerable:!0});return o}function oe(e,t){Pe();const s=new Set,n=t.target,l=he(t.intro||!1),o=n.firstChild,r=I(o),a=d;let _;try{let u=null;r===null&&(u=ne(),n.appendChild(u)),b(r);const p=g(()=>{t.context&&(pe({}),ge.c=t.context),_=e(u,t.props||{},t.events||{}),t.context&&ye()},l,!0);l.e=p}catch(u){if(t.recover!==!1&&r!==null)return console.error("ERR_SVELTE_HYDRATION_MISMATCH",u),h(r),o.remove(),r.at(-1)?.nextSibling?.remove(),oe(e,t);throw u}finally{b(a)}const c=G.bind(null,n),i=G.bind(null,document),f=u=>{for(let p=0;p<u.length;p++){const m=u[p];s.has(m)||(s.add(m),n.addEventListener(m,c,U.includes(m)?{passive:!0}:void 0),document.addEventListener(m,i,U.includes(m)?{passive:!0}:void 0))}};return f(be(te)),V.add(f),[_,()=>{for(const p of s)n.removeEventListener(p,c);V.delete(f);const u=l.d;u!==null&&h(u),r!==null&&h(r),v(l.e)}]}const Fe="5";typeof window<"u"&&(window.__svelte||={v:new Set}).v.add(Fe);export{Le as $,mt as A,ut as B,lt as C,Xe as D,E,ot as F,rt as G,We as H,ct as I,y as S,Ie as a,Ze as b,nt as c,se as d,T as e,Qe as f,d as g,O as h,I as i,b as j,Me as k,ne as l,ft as m,at as n,De as o,tt as p,qe as q,h as r,Je as s,Ke as t,et as u,it as v,st as w,Ye as x,dt as y,_t as z};