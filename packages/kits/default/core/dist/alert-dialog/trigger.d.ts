import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
import { AlertDialog } from './index.js';
export type AlertDialogTriggerOutProperties = BaseOutProperties & {
    dialog?: AlertDialog;
};
export type AlertDialogTriggerProperties = InProperties<AlertDialogTriggerOutProperties>;
export declare class AlertDialogTrigger extends Container<AlertDialogTriggerOutProperties> {
    constructor(inputProperties?: AlertDialogTriggerProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<AlertDialogTriggerOutProperties>;
    });
}
