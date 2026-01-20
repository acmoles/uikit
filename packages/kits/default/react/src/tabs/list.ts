
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { TabsList as VanillaTabsList, TabsListProperties as VanillaTabsListProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { TabsList as VanillaTabsList } from '@pmndrs/uikit-default'

export type TabsListProperties = VanillaTabsListProperties& { children?: ReactNode } 

export const TabsList: ForwardRefExoticComponent<
  PropsWithoutRef<TabsListProperties> & RefAttributes<VanillaTabsList>
> = /*@__PURE__*/ build<VanillaTabsList, TabsListProperties>(VanillaTabsList, "VanillaDefaultTabsList")
    