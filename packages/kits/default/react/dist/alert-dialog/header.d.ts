import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { AlertDialogHeader as VanillaAlertDialogHeader, AlertDialogHeaderProperties as VanillaAlertDialogHeaderProperties } from '@pmndrs/uikit-default';
export { AlertDialogHeader as VanillaAlertDialogHeader } from '@pmndrs/uikit-default';
export type AlertDialogHeaderProperties = VanillaAlertDialogHeaderProperties & {
    children?: ReactNode;
};
export declare const AlertDialogHeader: ForwardRefExoticComponent<PropsWithoutRef<AlertDialogHeaderProperties> & RefAttributes<VanillaAlertDialogHeader>>;
