import { BaseOutProperties, InProperties, RenderContext, Text, TextOutProperties, WithSignal } from '@pmndrs/uikit';
export type DropdownTextValueOutProperties = Omit<TextOutProperties, 'text'> & {
    placeholder?: string;
};
export type DropdownTextValueProperties = InProperties<DropdownTextValueOutProperties>;
export declare class DropdownTextValue extends Text<DropdownTextValueOutProperties & {
    text?: string;
}> {
    constructor(inputProperties?: InProperties<DropdownTextValueOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<DropdownTextValueOutProperties>;
        defaults?: WithSignal<DropdownTextValueOutProperties>;
    });
}
