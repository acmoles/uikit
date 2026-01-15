import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { Toggle as VanillaToggle, ToggleProperties as VanillaToggleProperties } from '@pmndrs/uikit-default';
export { Toggle as VanillaToggle } from '@pmndrs/uikit-default';
export type ToggleProperties = VanillaToggleProperties & {
    children?: ReactNode;
};
export declare const Toggle: ForwardRefExoticComponent<PropsWithoutRef<ToggleProperties> & RefAttributes<VanillaToggle>>;
