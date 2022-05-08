<template>
    <div class="app-container">
        <el-select class="main-select-tree" ref="selectTree" v-model="value" filterable :filter-method="search"
            style="width: 200px;">
            <el-option v-for="item in formatData" :key="item.value" :label="item.label" :value="item.value"
                style="display: none;" />
            <el-tree class="main-select-el-tree" ref="selecteltree" :data="tree" :node-key="defaultProps.key"
                highlight-current :props="defaultProps" @node-click="handleNodeClick" :current-node-key="value"
                :expand-on-click-node="expandOnClickNode" :filter-node-method="filterNode" default-expand-all />
        </el-select>
    </div>
</template>

<script lang="ts" setup>
import { ElSelect, ElOption, ElTree } from 'element-plus';
import { computed, reactive, ref } from 'vue';
interface TreeSelectProps {
    value?: string,
    tree?: Array<any>,
    defaultProps?: any,
}
const props = withDefaults(defineProps<TreeSelectProps>(), {
    value: '',
    tree: () => [],
    defaultProps: () => ({
        children: 'children',
        label: 'label',
        key: 'id'
    })
});
const emit = defineEmits<{
    (e: 'update:valueChange', value: any): void
}>();

const expandOnClickNode = ref(true);
const options = reactive([]);
const selectTree = ref<InstanceType<typeof ElSelect>>();
const selecteltree = ref<InstanceType<typeof ElTree>>();

const handleNodeClick = (node: any) => {
    emit('update:valueChange', node[props.defaultProps.key]);
    selectTree.value?.blur();
};
// 下拉框搜索
const search = (val: string) => {
    selecteltree.value?.filter(val);
};
// 搜索后筛选逻辑
const filterNode = (value: string, data: any) => {
    if (!value) return true;
    return data[props.defaultProps.label].indexOf(value) !== -1;
}

const formatData = computed(() => {
    let options = [];
    let arr = [...props.tree];
    while (arr.length > 0) {
        const item = arr.shift();
        options.push({ label: item[props.defaultProps.label], value: item[props.defaultProps.key] });
        if (item[props.defaultProps.children]) {
            arr = [...arr, ...item[props.defaultProps.children]];
        }
    }
    return options;
})
</script>
<style>
.main-select-el-tree .el-tree-node .is-current>.el-tree-node__content {
    font-weight: bold;
    color: #409eff;
}

.main-select-el-tree .el-tree-node.is-current>.el-tree-node__content {
    font-weight: bold;
    color: #409eff;
}
</style>