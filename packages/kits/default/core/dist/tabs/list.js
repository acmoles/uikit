import { Container } from '@pmndrs/uikit';
import { borderRadius, colors, componentDefaults } from '../theme.js';
export class TabsList extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: borderRadius.md,
                backgroundColor: colors.muted,
                padding: 4,
                flexShrink: 0,
                color: colors.mutedForeground,
                ...config?.defaultOverrides,
            },
        });
    }
}
