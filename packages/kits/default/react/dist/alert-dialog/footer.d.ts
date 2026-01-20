import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { AlertDialogFooter as VanillaAlertDialogFooter, AlertDialogFooterProperties as VanillaAlertDialogFooterProperties } from '@pmndrs/uikit-default';
export { AlertDialogFooter as VanillaAlertDialogFooter } from '@pmndrs/uikit-default';
export type AlertDialogFooterProperties = VanillaAlertDialogFooterProperties & {
    children?: ReactNode;
};
export declare const AlertDialogFooter: ForwardRefExoticComponent<PropsWithoutRef<AlertDialogFooterProperties> & RefAttributes<VanillaAlertDialogFooter>>;
