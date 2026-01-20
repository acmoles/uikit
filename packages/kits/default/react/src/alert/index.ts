
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Alert as VanillaAlert, AlertProperties as VanillaAlertProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Alert as VanillaAlert } from '@pmndrs/uikit-default'

export type AlertProperties = VanillaAlertProperties& { children?: ReactNode } 

export const Alert: ForwardRefExoticComponent<
  PropsWithoutRef<AlertProperties> & RefAttributes<VanillaAlert>
> = /*@__PURE__*/ build<VanillaAlert, AlertProperties>(VanillaAlert, "VanillaDefaultAlert")
    
export * from "./description.js";export * from "./icon.js";export * from "./title.js";