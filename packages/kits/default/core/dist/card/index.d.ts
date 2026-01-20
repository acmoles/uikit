import { BaseOutProperties, Container, InProperties } from '@pmndrs/uikit';
export type CardProperties = InProperties<BaseOutProperties>;
export declare class Card extends Container<BaseOutProperties> {
    constructor(inputProperties?: InProperties<BaseOutProperties>, initialClasses?: Array<InProperties<BaseOutProperties> | string>, config?: {
        renderContext?: any;
        defaultOverrides?: InProperties<BaseOutProperties>;
    });
}
export * from './header.js';
export * from './title.js';
export * from './description.js';
export * from './content.js';
export * from './footer.js';
