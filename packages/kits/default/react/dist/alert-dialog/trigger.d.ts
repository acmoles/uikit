import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { AlertDialogTrigger as VanillaAlertDialogTrigger, AlertDialogTriggerProperties as VanillaAlertDialogTriggerProperties } from '@pmndrs/uikit-default';
export { AlertDialogTrigger as VanillaAlertDialogTrigger } from '@pmndrs/uikit-default';
export type AlertDialogTriggerProperties = VanillaAlertDialogTriggerProperties & {
    children?: ReactNode;
};
export declare const AlertDialogTrigger: ForwardRefExoticComponent<PropsWithoutRef<AlertDialogTriggerProperties> & RefAttributes<VanillaAlertDialogTrigger>>;
