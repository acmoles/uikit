import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { DialogDescription as VanillaDialogDescription, DialogDescriptionProperties as VanillaDialogDescriptionProperties } from '@pmndrs/uikit-default';
export { DialogDescription as VanillaDialogDescription } from '@pmndrs/uikit-default';
export type DialogDescriptionProperties = VanillaDialogDescriptionProperties & {
    children?: ReactNode;
};
export declare const DialogDescription: ForwardRefExoticComponent<PropsWithoutRef<DialogDescriptionProperties> & RefAttributes<VanillaDialogDescription>>;
