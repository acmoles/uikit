import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { MenubarTrigger as VanillaMenubarTrigger, MenubarTriggerProperties as VanillaMenubarTriggerProperties } from '@pmndrs/uikit-default';
export { MenubarTrigger as VanillaMenubarTrigger } from '@pmndrs/uikit-default';
export type MenubarTriggerProperties = VanillaMenubarTriggerProperties & {
    children?: ReactNode;
};
export declare const MenubarTrigger: ForwardRefExoticComponent<PropsWithoutRef<MenubarTriggerProperties> & RefAttributes<VanillaMenubarTrigger>>;
