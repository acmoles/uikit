import { Container } from '@pmndrs/uikit';
import { signal } from '@preact/signals-core';
import { colors, componentDefaults } from '../theme.js';
export class Tooltip extends Container {
    open = signal(false);
    timeoutId;
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                onPointerOver: () => {
                    if (this.timeoutId != null) {
                        return;
                    }
                    this.timeoutId = window.setTimeout(() => {
                        this.timeoutId = undefined;
                        this.open.value = true;
                    }, 1000);
                },
                onPointerOut: () => {
                    if (this.timeoutId != null) {
                        clearTimeout(this.timeoutId);
                        this.timeoutId = undefined;
                        return;
                    }
                    this.open.value = false;
                },
                positionType: 'relative',
                flexDirection: 'column',
                alignItems: 'center',
                ...config?.defaultOverrides,
            },
        });
    }
}
export * from './trigger.js';
export * from './content.js';
