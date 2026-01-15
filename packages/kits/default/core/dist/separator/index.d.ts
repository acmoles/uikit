import { BaseOutProperties, Container, InProperties } from '@pmndrs/uikit';
export type SeparatorProperties = InProperties<SeperatorOutProperties>;
export type SeperatorOutProperties = BaseOutProperties & {
    orientation?: 'horizontal' | 'vertical';
};
export declare class Separator extends Container<SeperatorOutProperties> {
    constructor(inputProperties?: InProperties<SeperatorOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: any;
        defaultOverrides?: InProperties<SeperatorOutProperties>;
    });
}
