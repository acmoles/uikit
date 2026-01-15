import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { AlertDialogContent as VanillaAlertDialogContent, AlertDialogContentProperties as VanillaAlertDialogContentProperties } from '@pmndrs/uikit-default';
export { AlertDialogContent as VanillaAlertDialogContent } from '@pmndrs/uikit-default';
export type AlertDialogContentProperties = VanillaAlertDialogContentProperties & {
    children?: ReactNode;
};
export declare const AlertDialogContent: ForwardRefExoticComponent<PropsWithoutRef<AlertDialogContentProperties> & RefAttributes<VanillaAlertDialogContent>>;
