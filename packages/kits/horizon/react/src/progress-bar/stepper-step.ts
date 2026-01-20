
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { ProgressBarStepperStep as VanillaProgressBarStepperStep, ProgressBarStepperStepProperties as VanillaProgressBarStepperStepProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { ProgressBarStepperStep as VanillaProgressBarStepperStep } from '@pmndrs/uikit-horizon'

export type ProgressBarStepperStepProperties = VanillaProgressBarStepperStepProperties 

export const ProgressBarStepperStep: ForwardRefExoticComponent<
  PropsWithoutRef<ProgressBarStepperStepProperties> & RefAttributes<VanillaProgressBarStepperStep>
> = /*@__PURE__*/ build<VanillaProgressBarStepperStep, ProgressBarStepperStepProperties>(VanillaProgressBarStepperStep, "VanillaHorizonProgressBarStepperStep")
    