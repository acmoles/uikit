
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DropdownList as VanillaDropdownList, DropdownListProperties as VanillaDropdownListProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { DropdownList as VanillaDropdownList } from '@pmndrs/uikit-horizon'

export type DropdownListProperties = VanillaDropdownListProperties& { children?: ReactNode } 

export const DropdownList: ForwardRefExoticComponent<
  PropsWithoutRef<DropdownListProperties> & RefAttributes<VanillaDropdownList>
> = /*@__PURE__*/ build<VanillaDropdownList, DropdownListProperties>(VanillaDropdownList, "VanillaHorizonDropdownList")
    