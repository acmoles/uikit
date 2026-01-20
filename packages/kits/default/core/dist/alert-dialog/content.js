import { Container } from '@pmndrs/uikit';
import { borderRadius, colors, componentDefaults } from '../theme.js';
export class AlertDialogContent extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                onClick: (e) => {
                    e.stopPropagation?.();
                },
                positionType: 'relative',
                flexDirection: 'column',
                maxWidth: 512,
                width: '100%',
                gap: 16,
                borderWidth: 1,
                backgroundColor: colors.background,
                padding: 24,
                sm: { borderRadius: borderRadius.lg },
                ...config?.defaultOverrides,
            },
        });
    }
}
