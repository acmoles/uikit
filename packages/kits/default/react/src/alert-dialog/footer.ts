
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDialogFooter as VanillaAlertDialogFooter, AlertDialogFooterProperties as VanillaAlertDialogFooterProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { AlertDialogFooter as VanillaAlertDialogFooter } from '@pmndrs/uikit-default'

export type AlertDialogFooterProperties = VanillaAlertDialogFooterProperties& { children?: ReactNode } 

export const AlertDialogFooter: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDialogFooterProperties> & RefAttributes<VanillaAlertDialogFooter>
> = /*@__PURE__*/ build<VanillaAlertDialogFooter, AlertDialogFooterProperties>(VanillaAlertDialogFooter, "VanillaDefaultAlertDialogFooter")
    