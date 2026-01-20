import { Container } from '@pmndrs/uikit';
import { colors, componentDefaults } from '../theme.js';
export class MenubarMenu extends Container {
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
                ...config?.defaultOverrides,
            },
        });
    }
}
