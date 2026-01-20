import { Container, searchFor } from '@pmndrs/uikit';
import { computed } from '@preact/signals-core';
import { Tabs } from './index.js';
import { colors, componentDefaults } from '../theme.js';
export class TabsContent extends Container {
    constructor(inputProperties, initialClasses, config) {
        const isVisible = computed(() => {
            const tabs = searchFor(this, Tabs, 2);
            return this.properties.value.value === tabs?.currentSignal.value;
        });
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                marginTop: 8,
                display: computed(() => (isVisible.value ? 'flex' : 'none')),
                ...config?.defaultOverrides,
            },
        });
    }
}
