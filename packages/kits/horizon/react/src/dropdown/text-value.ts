
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DropdownTextValue as VanillaDropdownTextValue, DropdownTextValueProperties as VanillaDropdownTextValueProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { DropdownTextValue as VanillaDropdownTextValue } from '@pmndrs/uikit-horizon'

export type DropdownTextValueProperties = VanillaDropdownTextValueProperties& { children?: ReactNode } 

export const DropdownTextValue: ForwardRefExoticComponent<
  PropsWithoutRef<DropdownTextValueProperties> & RefAttributes<VanillaDropdownTextValue>
> = /*@__PURE__*/ build<VanillaDropdownTextValue, DropdownTextValueProperties>(VanillaDropdownTextValue, "VanillaHorizonDropdownTextValue")
    