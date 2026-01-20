
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DialogTrigger as VanillaDialogTrigger, DialogTriggerProperties as VanillaDialogTriggerProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { DialogTrigger as VanillaDialogTrigger } from '@pmndrs/uikit-default'

export type DialogTriggerProperties = VanillaDialogTriggerProperties& { children?: ReactNode } 

export const DialogTrigger: ForwardRefExoticComponent<
  PropsWithoutRef<DialogTriggerProperties> & RefAttributes<VanillaDialogTrigger>
> = /*@__PURE__*/ build<VanillaDialogTrigger, DialogTriggerProperties>(VanillaDialogTrigger, "VanillaDefaultDialogTrigger")
    