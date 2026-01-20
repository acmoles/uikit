import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { Alert as VanillaAlert, AlertProperties as VanillaAlertProperties } from '@pmndrs/uikit-default';
export { Alert as VanillaAlert } from '@pmndrs/uikit-default';
export type AlertProperties = VanillaAlertProperties & {
    children?: ReactNode;
};
export declare const Alert: ForwardRefExoticComponent<PropsWithoutRef<AlertProperties> & RefAttributes<VanillaAlert>>;
export * from "./description.js";
export * from "./icon.js";
export * from "./title.js";
