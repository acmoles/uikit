
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Input as VanillaInput, InputProperties as VanillaInputProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Input as VanillaInput } from '@pmndrs/uikit-default'

export type InputProperties = VanillaInputProperties 

export const Input: ForwardRefExoticComponent<
  PropsWithoutRef<InputProperties> & RefAttributes<VanillaInput>
> = /*@__PURE__*/ build<VanillaInput, InputProperties>(VanillaInput, "VanillaDefaultInput")
    
