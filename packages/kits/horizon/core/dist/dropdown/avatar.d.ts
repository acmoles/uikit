import { BaseOutProperties, InProperties, RenderContext, WithSignal } from '@pmndrs/uikit';
import { Avatar, AvatarOutProperties } from '../avatar/index.js';
export type DropdownAvatarOutProperties = AvatarOutProperties;
export type DropdownAvatarProperties = InProperties<DropdownAvatarOutProperties>;
export declare class DropdownAvatar extends Avatar {
    constructor(inputProperties?: InProperties<DropdownAvatarOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<DropdownAvatarOutProperties>;
        defaults?: WithSignal<DropdownAvatarOutProperties>;
    });
}
