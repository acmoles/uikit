import { Container } from '@pmndrs/uikit';
import { colors, componentDefaults } from '../theme.js';
export class TooltipTrigger extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                alignSelf: 'stretch',
                ...config?.defaultOverrides,
            },
        });
    }
}
