import { ReactNode, RefAttributes } from 'react';
import { ImageProperties, VanillaImage } from './index.js';
export declare const privateKeys: string[];
type BasePortalProperties = Omit<ImageProperties, 'src' | 'objectFit'>;
export type PortalProperties = {
    frames?: number;
    renderPriority?: number;
    eventPriority?: number;
    /**
     * ratio between the size (in pixels) and the size of the render target (in pixels)
     * higher dpr means higher resolution of the render target
     */
    dpr?: number;
    children?: ReactNode;
} & BasePortalProperties & {
    children?: ReactNode;
};
export declare const Portal: import("react").ForwardRefExoticComponent<{
    frames?: number;
    renderPriority?: number;
    eventPriority?: number;
    /**
     * ratio between the size (in pixels) and the size of the render target (in pixels)
     * higher dpr means higher resolution of the render target
     */
    dpr?: number;
    children?: ReactNode;
} & BasePortalProperties & {
    children?: ReactNode;
} & RefAttributes<VanillaImage<import("@pmndrs/uikit").ImageOutProperties<string | import("three").Texture>>>>;
export {};
