import { Text, } from '@pmndrs/uikit';
import { computed } from '@preact/signals-core';
import { Dropdown } from './index.js';
export class DropdownTextValue extends Text {
    constructor(inputProperties, initialClasses, config) {
        const text = computed(() => {
            const dropdown = this.parentContainer.value;
            if (dropdown instanceof Dropdown && dropdown.currentSignal.value != null) {
                return dropdown.currentSignal.value;
            }
            return this.properties.value.placeholder;
        });
        super(inputProperties, initialClasses, {
            ...config,
            defaultOverrides: {
                text,
                ...config?.defaultOverrides,
            },
        });
    }
}
