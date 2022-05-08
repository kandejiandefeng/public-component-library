<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 下拉树

下拉树结构选择

## 基础用法
<Preview comp-name="TreeSelect" demo-name="demo">
  <demo />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`value` | 绑定值 | string | - | `default` | '' 
`tree` | 下拉树数据 | object | - | `default` | []
`defaultProps` | 树配置 | string | - | `default` | 否

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`valueChange` | 点击事件 | $event | 原生的 dom event
