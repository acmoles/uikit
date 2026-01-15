import { BaseOutProperties, Container, InProperties, RenderContext } from '@pmndrs/uikit';
export type ToggleOutProperties = BaseOutProperties & {
    checked?: boolean;
    disabled?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    defaultChecked?: boolean;
};
export type ToggleProperties = InProperties<ToggleOutProperties>;
export declare class Toggle extends Container<ToggleOutProperties> {
    readonly uncontrolledSignal: import("@preact/signals-core").Signal<boolean | undefined>;
    readonly currentSignal: import("@preact/signals-core").ReadonlySignal<boolean | undefined>;
    readonly handle: Container;
    constructor(inputProperties?: InProperties<ToggleOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<ToggleOutProperties>;
    });
    dispose(): void;
    add(): this;
}
