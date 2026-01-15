import { Container } from '@pmndrs/uikit';
import { Ellipsis } from '@pmndrs/uikit-lucide';
import { colors, componentDefaults, contentDefaults } from '../theme.js';
export class PaginationEllipsis extends Container {
    icon;
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                flexDirection: 'row',
                height: 36,
                width: 36,
                alignItems: 'center',
                justifyContent: 'center',
                ...config?.defaultOverrides,
            },
        });
        super.add((this.icon = new Ellipsis(undefined, undefined, {
            defaults: contentDefaults,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                width: 16,
                height: 16,
            },
        })));
    }
    dispose() {
        this.icon.dispose();
        super.dispose();
    }
    add(...object) {
        throw new Error(`the ellipsis component can not have any children`);
    }
}
