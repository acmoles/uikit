import { Container } from '@pmndrs/uikit';
import { colors, componentDefaults } from '../theme.js';
export class AlertDescription extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                paddingLeft: 28,
                lineHeight: '162.5%',
                fontSize: 14,
                opacity: 0.9,
                ...config?.defaultOverrides,
            },
        });
    }
}
