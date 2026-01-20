import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
export type AlertDialogActionOutProperties = BaseOutProperties;
export type AlertDialogActionProperties = InProperties<AlertDialogActionOutProperties>;
export declare class AlertDialogAction extends Container<AlertDialogActionOutProperties> {
    constructor(inputProperties?: AlertDialogActionProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<AlertDialogActionOutProperties>;
    });
    private closeDialog;
}
