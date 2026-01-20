import { BaseOutProperties, Component, Container, InProperties, RenderContext, Text } from '@pmndrs/uikit';
export declare function percentageFormatting(value: number): string;
export type SliderOutProperties = BaseOutProperties & {
    value?: number | string;
    onValueChange?: (value: number) => void;
    valueFormat?: 'percentage' | ((value: number) => string);
    defaultValue?: number | string;
    min?: number | string;
    max?: number | string;
    step?: number | string;
    /**
     * @default "md"
     */
    size?: 'sm' | 'md' | 'lg';
    leftLabel?: string;
    rightLabel?: string;
    icon: {
        new (inputProperties: any, initialClasses: any, config: {
            defaultOverrides?: InProperties<BaseOutProperties>;
        }): Component;
    };
};
export type SliderProperties = InProperties<SliderOutProperties>;
export declare class Slider extends Container<SliderOutProperties> {
    readonly uncontrolledSignal: import("@preact/signals-core").Signal<number | undefined>;
    readonly currentSignal: import("@preact/signals-core").ReadonlySignal<number>;
    private downPointerId?;
    readonly touchTarget: Container;
    readonly track: Container;
    readonly progress: Container;
    readonly thumb: Container;
    readonly thumbText: Text;
    readonly labels: Container;
    readonly leftLabel: Text;
    readonly rightLabel: Text;
    icon?: Component;
    constructor(inputProperties?: InProperties<SliderOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<SliderOutProperties>;
    });
    private handleSetValue;
    dispose(): void;
    add(): this;
}
