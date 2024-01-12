import{v as q,w as et,x as X,t as st,p as h,q as y,a as E,d as w,y as rt,n as $,s as v,z as J,c as k,u as O,b as Q,m as at,$ as ot,o as nt}from"../chunks/disclose-version.IFR-fyCl.js";import{a as B,u as H,r as Y,w as it,p as W,z as K,y as d,s as n,o as ct,A as U,x as dt}from"../chunks/runtime.DkaAAcCG.js";import{a as A,b as P,c as T,s as I,u as D,d as F,i as N,e as V}from"../chunks/store.JvnsxwMy.js";import{e as ut}from"../chunks/each.OU7cegmn.js";import{o as lt}from"../chunks/main-client.jbsLscHY.js";const ft=!0,St=Object.freeze(Object.defineProperty({__proto__:null,prerender:ft},Symbol.toStringTag,{value:"Module"})),gt=async(f,e,t,i,s,r,a)=>{if(t())console.log(t());else{const c=await fetch(`/api?id=${i.id}&answer=${i.option}`).then(_=>_.json());c.correct?K(s,"bg-green-700"):K(s,"bg-red-700"),d(e,!0),d(r,c.correct)}};var vt=w("<button> </button>");function _t(f,e){B(e,!1);const t={};H(t);const i=()=>n(A,"$isQuestionAnswered",t),s=()=>n(P,"$isCorrect",t);let r=ct("bg-blue-700");var a=y(f,!0,vt),c=E(a);Y(()=>{et(a,`shadow p-2 ${X(it(r))} min-w-full rounded text-white font-bold`),st(c,e.option)}),a.__click=[gt,A,i,e,r,P,s],h(f,a),W()}q(["click"]);const mt=(f,e,t,i,s,r,a,c,_)=>{U(e,t()),d(i,!1),U(r,a()),d(c,!1)},bt=async(f,e,t,i,s,r,a,c,_,C)=>{try{await fetch(`/api/scores?id=${t()}&score=${s()}`,{method:"POST"})}catch(p){d(r,p)}c.fetchData(),d(_,!1),d(i,0)};var wt=w('<button class="w-full bg-green-800 px-6 py-4 rounded font-bold text-white shadow">Next country</button>'),pt=w('<button class="w-full bg-red-700 rounded font-bold text-white shadow px-6 py-4">Restart</button>'),ht=w('<div class="max-w-lg rounded overflow-hidden shadow-lg"><img class="w-full" height="240" width="360"> <div class="px-6 py-4"><div class="font-bold text-xl mb-2">What country is this?</div> <div class="grid gap-2 mb-2 sm:grid-cols-1 md:grid-cols-2"><!></div> <!> <!></div></div>');function yt(f,e){B(e,!1);const t={};H(t);const i=()=>n(T,"$countryId",t),s=()=>n(P,"$isCorrect",t),r=()=>n(I,"$score",t),a=()=>n(A,"$isQuestionAnswered",t),c=()=>n(D,"$uuid",t),_=()=>n(F,"$isError",t);let C=!1;var p=y(f,!0,ht),x=E(p),R=v(v(x)),j=E(R),L=v(v(j)),o=E(L),u=v(v(L)),M=v(v(u)),m,b;Y(()=>{m!==(m=`https://flagcdn.com/h240/${X(e.country.code)}.png`)&&J(x,"src",m),b!==(b=e.country.code)&&J(x,"alt",b)}),rt(o,()=>e.country.id,g=>{var l=O(g),S=Q(l);ut(S,()=>e.country.answerOptions,1,(z,Z,Et)=>{var G=O(z),tt=Q(G);_t(tt,{get id(){return e.country.id},get option(){return dt(Z)},isAlreadyAnswered:C}),k(z,G)},null),k(g,l)}),$(u,s,g=>{var l=y(g,!0,wt);l.__click=[mt,T,i,P,s,I,r,A,a],h(g,l)},null),$(M,()=>!s()&&a(),g=>{var l=y(g,!0,pt);l.__click=[bt,D,c,I,r,F,_,e,A,a],h(g,l)},null),h(f,p),W()}q(["click"]);const xt=async(f,e,t,i,s,r,a,c,_,C)=>{try{await fetch(`/api/scores?id=${t()}&score=${s()}`,{method:"POST"})}catch(p){d(r,p)}c(),d(_,!1),d(i,0)};var At=w('<meta name="description" content="Quess-A-Flag">'),$t=w("<p>Error</p>"),kt=w('<h1 class="text-center svelte-12om222">Loading</h1>'),Qt=w('<h1 class="text-center svelte-12om222">Refresh page to start again!</h1> <button class="w-full bg-red-700 rounded font-bold text-white shadow px-6 py-4">Restart</button>',!0),Ct=w('<section class="container mx-auto svelte-12om222"><!> <!></section>');function zt(f,e){B(e,!1);const t={};H(t);const i=()=>n(N,"$isLoading",t),s=()=>n(V,"$countries",t),r=()=>n(T,"$countryId",t),a=()=>n(D,"$uuid",t),c=()=>n(I,"$score",t),_=()=>n(F,"$isError",t),C=()=>n(A,"$isQuestionAnswered",t);let p;const x=async()=>{d(N,!0);const o=await fetch("/api").then(u=>u.json());d(V,o),s()[0],d(T,0),d(N,!1)};lt(async()=>{await x()}),console.log(p);var R=y(f,!0,Ct);at(o=>{var u=y(o,!0,At);ot.title="Home",h(o,u)});var j=E(R),L=v(v(j));$(j,_,o=>{var u=y(o,!0,$t);h(o,u)},null),$(L,i,o=>{var u=y(o,!0,kt);h(o,u)},o=>{var u=O(o),M=Q(u);$(M,()=>r()>=s().length,m=>{var b=nt(m,!0,Qt),g=Q(b),l=v(v(g));l.__click=[xt,D,a,I,c,F,_,x,A,C],k(m,b)},m=>{var b=O(m),g=Q(b);$(g,()=>s().length!==0,l=>{var S=O(l),z=Q(S);yt(z,{get country(){return s()[r()]},fetchData:x}),k(l,S)},null),k(m,b)}),k(o,u)}),h(f,R),W()}q(["click"]);export{zt as component,St as universal};
