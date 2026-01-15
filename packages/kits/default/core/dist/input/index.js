import { Input as InputImpl, withOpacity, } from '@pmndrs/uikit';
import { computed } from '@preact/signals-core';
import { borderRadius, colors, inputDefaults } from '../theme.js';
export class Input extends InputImpl {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: inputDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                height: 40,
                positionType: 'relative',
                overflow: 'scroll',
                scrollbarColor: withOpacity('black', 0),
                borderRadius: borderRadius.md,
                backgroundColor: colors.background,
                borderColor: computed(() => (this.hasFocus.value ? colors.ring.value : colors.input.value)),
                borderWidth: 1,
                opacity: computed(() => (this.properties.value.disabled ? 0.5 : undefined)),
                fontSize: 14,
                paddingX: 12,
                paddingY: 8,
                lineHeight: '20px',
                placeholderStyle: {
                    color: colors.mutedForeground,
                },
                ...config?.defaultOverrides,
            },
        });
        console;
    }
}
