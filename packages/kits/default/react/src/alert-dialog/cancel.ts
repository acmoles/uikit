
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDialogCancel as VanillaAlertDialogCancel, AlertDialogCancelProperties as VanillaAlertDialogCancelProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { AlertDialogCancel as VanillaAlertDialogCancel } from '@pmndrs/uikit-default'

export type AlertDialogCancelProperties = VanillaAlertDialogCancelProperties& { children?: ReactNode } 

export const AlertDialogCancel: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDialogCancelProperties> & RefAttributes<VanillaAlertDialogCancel>
> = /*@__PURE__*/ build<VanillaAlertDialogCancel, AlertDialogCancelProperties>(VanillaAlertDialogCancel, "VanillaDefaultAlertDialogCancel")
    