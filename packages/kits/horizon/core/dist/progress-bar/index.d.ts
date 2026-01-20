import { BaseOutProperties, Container, InProperties, RenderContext } from '@pmndrs/uikit';
export type ProgressBarOutProperties = BaseOutProperties & {
    value?: number;
};
export type ProgressBarProperties = InProperties<ProgressBarOutProperties>;
export declare class ProgressBar extends Container<ProgressBarOutProperties> {
    readonly fill: Container;
    constructor(inputProperties?: InProperties<ProgressBarOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<ProgressBarOutProperties>;
    });
    dispose(): void;
    add(): this;
}
export * from './stepper.js';
export * from './stepper-step.js';
