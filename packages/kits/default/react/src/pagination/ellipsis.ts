
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { PaginationEllipsis as VanillaPaginationEllipsis, PaginationEllipsisProperties as VanillaPaginationEllipsisProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { PaginationEllipsis as VanillaPaginationEllipsis } from '@pmndrs/uikit-default'

export type PaginationEllipsisProperties = VanillaPaginationEllipsisProperties 

export const PaginationEllipsis: ForwardRefExoticComponent<
  PropsWithoutRef<PaginationEllipsisProperties> & RefAttributes<VanillaPaginationEllipsis>
> = /*@__PURE__*/ build<VanillaPaginationEllipsis, PaginationEllipsisProperties>(VanillaPaginationEllipsis, "VanillaDefaultPaginationEllipsis")
    