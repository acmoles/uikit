import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { Video as VanillaVideo, VideoProperties as VanillaVideoProperties } from '@pmndrs/uikit-default';
export { Video as VanillaVideo } from '@pmndrs/uikit-default';
export type VideoProperties = VanillaVideoProperties;
export declare const Video: ForwardRefExoticComponent<PropsWithoutRef<VideoProperties> & RefAttributes<VanillaVideo>>;
