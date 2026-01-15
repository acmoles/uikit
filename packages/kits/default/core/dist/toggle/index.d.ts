import { Container, InProperties, BaseOutProperties, RenderContext, UnionizeVariants } from '@pmndrs/uikit';
declare const _toggleVariants: {
    default: {};
    outline: {
        borderWidth: number;
        borderColor: ReadonlySignal<ColorRepresentation>;
        hover: {
            backgroundColor: ReadonlySignal<ColorRepresentation>;
        };
    };
};
declare const toggleVariants: UnionizeVariants<typeof _toggleVariants>;
declare const toggleSizes: {
    default: {
        height: number;
        paddingX: number;
    };
    sm: {
        height: number;
        paddingX: number;
    };
    lg: {
        height: number;
        paddingX: number;
    };
};
export type ToggleOutProperties = {
    checked?: boolean;
    disabled?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    variant?: keyof typeof toggleVariants;
    size?: keyof typeof toggleSizes;
} & BaseOutProperties;
export type ToggleProperties = InProperties<ToggleOutProperties>;
export declare class Toggle extends Container<ToggleOutProperties> {
    readonly uncontrolledSignal: any;
    readonly currentSignal: any;
    constructor(inputProperties?: InProperties<ToggleOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<ToggleOutProperties>;
    });
}
export {};
