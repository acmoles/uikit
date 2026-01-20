import { Container, withOpacity } from '@pmndrs/uikit';
import { signal, computed } from '@preact/signals-core';
import { colors, componentDefaults } from '../theme.js';
export class Dialog extends Container {
    uncontrolledSignal = signal(undefined);
    currentSignal = computed(() => this.properties.value.open ?? this.uncontrolledSignal.value ?? this.properties.value.defaultOpen);
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                positionType: 'absolute',
                display: computed(() => (this.currentSignal.value ? 'flex' : 'none')),
                inset: 0,
                zIndex: 50,
                backgroundColor: withOpacity('black', 0.8),
                alignItems: 'center',
                justifyContent: 'center',
                ...config?.defaultOverrides,
            },
        });
        const stopPropagationListener = (e) => e.stopPropagation();
        this.addEventListener('pointermove', stopPropagationListener);
        this.addEventListener('pointerenter', stopPropagationListener);
        this.addEventListener('pointerleave', stopPropagationListener);
        this.addEventListener('wheel', stopPropagationListener);
        this.addEventListener('click', () => this.setOpen(false));
    }
    setOpen(open) {
        const props = this.properties.peek();
        if (props.open == null) {
            this.uncontrolledSignal.value = open;
        }
        props.onOpenChange?.(open);
    }
}
export * from './trigger.js';
export * from './content.js';
export * from './header.js';
export * from './footer.js';
export * from './title.js';
export * from './description.js';
