import { BaseOutProperties, Container, InProperties, RenderContext, WithSignal } from '@pmndrs/uikit';
export type DropdownListItemOutProperties = BaseOutProperties & {
    value?: string;
};
export type DropdownListItemProperties = InProperties<DropdownListItemOutProperties>;
export declare class DropdownListItem extends Container<DropdownListItemOutProperties> {
    constructor(inputProperties?: InProperties<DropdownListItemOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<DropdownListItemOutProperties>;
        defaults?: WithSignal<DropdownListItemOutProperties>;
    });
}
