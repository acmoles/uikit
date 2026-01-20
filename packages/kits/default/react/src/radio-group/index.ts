
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { RadioGroup as VanillaRadioGroup, RadioGroupProperties as VanillaRadioGroupProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { RadioGroup as VanillaRadioGroup } from '@pmndrs/uikit-default'

export type RadioGroupProperties = VanillaRadioGroupProperties& { children?: ReactNode } 

export const RadioGroup: ForwardRefExoticComponent<
  PropsWithoutRef<RadioGroupProperties> & RefAttributes<VanillaRadioGroup>
> = /*@__PURE__*/ build<VanillaRadioGroup, RadioGroupProperties>(VanillaRadioGroup, "VanillaDefaultRadioGroup")
    
export * from "./item.js";