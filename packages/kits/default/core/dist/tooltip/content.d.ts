import { BaseOutProperties, Container, InProperties, RenderContext } from '@pmndrs/uikit';
export type TooltipContentProperties = InProperties<TooltipContentOutProperties>;
export type TooltipContentOutProperties = BaseOutProperties & {
    sideOffset?: number | string;
};
export declare class TooltipContent extends Container<TooltipContentOutProperties> {
    constructor(inputProperties?: TooltipContentProperties, initialClasses?: Array<InProperties<TooltipContentOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<TooltipContentOutProperties>;
    });
}
