
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Tabs as VanillaTabs, TabsProperties as VanillaTabsProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Tabs as VanillaTabs } from '@pmndrs/uikit-default'

export type TabsProperties = VanillaTabsProperties& { children?: ReactNode } 

export const Tabs: ForwardRefExoticComponent<
  PropsWithoutRef<TabsProperties> & RefAttributes<VanillaTabs>
> = /*@__PURE__*/ build<VanillaTabs, TabsProperties>(VanillaTabs, "VanillaDefaultTabs")
    
export * from "./content.js";export * from "./list.js";export * from "./trigger.js";