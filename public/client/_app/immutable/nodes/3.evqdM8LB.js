import{m as H,n as M,p as m,$ as O,c as S,a as e,q as d,s as t,u as q,t as u,d as b,b as L}from"../chunks/disclose-version.IFR-fyCl.js";import{u as P,p as T,w as f,a as A,o as B,r as C,x,y as _,z as D}from"../chunks/runtime.DkaAAcCG.js";import{e as E}from"../chunks/each.OU7cegmn.js";import{o as F}from"../chunks/main-client.jbsLscHY.js";import{i as g}from"../chunks/store.JvnsxwMy.js";const G=!0,X=Object.freeze(Object.defineProperty({__proto__:null,prerender:G},Symbol.toStringTag,{value:"Module"}));var I=b('<li><span class="font-semibold text-gray-900 dark:text-white"> </span> with <span class="font-semibold text-gray-900 dark:text-white"> </span> points</li>'),J=b('<section class="container max-w-md mx-auto"><h2 class="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">Highscores</h2> <ol class="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400"><!></ol></section>');function Y(r,h){A(h,!1),P({});let o=B([]);F(async()=>{_(g,!0);const s=await fetch("/api/scores").then(a=>a.json());D(o,s),_(g,!1)});var n=d(r,!0,J);H(s=>{O.title="Highscores"});var v=e(n),y=t(t(v)),w=e(y);M(w,()=>f(o)!==null,s=>{var a=q(s),k=L(a);E(k,()=>f(o),1,(i,l,N)=>{var c=d(i,!0,I),p=e(c),$=e(p),j=t(t(p)),z=e(j);C(()=>{u($,x(l).id),u(z,x(l).score)}),m(i,c)},null),S(s,a)},null),m(r,n),T()}export{Y as component,X as universal};