import { BaseOutProperties, Container, InProperties, RenderContext, UnionizeVariants } from '@pmndrs/uikit';
import { CheckIcon } from '@pmndrs/uikit-lucide';
declare const _checkboxVariants: {
    normal: {
        width: number;
        height: number;
        borderRadius: number;
        backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        hover: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
        active: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
        important: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
        '*': {
            width: number;
            height: number;
        };
    };
    onMedia: {
        width: number;
        height: number;
        borderRadius: number;
        hover: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
            color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
        active: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
            color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
        important: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
            color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
        '*': {
            width: number;
            height: number;
        };
    };
};
declare const checboxVariants: UnionizeVariants<typeof _checkboxVariants>;
export type CheckboxOutProperties = BaseOutProperties & {
    checked?: boolean;
    disabled?: boolean;
    variant?: keyof typeof checboxVariants;
    onCheckedChange?: (checked: boolean) => void;
    defaultChecked?: boolean;
};
export type CheckboxProperties = InProperties<CheckboxOutProperties>;
export declare class Checkbox extends Container<CheckboxOutProperties> {
    readonly uncontrolledSignal: import("@preact/signals-core").Signal<boolean | undefined>;
    readonly currentSignal: import("@preact/signals-core").ReadonlySignal<boolean | undefined>;
    readonly icon: CheckIcon;
    readonly defaultOnMediaRing: Container;
    constructor(inputProperties?: InProperties<CheckboxOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<CheckboxOutProperties>;
    });
    dispose(): void;
    add(): this;
}
export {};
