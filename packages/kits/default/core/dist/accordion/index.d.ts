import { BaseOutProperties, Container, ContainerProperties, InProperties, RenderContext } from '@pmndrs/uikit';
export type AccordionProperties = ContainerProperties;
export declare class Accordion extends Container {
    readonly openItemValue: any;
    constructor(inputProperties?: InProperties<BaseOutProperties>, initialClasses?: (string | InProperties<BaseOutProperties>)[], config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
export * from './item.js';
export * from './trigger.js';
export * from './trigger-icon.js';
export * from './content.js';
