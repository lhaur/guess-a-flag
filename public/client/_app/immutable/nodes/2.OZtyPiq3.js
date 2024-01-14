import{G as B,H as V,z as W,t as X,g as p,h,a as I,d as m,x as C,c as y,b as x,y as k,I as Y,s as g,J as M,w as Z,$ as tt,o as et}from"../chunks/disclose-version.BE1H4JuN.js";import{a as D,u as O,r as q,g as st,p as j,b as P,z as v,s as u,m as rt,G as T,y as ot}from"../chunks/runtime.psRWym4x.js";import{a as $,b as R,s as S,c as F,d as z,i as N,e as U}from"../chunks/store.xwJxxw6r.js";import{e as at}from"../chunks/each.qvh00t1l.js";import{s as J}from"../chunks/session.Tg9dBN4O.js";import{o as nt}from"../chunks/main-client._B59Dg30.js";const it=!0,Rt=Object.freeze(Object.defineProperty({__proto__:null,prerender:it},Symbol.toStringTag,{value:"Module"})),ct=async(n,e,t,c,s,r,i)=>{if(t())console.log(t());else{const o=await fetch(`/api?id=${c.id}&answer=${c.option}`).then(d=>d.json());o.correct?P(s,"bg-green-700"):P(s,"bg-red-700"),v(e,!0),v(r,o.correct)}};var dt=m("<button> </button>");function ut(n,e){D(e,!1);const t={};O(t);const c=()=>u($,"$isQuestionAnswered",t),s=()=>u(R,"$isCorrect",t);let r=rt("bg-blue-700");var i=h(n,!0,dt),o=I(i);q(()=>{V(i,`shadow p-2 ${W(st(r))} min-w-full rounded text-white font-bold`),X(o,e.option)}),i.__click=[ct,$,c,e,r,R,s],p(n,i),j()}B(["click"]);const lt=async(n,e,t,c,s,r,i,o,d,_)=>{try{await fetch(`/api/scores?id=${t()?.user?t().user.uid:crypto.randomUUID().toString()}&score=${s()}`,{method:"POST"})}catch(f){v(r,f),console.log(f)}o.fetchData(),v(d,!1),v(c,0)};var ft=m('<button class="w-full bg-red-700 rounded font-bold text-white shadow px-6 py-4">Restart</button>');function gt(n,e){D(e,!1);const t={};O(t);const c=()=>u(J,"$session",t),s=()=>u(S,"$score",t),r=()=>u(F,"$isError",t),i=()=>u($,"$isQuestionAnswered",t),o=()=>u(R,"$isCorrect",t);var d=k(n),_=x(d);C(_,()=>!o()&&i(),f=>{var a=h(f,!0,ft);a.__click=[lt,J,c,S,s,F,r,e,$,i],p(f,a)},null),y(n,d),j()}B(["click"]);const vt=(n,e,t,c,s,r,i,o,d)=>{T(e,t()),v(c,!1),T(r,i()),v(o,!1)};var _t=m('<button class="w-full bg-green-800 px-6 py-4 rounded font-bold text-white shadow">Next country</button>');function mt(n,e){D(e,!1);const t={};O(t);const c=()=>u(z,"$countryId",t),s=()=>u(R,"$isCorrect",t),r=()=>u(S,"$score",t),i=()=>u($,"$isQuestionAnswered",t);var o=k(n),d=x(o);C(d,s,_=>{var f=h(_,!0,_t);f.__click=[vt,z,c,R,s,S,r,$,i],p(_,f)},null),y(n,o),j()}B(["click"]);var bt=m('<div class="max-w-lg rounded overflow-hidden shadow-lg bg-white"><img class="w-full" height="240" width="360"> <div class="px-6 py-4"><div class="font-bold text-xl mb-2">What country is this?</div> <div class="grid gap-2 mb-2 sm:grid-cols-1 md:grid-cols-2"><!></div> <!> <!></div></div>');function wt(n,e){D(e,!1),O({});let c=!1;var s=h(n,!0,bt),r=I(s),i=g(g(r)),o=I(i),d=g(g(o)),_=I(d),f=g(g(d)),a=g(g(f)),l,Q;q(()=>{l!==(l=`https://flagcdn.com/h240/${W(e.country.code)}.png`)&&M(r,"src",l),Q!==(Q=e.country.code)&&M(r,"alt",Q)}),Y(_,()=>e.country.id,b=>{var w=k(b),E=x(w);at(E,()=>e.country.answerOptions,1,(A,L,G)=>{var H=k(A),K=x(H);ut(K,{get id(){return e.country.id},get option(){return ot(L)},isAlreadyAnswered:c}),y(A,H)},null),y(b,w)}),mt(f,{}),gt(a,{get fetchData(){return e.fetchData}}),p(n,s),j()}var pt=m('<meta name="description" content="Quess-A-Flag">'),ht=m("<p>Error</p>"),yt=m('<h1 class="text-center svelte-12om222">Loading</h1>'),xt=m('<h1 class="text-center svelte-12om222">Refresh page to start again!</h1> <button class="w-full bg-red-700 rounded font-bold text-white shadow px-6 py-4">Restart</button>',!0),At=m('<section class="container mx-auto svelte-12om222"><!> <!></section>');function Dt(n,e){D(e,!1);const t={};O(t);const c=()=>u(N,"$isLoading",t),s=()=>u(U,"$countries",t),r=()=>u(z,"$countryId",t),i=()=>u(F,"$isError",t),o=async()=>{v(N,!0);const a=await fetch("/api").then(l=>l.json());v(U,a),s()[0],v(z,0),v(N,!1)};nt(async()=>{await o()});var d=h(n,!0,At);Z(a=>{var l=h(a,!0,pt);tt.title="Home",p(a,l)});var _=I(d),f=g(g(_));C(_,i,a=>{var l=h(a,!0,ht);p(a,l)},null),C(f,c,a=>{var l=h(a,!0,yt);p(a,l)},a=>{var l=k(a),Q=x(l);C(Q,()=>r()>=s().length,b=>{var w=et(b,!0,xt),E=x(w),A=g(g(E));A.__click=handleRestart,y(b,w)},b=>{var w=k(b),E=x(w);C(E,()=>s().length!==0,A=>{var L=k(A),G=x(L);wt(G,{get country(){return s()[r()]},fetchData:o}),y(A,L)},null),y(b,w)}),y(a,l)}),p(n,d),j()}B(["click"]);export{Dt as component,Rt as universal};