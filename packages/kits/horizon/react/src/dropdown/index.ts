
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Dropdown as VanillaDropdown, DropdownProperties as VanillaDropdownProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { Dropdown as VanillaDropdown } from '@pmndrs/uikit-horizon'

export type DropdownProperties = VanillaDropdownProperties& { children?: ReactNode } 

export const Dropdown: ForwardRefExoticComponent<
  PropsWithoutRef<DropdownProperties> & RefAttributes<VanillaDropdown>
> = /*@__PURE__*/ build<VanillaDropdown, DropdownProperties>(VanillaDropdown, "VanillaHorizonDropdown")
    
export * from "./avatar.js";export * from "./button.js";export * from "./icon.js";export * from "./list-item.js";export * from "./list.js";export * from "./text-value.js";