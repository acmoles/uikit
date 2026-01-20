import { Container } from '@pmndrs/uikit';
import { colors, componentDefaults } from '../theme.js';
export class DialogFooter extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                flexDirection: 'column-reverse',
                sm: { flexDirection: 'row', justifyContent: 'flex-end' },
                gap: 8,
                ...config?.defaultOverrides,
            },
        });
    }
}
