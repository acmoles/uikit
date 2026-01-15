import { Container } from '@pmndrs/uikit';
import { colors, componentDefaults } from '../theme.js';
export class DialogTrigger extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                onClick: () => {
                    this.properties.peek().dialog?.setOpen(true);
                },
                cursor: 'pointer',
                ...config?.defaultOverrides,
            },
        });
    }
}
