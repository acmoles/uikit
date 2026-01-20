import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { DialogHeader as VanillaDialogHeader, DialogHeaderProperties as VanillaDialogHeaderProperties } from '@pmndrs/uikit-default';
export { DialogHeader as VanillaDialogHeader } from '@pmndrs/uikit-default';
export type DialogHeaderProperties = VanillaDialogHeaderProperties & {
    children?: ReactNode;
};
export declare const DialogHeader: ForwardRefExoticComponent<PropsWithoutRef<DialogHeaderProperties> & RefAttributes<VanillaDialogHeader>>;
