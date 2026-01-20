import { BaseOutProperties, Container, InProperties, RenderContext, UnionizeVariants } from '@pmndrs/uikit';
declare const _alertVariants: {
    default: {
        backgroundColor: ReadonlySignal<ColorRepresentation>;
        color: ReadonlySignal<ColorRepresentation>;
    };
    destructive: {
        backgroundColor: ReadonlySignal<ColorRepresentation>;
        color: ReadonlySignal<ColorRepresentation>;
    };
};
declare const alertVariants: UnionizeVariants<typeof _alertVariants>;
export type AlertProperties = InProperties<AlertOutProperties>;
export type AlertOutProperties = BaseOutProperties & {
    variant?: keyof typeof alertVariants;
};
export declare class Alert extends Container<AlertOutProperties> {
    constructor(inputProperties?: InProperties<AlertOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<AlertOutProperties>;
    });
}
export * from './icon.js';
export * from './title.js';
export * from './description.js';
