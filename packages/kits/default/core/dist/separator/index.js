import { Container } from '@pmndrs/uikit';
import { colors, componentDefaults } from '../theme.js';
import { computed } from '@preact/signals-core';
export class Separator extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                flexShrink: 0,
                backgroundColor: colors.border,
                width: computed(() => ((this.properties.value.orientation ?? 'horizontal') === 'horizontal' ? '100%' : 1)),
                height: computed(() => ((this.properties.value.orientation ?? 'horizontal') === 'horizontal' ? 1 : '100%')),
                ...config?.defaultOverrides,
            },
        });
    }
}
