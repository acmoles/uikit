import { Container, InProperties, BaseOutProperties, RenderContext } from '@pmndrs/uikit';
import type { Dialog } from './index.js';
export type DialogTriggerOutProperties = BaseOutProperties & {
    dialog?: Dialog;
};
export type DialogTriggerProperties = InProperties<DialogTriggerOutProperties>;
export declare class DialogTrigger extends Container<DialogTriggerOutProperties> {
    constructor(inputProperties?: DialogTriggerProperties, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<DialogTriggerOutProperties>;
    });
}
