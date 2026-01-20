
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DropdownAvatar as VanillaDropdownAvatar, DropdownAvatarProperties as VanillaDropdownAvatarProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { DropdownAvatar as VanillaDropdownAvatar } from '@pmndrs/uikit-horizon'

export type DropdownAvatarProperties = VanillaDropdownAvatarProperties& { children?: ReactNode } 

export const DropdownAvatar: ForwardRefExoticComponent<
  PropsWithoutRef<DropdownAvatarProperties> & RefAttributes<VanillaDropdownAvatar>
> = /*@__PURE__*/ build<VanillaDropdownAvatar, DropdownAvatarProperties>(VanillaDropdownAvatar, "VanillaHorizonDropdownAvatar")
    