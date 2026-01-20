
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { PaginationContent as VanillaPaginationContent, PaginationContentProperties as VanillaPaginationContentProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { PaginationContent as VanillaPaginationContent } from '@pmndrs/uikit-default'

export type PaginationContentProperties = VanillaPaginationContentProperties& { children?: ReactNode } 

export const PaginationContent: ForwardRefExoticComponent<
  PropsWithoutRef<PaginationContentProperties> & RefAttributes<VanillaPaginationContent>
> = /*@__PURE__*/ build<VanillaPaginationContent, PaginationContentProperties>(VanillaPaginationContent, "VanillaDefaultPaginationContent")
    