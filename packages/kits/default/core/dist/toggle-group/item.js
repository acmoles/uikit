import { Container, searchFor } from '@pmndrs/uikit';
import { computed, signal } from '@preact/signals-core';
import { borderRadius, colors, componentDefaults } from '../theme.js';
import { ToggleGroup } from './index.js';
const _toggleVariants = {
    default: {},
    outline: {
        borderWidth: 1,
        borderColor: colors.input,
        hover: {
            backgroundColor: colors.accent,
        },
    },
};
const toggleVariants = _toggleVariants;
const toggleSizes = {
    default: { height: 40, paddingX: 12 },
    sm: { height: 36, paddingX: 10 },
    lg: { height: 44, paddingX: 20 },
};
export class ToggleGroupItem extends Container {
    uncontrolledSignal = signal(undefined);
    currentSignal = computed(() => this.properties.value.checked ?? this.uncontrolledSignal.value ?? this.properties.value.defaultChecked);
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                onClick: () => {
                    if (this.properties.peek().disabled) {
                        return;
                    }
                    const isChecked = this.currentSignal.peek();
                    if (this.properties.peek().checked == null) {
                        this.uncontrolledSignal.value = !isChecked;
                    }
                    this.properties.peek().onCheckedChange?.(!isChecked);
                },
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: borderRadius.md,
                borderWidth: computed(() => toggleVariants[this.getGroupVariant()]?.borderWidth),
                borderColor: computed(() => toggleVariants[this.getGroupVariant()]?.borderColor?.value),
                height: computed(() => toggleSizes[this.getGroupSize()].height),
                paddingX: computed(() => toggleSizes[this.getGroupSize()].paddingX),
                cursor: computed(() => (this.properties.value.disabled ? undefined : 'pointer')),
                opacity: computed(() => (this.properties.value.disabled ? 0.5 : undefined)),
                disabled: computed(() => this.properties.value.disabled),
                backgroundColor: computed(() => (this.currentSignal.value ? colors.accent.value : undefined)),
                hover: {
                    backgroundColor: computed(() => {
                        if (this.properties.value.disabled)
                            return undefined;
                        const variant = this.getGroupVariant();
                        return toggleVariants[variant]?.hover?.backgroundColor?.value ?? colors.muted.value;
                    }),
                },
                color: computed(() => (this.currentSignal.value ? colors.accentForeground.value : undefined)),
                fontSize: 14,
                lineHeight: '20px',
                ...config?.defaultOverrides,
            },
        });
    }
    getGroupVariant() {
        const toggleGroup = searchFor(this, ToggleGroup, 2);
        return toggleGroup?.properties.value.variant ?? 'default';
    }
    getGroupSize() {
        const toggleGroup = searchFor(this, ToggleGroup, 2);
        return toggleGroup?.properties.value.size ?? 'default';
    }
}
