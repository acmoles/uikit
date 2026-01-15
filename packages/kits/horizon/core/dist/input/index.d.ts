import { BaseOutProperties, Component, Container, InProperties, RenderContext, Input as InputImpl, InputOutProperties as BaseInputOutProperties, UnionizeVariants } from '@pmndrs/uikit';
import { ReadonlySignal } from '@preact/signals-core';
declare const _inputSizes: {
    lg: {
        height: number;
        fontSize: number;
        lineHeight: string;
    };
    sm: {
        height: number;
        fontSize: number;
        lineHeight: string;
    };
};
declare const inputSizes: UnionizeVariants<typeof _inputSizes>;
export type InputOutProperties = BaseInputOutProperties & {
    /**
     * @default "lg"
     */
    size?: keyof typeof inputSizes;
    variant: 'search' | 'text';
    textAlign: 'center' | 'left';
    leftIcon?: {
        new (inputProperties: any, initialClasses: any, config: {
            defaultOverrides?: InProperties<BaseOutProperties>;
        }): Component;
    };
    rightIcon?: {
        new (inputProperties: any, initialClasses: any, config: {
            defaultOverrides?: InProperties<BaseOutProperties>;
        }): Component;
    };
    placeholder?: string;
};
export type InputProperties = InProperties<InputOutProperties>;
export declare class Input extends Container<InputOutProperties> {
    readonly input: InputImpl;
    readonly leftIconPlaceholder: Container;
    leftIcon?: Component;
    readonly rightIconPlaceholder: Container;
    rightIcon?: Component;
    constructor(inputProperties?: InProperties<InputOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<InputOutProperties>;
        hovered?: ReadonlySignal<boolean>;
    });
    dispose(): void;
    add(): this;
}
export declare const HorizonInput: typeof Input;
export {};
