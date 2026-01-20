import { Text } from '@pmndrs/uikit';
import { ChevronRight } from '@pmndrs/uikit-lucide';
import { PaginationLink } from './link.js';
import { colors, contentDefaults, textDefaults } from '../theme.js';
export class PaginationNext extends PaginationLink {
    label;
    icon;
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                size: 'default',
                flexDirection: 'row',
                gap: 4,
                paddingRight: 10,
                ...config?.defaultOverrides,
            },
        });
        const textElement = new Text(undefined, undefined, {
            defaults: textDefaults,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                text: 'Next',
            },
        });
        this.label = textElement;
        super.add(this.label);
        const chevronIcon = new ChevronRight(undefined, undefined, {
            defaults: contentDefaults,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                width: 16,
                height: 16,
            },
        });
        this.icon = chevronIcon;
        super.add(this.icon);
    }
    dispose() {
        this.icon.dispose();
        this.label.dispose();
        super.dispose();
    }
    add() {
        throw new Error('PaginationNext does not support adding children. The component has predefined content.');
    }
}
