import { Container, InProperties, BaseOutProperties, RenderContext, ContainerProperties } from '@pmndrs/uikit';
export type MenubarProperties = ContainerProperties;
export declare class Menubar extends Container {
    constructor(inputProperties?: InProperties<BaseOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
export * from './menu.js';
export * from './trigger.js';
