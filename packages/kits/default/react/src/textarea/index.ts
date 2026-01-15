
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Textarea as VanillaTextarea, TextareaProperties as VanillaTextareaProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Textarea as VanillaTextarea } from '@pmndrs/uikit-default'

export type TextareaProperties = VanillaTextareaProperties 

export const Textarea: ForwardRefExoticComponent<
  PropsWithoutRef<TextareaProperties> & RefAttributes<VanillaTextarea>
> = /*@__PURE__*/ build<VanillaTextarea, TextareaProperties>(VanillaTextarea, "VanillaDefaultTextarea")
    
