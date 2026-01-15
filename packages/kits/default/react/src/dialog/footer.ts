
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DialogFooter as VanillaDialogFooter, DialogFooterProperties as VanillaDialogFooterProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { DialogFooter as VanillaDialogFooter } from '@pmndrs/uikit-default'

export type DialogFooterProperties = VanillaDialogFooterProperties& { children?: ReactNode } 

export const DialogFooter: ForwardRefExoticComponent<
  PropsWithoutRef<DialogFooterProperties> & RefAttributes<VanillaDialogFooter>
> = /*@__PURE__*/ build<VanillaDialogFooter, DialogFooterProperties>(VanillaDialogFooter, "VanillaDefaultDialogFooter")
    