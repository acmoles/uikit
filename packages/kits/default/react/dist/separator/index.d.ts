import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { Separator as VanillaSeparator, SeparatorProperties as VanillaSeparatorProperties } from '@pmndrs/uikit-default';
export { Separator as VanillaSeparator } from '@pmndrs/uikit-default';
export type SeparatorProperties = VanillaSeparatorProperties & {
    children?: ReactNode;
};
export declare const Separator: ForwardRefExoticComponent<PropsWithoutRef<SeparatorProperties> & RefAttributes<VanillaSeparator>>;
