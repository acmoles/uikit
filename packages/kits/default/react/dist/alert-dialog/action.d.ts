import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { AlertDialogAction as VanillaAlertDialogAction, AlertDialogActionProperties as VanillaAlertDialogActionProperties } from '@pmndrs/uikit-default';
export { AlertDialogAction as VanillaAlertDialogAction } from '@pmndrs/uikit-default';
export type AlertDialogActionProperties = VanillaAlertDialogActionProperties & {
    children?: ReactNode;
};
export declare const AlertDialogAction: ForwardRefExoticComponent<PropsWithoutRef<AlertDialogActionProperties> & RefAttributes<VanillaAlertDialogAction>>;
