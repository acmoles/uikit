
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { ProgressBarStepper as VanillaProgressBarStepper, ProgressBarStepperProperties as VanillaProgressBarStepperProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { ProgressBarStepper as VanillaProgressBarStepper } from '@pmndrs/uikit-horizon'

export type ProgressBarStepperProperties = VanillaProgressBarStepperProperties& { children?: ReactNode } 

export const ProgressBarStepper: ForwardRefExoticComponent<
  PropsWithoutRef<ProgressBarStepperProperties> & RefAttributes<VanillaProgressBarStepper>
> = /*@__PURE__*/ build<VanillaProgressBarStepper, ProgressBarStepperProperties>(VanillaProgressBarStepper, "VanillaHorizonProgressBarStepper")
    