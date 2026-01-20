import { BaseOutProperties, Container, InProperties, RenderContext } from '@pmndrs/uikit';
export type AccordionItemOutProperties = BaseOutProperties & {
    value?: string;
};
export type AccordionItemProperties = InProperties<AccordionItemOutProperties>;
export declare class AccordionItem extends Container<AccordionItemOutProperties> {
    constructor(inputProperties?: InProperties<AccordionItemOutProperties>, initialClasses?: (string | InProperties<BaseOutProperties>)[], config?: {
        renderContext?: RenderContext;
        defaultOverrides?: InProperties<AccordionItemOutProperties>;
    });
}
