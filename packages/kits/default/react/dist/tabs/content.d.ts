import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { TabsContent as VanillaTabsContent, TabsContentProperties as VanillaTabsContentProperties } from '@pmndrs/uikit-default';
export { TabsContent as VanillaTabsContent } from '@pmndrs/uikit-default';
export type TabsContentProperties = VanillaTabsContentProperties & {
    children?: ReactNode;
};
export declare const TabsContent: ForwardRefExoticComponent<PropsWithoutRef<TabsContentProperties> & RefAttributes<VanillaTabsContent>>;
