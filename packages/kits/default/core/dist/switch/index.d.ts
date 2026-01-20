import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
import type { Object3D } from 'three';
export type SwitchOutProperties = {
    checked?: boolean;
    disabled?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
} & BaseOutProperties;
export type SwitchProperties = InProperties<SwitchOutProperties>;
export declare class Switch extends Container<SwitchOutProperties> {
    readonly uncontrolledSignal: any;
    readonly currentSignal: any;
    readonly handle: Container;
    constructor(inputProperties?: InProperties<SwitchOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<SwitchOutProperties>;
    });
    dispose(): void;
    add(...object: Object3D[]): this;
}
