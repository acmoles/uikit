import { Container } from '@pmndrs/uikit';
import { signal, computed } from '@preact/signals-core';
import { colors, componentDefaults } from '../theme.js';
export class Tabs extends Container {
    uncontrolledSignal = signal(undefined);
    currentSignal = computed(() => this.properties.value.value ?? this.uncontrolledSignal.value ?? this.properties.value.defaultValue);
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
export * from './list.js';
export * from './trigger.js';
export * from './content.js';
