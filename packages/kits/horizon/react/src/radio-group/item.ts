
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { RadioGroupItem as VanillaRadioGroupItem, RadioGroupItemProperties as VanillaRadioGroupItemProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { RadioGroupItem as VanillaRadioGroupItem } from '@pmndrs/uikit-horizon'

export type RadioGroupItemProperties = VanillaRadioGroupItemProperties& { children?: ReactNode } 

export const RadioGroupItem: ForwardRefExoticComponent<
  PropsWithoutRef<RadioGroupItemProperties> & RefAttributes<VanillaRadioGroupItem>
> = /*@__PURE__*/ build<VanillaRadioGroupItem, RadioGroupItemProperties>(VanillaRadioGroupItem, "VanillaHorizonRadioGroupItem")
    