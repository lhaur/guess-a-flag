import{w as c}from"./index.K1lkvplB.js";let p=Symbol("clean"),r=[],h=(e,f)=>{let n=[],i={get(){return i.lc||i.listen(()=>{})(),i.value},l:f||0,lc:0,listen(s,l){return i.lc=n.push(s,l||i.l)/2,()=>{let t=n.indexOf(s);~t&&(n.splice(t,2),--i.lc||i.off())}},notify(s){let l=!r.length;for(let t=0;t<n.length;t+=2)r.push(n[t],n[t+1],i.value,s);if(l){for(let t=0;t<r.length;t+=4){let d;for(let o=t+1;!d&&(o+=4)<r.length;)r[o]<r[t+1]&&(d=r.push(r[t],r[t+1],r[t+2],r[t+3]));d||r[t](r[t+2],r[t+3])}r.length=0}},off(){},set(s){i.value!==s&&(i.value=s,i.notify())},subscribe(s,l){let t=i.listen(s,l);return s(i.value),t},value:e};return i[p]=()=>{n=[],i.lc=0,i.off()},i};const L=5,a=6,g=10;let O=(e,f,n,i)=>(e.events=e.events||{},e.events[n+g]||(e.events[n+g]=i(s=>{e.events[n].reduceRight((l,t)=>(t(l),l),{shared:{},...s})})),e.events[n]=e.events[n]||[],e.events[n].push(f),()=>{let s=e.events[n],l=s.indexOf(f);s.splice(l,1),s.length||(delete e.events[n],e.events[n+g](),delete e.events[n+g])}),T=1e3,U=(e,f)=>O(e,i=>{let s=f(i);s&&e.events[a].push(s)},L,i=>{let s=e.listen;e.listen=(...t)=>(!e.lc&&!e.active&&(e.active=!0,i()),s(...t));let l=e.off;e.events[a]=[],e.off=()=>{l(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let t of e.events[a])t();e.events[a]=[]}},T)};{let t=e[p];e[p]=()=>{for(let d of e.events[a])d();e.events[a]=[],e.active=!1,t()}}return()=>{e.listen=s,e.off=l}}),E=e=>e,v={},w={addEventListener(){},removeEventListener(){}};function y(){try{return typeof localStorage<"u"}catch{return!1}}y()&&(v=localStorage);let m={addEventListener(e,f,n){window.addEventListener("storage",f),window.addEventListener("pageshow",n)},removeEventListener(e,f,n){window.removeEventListener("storage",f),window.removeEventListener("pageshow",n)}};typeof window<"u"&&(w=m);function N(e,f=void 0,n={}){let i=n.encode||E,s=n.decode||E,l=h(f),t=l.set;l.set=u=>{typeof u>"u"?delete v[e]:v[e]=i(u),t(u)};function d(u){u.key===e?u.newValue===null?t(void 0):t(s(u.newValue)):v[e]||t(void 0)}function o(){l.set(v[e]?s(v[e]):f)}return U(l,()=>{if(o(),n.listen!==!1)return w.addEventListener(e,d,o),()=>{w.removeEventListener(e,d,o)}}),l}const x=c(!1),M=c([]),k=c(0),A=c(!1),R=c(0),_=c(!1);N("user_uuid",crypto.randomUUID().toString());export{A as a,x as b,k as c,M as d,_ as i,R as s};