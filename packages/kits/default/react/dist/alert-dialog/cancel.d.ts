import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { AlertDialogCancel as VanillaAlertDialogCancel, AlertDialogCancelProperties as VanillaAlertDialogCancelProperties } from '@pmndrs/uikit-default';
export { AlertDialogCancel as VanillaAlertDialogCancel } from '@pmndrs/uikit-default';
export type AlertDialogCancelProperties = VanillaAlertDialogCancelProperties & {
    children?: ReactNode;
};
export declare const AlertDialogCancel: ForwardRefExoticComponent<PropsWithoutRef<AlertDialogCancelProperties> & RefAttributes<VanillaAlertDialogCancel>>;
