import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { AlertDialogTitle as VanillaAlertDialogTitle, AlertDialogTitleProperties as VanillaAlertDialogTitleProperties } from '@pmndrs/uikit-default';
export { AlertDialogTitle as VanillaAlertDialogTitle } from '@pmndrs/uikit-default';
export type AlertDialogTitleProperties = VanillaAlertDialogTitleProperties & {
    children?: ReactNode;
};
export declare const AlertDialogTitle: ForwardRefExoticComponent<PropsWithoutRef<AlertDialogTitleProperties> & RefAttributes<VanillaAlertDialogTitle>>;
