import { InProperties, VideoOutProperties as BaseVideoOutProperties, Container, Video as VideoImpl, BaseOutProperties } from '@pmndrs/uikit';
import type { Object3D } from 'three';
export type VideoOutProperties = BaseVideoOutProperties & {
    controls?: boolean;
};
export type VideoProperties = InProperties<VideoOutProperties>;
export declare class Video extends Container<VideoOutProperties> {
    readonly interacting: any;
    private timeoutRef?;
    readonly video: VideoImpl;
    readonly controls: VideoControls;
    constructor(inputProperties?: VideoProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: any;
        defaultOverrides?: InProperties<VideoOutProperties>;
    });
    private onInteract;
    add(...object: Object3D[]): this;
    dispose(): void;
}
export type VideoControlsProperties = InProperties<BaseOutProperties>;
export declare class VideoControls extends Container<BaseOutProperties> {
    constructor(inputProperties?: VideoControlsProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: any;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
    add(...object: Object3D[]): this;
}
