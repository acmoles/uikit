import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { RadioGroup as VanillaRadioGroup, RadioGroupProperties as VanillaRadioGroupProperties } from '@pmndrs/uikit-default';
export { RadioGroup as VanillaRadioGroup } from '@pmndrs/uikit-default';
export type RadioGroupProperties = VanillaRadioGroupProperties & {
    children?: ReactNode;
};
export declare const RadioGroup: ForwardRefExoticComponent<PropsWithoutRef<RadioGroupProperties> & RefAttributes<VanillaRadioGroup>>;
export * from "./item.js";
