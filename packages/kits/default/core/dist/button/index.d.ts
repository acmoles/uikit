import { BaseOutProperties, Container, InProperties, RenderContext, UnionizeVariants } from '@pmndrs/uikit';
declare const _buttonVariants: {
    default: {
        hover: {
            backgroundColor: any;
        };
        backgroundColor: ReadonlySignal<ColorRepresentation>;
        color: ReadonlySignal<ColorRepresentation>;
    };
    destructive: {
        hover: {
            backgroundColor: any;
        };
        backgroundColor: ReadonlySignal<ColorRepresentation>;
        color: ReadonlySignal<ColorRepresentation>;
    };
    outline: {
        hover: {
            backgroundColor: ReadonlySignal<ColorRepresentation>;
            color: ReadonlySignal<ColorRepresentation>;
        };
        borderWidth: number;
        borderColor: ReadonlySignal<ColorRepresentation>;
        backgroundColor: ReadonlySignal<ColorRepresentation>;
    };
    secondary: {
        hover: {
            backgroundColor: any;
        };
        backgroundColor: ReadonlySignal<ColorRepresentation>;
        color: ReadonlySignal<ColorRepresentation>;
    };
    ghost: {
        hover: {
            backgroundColor: ReadonlySignal<ColorRepresentation>;
            color: ReadonlySignal<ColorRepresentation>;
        };
    };
    link: {
        color: ReadonlySignal<ColorRepresentation>;
    };
};
declare const buttonVariants: UnionizeVariants<typeof _buttonVariants>;
declare const _buttonSizes: {
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
declare const buttonSizes: UnionizeVariants<typeof _buttonSizes>;
export type ButtonOutProperties = BaseOutProperties & {
    variant?: keyof typeof buttonVariants;
    size?: keyof typeof buttonSizes;
    disabled?: boolean;
};
export type ButtonProperties = InProperties<ButtonOutProperties>;
export declare class Button extends Container<ButtonOutProperties> {
    constructor(inputProperties?: InProperties<ButtonOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<ButtonOutProperties>;
    });
}
export {};
