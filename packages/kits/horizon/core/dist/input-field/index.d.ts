import { BaseOutProperties, Component, Container, InProperties, RenderContext, Text } from '@pmndrs/uikit';
import { Input, InputOutProperties } from '../input/index.js';
export type InputFieldOutProperties = InputOutProperties & {
    label?: string;
    leftIcon?: {
        new (InputFieldProperties: any, initialClasses: any, config: {
            defaultOverrides?: InProperties<BaseOutProperties>;
        }): Component;
    };
    rightIcon?: {
        new (InputFieldProperties: any, initialClasses: any, config: {
            defaultOverrides?: InProperties<BaseOutProperties>;
        }): Component;
    };
};
export type InputFieldProperties = InProperties<InputFieldOutProperties>;
export declare class InputField extends Container<InputFieldOutProperties> {
    readonly label: Text;
    readonly input: Input;
    constructor(InputFieldProperties?: InProperties<InputFieldOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<InputFieldOutProperties>;
    });
    dispose(): void;
    add(): this;
}
