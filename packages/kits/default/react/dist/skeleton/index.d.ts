import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { Skeleton as VanillaSkeleton, SkeletonProperties as VanillaSkeletonProperties } from '@pmndrs/uikit-default';
export { Skeleton as VanillaSkeleton } from '@pmndrs/uikit-default';
export type SkeletonProperties = VanillaSkeletonProperties & {
    children?: ReactNode;
};
export declare const Skeleton: ForwardRefExoticComponent<PropsWithoutRef<SkeletonProperties> & RefAttributes<VanillaSkeleton>>;
