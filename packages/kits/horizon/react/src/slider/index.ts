
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Slider as VanillaSlider, SliderProperties as VanillaSliderProperties } from '@pmndrs/uikit-horizon'
import { build } from '@react-three/uikit'

export { Slider as VanillaSlider } from '@pmndrs/uikit-horizon'

export type SliderProperties = VanillaSliderProperties 

export const Slider: ForwardRefExoticComponent<
  PropsWithoutRef<SliderProperties> & RefAttributes<VanillaSlider>
> = /*@__PURE__*/ build<VanillaSlider, SliderProperties>(VanillaSlider, "VanillaHorizonSlider")
    
