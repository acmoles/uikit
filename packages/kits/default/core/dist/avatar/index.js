import { Image, imageDefaults } from '@pmndrs/uikit';
import { colors } from '../theme.js';
export class Avatar extends Image {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: imageDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                width: 40,
                height: 40,
                flexShrink: 0,
                aspectRatio: 1,
                objectFit: 'cover',
                borderRadius: 20,
                ...config?.defaultOverrides,
            },
        });
    }
}
