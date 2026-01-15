import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { CardDescription as VanillaCardDescription, CardDescriptionProperties as VanillaCardDescriptionProperties } from '@pmndrs/uikit-default';
export { CardDescription as VanillaCardDescription } from '@pmndrs/uikit-default';
export type CardDescriptionProperties = VanillaCardDescriptionProperties & {
    children?: ReactNode;
};
export declare const CardDescription: ForwardRefExoticComponent<PropsWithoutRef<CardDescriptionProperties> & RefAttributes<VanillaCardDescription>>;
