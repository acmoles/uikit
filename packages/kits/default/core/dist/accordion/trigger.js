import { Container } from '@pmndrs/uikit';
import { colors, componentDefaults } from '../theme.js';
export class AccordionTrigger extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                flexDirection: 'row',
                flexGrow: 1,
                flexShrink: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 16,
                paddingBottom: 16,
                fontSize: 14,
                lineHeight: '20px',
                fontWeight: 'medium',
                ...config?.defaultOverrides,
            },
        });
    }
}
