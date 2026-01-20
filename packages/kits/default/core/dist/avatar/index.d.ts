import { Image, ImageOutProperties, InProperties, RenderContext, BaseOutProperties } from '@pmndrs/uikit';
import { Texture } from 'three';
export type AvatarProperties = InProperties<ImageOutProperties<string | Texture>>;
export type AvatarOutProperties = ImageOutProperties<string | Texture>;
export declare class Avatar extends Image<AvatarOutProperties> {
    constructor(inputProperties?: InProperties<AvatarOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<AvatarOutProperties>;
    });
}
