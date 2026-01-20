import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { Pagination as VanillaPagination, PaginationProperties as VanillaPaginationProperties } from '@pmndrs/uikit-default';
export { Pagination as VanillaPagination } from '@pmndrs/uikit-default';
export type PaginationProperties = VanillaPaginationProperties & {
    children?: ReactNode;
};
export declare const Pagination: ForwardRefExoticComponent<PropsWithoutRef<PaginationProperties> & RefAttributes<VanillaPagination>>;
export * from "./content.js";
export * from "./ellipsis.js";
export * from "./item.js";
export * from "./link.js";
export * from "./next.js";
export * from "./previous.js";
