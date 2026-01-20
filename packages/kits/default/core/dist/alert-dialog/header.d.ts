import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
export type AlertDialogHeaderOutProperties = BaseOutProperties;
export type AlertDialogHeaderProperties = InProperties<AlertDialogHeaderOutProperties>;
export declare class AlertDialogHeader extends Container<AlertDialogHeaderOutProperties> {
    constructor(inputProperties?: AlertDialogHeaderProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<AlertDialogHeaderOutProperties>;
    });
}
