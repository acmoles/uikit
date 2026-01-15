
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { CardDescription as VanillaCardDescription, CardDescriptionProperties as VanillaCardDescriptionProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { CardDescription as VanillaCardDescription } from '@pmndrs/uikit-default'

export type CardDescriptionProperties = VanillaCardDescriptionProperties& { children?: ReactNode } 

export const CardDescription: ForwardRefExoticComponent<
  PropsWithoutRef<CardDescriptionProperties> & RefAttributes<VanillaCardDescription>
> = /*@__PURE__*/ build<VanillaCardDescription, CardDescriptionProperties>(VanillaCardDescription, "VanillaDefaultCardDescription")
    