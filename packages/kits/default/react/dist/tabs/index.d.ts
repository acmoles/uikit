import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { Tabs as VanillaTabs, TabsProperties as VanillaTabsProperties } from '@pmndrs/uikit-default';
export { Tabs as VanillaTabs } from '@pmndrs/uikit-default';
export type TabsProperties = VanillaTabsProperties & {
    children?: ReactNode;
};
export declare const Tabs: ForwardRefExoticComponent<PropsWithoutRef<TabsProperties> & RefAttributes<VanillaTabs>>;
export * from "./content.js";
export * from "./list.js";
export * from "./trigger.js";
