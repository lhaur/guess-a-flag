import { o as onAuthStateChanged, a as auth } from './firebase.app-bfd5c899.js';

const load = async ({ url }) => {
  const getAuthUser = () => {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => resolve(user ? user : false));
    });
  };
  return {
    getAuthUser,
    url: url.pathname
  };
};

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-9d60a9d7.js')).default;
const universal_id = "src/routes/+layout.js";
const imports = ["_app/immutable/nodes/0.h00ox6Mj.js","_app/immutable/chunks/firebase.app.bomVEVKu.js","_app/immutable/chunks/disclose-version.obGOZsW6.js","_app/immutable/chunks/runtime.QezSLGb2.js","_app/immutable/chunks/main-client.HuvZEqFL.js","_app/immutable/chunks/each.nEGUvMwz.js","_app/immutable/chunks/entry.1ZrvYiQz.js","_app/immutable/chunks/index.6CzcMCQh.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/store.Fa0ykZqT.js","_app/immutable/chunks/session.goP9yUW7.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.m6_LZ8UL.js"];
const stylesheets = ["_app/immutable/assets/0.xXvosmCG.css","_app/immutable/assets/Toaster.OqITyIig.css"];
const fonts = ["_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.dOGCK5uJ.woff2","_app/immutable/assets/fira-mono-all-400-normal.dpry7Ug7.woff","_app/immutable/assets/fira-mono-cyrillic-400-normal.N-vuOVMo.woff2","_app/immutable/assets/fira-mono-greek-ext-400-normal.rKiNtwjr.woff2","_app/immutable/assets/fira-mono-greek-400-normal.At854Oju.woff2","_app/immutable/assets/fira-mono-latin-ext-400-normal.-l34kfv6.woff2","_app/immutable/assets/fira-mono-latin-400-normal.yoy1YEIp.woff2"];

export { component, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-1d7f857c.js.map
