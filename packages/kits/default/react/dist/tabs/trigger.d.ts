import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { TabsTrigger as VanillaTabsTrigger, TabsTriggerProperties as VanillaTabsTriggerProperties } from '@pmndrs/uikit-default';
export { TabsTrigger as VanillaTabsTrigger } from '@pmndrs/uikit-default';
export type TabsTriggerProperties = VanillaTabsTriggerProperties & {
    children?: ReactNode;
};
export declare const TabsTrigger: ForwardRefExoticComponent<PropsWithoutRef<TabsTriggerProperties> & RefAttributes<VanillaTabsTrigger>>;
