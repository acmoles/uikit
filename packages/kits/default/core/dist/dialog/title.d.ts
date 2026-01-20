import { Container, InProperties, BaseOutProperties } from '@pmndrs/uikit';
export type DialogTitleOutProperties = BaseOutProperties;
export type DialogTitleProperties = InProperties<DialogTitleOutProperties>;
export declare class DialogTitle extends Container<DialogTitleOutProperties> {
    constructor(inputProperties?: DialogTitleProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: any;
        defaultOverrides?: InProperties<DialogTitleOutProperties>;
    });
}
