
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Avatar as VanillaAvatar, AvatarProperties as VanillaAvatarProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { Avatar as VanillaAvatar } from '@pmndrs/uikit-horizon'

export type AvatarProperties = VanillaAvatarProperties 

export const Avatar: ForwardRefExoticComponent<
  PropsWithoutRef<AvatarProperties> & RefAttributes<VanillaAvatar>
> = /*@__PURE__*/ build<VanillaAvatar, AvatarProperties>(VanillaAvatar, "VanillaHorizonAvatar")
    
