
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { MenubarTrigger as VanillaMenubarTrigger, MenubarTriggerProperties as VanillaMenubarTriggerProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { MenubarTrigger as VanillaMenubarTrigger } from '@pmndrs/uikit-default'

export type MenubarTriggerProperties = VanillaMenubarTriggerProperties& { children?: ReactNode } 

export const MenubarTrigger: ForwardRefExoticComponent<
  PropsWithoutRef<MenubarTriggerProperties> & RefAttributes<VanillaMenubarTrigger>
> = /*@__PURE__*/ build<VanillaMenubarTrigger, MenubarTriggerProperties>(VanillaMenubarTrigger, "VanillaDefaultMenubarTrigger")
    