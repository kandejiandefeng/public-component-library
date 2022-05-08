declare const _sfc_main: import("vue").DefineComponent<{
    selectValue: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        required: false;
        default: string;
    };
    dialogTitle: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    searchPlaceholder: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    tableData: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
    };
    total: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    option: {
        type: null;
        required: false;
        default: () => void;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    multipleLimit: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, {
    props: {
        selectValue: number | string | Array<any>;
        dialogTitle: string;
        placeholder: string;
        searchPlaceholder: string;
        tableData: Array<any>;
        total: number;
        option: any;
        disabled: boolean;
        multiple: boolean;
        multipleLimit: number;
    };
    emit: {
        (e: 'search', value: any): void;
        (e: 'change', value: number | string | Array<any>): void;
        (e: 'update:changeSelect', value: any): void;
    };
    dialogVisible: import("vue").Ref<boolean>;
    radioValue: import("vue").Ref<string>;
    selectLabel: any;
    searchValue: import("vue").Ref<string>;
    multipleArr: any[];
    page: {
        pageSize: number;
        pageNum: number;
    };
    bouncedTabble: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            data: any[];
            lazy: boolean;
            style: import("vue").CSSProperties;
            className: string;
            tableLayout: "fixed" | "auto";
            border: boolean;
            fit: boolean;
            scrollbarAlwaysOn: boolean;
            stripe: boolean;
            treeProps: {
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined;
            showHeader: boolean;
            showSummary: boolean;
            highlightCurrentRow: boolean;
            defaultExpandAll: boolean;
            selectOnIndeterminate: boolean;
            indent: number;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<any[]>;
                default: () => never[];
            };
            size: StringConstructor;
            width: (StringConstructor | NumberConstructor)[];
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            fit: {
                type: BooleanConstructor;
                default: boolean;
            };
            stripe: BooleanConstructor;
            border: BooleanConstructor;
            rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
            showHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSummary: BooleanConstructor;
            sumText: StringConstructor;
            summaryMethod: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").SummaryMethod<any> | undefined>;
            rowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
            rowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
            cellClassName: import("vue").PropType<string | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => string) | undefined>;
            cellStyle: import("vue").PropType<import("vue").CSSProperties | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => import("vue").CSSProperties) | undefined>;
            headerRowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
            headerRowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
            headerCellClassName: import("vue").PropType<string | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => string) | undefined>;
            headerCellStyle: import("vue").PropType<import("vue").CSSProperties | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => import("vue").CSSProperties) | undefined>;
            highlightCurrentRow: BooleanConstructor;
            currentRowKey: (StringConstructor | NumberConstructor)[];
            emptyText: StringConstructor;
            expandRowKeys: import("vue").PropType<any[] | undefined>;
            defaultExpandAll: BooleanConstructor;
            defaultSort: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").Sort | undefined>;
            tooltipEffect: StringConstructor;
            spanMethod: import("vue").PropType<((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => number[] | {
                rowspan: number;
                colspan: number;
            }) | undefined>;
            selectOnIndeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
            indent: {
                type: NumberConstructor;
                default: number;
            };
            treeProps: {
                type: import("vue").PropType<{
                    hasChildren?: string | undefined;
                    children?: string | undefined;
                } | undefined>;
                default: () => {
                    hasChildren: string;
                    children: string;
                };
            };
            lazy: BooleanConstructor;
            load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
            style: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: () => {};
            };
            className: {
                type: StringConstructor;
                default: string;
            };
            tableLayout: {
                type: import("vue").PropType<"fixed" | "auto">;
                default: string;
            };
            scrollbarAlwaysOn: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onSelect?: ((...args: any[]) => any) | undefined;
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onSelect-all"?: ((...args: any[]) => any) | undefined;
            "onSelection-change"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
            "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onCell-click"?: ((...args: any[]) => any) | undefined;
            "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
            "onRow-click"?: ((...args: any[]) => any) | undefined;
            "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
            "onHeader-click"?: ((...args: any[]) => any) | undefined;
            "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onSort-change"?: ((...args: any[]) => any) | undefined;
            "onFilter-change"?: ((...args: any[]) => any) | undefined;
            "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "data" | "fit" | "stripe" | "border" | "showHeader" | "showSummary" | "highlightCurrentRow" | "defaultExpandAll" | "selectOnIndeterminate" | "indent" | "treeProps" | "lazy" | "style" | "className" | "tableLayout" | "scrollbarAlwaysOn">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "select-all" | "expand-change" | "current-change" | "select" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<any[]>;
                default: () => never[];
            };
            size: StringConstructor;
            width: (StringConstructor | NumberConstructor)[];
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            fit: {
                type: BooleanConstructor;
                default: boolean;
            };
            stripe: BooleanConstructor;
            border: BooleanConstructor;
            rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
            showHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSummary: BooleanConstructor;
            sumText: StringConstructor;
            summaryMethod: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").SummaryMethod<any> | undefined>;
            rowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
            rowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
            cellClassName: import("vue").PropType<string | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => string) | undefined>;
            cellStyle: import("vue").PropType<import("vue").CSSProperties | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => import("vue").CSSProperties) | undefined>;
            headerRowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
            headerRowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
            headerCellClassName: import("vue").PropType<string | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => string) | undefined>;
            headerCellStyle: import("vue").PropType<import("vue").CSSProperties | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => import("vue").CSSProperties) | undefined>;
            highlightCurrentRow: BooleanConstructor;
            currentRowKey: (StringConstructor | NumberConstructor)[];
            emptyText: StringConstructor;
            expandRowKeys: import("vue").PropType<any[] | undefined>;
            defaultExpandAll: BooleanConstructor;
            defaultSort: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").Sort | undefined>;
            tooltipEffect: StringConstructor;
            spanMethod: import("vue").PropType<((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => number[] | {
                rowspan: number;
                colspan: number;
            }) | undefined>;
            selectOnIndeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
            indent: {
                type: NumberConstructor;
                default: number;
            };
            treeProps: {
                type: import("vue").PropType<{
                    hasChildren?: string | undefined;
                    children?: string | undefined;
                } | undefined>;
                default: () => {
                    hasChildren: string;
                    children: string;
                };
            };
            lazy: BooleanConstructor;
            load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
            style: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: () => {};
            };
            className: {
                type: StringConstructor;
                default: string;
            };
            tableLayout: {
                type: import("vue").PropType<"fixed" | "auto">;
                default: string;
            };
            scrollbarAlwaysOn: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onSelect?: ((...args: any[]) => any) | undefined;
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onSelect-all"?: ((...args: any[]) => any) | undefined;
            "onSelection-change"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
            "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onCell-click"?: ((...args: any[]) => any) | undefined;
            "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
            "onRow-click"?: ((...args: any[]) => any) | undefined;
            "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
            "onHeader-click"?: ((...args: any[]) => any) | undefined;
            "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onSort-change"?: ((...args: any[]) => any) | undefined;
            "onFilter-change"?: ((...args: any[]) => any) | undefined;
            "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
        }, {
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
            };
            layout: import("element-plus/es/components/table/src/table-layout").default<any>;
            store: any;
            handleHeaderFooterMousewheel: (event: any, data: any) => void;
            handleMouseLeave: () => void;
            tableId: string;
            tableSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
            isHidden: import("vue").Ref<boolean>;
            isEmpty: import("vue").ComputedRef<boolean>;
            renderExpanded: import("vue").Ref<null>;
            resizeProxyVisible: import("vue").Ref<boolean>;
            resizeState: import("vue").Ref<{
                width: null;
                height: null;
            }>;
            isGroup: import("vue").Ref<boolean>;
            bodyWidth: import("vue").ComputedRef<string>;
            bodyHeight: import("vue").ComputedRef<{
                height: string;
                'max-height'?: undefined;
            } | {
                'max-height': string;
                height?: undefined;
            } | {
                height?: undefined;
                'max-height'?: undefined;
            }>;
            height: import("vue").ComputedRef<string | number | undefined>;
            tableBodyStyles: import("vue").ComputedRef<{
                width: string;
            }>;
            emptyBlockStyle: import("vue").ComputedRef<{
                width: string;
                height: string;
            } | null>;
            debouncedUpdateLayout: import("lodash").DebouncedFunc<() => void>;
            handleFixedMousewheel: (event: any, data: any) => void;
            fixedHeight: import("vue").ComputedRef<{
                bottom: number;
                height?: undefined;
            } | {
                bottom: string;
                height?: undefined;
            } | {
                height: string;
                bottom?: undefined;
            }>;
            fixedBodyHeight: import("vue").ComputedRef<{
                height: string;
                'max-height'?: undefined;
            } | {
                'max-height': string;
                height?: undefined;
            } | {
                height?: undefined;
                'max-height'?: undefined;
            }>;
            setCurrentRow: (row: any) => void;
            getSelectionRows: () => any;
            toggleRowSelection: (row: any, selected: boolean) => void;
            clearSelection: () => void;
            clearFilter: (columnKeys: string[]) => void;
            toggleAllSelection: () => void;
            toggleRowExpansion: (row: any, expanded: boolean) => void;
            clearSort: () => void;
            doLayout: () => void;
            sort: (prop: string, order: string) => void;
            t: import("element-plus").Translator;
            setDragVisible: (visible: boolean) => void;
            context: import("element-plus/es/components/table/src/table/defaults").Table<any>;
            computedSumText: import("vue").ComputedRef<string>;
            computedEmptyText: import("vue").ComputedRef<string>;
            tableLayout: import("vue").ComputedRef<"fixed" | "auto">;
            scrollbarViewStyle: {
                display: string;
                verticalAlign: string;
            };
            scrollBarRef: import("vue").Ref<any>;
            scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
            setScrollLeft: (left?: number | undefined) => void;
            setScrollTop: (top?: number | undefined) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select-all" | "expand-change" | "current-change" | "select" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend")[], string, {
            data: any[];
            lazy: boolean;
            style: import("vue").CSSProperties;
            className: string;
            tableLayout: "fixed" | "auto";
            border: boolean;
            fit: boolean;
            scrollbarAlwaysOn: boolean;
            stripe: boolean;
            treeProps: {
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined;
            showHeader: boolean;
            showSummary: boolean;
            highlightCurrentRow: boolean;
            defaultExpandAll: boolean;
            selectOnIndeterminate: boolean;
            indent: number;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<any[]>;
            default: () => never[];
        };
        size: StringConstructor;
        width: (StringConstructor | NumberConstructor)[];
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").SummaryMethod<any> | undefined>;
        rowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
        rowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
        cellClassName: import("vue").PropType<string | ((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => string) | undefined>;
        cellStyle: import("vue").PropType<import("vue").CSSProperties | ((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => import("vue").CSSProperties) | undefined>;
        headerRowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
        headerRowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
        headerCellClassName: import("vue").PropType<string | ((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => string) | undefined>;
        headerCellStyle: import("vue").PropType<import("vue").CSSProperties | ((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => import("vue").CSSProperties) | undefined>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (StringConstructor | NumberConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: import("vue").PropType<any[] | undefined>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").Sort | undefined>;
        tooltipEffect: StringConstructor;
        spanMethod: import("vue").PropType<((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        }) | undefined>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: import("vue").PropType<{
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined>;
            default: () => {
                hasChildren: string;
                children: string;
            };
        };
        lazy: BooleanConstructor;
        load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
        style: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: import("vue").PropType<"fixed" | "auto">;
            default: string;
        };
        scrollbarAlwaysOn: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onSelect?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
        "onRow-click"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
        "onHeader-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onSort-change"?: ((...args: any[]) => any) | undefined;
        "onFilter-change"?: ((...args: any[]) => any) | undefined;
        "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
        };
        layout: import("element-plus/es/components/table/src/table-layout").default<any>;
        store: any;
        handleHeaderFooterMousewheel: (event: any, data: any) => void;
        handleMouseLeave: () => void;
        tableId: string;
        tableSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
        isHidden: import("vue").Ref<boolean>;
        isEmpty: import("vue").ComputedRef<boolean>;
        renderExpanded: import("vue").Ref<null>;
        resizeProxyVisible: import("vue").Ref<boolean>;
        resizeState: import("vue").Ref<{
            width: null;
            height: null;
        }>;
        isGroup: import("vue").Ref<boolean>;
        bodyWidth: import("vue").ComputedRef<string>;
        bodyHeight: import("vue").ComputedRef<{
            height: string;
            'max-height'?: undefined;
        } | {
            'max-height': string;
            height?: undefined;
        } | {
            height?: undefined;
            'max-height'?: undefined;
        }>;
        height: import("vue").ComputedRef<string | number | undefined>;
        tableBodyStyles: import("vue").ComputedRef<{
            width: string;
        }>;
        emptyBlockStyle: import("vue").ComputedRef<{
            width: string;
            height: string;
        } | null>;
        debouncedUpdateLayout: import("lodash").DebouncedFunc<() => void>;
        handleFixedMousewheel: (event: any, data: any) => void;
        fixedHeight: import("vue").ComputedRef<{
            bottom: number;
            height?: undefined;
        } | {
            bottom: string;
            height?: undefined;
        } | {
            height: string;
            bottom?: undefined;
        }>;
        fixedBodyHeight: import("vue").ComputedRef<{
            height: string;
            'max-height'?: undefined;
        } | {
            'max-height': string;
            height?: undefined;
        } | {
            height?: undefined;
            'max-height'?: undefined;
        }>;
        setCurrentRow: (row: any) => void;
        getSelectionRows: () => any;
        toggleRowSelection: (row: any, selected: boolean) => void;
        clearSelection: () => void;
        clearFilter: (columnKeys: string[]) => void;
        toggleAllSelection: () => void;
        toggleRowExpansion: (row: any, expanded: boolean) => void;
        clearSort: () => void;
        doLayout: () => void;
        sort: (prop: string, order: string) => void;
        t: import("element-plus").Translator;
        setDragVisible: (visible: boolean) => void;
        context: import("element-plus/es/components/table/src/table/defaults").Table<any>;
        computedSumText: import("vue").ComputedRef<string>;
        computedEmptyText: import("vue").ComputedRef<string>;
        tableLayout: import("vue").ComputedRef<"fixed" | "auto">;
        scrollbarViewStyle: {
            display: string;
            verticalAlign: string;
        };
        scrollBarRef: import("vue").Ref<any>;
        scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
        setScrollLeft: (left?: number | undefined) => void;
        setScrollTop: (top?: number | undefined) => void;
    }> & {} & {} & import("vue").ComponentCustomProperties) | undefined>;
    setLabel: () => void;
    showDialog: () => void;
    selectionChange: (data: Array<any>) => void;
    submit: () => void;
    search: () => void;
    handleSizeChange: (pageSize: number) => void;
    keydown: (e: Event) => void;
    handleCurrentChange: (pageNum: number) => void;
    ElDialog: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly appendToBody: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly beforeClose: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").DialogBeforeCloseFn>, unknown, unknown, unknown, unknown>;
        readonly destroyOnClose: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly closeOnClickModal: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly closeOnPressEscape: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly lockScroll: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly modal: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        readonly closeDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        readonly top: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        readonly modelValue: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, true, unknown, unknown>;
        readonly modalClass: StringConstructor;
        readonly width: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], unknown, unknown, unknown, unknown>;
        readonly zIndex: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
        readonly trapFocus: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly center: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly closeIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
        readonly customClass: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly draggable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly fullscreen: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly showClose: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly appendToBody: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly beforeClose: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").DialogBeforeCloseFn>, unknown, unknown, unknown, unknown>;
            readonly destroyOnClose: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly closeOnClickModal: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly closeOnPressEscape: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly lockScroll: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly modal: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            readonly closeDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            readonly top: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            readonly modelValue: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, true, unknown, unknown>;
            readonly modalClass: StringConstructor;
            readonly width: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], unknown, unknown, unknown, unknown>;
            readonly zIndex: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
            readonly trapFocus: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly center: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly closeIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
            readonly customClass: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly draggable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly fullscreen: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly showClose: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        }>> & {
            onClose?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            onOpen?: (() => any) | undefined;
            onOpened?: (() => any) | undefined;
            onClosed?: (() => any) | undefined;
            onOpenAutoFocus?: (() => any) | undefined;
            onCloseAutoFocus?: (() => any) | undefined;
        }>>;
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
        };
        dialogRef: import("vue").Ref<HTMLElement | undefined>;
        headerRef: import("vue").Ref<HTMLElement | undefined>;
        visible: import("vue").Ref<boolean>;
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
        rendered: import("vue").Ref<boolean>;
        zIndex: import("vue").Ref<number>;
        afterEnter: () => void;
        afterLeave: () => void;
        beforeLeave: () => void;
        handleClose: () => void;
        onModalClick: () => void;
        overlayEvent: {
            onClick: (e: MouseEvent) => void;
            onMousedown: (e: MouseEvent) => void;
            onMouseup: (e: MouseEvent) => void;
        };
        draggable: import("vue").ComputedRef<boolean>;
        ElOverlay: import("vue").DefineComponent<{
            readonly mask: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly customMaskEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly overlayClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | string[] | Record<string, boolean>>, unknown, unknown, unknown, unknown>;
            readonly zIndex: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("csstype").ZIndexProperty>, unknown, unknown, unknown, unknown>;
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (evt: MouseEvent) => boolean;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly mask: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly customMaskEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly overlayClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | string[] | Record<string, boolean>>, unknown, unknown, unknown, unknown>;
            readonly zIndex: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("csstype").ZIndexProperty>, unknown, unknown, unknown, unknown>;
        }>> & {
            onClick?: ((evt: MouseEvent) => any) | undefined;
        }, {
            zIndex: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("csstype").ZIndexProperty>, unknown, unknown>;
            mask: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            customMaskEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            overlayClass: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | string[] | Record<string, boolean>>, unknown, unknown>;
        }>;
        ElDialogContent: import("vue").DefineComponent<{
            readonly center: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly closeIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
            readonly customClass: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly draggable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly fullscreen: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly showClose: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        }, {
            Close: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            dialogRef: import("vue").Ref<HTMLElement | undefined>;
            headerRef: import("vue").Ref<HTMLElement | undefined>;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
            };
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
            ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                    readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                ns: {
                    namespace: import("vue").ComputedRef<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                };
                style: import("vue").ComputedRef<import("vue").CSSProperties>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            }>>, {
                size: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
                color: string;
            }>> & Record<string, any>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            close: () => boolean;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly center: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly closeIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
            readonly customClass: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly draggable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly fullscreen: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly showClose: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        }>> & {
            onClose?: (() => any) | undefined;
        }, {
            title: string;
            center: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            draggable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            showClose: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            closeIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
            customClass: string;
            fullscreen: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        open: () => boolean;
        opened: () => boolean;
        close: () => boolean;
        closed: () => boolean;
        "update:modelValue": (value: boolean) => boolean;
        openAutoFocus: () => boolean;
        closeAutoFocus: () => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly appendToBody: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly beforeClose: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").DialogBeforeCloseFn>, unknown, unknown, unknown, unknown>;
        readonly destroyOnClose: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly closeOnClickModal: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly closeOnPressEscape: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly lockScroll: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly modal: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        readonly closeDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        readonly top: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        readonly modelValue: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, true, unknown, unknown>;
        readonly modalClass: StringConstructor;
        readonly width: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], unknown, unknown, unknown, unknown>;
        readonly zIndex: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
        readonly trapFocus: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly center: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly closeIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
        readonly customClass: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly draggable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly fullscreen: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly showClose: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    }>> & {
        onClose?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onOpen?: (() => any) | undefined;
        onOpened?: (() => any) | undefined;
        onClosed?: (() => any) | undefined;
        onOpenAutoFocus?: (() => any) | undefined;
        onCloseAutoFocus?: (() => any) | undefined;
    }, {
        zIndex: number;
        top: string;
        width: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        title: string;
        center: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        draggable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        openDelay: number;
        showClose: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        closeIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        customClass: string;
        fullscreen: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        appendToBody: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        beforeClose: import("element-plus").DialogBeforeCloseFn;
        destroyOnClose: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        closeOnClickModal: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        closeOnPressEscape: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        lockScroll: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        modal: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        closeDelay: number;
        trapFocus: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    }>> & Record<string, any>;
    ElForm: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly model: ObjectConstructor;
        readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>, unknown, unknown, unknown, unknown>;
        readonly labelPosition: StringConstructor;
        readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
        readonly labelSuffix: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly inline: BooleanConstructor;
        readonly inlineMessage: BooleanConstructor;
        readonly statusIcon: BooleanConstructor;
        readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "small" | "default" | "large", unknown>;
        readonly disabled: BooleanConstructor;
        readonly validateOnRuleChange: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly hideRequiredAsterisk: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly scrollToError: BooleanConstructor;
    }, {
        COMPONENT_NAME: string;
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly model: ObjectConstructor;
            readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>, unknown, unknown, unknown, unknown>;
            readonly labelPosition: StringConstructor;
            readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
            readonly labelSuffix: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly inline: BooleanConstructor;
            readonly inlineMessage: BooleanConstructor;
            readonly statusIcon: BooleanConstructor;
            readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "small" | "default" | "large", unknown>;
            readonly disabled: BooleanConstructor;
            readonly validateOnRuleChange: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly hideRequiredAsterisk: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly scrollToError: BooleanConstructor;
        }>> & {
            onValidate?: ((prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => any) | undefined;
        }>>;
        emit: (event: "validate", prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => void;
        fields: import("element-plus").FormItemContext[];
        formSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
        };
        formClasses: import("vue").ComputedRef<(string | {
            [x: string]: string | boolean | undefined;
        })[]>;
        addField: (field: import("element-plus").FormItemContext) => void;
        removeField: (field: import("element-plus").FormItemContext) => void;
        resetFields: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
        clearValidate: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
        isValidatable: import("vue").ComputedRef<boolean>;
        obtainValidateFields: (props: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp>) => import("element-plus").FormItemContext[];
        validate: (callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
        doValidateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => Promise<boolean>;
        validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
        scrollToField: (prop: import("element-plus").FormItemProp) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        validate: (prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly model: ObjectConstructor;
        readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>, unknown, unknown, unknown, unknown>;
        readonly labelPosition: StringConstructor;
        readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
        readonly labelSuffix: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly inline: BooleanConstructor;
        readonly inlineMessage: BooleanConstructor;
        readonly statusIcon: BooleanConstructor;
        readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "small" | "default" | "large", unknown>;
        readonly disabled: BooleanConstructor;
        readonly validateOnRuleChange: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly hideRequiredAsterisk: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly scrollToError: BooleanConstructor;
    }>> & {
        onValidate?: ((prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => any) | undefined;
    }, {
        size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "small" | "default" | "large", unknown>;
        disabled: boolean;
        rules: Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>;
        labelWidth: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        labelSuffix: string;
        showMessage: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        validateOnRuleChange: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        hideRequiredAsterisk: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        inline: boolean;
        inlineMessage: boolean;
        statusIcon: boolean;
        scrollToError: boolean;
    }>> & {
        FormItem: import("vue").DefineComponent<{
            readonly label: StringConstructor;
            readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
            readonly prop: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").FormItemProp>, unknown, unknown, unknown, unknown>;
            readonly required: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
            readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>, unknown, unknown, unknown, unknown>;
            readonly error: StringConstructor;
            readonly validateStatus: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "error" | "success" | "validating", unknown>;
            readonly for: StringConstructor;
            readonly inlineMessage: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
            readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "small" | "default" | "large", unknown>;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly label: StringConstructor;
                readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
                readonly prop: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").FormItemProp>, unknown, unknown, unknown, unknown>;
                readonly required: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
                readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>, unknown, unknown, unknown, unknown>;
                readonly error: StringConstructor;
                readonly validateStatus: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "error" | "success" | "validating", unknown>;
                readonly for: StringConstructor;
                readonly inlineMessage: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
                readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "small" | "default" | "large", unknown>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            formContext: import("element-plus").FormContext | undefined;
            parentFormItemContext: import("element-plus").FormItemContext | undefined;
            _size: import("vue").ComputedRef<"" | "small" | "default" | "large">;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
            };
            validateState: import("vue").Ref<"" | "error" | "success" | "validating">;
            validateStateDebounced: Readonly<import("vue").Ref<"" | "error" | "success" | "validating">>;
            validateMessage: import("vue").Ref<string>;
            formItemRef: import("vue").Ref<HTMLDivElement | undefined>;
            initialValue: any;
            isResettingField: boolean;
            labelStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            contentStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            formItemClasses: import("vue").ComputedRef<(string | {
                [x: string]: boolean | undefined;
            })[]>;
            _inlineMessage: import("vue").ComputedRef<boolean>;
            validateClasses: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            propString: import("vue").ComputedRef<string>;
            labelFor: import("vue").ComputedRef<string>;
            isNested: boolean;
            fieldValue: import("vue").ComputedRef<any>;
            _rules: import("vue").ComputedRef<import("element-plus").FormItemRule[]>;
            validateEnabled: import("vue").ComputedRef<boolean>;
            getFilteredRule: (trigger: string) => import("async-validator").RuleItem[];
            isRequired: import("vue").ComputedRef<boolean>;
            shouldShowError: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
            currentLabel: import("vue").ComputedRef<string>;
            setValidationState: (state: "" | "error" | "success" | "validating") => void;
            onValidationFailed: (error: import("element-plus").FormValidateFailure) => void;
            onValidationSucceeded: () => void;
            doValidate: (rules: import("async-validator").RuleItem[]) => Promise<true>;
            validate: (trigger: string, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
            clearValidate: () => void;
            resetField: () => void;
            context: import("element-plus").FormItemContext;
            FormLabelWrap: import("vue").DefineComponent<{
                isAutoWidth: BooleanConstructor;
                updateAll: BooleanConstructor;
            }, () => JSX.Element | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                isAutoWidth: BooleanConstructor;
                updateAll: BooleanConstructor;
            }>>, {
                isAutoWidth: boolean;
                updateAll: boolean;
            }>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly label: StringConstructor;
            readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
            readonly prop: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").FormItemProp>, unknown, unknown, unknown, unknown>;
            readonly required: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
            readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>, unknown, unknown, unknown, unknown>;
            readonly error: StringConstructor;
            readonly validateStatus: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "error" | "success" | "validating", unknown>;
            readonly for: StringConstructor;
            readonly inlineMessage: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
            readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "small" | "default" | "large", unknown>;
        }>>, {
            required: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "small" | "default" | "large", unknown>;
            rules: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>, unknown, unknown>;
            labelWidth: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            showMessage: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            inlineMessage: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
            prop: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").FormItemProp>, unknown, unknown>;
            validateStatus: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "error" | "success" | "validating", unknown>;
        }>;
    };
    ElFormItem: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly label: StringConstructor;
        readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
        readonly prop: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").FormItemProp>, unknown, unknown, unknown, unknown>;
        readonly required: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
        readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>, unknown, unknown, unknown, unknown>;
        readonly error: StringConstructor;
        readonly validateStatus: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "error" | "success" | "validating", unknown>;
        readonly for: StringConstructor;
        readonly inlineMessage: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
        readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "small" | "default" | "large", unknown>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly label: StringConstructor;
            readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
            readonly prop: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").FormItemProp>, unknown, unknown, unknown, unknown>;
            readonly required: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
            readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>, unknown, unknown, unknown, unknown>;
            readonly error: StringConstructor;
            readonly validateStatus: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "error" | "success" | "validating", unknown>;
            readonly for: StringConstructor;
            readonly inlineMessage: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
            readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "small" | "default" | "large", unknown>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        formContext: import("element-plus").FormContext | undefined;
        parentFormItemContext: import("element-plus").FormItemContext | undefined;
        _size: import("vue").ComputedRef<"" | "small" | "default" | "large">;
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
        };
        validateState: import("vue").Ref<"" | "error" | "success" | "validating">;
        validateStateDebounced: Readonly<import("vue").Ref<"" | "error" | "success" | "validating">>;
        validateMessage: import("vue").Ref<string>;
        formItemRef: import("vue").Ref<HTMLDivElement | undefined>;
        initialValue: any;
        isResettingField: boolean;
        labelStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        contentStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        formItemClasses: import("vue").ComputedRef<(string | {
            [x: string]: boolean | undefined;
        })[]>;
        _inlineMessage: import("vue").ComputedRef<boolean>;
        validateClasses: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        propString: import("vue").ComputedRef<string>;
        labelFor: import("vue").ComputedRef<string>;
        isNested: boolean;
        fieldValue: import("vue").ComputedRef<any>;
        _rules: import("vue").ComputedRef<import("element-plus").FormItemRule[]>;
        validateEnabled: import("vue").ComputedRef<boolean>;
        getFilteredRule: (trigger: string) => import("async-validator").RuleItem[];
        isRequired: import("vue").ComputedRef<boolean>;
        shouldShowError: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
        currentLabel: import("vue").ComputedRef<string>;
        setValidationState: (state: "" | "error" | "success" | "validating") => void;
        onValidationFailed: (error: import("element-plus").FormValidateFailure) => void;
        onValidationSucceeded: () => void;
        doValidate: (rules: import("async-validator").RuleItem[]) => Promise<true>;
        validate: (trigger: string, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
        clearValidate: () => void;
        resetField: () => void;
        context: import("element-plus").FormItemContext;
        FormLabelWrap: import("vue").DefineComponent<{
            isAutoWidth: BooleanConstructor;
            updateAll: BooleanConstructor;
        }, () => JSX.Element | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            isAutoWidth: BooleanConstructor;
            updateAll: BooleanConstructor;
        }>>, {
            isAutoWidth: boolean;
            updateAll: boolean;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly label: StringConstructor;
        readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
        readonly prop: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").FormItemProp>, unknown, unknown, unknown, unknown>;
        readonly required: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
        readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>, unknown, unknown, unknown, unknown>;
        readonly error: StringConstructor;
        readonly validateStatus: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "error" | "success" | "validating", unknown>;
        readonly for: StringConstructor;
        readonly inlineMessage: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
        readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "small" | "default" | "large", unknown>;
    }>>, {
        required: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "small" | "default" | "large", unknown>;
        rules: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>, unknown, unknown>;
        labelWidth: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        showMessage: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        inlineMessage: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
        prop: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").FormItemProp>, unknown, unknown>;
        validateStatus: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "error" | "success" | "validating", unknown>;
    }>>;
    ElButton: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "small" | "default" | "large", never>;
        readonly disabled: BooleanConstructor;
        readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "success" | "primary" | "warning" | "info" | "danger" | "text", unknown>;
        readonly icon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
        readonly nativeType: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "button", unknown, "button" | "submit" | "reset", unknown>;
        readonly loading: BooleanConstructor;
        readonly loadingIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, () => import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, unknown, unknown, unknown>;
        readonly plain: BooleanConstructor;
        readonly autofocus: BooleanConstructor;
        readonly round: BooleanConstructor;
        readonly circle: BooleanConstructor;
        readonly color: StringConstructor;
        readonly dark: BooleanConstructor;
        readonly autoInsertSpace: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "small" | "default" | "large", never>;
            readonly disabled: BooleanConstructor;
            readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "success" | "primary" | "warning" | "info" | "danger" | "text", unknown>;
            readonly icon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
            readonly nativeType: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "button", unknown, "button" | "submit" | "reset", unknown>;
            readonly loading: BooleanConstructor;
            readonly loadingIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, () => import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, unknown, unknown, unknown>;
            readonly plain: BooleanConstructor;
            readonly autofocus: BooleanConstructor;
            readonly round: BooleanConstructor;
            readonly circle: BooleanConstructor;
            readonly color: StringConstructor;
            readonly dark: BooleanConstructor;
            readonly autoInsertSpace: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
        }>> & {
            onClick?: ((evt: MouseEvent) => any) | undefined;
        }>>;
        emit: (event: "click", evt: MouseEvent) => void;
        slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        buttonGroupContext: import("element-plus").ButtonGroupContext | undefined;
        globalConfig: import("vue").Ref<import("element-plus").ButtonConfigContext | undefined>;
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
        };
        form: import("element-plus").FormContext | undefined;
        _size: import("vue").ComputedRef<"" | "small" | "default" | "large">;
        _disabled: import("vue").ComputedRef<boolean>;
        _ref: import("vue").Ref<HTMLButtonElement | undefined>;
        _type: import("vue").ComputedRef<"" | "default" | "success" | "primary" | "warning" | "info" | "danger" | "text">;
        autoInsertSpace: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
        shouldAddSpace: import("vue").ComputedRef<boolean>;
        buttonStyle: import("vue").ComputedRef<Record<string, string>>;
        handleClick: (evt: MouseEvent) => void;
        ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
            };
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        }>>, {
            size: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
            color: string;
        }>> & Record<string, any>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (evt: MouseEvent) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "small" | "default" | "large", never>;
        readonly disabled: BooleanConstructor;
        readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "success" | "primary" | "warning" | "info" | "danger" | "text", unknown>;
        readonly icon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
        readonly nativeType: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "button", unknown, "button" | "submit" | "reset", unknown>;
        readonly loading: BooleanConstructor;
        readonly loadingIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, () => import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, unknown, unknown, unknown>;
        readonly plain: BooleanConstructor;
        readonly autofocus: BooleanConstructor;
        readonly round: BooleanConstructor;
        readonly circle: BooleanConstructor;
        readonly color: StringConstructor;
        readonly dark: BooleanConstructor;
        readonly autoInsertSpace: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }, {
        type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "success" | "primary" | "warning" | "info" | "danger" | "text", unknown>;
        icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
        loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        autoInsertSpace: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
        disabled: boolean;
        loading: boolean;
        plain: boolean;
        autofocus: boolean;
        round: boolean;
        circle: boolean;
        dark: boolean;
    }>> & {
        ButtonGroup: import("vue").DefineComponent<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "small" | "default" | "large", never>;
            readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "success" | "primary" | "warning" | "info" | "danger" | "text", unknown>;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "small" | "default" | "large", never>;
                readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "success" | "primary" | "warning" | "info" | "danger" | "text", unknown>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
            };
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "small" | "default" | "large", never>;
            readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "success" | "primary" | "warning" | "info" | "danger" | "text", unknown>;
        }>>, {
            type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "success" | "primary" | "warning" | "info" | "danger" | "text", unknown>;
            size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
        }>;
    };
    ElPagination: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly total: NumberConstructor;
        readonly pageSize: NumberConstructor;
        readonly defaultPageSize: NumberConstructor;
        readonly currentPage: NumberConstructor;
        readonly defaultCurrentPage: NumberConstructor;
        readonly pageCount: NumberConstructor;
        readonly pagerCount: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 7, unknown, unknown, unknown>;
        readonly layout: import("element-plus/es/utils").BuildPropReturn<StringConstructor, string, unknown, unknown, unknown>;
        readonly pageSizes: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number[]>, () => [10, 20, 30, 40, 50, 100], unknown, unknown, unknown>;
        readonly popperClass: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly prevText: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly nextText: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly small: BooleanConstructor;
        readonly background: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly hideOnSinglePage: BooleanConstructor;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:current-page': (val: number) => boolean;
        'update:page-size': (val: number) => boolean;
        'size-change': (val: number) => boolean;
        'current-change': (val: number) => boolean;
        'prev-click': (val: number) => boolean;
        'next-click': (val: number) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly total: NumberConstructor;
        readonly pageSize: NumberConstructor;
        readonly defaultPageSize: NumberConstructor;
        readonly currentPage: NumberConstructor;
        readonly defaultCurrentPage: NumberConstructor;
        readonly pageCount: NumberConstructor;
        readonly pagerCount: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 7, unknown, unknown, unknown>;
        readonly layout: import("element-plus/es/utils").BuildPropReturn<StringConstructor, string, unknown, unknown, unknown>;
        readonly pageSizes: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number[]>, () => [10, 20, 30, 40, 50, 100], unknown, unknown, unknown>;
        readonly popperClass: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly prevText: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly nextText: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly small: BooleanConstructor;
        readonly background: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly hideOnSinglePage: BooleanConstructor;
    }>> & {
        "onUpdate:current-page"?: ((val: number) => any) | undefined;
        "onUpdate:page-size"?: ((val: number) => any) | undefined;
        "onSize-change"?: ((val: number) => any) | undefined;
        "onCurrent-change"?: ((val: number) => any) | undefined;
        "onPrev-click"?: ((val: number) => any) | undefined;
        "onNext-click"?: ((val: number) => any) | undefined;
    }, {
        small: boolean;
        disabled: boolean;
        popperClass: string;
        background: boolean;
        layout: string;
        pagerCount: number;
        pageSizes: number[];
        prevText: string;
        nextText: string;
        hideOnSinglePage: boolean;
    }>> & Record<string, any>;
    ElTable: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        data: {
            type: import("vue").PropType<any[]>;
            default: () => never[];
        };
        size: StringConstructor;
        width: (StringConstructor | NumberConstructor)[];
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").SummaryMethod<any> | undefined>;
        rowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
        rowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
        cellClassName: import("vue").PropType<string | ((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => string) | undefined>;
        cellStyle: import("vue").PropType<import("vue").CSSProperties | ((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => import("vue").CSSProperties) | undefined>;
        headerRowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
        headerRowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
        headerCellClassName: import("vue").PropType<string | ((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => string) | undefined>;
        headerCellStyle: import("vue").PropType<import("vue").CSSProperties | ((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => import("vue").CSSProperties) | undefined>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (StringConstructor | NumberConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: import("vue").PropType<any[] | undefined>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").Sort | undefined>;
        tooltipEffect: StringConstructor;
        spanMethod: import("vue").PropType<((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        }) | undefined>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: import("vue").PropType<{
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined>;
            default: () => {
                hasChildren: string;
                children: string;
            };
        };
        lazy: BooleanConstructor;
        load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
        style: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: import("vue").PropType<"fixed" | "auto">;
            default: string;
        };
        scrollbarAlwaysOn: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
        };
        layout: import("element-plus/es/components/table/src/table-layout").default<any>;
        store: any;
        handleHeaderFooterMousewheel: (event: any, data: any) => void;
        handleMouseLeave: () => void;
        tableId: string;
        tableSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
        isHidden: import("vue").Ref<boolean>;
        isEmpty: import("vue").ComputedRef<boolean>;
        renderExpanded: import("vue").Ref<null>;
        resizeProxyVisible: import("vue").Ref<boolean>;
        resizeState: import("vue").Ref<{
            width: null;
            height: null;
        }>;
        isGroup: import("vue").Ref<boolean>;
        bodyWidth: import("vue").ComputedRef<string>;
        bodyHeight: import("vue").ComputedRef<{
            height: string;
            'max-height'?: undefined;
        } | {
            'max-height': string;
            height?: undefined;
        } | {
            height?: undefined;
            'max-height'?: undefined;
        }>;
        height: import("vue").ComputedRef<string | number | undefined>;
        tableBodyStyles: import("vue").ComputedRef<{
            width: string;
        }>;
        emptyBlockStyle: import("vue").ComputedRef<{
            width: string;
            height: string;
        } | null>;
        debouncedUpdateLayout: import("lodash").DebouncedFunc<() => void>;
        handleFixedMousewheel: (event: any, data: any) => void;
        fixedHeight: import("vue").ComputedRef<{
            bottom: number;
            height?: undefined;
        } | {
            bottom: string;
            height?: undefined;
        } | {
            height: string;
            bottom?: undefined;
        }>;
        fixedBodyHeight: import("vue").ComputedRef<{
            height: string;
            'max-height'?: undefined;
        } | {
            'max-height': string;
            height?: undefined;
        } | {
            height?: undefined;
            'max-height'?: undefined;
        }>;
        setCurrentRow: (row: any) => void;
        getSelectionRows: () => any;
        toggleRowSelection: (row: any, selected: boolean) => void;
        clearSelection: () => void;
        clearFilter: (columnKeys: string[]) => void;
        toggleAllSelection: () => void;
        toggleRowExpansion: (row: any, expanded: boolean) => void;
        clearSort: () => void;
        doLayout: () => void;
        sort: (prop: string, order: string) => void;
        t: import("element-plus").Translator;
        setDragVisible: (visible: boolean) => void;
        context: import("element-plus/es/components/table/src/table/defaults").Table<any>;
        computedSumText: import("vue").ComputedRef<string>;
        computedEmptyText: import("vue").ComputedRef<string>;
        tableLayout: import("vue").ComputedRef<"fixed" | "auto">;
        scrollbarViewStyle: {
            display: string;
            verticalAlign: string;
        };
        scrollBarRef: import("vue").Ref<any>;
        scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
        setScrollLeft: (left?: number | undefined) => void;
        setScrollTop: (top?: number | undefined) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select-all" | "expand-change" | "current-change" | "select" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend")[], "select-all" | "expand-change" | "current-change" | "select" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<any[]>;
            default: () => never[];
        };
        size: StringConstructor;
        width: (StringConstructor | NumberConstructor)[];
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").SummaryMethod<any> | undefined>;
        rowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
        rowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
        cellClassName: import("vue").PropType<string | ((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => string) | undefined>;
        cellStyle: import("vue").PropType<import("vue").CSSProperties | ((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => import("vue").CSSProperties) | undefined>;
        headerRowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
        headerRowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
        headerCellClassName: import("vue").PropType<string | ((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => string) | undefined>;
        headerCellStyle: import("vue").PropType<import("vue").CSSProperties | ((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => import("vue").CSSProperties) | undefined>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (StringConstructor | NumberConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: import("vue").PropType<any[] | undefined>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").Sort | undefined>;
        tooltipEffect: StringConstructor;
        spanMethod: import("vue").PropType<((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        }) | undefined>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: import("vue").PropType<{
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined>;
            default: () => {
                hasChildren: string;
                children: string;
            };
        };
        lazy: BooleanConstructor;
        load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
        style: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: import("vue").PropType<"fixed" | "auto">;
            default: string;
        };
        scrollbarAlwaysOn: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onSelect?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
        "onRow-click"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
        "onHeader-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onSort-change"?: ((...args: any[]) => any) | undefined;
        "onFilter-change"?: ((...args: any[]) => any) | undefined;
        "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    }, {
        data: any[];
        lazy: boolean;
        style: import("vue").CSSProperties;
        className: string;
        tableLayout: "fixed" | "auto";
        border: boolean;
        fit: boolean;
        scrollbarAlwaysOn: boolean;
        stripe: boolean;
        treeProps: {
            hasChildren?: string | undefined;
            children?: string | undefined;
        } | undefined;
        showHeader: boolean;
        showSummary: boolean;
        highlightCurrentRow: boolean;
        defaultExpandAll: boolean;
        selectOnIndeterminate: boolean;
        indent: number;
    }>> & {
        TableColumn: import("vue").DefineComponent<{
            type: {
                type: StringConstructor;
                default: string;
            };
            label: StringConstructor;
            className: StringConstructor;
            labelClassName: StringConstructor;
            property: StringConstructor;
            prop: StringConstructor;
            width: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            minWidth: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            renderHeader: import("vue").PropType<(data: {
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                $index: number;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            sortable: {
                type: (StringConstructor | BooleanConstructor)[];
                default: boolean;
            };
            sortMethod: import("vue").PropType<(a: any, b: any) => number>;
            sortBy: import("vue").PropType<string | string[] | ((row: any, index: number) => string)>;
            resizable: {
                type: BooleanConstructor;
                default: boolean;
            };
            columnKey: StringConstructor;
            align: StringConstructor;
            headerAlign: StringConstructor;
            showTooltipWhenOverflow: BooleanConstructor;
            showOverflowTooltip: BooleanConstructor;
            fixed: (StringConstructor | BooleanConstructor)[];
            formatter: import("vue").PropType<(row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cellValue: any, index: number) => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            selectable: import("vue").PropType<(row: any, index: number) => boolean>;
            reserveSelection: BooleanConstructor;
            filterMethod: import("vue").PropType<import("element-plus/es/components/table/src/table-column/defaults").FilterMethods<any>>;
            filteredValue: import("vue").PropType<string[]>;
            filters: import("vue").PropType<import("element-plus/es/components/table/src/table-column/defaults").Filters>;
            filterPlacement: StringConstructor;
            filterMultiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            index: import("vue").PropType<number | ((index: number) => number)>;
            sortOrders: {
                type: import("vue").PropType<("ascending" | "descending" | null)[]>;
                default: () => (string | null)[];
                validator: (val: ("ascending" | "descending" | null)[]) => boolean;
            };
        }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: StringConstructor;
                default: string;
            };
            label: StringConstructor;
            className: StringConstructor;
            labelClassName: StringConstructor;
            property: StringConstructor;
            prop: StringConstructor;
            width: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            minWidth: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            renderHeader: import("vue").PropType<(data: {
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                $index: number;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            sortable: {
                type: (StringConstructor | BooleanConstructor)[];
                default: boolean;
            };
            sortMethod: import("vue").PropType<(a: any, b: any) => number>;
            sortBy: import("vue").PropType<string | string[] | ((row: any, index: number) => string)>;
            resizable: {
                type: BooleanConstructor;
                default: boolean;
            };
            columnKey: StringConstructor;
            align: StringConstructor;
            headerAlign: StringConstructor;
            showTooltipWhenOverflow: BooleanConstructor;
            showOverflowTooltip: BooleanConstructor;
            fixed: (StringConstructor | BooleanConstructor)[];
            formatter: import("vue").PropType<(row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cellValue: any, index: number) => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            selectable: import("vue").PropType<(row: any, index: number) => boolean>;
            reserveSelection: BooleanConstructor;
            filterMethod: import("vue").PropType<import("element-plus/es/components/table/src/table-column/defaults").FilterMethods<any>>;
            filteredValue: import("vue").PropType<string[]>;
            filters: import("vue").PropType<import("element-plus/es/components/table/src/table-column/defaults").Filters>;
            filterPlacement: StringConstructor;
            filterMultiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            index: import("vue").PropType<number | ((index: number) => number)>;
            sortOrders: {
                type: import("vue").PropType<("ascending" | "descending" | null)[]>;
                default: () => (string | null)[];
                validator: (val: ("ascending" | "descending" | null)[]) => boolean;
            };
        }>>, {
            type: string;
            width: string | number;
            minWidth: string | number;
            sortOrders: ("ascending" | "descending" | null)[];
            sortable: string | boolean;
            resizable: boolean;
            showTooltipWhenOverflow: boolean;
            showOverflowTooltip: boolean;
            reserveSelection: boolean;
            filterMultiple: boolean;
        }>;
    };
    ElTableColumn: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        type: {
            type: StringConstructor;
            default: string;
        };
        label: StringConstructor;
        className: StringConstructor;
        labelClassName: StringConstructor;
        property: StringConstructor;
        prop: StringConstructor;
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        minWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        renderHeader: import("vue").PropType<(data: {
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            $index: number;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        sortable: {
            type: (StringConstructor | BooleanConstructor)[];
            default: boolean;
        };
        sortMethod: import("vue").PropType<(a: any, b: any) => number>;
        sortBy: import("vue").PropType<string | string[] | ((row: any, index: number) => string)>;
        resizable: {
            type: BooleanConstructor;
            default: boolean;
        };
        columnKey: StringConstructor;
        align: StringConstructor;
        headerAlign: StringConstructor;
        showTooltipWhenOverflow: BooleanConstructor;
        showOverflowTooltip: BooleanConstructor;
        fixed: (StringConstructor | BooleanConstructor)[];
        formatter: import("vue").PropType<(row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cellValue: any, index: number) => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        selectable: import("vue").PropType<(row: any, index: number) => boolean>;
        reserveSelection: BooleanConstructor;
        filterMethod: import("vue").PropType<import("element-plus/es/components/table/src/table-column/defaults").FilterMethods<any>>;
        filteredValue: import("vue").PropType<string[]>;
        filters: import("vue").PropType<import("element-plus/es/components/table/src/table-column/defaults").Filters>;
        filterPlacement: StringConstructor;
        filterMultiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        index: import("vue").PropType<number | ((index: number) => number)>;
        sortOrders: {
            type: import("vue").PropType<("ascending" | "descending" | null)[]>;
            default: () => (string | null)[];
            validator: (val: ("ascending" | "descending" | null)[]) => boolean;
        };
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
        };
        label: StringConstructor;
        className: StringConstructor;
        labelClassName: StringConstructor;
        property: StringConstructor;
        prop: StringConstructor;
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        minWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        renderHeader: import("vue").PropType<(data: {
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            $index: number;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        sortable: {
            type: (StringConstructor | BooleanConstructor)[];
            default: boolean;
        };
        sortMethod: import("vue").PropType<(a: any, b: any) => number>;
        sortBy: import("vue").PropType<string | string[] | ((row: any, index: number) => string)>;
        resizable: {
            type: BooleanConstructor;
            default: boolean;
        };
        columnKey: StringConstructor;
        align: StringConstructor;
        headerAlign: StringConstructor;
        showTooltipWhenOverflow: BooleanConstructor;
        showOverflowTooltip: BooleanConstructor;
        fixed: (StringConstructor | BooleanConstructor)[];
        formatter: import("vue").PropType<(row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cellValue: any, index: number) => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        selectable: import("vue").PropType<(row: any, index: number) => boolean>;
        reserveSelection: BooleanConstructor;
        filterMethod: import("vue").PropType<import("element-plus/es/components/table/src/table-column/defaults").FilterMethods<any>>;
        filteredValue: import("vue").PropType<string[]>;
        filters: import("vue").PropType<import("element-plus/es/components/table/src/table-column/defaults").Filters>;
        filterPlacement: StringConstructor;
        filterMultiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        index: import("vue").PropType<number | ((index: number) => number)>;
        sortOrders: {
            type: import("vue").PropType<("ascending" | "descending" | null)[]>;
            default: () => (string | null)[];
            validator: (val: ("ascending" | "descending" | null)[]) => boolean;
        };
    }>>, {
        type: string;
        width: string | number;
        minWidth: string | number;
        sortOrders: ("ascending" | "descending" | null)[];
        sortable: string | boolean;
        resizable: boolean;
        showTooltipWhenOverflow: boolean;
        showOverflowTooltip: boolean;
        reserveSelection: boolean;
        filterMultiple: boolean;
    }>>;
    ElRadio: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
        readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly border: BooleanConstructor;
        readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "small" | "default" | "large", never>;
        readonly disabled: BooleanConstructor;
        readonly label: import("element-plus/es/utils").BuildPropReturn<(StringConstructor | BooleanConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
    }, {
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
        };
        focus: import("vue").Ref<boolean>;
        isGroup: import("vue").ComputedRef<boolean>;
        modelValue: import("vue").WritableComputedRef<import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
        tabIndex: import("vue").ComputedRef<0 | -1>;
        size: import("vue").ComputedRef<"" | "small" | "default" | "large">;
        disabled: import("vue").ComputedRef<boolean>;
        radioRef: import("vue").Ref<HTMLInputElement | undefined>;
        handleChange: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (val: string | number | boolean) => boolean;
        change: (val: string | number | boolean) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
        readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly border: BooleanConstructor;
        readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "small" | "default" | "large", never>;
        readonly disabled: BooleanConstructor;
        readonly label: import("element-plus/es/utils").BuildPropReturn<(StringConstructor | BooleanConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
    }>> & {
        onChange?: ((val: string | number | boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
    }, {
        size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
        disabled: boolean;
        name: string;
        label: import("element-plus/es/utils").BuildPropType<(StringConstructor | BooleanConstructor | NumberConstructor)[], unknown, unknown>;
        modelValue: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
        border: boolean;
    }>> & {
        RadioButton: import("vue").DefineComponent<{
            readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "small" | "default" | "large", never>;
            readonly disabled: BooleanConstructor;
            readonly label: import("element-plus/es/utils").BuildPropReturn<(StringConstructor | BooleanConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
        }, {
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
            };
            isGroup: import("vue").ComputedRef<boolean>;
            size: import("vue").ComputedRef<"" | "small" | "default" | "large">;
            disabled: import("vue").ComputedRef<boolean>;
            tabIndex: import("vue").ComputedRef<0 | -1>;
            modelValue: import("vue").WritableComputedRef<import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
            focus: import("vue").Ref<boolean>;
            activeStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            radioRef: import("vue").Ref<HTMLInputElement | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "small" | "default" | "large", never>;
            readonly disabled: BooleanConstructor;
            readonly label: import("element-plus/es/utils").BuildPropReturn<(StringConstructor | BooleanConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
        }>>, {
            size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
            disabled: boolean;
            name: string;
            label: import("element-plus/es/utils").BuildPropType<(StringConstructor | BooleanConstructor | NumberConstructor)[], unknown, unknown>;
        }>;
        RadioGroup: import("vue").DefineComponent<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "small" | "default" | "large", never>;
            readonly disabled: BooleanConstructor;
            readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
            readonly fill: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly textColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        }, {
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
            };
            radioGroupRef: import("vue").Ref<HTMLDivElement | undefined>;
            handleKeydown: (e: KeyboardEvent) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (val: string | number | boolean) => boolean;
            change: (val: string | number | boolean) => boolean;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "small" | "default" | "large", never>;
            readonly disabled: BooleanConstructor;
            readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
            readonly fill: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly textColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        }>> & {
            onChange?: ((val: string | number | boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
        }, {
            size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
            disabled: boolean;
            fill: string;
            modelValue: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
            textColor: string;
        }>;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("search" | "change" | "update:changeSelect")[], "search" | "change" | "update:changeSelect", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    selectValue: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        required: false;
        default: string;
    };
    dialogTitle: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    searchPlaceholder: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    tableData: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
    };
    total: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    option: {
        type: null;
        required: false;
        default: () => void;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    multipleLimit: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>> & {
    onSearch?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:changeSelect"?: ((...args: any[]) => any) | undefined;
}, {
    placeholder: string;
    selectValue: string | number | unknown[];
    dialogTitle: string;
    searchPlaceholder: string;
    tableData: unknown[];
    total: number;
    option: any;
    disabled: boolean;
    multiple: boolean;
    multipleLimit: number;
}>;
export default _sfc_main;
