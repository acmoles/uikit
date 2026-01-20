
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Skeleton as VanillaSkeleton, SkeletonProperties as VanillaSkeletonProperties } from '@pmndrs/uikit-default'
import { build } from '@react-three/uikit'

export { Skeleton as VanillaSkeleton } from '@pmndrs/uikit-default'

export type SkeletonProperties = VanillaSkeletonProperties& { children?: ReactNode } 

export const Skeleton: ForwardRefExoticComponent<
  PropsWithoutRef<SkeletonProperties> & RefAttributes<VanillaSkeleton>
> = /*@__PURE__*/ build<VanillaSkeleton, SkeletonProperties>(VanillaSkeleton, "VanillaDefaultSkeleton")
    
