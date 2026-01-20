
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertIcon as VanillaAlertIcon, AlertIconProperties as VanillaAlertIconProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { AlertIcon as VanillaAlertIcon } from '@pmndrs/uikit-default'

export type AlertIconProperties = VanillaAlertIconProperties& { children?: ReactNode } 

export const AlertIcon: ForwardRefExoticComponent<
  PropsWithoutRef<AlertIconProperties> & RefAttributes<VanillaAlertIcon>
> = /*@__PURE__*/ build<VanillaAlertIcon, AlertIconProperties>(VanillaAlertIcon, "VanillaDefaultAlertIcon")
    