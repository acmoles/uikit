import { Container } from '@pmndrs/uikit';
import { colors, componentDefaults } from '../theme.js';
export class AlertIcon extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                positionLeft: 16,
                positionTop: 16,
                positionType: 'absolute',
                ...config?.defaultOverrides,
            },
        });
    }
}
