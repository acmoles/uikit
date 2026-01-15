import { BaseOutProperties, Container, InProperties, RenderContext } from '@pmndrs/uikit';
export type SkeletonProperties = InProperties<BaseOutProperties>;
export declare class Skeleton extends Container<BaseOutProperties> {
    private readonly opacity;
    private time;
    constructor(inputProperties?: SkeletonProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
    private animate;
}
