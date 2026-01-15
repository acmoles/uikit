import { BaseOutProperties, Container, InProperties, RenderContext, WithSignal } from '@pmndrs/uikit';
export type DropdownIconOutProperties = BaseOutProperties;
export type DropdownIconProperties = InProperties<DropdownIconOutProperties>;
export declare class DropdownIcon extends Container<BaseOutProperties> {
    constructor(inputProperties?: InProperties<DropdownIconOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<DropdownIconOutProperties>;
        defaults?: WithSignal<DropdownIconOutProperties>;
    });
}
