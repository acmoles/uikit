import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { AccordionTrigger as VanillaAccordionTrigger, AccordionTriggerProperties as VanillaAccordionTriggerProperties } from '@pmndrs/uikit-default';
export { AccordionTrigger as VanillaAccordionTrigger } from '@pmndrs/uikit-default';
export type AccordionTriggerProperties = VanillaAccordionTriggerProperties & {
    children?: ReactNode;
};
export declare const AccordionTrigger: ForwardRefExoticComponent<PropsWithoutRef<AccordionTriggerProperties> & RefAttributes<VanillaAccordionTrigger>>;
