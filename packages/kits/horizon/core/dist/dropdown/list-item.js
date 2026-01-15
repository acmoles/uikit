import { Container } from '@pmndrs/uikit';
import { Dropdown } from './index.js';
export class DropdownListItem extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            ...config,
            defaultOverrides: {
                paddingY: 8,
                paddingX: 16,
                onClick: (event) => {
                    const dropdown = this.parentContainer.value?.parentContainer.value;
                    if (!(dropdown instanceof Dropdown)) {
                        return;
                    }
                    const value = this.properties.peek().value;
                    dropdown.uncontrolledSignal.value = value;
                    dropdown.properties.peek().onValueChange?.(value);
                },
                ...config?.defaultOverrides,
            },
        });
    }
}
