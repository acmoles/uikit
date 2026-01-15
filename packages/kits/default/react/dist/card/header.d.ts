import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { CardHeader as VanillaCardHeader, CardHeaderProperties as VanillaCardHeaderProperties } from '@pmndrs/uikit-default';
export { CardHeader as VanillaCardHeader } from '@pmndrs/uikit-default';
export type CardHeaderProperties = VanillaCardHeaderProperties & {
    children?: ReactNode;
};
export declare const CardHeader: ForwardRefExoticComponent<PropsWithoutRef<CardHeaderProperties> & RefAttributes<VanillaCardHeader>>;
