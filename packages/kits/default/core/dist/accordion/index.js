import { Container } from '@pmndrs/uikit';
import { signal } from '@preact/signals-core';
import { colors, componentDefaults } from '../theme.js';
export class Accordion extends Container {
    openItemValue = signal(undefined);
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                flexDirection: 'column',
                ...config?.defaultOverrides,
            },
        });
    }
}
export * from './item.js';
export * from './trigger.js';
export * from './trigger-icon.js';
export * from './content.js';
