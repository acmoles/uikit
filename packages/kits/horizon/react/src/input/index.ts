
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Input as VanillaInput, InputProperties as VanillaInputProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { Input as VanillaInput } from '@pmndrs/uikit-horizon'

export type InputProperties = VanillaInputProperties& { children?: ReactNode } 

export const Input: ForwardRefExoticComponent<
  PropsWithoutRef<InputProperties> & RefAttributes<VanillaInput>
> = /*@__PURE__*/ build<VanillaInput, InputProperties>(VanillaInput, "VanillaHorizonInput")
    
