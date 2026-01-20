import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { Button as VanillaButton, ButtonProperties as VanillaButtonProperties } from '@pmndrs/uikit-default';
export { Button as VanillaButton } from '@pmndrs/uikit-default';
export type ButtonProperties = VanillaButtonProperties & {
    children?: ReactNode;
};
export declare const Button: ForwardRefExoticComponent<PropsWithoutRef<ButtonProperties> & RefAttributes<VanillaButton>>;
