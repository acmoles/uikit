import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
export type RadioGroupOutProperties = {
    value?: string;
    onValueChange?: (value?: string) => void;
    defaultValue?: string;
} & BaseOutProperties;
export type RadioGroupProperties = InProperties<RadioGroupOutProperties>;
export declare class RadioGroup extends Container<RadioGroupOutProperties> {
    readonly uncontrolledSignal: any;
    readonly currentSignal: any;
    constructor(inputProperties?: RadioGroupProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<RadioGroupOutProperties>;
    });
}
export * from './item.js';
