
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AccordionTrigger as VanillaAccordionTrigger, AccordionTriggerProperties as VanillaAccordionTriggerProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { AccordionTrigger as VanillaAccordionTrigger } from '@pmndrs/uikit-default'

export type AccordionTriggerProperties = VanillaAccordionTriggerProperties& { children?: ReactNode } 

export const AccordionTrigger: ForwardRefExoticComponent<
  PropsWithoutRef<AccordionTriggerProperties> & RefAttributes<VanillaAccordionTrigger>
> = /*@__PURE__*/ build<VanillaAccordionTrigger, AccordionTriggerProperties>(VanillaAccordionTrigger, "VanillaDefaultAccordionTrigger")
    