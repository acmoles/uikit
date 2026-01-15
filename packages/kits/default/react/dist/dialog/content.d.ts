import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { DialogContent as VanillaDialogContent, DialogContentProperties as VanillaDialogContentProperties } from '@pmndrs/uikit-default';
export { DialogContent as VanillaDialogContent } from '@pmndrs/uikit-default';
export type DialogContentProperties = VanillaDialogContentProperties & {
    children?: ReactNode;
};
export declare const DialogContent: ForwardRefExoticComponent<PropsWithoutRef<DialogContentProperties> & RefAttributes<VanillaDialogContent>>;
