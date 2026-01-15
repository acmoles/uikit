import { InProperties, BaseOutProperties, RenderContext, Container } from '@pmndrs/uikit';
import { Ellipsis } from '@pmndrs/uikit-lucide';
import type { Object3D } from 'three';
export type PaginationEllipsisProperties = Omit<InProperties<BaseOutProperties>, 'children'>;
export declare class PaginationEllipsis extends Container {
    readonly icon: InstanceType<typeof Ellipsis>;
    constructor(inputProperties?: InProperties<BaseOutProperties>, initialClasses?: Array<BaseOutProperties | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
    dispose(): void;
    add(...object: Object3D[]): this;
}
