import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import { Label as VanillaLabel, LabelProperties as VanillaLabelProperties } from '@pmndrs/uikit-default';
export { Label as VanillaLabel } from '@pmndrs/uikit-default';
export type LabelProperties = VanillaLabelProperties & {
    children?: ReactNode;
};
export declare const Label: ForwardRefExoticComponent<PropsWithoutRef<LabelProperties> & RefAttributes<VanillaLabel>>;
