import { Container } from '@pmndrs/uikit';
import { colors, componentDefaults } from '../theme.js';
export class DialogTitle extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                fontSize: 18,
                lineHeight: '100%',
                letterSpacing: -0.4,
                fontWeight: 'semi-bold',
                ...config?.defaultOverrides,
            },
        });
    }
}
