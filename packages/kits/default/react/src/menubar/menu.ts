
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { MenubarMenu as VanillaMenubarMenu, MenubarMenuProperties as VanillaMenubarMenuProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { MenubarMenu as VanillaMenubarMenu } from '@pmndrs/uikit-default'

export type MenubarMenuProperties = VanillaMenubarMenuProperties& { children?: ReactNode } 

export const MenubarMenu: ForwardRefExoticComponent<
  PropsWithoutRef<MenubarMenuProperties> & RefAttributes<VanillaMenubarMenu>
> = /*@__PURE__*/ build<VanillaMenubarMenu, MenubarMenuProperties>(VanillaMenubarMenu, "VanillaDefaultMenubarMenu")
    