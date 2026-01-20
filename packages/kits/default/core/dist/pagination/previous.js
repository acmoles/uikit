import { Text } from '@pmndrs/uikit';
import { ChevronLeft } from '@pmndrs/uikit-lucide';
import { PaginationLink } from './link.js';
import { colors, contentDefaults, textDefaults } from '../theme.js';
export class PaginationPrevious extends PaginationLink {
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
                paddingLeft: 10,
                ...config?.defaultOverrides,
            },
        });
        const chevronIcon = new ChevronLeft(undefined, undefined, {
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
        const textElement = new Text(undefined, undefined, {
            defaults: textDefaults,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                text: 'Previous',
            },
        });
        this.label = textElement;
        super.add(this.label);
    }
    dispose() {
        this.icon.dispose();
        this.label.dispose();
        super.dispose();
    }
    add() {
        throw new Error('PaginationPrevious does not support adding children. The component has predefined content.');
    }
}
