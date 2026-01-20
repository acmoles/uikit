
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDialogHeader as VanillaAlertDialogHeader, AlertDialogHeaderProperties as VanillaAlertDialogHeaderProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { AlertDialogHeader as VanillaAlertDialogHeader } from '@pmndrs/uikit-default'

export type AlertDialogHeaderProperties = VanillaAlertDialogHeaderProperties& { children?: ReactNode } 

export const AlertDialogHeader: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDialogHeaderProperties> & RefAttributes<VanillaAlertDialogHeader>
> = /*@__PURE__*/ build<VanillaAlertDialogHeader, AlertDialogHeaderProperties>(VanillaAlertDialogHeader, "VanillaDefaultAlertDialogHeader")
    