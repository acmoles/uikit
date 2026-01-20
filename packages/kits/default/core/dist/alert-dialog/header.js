import { Container } from '@pmndrs/uikit';
import { colors, componentDefaults } from '../theme.js';
export class AlertDialogHeader extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                flexDirection: 'column',
                gap: 6,
                ...config?.defaultOverrides,
            },
        });
    }
}
