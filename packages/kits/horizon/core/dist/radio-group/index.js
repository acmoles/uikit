import { Container } from '@pmndrs/uikit';
import { signal, computed } from '@preact/signals-core';
export class RadioGroup extends Container {
    uncontrolledSignal = signal(undefined);
    currentSignal = computed(() => this.properties.value.value ?? this.uncontrolledSignal.value ?? this.properties.value.defaultValue);
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            ...config,
            defaultOverrides: {
                flexDirection: 'column',
                gap: 8,
                ...config?.defaultOverrides,
            },
        });
    }
}
export * from './item.js';
