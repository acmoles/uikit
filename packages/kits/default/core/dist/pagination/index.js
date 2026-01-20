import { Container } from '@pmndrs/uikit';
import { colors, componentDefaults } from '../theme.js';
export class Pagination extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                marginX: 'auto',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'center',
                ...config?.defaultOverrides,
            },
        });
    }
}
export * from './content.js';
export * from './item.js';
export * from './link.js';
export * from './previous.js';
export * from './next.js';
export * from './ellipsis.js';
