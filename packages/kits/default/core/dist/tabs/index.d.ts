import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
export type TabsOutProperties = BaseOutProperties & {
    value?: string;
    onValueChange?: (value: string) => void;
    defaultValue?: string;
};
export type TabsProperties = InProperties<TabsOutProperties>;
export declare class Tabs extends Container<TabsOutProperties> {
    readonly uncontrolledSignal: any;
    readonly currentSignal: any;
    constructor(inputProperties?: InProperties<TabsOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<TabsOutProperties>;
    });
}
export * from './list.js';
export * from './trigger.js';
export * from './content.js';
