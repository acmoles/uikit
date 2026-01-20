import { InProperties, BaseOutProperties, RenderContext, Text } from '@pmndrs/uikit';
import { ChevronLeft } from '@pmndrs/uikit-lucide';
import { PaginationLink, PaginationLinkOutProperties } from './link.js';
export type PaginationPreviousProperties = Omit<InProperties<PaginationLinkOutProperties>, 'children'>;
export declare class PaginationPrevious extends PaginationLink {
    readonly label: Text;
    readonly icon: InstanceType<typeof ChevronLeft>;
    constructor(inputProperties?: InProperties<PaginationLinkOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<PaginationLinkOutProperties>;
    });
    dispose(): void;
    add(): never;
}
