import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
export type AlertDialogCancelOutProperties = BaseOutProperties;
export type AlertDialogCancelProperties = InProperties<AlertDialogCancelOutProperties>;
export declare class AlertDialogCancel extends Container<AlertDialogCancelOutProperties> {
    constructor(inputProperties?: AlertDialogCancelProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<AlertDialogCancelOutProperties>;
    });
    private closeDialog;
}
