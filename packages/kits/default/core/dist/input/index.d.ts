import { InProperties, BaseOutProperties, Input as InputImpl, InputOutProperties as BaseInputOutProperties, RenderContext } from '@pmndrs/uikit';
export type InputOutProperties = BaseInputOutProperties;
export type InputProperties = InProperties<InputOutProperties>;
export declare class Input extends InputImpl<InputOutProperties> {
    constructor(inputProperties?: InProperties<InputOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<InputOutProperties>;
    });
}
