import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { TooltipTrigger as VanillaTooltipTrigger, TooltipTriggerProperties as VanillaTooltipTriggerProperties } from '@pmndrs/uikit-default';
export { TooltipTrigger as VanillaTooltipTrigger } from '@pmndrs/uikit-default';
export type TooltipTriggerProperties = VanillaTooltipTriggerProperties & {
    children?: ReactNode;
};
export declare const TooltipTrigger: ForwardRefExoticComponent<PropsWithoutRef<TooltipTriggerProperties> & RefAttributes<VanillaTooltipTrigger>>;
