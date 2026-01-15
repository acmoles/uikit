import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { MenubarMenu as VanillaMenubarMenu, MenubarMenuProperties as VanillaMenubarMenuProperties } from '@pmndrs/uikit-default';
export { MenubarMenu as VanillaMenubarMenu } from '@pmndrs/uikit-default';
export type MenubarMenuProperties = VanillaMenubarMenuProperties & {
    children?: ReactNode;
};
export declare const MenubarMenu: ForwardRefExoticComponent<PropsWithoutRef<MenubarMenuProperties> & RefAttributes<VanillaMenubarMenu>>;
