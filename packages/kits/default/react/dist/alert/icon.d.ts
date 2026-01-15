import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { AlertIcon as VanillaAlertIcon, AlertIconProperties as VanillaAlertIconProperties } from '@pmndrs/uikit-default';
export { AlertIcon as VanillaAlertIcon } from '@pmndrs/uikit-default';
export type AlertIconProperties = VanillaAlertIconProperties & {
    children?: ReactNode;
};
export declare const AlertIcon: ForwardRefExoticComponent<PropsWithoutRef<AlertIconProperties> & RefAttributes<VanillaAlertIcon>>;
