import { SvgOutProperties, SvgProperties, InProperties, RenderContext, BaseOutProperties } from '@pmndrs/uikit';
import { ChevronDown } from '@pmndrs/uikit-lucide';
export type AccordionTriggerIconProperties = SvgProperties;
export declare class AccordionTriggerIcon extends ChevronDown<SvgOutProperties> {
    constructor(inputProperties?: InProperties<SvgOutProperties>, initialClasses?: Array<BaseOutProperties | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<SvgOutProperties>;
    });
}
