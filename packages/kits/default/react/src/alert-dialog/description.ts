
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDialogDescription as VanillaAlertDialogDescription, AlertDialogDescriptionProperties as VanillaAlertDialogDescriptionProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { AlertDialogDescription as VanillaAlertDialogDescription } from '@pmndrs/uikit-default'

export type AlertDialogDescriptionProperties = VanillaAlertDialogDescriptionProperties& { children?: ReactNode } 

export const AlertDialogDescription: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDialogDescriptionProperties> & RefAttributes<VanillaAlertDialogDescription>
> = /*@__PURE__*/ build<VanillaAlertDialogDescription, AlertDialogDescriptionProperties>(VanillaAlertDialogDescription, "VanillaDefaultAlertDialogDescription")
    