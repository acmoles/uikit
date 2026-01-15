import { Container } from '@pmndrs/uikit';
import { Accordion } from './index.js';
import { colors, componentDefaults } from '../theme.js';
export class AccordionItem extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                cursor: 'pointer',
                flexDirection: 'column',
                onClick: () => {
                    const parent = this.parentContainer.peek();
                    if (!(parent instanceof Accordion)) {
                        return;
                    }
                    const ownValue = this.properties.peek().value;
                    const currentValue = parent.openItemValue.peek();
                    const isSelected = ownValue === currentValue;
                    parent.openItemValue.value = isSelected ? undefined : ownValue;
                },
                borderBottomWidth: 1,
                ...config?.defaultOverrides,
            },
        });
    }
}
