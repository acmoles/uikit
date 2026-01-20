import { BaseOutProperties, Container, InProperties, RenderContext } from '@pmndrs/uikit';
export type AccordionContentProperties = InProperties<BaseOutProperties>;
export declare class AccordionContent extends Container<BaseOutProperties> {
    constructor(inputProperties?: InProperties<BaseOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides: InProperties<BaseOutProperties>;
    });
}
