import { BaseOutProperties, Container, InProperties, RenderContext } from '@pmndrs/uikit';
export type AlertDescriptionProperties = InProperties<BaseOutProperties>;
export declare class AlertDescription extends Container<BaseOutProperties> {
    constructor(inputProperties?: AlertDescriptionProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
