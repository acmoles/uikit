
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Accordion as VanillaAccordion, AccordionProperties as VanillaAccordionProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Accordion as VanillaAccordion } from '@pmndrs/uikit-default'

export type AccordionProperties = VanillaAccordionProperties& { children?: ReactNode } 

export const Accordion: ForwardRefExoticComponent<
  PropsWithoutRef<AccordionProperties> & RefAttributes<VanillaAccordion>
> = /*@__PURE__*/ build<VanillaAccordion, AccordionProperties>(VanillaAccordion, "VanillaDefaultAccordion")
    
export * from "./content.js";export * from "./item.js";export * from "./trigger-icon.js";export * from "./trigger.js";