import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { AlertDialogDescription as VanillaAlertDialogDescription, AlertDialogDescriptionProperties as VanillaAlertDialogDescriptionProperties } from '@pmndrs/uikit-default';
export { AlertDialogDescription as VanillaAlertDialogDescription } from '@pmndrs/uikit-default';
export type AlertDialogDescriptionProperties = VanillaAlertDialogDescriptionProperties & {
    children?: ReactNode;
};
export declare const AlertDialogDescription: ForwardRefExoticComponent<PropsWithoutRef<AlertDialogDescriptionProperties> & RefAttributes<VanillaAlertDialogDescription>>;
