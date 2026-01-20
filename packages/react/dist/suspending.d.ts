import { ReactNode, RefAttributes } from 'react';
import { VanillaVideo, VanillaImage, ClassListProperties } from './index.js';
import { ImageOutProperties, InProperties, VideoOutProperties, VideoSrc } from '@pmndrs/uikit';
export type SuspendingImageProperties = InProperties<Omit<ImageOutProperties<never>, 'src'>> & {
    src: string;
} & ClassListProperties;
/**
 * be aware that this component does not dispose the loaded texture
 */
export declare const SuspendingImage: (props: SuspendingImageProperties & RefAttributes<VanillaImage>) => ReactNode;
export type SuspendingVideoProperties = InProperties<Omit<VideoOutProperties, 'src'>> & {
    src: Exclude<VideoSrc, HTMLVideoElement>;
} & ClassListProperties;
export declare const SuspendingVideo: (props: SuspendingVideoProperties & RefAttributes<VanillaVideo>) => ReactNode;
