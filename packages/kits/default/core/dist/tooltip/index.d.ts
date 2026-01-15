import { BaseOutProperties, Container, InProperties, RenderContext } from '@pmndrs/uikit';
export type TooltipProperties = InProperties<BaseOutProperties>;
export declare class Tooltip extends Container<BaseOutProperties> {
    readonly open: any;
    private timeoutId?;
    constructor(inputProperties?: TooltipProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
export * from './trigger.js';
export * from './content.js';
