import { Container, InProperties, BaseOutProperties } from '@pmndrs/uikit';
import { XIcon } from '@pmndrs/uikit-lucide';
export type DialogContentOutProperties = BaseOutProperties;
export type DialogContentProperties = InProperties<DialogContentOutProperties>;
export declare class DialogContent extends Container<DialogContentOutProperties> {
    readonly closeButton: XIcon;
    constructor(inputProperties?: DialogContentProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: any;
        defaultOverrides?: InProperties<DialogContentOutProperties>;
    });
    dispose(): void;
    private closeDialog;
}
