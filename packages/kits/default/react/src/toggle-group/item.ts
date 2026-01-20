
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { ToggleGroupItem as VanillaToggleGroupItem, ToggleGroupItemProperties as VanillaToggleGroupItemProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { ToggleGroupItem as VanillaToggleGroupItem } from '@pmndrs/uikit-default'

export type ToggleGroupItemProperties = VanillaToggleGroupItemProperties& { children?: ReactNode } 

export const ToggleGroupItem: ForwardRefExoticComponent<
  PropsWithoutRef<ToggleGroupItemProperties> & RefAttributes<VanillaToggleGroupItem>
> = /*@__PURE__*/ build<VanillaToggleGroupItem, ToggleGroupItemProperties>(VanillaToggleGroupItem, "VanillaDefaultToggleGroupItem")
    