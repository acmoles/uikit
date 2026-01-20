import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { AccordionContent as VanillaAccordionContent, AccordionContentProperties as VanillaAccordionContentProperties } from '@pmndrs/uikit-default';
export { AccordionContent as VanillaAccordionContent } from '@pmndrs/uikit-default';
export type AccordionContentProperties = VanillaAccordionContentProperties & {
    children?: ReactNode;
};
export declare const AccordionContent: ForwardRefExoticComponent<PropsWithoutRef<AccordionContentProperties> & RefAttributes<VanillaAccordionContent>>;
