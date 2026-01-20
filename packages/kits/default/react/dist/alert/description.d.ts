import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { AlertDescription as VanillaAlertDescription, AlertDescriptionProperties as VanillaAlertDescriptionProperties } from '@pmndrs/uikit-default';
export { AlertDescription as VanillaAlertDescription } from '@pmndrs/uikit-default';
export type AlertDescriptionProperties = VanillaAlertDescriptionProperties & {
    children?: ReactNode;
};
export declare const AlertDescription: ForwardRefExoticComponent<PropsWithoutRef<AlertDescriptionProperties> & RefAttributes<VanillaAlertDescription>>;
