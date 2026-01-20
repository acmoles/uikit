import { Container } from '@pmndrs/uikit';
import { borderRadius, colors, componentDefaults } from '../theme.js';
export class Card extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                flexDirection: 'column',
                borderRadius: borderRadius.lg,
                borderWidth: 1,
                backgroundColor: colors.card,
                color: colors.cardForeground,
                ...config?.defaultOverrides,
            },
        });
    }
}
export * from './header.js';
export * from './title.js';
export * from './description.js';
export * from './content.js';
export * from './footer.js';
