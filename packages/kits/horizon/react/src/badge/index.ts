
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Badge as VanillaBadge, BadgeProperties as VanillaBadgeProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { Badge as VanillaBadge } from '@pmndrs/uikit-horizon'

export type BadgeProperties = VanillaBadgeProperties 

export const Badge: ForwardRefExoticComponent<
  PropsWithoutRef<BadgeProperties> & RefAttributes<VanillaBadge>
> = /*@__PURE__*/ build<VanillaBadge, BadgeProperties>(VanillaBadge, "VanillaHorizonBadge")
    
