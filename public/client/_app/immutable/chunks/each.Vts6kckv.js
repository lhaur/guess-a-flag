import{r as x,i as q,E as R,d as B,e as C,l as H,f as w,h as M,j as V,k as A,n as Y,o as K,q as b,t as U,v as X,m as k,w as L}from"./runtime.zQU0RrEG.js";import{j as F,k as y,l as j,S as D,m as G,n as N,q as J,u as P,v as I,w as Q}from"./disclose-version.Lxp0NizN.js";function W(){}function Z(e,r,i,s,n,_,d){const g=(i&A)!==0,l=Y(i,e);let h=null;F(e,g);let v,E=null,m=null;l.r=t=>{const o=h,c=o.s;c.add(t),t.f(()=>{c.delete(t),c.size===0&&o.e!==null&&(o.d!==null&&(y(o.d),o.d=null),C(o.e),o.e=null)})};const a=()=>{const t={d:null,e:null,s:new Set,p:h},o=x(()=>{const c=l.d;c!==null&&(y(c),l.d=null);let f=l.a;(l.f&A)!==0&&(f=Q(),l.a.appendChild(f)),_(f),t.d=l.d,l.d=null},l,!0);t.e=o,h=t},p=t=>{const o=t.f,c=(o&A)!==0,f=t.a;d(v,t,f,c,n,o,!0,E)},u=x(()=>{const t=r();v=q(t)?t:t==null?[]:Array.from(t),s!==null?E=v.map(s):i&R||v.map(W);const o=v.length;if(_!==null){if(o===0){if(l.v.length!==0||m===null){p(l),a();return}}else if(l.v.length===0&&h!==null){const c=h,f=c.s;f.size===0?c.d!==null&&(y(c.d),c.d=null):j(f,"out")}}m!==null&&K(m)},l,!1);m=x(p,l,!0),B(u,()=>{const t=l.f,o=l.a,c=(t&A)!==0;let f=h;for(;f!==null;){const S=f.d;S!==null&&y(S);const z=f.e;z!==null&&C(z),f=f.p}d([],l,o,c,n,t,!1,E),C(m)}),l.e=u}function ae(e,r,i,s,n){Z(e,r,i,null,s,n,$)}function $(e,r,i,s,n,_,d){var g=D in e&&e[D].i,l=r.v,h=r.s;g&&(_&=~w);var v=l.length,E=e.length,m=Math.max(v,E),a=0,p,u;if(h.length!==0&&ne(h),E===0)for(p=[],s&&v!==0&&G(i);a<m;)u=l[a++],T(u,h,d,s);else{var t;if(p=Array(E),N!==null)for(var o=N[0];a<m;a++){t=g?H(e,a):e[a];var c=J(o);P(c),o=c.at(-1).nextSibling.nextSibling,u=O(t,null,a,n,_),p[a]=u}else for(;a<m;a++)a>=v?(t=g?H(e,a):e[a],u=O(t,null,a,n,_),p[a]=u,ee(u,i,s,null)):a>=E?(u=l[a],T(u,h,d)):(t=e[a],u=l[a],p[a]=u,le(u,t,a,_))}r.v=p}function ee(e,r,i,s){var n=e.d;return s===null?i?I(n,r,null):I(n,r.parentNode,r):I(n,null,s)}function ne(e){var r=e.length;if(r>0){for(var i=0,s,n;i<r;i++)s=e[i],n=s.r,n!==null&&(s.r=null,T(s,null,!1));e.length=0}}function le(e,r,i,s){s&w?M(e.v,r):V(e.v)&&(e.v.o[e.v.p]=r);const n=e.s,_=(s&b)!==0,d=e.a;n!==null&&s&R&&d!==null&&d(e,n),_?M(e.i,i):e.i=i}function T(e,r,i,s=!1){const n=e.s;if(i&&n!==null){for(let d of n)d.r==="key"&&n.delete(d);if(n.size===0)e.s=null;else{j(n,"out"),r!==null&&r.push(e);return}}const _=e.d;!s&&_!==null&&y(_),C(e.e)}function O(e,r,i,s,n){const d=(n&w)===0?e:n&X?L(e):k(e),g=n&b?L(i):i,l=U(d,g,r),h=x(v=>{s(null,v.v,v.i)},l,!0);return l.e=h,l}export{ae as e};