import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { CardContent as VanillaCardContent, CardContentProperties as VanillaCardContentProperties } from '@pmndrs/uikit-default';
export { CardContent as VanillaCardContent } from '@pmndrs/uikit-default';
export type CardContentProperties = VanillaCardContentProperties & {
    children?: ReactNode;
};
export declare const CardContent: ForwardRefExoticComponent<PropsWithoutRef<CardContentProperties> & RefAttributes<VanillaCardContent>>;
