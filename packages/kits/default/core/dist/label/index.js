import { Container } from '@pmndrs/uikit';
import { computed } from '@preact/signals-core';
import { colors, componentDefaults } from '../theme.js';
export class Label extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                fontWeight: 'medium',
                fontSize: 14,
                lineHeight: '100%',
                opacity: computed(() => (this.properties.value.disabled ? 0.7 : undefined)),
                ...config?.defaultOverrides,
            },
        });
    }
}
