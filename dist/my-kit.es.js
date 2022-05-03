import { openBlock, createElementBlock, renderSlot } from "vue";
var index_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
const _hoisted_1 = { class: "ceshi" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const ButtonPlugin = {
  install(app) {
    app.component("zs-button", Button);
  }
};
const MyKitPlugin = {
  install(app) {
    var _a;
    (_a = ButtonPlugin.install) == null ? void 0 : _a.call(ButtonPlugin, app);
  }
};
export { Button, ButtonPlugin, MyKitPlugin as default };
