import { BaseOutProperties, Component, Container, InProperties, RenderContext, Text, UnionizeVariants } from '@pmndrs/uikit';
declare const _badgeVariants: {
    primary: {
        backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
    };
    secondary: {
        backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
    };
    positive: {
        backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
    };
    negative: {
        backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
    };
};
declare const badgeVariants: UnionizeVariants<typeof _badgeVariants>;
export type BadgeOutProperties = BaseOutProperties & {
    /**
     * @default "primary"
     */
    variant?: keyof typeof badgeVariants;
    label?: string;
    icon?: {
        new (inputProperties: any, initialClasses: any, config: {
            defaultOverrides?: InProperties<BaseOutProperties>;
        }): Component;
    };
};
export type BadgeProperties = InProperties<BadgeOutProperties>;
export declare class Badge extends Container<BadgeOutProperties> {
    readonly label: Text;
    readonly iconPlaceholder: Container;
    icon?: Component;
    constructor(inputProperties?: InProperties<BadgeOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<BadgeOutProperties>;
    });
    dispose(): void;
    add(): this;
}
export {};
