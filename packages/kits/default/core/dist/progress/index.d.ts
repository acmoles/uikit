import { BaseOutProperties, Container, InProperties, RenderContext } from '@pmndrs/uikit';
export type ProgressOutProperties = {
    value?: number | string;
} & BaseOutProperties;
export type ProgressProperties = InProperties<ProgressOutProperties>;
export declare class Progress extends Container<ProgressOutProperties> {
    readonly fill: Container;
    constructor(inputProperties?: InProperties<ProgressOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        defaultOverrides?: InProperties<ProgressOutProperties>;
        renderContext?: RenderContext;
    });
    dispose(): void;
    add(): this;
}
