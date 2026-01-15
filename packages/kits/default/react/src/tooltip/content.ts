
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { TooltipContent as VanillaTooltipContent, TooltipContentProperties as VanillaTooltipContentProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { TooltipContent as VanillaTooltipContent } from '@pmndrs/uikit-default'

export type TooltipContentProperties = VanillaTooltipContentProperties& { children?: ReactNode } 

export const TooltipContent: ForwardRefExoticComponent<
  PropsWithoutRef<TooltipContentProperties> & RefAttributes<VanillaTooltipContent>
> = /*@__PURE__*/ build<VanillaTooltipContent, TooltipContentProperties>(VanillaTooltipContent, "VanillaDefaultTooltipContent")
    