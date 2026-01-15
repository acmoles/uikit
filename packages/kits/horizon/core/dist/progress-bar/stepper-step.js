import { Container } from '@pmndrs/uikit';
import { computed } from '@preact/signals-core';
import { theme } from '../theme.js';
export class ProgressBarStepperStep extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            ...config,
            defaultOverrides: {
                borderRadius: 1000,
                height: 12,
                flexGrow: 1,
                backgroundColor: computed(() => this.properties.value.value
                    ? theme.component.progressBar.determinate.fill.fill.value
                    : theme.component.progressBar.determinate.background.background.value),
                ...config?.defaultOverrides,
            },
        });
    }
    add() {
        throw new Error(`the ProgressBarStepperStep component can not have any children`);
    }
}
