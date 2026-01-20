import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
export type PaginationProperties = InProperties<BaseOutProperties>;
export declare class Pagination extends Container<BaseOutProperties> {
    constructor(inputProperties?: InProperties<BaseOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
export * from './content.js';
export * from './item.js';
export * from './link.js';
export * from './previous.js';
export * from './next.js';
export * from './ellipsis.js';
