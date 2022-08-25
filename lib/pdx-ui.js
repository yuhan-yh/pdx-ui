import { openBlock as c, createElementBlock as s } from "vue";
const a = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, _] of e)
    n[o] = _;
  return n;
}, r = { class: "test" }, p = {
  __name: "index",
  setup(t) {
    return (e, n) => (c(), s("div", r, "test"));
  }
}, d = /* @__PURE__ */ a(p, [["__scopeId", "data-v-352505b5"]]), l = [d], i = (t) => {
  l.forEach((e) => {
    t.component(e.__name, e);
  });
}, u = {
  install: i
};
export {
  d as Weather,
  u as default
};
