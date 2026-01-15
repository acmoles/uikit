
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Switch as VanillaSwitch, SwitchProperties as VanillaSwitchProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Switch as VanillaSwitch } from '@pmndrs/uikit-default'

export type SwitchProperties = VanillaSwitchProperties 

export const Switch: ForwardRefExoticComponent<
  PropsWithoutRef<SwitchProperties> & RefAttributes<VanillaSwitch>
> = /*@__PURE__*/ build<VanillaSwitch, SwitchProperties>(VanillaSwitch, "VanillaDefaultSwitch")
    
