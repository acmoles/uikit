import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
export type RadioGroupItemOutProperties = {
    disabled?: boolean;
    value?: string;
} & BaseOutProperties;
export type RadioGroupItemProperties = InProperties<RadioGroupItemOutProperties>;
export declare class RadioGroupItem extends Container<RadioGroupItemOutProperties> {
    readonly radioButton: Container;
    readonly radioDot: Container;
    constructor(inputProperties?: RadioGroupItemProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<RadioGroupItemOutProperties>;
    });
    dispose(): void;
}
