import { Container, InProperties, BaseOutProperties, RenderContext, ContainerProperties } from '@pmndrs/uikit';
export type MenubarMenuProperties = ContainerProperties;
export declare class MenubarMenu extends Container {
    constructor(inputProperties?: InProperties<BaseOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
