
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { PaginationNext as VanillaPaginationNext, PaginationNextProperties as VanillaPaginationNextProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { PaginationNext as VanillaPaginationNext } from '@pmndrs/uikit-default'

export type PaginationNextProperties = VanillaPaginationNextProperties 

export const PaginationNext: ForwardRefExoticComponent<
  PropsWithoutRef<PaginationNextProperties> & RefAttributes<VanillaPaginationNext>
> = /*@__PURE__*/ build<VanillaPaginationNext, PaginationNextProperties>(VanillaPaginationNext, "VanillaDefaultPaginationNext")
    