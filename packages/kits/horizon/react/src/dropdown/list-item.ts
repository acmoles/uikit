
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DropdownListItem as VanillaDropdownListItem, DropdownListItemProperties as VanillaDropdownListItemProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { DropdownListItem as VanillaDropdownListItem } from '@pmndrs/uikit-horizon'

export type DropdownListItemProperties = VanillaDropdownListItemProperties& { children?: ReactNode } 

export const DropdownListItem: ForwardRefExoticComponent<
  PropsWithoutRef<DropdownListItemProperties> & RefAttributes<VanillaDropdownListItem>
> = /*@__PURE__*/ build<VanillaDropdownListItem, DropdownListItemProperties>(VanillaDropdownListItem, "VanillaHorizonDropdownListItem")
    