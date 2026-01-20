import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { Card as VanillaCard, CardProperties as VanillaCardProperties } from '@pmndrs/uikit-default';
export { Card as VanillaCard } from '@pmndrs/uikit-default';
export type CardProperties = VanillaCardProperties & {
    children?: ReactNode;
};
export declare const Card: ForwardRefExoticComponent<PropsWithoutRef<CardProperties> & RefAttributes<VanillaCard>>;
export * from "./content.js";
export * from "./description.js";
export * from "./footer.js";
export * from "./header.js";
export * from "./title.js";
