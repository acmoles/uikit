import { Container } from '@pmndrs/uikit';
import { computed } from '@preact/signals-core';
import { theme } from '../theme.js';
export class Divider extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            ...config,
            defaultOverrides: {
                flexShrink: 0,
                backgroundColor: theme.component.progressBar.quickReplies.dividers,
                width: computed(() => ((this.properties.value.orientation ?? 'horizontal') === 'horizontal' ? '100%' : 1)),
                height: computed(() => ((this.properties.value.orientation ?? 'horizontal') === 'horizontal' ? 1 : '100%')),
                ...config?.defaultOverrides,
            },
        });
    }
}
