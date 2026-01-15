
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDialogTrigger as VanillaAlertDialogTrigger, AlertDialogTriggerProperties as VanillaAlertDialogTriggerProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { AlertDialogTrigger as VanillaAlertDialogTrigger } from '@pmndrs/uikit-default'

export type AlertDialogTriggerProperties = VanillaAlertDialogTriggerProperties& { children?: ReactNode } 

export const AlertDialogTrigger: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDialogTriggerProperties> & RefAttributes<VanillaAlertDialogTrigger>
> = /*@__PURE__*/ build<VanillaAlertDialogTrigger, AlertDialogTriggerProperties>(VanillaAlertDialogTrigger, "VanillaDefaultAlertDialogTrigger")
    