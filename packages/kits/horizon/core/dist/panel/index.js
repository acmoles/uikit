import { Container } from '@pmndrs/uikit';
import { panelMaterialClass } from '../background-material.js';
export class Panel extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, {
            ...config,
            defaultOverrides: {
                borderRadius: 24,
                backgroundColor: 'black',
                borderColor: 'black',
                panelMaterialClass,
                ...config?.defaultOverrides,
            },
        });
    }
}
