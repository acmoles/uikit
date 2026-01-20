import { Container } from '@pmndrs/uikit';
import { computed } from '@preact/signals-core';
import { colors, componentDefaults } from '../theme.js';
export class Progress extends Container {
    fill;
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                height: 16,
                width: '100%',
                borderBottomLeftRadius: 1000,
                borderBottomRightRadius: 1000,
                borderTopRightRadius: 1000,
                borderTopLeftRadius: 1000,
                backgroundColor: colors.secondary,
                ...config?.defaultOverrides,
            },
        });
        super.add((this.fill = new Container(undefined, undefined, {
            defaults: componentDefaults,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                height: '100%',
                borderBottomLeftRadius: 1000,
                borderBottomRightRadius: 1000,
                borderTopRightRadius: 1000,
                borderTopLeftRadius: 1000,
                backgroundColor: colors.primary,
                width: computed(() => `${Number(this.properties.value.value ?? 0)}%`),
            },
        })));
    }
    dispose() {
        this.fill.dispose();
        super.dispose();
    }
    add() {
        throw new Error(`the progress component can not have any children`);
    }
}
