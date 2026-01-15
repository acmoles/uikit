
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Button as VanillaButton, ButtonProperties as VanillaButtonProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Button as VanillaButton } from '@pmndrs/uikit-default'

export type ButtonProperties = VanillaButtonProperties& { children?: ReactNode } 

export const Button: ForwardRefExoticComponent<
  PropsWithoutRef<ButtonProperties> & RefAttributes<VanillaButton>
> = /*@__PURE__*/ build<VanillaButton, ButtonProperties>(VanillaButton, "VanillaDefaultButton")
    
