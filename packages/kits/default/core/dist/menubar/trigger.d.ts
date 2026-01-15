import { Container, ContainerProperties, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
export type MenubarTriggerProperties = ContainerProperties;
export declare class MenubarTrigger extends Container {
    constructor(inputProperties?: InProperties<BaseOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
