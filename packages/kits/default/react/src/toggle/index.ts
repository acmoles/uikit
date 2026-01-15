
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Toggle as VanillaToggle, ToggleProperties as VanillaToggleProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Toggle as VanillaToggle } from '@pmndrs/uikit-default'

export type ToggleProperties = VanillaToggleProperties& { children?: ReactNode } 

export const Toggle: ForwardRefExoticComponent<
  PropsWithoutRef<ToggleProperties> & RefAttributes<VanillaToggle>
> = /*@__PURE__*/ build<VanillaToggle, ToggleProperties>(VanillaToggle, "VanillaDefaultToggle")
    
