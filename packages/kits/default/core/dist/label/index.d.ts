import { BaseOutProperties, Container, InProperties } from '@pmndrs/uikit';
export type LabelOutProperties = {
    disabled?: boolean;
} & BaseOutProperties;
export type LabelProperties = InProperties<LabelOutProperties>;
export declare class Label extends Container<LabelOutProperties> {
    constructor(inputProperties?: InProperties<LabelOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: any;
        defaultOverrides?: InProperties<LabelOutProperties>;
    });
}
