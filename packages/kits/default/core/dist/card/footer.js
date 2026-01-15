import { Container } from '@pmndrs/uikit';
import { colors, componentDefaults } from '../theme.js';
export class CardFooter extends Container {
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
                padding: 24,
                paddingTop: 0,
                ...config?.defaultOverrides,
            },
        });
    }
}
