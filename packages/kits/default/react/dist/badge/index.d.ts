import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { Badge as VanillaBadge, BadgeProperties as VanillaBadgeProperties } from '@pmndrs/uikit-default';
export { Badge as VanillaBadge } from '@pmndrs/uikit-default';
export type BadgeProperties = VanillaBadgeProperties & {
    children?: ReactNode;
};
export declare const Badge: ForwardRefExoticComponent<PropsWithoutRef<BadgeProperties> & RefAttributes<VanillaBadge>>;
