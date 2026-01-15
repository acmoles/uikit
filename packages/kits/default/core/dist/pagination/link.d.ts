import { Container, InProperties, BaseOutProperties, RenderContext, UnionizeVariants } from '@pmndrs/uikit';
declare const _paginationSizes: {
    default: {
        height: number;
        paddingX: number;
        paddingY: number;
    };
    sm: {
        height: number;
        paddingX: number;
    };
    lg: {
        height: number;
        paddingX: number;
    };
    icon: {
        height: number;
        width: number;
    };
};
declare const paginationSizes: UnionizeVariants<typeof _paginationSizes>;
export type PaginationLinkOutProperties = BaseOutProperties & {
    size?: keyof typeof paginationSizes;
    isActive?: boolean;
};
export type PaginationLinkProperties = InProperties<PaginationLinkOutProperties>;
export declare class PaginationLink extends Container<PaginationLinkOutProperties> {
    constructor(inputProperties?: PaginationLinkProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<PaginationLinkOutProperties>;
    });
}
export {};
