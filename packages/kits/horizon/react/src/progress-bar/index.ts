
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { ProgressBar as VanillaProgressBar, ProgressBarProperties as VanillaProgressBarProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { ProgressBar as VanillaProgressBar } from '@pmndrs/uikit-horizon'

export type ProgressBarProperties = VanillaProgressBarProperties 

export const ProgressBar: ForwardRefExoticComponent<
  PropsWithoutRef<ProgressBarProperties> & RefAttributes<VanillaProgressBar>
> = /*@__PURE__*/ build<VanillaProgressBar, ProgressBarProperties>(VanillaProgressBar, "VanillaHorizonProgressBar")
    
export * from "./stepper-step.js";export * from "./stepper.js";