import{R as w}from"../chunks/control.pJ1mnnAb.js";import{s as l}from"../chunks/session.NCPXoLXL.js";import{r as D,e as P,f as S,g,i as v,s,p as j,a as p,d as _,h as C,$ as F,t as d,C as b}from"../chunks/disclose-version.WNyamhy6.js";import{u as h,m as O,p as y,s as $,b as R,g as f,a as N,F as T,r as z}from"../chunks/runtime.gTq0fGWg.js";import{d as E,a as H}from"../chunks/firebase.app.XDAO2sjD.js";function I(e,a){throw new w(e,a.toString())}new TextEncoder;const M=async()=>(l.subscribe(a=>{if(!a)throw I(302,"/auth/login")})(),{}),L=Object.freeze(Object.defineProperty({__proto__:null,load:M},Symbol.toStringTag,{value:"Module"}));var U=_('<form><label for="name">Name:</label> <input type="text" id="name" name="name"> <button type="submit">Set</button></form>');function Y(e,a){N(a,!1);const n={};h(n);const r=()=>$(l,"$session",n);let t=O(r().user.displayName);const m=()=>{E(H.currentUser,{displayName:f(t)}).then(()=>T(l,r().user.displayName=f(t),r())).catch(u=>console.log(u))};var o=v(e,!0,U),c=p(o),i=s(s(c));D(i),P("submit",o,j(m),!1),S(i,()=>f(t),u=>R(t,u)),g(e,o),y()}var k=_("<section><h1>Here comes profile page</h1> <p> </p> <p> </p> <!></section>");function Q(e,a){N(a,!1);const n={};h(n);const r=()=>$(l,"$session",n);var t=v(e,!0,k);C(q=>{F.title="Profile Page"});var m=p(t),o=s(s(m)),c=p(o),i=s(s(o)),u=p(i),x=s(s(i));z(()=>{d(c,`Your ID: ${b(r()?.user?.uid)}`),d(u,`DisplayName: ${b(r()?.user?.displayName)}`)}),Y(x,{}),g(e,t),y()}export{Q as component,L as universal};
