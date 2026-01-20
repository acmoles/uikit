
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Tooltip as VanillaTooltip, TooltipProperties as VanillaTooltipProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Tooltip as VanillaTooltip } from '@pmndrs/uikit-default'

export type TooltipProperties = VanillaTooltipProperties& { children?: ReactNode } 

export const Tooltip: ForwardRefExoticComponent<
  PropsWithoutRef<TooltipProperties> & RefAttributes<VanillaTooltip>
> = /*@__PURE__*/ build<VanillaTooltip, TooltipProperties>(VanillaTooltip, "VanillaDefaultTooltip")
    
export * from "./content.js";export * from "./trigger.js";