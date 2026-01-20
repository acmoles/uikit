import { BaseOutProperties, Container, InProperties, RenderContext, WithSignal } from '@pmndrs/uikit';
export type DropdownListOutProperties = BaseOutProperties;
export type DropdownListProperties = InProperties<DropdownListOutProperties>;
export declare class DropdownList extends Container<DropdownListOutProperties> {
    constructor(inputProperties?: InProperties<DropdownListOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<DropdownListOutProperties>;
        defaults?: WithSignal<DropdownListOutProperties>;
    });
}
