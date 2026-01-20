
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Video as VanillaVideo, VideoProperties as VanillaVideoProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Video as VanillaVideo } from '@pmndrs/uikit-default'

export type VideoProperties = VanillaVideoProperties 

export const Video: ForwardRefExoticComponent<
  PropsWithoutRef<VideoProperties> & RefAttributes<VanillaVideo>
> = /*@__PURE__*/ build<VanillaVideo, VideoProperties>(VanillaVideo, "VanillaDefaultVideo")
    
