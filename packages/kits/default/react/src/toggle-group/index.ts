
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { ToggleGroup as VanillaToggleGroup, ToggleGroupProperties as VanillaToggleGroupProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { ToggleGroup as VanillaToggleGroup } from '@pmndrs/uikit-default'

export type ToggleGroupProperties = VanillaToggleGroupProperties& { children?: ReactNode } 

export const ToggleGroup: ForwardRefExoticComponent<
  PropsWithoutRef<ToggleGroupProperties> & RefAttributes<VanillaToggleGroup>
> = /*@__PURE__*/ build<VanillaToggleGroup, ToggleGroupProperties>(VanillaToggleGroup, "VanillaDefaultToggleGroup")
    
export * from "./item.js";