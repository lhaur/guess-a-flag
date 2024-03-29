import { m as get_descriptor, n as is_array, o as proxy, q as object_keys, r as push, t as current_component_context, v as pop, w as render_effect, x as array_from, y as destroy_signal, z as define_property, A as object_assign, B as flushSync, C as render, a as push$1, D as copy_payload, E as assign_payload, d as bind_props, p as pop$1, f as create_anchor } from "./index.js";
import { s as setContext } from "./main-client.js";
import { v as validate_component, a as add_snippet_symbol } from "./validate.js";
let base = "";
let assets = base;
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
const PassiveDelegatedEvents = ["touchstart", "touchmove", "touchend"];
const ROOT_BLOCK = 0;
function create_root_block(intro) {
  return {
    // dom
    d: null,
    // effect
    e: null,
    // intro
    i: intro,
    // parent
    p: null,
    // transition
    r: null,
    // type
    t: ROOT_BLOCK
  };
}
function set_current_hydration_fragment(fragment) {
}
function get_hydration_fragment(node) {
  const fragment = [];
  let current_node = node;
  let target_depth = null;
  while (current_node !== null) {
    const node_type = current_node.nodeType;
    const next_sibling = current_node.nextSibling;
    if (node_type === 8) {
      const data = (
        /** @type {Comment} */
        current_node.data
      );
      if (data.startsWith("ssr:")) {
        const depth = data.slice(4);
        if (target_depth === null) {
          target_depth = depth;
        } else if (depth === target_depth) {
          return fragment;
        } else {
          fragment.push(
            /** @type {Text | Comment | Element} */
            current_node
          );
        }
        current_node = next_sibling;
        continue;
      }
    }
    if (target_depth !== null) {
      fragment.push(
        /** @type {Text | Comment | Element} */
        current_node
      );
    }
    current_node = next_sibling;
  }
  return null;
}
var node_prototype;
var element_prototype;
var text_prototype;
var map_prototype;
function init_operations() {
  if (node_prototype !== void 0) {
    return;
  }
  node_prototype = Node.prototype;
  element_prototype = Element.prototype;
  text_prototype = Text.prototype;
  map_prototype = Map.prototype;
  node_prototype.appendChild;
  node_prototype.cloneNode;
  map_prototype.set;
  map_prototype.get;
  map_prototype.delete;
  element_prototype.__click = void 0;
  text_prototype.__nodeValue = " ";
  element_prototype.__className = "";
  // @ts-ignore
  get_descriptor(node_prototype, "firstChild").get;
  // @ts-ignore
  get_descriptor(node_prototype, "nextSibling").get;
  // @ts-ignore
  get_descriptor(node_prototype, "textContent").set;
  // @ts-ignore
  get_descriptor(element_prototype, "className").set;
}
function remove(current) {
  var first_node = current;
  if (is_array(current)) {
    var i = 0;
    var node;
    for (; i < current.length; i++) {
      node = current[i];
      if (i === 0) {
        first_node = node;
      }
      if (node.isConnected) {
        node.remove();
      }
    }
  } else if (current.isConnected) {
    current.remove();
  }
  return (
    /** @type {Element | Comment | Text} */
    first_node
  );
}
const all_registerd_events = /* @__PURE__ */ new Set();
const root_event_handles = /* @__PURE__ */ new Set();
function empty() {
  return document.createTextNode("");
}
function handle_event_propagation(root_element, event) {
  const event_name = event.type;
  const path = event.composedPath?.() || [];
  let current_target = (
    /** @type {null | Element} */
    path[0] || event.target
  );
  if (event.target !== current_target) {
    define_property(event, "target", {
      configurable: true,
      value: current_target
    });
  }
  let path_idx = 0;
  const handled_at = event.__root;
  if (handled_at) {
    const at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && root_element === document) {
      return;
    }
    if (at_idx < path.indexOf(root_element)) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event.target;
  define_property(event, "currentTarget", {
    configurable: true,
    get() {
      return current_target || document;
    }
  });
  while (current_target !== null) {
    const parent_element = current_target.parentNode || /** @type {any} */
    current_target.host || null;
    const internal_prop_name = "__" + event_name;
    const delegated = current_target[internal_prop_name];
    if (delegated !== void 0 && !/** @type {any} */
    current_target.disabled) {
      if (is_array(delegated)) {
        const [fn, ...data] = delegated;
        fn.apply(current_target, [event, ...data]);
      } else {
        delegated.call(current_target, event);
      }
    }
    if (event.cancelBubble || parent_element === root_element) {
      break;
    }
    current_target = parent_element;
  }
  event.__root = root_element;
}
function createRoot(component, options2) {
  const props = proxy(
    /** @type {any} */
    options2.props || {},
    false
  );
  let [accessors, $destroy] = mount(component, { ...options2, props });
  const result = (
    /** @type {Exports & { $destroy: () => void; $set: (props: Partial<Props>) => void; }} */
    {
      $set: (next) => {
        object_assign(props, next);
      },
      $destroy
    }
  );
  for (const key of object_keys(accessors || {})) {
    define_property(result, key, {
      get() {
        return accessors[key];
      },
      /** @param {any} value */
      set(value) {
        flushSync(() => accessors[key] = value);
      },
      enumerable: true
    });
  }
  return result;
}
function mount(component, options2) {
  init_operations();
  const registered_events = /* @__PURE__ */ new Set();
  const container = options2.target;
  const block = create_root_block(options2.intro || false);
  const first_child = (
    /** @type {ChildNode} */
    container.firstChild
  );
  const hydration_fragment = get_hydration_fragment(first_child);
  let accessors = void 0;
  try {
    let anchor = null;
    if (hydration_fragment === null) {
      anchor = empty();
      container.appendChild(anchor);
    }
    set_current_hydration_fragment(hydration_fragment);
    const effect = render_effect(
      () => {
        if (options2.context) {
          push({});
          current_component_context.c = options2.context;
        }
        accessors = component(anchor, options2.props || {}, options2.events || {});
        if (options2.context) {
          pop();
        }
      },
      block,
      true
    );
    block.e = effect;
  } catch (error) {
    if (options2.recover !== false && hydration_fragment !== null) {
      console.error(
        "ERR_SVELTE_HYDRATION_MISMATCH: Hydration failed because the initial UI does not match what was rendered on the server.",
        error
      );
      remove(hydration_fragment);
      first_child.remove();
      hydration_fragment.at(-1)?.nextSibling?.remove();
      return mount(component, options2);
    } else {
      throw error;
    }
  } finally {
  }
  const bound_event_listener = handle_event_propagation.bind(null, container);
  const bound_document_event_listener = handle_event_propagation.bind(null, document);
  const event_handle = (events) => {
    for (let i = 0; i < events.length; i++) {
      const event_name = events[i];
      if (!registered_events.has(event_name)) {
        registered_events.add(event_name);
        container.addEventListener(
          event_name,
          bound_event_listener,
          PassiveDelegatedEvents.includes(event_name) ? {
            passive: true
          } : void 0
        );
        document.addEventListener(
          event_name,
          bound_document_event_listener,
          PassiveDelegatedEvents.includes(event_name) ? {
            passive: true
          } : void 0
        );
      }
    }
  };
  event_handle(array_from(all_registerd_events));
  root_event_handles.add(event_handle);
  return [
    accessors,
    () => {
      for (const event_name of registered_events) {
        container.removeEventListener(event_name, bound_event_listener);
      }
      root_event_handles.delete(event_handle);
      const dom = block.d;
      if (dom !== null) {
        remove(dom);
      }
      if (hydration_fragment !== null) {
        remove(hydration_fragment);
      }
      destroy_signal(
        /** @type {import('./types.js').EffectSignal} */
        block.e
      );
    }
  ];
}
function asClassComponent$1(component) {
  return class extends Svelte4Component {
    /** @param {any} options */
    constructor(options2) {
      super({
        component,
        ...options2
      });
    }
  };
}
class Svelte4Component {
  /** @type {any} */
  #events = {};
  /** @type {ReturnType<typeof $.createRoot>} */
  #instance;
  /**
   * @param {import('../main/public.js').ComponentConstructorOptions & {
   *  component: any;
   * 	immutable?: boolean;
   * 	recover?: false;
   * }} options
   */
  constructor(options2) {
    this.#instance = createRoot(options2.component, {
      target: options2.target,
      props: { ...options2.props, $$events: this.#events },
      context: options2.context,
      intro: options2.intro,
      recover: options2.recover
    });
    for (const key of Object.keys(this.#instance)) {
      if (key === "$set" || key === "$destroy")
        continue;
      define_property(this, key, {
        get() {
          return this.#instance[key];
        },
        /** @param {any} value */
        set(value) {
          this.#instance[key] = value;
        },
        enumerable: true
      });
    }
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    this.#instance.$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event, callback) {
    this.#events[event] = this.#events[event] || [];
    const cb = (...args) => callback.call(this, ...args);
    this.#events[event].push(cb);
    return () => {
      this.#events[event] = this.#events[event].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    this.#instance.$destroy();
  }
}
function asClassComponent(component) {
  const component_constructor = asClassComponent$1(component);
  const _render = (props, { context } = {}) => {
    const result = render(component, { props, context });
    return {
      css: { code: "", map: null },
      head: result.head,
      html: result.html
    };
  };
  component_constructor.render = _render;
  return component_constructor;
}
let prerendering = false;
function set_building() {
}
function set_prerendering() {
  prerendering = true;
}
function Root($$payload, $$props) {
  push$1(true);
  let {
    stores,
    page,
    constructors,
    components = [],
    form,
    data_0 = null,
    data_1 = null
  } = $$props;
  {
    setContext("__svelte__", stores);
  }
  {
    stores.page.set(page);
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const anchor = create_anchor($$payload2);
    const anchor_4 = create_anchor($$payload2);
    $$payload2.out += `${anchor}`;
    if (constructors[1]) {
      $$payload2.out += "<!--ssr:if:true-->";
      const anchor_1 = create_anchor($$payload2);
      $$payload2.out += `${anchor_1}`;
      validate_component(constructors[0])?.($$payload2, {
        get this() {
          return components[0];
        },
        set this($$value) {
          components[0] = $$value;
          $$settled = false;
        },
        data: data_0,
        children: add_snippet_symbol(($$payload3, $$slotProps) => {
          const anchor_2 = create_anchor($$payload3);
          $$payload3.out += `${anchor_2}`;
          validate_component(constructors[1])?.($$payload3, {
            get this() {
              return components[1];
            },
            set this($$value) {
              components[1] = $$value;
              $$settled = false;
            },
            data: data_1,
            form
          });
          $$payload3.out += `${anchor_2}`;
        })
      });
      $$payload2.out += `${anchor_1}`;
    } else {
      $$payload2.out += "<!--ssr:if:false-->";
      const anchor_3 = create_anchor($$payload2);
      $$payload2.out += `${anchor_3}`;
      validate_component(constructors[0])?.($$payload2, {
        get this() {
          return components[0];
        },
        set this($$value) {
          components[0] = $$value;
          $$settled = false;
        },
        data: data_0,
        form
      });
      $$payload2.out += `${anchor_3}`;
    }
    $$payload2.out += `${anchor} ${anchor_4}`;
    {
      $$payload2.out += "<!--ssr:if:false-->";
    }
    $$payload2.out += `${anchor_4}`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, {
    stores,
    page,
    constructors,
    components,
    form,
    data_0,
    data_1
  });
  pop$1();
}
Root.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
const root = asClassComponent(Root);
const options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<div style="display: contents">' + body + "</div>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "141t2vw"
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  options as c,
  set_private_env as d,
  prerendering as e,
  set_public_env as f,
  get_hooks as g,
  set_safe_public_env as h,
  set_assets as i,
  set_building as j,
  set_prerendering as k,
  override as o,
  public_env as p,
  reset as r,
  safe_public_env as s
};
