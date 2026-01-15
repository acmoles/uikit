
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Label as VanillaLabel, LabelProperties as VanillaLabelProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Label as VanillaLabel } from '@pmndrs/uikit-default'

export type LabelProperties = VanillaLabelProperties& { children?: ReactNode } 

export const Label: ForwardRefExoticComponent<
  PropsWithoutRef<LabelProperties> & RefAttributes<VanillaLabel>
> = /*@__PURE__*/ build<VanillaLabel, LabelProperties>(VanillaLabel, "VanillaDefaultLabel")
    
