
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertTitle as VanillaAlertTitle, AlertTitleProperties as VanillaAlertTitleProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { AlertTitle as VanillaAlertTitle } from '@pmndrs/uikit-default'

export type AlertTitleProperties = VanillaAlertTitleProperties& { children?: ReactNode } 

export const AlertTitle: ForwardRefExoticComponent<
  PropsWithoutRef<AlertTitleProperties> & RefAttributes<VanillaAlertTitle>
> = /*@__PURE__*/ build<VanillaAlertTitle, AlertTitleProperties>(VanillaAlertTitle, "VanillaDefaultAlertTitle")
    