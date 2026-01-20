import { Container, ContainerProperties, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
export type TabsListProperties = ContainerProperties;
export declare class TabsList extends Container {
    constructor(inputProperties?: InProperties<BaseOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
