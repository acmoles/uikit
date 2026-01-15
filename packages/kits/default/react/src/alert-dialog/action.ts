
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDialogAction as VanillaAlertDialogAction, AlertDialogActionProperties as VanillaAlertDialogActionProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { AlertDialogAction as VanillaAlertDialogAction } from '@pmndrs/uikit-default'

export type AlertDialogActionProperties = VanillaAlertDialogActionProperties& { children?: ReactNode } 

export const AlertDialogAction: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDialogActionProperties> & RefAttributes<VanillaAlertDialogAction>
> = /*@__PURE__*/ build<VanillaAlertDialogAction, AlertDialogActionProperties>(VanillaAlertDialogAction, "VanillaDefaultAlertDialogAction")
    