import { BaseOutProperties, Container, InProperties } from '@pmndrs/uikit';
export type CardDescriptionProperties = InProperties<BaseOutProperties>;
export declare class CardDescription extends Container<BaseOutProperties> {
    constructor(inputProperties?: InProperties<BaseOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: any;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
