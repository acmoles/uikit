
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { TabsTrigger as VanillaTabsTrigger, TabsTriggerProperties as VanillaTabsTriggerProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { TabsTrigger as VanillaTabsTrigger } from '@pmndrs/uikit-default'

export type TabsTriggerProperties = VanillaTabsTriggerProperties& { children?: ReactNode } 

export const TabsTrigger: ForwardRefExoticComponent<
  PropsWithoutRef<TabsTriggerProperties> & RefAttributes<VanillaTabsTrigger>
> = /*@__PURE__*/ build<VanillaTabsTrigger, TabsTriggerProperties>(VanillaTabsTrigger, "VanillaDefaultTabsTrigger")
    