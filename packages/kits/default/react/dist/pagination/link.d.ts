import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { PaginationLink as VanillaPaginationLink, PaginationLinkProperties as VanillaPaginationLinkProperties } from '@pmndrs/uikit-default';
export { PaginationLink as VanillaPaginationLink } from '@pmndrs/uikit-default';
export type PaginationLinkProperties = VanillaPaginationLinkProperties & {
    children?: ReactNode;
};
export declare const PaginationLink: ForwardRefExoticComponent<PropsWithoutRef<PaginationLinkProperties> & RefAttributes<VanillaPaginationLink>>;
