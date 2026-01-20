import { InProperties, BaseOutProperties, Container, RenderContext } from '@pmndrs/uikit';
import { CheckIcon } from '@pmndrs/uikit-lucide';
export type CheckboxOutProperties = BaseOutProperties & {
    checked?: boolean;
    disabled?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    defaultChecked?: boolean;
};
export type CheckboxProperties = InProperties<CheckboxOutProperties>;
export declare class Checkbox extends Container<CheckboxOutProperties> {
    readonly uncontrolledSignal: any;
    readonly currentSignal: any;
    readonly icon: CheckIcon;
    constructor(inputProperties?: InProperties<CheckboxOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<CheckboxOutProperties>;
    });
    dispose(): void;
    add(): this;
}
