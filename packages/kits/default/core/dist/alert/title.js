import { Container } from '@pmndrs/uikit';
import { colors, componentDefaults } from '../theme.js';
export class AlertTitle extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                marginBottom: 4,
                padding: 0,
                paddingLeft: 28,
                fontWeight: 'medium',
                letterSpacing: -0.4,
                lineHeight: '100%',
                ...config?.defaultOverrides,
            },
        });
    }
}
