
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { ButtonLabelSubtext as VanillaButtonLabelSubtext, ButtonLabelSubtextProperties as VanillaButtonLabelSubtextProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { ButtonLabelSubtext as VanillaButtonLabelSubtext } from '@pmndrs/uikit-horizon'

export type ButtonLabelSubtextProperties = VanillaButtonLabelSubtextProperties& { children?: ReactNode } 

export const ButtonLabelSubtext: ForwardRefExoticComponent<
  PropsWithoutRef<ButtonLabelSubtextProperties> & RefAttributes<VanillaButtonLabelSubtext>
> = /*@__PURE__*/ build<VanillaButtonLabelSubtext, ButtonLabelSubtextProperties>(VanillaButtonLabelSubtext, "VanillaHorizonButtonLabelSubtext")
    