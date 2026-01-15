
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Pagination as VanillaPagination, PaginationProperties as VanillaPaginationProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Pagination as VanillaPagination } from '@pmndrs/uikit-default'

export type PaginationProperties = VanillaPaginationProperties& { children?: ReactNode } 

export const Pagination: ForwardRefExoticComponent<
  PropsWithoutRef<PaginationProperties> & RefAttributes<VanillaPagination>
> = /*@__PURE__*/ build<VanillaPagination, PaginationProperties>(VanillaPagination, "VanillaDefaultPagination")
    
export * from "./content.js";export * from "./ellipsis.js";export * from "./item.js";export * from "./link.js";export * from "./next.js";export * from "./previous.js";