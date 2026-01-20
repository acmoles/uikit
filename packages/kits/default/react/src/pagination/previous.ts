
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { PaginationPrevious as VanillaPaginationPrevious, PaginationPreviousProperties as VanillaPaginationPreviousProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { PaginationPrevious as VanillaPaginationPrevious } from '@pmndrs/uikit-default'

export type PaginationPreviousProperties = VanillaPaginationPreviousProperties 

export const PaginationPrevious: ForwardRefExoticComponent<
  PropsWithoutRef<PaginationPreviousProperties> & RefAttributes<VanillaPaginationPrevious>
> = /*@__PURE__*/ build<VanillaPaginationPrevious, PaginationPreviousProperties>(VanillaPaginationPrevious, "VanillaDefaultPaginationPrevious")
    