import { BaseOutProperties, Container, InProperties, RenderContext } from '@pmndrs/uikit';
export type ProgressBarStepperOutProperties = BaseOutProperties;
export type ProgressBarStepperProperties = InProperties<ProgressBarStepperOutProperties>;
export declare class ProgressBarStepper extends Container<ProgressBarStepperOutProperties> {
    constructor(inputProperties?: InProperties<ProgressBarStepperOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<ProgressBarStepperOutProperties>;
    });
}
