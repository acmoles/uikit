import { BaseOutProperties, Container, InProperties, RenderContext, UnionizeVariants } from '@pmndrs/uikit';
declare const _dropdownSizes: {
    lg: {
        paddingX: number;
        paddingY: number;
        fontSize: number;
        lineHeight: string;
    };
    sm: {
        paddingX: number;
        paddingY: number;
        fontSize: number;
        lineHeight: string;
    };
};
declare const dropdownSizes: UnionizeVariants<typeof _dropdownSizes>;
export type DropdownOutProperties = BaseOutProperties & {
    /**
     * @default "lg"
     */
    size?: keyof typeof dropdownSizes;
    value?: string;
    onValueChange?: (value?: string) => void;
    defaultValue?: string;
    open?: boolean;
    onOpenChange?: (value?: boolean) => void;
    defaultOpen?: string;
};
export type DropdownProperties = InProperties<DropdownOutProperties>;
export declare class Dropdown extends Container<DropdownOutProperties> {
    readonly uncontrolledSignal: import("@preact/signals-core").Signal<string | undefined>;
    readonly currentSignal: import("@preact/signals-core").ReadonlySignal<string | undefined>;
    readonly uncontrolledOpenSignal: import("@preact/signals-core").Signal<boolean | undefined>;
    readonly currentOpenSignal: import("@preact/signals-core").ReadonlySignal<string | boolean>;
    constructor(inputProperties?: InProperties<DropdownOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<DropdownOutProperties>;
    });
}
export * from './button.js';
export * from './icon.js';
export * from './avatar.js';
export * from './list.js';
export * from './list-item.js';
export * from './text-value.js';
