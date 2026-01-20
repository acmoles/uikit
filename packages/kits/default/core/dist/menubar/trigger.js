import { Container } from '@pmndrs/uikit';
import { borderRadius, colors, componentDefaults } from '../theme.js';
export class MenubarTrigger extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                hover: { backgroundColor: colors.accent },
                flexDirection: 'row',
                alignItems: 'center',
                cursor: 'pointer',
                borderRadius: borderRadius.md,
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 12,
                paddingRight: 12,
                fontSize: 14,
                lineHeight: '20px',
                fontWeight: 'medium',
                ...config?.defaultOverrides,
            },
        });
    }
}
