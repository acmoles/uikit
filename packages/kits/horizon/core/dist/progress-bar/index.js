import { Container } from '@pmndrs/uikit';
import { computed } from '@preact/signals-core';
import { theme } from '../theme.js';
export class ProgressBar extends Container {
    fill;
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            ...config,
            defaultOverrides: {
                borderRadius: 1000,
                height: 12,
                backgroundColor: theme.component.progressBar.determinate.background.background.value,
                ...config?.defaultOverrides,
            },
        });
        super.add((this.fill = new Container(undefined, undefined, {
            defaultOverrides: {
                height: 12,
                borderRadius: 1000,
                backgroundColor: theme.component.progressBar.determinate.fill.fill.value,
                width: computed(() => `${this.properties.value.value ?? 0}%`),
                minWidth: 12,
            },
        })));
    }
    dispose() {
        this.fill.dispose();
        super.dispose();
    }
    add() {
        throw new Error(`the ProgressBar component can not have any children`);
    }
}
export * from './stepper.js';
export * from './stepper-step.js';
