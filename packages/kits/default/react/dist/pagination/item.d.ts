import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { PaginationItem as VanillaPaginationItem, PaginationItemProperties as VanillaPaginationItemProperties } from '@pmndrs/uikit-default';
export { PaginationItem as VanillaPaginationItem } from '@pmndrs/uikit-default';
export type PaginationItemProperties = VanillaPaginationItemProperties & {
    children?: ReactNode;
};
export declare const PaginationItem: ForwardRefExoticComponent<PropsWithoutRef<PaginationItemProperties> & RefAttributes<VanillaPaginationItem>>;
