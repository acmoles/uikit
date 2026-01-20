import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { TooltipContent as VanillaTooltipContent, TooltipContentProperties as VanillaTooltipContentProperties } from '@pmndrs/uikit-default';
export { TooltipContent as VanillaTooltipContent } from '@pmndrs/uikit-default';
export type TooltipContentProperties = VanillaTooltipContentProperties & {
    children?: ReactNode;
};
export declare const TooltipContent: ForwardRefExoticComponent<PropsWithoutRef<TooltipContentProperties> & RefAttributes<VanillaTooltipContent>>;
