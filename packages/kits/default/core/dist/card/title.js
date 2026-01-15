import { Container } from '@pmndrs/uikit';
import { colors, componentDefaults } from '../theme.js';
export class CardTitle extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                fontWeight: 'semi-bold',
                letterSpacing: -0.4,
                fontSize: 24,
                lineHeight: '100%',
                ...config?.defaultOverrides,
            },
        });
    }
}
