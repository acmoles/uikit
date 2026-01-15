import { BaseOutProperties, Container, InProperties, RenderContext, Svg, UnionizeVariants } from '@pmndrs/uikit';
declare const _iconIndicatorVariants: {
    none: {
        content: string;
        color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
    };
    good: {
        content: string;
        color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
    };
    poor: {
        content: string;
        color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
    };
    bad: {
        content: string;
        color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
    };
};
declare const iconIndicatorVariants: UnionizeVariants<typeof _iconIndicatorVariants>;
export type IconIndicatorOutProperties = BaseOutProperties & {
    /**
     * @default none
     */
    variant?: keyof typeof iconIndicatorVariants;
};
export type IconIndicatorProperties = InProperties<IconIndicatorOutProperties>;
export declare class IconIndicator extends Container<IconIndicatorOutProperties> {
    readonly icon: Svg;
    constructor(inputProperties?: InProperties<IconIndicatorOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<IconIndicatorOutProperties>;
    });
    dispose(): void;
    add(): this;
}
export {};
