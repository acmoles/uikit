
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { TabsContent as VanillaTabsContent, TabsContentProperties as VanillaTabsContentProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { TabsContent as VanillaTabsContent } from '@pmndrs/uikit-default'

export type TabsContentProperties = VanillaTabsContentProperties& { children?: ReactNode } 

export const TabsContent: ForwardRefExoticComponent<
  PropsWithoutRef<TabsContentProperties> & RefAttributes<VanillaTabsContent>
> = /*@__PURE__*/ build<VanillaTabsContent, TabsContentProperties>(VanillaTabsContent, "VanillaDefaultTabsContent")
    