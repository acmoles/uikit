import { BaseOutProperties, Container, InProperties, RenderContext } from '@pmndrs/uikit';
export type AlertTitleProperties = InProperties<BaseOutProperties>;
export declare class AlertTitle extends Container<BaseOutProperties> {
    constructor(inputProperties?: AlertTitleProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
