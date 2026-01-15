
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Progress as VanillaProgress, ProgressProperties as VanillaProgressProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Progress as VanillaProgress } from '@pmndrs/uikit-default'

export type ProgressProperties = VanillaProgressProperties 

export const Progress: ForwardRefExoticComponent<
  PropsWithoutRef<ProgressProperties> & RefAttributes<VanillaProgress>
> = /*@__PURE__*/ build<VanillaProgress, ProgressProperties>(VanillaProgress, "VanillaDefaultProgress")
    
