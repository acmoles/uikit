
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Menubar as VanillaMenubar, MenubarProperties as VanillaMenubarProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Menubar as VanillaMenubar } from '@pmndrs/uikit-default'

export type MenubarProperties = VanillaMenubarProperties& { children?: ReactNode } 

export const Menubar: ForwardRefExoticComponent<
  PropsWithoutRef<MenubarProperties> & RefAttributes<VanillaMenubar>
> = /*@__PURE__*/ build<VanillaMenubar, MenubarProperties>(VanillaMenubar, "VanillaDefaultMenubar")
    
export * from "./menu.js";export * from "./trigger.js";