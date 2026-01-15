
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AccordionTriggerIcon as VanillaAccordionTriggerIcon, AccordionTriggerIconProperties as VanillaAccordionTriggerIconProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { AccordionTriggerIcon as VanillaAccordionTriggerIcon } from '@pmndrs/uikit-default'

export type AccordionTriggerIconProperties = VanillaAccordionTriggerIconProperties 

export const AccordionTriggerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<AccordionTriggerIconProperties> & RefAttributes<VanillaAccordionTriggerIcon>
> = /*@__PURE__*/ build<VanillaAccordionTriggerIcon, AccordionTriggerIconProperties>(VanillaAccordionTriggerIcon, "VanillaDefaultAccordionTriggerIcon")
    