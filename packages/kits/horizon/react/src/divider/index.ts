
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Divider as VanillaDivider, DividerProperties as VanillaDividerProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { Divider as VanillaDivider } from '@pmndrs/uikit-horizon'

export type DividerProperties = VanillaDividerProperties& { children?: ReactNode } 

export const Divider: ForwardRefExoticComponent<
  PropsWithoutRef<DividerProperties> & RefAttributes<VanillaDivider>
> = /*@__PURE__*/ build<VanillaDivider, DividerProperties>(VanillaDivider, "VanillaHorizonDivider")
    
