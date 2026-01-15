
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { CardTitle as VanillaCardTitle, CardTitleProperties as VanillaCardTitleProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { CardTitle as VanillaCardTitle } from '@pmndrs/uikit-default'

export type CardTitleProperties = VanillaCardTitleProperties& { children?: ReactNode } 

export const CardTitle: ForwardRefExoticComponent<
  PropsWithoutRef<CardTitleProperties> & RefAttributes<VanillaCardTitle>
> = /*@__PURE__*/ build<VanillaCardTitle, CardTitleProperties>(VanillaCardTitle, "VanillaDefaultCardTitle")
    