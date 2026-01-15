import { BaseOutProperties, Container, InProperties, RenderContext, UnionizeVariants } from '@pmndrs/uikit';
declare const _buttonVariants: {
    primary: {
        backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        hover: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
            color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
        active: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
            color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
    };
    secondary: {
        backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        hover: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
            color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
        active: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
            color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
    };
    tertiary: {
        backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        hover: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
            color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
        active: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
            color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
    };
    onMedia: {
        backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        hover: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
            color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
        active: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
            color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
    };
    positive: {
        backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        hover: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
            color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
        active: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
            color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
    };
    negative: {
        backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        hover: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
            color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
        active: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
            color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
        important: {
            backgroundColor: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
            color: import("@preact/signals-core").ReadonlySignal<import("@pmndrs/uikit").ColorRepresentation>;
        };
    };
};
declare const buttonVariants: UnionizeVariants<typeof _buttonVariants>;
declare const _buttonSizes: {
    lg: {
        height: number;
        fontSize: number;
        lineHeight: string;
        minWidth: number;
    };
    sm: {
        height: number;
        fontSize: number;
        lineHeight: string;
        minWidth: number;
    };
};
declare const buttonSizes: UnionizeVariants<typeof _buttonSizes>;
export type ButtonOutProperties = BaseOutProperties & {
    /**
     * @default "primary"
     */
    variant?: keyof typeof buttonVariants;
    /**
     * @default "lg"
     */
    size?: keyof typeof buttonSizes;
    /**
     * @default false
     */
    disabled?: boolean;
    /**
     * @default false
     */
    icon?: boolean;
};
export type ButtonProperties = InProperties<ButtonOutProperties>;
export declare class Button extends Container<ButtonOutProperties> {
    constructor(inputProperties?: InProperties<ButtonOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<ButtonOutProperties>;
    });
}
export * from './icon.js';
export * from './label.js';
export * from './label-subtext.js';
