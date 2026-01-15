import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { Accordion as VanillaAccordion, AccordionProperties as VanillaAccordionProperties } from '@pmndrs/uikit-default';
export { Accordion as VanillaAccordion } from '@pmndrs/uikit-default';
export type AccordionProperties = VanillaAccordionProperties & {
    children?: ReactNode;
};
export declare const Accordion: ForwardRefExoticComponent<PropsWithoutRef<AccordionProperties> & RefAttributes<VanillaAccordion>>;
export * from "./content.js";
export * from "./item.js";
export * from "./trigger-icon.js";
export * from "./trigger.js";
