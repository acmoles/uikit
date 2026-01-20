import { Container, InProperties, BaseOutProperties } from '@pmndrs/uikit';
export type DialogFooterOutProperties = BaseOutProperties;
export type DialogFooterProperties = InProperties<DialogFooterOutProperties>;
export declare class DialogFooter extends Container<DialogFooterOutProperties> {
    constructor(inputProperties?: DialogFooterProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: any;
        defaultOverrides?: InProperties<DialogFooterOutProperties>;
    });
}
