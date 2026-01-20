
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDialog as VanillaAlertDialog, AlertDialogProperties as VanillaAlertDialogProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { AlertDialog as VanillaAlertDialog } from '@pmndrs/uikit-default'

export type AlertDialogProperties = VanillaAlertDialogProperties& { children?: ReactNode } 

export const AlertDialog: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDialogProperties> & RefAttributes<VanillaAlertDialog>
> = /*@__PURE__*/ build<VanillaAlertDialog, AlertDialogProperties>(VanillaAlertDialog, "VanillaDefaultAlertDialog")
    
export * from "./action.js";export * from "./cancel.js";export * from "./content.js";export * from "./description.js";export * from "./footer.js";export * from "./header.js";export * from "./title.js";export * from "./trigger.js";