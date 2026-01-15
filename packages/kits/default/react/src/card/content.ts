
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { CardContent as VanillaCardContent, CardContentProperties as VanillaCardContentProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { CardContent as VanillaCardContent } from '@pmndrs/uikit-default'

export type CardContentProperties = VanillaCardContentProperties& { children?: ReactNode } 

export const CardContent: ForwardRefExoticComponent<
  PropsWithoutRef<CardContentProperties> & RefAttributes<VanillaCardContent>
> = /*@__PURE__*/ build<VanillaCardContent, CardContentProperties>(VanillaCardContent, "VanillaDefaultCardContent")
    