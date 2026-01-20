import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { Textarea as VanillaTextarea, TextareaProperties as VanillaTextareaProperties } from '@pmndrs/uikit-default';
export { Textarea as VanillaTextarea } from '@pmndrs/uikit-default';
export type TextareaProperties = VanillaTextareaProperties;
export declare const Textarea: ForwardRefExoticComponent<PropsWithoutRef<TextareaProperties> & RefAttributes<VanillaTextarea>>;
