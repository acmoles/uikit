import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
export type AlertDialogDescriptionOutProperties = BaseOutProperties;
export type AlertDialogDescriptionProperties = InProperties<AlertDialogDescriptionOutProperties>;
export declare class AlertDialogDescription extends Container<AlertDialogDescriptionOutProperties> {
    constructor(inputProperties?: AlertDialogDescriptionProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<AlertDialogDescriptionOutProperties>;
    });
}
