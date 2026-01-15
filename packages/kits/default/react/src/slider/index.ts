
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Slider as VanillaSlider, SliderProperties as VanillaSliderProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Slider as VanillaSlider } from '@pmndrs/uikit-default'

export type SliderProperties = VanillaSliderProperties 

export const Slider: ForwardRefExoticComponent<
  PropsWithoutRef<SliderProperties> & RefAttributes<VanillaSlider>
> = /*@__PURE__*/ build<VanillaSlider, SliderProperties>(VanillaSlider, "VanillaDefaultSlider")
    
