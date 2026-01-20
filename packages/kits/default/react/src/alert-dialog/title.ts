
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDialogTitle as VanillaAlertDialogTitle, AlertDialogTitleProperties as VanillaAlertDialogTitleProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { AlertDialogTitle as VanillaAlertDialogTitle } from '@pmndrs/uikit-default'

export type AlertDialogTitleProperties = VanillaAlertDialogTitleProperties& { children?: ReactNode } 

export const AlertDialogTitle: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDialogTitleProperties> & RefAttributes<VanillaAlertDialogTitle>
> = /*@__PURE__*/ build<VanillaAlertDialogTitle, AlertDialogTitleProperties>(VanillaAlertDialogTitle, "VanillaDefaultAlertDialogTitle")
    