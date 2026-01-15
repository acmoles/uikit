import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
export type TabsContentOutProperties = BaseOutProperties & {
    value?: string;
};
export type TabsContentProperties = InProperties<TabsContentOutProperties>;
export declare class TabsContent extends Container<TabsContentOutProperties> {
    constructor(inputProperties?: TabsContentProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<TabsContentOutProperties>;
    });
}
