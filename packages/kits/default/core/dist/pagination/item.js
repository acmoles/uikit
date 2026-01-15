import { Container } from '@pmndrs/uikit';
import { componentDefaults } from '../theme.js';
export class PaginationItem extends Container {
    constructor(inputProperties, initialClasses, config) {
        super(inputProperties, initialClasses, { defaults: componentDefaults, ...config });
    }
}
