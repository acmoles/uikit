import { Container } from '@pmndrs/uikit';
export class ProgressBarStepper extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            ...config,
            defaultOverrides: {
                flexDirection: 'row',
                height: 12,
                gap: 8,
                ...config?.defaultOverrides,
            },
        });
    }
}
