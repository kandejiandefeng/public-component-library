export interface BouncedSelectProps {
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