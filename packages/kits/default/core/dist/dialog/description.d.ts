import { Container, InProperties, BaseOutProperties } from '@pmndrs/uikit';
export type DialogDescriptionOutProperties = BaseOutProperties;
export type DialogDescriptionProperties = InProperties<DialogDescriptionOutProperties>;
export declare class DialogDescription extends Container<DialogDescriptionOutProperties> {
    constructor(inputProperties?: DialogDescriptionProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: any;
        defaultOverrides?: InProperties<DialogDescriptionOutProperties>;
    });
}
