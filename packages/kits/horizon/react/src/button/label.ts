
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { ButtonLabel as VanillaButtonLabel, ButtonLabelProperties as VanillaButtonLabelProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { ButtonLabel as VanillaButtonLabel } from '@pmndrs/uikit-horizon'

export type ButtonLabelProperties = VanillaButtonLabelProperties& { children?: ReactNode } 

export const ButtonLabel: ForwardRefExoticComponent<
  PropsWithoutRef<ButtonLabelProperties> & RefAttributes<VanillaButtonLabel>
> = /*@__PURE__*/ build<VanillaButtonLabel, ButtonLabelProperties>(VanillaButtonLabel, "VanillaHorizonButtonLabel")
    