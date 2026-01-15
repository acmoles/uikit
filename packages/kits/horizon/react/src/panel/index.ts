
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Panel as VanillaPanel, PanelProperties as VanillaPanelProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { Panel as VanillaPanel } from '@pmndrs/uikit-horizon'

export type PanelProperties = VanillaPanelProperties& { children?: ReactNode } 

export const Panel: ForwardRefExoticComponent<
  PropsWithoutRef<PanelProperties> & RefAttributes<VanillaPanel>
> = /*@__PURE__*/ build<VanillaPanel, PanelProperties>(VanillaPanel, "VanillaHorizonPanel")
    
