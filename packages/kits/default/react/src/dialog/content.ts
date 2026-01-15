
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DialogContent as VanillaDialogContent, DialogContentProperties as VanillaDialogContentProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { DialogContent as VanillaDialogContent } from '@pmndrs/uikit-default'

export type DialogContentProperties = VanillaDialogContentProperties& { children?: ReactNode } 

export const DialogContent: ForwardRefExoticComponent<
  PropsWithoutRef<DialogContentProperties> & RefAttributes<VanillaDialogContent>
> = /*@__PURE__*/ build<VanillaDialogContent, DialogContentProperties>(VanillaDialogContent, "VanillaDefaultDialogContent")
    