
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Card as VanillaCard, CardProperties as VanillaCardProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Card as VanillaCard } from '@pmndrs/uikit-default'

export type CardProperties = VanillaCardProperties& { children?: ReactNode } 

export const Card: ForwardRefExoticComponent<
  PropsWithoutRef<CardProperties> & RefAttributes<VanillaCard>
> = /*@__PURE__*/ build<VanillaCard, CardProperties>(VanillaCard, "VanillaDefaultCard")
    
export * from "./content.js";export * from "./description.js";export * from "./footer.js";export * from "./header.js";export * from "./title.js";