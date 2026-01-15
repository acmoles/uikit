import { searchFor, Container } from '@pmndrs/uikit';
import { borderRadius, colors, componentDefaults } from '../theme.js';
import { AlertDialog } from './index.js';
export class AlertDialogCancel extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                borderRadius: borderRadius.md,
                height: 40,
                paddingX: 16,
                paddingY: 8,
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: colors.input,
                backgroundColor: colors.background,
                onClick: (e) => {
                    e.stopPropagation();
                    this.closeDialog();
                },
                hover: {
                    backgroundColor: colors.accent,
                },
                fontSize: 14,
                lineHeight: '20px',
                fontWeight: 'medium',
                wordBreak: 'keep-all',
                ...config?.defaultOverrides,
            },
        });
    }
    closeDialog() {
        const dialog = searchFor(this, AlertDialog, 5);
        if (dialog == null) {
            throw new Error(`AlertDialogAction must be a decendant of AlertDialog (max 5 steps deep)`);
        }
        dialog.setOpen(false);
    }
}
