import { BaseOutProperties, Container, InProperties } from '@pmndrs/uikit';
export type DividerProperties = InProperties<DividerOutProperties>;
export type DividerOutProperties = BaseOutProperties & {
    orientation?: 'horizontal' | 'vertical';
};
export declare class Divider extends Container<DividerOutProperties> {
    constructor(inputProperties?: InProperties<DividerOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: any;
        defaultOverrides?: InProperties<DividerOutProperties>;
    });
}
