
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DropdownIcon as VanillaDropdownIcon, DropdownIconProperties as VanillaDropdownIconProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { DropdownIcon as VanillaDropdownIcon } from '@pmndrs/uikit-horizon'

export type DropdownIconProperties = VanillaDropdownIconProperties& { children?: ReactNode } 

export const DropdownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<DropdownIconProperties> & RefAttributes<VanillaDropdownIcon>
> = /*@__PURE__*/ build<VanillaDropdownIcon, DropdownIconProperties>(VanillaDropdownIcon, "VanillaHorizonDropdownIcon")
    