import { BaseOutProperties, Container, InProperties } from '@pmndrs/uikit';
export type CardHeaderProperties = InProperties<BaseOutProperties>;
export declare class CardHeader extends Container<BaseOutProperties> {
    constructor(inputProperties?: InProperties<BaseOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: any;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
