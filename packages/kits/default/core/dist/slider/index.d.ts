import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
export type SliderOutProperties = {
    disabled?: boolean;
    value?: number | string;
    min?: number | string;
    max?: number | string;
    step?: number | string;
    defaultValue?: number | string;
    onValueChange?: (value: number) => void;
} & BaseOutProperties;
export type SliderProperties = InProperties<SliderOutProperties>;
export declare class Slider extends Container<SliderOutProperties> {
    private downPointerId?;
    readonly uncontrolledSignal: any;
    readonly currentSignal: any;
    readonly track: Container;
    readonly fill: Container;
    readonly thumb: Container;
    constructor(inputProperties?: InProperties<SliderOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<SliderOutProperties>;
    });
    private handleSetValue;
    dispose(): void;
    add(): this;
}
