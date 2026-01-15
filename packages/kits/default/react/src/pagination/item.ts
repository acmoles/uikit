
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { PaginationItem as VanillaPaginationItem, PaginationItemProperties as VanillaPaginationItemProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { PaginationItem as VanillaPaginationItem } from '@pmndrs/uikit-default'

export type PaginationItemProperties = VanillaPaginationItemProperties& { children?: ReactNode } 

export const PaginationItem: ForwardRefExoticComponent<
  PropsWithoutRef<PaginationItemProperties> & RefAttributes<VanillaPaginationItem>
> = /*@__PURE__*/ build<VanillaPaginationItem, PaginationItemProperties>(VanillaPaginationItem, "VanillaDefaultPaginationItem")
    