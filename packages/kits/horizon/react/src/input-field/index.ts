
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { InputField as VanillaInputField, InputFieldProperties as VanillaInputFieldProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { InputField as VanillaInputField } from '@pmndrs/uikit-horizon'

export type InputFieldProperties = VanillaInputFieldProperties& { children?: ReactNode } 

export const InputField: ForwardRefExoticComponent<
  PropsWithoutRef<InputFieldProperties> & RefAttributes<VanillaInputField>
> = /*@__PURE__*/ build<VanillaInputField, InputFieldProperties>(VanillaInputField, "VanillaHorizonInputField")
    
