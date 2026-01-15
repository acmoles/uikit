import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { Tooltip as VanillaTooltip, TooltipProperties as VanillaTooltipProperties } from '@pmndrs/uikit-default';
export { Tooltip as VanillaTooltip } from '@pmndrs/uikit-default';
export type TooltipProperties = VanillaTooltipProperties & {
    children?: ReactNode;
};
export declare const Tooltip: ForwardRefExoticComponent<PropsWithoutRef<TooltipProperties> & RefAttributes<VanillaTooltip>>;
export * from "./content.js";
export * from "./trigger.js";
