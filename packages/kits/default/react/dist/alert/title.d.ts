import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { AlertTitle as VanillaAlertTitle, AlertTitleProperties as VanillaAlertTitleProperties } from '@pmndrs/uikit-default';
export { AlertTitle as VanillaAlertTitle } from '@pmndrs/uikit-default';
export type AlertTitleProperties = VanillaAlertTitleProperties & {
    children?: ReactNode;
};
export declare const AlertTitle: ForwardRefExoticComponent<PropsWithoutRef<AlertTitleProperties> & RefAttributes<VanillaAlertTitle>>;
