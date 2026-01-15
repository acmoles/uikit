
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { ButtonIcon as VanillaButtonIcon, ButtonIconProperties as VanillaButtonIconProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { ButtonIcon as VanillaButtonIcon } from '@pmndrs/uikit-horizon'

export type ButtonIconProperties = VanillaButtonIconProperties& { children?: ReactNode } 

export const ButtonIcon: ForwardRefExoticComponent<
  PropsWithoutRef<ButtonIconProperties> & RefAttributes<VanillaButtonIcon>
> = /*@__PURE__*/ build<VanillaButtonIcon, ButtonIconProperties>(VanillaButtonIcon, "VanillaHorizonButtonIcon")
    