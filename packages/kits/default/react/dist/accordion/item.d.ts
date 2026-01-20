import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { AccordionItem as VanillaAccordionItem, AccordionItemProperties as VanillaAccordionItemProperties } from '@pmndrs/uikit-default';
export { AccordionItem as VanillaAccordionItem } from '@pmndrs/uikit-default';
export type AccordionItemProperties = VanillaAccordionItemProperties & {
    children?: ReactNode;
};
export declare const AccordionItem: ForwardRefExoticComponent<PropsWithoutRef<AccordionItemProperties> & RefAttributes<VanillaAccordionItem>>;
