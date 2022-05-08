<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 下拉表格弹框

下拉弹出表格选择

## 基础用法
<Preview comp-name="BouncedSelect" demo-name="demo">
  <demo />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`selectValue` | 是否弹出表格 | boolean | - | `default` | 否 
`dialogTitle` | 弹框标题 | string | - | `default` |  提示
`placeholder` | 默认显示 | string | - | `default` |  ''
`searchPlaceholder` | 表格搜索默认显示 | string | - | `default` |  ''
`tableData` | 弹框表格的值 | Array | - | `default` |  []
`total` | 弹框表格的值数据总数 | number | - | `default` |  0
`option` | 弹框表格的值option | object | - | `default` |  {}
`disabled` | 是否可以选择 | boolean | - | `default` |  false
`multiple` | 是否多选 | boolean | - | `default` |  false
`multipleLimit` | 多选个数 | boolean | - | `default` |  100

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`search` | 弹出表格搜索事件 | value |  搜索的值
`change` | 表格选择改变事件 | value | 选择的值
`changeSelect` | 下拉框改变事件 | value | 选择的值
