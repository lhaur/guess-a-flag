import{m as H,n as M,p as u,$ as O,b as D,f as t,q as p,k as s,u as I,d as b,l as h,j as L}from"../chunks/disclose-version.50QhH8_L.js";import{o as P,q as T,w as f,t as A,m as B,r as C,x as m,y as _,z as E}from"../chunks/runtime.A3zHqo8R.js";import{e as F}from"../chunks/each.G8Zm4jCr.js";import{o as G}from"../chunks/main-client.mcESlmFZ.js";import{i as v}from"../chunks/store.y7lpHhQm.js";const J=!0,Z=Object.freeze(Object.defineProperty({__proto__:null,prerender:J},Symbol.toStringTag,{value:"Module"}));var K=h('<tr class="p-2"><td> </td><td> </td></tr>'),N=h('<section class="container mx-auto"><h1 class="text-2xl">Highscores</h1> <table class="table-auto w-full border border-separate"><thead><tr><td class="font-bold">ID</td><td class="font-bold">Score</td></tr></thead><tbody><!></tbody></table></section>');function tt(o,g){A(g,!1),P({});let r=B([]);G(async()=>{_(v,!0);const e=await fetch("/api/scores").then(a=>a.json());E(r,e),_(v,!1)});var n=p(o,!0,N);H(e=>{O.title="Highscores"});var x=t(n),y=s(s(x)),$=t(y),j=s($),w=t(j);M(w,()=>f(r)!==null,e=>{var a=I(e),k=L(a);F(k,()=>f(r),1,(l,c,R)=>{var d=p(l,!0,K),i=t(d),S=t(i),q=s(i),z=t(q);C(()=>{b(S,m(c).id),b(z,m(c).score)}),u(l,d)},null),D(e,a)},null),u(o,n),T()}export{tt as component,Z as universal};