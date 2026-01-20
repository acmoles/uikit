import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
export type PaginationContentProperties = InProperties<BaseOutProperties>;
export declare class PaginationContent extends Container<BaseOutProperties> {
    constructor(inputProperties?: PaginationContentProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
