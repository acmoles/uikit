import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { CardTitle as VanillaCardTitle, CardTitleProperties as VanillaCardTitleProperties } from '@pmndrs/uikit-default';
export { CardTitle as VanillaCardTitle } from '@pmndrs/uikit-default';
export type CardTitleProperties = VanillaCardTitleProperties & {
    children?: ReactNode;
};
export declare const CardTitle: ForwardRefExoticComponent<PropsWithoutRef<CardTitleProperties> & RefAttributes<VanillaCardTitle>>;
