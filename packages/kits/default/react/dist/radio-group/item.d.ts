import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { RadioGroupItem as VanillaRadioGroupItem, RadioGroupItemProperties as VanillaRadioGroupItemProperties } from '@pmndrs/uikit-default';
export { RadioGroupItem as VanillaRadioGroupItem } from '@pmndrs/uikit-default';
export type RadioGroupItemProperties = VanillaRadioGroupItemProperties & {
    children?: ReactNode;
};
export declare const RadioGroupItem: ForwardRefExoticComponent<PropsWithoutRef<RadioGroupItemProperties> & RefAttributes<VanillaRadioGroupItem>>;
