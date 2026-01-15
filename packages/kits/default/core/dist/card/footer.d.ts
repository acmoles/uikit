import { BaseOutProperties, Container, InProperties } from '@pmndrs/uikit';
export type CardFooterProperties = InProperties<BaseOutProperties>;
export declare class CardFooter extends Container<BaseOutProperties> {
    constructor(inputProperties?: InProperties<BaseOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: any;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
