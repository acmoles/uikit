import { Container } from '@pmndrs/uikit';
import { colors, componentDefaults } from '../theme.js';
export class CardDescription extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                fontSize: 14,
                lineHeight: '20px',
                color: colors.mutedForeground,
                ...config?.defaultOverrides,
            },
        });
    }
}
