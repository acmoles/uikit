import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { DialogTrigger as VanillaDialogTrigger, DialogTriggerProperties as VanillaDialogTriggerProperties } from '@pmndrs/uikit-default';
export { DialogTrigger as VanillaDialogTrigger } from '@pmndrs/uikit-default';
export type DialogTriggerProperties = VanillaDialogTriggerProperties & {
    children?: ReactNode;
};
export declare const DialogTrigger: ForwardRefExoticComponent<PropsWithoutRef<DialogTriggerProperties> & RefAttributes<VanillaDialogTrigger>>;
