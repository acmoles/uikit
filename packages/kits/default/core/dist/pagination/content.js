import { Container } from '@pmndrs/uikit';
import { colors, componentDefaults } from '../theme.js';
export class PaginationContent extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
                ...config?.defaultOverrides,
            },
        });
    }
}
