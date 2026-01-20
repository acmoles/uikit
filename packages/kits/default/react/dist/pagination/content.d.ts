import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { PaginationContent as VanillaPaginationContent, PaginationContentProperties as VanillaPaginationContentProperties } from '@pmndrs/uikit-default';
export { PaginationContent as VanillaPaginationContent } from '@pmndrs/uikit-default';
export type PaginationContentProperties = VanillaPaginationContentProperties & {
    children?: ReactNode;
};
export declare const PaginationContent: ForwardRefExoticComponent<PropsWithoutRef<PaginationContentProperties> & RefAttributes<VanillaPaginationContent>>;
