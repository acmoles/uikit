import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
export type AlertDialogFooterOutProperties = BaseOutProperties;
export type AlertDialogFooterProperties = InProperties<AlertDialogFooterOutProperties>;
export declare class AlertDialogFooter extends Container<AlertDialogFooterOutProperties> {
    constructor(inputProperties?: AlertDialogFooterProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<AlertDialogFooterOutProperties>;
    });
}
