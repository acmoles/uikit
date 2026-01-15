import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { DialogFooter as VanillaDialogFooter, DialogFooterProperties as VanillaDialogFooterProperties } from '@pmndrs/uikit-default';
export { DialogFooter as VanillaDialogFooter } from '@pmndrs/uikit-default';
export type DialogFooterProperties = VanillaDialogFooterProperties & {
    children?: ReactNode;
};
export declare const DialogFooter: ForwardRefExoticComponent<PropsWithoutRef<DialogFooterProperties> & RefAttributes<VanillaDialogFooter>>;
