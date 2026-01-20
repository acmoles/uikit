
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DialogDescription as VanillaDialogDescription, DialogDescriptionProperties as VanillaDialogDescriptionProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { DialogDescription as VanillaDialogDescription } from '@pmndrs/uikit-default'

export type DialogDescriptionProperties = VanillaDialogDescriptionProperties& { children?: ReactNode } 

export const DialogDescription: ForwardRefExoticComponent<
  PropsWithoutRef<DialogDescriptionProperties> & RefAttributes<VanillaDialogDescription>
> = /*@__PURE__*/ build<VanillaDialogDescription, DialogDescriptionProperties>(VanillaDialogDescription, "VanillaDefaultDialogDescription")
    