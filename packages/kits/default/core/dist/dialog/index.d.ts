import { Container, InProperties, BaseOutProperties } from '@pmndrs/uikit';
export type DialogOutProperties = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    defaultOpen?: boolean;
} & BaseOutProperties;
export type DialogProperties = InProperties<DialogOutProperties>;
export declare class Dialog extends Container<DialogOutProperties> {
    readonly uncontrolledSignal: any;
    readonly currentSignal: any;
    constructor(inputProperties?: InProperties<DialogOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: any;
        defaultOverrides?: InProperties<DialogOutProperties>;
    });
    setOpen(open: boolean): void;
}
export * from './trigger.js';
export * from './content.js';
export * from './header.js';
export * from './footer.js';
export * from './title.js';
export * from './description.js';
