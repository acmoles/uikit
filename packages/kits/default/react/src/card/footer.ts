
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { CardFooter as VanillaCardFooter, CardFooterProperties as VanillaCardFooterProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { CardFooter as VanillaCardFooter } from '@pmndrs/uikit-default'

export type CardFooterProperties = VanillaCardFooterProperties& { children?: ReactNode } 

export const CardFooter: ForwardRefExoticComponent<
  PropsWithoutRef<CardFooterProperties> & RefAttributes<VanillaCardFooter>
> = /*@__PURE__*/ build<VanillaCardFooter, CardFooterProperties>(VanillaCardFooter, "VanillaDefaultCardFooter")
    