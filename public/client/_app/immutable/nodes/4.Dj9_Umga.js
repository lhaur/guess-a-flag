import{h as A,r as d,e as D,b as n,c as $,$ as j,s as e,p as k,o as C,a as r,t as I}from"../chunks/disclose-version.obGOZsW6.js";import{p as M,s as p,g as s,a as W,m}from"../chunks/runtime.QezSLGb2.js";import{g as z}from"../chunks/entry.1ZrvYiQz.js";import{g as B}from"../chunks/utils.uRHcaTQT.js";import{c as F,a as G,b as H,u as J}from"../chunks/firebase.app.bomVEVKu.js";import{s as K}from"../chunks/session.goP9yUW7.js";import{t as L}from"../chunks/Toaster.svelte_svelte_type_style_lang.m6_LZ8UL.js";var O=I('<div class="relative flex flex-col items-center md:justify-center max-h-screen overflow-hidden"><div class="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top md:max-w-md"><h1 class="text-3xl font-semibold text-center text-gray-700">Register</h1> <form class="space-y-4"><div><label class="label" for="username"><span class="text-base label-text">Username</span></label> <input type="text" placeholder="Username" id="username" class="w-full input input-bordered" required></div> <div><label class="label" for="email"><span class="text-base label-text">Email</span></label> <input type="text" placeholder="Email Address" id="email" class="w-full input input-bordered" required></div> <div><label class="label" for="password"><span class="text-base label-text">Password</span></label> <input type="password" placeholder="Enter Password" class="w-full input input-bordered" id="password" required></div> <div><button type="submit" class="btn btn-block">Register</button></div></form></div></div>');function ee(u,x){W(x,!1);let l=m(),o=m(),i=m();const _=()=>{F(G,s(l),s(o)).then(async a=>{const{user:t}=a;await H(t.uid,s(i),s(l)),await J(s(i)),K.update(R=>({...R,user:{displayName:t?.displayName,email:t?.email,uid:t?.uid},loggedIn:!0})),z("/auth/login")}).catch(a=>{const t=a.code;a.message,L.error(B(t),{position:"bottom-center"})})};var c=C(u,!0,O);A(a=>{j.title="Register"});var y=r(c),E=r(y),b=e(e(E)),v=r(b),U=r(v),f=e(e(U));d(f);var g=e(e(v)),N=r(g),h=e(e(N));d(h);var q=e(e(g)),P=r(q),w=e(e(P));d(w),D("submit",b,k(_),!1),n(f,()=>s(i),a=>p(i,a)),n(h,()=>s(l),a=>p(l,a)),n(w,()=>s(o),a=>p(o,a)),$(u,c),M()}export{ee as component};