<template>
    <div class="BouncedSelect">
        <span v-if="selectLabel" class="boxSelect" @click="showDialog">{{ selectLabel }}<i
                class="el-icon-arrow-right"></i></span>
        <span v-else class="boxSelect" @click="showDialog">{{ placeholder }}<i class="el-icon-arrow-right"></i></span>
        <el-dialog title="props.dialogTitle" v-model="dialogVisible">
            <div>
                <el-form :inline="true">
                    <el-form-item label="查询：">
                        <el-input v-model="searchValue" :placeholder="searchPlaceholder"
                            @keydown.enter.native="keydown"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search">
                            查询
                        </el-button>
                        <el-button @click="searchValue = ''; search()">
                            重置
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-table ref="bouncedTabble" v-bind="$attrs" border :data="tableData" style="width: 100%" @selection-change="selectionChange">
                <el-table-column v-if="multiple" type="selection" width="50px"></el-table-column>
                <el-table-column v-else width="50px">
                    <template #default="scope">
                        <el-radio v-model="radioValue"
                            :label="option.selectkey ? scope.row[option.selectkey] : scope.row.id">
                            <span></span>
                        </el-radio>
                    </template>
                </el-table-column>
                <slot />
            </el-table>
            <el-pagination v-if="total" :current-page.sync="page.pageNum" :page-size.sync="page.pageSize"
                :page-sizes="[10, 20, 50]" layout="total, sizes, prev, pager, next, jumper" :total="total"
                @size-change="handleSizeChange" @current-change="handleCurrentChange">
            </el-pagination>
            <template #footer>
                <div>
                    <el-button @click="dialogVisible = false">
                        取消
                    </el-button>
                    <el-button type="primary" @click="submit">
                        确认
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ElDialog, ElForm, ElFormItem, ElButton, ElPagination, ElTable, ElTableColumn, ElRadio } from 'element-plus';
import { reactive, ref, watch } from 'vue';
interface BouncedSelectProps {
    selectValue?: number | string | Array<any>,
    // 弹框标题
    dialogTitle?: string,
    // 默认显示
    placeholder?: string,
    // 搜索框默认显示
    searchPlaceholder?: string,
    // 弹框表格的值
    tableData?: Array<any>,
    // 表格总条数
    total?: number,
    option?: any,
    // 是否可以选择
    disabled?: boolean,
    // 是否多选
    multiple?: boolean,
    // 多选个数
    multipleLimit?: number
}
const props = withDefaults(defineProps<BouncedSelectProps>(), {
    selectValue: '',
    // 弹框标题
    dialogTitle: '提示',
    // 默认显示
    placeholder: '',
    // 搜索框默认显示
    searchPlaceholder: '',
    // 弹框表格的值
    tableData: () => [],
    total: 0,
    option: () => {},
    // 是否可以选择
    disabled: false,
    // 是否多选
    multiple: false,
    // 多选个数
    multipleLimit: 100
});
const emit = defineEmits<{
    (e: 'search', value: any): void
    (e: 'change', value: number | string | Array<any>): void
    (e: 'update:changeSelect', value: any): void
}>()

const dialogVisible = ref(false);
const radioValue = ref('');
const selectLabel: any = ref('');
const searchValue = ref('');
let multipleArr: Array<any> = reactive([]);
const page = reactive({
    pageSize: 10,
    pageNum: 1
});
const multipleTableRef = ref<InstanceType<typeof ElTable>>();

const setLabel = (): void => {
    let data = [];
    if (props.multiple) { // 多选
        data = props.tableData.filter(item => {
            return props.option.selectkey ?
                (props.selectValue as Array<any>).includes(item[props.option.selectkey]) :
                (props.selectValue as Array<any>).includes(item.id);
        });
    } else {// 单选
        data = props.tableData.filter(item => {
            return props.option.selectkey ? item[props.option.selectkey] === props.selectValue : item.id === props.selectValue;
        });
    }
    if (data.length > 0 && props.multiple) {
        selectLabel.value = data.map(item => props.option.selectLabel ? item[props.option.selectLabel] : item.text);
    } else if (data.length > 0) {
        selectLabel.value = props.option.selectLabel ? data[0][props.option.selectLabel] : data[0].text;
    } else {
        selectLabel.value = props.selectValue;
    }
};
const showDialog = (): void => {
    if (props.disabled) {
        return;
    }
    dialogVisible.value = true;
};
const selectionChange = (data: Array<any>) => {
    multipleArr = data;
};
const submit = () => {
    if (props.multiple) {
        emit('change', multipleArr);
        emit('update:changeSelect', multipleArr.map(item => props.option.selectkey ? item[props.option.selectkey] : (item as any).id));
    } else {
        const res = props.tableData.find(item => {
            return props.option.selectkey ? item[props.option.selectkey] === radioValue : item.id === radioValue;
        });
        if (res) {
            emit('change', res);
            emit('update:changeSelect', radioValue);
        } else {
            // $alert('请选择', '提示', {
            //     confirmButtonText: '确定',
            // });
        }
    }
    dialogVisible.value = false;
};
const search = () => {
    emit('search', {
        search: searchValue,
        ...page
    });
};
const handleSizeChange = (pageSize: number) => {
    page.pageSize = pageSize;
    search();
};
const keydown = (e: Event) => {
    search();
    e.stopPropagation();
    e.preventDefault();
};
const handleCurrentChange = (pageNum: number) => {
    page.pageNum = pageNum;
    search();
};

watch(() => dialogVisible, (val) => {
    if (!val) {
        radioValue.value = '';
        multipleArr = [];
        multipleTableRef.value!.clearSelection();
    } else {
        page.pageNum = 1;
        page.pageSize = 10;
        searchValue.value = '';
        search();
    }
});
watch(() => props.selectValue, (val) => {
    if (val) {
        setLabel();
    } else {
        selectLabel.value = val;
    }
}, { deep: true, immediate: true })
watch(() => props.tableData, (val) => {
    setLabel();
}, { deep: true, immediate: true })
</script>

<style lang="less" scoped>
.BouncedSelect {
    .boxSelect {
        font-size: 14px;
        font-weight: 400;
        color: #999;
        cursor: pointer;

        i {
            margin-left: 10px;
        }
    }
}
</style>
