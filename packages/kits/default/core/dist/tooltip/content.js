import { Container, searchFor } from '@pmndrs/uikit';
import { borderRadius, colors, componentDefaults } from '../theme.js';
import { computed } from '@preact/signals-core';
import { Tooltip } from './index.js';
export class TooltipContent extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            defaults: componentDefaults,
            ...config,
            defaultOverrides: {
                '*': {
                    borderColor: colors.border,
                },
                positionType: 'absolute',
                positionBottom: '100%',
                marginBottom: computed(() => Number(this.properties.value.sideOffset ?? 4)),
                zIndex: 50,
                overflow: 'hidden',
                borderRadius: borderRadius.md,
                borderWidth: 1,
                backgroundColor: colors.popover,
                paddingX: 12,
                paddingY: 6,
                wordBreak: 'keep-all',
                fontSize: 14,
                lineHeight: '20px',
                color: colors.popoverForeground,
                display: computed(() => (searchFor(this, Tooltip, 2)?.open.value ? 'flex' : 'none')),
                ...config?.defaultOverrides,
            },
        });
    }
}
