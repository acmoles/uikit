import { BaseOutProperties, Container, ContainerProperties, InProperties, RenderContext, WithSignal } from '@pmndrs/uikit';
export type ButtonLabelSubtextProperties = ContainerProperties;
export declare class ButtonLabelSubtext extends Container<BaseOutProperties> {
    constructor(inputProperties?: InProperties<BaseOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BaseOutProperties>;
        defaults?: WithSignal<BaseOutProperties>;
    });
}
