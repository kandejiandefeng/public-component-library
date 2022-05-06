import { openBlock, createElementBlock, renderSlot } from "vue";
var index_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
const _hoisted_1$1 = { class: "ceshi" };
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const ButtonPlugin = {
  install(app) {
    app.component("zs-button", Button);
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {};
const _hoisted_1 = { class: "my-foo" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, " \u6211\u662F\u6D4B\u8BD5\u7EC4\u4EF6\u7EC4\u4EF6 ");
}
var Foo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-24c3f342"]]);
const FooPlugin = {
  install(app) {
    app.component("my-foo", Foo);
  }
};
const MyKitPlugin = {
  install(app) {
    var _a, _b;
    (_a = ButtonPlugin.install) == null ? void 0 : _a.call(ButtonPlugin, app);
    (_b = FooPlugin.install) == null ? void 0 : _b.call(FooPlugin, app);
  }
};
export { Button, ButtonPlugin, Foo, FooPlugin, MyKitPlugin as default };
