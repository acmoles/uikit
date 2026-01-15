import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { ToggleGroup as VanillaToggleGroup, ToggleGroupProperties as VanillaToggleGroupProperties } from '@pmndrs/uikit-default';
export { ToggleGroup as VanillaToggleGroup } from '@pmndrs/uikit-default';
export type ToggleGroupProperties = VanillaToggleGroupProperties & {
    children?: ReactNode;
};
export declare const ToggleGroup: ForwardRefExoticComponent<PropsWithoutRef<ToggleGroupProperties> & RefAttributes<VanillaToggleGroup>>;
export * from "./item.js";
