import { Container, InProperties, BaseOutProperties } from '@pmndrs/uikit';
export type DialogHeaderOutProperties = BaseOutProperties;
export type DialogHeaderProperties = InProperties<DialogHeaderOutProperties>;
export declare class DialogHeader extends Container<DialogHeaderOutProperties> {
    constructor(inputProperties?: DialogHeaderProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: any;
        defaultOverrides?: InProperties<DialogHeaderOutProperties>;
    });
}
