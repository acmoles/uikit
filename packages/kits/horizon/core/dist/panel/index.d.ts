import { BaseOutProperties, Container, InProperties, RenderContext } from '@pmndrs/uikit';
export type PanelOutProperties = BaseOutProperties;
export type PanelProperties = InProperties<PanelOutProperties>;
export declare class Panel extends Container<BaseOutProperties> {
    constructor(inputProperties?: InProperties<BaseOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
