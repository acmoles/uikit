import { BaseOutProperties, Container, InProperties } from '@pmndrs/uikit';
export type CardContentProperties = InProperties<BaseOutProperties>;
export declare class CardContent extends Container<BaseOutProperties> {
    constructor(inputProperties?: InProperties<BaseOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: any;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
