
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DropdownButton as VanillaDropdownButton, DropdownButtonProperties as VanillaDropdownButtonProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { DropdownButton as VanillaDropdownButton } from '@pmndrs/uikit-horizon'

export type DropdownButtonProperties = VanillaDropdownButtonProperties& { children?: ReactNode } 

export const DropdownButton: ForwardRefExoticComponent<
  PropsWithoutRef<DropdownButtonProperties> & RefAttributes<VanillaDropdownButton>
> = /*@__PURE__*/ build<VanillaDropdownButton, DropdownButtonProperties>(VanillaDropdownButton, "VanillaHorizonDropdownButton")
    