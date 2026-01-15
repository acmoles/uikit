import { BaseOutProperties, Container, InProperties, RenderContext } from '@pmndrs/uikit';
export type ProgressBarStepperStepOutProperties = BaseOutProperties & {
    value?: boolean;
};
export type ProgressBarStepperStepProperties = InProperties<ProgressBarStepperStepOutProperties>;
export declare class ProgressBarStepperStep extends Container<ProgressBarStepperStepOutProperties> {
    constructor(inputProperties?: InProperties<ProgressBarStepperStepOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<ProgressBarStepperStepOutProperties>;
    });
    add(): this;
}
