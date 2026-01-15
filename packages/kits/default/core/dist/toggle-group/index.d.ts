import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
import type { ToggleSize, ToggleVariant } from './item.js';
export type ToggleGroupOutProperties = {
    variant?: ToggleVariant;
    size?: ToggleSize;
} & BaseOutProperties;
export type ToggleGroupProperties = InProperties<ToggleGroupOutProperties>;
export declare class ToggleGroup extends Container<ToggleGroupOutProperties> {
    constructor(inputProperties?: ToggleGroupProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<ToggleGroupOutProperties>;
    });
}
export * from './item.js';
