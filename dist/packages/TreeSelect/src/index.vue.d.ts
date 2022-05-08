declare const _sfc_main: import("vue").DefineComponent<{
    value: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    tree: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
    };
    defaultProps: {
        type: null;
        required: false;
        default: () => {
            children: string;
            label: string;
            key: string;
        };
    };
}, {
    props: {
        value: string;
        tree: Array<any>;
        defaultProps: any;
    };
    emit: (e: 'update:valueChange', value: any) => void;
    expandOnClickNode: import("vue").Ref<boolean>;
    options: never[];
    selectTree: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            loading: boolean;
            modelValue: string | number | boolean | unknown[] | Record<string, any>;
            effect: string;
            valueKey: string;
            popperClass: string;
            popperAppendToBody: boolean;
            teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            persistent: boolean;
            autocomplete: string;
            clearable: boolean;
            suffixIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
            multiple: boolean;
            filterable: boolean;
            collapseTags: boolean;
            collapseTagsTooltip: boolean;
            tagType: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>;
            clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
            automaticDropdown: boolean;
            allowCreate: boolean;
            remote: boolean;
            multipleLimit: number;
            defaultFirstOption: boolean;
            reserveKeyword: boolean;
            fitInputWidth: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            name: StringConstructor;
            id: StringConstructor;
            modelValue: {
                type: (ObjectConstructor | StringConstructor | BooleanConstructor | NumberConstructor | ArrayConstructor)[];
                default: undefined;
            };
            autocomplete: {
                type: StringConstructor;
                default: string;
            };
            automaticDropdown: BooleanConstructor;
            size: {
                type: import("vue").PropType<"" | "small" | "default" | "large">;
                validator: (val: string) => val is "" | "small" | "default" | "large";
            };
            effect: {
                type: import("vue").PropType<string>;
                default: string;
            };
            disabled: BooleanConstructor;
            clearable: BooleanConstructor;
            filterable: BooleanConstructor;
            allowCreate: BooleanConstructor;
            loading: BooleanConstructor;
            popperClass: {
                type: StringConstructor;
                default: string;
            };
            remote: BooleanConstructor;
            loadingText: StringConstructor;
            noMatchText: StringConstructor;
            noDataText: StringConstructor;
            remoteMethod: FunctionConstructor;
            filterMethod: FunctionConstructor;
            multiple: BooleanConstructor;
            multipleLimit: {
                type: NumberConstructor;
                default: number;
            };
            placeholder: {
                type: StringConstructor;
            };
            defaultFirstOption: BooleanConstructor;
            reserveKeyword: {
                type: BooleanConstructor;
                default: boolean;
            };
            valueKey: {
                type: StringConstructor;
                default: string;
            };
            collapseTags: BooleanConstructor;
            collapseTagsTooltip: {
                type: BooleanConstructor;
                default: boolean;
            };
            popperAppendToBody: {
                type: BooleanConstructor;
                default: undefined;
            };
            teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            persistent: {
                type: BooleanConstructor;
                default: boolean;
            };
            clearIcon: {
                type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
                default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            };
            fitInputWidth: {
                type: BooleanConstructor;
                default: boolean;
            };
            suffixIcon: {
                type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
                default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            };
            tagType: {
                default: string;
                type: import("vue").PropType<import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>>;
                required: false;
                validator: ((val: unknown) => boolean) | undefined;
                __elPropsReservedKey: true;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onClear?: ((...args: any[]) => any) | undefined;
            onBlur?: ((...args: any[]) => any) | undefined;
            onFocus?: ((...args: any[]) => any) | undefined;
            "onVisible-change"?: ((...args: any[]) => any) | undefined;
            "onRemove-tag"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "disabled" | "multiple" | "multipleLimit" | "modelValue" | "loading" | "popperClass" | "autocomplete" | "automaticDropdown" | "effect" | "clearable" | "filterable" | "allowCreate" | "remote" | "defaultFirstOption" | "reserveKeyword" | "valueKey" | "collapseTags" | "collapseTagsTooltip" | "popperAppendToBody" | "teleported" | "persistent" | "clearIcon" | "fitInputWidth" | "suffixIcon" | "tagType">;
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
        $emit: (event: "blur" | "focus" | "change" | "update:modelValue" | "clear" | "visible-change" | "remove-tag", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            name: StringConstructor;
            id: StringConstructor;
            modelValue: {
                type: (ObjectConstructor | StringConstructor | BooleanConstructor | NumberConstructor | ArrayConstructor)[];
                default: undefined;
            };
            autocomplete: {
                type: StringConstructor;
                default: string;
            };
            automaticDropdown: BooleanConstructor;
            size: {
                type: import("vue").PropType<"" | "small" | "default" | "large">;
                validator: (val: string) => val is "" | "small" | "default" | "large";
            };
            effect: {
                type: import("vue").PropType<string>;
                default: string;
            };
            disabled: BooleanConstructor;
            clearable: BooleanConstructor;
            filterable: BooleanConstructor;
            allowCreate: BooleanConstructor;
            loading: BooleanConstructor;
            popperClass: {
                type: StringConstructor;
                default: string;
            };
            remote: BooleanConstructor;
            loadingText: StringConstructor;
            noMatchText: StringConstructor;
            noDataText: StringConstructor;
            remoteMethod: FunctionConstructor;
            filterMethod: FunctionConstructor;
            multiple: BooleanConstructor;
            multipleLimit: {
                type: NumberConstructor;
                default: number;
            };
            placeholder: {
                type: StringConstructor;
            };
            defaultFirstOption: BooleanConstructor;
            reserveKeyword: {
                type: BooleanConstructor;
                default: boolean;
            };
            valueKey: {
                type: StringConstructor;
                default: string;
            };
            collapseTags: BooleanConstructor;
            collapseTagsTooltip: {
                type: BooleanConstructor;
                default: boolean;
            };
            popperAppendToBody: {
                type: BooleanConstructor;
                default: undefined;
            };
            teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            persistent: {
                type: BooleanConstructor;
                default: boolean;
            };
            clearIcon: {
                type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
                default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            };
            fitInputWidth: {
                type: BooleanConstructor;
                default: boolean;
            };
            suffixIcon: {
                type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
                default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            };
            tagType: {
                default: string;
                type: import("vue").PropType<import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>>;
                required: false;
                validator: ((val: unknown) => boolean) | undefined;
                __elPropsReservedKey: true;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onClear?: ((...args: any[]) => any) | undefined;
            onBlur?: ((...args: any[]) => any) | undefined;
            onFocus?: ((...args: any[]) => any) | undefined;
            "onVisible-change"?: ((...args: any[]) => any) | undefined;
            "onRemove-tag"?: ((...args: any[]) => any) | undefined;
        }, {
            tagInMultiLine: import("vue").Ref<boolean>;
            prefixWidth: import("vue").Ref<number>;
            selectSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
            readonly: import("vue").ComputedRef<any>;
            handleResize: () => void;
            collapseTagSize: import("vue").ComputedRef<"small" | "default">;
            debouncedOnInputChange: import("lodash").DebouncedFunc<() => void>;
            debouncedQueryChange: import("lodash").DebouncedFunc<(e: any) => void>;
            deletePrevTag: (e: any) => void;
            deleteTag: (event: any, tag: any) => void;
            deleteSelected: (event: any) => void;
            handleOptionSelect: (option: any, byClick: any) => void;
            scrollToOption: (option: any) => void;
            inputWidth: import("vue").Ref<number>;
            selected: import("vue").Ref<any>;
            inputLength: import("vue").Ref<number>;
            filteredOptionsCount: import("vue").Ref<number>;
            visible: import("vue").Ref<boolean>;
            softFocus: import("vue").Ref<boolean>;
            selectedLabel: import("vue").Ref<string>;
            hoverIndex: import("vue").Ref<number>;
            query: import("vue").Ref<string>;
            inputHovering: import("vue").Ref<boolean>;
            currentPlaceholder: import("vue").Ref<string>;
            menuVisibleOnFocus: import("vue").Ref<boolean>;
            isOnComposition: import("vue").Ref<boolean>;
            isSilentBlur: import("vue").Ref<boolean>;
            options: import("vue").Ref<Map<any, any>>;
            resetInputHeight: () => void;
            managePlaceholder: () => void;
            showClose: import("vue").ComputedRef<any>;
            selectDisabled: import("vue").ComputedRef<any>;
            iconComponent: import("vue").ComputedRef<any>;
            iconReverse: import("vue").ComputedRef<string>;
            showNewOption: import("vue").ComputedRef<any>;
            emptyText: import("vue").ComputedRef<any>;
            toggleLastOptionHitState: (hit?: boolean | undefined) => any;
            resetInputState: (e: KeyboardEvent) => void;
            handleComposition: (event: any) => void;
            handleMenuEnter: () => void;
            handleFocus: (event: any) => void;
            blur: () => void;
            handleBlur: (event: Event) => void;
            handleClearClick: (event: Event) => void;
            handleClose: () => void;
            toggleMenu: () => void;
            selectOption: () => void;
            getValueKey: (item: any) => any;
            navigateOptions: (direction: any) => void;
            dropMenuVisible: import("vue").WritableComputedRef<boolean>;
            focus: () => void;
            reference: import("vue").Ref<import("vue").ComponentPublicInstance<{
                focus: () => void;
                blur: () => void;
                input: HTMLInputElement;
            }, {}, {}, {}, {}, {}, {
                focus: () => void;
                blur: () => void;
                input: HTMLInputElement;
            }, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null>;
            input: import("vue").Ref<HTMLInputElement | null>;
            tooltipRef: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    disabled: boolean;
                    trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"focus" | "click" | "hover" | "contextmenu" | ("focus" | "click" | "hover" | "contextmenu")[]>, unknown, unknown>;
                    offset: number;
                    effect: string;
                    placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                    popperClass: string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[];
                    showAfter: number;
                    hideAfter: number;
                    boundariesPadding: number;
                    fallbackPlacements: import("element-plus").Placement[];
                    gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    popperOptions: Partial<import("element-plus").Options>;
                    strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "fixed" | "absolute", unknown>;
                    style: import("vue").StyleValue;
                    className: string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[];
                    enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    popperStyle: import("vue").StyleValue;
                    referenceEl: HTMLElement;
                    stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                    pure: boolean;
                    appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                    content: string;
                    rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    transition: string;
                    teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    persistent: boolean;
                    open: boolean;
                    arrowOffset: number;
                    virtualRef: import("element-plus").Measurable;
                    virtualTriggering: boolean;
                    "onUpdate:visible": (val: boolean) => void;
                    openDelay: number;
                    visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                    disabled: BooleanConstructor;
                    trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"focus" | "click" | "hover" | "contextmenu" | ("focus" | "click" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                    virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                    virtualTriggering: BooleanConstructor;
                    onMouseenter: FunctionConstructor;
                    onMouseleave: FunctionConstructor;
                    onClick: FunctionConstructor;
                    onKeydown: FunctionConstructor;
                    onFocus: FunctionConstructor;
                    onBlur: FunctionConstructor;
                    onContextmenu: FunctionConstructor;
                    id: StringConstructor;
                    open: BooleanConstructor;
                    appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                    content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                    rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                    persistent: BooleanConstructor;
                    ariaLabel: StringConstructor;
                    visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                    transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                    teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                    className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                    effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                    enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    pure: BooleanConstructor;
                    popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                    popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                    referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                    stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    zIndex: NumberConstructor;
                    boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                    fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                    gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                    placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                    popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                    strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
                    showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                    "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "open" | "offset" | "disabled" | "style" | "className" | "openDelay" | "popperClass" | "effect" | "teleported" | "persistent" | "visible" | "visibleArrow" | "hideAfter" | "showArrow" | "arrowOffset" | "trigger" | "virtualRef" | "virtualTriggering" | "appendTo" | "content" | "rawContent" | "transition" | "enterable" | "pure" | "popperStyle" | "referenceEl" | "stopPopperMouseEvent" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "placement" | "popperOptions" | "strategy" | "showAfter" | "onUpdate:visible">;
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
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                    disabled: BooleanConstructor;
                    trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"focus" | "click" | "hover" | "contextmenu" | ("focus" | "click" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                    virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                    virtualTriggering: BooleanConstructor;
                    onMouseenter: FunctionConstructor;
                    onMouseleave: FunctionConstructor;
                    onClick: FunctionConstructor;
                    onKeydown: FunctionConstructor;
                    onFocus: FunctionConstructor;
                    onBlur: FunctionConstructor;
                    onContextmenu: FunctionConstructor;
                    id: StringConstructor;
                    open: BooleanConstructor;
                    appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                    content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                    rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                    persistent: BooleanConstructor;
                    ariaLabel: StringConstructor;
                    visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                    transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                    teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                    className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                    effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                    enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    pure: BooleanConstructor;
                    popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                    popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                    referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                    stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    zIndex: NumberConstructor;
                    boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                    fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                    gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                    placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                    popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                    strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
                    showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                    "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                }, {
                    compatShowAfter: import("vue").ComputedRef<number>;
                    compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                    popperRef: import("vue").Ref<({
                        $: import("vue").ComponentInternalInstance;
                        $data: {};
                        $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
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
                        $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
                        $el: any;
                        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                            triggerRef: import("vue").Ref<HTMLElement | undefined>;
                            popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                            contentRef: import("vue").Ref<HTMLElement | undefined>;
                            referenceRef: import("vue").Ref<HTMLElement | undefined>;
                            popperProvides: import("element-plus").ElPopperInjectionContext;
                        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                            beforeCreate?: (() => void) | (() => void)[] | undefined;
                            created?: (() => void) | (() => void)[] | undefined;
                            beforeMount?: (() => void) | (() => void)[] | undefined;
                            mounted?: (() => void) | (() => void)[] | undefined;
                            beforeUpdate?: (() => void) | (() => void)[] | undefined;
                            updated?: (() => void) | (() => void)[] | undefined;
                            activated?: (() => void) | (() => void)[] | undefined;
                            deactivated?: (() => void) | (() => void)[] | undefined;
                            beforeDestroy?: (() => void) | (() => void)[] | undefined;
                            beforeUnmount?: (() => void) | (() => void)[] | undefined;
                            destroyed?: (() => void) | (() => void)[] | undefined;
                            unmounted?: (() => void) | (() => void)[] | undefined;
                            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                        };
                        $forceUpdate: () => void;
                        $nextTick: typeof import("vue").nextTick;
                        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                    } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                        triggerRef: import("vue").Ref<HTMLElement | undefined>;
                        popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: import("vue").Ref<HTMLElement | undefined>;
                        referenceRef: import("vue").Ref<HTMLElement | undefined>;
                        popperProvides: import("element-plus").ElPopperInjectionContext;
                    }> & import("vue").ComponentCustomProperties) | null>;
                    open: import("vue").Ref<boolean>;
                    hide: () => void;
                    updatePopper: () => void;
                    onOpen: () => void;
                    onClose: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                    disabled: boolean;
                    trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"focus" | "click" | "hover" | "contextmenu" | ("focus" | "click" | "hover" | "contextmenu")[]>, unknown, unknown>;
                    offset: number;
                    effect: string;
                    placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                    popperClass: string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[];
                    showAfter: number;
                    hideAfter: number;
                    boundariesPadding: number;
                    fallbackPlacements: import("element-plus").Placement[];
                    gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    popperOptions: Partial<import("element-plus").Options>;
                    strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "fixed" | "absolute", unknown>;
                    style: import("vue").StyleValue;
                    className: string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[];
                    enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    popperStyle: import("vue").StyleValue;
                    referenceEl: HTMLElement;
                    stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                    pure: boolean;
                    appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                    content: string;
                    rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    transition: string;
                    teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    persistent: boolean;
                    open: boolean;
                    arrowOffset: number;
                    virtualRef: import("element-plus").Measurable;
                    virtualTriggering: boolean;
                    "onUpdate:visible": (val: boolean) => void;
                    openDelay: number;
                    visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                }> & {
                    beforeCreate?: (() => void) | (() => void)[] | undefined;
                    created?: (() => void) | (() => void)[] | undefined;
                    beforeMount?: (() => void) | (() => void)[] | undefined;
                    mounted?: (() => void) | (() => void)[] | undefined;
                    beforeUpdate?: (() => void) | (() => void)[] | undefined;
                    updated?: (() => void) | (() => void)[] | undefined;
                    activated?: (() => void) | (() => void)[] | undefined;
                    deactivated?: (() => void) | (() => void)[] | undefined;
                    beforeDestroy?: (() => void) | (() => void)[] | undefined;
                    beforeUnmount?: (() => void) | (() => void)[] | undefined;
                    destroyed?: (() => void) | (() => void)[] | undefined;
                    unmounted?: (() => void) | (() => void)[] | undefined;
                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                disabled: BooleanConstructor;
                trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"focus" | "click" | "hover" | "contextmenu" | ("focus" | "click" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                virtualTriggering: BooleanConstructor;
                onMouseenter: FunctionConstructor;
                onMouseleave: FunctionConstructor;
                onClick: FunctionConstructor;
                onKeydown: FunctionConstructor;
                onFocus: FunctionConstructor;
                onBlur: FunctionConstructor;
                onContextmenu: FunctionConstructor;
                id: StringConstructor;
                open: BooleanConstructor;
                appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                persistent: BooleanConstructor;
                ariaLabel: StringConstructor;
                visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                pure: BooleanConstructor;
                popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                zIndex: NumberConstructor;
                boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
                showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
            } & import("vue").ShallowUnwrapRef<{
                compatShowAfter: import("vue").ComputedRef<number>;
                compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                popperRef: import("vue").Ref<({
                    $: import("vue").ComponentInternalInstance;
                    $data: {};
                    $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
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
                    $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
                    $el: any;
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                        triggerRef: import("vue").Ref<HTMLElement | undefined>;
                        popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: import("vue").Ref<HTMLElement | undefined>;
                        referenceRef: import("vue").Ref<HTMLElement | undefined>;
                        popperProvides: import("element-plus").ElPopperInjectionContext;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                        beforeCreate?: (() => void) | (() => void)[] | undefined;
                        created?: (() => void) | (() => void)[] | undefined;
                        beforeMount?: (() => void) | (() => void)[] | undefined;
                        mounted?: (() => void) | (() => void)[] | undefined;
                        beforeUpdate?: (() => void) | (() => void)[] | undefined;
                        updated?: (() => void) | (() => void)[] | undefined;
                        activated?: (() => void) | (() => void)[] | undefined;
                        deactivated?: (() => void) | (() => void)[] | undefined;
                        beforeDestroy?: (() => void) | (() => void)[] | undefined;
                        beforeUnmount?: (() => void) | (() => void)[] | undefined;
                        destroyed?: (() => void) | (() => void)[] | undefined;
                        unmounted?: (() => void) | (() => void)[] | undefined;
                        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                    triggerRef: import("vue").Ref<HTMLElement | undefined>;
                    popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: import("vue").Ref<HTMLElement | undefined>;
                    referenceRef: import("vue").Ref<HTMLElement | undefined>;
                    popperProvides: import("element-plus").ElPopperInjectionContext;
                }> & import("vue").ComponentCustomProperties) | null>;
                open: import("vue").Ref<boolean>;
                hide: () => void;
                updatePopper: () => void;
                onOpen: () => void;
                onClose: () => void;
            }> & import("vue").ComponentCustomProperties) | null>;
            popperPaneRef: import("vue").ComputedRef<HTMLElement | undefined>;
            tags: import("vue").Ref<HTMLElement | null>;
            selectWrapper: import("vue").Ref<HTMLElement | null>;
            scrollbar: import("vue").Ref<{
                handleScroll: () => void;
            } | null>;
            wrapperKls: import("vue").ComputedRef<string[]>;
            selectTagsStyle: import("vue").ComputedRef<{
                maxWidth: string;
                width: string;
            }>;
            compatTeleported: import("vue").ComputedRef<boolean>;
            nsSelect: {
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "focus" | "change" | "update:modelValue" | "clear" | "visible-change" | "remove-tag")[], string, {
            disabled: boolean;
            loading: boolean;
            modelValue: string | number | boolean | unknown[] | Record<string, any>;
            effect: string;
            valueKey: string;
            popperClass: string;
            popperAppendToBody: boolean;
            teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            persistent: boolean;
            autocomplete: string;
            clearable: boolean;
            suffixIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
            multiple: boolean;
            filterable: boolean;
            collapseTags: boolean;
            collapseTagsTooltip: boolean;
            tagType: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>;
            clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
            automaticDropdown: boolean;
            allowCreate: boolean;
            remote: boolean;
            multipleLimit: number;
            defaultFirstOption: boolean;
            reserveKeyword: boolean;
            fitInputWidth: boolean;
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
        name: StringConstructor;
        id: StringConstructor;
        modelValue: {
            type: (ObjectConstructor | StringConstructor | BooleanConstructor | NumberConstructor | ArrayConstructor)[];
            default: undefined;
        };
        autocomplete: {
            type: StringConstructor;
            default: string;
        };
        automaticDropdown: BooleanConstructor;
        size: {
            type: import("vue").PropType<"" | "small" | "default" | "large">;
            validator: (val: string) => val is "" | "small" | "default" | "large";
        };
        effect: {
            type: import("vue").PropType<string>;
            default: string;
        };
        disabled: BooleanConstructor;
        clearable: BooleanConstructor;
        filterable: BooleanConstructor;
        allowCreate: BooleanConstructor;
        loading: BooleanConstructor;
        popperClass: {
            type: StringConstructor;
            default: string;
        };
        remote: BooleanConstructor;
        loadingText: StringConstructor;
        noMatchText: StringConstructor;
        noDataText: StringConstructor;
        remoteMethod: FunctionConstructor;
        filterMethod: FunctionConstructor;
        multiple: BooleanConstructor;
        multipleLimit: {
            type: NumberConstructor;
            default: number;
        };
        placeholder: {
            type: StringConstructor;
        };
        defaultFirstOption: BooleanConstructor;
        reserveKeyword: {
            type: BooleanConstructor;
            default: boolean;
        };
        valueKey: {
            type: StringConstructor;
            default: string;
        };
        collapseTags: BooleanConstructor;
        collapseTagsTooltip: {
            type: BooleanConstructor;
            default: boolean;
        };
        popperAppendToBody: {
            type: BooleanConstructor;
            default: undefined;
        };
        teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        persistent: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearIcon: {
            type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
            default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        };
        fitInputWidth: {
            type: BooleanConstructor;
            default: boolean;
        };
        suffixIcon: {
            type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
            default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        };
        tagType: {
            default: string;
            type: import("vue").PropType<import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>>;
            required: false;
            validator: ((val: unknown) => boolean) | undefined;
            __elPropsReservedKey: true;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onClear?: ((...args: any[]) => any) | undefined;
        onBlur?: ((...args: any[]) => any) | undefined;
        onFocus?: ((...args: any[]) => any) | undefined;
        "onVisible-change"?: ((...args: any[]) => any) | undefined;
        "onRemove-tag"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        tagInMultiLine: import("vue").Ref<boolean>;
        prefixWidth: import("vue").Ref<number>;
        selectSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
        readonly: import("vue").ComputedRef<any>;
        handleResize: () => void;
        collapseTagSize: import("vue").ComputedRef<"small" | "default">;
        debouncedOnInputChange: import("lodash").DebouncedFunc<() => void>;
        debouncedQueryChange: import("lodash").DebouncedFunc<(e: any) => void>;
        deletePrevTag: (e: any) => void;
        deleteTag: (event: any, tag: any) => void;
        deleteSelected: (event: any) => void;
        handleOptionSelect: (option: any, byClick: any) => void;
        scrollToOption: (option: any) => void;
        inputWidth: import("vue").Ref<number>;
        selected: import("vue").Ref<any>;
        inputLength: import("vue").Ref<number>;
        filteredOptionsCount: import("vue").Ref<number>;
        visible: import("vue").Ref<boolean>;
        softFocus: import("vue").Ref<boolean>;
        selectedLabel: import("vue").Ref<string>;
        hoverIndex: import("vue").Ref<number>;
        query: import("vue").Ref<string>;
        inputHovering: import("vue").Ref<boolean>;
        currentPlaceholder: import("vue").Ref<string>;
        menuVisibleOnFocus: import("vue").Ref<boolean>;
        isOnComposition: import("vue").Ref<boolean>;
        isSilentBlur: import("vue").Ref<boolean>;
        options: import("vue").Ref<Map<any, any>>;
        resetInputHeight: () => void;
        managePlaceholder: () => void;
        showClose: import("vue").ComputedRef<any>;
        selectDisabled: import("vue").ComputedRef<any>;
        iconComponent: import("vue").ComputedRef<any>;
        iconReverse: import("vue").ComputedRef<string>;
        showNewOption: import("vue").ComputedRef<any>;
        emptyText: import("vue").ComputedRef<any>;
        toggleLastOptionHitState: (hit?: boolean | undefined) => any;
        resetInputState: (e: KeyboardEvent) => void;
        handleComposition: (event: any) => void;
        handleMenuEnter: () => void;
        handleFocus: (event: any) => void;
        blur: () => void;
        handleBlur: (event: Event) => void;
        handleClearClick: (event: Event) => void;
        handleClose: () => void;
        toggleMenu: () => void;
        selectOption: () => void;
        getValueKey: (item: any) => any;
        navigateOptions: (direction: any) => void;
        dropMenuVisible: import("vue").WritableComputedRef<boolean>;
        focus: () => void;
        reference: import("vue").Ref<import("vue").ComponentPublicInstance<{
            focus: () => void;
            blur: () => void;
            input: HTMLInputElement;
        }, {}, {}, {}, {}, {}, {
            focus: () => void;
            blur: () => void;
            input: HTMLInputElement;
        }, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null>;
        input: import("vue").Ref<HTMLInputElement | null>;
        tooltipRef: import("vue").Ref<({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                disabled: boolean;
                trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"focus" | "click" | "hover" | "contextmenu" | ("focus" | "click" | "hover" | "contextmenu")[]>, unknown, unknown>;
                offset: number;
                effect: string;
                placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                popperClass: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                showAfter: number;
                hideAfter: number;
                boundariesPadding: number;
                fallbackPlacements: import("element-plus").Placement[];
                gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperOptions: Partial<import("element-plus").Options>;
                strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "fixed" | "absolute", unknown>;
                style: import("vue").StyleValue;
                className: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperStyle: import("vue").StyleValue;
                referenceEl: HTMLElement;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                pure: boolean;
                appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                content: string;
                rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                transition: string;
                teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                persistent: boolean;
                open: boolean;
                arrowOffset: number;
                virtualRef: import("element-plus").Measurable;
                virtualTriggering: boolean;
                "onUpdate:visible": (val: boolean) => void;
                openDelay: number;
                visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                disabled: BooleanConstructor;
                trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"focus" | "click" | "hover" | "contextmenu" | ("focus" | "click" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                virtualTriggering: BooleanConstructor;
                onMouseenter: FunctionConstructor;
                onMouseleave: FunctionConstructor;
                onClick: FunctionConstructor;
                onKeydown: FunctionConstructor;
                onFocus: FunctionConstructor;
                onBlur: FunctionConstructor;
                onContextmenu: FunctionConstructor;
                id: StringConstructor;
                open: BooleanConstructor;
                appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                persistent: BooleanConstructor;
                ariaLabel: StringConstructor;
                visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                pure: BooleanConstructor;
                popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                zIndex: NumberConstructor;
                boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
                showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "open" | "offset" | "disabled" | "style" | "className" | "openDelay" | "popperClass" | "effect" | "teleported" | "persistent" | "visible" | "visibleArrow" | "hideAfter" | "showArrow" | "arrowOffset" | "trigger" | "virtualRef" | "virtualTriggering" | "appendTo" | "content" | "rawContent" | "transition" | "enterable" | "pure" | "popperStyle" | "referenceEl" | "stopPopperMouseEvent" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "placement" | "popperOptions" | "strategy" | "showAfter" | "onUpdate:visible">;
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
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                disabled: BooleanConstructor;
                trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"focus" | "click" | "hover" | "contextmenu" | ("focus" | "click" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                virtualTriggering: BooleanConstructor;
                onMouseenter: FunctionConstructor;
                onMouseleave: FunctionConstructor;
                onClick: FunctionConstructor;
                onKeydown: FunctionConstructor;
                onFocus: FunctionConstructor;
                onBlur: FunctionConstructor;
                onContextmenu: FunctionConstructor;
                id: StringConstructor;
                open: BooleanConstructor;
                appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                persistent: BooleanConstructor;
                ariaLabel: StringConstructor;
                visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                pure: BooleanConstructor;
                popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                zIndex: NumberConstructor;
                boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
                showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
            }, {
                compatShowAfter: import("vue").ComputedRef<number>;
                compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                popperRef: import("vue").Ref<({
                    $: import("vue").ComponentInternalInstance;
                    $data: {};
                    $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
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
                    $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
                    $el: any;
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                        triggerRef: import("vue").Ref<HTMLElement | undefined>;
                        popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: import("vue").Ref<HTMLElement | undefined>;
                        referenceRef: import("vue").Ref<HTMLElement | undefined>;
                        popperProvides: import("element-plus").ElPopperInjectionContext;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                        beforeCreate?: (() => void) | (() => void)[] | undefined;
                        created?: (() => void) | (() => void)[] | undefined;
                        beforeMount?: (() => void) | (() => void)[] | undefined;
                        mounted?: (() => void) | (() => void)[] | undefined;
                        beforeUpdate?: (() => void) | (() => void)[] | undefined;
                        updated?: (() => void) | (() => void)[] | undefined;
                        activated?: (() => void) | (() => void)[] | undefined;
                        deactivated?: (() => void) | (() => void)[] | undefined;
                        beforeDestroy?: (() => void) | (() => void)[] | undefined;
                        beforeUnmount?: (() => void) | (() => void)[] | undefined;
                        destroyed?: (() => void) | (() => void)[] | undefined;
                        unmounted?: (() => void) | (() => void)[] | undefined;
                        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                    triggerRef: import("vue").Ref<HTMLElement | undefined>;
                    popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: import("vue").Ref<HTMLElement | undefined>;
                    referenceRef: import("vue").Ref<HTMLElement | undefined>;
                    popperProvides: import("element-plus").ElPopperInjectionContext;
                }> & import("vue").ComponentCustomProperties) | null>;
                open: import("vue").Ref<boolean>;
                hide: () => void;
                updatePopper: () => void;
                onOpen: () => void;
                onClose: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                disabled: boolean;
                trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"focus" | "click" | "hover" | "contextmenu" | ("focus" | "click" | "hover" | "contextmenu")[]>, unknown, unknown>;
                offset: number;
                effect: string;
                placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                popperClass: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                showAfter: number;
                hideAfter: number;
                boundariesPadding: number;
                fallbackPlacements: import("element-plus").Placement[];
                gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperOptions: Partial<import("element-plus").Options>;
                strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "fixed" | "absolute", unknown>;
                style: import("vue").StyleValue;
                className: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperStyle: import("vue").StyleValue;
                referenceEl: HTMLElement;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                pure: boolean;
                appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                content: string;
                rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                transition: string;
                teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                persistent: boolean;
                open: boolean;
                arrowOffset: number;
                virtualRef: import("element-plus").Measurable;
                virtualTriggering: boolean;
                "onUpdate:visible": (val: boolean) => void;
                openDelay: number;
                visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            }> & {
                beforeCreate?: (() => void) | (() => void)[] | undefined;
                created?: (() => void) | (() => void)[] | undefined;
                beforeMount?: (() => void) | (() => void)[] | undefined;
                mounted?: (() => void) | (() => void)[] | undefined;
                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                updated?: (() => void) | (() => void)[] | undefined;
                activated?: (() => void) | (() => void)[] | undefined;
                deactivated?: (() => void) | (() => void)[] | undefined;
                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                destroyed?: (() => void) | (() => void)[] | undefined;
                unmounted?: (() => void) | (() => void)[] | undefined;
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
            visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
            hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
            showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
            arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
            disabled: BooleanConstructor;
            trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"focus" | "click" | "hover" | "contextmenu" | ("focus" | "click" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
            virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
            virtualTriggering: BooleanConstructor;
            onMouseenter: FunctionConstructor;
            onMouseleave: FunctionConstructor;
            onClick: FunctionConstructor;
            onKeydown: FunctionConstructor;
            onFocus: FunctionConstructor;
            onBlur: FunctionConstructor;
            onContextmenu: FunctionConstructor;
            id: StringConstructor;
            open: BooleanConstructor;
            appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
            content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            persistent: BooleanConstructor;
            ariaLabel: StringConstructor;
            visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
            transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
            teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | any[] | {
                [x: string]: boolean;
            })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
            enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            pure: BooleanConstructor;
            popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | any[] | {
                [x: string]: boolean;
            })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
            stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            zIndex: NumberConstructor;
            boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
            gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
            placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
            popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
            strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
            showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{
            compatShowAfter: import("vue").ComputedRef<number>;
            compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
            popperRef: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
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
                $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                    triggerRef: import("vue").Ref<HTMLElement | undefined>;
                    popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: import("vue").Ref<HTMLElement | undefined>;
                    referenceRef: import("vue").Ref<HTMLElement | undefined>;
                    popperProvides: import("element-plus").ElPopperInjectionContext;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                    beforeCreate?: (() => void) | (() => void)[] | undefined;
                    created?: (() => void) | (() => void)[] | undefined;
                    beforeMount?: (() => void) | (() => void)[] | undefined;
                    mounted?: (() => void) | (() => void)[] | undefined;
                    beforeUpdate?: (() => void) | (() => void)[] | undefined;
                    updated?: (() => void) | (() => void)[] | undefined;
                    activated?: (() => void) | (() => void)[] | undefined;
                    deactivated?: (() => void) | (() => void)[] | undefined;
                    beforeDestroy?: (() => void) | (() => void)[] | undefined;
                    beforeUnmount?: (() => void) | (() => void)[] | undefined;
                    destroyed?: (() => void) | (() => void)[] | undefined;
                    unmounted?: (() => void) | (() => void)[] | undefined;
                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                triggerRef: import("vue").Ref<HTMLElement | undefined>;
                popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                contentRef: import("vue").Ref<HTMLElement | undefined>;
                referenceRef: import("vue").Ref<HTMLElement | undefined>;
                popperProvides: import("element-plus").ElPopperInjectionContext;
            }> & import("vue").ComponentCustomProperties) | null>;
            open: import("vue").Ref<boolean>;
            hide: () => void;
            updatePopper: () => void;
            onOpen: () => void;
            onClose: () => void;
        }> & import("vue").ComponentCustomProperties) | null>;
        popperPaneRef: import("vue").ComputedRef<HTMLElement | undefined>;
        tags: import("vue").Ref<HTMLElement | null>;
        selectWrapper: import("vue").Ref<HTMLElement | null>;
        scrollbar: import("vue").Ref<{
            handleScroll: () => void;
        } | null>;
        wrapperKls: import("vue").ComputedRef<string[]>;
        selectTagsStyle: import("vue").ComputedRef<{
            maxWidth: string;
            width: string;
        }>;
        compatTeleported: import("vue").ComputedRef<boolean>;
        nsSelect: {
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
    }> & {} & {} & import("vue").ComponentCustomProperties) | undefined>;
    selecteltree: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            data: unknown[];
            lazy: boolean;
            props: import("element-plus/es/components/tree/src/tree.type").TreeOptionProps;
            draggable: boolean;
            checkStrictly: boolean;
            accordion: boolean;
            defaultExpandAll: boolean;
            indent: number;
            renderAfterExpand: boolean;
            showCheckbox: boolean;
            expandOnClickNode: boolean;
            checkOnClickNode: boolean;
            checkDescendants: boolean;
            autoExpandParent: boolean;
            highlightCurrent: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: ArrayConstructor;
                default: () => never[];
            };
            emptyText: {
                type: StringConstructor;
            };
            renderAfterExpand: {
                type: BooleanConstructor;
                default: boolean;
            };
            nodeKey: StringConstructor;
            checkStrictly: BooleanConstructor;
            defaultExpandAll: BooleanConstructor;
            expandOnClickNode: {
                type: BooleanConstructor;
                default: boolean;
            };
            checkOnClickNode: BooleanConstructor;
            checkDescendants: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoExpandParent: {
                type: BooleanConstructor;
                default: boolean;
            };
            defaultCheckedKeys: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
            defaultExpandedKeys: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
            currentNodeKey: import("vue").PropType<string | number>;
            renderContent: FunctionConstructor;
            showCheckbox: {
                type: BooleanConstructor;
                default: boolean;
            };
            draggable: {
                type: BooleanConstructor;
                default: boolean;
            };
            allowDrag: FunctionConstructor;
            allowDrop: FunctionConstructor;
            props: {
                type: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeOptionProps>;
                default: () => {
                    children: string;
                    label: string;
                    disabled: string;
                };
            };
            lazy: {
                type: BooleanConstructor;
                default: boolean;
            };
            highlightCurrent: BooleanConstructor;
            load: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").LoadFunction>;
            filterNodeMethod: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").FilterNodeMethodFunction>;
            accordion: BooleanConstructor;
            indent: {
                type: NumberConstructor;
                default: number;
            };
            icon: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        }>> & {
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onNode-expand"?: ((...args: any[]) => any) | undefined;
            onCheck?: ((...args: any[]) => any) | undefined;
            "onCheck-change"?: ((...args: any[]) => any) | undefined;
            "onNode-click"?: ((...args: any[]) => any) | undefined;
            "onNode-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onNode-collapse"?: ((...args: any[]) => any) | undefined;
            "onNode-drag-start"?: ((...args: any[]) => any) | undefined;
            "onNode-drag-end"?: ((...args: any[]) => any) | undefined;
            "onNode-drop"?: ((...args: any[]) => any) | undefined;
            "onNode-drag-leave"?: ((...args: any[]) => any) | undefined;
            "onNode-drag-enter"?: ((...args: any[]) => any) | undefined;
            "onNode-drag-over"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "props" | "data" | "defaultExpandAll" | "indent" | "lazy" | "draggable" | "renderAfterExpand" | "checkStrictly" | "expandOnClickNode" | "checkOnClickNode" | "checkDescendants" | "autoExpandParent" | "showCheckbox" | "highlightCurrent" | "accordion">;
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
        $emit: (event: "current-change" | "node-expand" | "check-change" | "node-click" | "node-contextmenu" | "node-collapse" | "check" | "node-drag-start" | "node-drag-end" | "node-drop" | "node-drag-leave" | "node-drag-enter" | "node-drag-over", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: ArrayConstructor;
                default: () => never[];
            };
            emptyText: {
                type: StringConstructor;
            };
            renderAfterExpand: {
                type: BooleanConstructor;
                default: boolean;
            };
            nodeKey: StringConstructor;
            checkStrictly: BooleanConstructor;
            defaultExpandAll: BooleanConstructor;
            expandOnClickNode: {
                type: BooleanConstructor;
                default: boolean;
            };
            checkOnClickNode: BooleanConstructor;
            checkDescendants: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoExpandParent: {
                type: BooleanConstructor;
                default: boolean;
            };
            defaultCheckedKeys: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
            defaultExpandedKeys: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
            currentNodeKey: import("vue").PropType<string | number>;
            renderContent: FunctionConstructor;
            showCheckbox: {
                type: BooleanConstructor;
                default: boolean;
            };
            draggable: {
                type: BooleanConstructor;
                default: boolean;
            };
            allowDrag: FunctionConstructor;
            allowDrop: FunctionConstructor;
            props: {
                type: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeOptionProps>;
                default: () => {
                    children: string;
                    label: string;
                    disabled: string;
                };
            };
            lazy: {
                type: BooleanConstructor;
                default: boolean;
            };
            highlightCurrent: BooleanConstructor;
            load: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").LoadFunction>;
            filterNodeMethod: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").FilterNodeMethodFunction>;
            accordion: BooleanConstructor;
            indent: {
                type: NumberConstructor;
                default: number;
            };
            icon: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        }>> & {
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onNode-expand"?: ((...args: any[]) => any) | undefined;
            onCheck?: ((...args: any[]) => any) | undefined;
            "onCheck-change"?: ((...args: any[]) => any) | undefined;
            "onNode-click"?: ((...args: any[]) => any) | undefined;
            "onNode-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onNode-collapse"?: ((...args: any[]) => any) | undefined;
            "onNode-drag-start"?: ((...args: any[]) => any) | undefined;
            "onNode-drag-end"?: ((...args: any[]) => any) | undefined;
            "onNode-drop"?: ((...args: any[]) => any) | undefined;
            "onNode-drag-leave"?: ((...args: any[]) => any) | undefined;
            "onNode-drag-enter"?: ((...args: any[]) => any) | undefined;
            "onNode-drag-over"?: ((...args: any[]) => any) | undefined;
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
            store: import("vue").Ref<{
                currentNode: {
                    id: number;
                    text: string;
                    checked: boolean;
                    indeterminate: boolean;
                    data: {
                        [x: string]: any;
                    };
                    expanded: boolean;
                    parent: any;
                    visible: boolean;
                    isCurrent: boolean;
                    store: any;
                    isLeafByUser: boolean;
                    isLeaf: boolean;
                    canFocus: boolean;
                    level: number;
                    loaded: boolean;
                    childNodes: any[];
                    loading: boolean;
                    initialize: () => void;
                    setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                    readonly label: string;
                    readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
                    readonly disabled: boolean;
                    readonly nextSibling: any;
                    readonly previousSibling: any;
                    contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
                    remove: () => void;
                    insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
                    insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                    insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                    removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
                    removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                    expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
                    doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                    collapse: () => void;
                    shouldLoadData: () => boolean;
                    updateLeafState: () => void;
                    setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
                    getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
                    updateChildren: () => void;
                    loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                };
                currentNodeKey: import("element-plus/es/components/tree/src/tree.type").TreeKey;
                nodesMap: {
                    [x: string]: {
                        id: number;
                        text: string;
                        checked: boolean;
                        indeterminate: boolean;
                        data: {
                            [x: string]: any;
                        };
                        expanded: boolean;
                        parent: any;
                        visible: boolean;
                        isCurrent: boolean;
                        store: any;
                        isLeafByUser: boolean;
                        isLeaf: boolean;
                        canFocus: boolean;
                        level: number;
                        loaded: boolean;
                        childNodes: any[];
                        loading: boolean;
                        initialize: () => void;
                        setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                        readonly label: string;
                        readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
                        readonly disabled: boolean;
                        readonly nextSibling: any;
                        readonly previousSibling: any;
                        contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
                        remove: () => void;
                        insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
                        insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                        insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                        removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
                        removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                        expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
                        doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                        collapse: () => void;
                        shouldLoadData: () => boolean;
                        updateLeafState: () => void;
                        setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
                        getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
                        updateChildren: () => void;
                        loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                    };
                };
                root: {
                    id: number;
                    text: string;
                    checked: boolean;
                    indeterminate: boolean;
                    data: {
                        [x: string]: any;
                    };
                    expanded: boolean;
                    parent: any;
                    visible: boolean;
                    isCurrent: boolean;
                    store: any;
                    isLeafByUser: boolean;
                    isLeaf: boolean;
                    canFocus: boolean;
                    level: number;
                    loaded: boolean;
                    childNodes: any[];
                    loading: boolean;
                    initialize: () => void;
                    setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                    readonly label: string;
                    readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
                    readonly disabled: boolean;
                    readonly nextSibling: any;
                    readonly previousSibling: any;
                    contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
                    remove: () => void;
                    insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
                    insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                    insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                    removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
                    removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                    expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
                    doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                    collapse: () => void;
                    shouldLoadData: () => boolean;
                    updateLeafState: () => void;
                    setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
                    getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
                    updateChildren: () => void;
                    loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                };
                data: {
                    [x: string]: any;
                }[];
                lazy: boolean;
                load: import("element-plus/es/components/tree/src/tree.type").LoadFunction;
                filterNodeMethod: import("element-plus/es/components/tree/src/tree.type").FilterNodeMethodFunction;
                key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
                defaultCheckedKeys: import("element-plus/es/components/tree/src/tree.type").TreeKey[];
                checkStrictly: boolean;
                defaultExpandedKeys: import("element-plus/es/components/tree/src/tree.type").TreeKey[];
                autoExpandParent: boolean;
                defaultExpandAll: boolean;
                checkDescendants: boolean;
                props: {
                    children?: string | undefined;
                    label?: string | ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => string) | undefined;
                    disabled?: string | ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => string) | undefined;
                    isLeaf?: string | ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => boolean) | undefined;
                    class?: ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => string | {
                        [key: string]: boolean;
                    }) | undefined;
                };
                initialize: () => void;
                filter: (value: any) => void;
                setData: (newVal: import("element-plus/es/components/tree/src/tree.type").TreeData) => void;
                getNode: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => import("element-plus/es/components/tree/src/model/node").default;
                insertBefore: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refData: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                insertAfter: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refData: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                remove: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/model/node").default) => void;
                append: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, parentData: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/model/node").default) => void;
                _initDefaultCheckedNodes: () => void;
                _initDefaultCheckedNode: (node: import("element-plus/es/components/tree/src/model/node").default) => void;
                setDefaultCheckedKey: (newVal: import("element-plus/es/components/tree/src/tree.type").TreeKey[]) => void;
                registerNode: (node: import("element-plus/es/components/tree/src/model/node").default) => void;
                deregisterNode: (node: import("element-plus/es/components/tree/src/model/node").default) => void;
                getCheckedNodes: (leafOnly?: boolean | undefined, includeHalfChecked?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
                getCheckedKeys: (leafOnly?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
                getHalfCheckedNodes: () => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
                getHalfCheckedKeys: () => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
                _getAllNodes: () => import("element-plus/es/components/tree/src/model/node").default[];
                updateChildren: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, data: import("element-plus/es/components/tree/src/tree.type").TreeData) => void;
                _setCheckedKeys: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, leafOnly: boolean | undefined, checkedKeys: {
                    [key: string]: boolean;
                }) => void;
                setCheckedNodes: (array: import("element-plus/es/components/tree/src/model/node").default[], leafOnly?: boolean | undefined) => void;
                setCheckedKeys: (keys: import("element-plus/es/components/tree/src/tree.type").TreeKey[], leafOnly?: boolean | undefined) => void;
                setDefaultExpandedKeys: (keys: import("element-plus/es/components/tree/src/tree.type").TreeKey[]) => void;
                setChecked: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData, checked: boolean, deep: boolean) => void;
                getCurrentNode: () => import("element-plus/es/components/tree/src/model/node").default;
                setCurrentNode: (currentNode: import("element-plus/es/components/tree/src/model/node").default) => void;
                setUserCurrentNode: (node: import("element-plus/es/components/tree/src/model/node").default, shouldAutoExpandParent?: boolean | undefined) => void;
                setCurrentNodeKey: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, shouldAutoExpandParent?: boolean | undefined) => void;
            }>;
            root: import("vue").Ref<{
                id: number;
                text: string;
                checked: boolean;
                indeterminate: boolean;
                data: {
                    [x: string]: any;
                };
                expanded: boolean;
                parent: any;
                visible: boolean;
                isCurrent: boolean;
                store: any;
                isLeafByUser: boolean;
                isLeaf: boolean;
                canFocus: boolean;
                level: number;
                loaded: boolean;
                childNodes: any[];
                loading: boolean;
                initialize: () => void;
                setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                readonly label: string;
                readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
                readonly disabled: boolean;
                readonly nextSibling: any;
                readonly previousSibling: any;
                contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
                remove: () => void;
                insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
                insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
                doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                collapse: () => void;
                shouldLoadData: () => boolean;
                updateLeafState: () => void;
                setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
                getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
                updateChildren: () => void;
                loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
            }>;
            currentNode: import("vue").Ref<{
                id: number;
                text: string;
                checked: boolean;
                indeterminate: boolean;
                data: {
                    [x: string]: any;
                };
                expanded: boolean;
                parent: any;
                visible: boolean;
                isCurrent: boolean;
                store: any;
                isLeafByUser: boolean;
                isLeaf: boolean;
                canFocus: boolean;
                level: number;
                loaded: boolean;
                childNodes: any[];
                loading: boolean;
                initialize: () => void;
                setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                readonly label: string;
                readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
                readonly disabled: boolean;
                readonly nextSibling: any;
                readonly previousSibling: any;
                contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
                remove: () => void;
                insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
                insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
                doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                collapse: () => void;
                shouldLoadData: () => boolean;
                updateLeafState: () => void;
                setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
                getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
                updateChildren: () => void;
                loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
            }>;
            dragState: import("vue").Ref<{
                showDropIndicator: boolean;
                draggingNode: null;
                dropNode: null;
                allowDrop: boolean;
                dropType: null;
            }>;
            el$: import("vue").Ref<import("element-plus/es/utils").Nullable<HTMLElement>>;
            dropIndicator$: import("vue").Ref<import("element-plus/es/utils").Nullable<HTMLElement>>;
            isEmpty: import("vue").ComputedRef<boolean>;
            filter: (value: any) => void;
            getNodeKey: (node: import("element-plus/es/components/tree/src/model/node").default) => any;
            getNodePath: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            getCheckedNodes: (leafOnly?: boolean | undefined, includeHalfChecked?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            getCheckedKeys: (leafOnly?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
            getCurrentNode: () => import("element-plus/es/components/tree/src/tree.type").TreeNodeData;
            getCurrentKey: () => any;
            setCheckedNodes: (nodes: import("element-plus/es/components/tree/src/model/node").default[], leafOnly?: boolean | undefined) => void;
            setCheckedKeys: (keys: any, leafOnly?: boolean | undefined) => void;
            setChecked: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData, checked: boolean, deep: boolean) => void;
            getHalfCheckedNodes: () => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            getHalfCheckedKeys: () => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
            setCurrentNode: (node: import("element-plus/es/components/tree/src/model/node").default, shouldAutoExpandParent?: boolean | undefined) => void;
            setCurrentKey: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, shouldAutoExpandParent?: boolean | undefined) => void;
            t: import("element-plus").Translator;
            getNode: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => import("element-plus/es/components/tree/src/model/node").default;
            remove: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/model/node").default) => void;
            append: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, parentNode: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/model/node").default) => void;
            insertBefore: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refNode: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            insertAfter: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refNode: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            handleNodeExpand: (nodeData: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default, instance: import("vue").ComponentInternalInstance) => void;
            updateKeyChildren: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, data: import("element-plus/es/components/tree/src/tree.type").TreeData) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("current-change" | "node-expand" | "check-change" | "node-click" | "node-contextmenu" | "node-collapse" | "check" | "node-drag-start" | "node-drag-end" | "node-drop" | "node-drag-leave" | "node-drag-enter" | "node-drag-over")[], string, {
            data: unknown[];
            lazy: boolean;
            props: import("element-plus/es/components/tree/src/tree.type").TreeOptionProps;
            draggable: boolean;
            checkStrictly: boolean;
            accordion: boolean;
            defaultExpandAll: boolean;
            indent: number;
            renderAfterExpand: boolean;
            showCheckbox: boolean;
            expandOnClickNode: boolean;
            checkOnClickNode: boolean;
            checkDescendants: boolean;
            autoExpandParent: boolean;
            highlightCurrent: boolean;
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
            type: ArrayConstructor;
            default: () => never[];
        };
        emptyText: {
            type: StringConstructor;
        };
        renderAfterExpand: {
            type: BooleanConstructor;
            default: boolean;
        };
        nodeKey: StringConstructor;
        checkStrictly: BooleanConstructor;
        defaultExpandAll: BooleanConstructor;
        expandOnClickNode: {
            type: BooleanConstructor;
            default: boolean;
        };
        checkOnClickNode: BooleanConstructor;
        checkDescendants: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoExpandParent: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultCheckedKeys: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
        defaultExpandedKeys: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
        currentNodeKey: import("vue").PropType<string | number>;
        renderContent: FunctionConstructor;
        showCheckbox: {
            type: BooleanConstructor;
            default: boolean;
        };
        draggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        allowDrag: FunctionConstructor;
        allowDrop: FunctionConstructor;
        props: {
            type: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeOptionProps>;
            default: () => {
                children: string;
                label: string;
                disabled: string;
            };
        };
        lazy: {
            type: BooleanConstructor;
            default: boolean;
        };
        highlightCurrent: BooleanConstructor;
        load: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").LoadFunction>;
        filterNodeMethod: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").FilterNodeMethodFunction>;
        accordion: BooleanConstructor;
        indent: {
            type: NumberConstructor;
            default: number;
        };
        icon: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
    }>> & {
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onNode-expand"?: ((...args: any[]) => any) | undefined;
        onCheck?: ((...args: any[]) => any) | undefined;
        "onCheck-change"?: ((...args: any[]) => any) | undefined;
        "onNode-click"?: ((...args: any[]) => any) | undefined;
        "onNode-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onNode-collapse"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-start"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-end"?: ((...args: any[]) => any) | undefined;
        "onNode-drop"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-leave"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-enter"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-over"?: ((...args: any[]) => any) | undefined;
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
        store: import("vue").Ref<{
            currentNode: {
                id: number;
                text: string;
                checked: boolean;
                indeterminate: boolean;
                data: {
                    [x: string]: any;
                };
                expanded: boolean;
                parent: any;
                visible: boolean;
                isCurrent: boolean;
                store: any;
                isLeafByUser: boolean;
                isLeaf: boolean;
                canFocus: boolean;
                level: number;
                loaded: boolean;
                childNodes: any[];
                loading: boolean;
                initialize: () => void;
                setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                readonly label: string;
                readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
                readonly disabled: boolean;
                readonly nextSibling: any;
                readonly previousSibling: any;
                contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
                remove: () => void;
                insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
                insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
                doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                collapse: () => void;
                shouldLoadData: () => boolean;
                updateLeafState: () => void;
                setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
                getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
                updateChildren: () => void;
                loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
            };
            currentNodeKey: import("element-plus/es/components/tree/src/tree.type").TreeKey;
            nodesMap: {
                [x: string]: {
                    id: number;
                    text: string;
                    checked: boolean;
                    indeterminate: boolean;
                    data: {
                        [x: string]: any;
                    };
                    expanded: boolean;
                    parent: any;
                    visible: boolean;
                    isCurrent: boolean;
                    store: any;
                    isLeafByUser: boolean;
                    isLeaf: boolean;
                    canFocus: boolean;
                    level: number;
                    loaded: boolean;
                    childNodes: any[];
                    loading: boolean;
                    initialize: () => void;
                    setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                    readonly label: string;
                    readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
                    readonly disabled: boolean;
                    readonly nextSibling: any;
                    readonly previousSibling: any;
                    contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
                    remove: () => void;
                    insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
                    insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                    insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                    removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
                    removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                    expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
                    doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                    collapse: () => void;
                    shouldLoadData: () => boolean;
                    updateLeafState: () => void;
                    setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
                    getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
                    updateChildren: () => void;
                    loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                };
            };
            root: {
                id: number;
                text: string;
                checked: boolean;
                indeterminate: boolean;
                data: {
                    [x: string]: any;
                };
                expanded: boolean;
                parent: any;
                visible: boolean;
                isCurrent: boolean;
                store: any;
                isLeafByUser: boolean;
                isLeaf: boolean;
                canFocus: boolean;
                level: number;
                loaded: boolean;
                childNodes: any[];
                loading: boolean;
                initialize: () => void;
                setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                readonly label: string;
                readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
                readonly disabled: boolean;
                readonly nextSibling: any;
                readonly previousSibling: any;
                contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
                remove: () => void;
                insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
                insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
                doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                collapse: () => void;
                shouldLoadData: () => boolean;
                updateLeafState: () => void;
                setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
                getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
                updateChildren: () => void;
                loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
            };
            data: {
                [x: string]: any;
            }[];
            lazy: boolean;
            load: import("element-plus/es/components/tree/src/tree.type").LoadFunction;
            filterNodeMethod: import("element-plus/es/components/tree/src/tree.type").FilterNodeMethodFunction;
            key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
            defaultCheckedKeys: import("element-plus/es/components/tree/src/tree.type").TreeKey[];
            checkStrictly: boolean;
            defaultExpandedKeys: import("element-plus/es/components/tree/src/tree.type").TreeKey[];
            autoExpandParent: boolean;
            defaultExpandAll: boolean;
            checkDescendants: boolean;
            props: {
                children?: string | undefined;
                label?: string | ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => string) | undefined;
                disabled?: string | ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => string) | undefined;
                isLeaf?: string | ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => boolean) | undefined;
                class?: ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => string | {
                    [key: string]: boolean;
                }) | undefined;
            };
            initialize: () => void;
            filter: (value: any) => void;
            setData: (newVal: import("element-plus/es/components/tree/src/tree.type").TreeData) => void;
            getNode: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => import("element-plus/es/components/tree/src/model/node").default;
            insertBefore: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refData: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            insertAfter: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refData: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            remove: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/model/node").default) => void;
            append: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, parentData: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/model/node").default) => void;
            _initDefaultCheckedNodes: () => void;
            _initDefaultCheckedNode: (node: import("element-plus/es/components/tree/src/model/node").default) => void;
            setDefaultCheckedKey: (newVal: import("element-plus/es/components/tree/src/tree.type").TreeKey[]) => void;
            registerNode: (node: import("element-plus/es/components/tree/src/model/node").default) => void;
            deregisterNode: (node: import("element-plus/es/components/tree/src/model/node").default) => void;
            getCheckedNodes: (leafOnly?: boolean | undefined, includeHalfChecked?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            getCheckedKeys: (leafOnly?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
            getHalfCheckedNodes: () => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            getHalfCheckedKeys: () => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
            _getAllNodes: () => import("element-plus/es/components/tree/src/model/node").default[];
            updateChildren: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, data: import("element-plus/es/components/tree/src/tree.type").TreeData) => void;
            _setCheckedKeys: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, leafOnly: boolean | undefined, checkedKeys: {
                [key: string]: boolean;
            }) => void;
            setCheckedNodes: (array: import("element-plus/es/components/tree/src/model/node").default[], leafOnly?: boolean | undefined) => void;
            setCheckedKeys: (keys: import("element-plus/es/components/tree/src/tree.type").TreeKey[], leafOnly?: boolean | undefined) => void;
            setDefaultExpandedKeys: (keys: import("element-plus/es/components/tree/src/tree.type").TreeKey[]) => void;
            setChecked: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData, checked: boolean, deep: boolean) => void;
            getCurrentNode: () => import("element-plus/es/components/tree/src/model/node").default;
            setCurrentNode: (currentNode: import("element-plus/es/components/tree/src/model/node").default) => void;
            setUserCurrentNode: (node: import("element-plus/es/components/tree/src/model/node").default, shouldAutoExpandParent?: boolean | undefined) => void;
            setCurrentNodeKey: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, shouldAutoExpandParent?: boolean | undefined) => void;
        }>;
        root: import("vue").Ref<{
            id: number;
            text: string;
            checked: boolean;
            indeterminate: boolean;
            data: {
                [x: string]: any;
            };
            expanded: boolean;
            parent: any;
            visible: boolean;
            isCurrent: boolean;
            store: any;
            isLeafByUser: boolean;
            isLeaf: boolean;
            canFocus: boolean;
            level: number;
            loaded: boolean;
            childNodes: any[];
            loading: boolean;
            initialize: () => void;
            setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            readonly label: string;
            readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
            readonly disabled: boolean;
            readonly nextSibling: any;
            readonly previousSibling: any;
            contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
            remove: () => void;
            insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
            insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
            insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
            removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
            removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
            doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
            collapse: () => void;
            shouldLoadData: () => boolean;
            updateLeafState: () => void;
            setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
            getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            updateChildren: () => void;
            loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
        }>;
        currentNode: import("vue").Ref<{
            id: number;
            text: string;
            checked: boolean;
            indeterminate: boolean;
            data: {
                [x: string]: any;
            };
            expanded: boolean;
            parent: any;
            visible: boolean;
            isCurrent: boolean;
            store: any;
            isLeafByUser: boolean;
            isLeaf: boolean;
            canFocus: boolean;
            level: number;
            loaded: boolean;
            childNodes: any[];
            loading: boolean;
            initialize: () => void;
            setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            readonly label: string;
            readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
            readonly disabled: boolean;
            readonly nextSibling: any;
            readonly previousSibling: any;
            contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
            remove: () => void;
            insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
            insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
            insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
            removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
            removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
            doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
            collapse: () => void;
            shouldLoadData: () => boolean;
            updateLeafState: () => void;
            setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
            getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            updateChildren: () => void;
            loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
        }>;
        dragState: import("vue").Ref<{
            showDropIndicator: boolean;
            draggingNode: null;
            dropNode: null;
            allowDrop: boolean;
            dropType: null;
        }>;
        el$: import("vue").Ref<import("element-plus/es/utils").Nullable<HTMLElement>>;
        dropIndicator$: import("vue").Ref<import("element-plus/es/utils").Nullable<HTMLElement>>;
        isEmpty: import("vue").ComputedRef<boolean>;
        filter: (value: any) => void;
        getNodeKey: (node: import("element-plus/es/components/tree/src/model/node").default) => any;
        getNodePath: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
        getCheckedNodes: (leafOnly?: boolean | undefined, includeHalfChecked?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
        getCheckedKeys: (leafOnly?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
        getCurrentNode: () => import("element-plus/es/components/tree/src/tree.type").TreeNodeData;
        getCurrentKey: () => any;
        setCheckedNodes: (nodes: import("element-plus/es/components/tree/src/model/node").default[], leafOnly?: boolean | undefined) => void;
        setCheckedKeys: (keys: any, leafOnly?: boolean | undefined) => void;
        setChecked: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData, checked: boolean, deep: boolean) => void;
        getHalfCheckedNodes: () => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
        getHalfCheckedKeys: () => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
        setCurrentNode: (node: import("element-plus/es/components/tree/src/model/node").default, shouldAutoExpandParent?: boolean | undefined) => void;
        setCurrentKey: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, shouldAutoExpandParent?: boolean | undefined) => void;
        t: import("element-plus").Translator;
        getNode: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => import("element-plus/es/components/tree/src/model/node").default;
        remove: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/model/node").default) => void;
        append: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, parentNode: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/model/node").default) => void;
        insertBefore: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refNode: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
        insertAfter: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refNode: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
        handleNodeExpand: (nodeData: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default, instance: import("vue").ComponentInternalInstance) => void;
        updateKeyChildren: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, data: import("element-plus/es/components/tree/src/tree.type").TreeData) => void;
    }> & {} & {} & import("vue").ComponentCustomProperties) | undefined>;
    handleNodeClick: (node: any) => void;
    search: (val: string) => void;
    filterNode: (value: string, data: any) => boolean;
    formatData: import("vue").ComputedRef<{
        label: any;
        value: any;
    }[]>;
    ElSelect: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        name: StringConstructor;
        id: StringConstructor;
        modelValue: {
            type: (ObjectConstructor | StringConstructor | BooleanConstructor | NumberConstructor | ArrayConstructor)[];
            default: undefined;
        };
        autocomplete: {
            type: StringConstructor;
            default: string;
        };
        automaticDropdown: BooleanConstructor;
        size: {
            type: import("vue").PropType<"" | "small" | "default" | "large">;
            validator: (val: string) => val is "" | "small" | "default" | "large";
        };
        effect: {
            type: import("vue").PropType<string>;
            default: string;
        };
        disabled: BooleanConstructor;
        clearable: BooleanConstructor;
        filterable: BooleanConstructor;
        allowCreate: BooleanConstructor;
        loading: BooleanConstructor;
        popperClass: {
            type: StringConstructor;
            default: string;
        };
        remote: BooleanConstructor;
        loadingText: StringConstructor;
        noMatchText: StringConstructor;
        noDataText: StringConstructor;
        remoteMethod: FunctionConstructor;
        filterMethod: FunctionConstructor;
        multiple: BooleanConstructor;
        multipleLimit: {
            type: NumberConstructor;
            default: number;
        };
        placeholder: {
            type: StringConstructor;
        };
        defaultFirstOption: BooleanConstructor;
        reserveKeyword: {
            type: BooleanConstructor;
            default: boolean;
        };
        valueKey: {
            type: StringConstructor;
            default: string;
        };
        collapseTags: BooleanConstructor;
        collapseTagsTooltip: {
            type: BooleanConstructor;
            default: boolean;
        };
        popperAppendToBody: {
            type: BooleanConstructor;
            default: undefined;
        };
        teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        persistent: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearIcon: {
            type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
            default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        };
        fitInputWidth: {
            type: BooleanConstructor;
            default: boolean;
        };
        suffixIcon: {
            type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
            default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        };
        tagType: {
            default: string;
            type: import("vue").PropType<import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>>;
            required: false;
            validator: ((val: unknown) => boolean) | undefined;
            __elPropsReservedKey: true;
        };
    }, {
        tagInMultiLine: import("vue").Ref<boolean>;
        prefixWidth: import("vue").Ref<number>;
        selectSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
        readonly: import("vue").ComputedRef<any>;
        handleResize: () => void;
        collapseTagSize: import("vue").ComputedRef<"small" | "default">;
        debouncedOnInputChange: import("lodash").DebouncedFunc<() => void>;
        debouncedQueryChange: import("lodash").DebouncedFunc<(e: any) => void>;
        deletePrevTag: (e: any) => void;
        deleteTag: (event: any, tag: any) => void;
        deleteSelected: (event: any) => void;
        handleOptionSelect: (option: any, byClick: any) => void;
        scrollToOption: (option: any) => void;
        inputWidth: import("vue").Ref<number>;
        selected: import("vue").Ref<any>;
        inputLength: import("vue").Ref<number>;
        filteredOptionsCount: import("vue").Ref<number>;
        visible: import("vue").Ref<boolean>;
        softFocus: import("vue").Ref<boolean>;
        selectedLabel: import("vue").Ref<string>;
        hoverIndex: import("vue").Ref<number>;
        query: import("vue").Ref<string>;
        inputHovering: import("vue").Ref<boolean>;
        currentPlaceholder: import("vue").Ref<string>;
        menuVisibleOnFocus: import("vue").Ref<boolean>;
        isOnComposition: import("vue").Ref<boolean>;
        isSilentBlur: import("vue").Ref<boolean>;
        options: import("vue").Ref<Map<any, any>>;
        resetInputHeight: () => void;
        managePlaceholder: () => void;
        showClose: import("vue").ComputedRef<any>;
        selectDisabled: import("vue").ComputedRef<any>;
        iconComponent: import("vue").ComputedRef<any>;
        iconReverse: import("vue").ComputedRef<string>;
        showNewOption: import("vue").ComputedRef<any>;
        emptyText: import("vue").ComputedRef<any>;
        toggleLastOptionHitState: (hit?: boolean | undefined) => any;
        resetInputState: (e: KeyboardEvent) => void;
        handleComposition: (event: any) => void;
        handleMenuEnter: () => void;
        handleFocus: (event: any) => void;
        blur: () => void;
        handleBlur: (event: Event) => void;
        handleClearClick: (event: Event) => void;
        handleClose: () => void;
        toggleMenu: () => void;
        selectOption: () => void;
        getValueKey: (item: any) => any;
        navigateOptions: (direction: any) => void;
        dropMenuVisible: import("vue").WritableComputedRef<boolean>;
        focus: () => void;
        reference: import("vue").Ref<import("vue").ComponentPublicInstance<{
            focus: () => void;
            blur: () => void;
            input: HTMLInputElement;
        }, {}, {}, {}, {}, {}, {
            focus: () => void;
            blur: () => void;
            input: HTMLInputElement;
        }, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null>;
        input: import("vue").Ref<HTMLInputElement | null>;
        tooltipRef: import("vue").Ref<({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                disabled: boolean;
                trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"focus" | "click" | "hover" | "contextmenu" | ("focus" | "click" | "hover" | "contextmenu")[]>, unknown, unknown>;
                offset: number;
                effect: string;
                placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                popperClass: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                showAfter: number;
                hideAfter: number;
                boundariesPadding: number;
                fallbackPlacements: import("element-plus").Placement[];
                gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperOptions: Partial<import("element-plus").Options>;
                strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "fixed" | "absolute", unknown>;
                style: import("vue").StyleValue;
                className: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperStyle: import("vue").StyleValue;
                referenceEl: HTMLElement;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                pure: boolean;
                appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                content: string;
                rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                transition: string;
                teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                persistent: boolean;
                open: boolean;
                arrowOffset: number;
                virtualRef: import("element-plus").Measurable;
                virtualTriggering: boolean;
                "onUpdate:visible": (val: boolean) => void;
                openDelay: number;
                visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                disabled: BooleanConstructor;
                trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"focus" | "click" | "hover" | "contextmenu" | ("focus" | "click" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                virtualTriggering: BooleanConstructor;
                onMouseenter: FunctionConstructor;
                onMouseleave: FunctionConstructor;
                onClick: FunctionConstructor;
                onKeydown: FunctionConstructor;
                onFocus: FunctionConstructor;
                onBlur: FunctionConstructor;
                onContextmenu: FunctionConstructor;
                id: StringConstructor;
                open: BooleanConstructor;
                appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                persistent: BooleanConstructor;
                ariaLabel: StringConstructor;
                visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                pure: BooleanConstructor;
                popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                zIndex: NumberConstructor;
                boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
                showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "open" | "offset" | "disabled" | "style" | "className" | "openDelay" | "popperClass" | "effect" | "teleported" | "persistent" | "visible" | "visibleArrow" | "hideAfter" | "showArrow" | "arrowOffset" | "trigger" | "virtualRef" | "virtualTriggering" | "appendTo" | "content" | "rawContent" | "transition" | "enterable" | "pure" | "popperStyle" | "referenceEl" | "stopPopperMouseEvent" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "placement" | "popperOptions" | "strategy" | "showAfter" | "onUpdate:visible">;
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
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                disabled: BooleanConstructor;
                trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"focus" | "click" | "hover" | "contextmenu" | ("focus" | "click" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                virtualTriggering: BooleanConstructor;
                onMouseenter: FunctionConstructor;
                onMouseleave: FunctionConstructor;
                onClick: FunctionConstructor;
                onKeydown: FunctionConstructor;
                onFocus: FunctionConstructor;
                onBlur: FunctionConstructor;
                onContextmenu: FunctionConstructor;
                id: StringConstructor;
                open: BooleanConstructor;
                appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                persistent: BooleanConstructor;
                ariaLabel: StringConstructor;
                visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                pure: BooleanConstructor;
                popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                zIndex: NumberConstructor;
                boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
                showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
            }, {
                compatShowAfter: import("vue").ComputedRef<number>;
                compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                popperRef: import("vue").Ref<({
                    $: import("vue").ComponentInternalInstance;
                    $data: {};
                    $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
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
                    $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
                    $el: any;
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                        triggerRef: import("vue").Ref<HTMLElement | undefined>;
                        popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: import("vue").Ref<HTMLElement | undefined>;
                        referenceRef: import("vue").Ref<HTMLElement | undefined>;
                        popperProvides: import("element-plus").ElPopperInjectionContext;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                        beforeCreate?: (() => void) | (() => void)[] | undefined;
                        created?: (() => void) | (() => void)[] | undefined;
                        beforeMount?: (() => void) | (() => void)[] | undefined;
                        mounted?: (() => void) | (() => void)[] | undefined;
                        beforeUpdate?: (() => void) | (() => void)[] | undefined;
                        updated?: (() => void) | (() => void)[] | undefined;
                        activated?: (() => void) | (() => void)[] | undefined;
                        deactivated?: (() => void) | (() => void)[] | undefined;
                        beforeDestroy?: (() => void) | (() => void)[] | undefined;
                        beforeUnmount?: (() => void) | (() => void)[] | undefined;
                        destroyed?: (() => void) | (() => void)[] | undefined;
                        unmounted?: (() => void) | (() => void)[] | undefined;
                        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                    triggerRef: import("vue").Ref<HTMLElement | undefined>;
                    popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: import("vue").Ref<HTMLElement | undefined>;
                    referenceRef: import("vue").Ref<HTMLElement | undefined>;
                    popperProvides: import("element-plus").ElPopperInjectionContext;
                }> & import("vue").ComponentCustomProperties) | null>;
                open: import("vue").Ref<boolean>;
                hide: () => void;
                updatePopper: () => void;
                onOpen: () => void;
                onClose: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                disabled: boolean;
                trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"focus" | "click" | "hover" | "contextmenu" | ("focus" | "click" | "hover" | "contextmenu")[]>, unknown, unknown>;
                offset: number;
                effect: string;
                placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                popperClass: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                showAfter: number;
                hideAfter: number;
                boundariesPadding: number;
                fallbackPlacements: import("element-plus").Placement[];
                gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperOptions: Partial<import("element-plus").Options>;
                strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "fixed" | "absolute", unknown>;
                style: import("vue").StyleValue;
                className: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperStyle: import("vue").StyleValue;
                referenceEl: HTMLElement;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                pure: boolean;
                appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                content: string;
                rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                transition: string;
                teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                persistent: boolean;
                open: boolean;
                arrowOffset: number;
                virtualRef: import("element-plus").Measurable;
                virtualTriggering: boolean;
                "onUpdate:visible": (val: boolean) => void;
                openDelay: number;
                visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            }> & {
                beforeCreate?: (() => void) | (() => void)[] | undefined;
                created?: (() => void) | (() => void)[] | undefined;
                beforeMount?: (() => void) | (() => void)[] | undefined;
                mounted?: (() => void) | (() => void)[] | undefined;
                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                updated?: (() => void) | (() => void)[] | undefined;
                activated?: (() => void) | (() => void)[] | undefined;
                deactivated?: (() => void) | (() => void)[] | undefined;
                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                destroyed?: (() => void) | (() => void)[] | undefined;
                unmounted?: (() => void) | (() => void)[] | undefined;
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
            visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
            hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
            showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
            arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
            disabled: BooleanConstructor;
            trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"focus" | "click" | "hover" | "contextmenu" | ("focus" | "click" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
            virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
            virtualTriggering: BooleanConstructor;
            onMouseenter: FunctionConstructor;
            onMouseleave: FunctionConstructor;
            onClick: FunctionConstructor;
            onKeydown: FunctionConstructor;
            onFocus: FunctionConstructor;
            onBlur: FunctionConstructor;
            onContextmenu: FunctionConstructor;
            id: StringConstructor;
            open: BooleanConstructor;
            appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
            content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            persistent: BooleanConstructor;
            ariaLabel: StringConstructor;
            visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
            transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
            teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | any[] | {
                [x: string]: boolean;
            })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
            enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            pure: BooleanConstructor;
            popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | any[] | {
                [x: string]: boolean;
            })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
            stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            zIndex: NumberConstructor;
            boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
            gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
            placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
            popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
            strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
            showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{
            compatShowAfter: import("vue").ComputedRef<number>;
            compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
            popperRef: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
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
                $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                    triggerRef: import("vue").Ref<HTMLElement | undefined>;
                    popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: import("vue").Ref<HTMLElement | undefined>;
                    referenceRef: import("vue").Ref<HTMLElement | undefined>;
                    popperProvides: import("element-plus").ElPopperInjectionContext;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                    beforeCreate?: (() => void) | (() => void)[] | undefined;
                    created?: (() => void) | (() => void)[] | undefined;
                    beforeMount?: (() => void) | (() => void)[] | undefined;
                    mounted?: (() => void) | (() => void)[] | undefined;
                    beforeUpdate?: (() => void) | (() => void)[] | undefined;
                    updated?: (() => void) | (() => void)[] | undefined;
                    activated?: (() => void) | (() => void)[] | undefined;
                    deactivated?: (() => void) | (() => void)[] | undefined;
                    beforeDestroy?: (() => void) | (() => void)[] | undefined;
                    beforeUnmount?: (() => void) | (() => void)[] | undefined;
                    destroyed?: (() => void) | (() => void)[] | undefined;
                    unmounted?: (() => void) | (() => void)[] | undefined;
                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                triggerRef: import("vue").Ref<HTMLElement | undefined>;
                popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                contentRef: import("vue").Ref<HTMLElement | undefined>;
                referenceRef: import("vue").Ref<HTMLElement | undefined>;
                popperProvides: import("element-plus").ElPopperInjectionContext;
            }> & import("vue").ComponentCustomProperties) | null>;
            open: import("vue").Ref<boolean>;
            hide: () => void;
            updatePopper: () => void;
            onOpen: () => void;
            onClose: () => void;
        }> & import("vue").ComponentCustomProperties) | null>;
        popperPaneRef: import("vue").ComputedRef<HTMLElement | undefined>;
        tags: import("vue").Ref<HTMLElement | null>;
        selectWrapper: import("vue").Ref<HTMLElement | null>;
        scrollbar: import("vue").Ref<{
            handleScroll: () => void;
        } | null>;
        wrapperKls: import("vue").ComputedRef<string[]>;
        selectTagsStyle: import("vue").ComputedRef<{
            maxWidth: string;
            width: string;
        }>;
        compatTeleported: import("vue").ComputedRef<boolean>;
        nsSelect: {
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
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "focus" | "change" | "update:modelValue" | "clear" | "visible-change" | "remove-tag")[], "blur" | "focus" | "change" | "update:modelValue" | "clear" | "visible-change" | "remove-tag", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        name: StringConstructor;
        id: StringConstructor;
        modelValue: {
            type: (ObjectConstructor | StringConstructor | BooleanConstructor | NumberConstructor | ArrayConstructor)[];
            default: undefined;
        };
        autocomplete: {
            type: StringConstructor;
            default: string;
        };
        automaticDropdown: BooleanConstructor;
        size: {
            type: import("vue").PropType<"" | "small" | "default" | "large">;
            validator: (val: string) => val is "" | "small" | "default" | "large";
        };
        effect: {
            type: import("vue").PropType<string>;
            default: string;
        };
        disabled: BooleanConstructor;
        clearable: BooleanConstructor;
        filterable: BooleanConstructor;
        allowCreate: BooleanConstructor;
        loading: BooleanConstructor;
        popperClass: {
            type: StringConstructor;
            default: string;
        };
        remote: BooleanConstructor;
        loadingText: StringConstructor;
        noMatchText: StringConstructor;
        noDataText: StringConstructor;
        remoteMethod: FunctionConstructor;
        filterMethod: FunctionConstructor;
        multiple: BooleanConstructor;
        multipleLimit: {
            type: NumberConstructor;
            default: number;
        };
        placeholder: {
            type: StringConstructor;
        };
        defaultFirstOption: BooleanConstructor;
        reserveKeyword: {
            type: BooleanConstructor;
            default: boolean;
        };
        valueKey: {
            type: StringConstructor;
            default: string;
        };
        collapseTags: BooleanConstructor;
        collapseTagsTooltip: {
            type: BooleanConstructor;
            default: boolean;
        };
        popperAppendToBody: {
            type: BooleanConstructor;
            default: undefined;
        };
        teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        persistent: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearIcon: {
            type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
            default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        };
        fitInputWidth: {
            type: BooleanConstructor;
            default: boolean;
        };
        suffixIcon: {
            type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
            default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        };
        tagType: {
            default: string;
            type: import("vue").PropType<import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>>;
            required: false;
            validator: ((val: unknown) => boolean) | undefined;
            __elPropsReservedKey: true;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onClear?: ((...args: any[]) => any) | undefined;
        onBlur?: ((...args: any[]) => any) | undefined;
        onFocus?: ((...args: any[]) => any) | undefined;
        "onVisible-change"?: ((...args: any[]) => any) | undefined;
        "onRemove-tag"?: ((...args: any[]) => any) | undefined;
    }, {
        disabled: boolean;
        loading: boolean;
        modelValue: string | number | boolean | unknown[] | Record<string, any>;
        effect: string;
        valueKey: string;
        popperClass: string;
        popperAppendToBody: boolean;
        teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        persistent: boolean;
        autocomplete: string;
        clearable: boolean;
        suffixIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
        multiple: boolean;
        filterable: boolean;
        collapseTags: boolean;
        collapseTagsTooltip: boolean;
        tagType: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>;
        clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
        automaticDropdown: boolean;
        allowCreate: boolean;
        remote: boolean;
        multipleLimit: number;
        defaultFirstOption: boolean;
        reserveKeyword: boolean;
        fitInputWidth: boolean;
    }>> & {
        Option: import("vue").DefineComponent<{
            value: {
                required: true;
                type: (ObjectConstructor | StringConstructor | BooleanConstructor | NumberConstructor)[];
            };
            label: (StringConstructor | NumberConstructor)[];
            created: BooleanConstructor;
            disabled: {
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
            currentLabel: import("vue").ComputedRef<any>;
            itemSelected: import("vue").ComputedRef<boolean>;
            isDisabled: import("vue").ComputedRef<any>;
            select: import("element-plus").SelectContext | undefined;
            hoverItem: () => void;
            visible: import("vue").Ref<boolean>;
            hover: import("vue").Ref<boolean>;
            selectOptionClick: () => void;
            states: {
                index: number;
                groupDisabled: boolean;
                visible: boolean;
                hitState: boolean;
                hover: boolean;
            };
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            value: {
                required: true;
                type: (ObjectConstructor | StringConstructor | BooleanConstructor | NumberConstructor)[];
            };
            label: (StringConstructor | NumberConstructor)[];
            created: BooleanConstructor;
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {
            disabled: boolean;
            created: boolean;
        }>;
        OptionGroup: import("vue").DefineComponent<{
            label: StringConstructor;
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, {
            visible: import("vue").Ref<boolean>;
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
            label: StringConstructor;
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {
            disabled: boolean;
        }>;
    };
    ElOption: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        value: {
            required: true;
            type: (ObjectConstructor | StringConstructor | BooleanConstructor | NumberConstructor)[];
        };
        label: (StringConstructor | NumberConstructor)[];
        created: BooleanConstructor;
        disabled: {
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
        currentLabel: import("vue").ComputedRef<any>;
        itemSelected: import("vue").ComputedRef<boolean>;
        isDisabled: import("vue").ComputedRef<any>;
        select: import("element-plus").SelectContext | undefined;
        hoverItem: () => void;
        visible: import("vue").Ref<boolean>;
        hover: import("vue").Ref<boolean>;
        selectOptionClick: () => void;
        states: {
            index: number;
            groupDisabled: boolean;
            visible: boolean;
            hitState: boolean;
            hover: boolean;
        };
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        value: {
            required: true;
            type: (ObjectConstructor | StringConstructor | BooleanConstructor | NumberConstructor)[];
        };
        label: (StringConstructor | NumberConstructor)[];
        created: BooleanConstructor;
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>>, {
        disabled: boolean;
        created: boolean;
    }>>;
    ElTree: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        data: {
            type: ArrayConstructor;
            default: () => never[];
        };
        emptyText: {
            type: StringConstructor;
        };
        renderAfterExpand: {
            type: BooleanConstructor;
            default: boolean;
        };
        nodeKey: StringConstructor;
        checkStrictly: BooleanConstructor;
        defaultExpandAll: BooleanConstructor;
        expandOnClickNode: {
            type: BooleanConstructor;
            default: boolean;
        };
        checkOnClickNode: BooleanConstructor;
        checkDescendants: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoExpandParent: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultCheckedKeys: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
        defaultExpandedKeys: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
        currentNodeKey: import("vue").PropType<string | number>;
        renderContent: FunctionConstructor;
        showCheckbox: {
            type: BooleanConstructor;
            default: boolean;
        };
        draggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        allowDrag: FunctionConstructor;
        allowDrop: FunctionConstructor;
        props: {
            type: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeOptionProps>;
            default: () => {
                children: string;
                label: string;
                disabled: string;
            };
        };
        lazy: {
            type: BooleanConstructor;
            default: boolean;
        };
        highlightCurrent: BooleanConstructor;
        load: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").LoadFunction>;
        filterNodeMethod: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").FilterNodeMethodFunction>;
        accordion: BooleanConstructor;
        indent: {
            type: NumberConstructor;
            default: number;
        };
        icon: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
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
        store: import("vue").Ref<{
            currentNode: {
                id: number;
                text: string;
                checked: boolean;
                indeterminate: boolean;
                data: {
                    [x: string]: any;
                };
                expanded: boolean;
                parent: any;
                visible: boolean;
                isCurrent: boolean;
                store: any;
                isLeafByUser: boolean;
                isLeaf: boolean;
                canFocus: boolean;
                level: number;
                loaded: boolean;
                childNodes: any[];
                loading: boolean;
                initialize: () => void;
                setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                readonly label: string;
                readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
                readonly disabled: boolean;
                readonly nextSibling: any;
                readonly previousSibling: any;
                contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
                remove: () => void;
                insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
                insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
                doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                collapse: () => void;
                shouldLoadData: () => boolean;
                updateLeafState: () => void;
                setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
                getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
                updateChildren: () => void;
                loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
            };
            currentNodeKey: import("element-plus/es/components/tree/src/tree.type").TreeKey;
            nodesMap: {
                [x: string]: {
                    id: number;
                    text: string;
                    checked: boolean;
                    indeterminate: boolean;
                    data: {
                        [x: string]: any;
                    };
                    expanded: boolean;
                    parent: any;
                    visible: boolean;
                    isCurrent: boolean;
                    store: any;
                    isLeafByUser: boolean;
                    isLeaf: boolean;
                    canFocus: boolean;
                    level: number;
                    loaded: boolean;
                    childNodes: any[];
                    loading: boolean;
                    initialize: () => void;
                    setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                    readonly label: string;
                    readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
                    readonly disabled: boolean;
                    readonly nextSibling: any;
                    readonly previousSibling: any;
                    contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
                    remove: () => void;
                    insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
                    insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                    insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                    removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
                    removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                    expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
                    doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                    collapse: () => void;
                    shouldLoadData: () => boolean;
                    updateLeafState: () => void;
                    setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
                    getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
                    updateChildren: () => void;
                    loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                };
            };
            root: {
                id: number;
                text: string;
                checked: boolean;
                indeterminate: boolean;
                data: {
                    [x: string]: any;
                };
                expanded: boolean;
                parent: any;
                visible: boolean;
                isCurrent: boolean;
                store: any;
                isLeafByUser: boolean;
                isLeaf: boolean;
                canFocus: boolean;
                level: number;
                loaded: boolean;
                childNodes: any[];
                loading: boolean;
                initialize: () => void;
                setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                readonly label: string;
                readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
                readonly disabled: boolean;
                readonly nextSibling: any;
                readonly previousSibling: any;
                contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
                remove: () => void;
                insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
                insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
                doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                collapse: () => void;
                shouldLoadData: () => boolean;
                updateLeafState: () => void;
                setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
                getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
                updateChildren: () => void;
                loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
            };
            data: {
                [x: string]: any;
            }[];
            lazy: boolean;
            load: import("element-plus/es/components/tree/src/tree.type").LoadFunction;
            filterNodeMethod: import("element-plus/es/components/tree/src/tree.type").FilterNodeMethodFunction;
            key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
            defaultCheckedKeys: import("element-plus/es/components/tree/src/tree.type").TreeKey[];
            checkStrictly: boolean;
            defaultExpandedKeys: import("element-plus/es/components/tree/src/tree.type").TreeKey[];
            autoExpandParent: boolean;
            defaultExpandAll: boolean;
            checkDescendants: boolean;
            props: {
                children?: string | undefined;
                label?: string | ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => string) | undefined;
                disabled?: string | ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => string) | undefined;
                isLeaf?: string | ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => boolean) | undefined;
                class?: ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => string | {
                    [key: string]: boolean;
                }) | undefined;
            };
            initialize: () => void;
            filter: (value: any) => void;
            setData: (newVal: import("element-plus/es/components/tree/src/tree.type").TreeData) => void;
            getNode: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => import("element-plus/es/components/tree/src/model/node").default;
            insertBefore: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refData: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            insertAfter: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refData: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            remove: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/model/node").default) => void;
            append: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, parentData: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/model/node").default) => void;
            _initDefaultCheckedNodes: () => void;
            _initDefaultCheckedNode: (node: import("element-plus/es/components/tree/src/model/node").default) => void;
            setDefaultCheckedKey: (newVal: import("element-plus/es/components/tree/src/tree.type").TreeKey[]) => void;
            registerNode: (node: import("element-plus/es/components/tree/src/model/node").default) => void;
            deregisterNode: (node: import("element-plus/es/components/tree/src/model/node").default) => void;
            getCheckedNodes: (leafOnly?: boolean | undefined, includeHalfChecked?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            getCheckedKeys: (leafOnly?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
            getHalfCheckedNodes: () => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            getHalfCheckedKeys: () => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
            _getAllNodes: () => import("element-plus/es/components/tree/src/model/node").default[];
            updateChildren: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, data: import("element-plus/es/components/tree/src/tree.type").TreeData) => void;
            _setCheckedKeys: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, leafOnly: boolean | undefined, checkedKeys: {
                [key: string]: boolean;
            }) => void;
            setCheckedNodes: (array: import("element-plus/es/components/tree/src/model/node").default[], leafOnly?: boolean | undefined) => void;
            setCheckedKeys: (keys: import("element-plus/es/components/tree/src/tree.type").TreeKey[], leafOnly?: boolean | undefined) => void;
            setDefaultExpandedKeys: (keys: import("element-plus/es/components/tree/src/tree.type").TreeKey[]) => void;
            setChecked: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData, checked: boolean, deep: boolean) => void;
            getCurrentNode: () => import("element-plus/es/components/tree/src/model/node").default;
            setCurrentNode: (currentNode: import("element-plus/es/components/tree/src/model/node").default) => void;
            setUserCurrentNode: (node: import("element-plus/es/components/tree/src/model/node").default, shouldAutoExpandParent?: boolean | undefined) => void;
            setCurrentNodeKey: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, shouldAutoExpandParent?: boolean | undefined) => void;
        }>;
        root: import("vue").Ref<{
            id: number;
            text: string;
            checked: boolean;
            indeterminate: boolean;
            data: {
                [x: string]: any;
            };
            expanded: boolean;
            parent: any;
            visible: boolean;
            isCurrent: boolean;
            store: any;
            isLeafByUser: boolean;
            isLeaf: boolean;
            canFocus: boolean;
            level: number;
            loaded: boolean;
            childNodes: any[];
            loading: boolean;
            initialize: () => void;
            setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            readonly label: string;
            readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
            readonly disabled: boolean;
            readonly nextSibling: any;
            readonly previousSibling: any;
            contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
            remove: () => void;
            insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
            insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
            insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
            removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
            removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
            doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
            collapse: () => void;
            shouldLoadData: () => boolean;
            updateLeafState: () => void;
            setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
            getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            updateChildren: () => void;
            loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
        }>;
        currentNode: import("vue").Ref<{
            id: number;
            text: string;
            checked: boolean;
            indeterminate: boolean;
            data: {
                [x: string]: any;
            };
            expanded: boolean;
            parent: any;
            visible: boolean;
            isCurrent: boolean;
            store: any;
            isLeafByUser: boolean;
            isLeaf: boolean;
            canFocus: boolean;
            level: number;
            loaded: boolean;
            childNodes: any[];
            loading: boolean;
            initialize: () => void;
            setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            readonly label: string;
            readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
            readonly disabled: boolean;
            readonly nextSibling: any;
            readonly previousSibling: any;
            contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
            remove: () => void;
            insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
            insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
            insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
            removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
            removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
            doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
            collapse: () => void;
            shouldLoadData: () => boolean;
            updateLeafState: () => void;
            setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
            getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            updateChildren: () => void;
            loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
        }>;
        dragState: import("vue").Ref<{
            showDropIndicator: boolean;
            draggingNode: null;
            dropNode: null;
            allowDrop: boolean;
            dropType: null;
        }>;
        el$: import("vue").Ref<import("element-plus/es/utils").Nullable<HTMLElement>>;
        dropIndicator$: import("vue").Ref<import("element-plus/es/utils").Nullable<HTMLElement>>;
        isEmpty: import("vue").ComputedRef<boolean>;
        filter: (value: any) => void;
        getNodeKey: (node: import("element-plus/es/components/tree/src/model/node").default) => any;
        getNodePath: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
        getCheckedNodes: (leafOnly?: boolean | undefined, includeHalfChecked?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
        getCheckedKeys: (leafOnly?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
        getCurrentNode: () => import("element-plus/es/components/tree/src/tree.type").TreeNodeData;
        getCurrentKey: () => any;
        setCheckedNodes: (nodes: import("element-plus/es/components/tree/src/model/node").default[], leafOnly?: boolean | undefined) => void;
        setCheckedKeys: (keys: any, leafOnly?: boolean | undefined) => void;
        setChecked: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData, checked: boolean, deep: boolean) => void;
        getHalfCheckedNodes: () => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
        getHalfCheckedKeys: () => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
        setCurrentNode: (node: import("element-plus/es/components/tree/src/model/node").default, shouldAutoExpandParent?: boolean | undefined) => void;
        setCurrentKey: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, shouldAutoExpandParent?: boolean | undefined) => void;
        t: import("element-plus").Translator;
        getNode: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => import("element-plus/es/components/tree/src/model/node").default;
        remove: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/model/node").default) => void;
        append: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, parentNode: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/model/node").default) => void;
        insertBefore: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refNode: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
        insertAfter: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refNode: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
        handleNodeExpand: (nodeData: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default, instance: import("vue").ComponentInternalInstance) => void;
        updateKeyChildren: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, data: import("element-plus/es/components/tree/src/tree.type").TreeData) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("current-change" | "node-expand" | "check-change" | "node-click" | "node-contextmenu" | "node-collapse" | "check" | "node-drag-start" | "node-drag-end" | "node-drop" | "node-drag-leave" | "node-drag-enter" | "node-drag-over")[], "current-change" | "node-expand" | "check-change" | "node-click" | "node-contextmenu" | "node-collapse" | "check" | "node-drag-start" | "node-drag-end" | "node-drop" | "node-drag-leave" | "node-drag-enter" | "node-drag-over", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: ArrayConstructor;
            default: () => never[];
        };
        emptyText: {
            type: StringConstructor;
        };
        renderAfterExpand: {
            type: BooleanConstructor;
            default: boolean;
        };
        nodeKey: StringConstructor;
        checkStrictly: BooleanConstructor;
        defaultExpandAll: BooleanConstructor;
        expandOnClickNode: {
            type: BooleanConstructor;
            default: boolean;
        };
        checkOnClickNode: BooleanConstructor;
        checkDescendants: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoExpandParent: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultCheckedKeys: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
        defaultExpandedKeys: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
        currentNodeKey: import("vue").PropType<string | number>;
        renderContent: FunctionConstructor;
        showCheckbox: {
            type: BooleanConstructor;
            default: boolean;
        };
        draggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        allowDrag: FunctionConstructor;
        allowDrop: FunctionConstructor;
        props: {
            type: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeOptionProps>;
            default: () => {
                children: string;
                label: string;
                disabled: string;
            };
        };
        lazy: {
            type: BooleanConstructor;
            default: boolean;
        };
        highlightCurrent: BooleanConstructor;
        load: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").LoadFunction>;
        filterNodeMethod: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").FilterNodeMethodFunction>;
        accordion: BooleanConstructor;
        indent: {
            type: NumberConstructor;
            default: number;
        };
        icon: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
    }>> & {
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onNode-expand"?: ((...args: any[]) => any) | undefined;
        onCheck?: ((...args: any[]) => any) | undefined;
        "onCheck-change"?: ((...args: any[]) => any) | undefined;
        "onNode-click"?: ((...args: any[]) => any) | undefined;
        "onNode-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onNode-collapse"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-start"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-end"?: ((...args: any[]) => any) | undefined;
        "onNode-drop"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-leave"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-enter"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-over"?: ((...args: any[]) => any) | undefined;
    }, {
        data: unknown[];
        lazy: boolean;
        props: import("element-plus/es/components/tree/src/tree.type").TreeOptionProps;
        draggable: boolean;
        checkStrictly: boolean;
        accordion: boolean;
        defaultExpandAll: boolean;
        indent: number;
        renderAfterExpand: boolean;
        showCheckbox: boolean;
        expandOnClickNode: boolean;
        checkOnClickNode: boolean;
        checkDescendants: boolean;
        autoExpandParent: boolean;
        highlightCurrent: boolean;
    }>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:valueChange"[], "update:valueChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    tree: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
    };
    defaultProps: {
        type: null;
        required: false;
        default: () => {
            children: string;
            label: string;
            key: string;
        };
    };
}>> & {
    "onUpdate:valueChange"?: ((...args: any[]) => any) | undefined;
}, {
    value: string;
    tree: unknown[];
    defaultProps: any;
}>;
export default _sfc_main;
