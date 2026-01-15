
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDescription as VanillaAlertDescription, AlertDescriptionProperties as VanillaAlertDescriptionProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { AlertDescription as VanillaAlertDescription } from '@pmndrs/uikit-default'

export type AlertDescriptionProperties = VanillaAlertDescriptionProperties& { children?: ReactNode } 

export const AlertDescription: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDescriptionProperties> & RefAttributes<VanillaAlertDescription>
> = /*@__PURE__*/ build<VanillaAlertDescription, AlertDescriptionProperties>(VanillaAlertDescription, "VanillaDefaultAlertDescription")
    