import { Container } from '@pmndrs/uikit';
import { signal, computed } from '@preact/signals-core';
import { colors, componentDefaults } from '../theme.js';
export class Switch extends Container {
    uncontrolledSignal = signal(undefined);
    currentSignal = computed(() => this.properties.value.checked ?? this.uncontrolledSignal.value ?? this.properties.value.defaultChecked);
    handle;
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                height: 24,
                width: 44,
                flexShrink: 0,
                flexDirection: 'row',
                padding: 2,
                alignItems: 'center',
                opacity: computed(() => (this.properties.value.disabled ? 0.5 : undefined)),
                borderRadius: 1000,
                backgroundColor: computed(() => (this.currentSignal.value ? colors.primary.value : colors.input.value)),
                cursor: computed(() => (this.properties.value.disabled ? undefined : 'pointer')),
                onClick: computed(() => {
                    return this.properties.value.disabled
                        ? undefined
                        : () => {
                            const checked = this.currentSignal.peek();
                            if (this.properties.peek().checked == null) {
                                this.uncontrolledSignal.value = !checked;
                            }
                            this.properties.peek().onCheckedChange?.(!checked);
                        };
                }),
                disabled: computed(() => this.properties.value.disabled),
                ...config?.defaultOverrides,
            },
        });
        super.add((this.handle = new Container(undefined, undefined, {
            defaults: componentDefaults,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                width: 20,
                height: 20,
                borderRadius: 1000,
                transformTranslateX: computed(() => (this.currentSignal.value ? 20 : 0)),
                backgroundColor: colors.background,
            },
        })));
    }
    dispose() {
        this.handle.dispose();
        super.dispose();
    }
    add(...object) {
        throw new Error(`the switch component can not have any children`);
    }
}
