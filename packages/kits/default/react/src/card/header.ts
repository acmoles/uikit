
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { CardHeader as VanillaCardHeader, CardHeaderProperties as VanillaCardHeaderProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { CardHeader as VanillaCardHeader } from '@pmndrs/uikit-default'

export type CardHeaderProperties = VanillaCardHeaderProperties& { children?: ReactNode } 

export const CardHeader: ForwardRefExoticComponent<
  PropsWithoutRef<CardHeaderProperties> & RefAttributes<VanillaCardHeader>
> = /*@__PURE__*/ build<VanillaCardHeader, CardHeaderProperties>(VanillaCardHeader, "VanillaDefaultCardHeader")
    