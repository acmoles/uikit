import { Container, } from '@pmndrs/uikit';
import { borderRadius, colors, componentDefaults } from '../theme.js';
import { computed } from '@preact/signals-core';
const _alertVariants = {
    default: {
        backgroundColor: colors.card,
        color: colors.cardForeground,
    },
    destructive: {
        backgroundColor: colors.card,
        color: colors.destructive,
    },
};
const alertVariants = _alertVariants;
export class Alert extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                flexDirection: 'column',
                positionType: 'relative',
                width: '100%',
                borderRadius: borderRadius.lg,
                borderWidth: 1,
                padding: 16,
                backgroundColor: computed(() => alertVariants[this.properties.value.variant ?? 'default'].backgroundColor?.value),
                color: computed(() => alertVariants[this.properties.value.variant ?? 'default'].color?.value),
                ...config?.defaultOverrides,
            },
        });
    }
}
export * from './icon.js';
export * from './title.js';
export * from './description.js';
