import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { DialogTitle as VanillaDialogTitle, DialogTitleProperties as VanillaDialogTitleProperties } from '@pmndrs/uikit-default';
export { DialogTitle as VanillaDialogTitle } from '@pmndrs/uikit-default';
export type DialogTitleProperties = VanillaDialogTitleProperties & {
    children?: ReactNode;
};
export declare const DialogTitle: ForwardRefExoticComponent<PropsWithoutRef<DialogTitleProperties> & RefAttributes<VanillaDialogTitle>>;
