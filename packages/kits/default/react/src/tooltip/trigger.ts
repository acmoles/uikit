
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { TooltipTrigger as VanillaTooltipTrigger, TooltipTriggerProperties as VanillaTooltipTriggerProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { TooltipTrigger as VanillaTooltipTrigger } from '@pmndrs/uikit-default'

export type TooltipTriggerProperties = VanillaTooltipTriggerProperties& { children?: ReactNode } 

export const TooltipTrigger: ForwardRefExoticComponent<
  PropsWithoutRef<TooltipTriggerProperties> & RefAttributes<VanillaTooltipTrigger>
> = /*@__PURE__*/ build<VanillaTooltipTrigger, TooltipTriggerProperties>(VanillaTooltipTrigger, "VanillaDefaultTooltipTrigger")
    