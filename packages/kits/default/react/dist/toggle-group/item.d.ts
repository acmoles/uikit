import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { ToggleGroupItem as VanillaToggleGroupItem, ToggleGroupItemProperties as VanillaToggleGroupItemProperties } from '@pmndrs/uikit-default';
export { ToggleGroupItem as VanillaToggleGroupItem } from '@pmndrs/uikit-default';
export type ToggleGroupItemProperties = VanillaToggleGroupItemProperties & {
    children?: ReactNode;
};
export declare const ToggleGroupItem: ForwardRefExoticComponent<PropsWithoutRef<ToggleGroupItemProperties> & RefAttributes<VanillaToggleGroupItem>>;
