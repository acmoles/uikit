
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Toggle as VanillaToggle, ToggleProperties as VanillaToggleProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { Toggle as VanillaToggle } from '@pmndrs/uikit-horizon'

export type ToggleProperties = VanillaToggleProperties 

export const Toggle: ForwardRefExoticComponent<
  PropsWithoutRef<ToggleProperties> & RefAttributes<VanillaToggle>
> = /*@__PURE__*/ build<VanillaToggle, ToggleProperties>(VanillaToggle, "VanillaHorizonToggle")
    
