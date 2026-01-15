import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
export type AlertDialogTitleOutProperties = BaseOutProperties;
export type AlertDialogTitleProperties = InProperties<AlertDialogTitleOutProperties>;
export declare class AlertDialogTitle extends Container<AlertDialogTitleOutProperties> {
    constructor(inputProperties?: AlertDialogTitleProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<AlertDialogTitleOutProperties>;
    });
}
