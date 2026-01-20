import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { TabsList as VanillaTabsList, TabsListProperties as VanillaTabsListProperties } from '@pmndrs/uikit-default';
export { TabsList as VanillaTabsList } from '@pmndrs/uikit-default';
export type TabsListProperties = VanillaTabsListProperties & {
    children?: ReactNode;
};
export declare const TabsList: ForwardRefExoticComponent<PropsWithoutRef<TabsListProperties> & RefAttributes<VanillaTabsList>>;
