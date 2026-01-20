import { componentDefaults, Container, } from '@pmndrs/uikit';
export class ButtonLabel extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                flexDirection: 'column',
                ...config?.defaultOverrides,
            },
        });
    }
}
