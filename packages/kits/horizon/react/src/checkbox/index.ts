
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Checkbox as VanillaCheckbox, CheckboxProperties as VanillaCheckboxProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { Checkbox as VanillaCheckbox } from '@pmndrs/uikit-horizon'

export type CheckboxProperties = VanillaCheckboxProperties 

export const Checkbox: ForwardRefExoticComponent<
  PropsWithoutRef<CheckboxProperties> & RefAttributes<VanillaCheckbox>
> = /*@__PURE__*/ build<VanillaCheckbox, CheckboxProperties>(VanillaCheckbox, "VanillaHorizonCheckbox")
    
