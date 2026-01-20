
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DialogHeader as VanillaDialogHeader, DialogHeaderProperties as VanillaDialogHeaderProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { DialogHeader as VanillaDialogHeader } from '@pmndrs/uikit-default'

export type DialogHeaderProperties = VanillaDialogHeaderProperties& { children?: ReactNode } 

export const DialogHeader: ForwardRefExoticComponent<
  PropsWithoutRef<DialogHeaderProperties> & RefAttributes<VanillaDialogHeader>
> = /*@__PURE__*/ build<VanillaDialogHeader, DialogHeaderProperties>(VanillaDialogHeader, "VanillaDefaultDialogHeader")
    