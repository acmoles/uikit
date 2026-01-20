import { BaseOutProperties, Container, InProperties, RenderContext } from '@pmndrs/uikit';
export type TooltipTriggerProperties = InProperties<BaseOutProperties>;
export declare class TooltipTrigger extends Container<BaseOutProperties> {
    constructor(inputProperties?: TooltipTriggerProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
