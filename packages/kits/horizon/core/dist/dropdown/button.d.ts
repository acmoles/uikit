import { BaseOutProperties, InProperties, RenderContext, SvgOutProperties } from '@pmndrs/uikit';
import { ChevronDownIcon } from '@pmndrs/uikit-lucide';
export type DropdownButtonOutProperties = SvgOutProperties;
export type DropdownButtonProperties = InProperties<DropdownButtonOutProperties>;
export declare class DropdownButton extends ChevronDownIcon<DropdownButtonOutProperties> {
    constructor(inputProperties?: InProperties<DropdownButtonOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<DropdownButtonOutProperties>;
    });
}
