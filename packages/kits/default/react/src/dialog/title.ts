
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DialogTitle as VanillaDialogTitle, DialogTitleProperties as VanillaDialogTitleProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { DialogTitle as VanillaDialogTitle } from '@pmndrs/uikit-default'

export type DialogTitleProperties = VanillaDialogTitleProperties& { children?: ReactNode } 

export const DialogTitle: ForwardRefExoticComponent<
  PropsWithoutRef<DialogTitleProperties> & RefAttributes<VanillaDialogTitle>
> = /*@__PURE__*/ build<VanillaDialogTitle, DialogTitleProperties>(VanillaDialogTitle, "VanillaDefaultDialogTitle")
    