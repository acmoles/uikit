import { BaseOutProperties, Container, InProperties, RenderContext, UnionizeVariants } from '@pmndrs/uikit';
declare const _badgeVariants: {
    default: {
        backgroundColor: ReadonlySignal<ColorRepresentation>;
        color: ReadonlySignal<ColorRepresentation>;
        hover: {
            backgroundColor: any;
        };
    };
    secondary: {
        backgroundColor: ReadonlySignal<ColorRepresentation>;
        color: ReadonlySignal<ColorRepresentation>;
        hover: {
            backgroundColor: any;
        };
    };
    destructive: {
        backgroundColor: ReadonlySignal<ColorRepresentation>;
        color: ReadonlySignal<ColorRepresentation>;
        hover: {
            backgroundColor: any;
        };
    };
    outline: {};
};
declare const badgeVariants: UnionizeVariants<typeof _badgeVariants>;
export type BadgeProperties = InProperties<BadgeOutProperties>;
export type BadgeOutProperties = BaseOutProperties & {
    variant?: keyof typeof badgeVariants;
};
export declare class Badge extends Container<BadgeOutProperties> {
    constructor(inputProperties?: InProperties<BadgeOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BadgeOutProperties>;
    });
}
export {};
