import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { AlertDialog as VanillaAlertDialog, AlertDialogProperties as VanillaAlertDialogProperties } from '@pmndrs/uikit-default';
export { AlertDialog as VanillaAlertDialog } from '@pmndrs/uikit-default';
export type AlertDialogProperties = VanillaAlertDialogProperties & {
    children?: ReactNode;
};
export declare const AlertDialog: ForwardRefExoticComponent<PropsWithoutRef<AlertDialogProperties> & RefAttributes<VanillaAlertDialog>>;
export * from "./action.js";
export * from "./cancel.js";
export * from "./content.js";
export * from "./description.js";
export * from "./footer.js";
export * from "./header.js";
export * from "./title.js";
export * from "./trigger.js";
