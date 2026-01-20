import { BaseOutProperties, Container, InProperties, RenderContext } from '@pmndrs/uikit';
export type AlertIconProperties = InProperties<BaseOutProperties>;
export declare class AlertIcon extends Container<BaseOutProperties> {
    constructor(inputProperties?: AlertIconProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
