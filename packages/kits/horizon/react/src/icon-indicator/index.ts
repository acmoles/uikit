
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { IconIndicator as VanillaIconIndicator, IconIndicatorProperties as VanillaIconIndicatorProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { IconIndicator as VanillaIconIndicator } from '@pmndrs/uikit-horizon'

export type IconIndicatorProperties = VanillaIconIndicatorProperties 

export const IconIndicator: ForwardRefExoticComponent<
  PropsWithoutRef<IconIndicatorProperties> & RefAttributes<VanillaIconIndicator>
> = /*@__PURE__*/ build<VanillaIconIndicator, IconIndicatorProperties>(VanillaIconIndicator, "VanillaHorizonIconIndicator")
    
