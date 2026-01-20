import { componentDefaults } from '@pmndrs/uikit';
import { computed } from '@preact/signals-core';
import { Dropdown } from './index.js';
import { Avatar } from '../avatar/index.js';
export class DropdownAvatar extends Avatar {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                size: computed(() => {
                    const dropdown = this.parentContainer.value;
                    if (!(dropdown instanceof Dropdown)) {
                        return 'sm';
                    }
                    const size = dropdown.properties.value.size ?? 'lg';
                    if (size === 'lg') {
                        return 'sm';
                    }
                    return 'xs';
                }),
                ...config?.defaultOverrides,
            },
        });
    }
}
