import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
export type TabsTriggerOutProperties = BaseOutProperties & {
    disabled?: boolean;
    value?: string;
};
export type TabsTriggerProperties = InProperties<TabsTriggerOutProperties>;
export declare class TabsTrigger extends Container<TabsTriggerOutProperties> {
    constructor(inputProperties?: InProperties<TabsTriggerOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<TabsTriggerOutProperties>;
    });
}
