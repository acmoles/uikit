
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AccordionContent as VanillaAccordionContent, AccordionContentProperties as VanillaAccordionContentProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { AccordionContent as VanillaAccordionContent } from '@pmndrs/uikit-default'

export type AccordionContentProperties = VanillaAccordionContentProperties& { children?: ReactNode } 

export const AccordionContent: ForwardRefExoticComponent<
  PropsWithoutRef<AccordionContentProperties> & RefAttributes<VanillaAccordionContent>
> = /*@__PURE__*/ build<VanillaAccordionContent, AccordionContentProperties>(VanillaAccordionContent, "VanillaDefaultAccordionContent")
    