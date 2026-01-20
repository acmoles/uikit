import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { Menubar as VanillaMenubar, MenubarProperties as VanillaMenubarProperties } from '@pmndrs/uikit-default';
export { Menubar as VanillaMenubar } from '@pmndrs/uikit-default';
export type MenubarProperties = VanillaMenubarProperties & {
    children?: ReactNode;
};
export declare const Menubar: ForwardRefExoticComponent<PropsWithoutRef<MenubarProperties> & RefAttributes<VanillaMenubar>>;
export * from "./menu.js";
export * from "./trigger.js";
