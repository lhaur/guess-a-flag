import{G as z,g as _,a as n,K as C,t as K,h as m,d as i,C as M,i as N,s as t,c as F,z as R,b as L,o as j,L as T}from"../chunks/disclose-version.Lxp0NizN.js";import{u as k,r as q,p,a as b,s as d,c as D}from"../chunks/runtime.zQU0RrEG.js";import{g as O}from"../chunks/entry.0_R-IXl7.js";import{s as E}from"../chunks/store.SAyfdFr1.js";import{s as h}from"../chunks/session.Tg9dBN4O.js";import{p as I}from"../chunks/stores.CIrUQm2v.js";import{b as J,a as Q}from"../chunks/firebase.app.o5xkHkss.js";const ue=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));var U=(s,a,e)=>a(e.href),V=i('<li class="mr-3"><button class="normal-link svelte-1moubbz"> </button></li>');function g(s,a){b(a,!1);const e={};k(e);const l=()=>d(I,"$page",e);var o=m(s,!0,V),r=n(o),c=n(r);q(()=>{C(r,"active",l().url.pathname==a.href),K(c,a.text)}),r.__click=[U,O,a],_(s,o),p()}z(["click"]);const W=async(s,a,e,l,o,r)=>{await a(e).then(()=>{D(l,void 0),console.log(o()),r("/auth/login")}).catch(c=>console.log(c))};var X=i('<li class="mr-3"><button class="normal-link svelte-1moubbz">Logout</button></li>');function Y(s,a){b(a,!1);const e={};k(e);const l=()=>d(h,"$session",e);var o=m(s,!0,X),r=n(o);r.__click=[W,J,Q,h,l,O],_(s,o),p()}z(["click"]);var Z=i("<!> <!>",!0),$=i("<!> <!>",!0),ee=i('<header class="shadow px-4 bg-[#FBFBFB]"><nav class="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4" data-te-navbar-ref=""><div class="flex w-full flex-wrap items-center justify-between px-3"><div class="ml-2"><a class="text-xl text-neutral-800 dark:text-neutral-200" href="/">Guess-A-Flag</a></div> <ul class="flex"><!> <!> <!></ul> <span class="font-bold ml-2 text-neutral-500 dark:text-neutral-200"> </span></div></nav></header>');function ae(s,a){b(a,!1);const e={};k(e);const l=()=>d(h,"$session",e),o=()=>d(E,"$score",e);var r=m(s,!0,ee),c=n(r),S=n(c),G=n(S),y=t(t(G)),w=n(y),B=t(t(w)),H=t(t(B)),P=t(t(y)),A=n(P);M(A,()=>`Score: ${R(o())}`),g(w,{href:"/",text:"Home"}),g(B,{href:"/scores",text:"Scores"}),N(H,l,u=>{var f=j(u,!0,Z),v=L(f),x=t(t(v));g(v,{href:"/profile",text:"Profile"}),Y(x,{}),F(u,f)},u=>{var f=j(u,!0,$),v=L(f),x=t(t(v));g(v,{href:"/auth/login",text:"Login"}),g(x,{href:"/auth/register",text:"Register"}),F(u,f)}),_(s,r),p()}var te=i('<div class="app svelte-85l81p"><!> <main class="svelte-85l81p"><!></main></div>');function fe(s,a){b(a,!1);var e=m(s,!0,te),l=n(e),o=t(t(l)),r=n(o);T(r,a.children,{},null),ae(l,{}),_(s,e),p()}export{fe as component,ue as universal};
