
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDialogContent as VanillaAlertDialogContent, AlertDialogContentProperties as VanillaAlertDialogContentProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { AlertDialogContent as VanillaAlertDialogContent } from '@pmndrs/uikit-default'

export type AlertDialogContentProperties = VanillaAlertDialogContentProperties& { children?: ReactNode } 

export const AlertDialogContent: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDialogContentProperties> & RefAttributes<VanillaAlertDialogContent>
> = /*@__PURE__*/ build<VanillaAlertDialogContent, AlertDialogContentProperties>(VanillaAlertDialogContent, "VanillaDefaultAlertDialogContent")
    