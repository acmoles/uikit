import { InProperties, BaseOutProperties, RenderContext, Text } from '@pmndrs/uikit';
import { ChevronRight } from '@pmndrs/uikit-lucide';
import { PaginationLink, PaginationLinkOutProperties } from './link.js';
export type PaginationNextProperties = Omit<InProperties<PaginationLinkOutProperties>, 'children'>;
export declare class PaginationNext extends PaginationLink {
    readonly label: Text;
    readonly icon: InstanceType<typeof ChevronRight>;
    constructor(inputProperties?: InProperties<PaginationLinkOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<PaginationLinkOutProperties>;
    });
    dispose(): void;
    add(): never;
}
