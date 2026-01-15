import { BaseOutProperties, Container, InProperties } from '@pmndrs/uikit';
export type CardTitleProperties = InProperties<BaseOutProperties>;
export declare class CardTitle extends Container<BaseOutProperties> {
    constructor(inputProperties?: InProperties<BaseOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: any;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
