import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
export type AlertDialogContentOutProperties = BaseOutProperties;
export type AlertDialogContentProperties = InProperties<AlertDialogContentOutProperties>;
export declare class AlertDialogContent extends Container<AlertDialogContentOutProperties> {
    constructor(inputProperties?: AlertDialogContentProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<AlertDialogContentOutProperties>;
    });
}
