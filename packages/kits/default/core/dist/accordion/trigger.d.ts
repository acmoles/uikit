import { BaseOutProperties, Container, ContainerProperties, InProperties, RenderContext } from '@pmndrs/uikit';
export type AccordionTriggerProperties = ContainerProperties;
export declare class AccordionTrigger extends Container {
    constructor(inputProperties?: InProperties<BaseOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides: InProperties<BaseOutProperties>;
    });
}
