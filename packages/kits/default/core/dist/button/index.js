import { Container, withOpacity, } from '@pmndrs/uikit';
import { computed } from '@preact/signals-core';
import { borderRadius, colors, componentDefaults } from '../theme.js';
const _buttonVariants = {
    default: {
        hover: {
            backgroundColor: withOpacity(colors.primary, 0.9),
        },
        backgroundColor: colors.primary,
        color: colors.primaryForeground,
    },
    destructive: {
        hover: {
            backgroundColor: withOpacity(colors.destructive, 0.9),
        },
        backgroundColor: colors.destructive,
        color: colors.destructiveForeground,
    },
    outline: {
        hover: {
            backgroundColor: colors.accent,
            color: colors.accentForeground,
        },
        borderWidth: 1,
        borderColor: colors.input,
        backgroundColor: colors.background,
    },
    secondary: {
        hover: {
            backgroundColor: withOpacity(colors.secondary, 0.8),
        },
        backgroundColor: colors.secondary,
        color: colors.secondaryForeground,
    },
    ghost: {
        hover: {
            backgroundColor: colors.accent,
            color: colors.accentForeground,
        },
    },
    link: {
        color: colors.primary,
    }, //TODO: underline-offset-4 hover:underline",
};
const buttonVariants = _buttonVariants;
const _buttonSizes = {
    default: { height: 40, paddingX: 16, paddingY: 8 },
    sm: { height: 36, paddingX: 12 },
    lg: { height: 42, paddingX: 32 },
    icon: { height: 40, width: 40 },
};
const buttonSizes = _buttonSizes;
export class Button extends Container {
    constructor(inputProperties, initialClasses, config) {
        const borderW = computed(() => {
            const variant = this.properties.value.variant ?? 'default';
            return buttonVariants[variant]?.borderWidth;
        });
        const sizeProps = computed(() => {
            const size = this.properties.value.size ?? 'default';
            return buttonSizes[size];
        });
        const paddingX = computed(() => sizeProps.value?.paddingX);
        const paddingY = computed(() => sizeProps.value?.paddingY);
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                borderRadius: borderRadius.md,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                fontSize: 14,
                lineHeight: '20px',
                fontWeight: 'medium',
                wordBreak: 'keep-all',
                hover: {
                    backgroundColor: computed(() => buttonVariants[this.properties.value.variant ?? 'default'].hover?.backgroundColor?.value),
                    color: computed(() => buttonVariants[this.properties.value.variant ?? 'default'].hover?.color?.value),
                },
                backgroundColor: computed(() => buttonVariants[this.properties.value.variant ?? 'default'].backgroundColor?.value),
                color: computed(() => buttonVariants[this.properties.value.variant ?? 'default'].color?.value),
                borderTopWidth: borderW,
                borderRightWidth: borderW,
                borderBottomWidth: borderW,
                borderLeftWidth: borderW,
                borderColor: computed(() => buttonVariants[this.properties.value.variant ?? 'default'].borderColor?.value),
                // size-derived
                height: computed(() => sizeProps.value?.height),
                width: computed(() => sizeProps.value?.width),
                paddingLeft: paddingX,
                paddingRight: paddingX,
                paddingTop: paddingY,
                paddingBottom: paddingY,
                // disabled-derived
                opacity: computed(() => ((this.properties.value.disabled ?? false) ? 0.5 : 1)),
                cursor: computed(() => ((this.properties.value.disabled ?? false) ? 'default' : 'pointer')),
                ...config?.defaultOverrides,
            },
        });
    }
}
