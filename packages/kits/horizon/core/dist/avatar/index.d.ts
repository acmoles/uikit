import { Image, ImageOutProperties, InProperties, RenderContext, BaseOutProperties, Container, UnionizeVariants } from '@pmndrs/uikit';
import { Texture } from 'three';
declare const _avatarSizes: {
    xl: {
        attributionActiveMargin: number;
        attributionActiveWidth: number;
        attributionSrcWidth: number;
        borderWidth: number;
        height: number;
    };
    lg: {
        attributionActiveMargin: number;
        attributionActiveWidth: number;
        attributionSrcWidth: number;
        borderWidth: number;
        height: number;
    };
    md: {
        attributionActiveMargin: number;
        attributionActiveWidth: number;
        attributionSrcWidth: number;
        borderWidth: number;
        height: number;
    };
    sm: {
        borderWidth: number;
        height: number;
    };
    xs: {
        borderWidth: number;
        height: number;
    };
};
declare const avatarSizes: UnionizeVariants<typeof _avatarSizes>;
export type AvatarProperties = InProperties<AvatarOutProperties>;
export type AvatarOutProperties = BaseOutProperties & {
    src?: string;
    /**
     * @default false
     */
    attributionActive?: boolean;
    attributionSrc?: string;
    /**
     * @default md
     */
    size?: keyof typeof avatarSizes;
    selected?: boolean;
};
export declare class Avatar extends Container<AvatarOutProperties> {
    readonly focusRing: Container;
    readonly image: Image<ImageOutProperties<string | Texture>>;
    readonly activeBadge: Container;
    attributionImage?: Image<ImageOutProperties<string | Texture>>;
    constructor(inputProperties?: InProperties<AvatarOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<AvatarOutProperties>;
    });
    dispose(): void;
    add(): this;
}
export {};
