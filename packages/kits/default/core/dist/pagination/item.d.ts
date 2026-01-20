import { Container, InProperties, BaseOutProperties, WithSignal, RenderContext } from '@pmndrs/uikit';
export type PaginationItemProperties = InProperties<BaseOutProperties>;
export declare class PaginationItem extends Container<BaseOutProperties> {
    constructor(inputProperties?: InProperties<BaseOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BaseOutProperties>;
        defaults?: WithSignal<BaseOutProperties>;
    });
}
