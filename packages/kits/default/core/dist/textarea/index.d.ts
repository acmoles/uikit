import { InProperties, BaseOutProperties, Container, Input as InputImpl, Text, InputOutProperties as BaseInputOutProperties, RenderContext } from '@pmndrs/uikit';
import type { Object3D } from 'three';
export type TextareaOutProperties = {
    placeholder?: string;
} & BaseInputOutProperties;
export type TextareaProperties = InProperties<TextareaOutProperties>;
export declare class Textarea extends Container<TextareaOutProperties> {
    readonly input: InputImpl;
    readonly placeholder: Text;
    constructor(inputProperties?: InProperties<TextareaOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<TextareaOutProperties>;
    });
    dispose(): void;
    add(...object: Object3D[]): this;
}
