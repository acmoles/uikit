
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Dialog as VanillaDialog, DialogProperties as VanillaDialogProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Dialog as VanillaDialog } from '@pmndrs/uikit-default'

export type DialogProperties = VanillaDialogProperties& { children?: ReactNode } 

export const Dialog: ForwardRefExoticComponent<
  PropsWithoutRef<DialogProperties> & RefAttributes<VanillaDialog>
> = /*@__PURE__*/ build<VanillaDialog, DialogProperties>(VanillaDialog, "VanillaDefaultDialog")
    
export * from "./content.js";export * from "./description.js";export * from "./footer.js";export * from "./header.js";export * from "./title.js";export * from "./trigger.js";