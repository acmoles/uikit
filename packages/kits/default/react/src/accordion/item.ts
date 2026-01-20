
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AccordionItem as VanillaAccordionItem, AccordionItemProperties as VanillaAccordionItemProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { AccordionItem as VanillaAccordionItem } from '@pmndrs/uikit-default'

export type AccordionItemProperties = VanillaAccordionItemProperties& { children?: ReactNode } 

export const AccordionItem: ForwardRefExoticComponent<
  PropsWithoutRef<AccordionItemProperties> & RefAttributes<VanillaAccordionItem>
> = /*@__PURE__*/ build<VanillaAccordionItem, AccordionItemProperties>(VanillaAccordionItem, "VanillaDefaultAccordionItem")
    