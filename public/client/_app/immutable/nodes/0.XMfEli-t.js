import{o as se,a as C,b as te}from"../chunks/firebase.app._ydC3NI3.js";import{G as F,g as w,a,K as re,t as b,h as k,d as g,x as I,s as e,c as m,z as oe,b as p,o as h,L as ne}from"../chunks/disclose-version.BE1H4JuN.js";import{u as A,r as G,p as L,a as N,s as x,z as ie}from"../chunks/runtime.psRWym4x.js";import{o as le}from"../chunks/main-client._B59Dg30.js";import{g as R}from"../chunks/entry.zkbuEY8e.js";import{s as ue}from"../chunks/store.SAyfdFr1.js";import{s as y}from"../chunks/session.Tg9dBN4O.js";import{p as ve}from"../chunks/stores.RIF2eOSV.js";const de=async({url:o})=>({getAuthUser:()=>new Promise(s=>{se(C,t=>s(t||!1))}),url:o.pathname}),Oe=Object.freeze(Object.defineProperty({__proto__:null,load:de},Symbol.toStringTag,{value:"Module"}));var ce=(o,r,s)=>r(s.href),ge=g('<li><button class="svelte-1uysugx"> </button></li>');function c(o,r){N(r,!1);const s={};A(s);const t=()=>x(ve,"$page",s);var v=k(o,!0,ge),n=a(v),d=a(n);G(()=>{re(n,"active",t().url.pathname==r.href),b(d,r.text)}),n.__click=[ce,R,r],w(o,v),L()}F(["click"]);const fe=async(o,r,s,t,v,n)=>{await r(s).then(()=>{ie(t,void 0),n("/auth/login")}).catch(d=>console.log(d))};var _e=g("<li><button>Logout</button></li>");function B(o,r){N(r,!1);const s={};A(s);const t=()=>x(y,"$session",s);var v=k(o,!0,_e),n=a(v);n.__click=[fe,te,C,y,t,R],w(o,v),L()}F(["click"]);var me=g("<!> <!>",!0),pe=g("<!> <!>",!0),he=g("<!> <!>",!0),be=g("<!> <!>",!0),xe=g('<header class="shadow px-4 bg-base-100"><div class="navbar"><div class="navbar-start"><div class="dropdown"><div tabindex="0" role="button" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></div> <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"><!> <!> <li><span> </span> <ul class="p-2"><!></ul></li></ul></div> <a class="btn btn-ghost text-xl font-logoFont" href="/">Guess-A-Flag</a></div> <div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1"><!> <!> <li><details><summary> </summary> <ul class="p-2 z-[1]"><!></ul></details></li></ul></div> <div class="navbar-end"><span class="btn"> </span></div></div></header>');function ye(o,r){N(r,!1);const s={};A(s);const t=()=>x(y,"$session",s),v=()=>x(ue,"$score",s);var n=k(o,!0,xe),d=a(n),_=a(d),z=a(_),K=a(z),T=e(e(K)),S=a(T),U=e(e(S)),q=e(e(U)),M=a(q),D=a(M),E=e(e(M)),J=a(E),O=e(e(_)),Q=a(O),P=a(Q),j=e(e(P)),V=e(e(j)),W=a(V),H=a(W),X=a(H),Y=e(e(H)),Z=a(Y),$=e(e(O)),ee=a($),ae=a(ee);G(()=>{b(D,t()?.user?.displayName?t().user.displayName:"User"),b(X,t()?.user?.displayName?t().user.displayName:"User"),b(ae,`Score: ${oe(v())}`)}),c(S,{href:"/",text:"Home"}),c(U,{href:"/scores",text:"Scores"}),I(J,()=>t()?.loggedIn,i=>{var l=h(i,!0,me),u=p(l),f=e(e(u));c(u,{href:"/profile",text:"Profile"}),B(f,{}),m(i,l)},i=>{var l=h(i,!0,pe),u=p(l),f=e(e(u));c(u,{href:"/auth/login",text:"Login"}),c(f,{href:"/auth/register",text:"Register"}),m(i,l)}),c(P,{href:"/",text:"Home"}),c(j,{href:"/scores",text:"Scores"}),I(Z,()=>t()?.loggedIn,i=>{var l=h(i,!0,he),u=p(l),f=e(e(u));c(u,{href:"/profile",text:"Profile"}),B(f,{}),m(i,l)},i=>{var l=h(i,!0,be),u=p(l),f=e(e(u));c(u,{href:"/auth/login",text:"Login"}),c(f,{href:"/auth/register",text:"Register"}),m(i,l)}),w(o,n),L()}var we=g('<div class="app bg-gray-200 svelte-85l81p"><!> <main class="svelte-85l81p"><!></main></div>');function Pe(o,r){N(r,!1),le(async()=>{const d=await r.data.getAuthUser(),_=!!d;y.update(z=>({...z,user:{uid:d.uid,displayName:d.displayName,email:d.email},loggedIn:_}))});var s=k(o,!0,we),t=a(s),v=e(e(t)),n=a(v);ne(n,r.children,{},null),ye(t,{}),w(o,s),L()}export{Pe as component,Oe as universal};