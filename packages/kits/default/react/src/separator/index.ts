
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Separator as VanillaSeparator, SeparatorProperties as VanillaSeparatorProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Separator as VanillaSeparator } from '@pmndrs/uikit-default'

export type SeparatorProperties = VanillaSeparatorProperties& { children?: ReactNode } 

export const Separator: ForwardRefExoticComponent<
  PropsWithoutRef<SeparatorProperties> & RefAttributes<VanillaSeparator>
> = /*@__PURE__*/ build<VanillaSeparator, SeparatorProperties>(VanillaSeparator, "VanillaDefaultSeparator")
    
