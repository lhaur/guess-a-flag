import{h as L,i as M,c as b,$ as S,a as q,b as s,o as p,s as e,d as z,t as u,e as v,f as A}from"../chunks/disclose-version.73gxhAIW.js";import{u as B,p as C,g as f,a as E,m as F,r as G,b as m,s as _,c as J}from"../chunks/runtime.W3UjnrTG.js";import{e as K}from"../chunks/each.DMuK-KsK.js";import{o as N}from"../chunks/main-client.xzPqCEBL.js";import{i as h}from"../chunks/store.y7lpHhQm.js";var O=v('<tr class="p-2"><td> </td><td> </td></tr>'),P=v('<section class="container mx-auto"><h1 class="text-2xl">Highscores</h1> <table class="table-auto w-full border border-separate"><thead><tr><td class="font-bold">ID</td><td class="font-bold">Score</td></tr></thead><tbody><!></tbody></table></section>');function Y(o,g){E(g,!1),B({});let r=F([]);N(async()=>{_(h,!0);const t=await fetch("/api/scores").then(a=>a.json());J(r,t),_(h,!1)});var c=p(o,!0,P);L(t=>{S.title="Highscores"});var x=s(c),y=e(e(x)),$=s(y),w=e($),k=s(w);M(k,()=>f(r)!==null,t=>{var a=z(t),H=A(a);K(H,()=>f(r),1,(n,d,R)=>{var l=p(n,!0,O),i=s(l),j=s(i),D=e(i),I=s(D);G(()=>{u(j,m(d).id),u(I,m(d).score)}),b(n,l)},null),q(t,a)},null),b(o,c),C()}export{Y as component};
