import { ReactNode } from 'react';
import { ContainerProperties, VanillaContainer, VanillaSvg, SvgProperties } from './index.js';
import { FontFamilies } from '@pmndrs/uikit';
import { Signal } from '@preact/signals-core';
/**
 * @deprecated Root is not necassary anymore, can be removed or replaced with a Container
 */
export declare const Root: import("react").ForwardRefExoticComponent<import("@pmndrs/uikit").GetAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").BaseOutProperties>>>, import("@pmndrs/uikit").AllAliases> & import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").BaseOutProperties>>> & {
    hover?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").BaseOutProperties>>>> | undefined;
} & {
    sm?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").BaseOutProperties>>>> | undefined;
    md?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").BaseOutProperties>>>> | undefined;
    lg?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").BaseOutProperties>>>> | undefined;
    xl?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").BaseOutProperties>>>> | undefined;
    '2xl'?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").BaseOutProperties>>>> | undefined;
} & {
    dark?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").BaseOutProperties>>>> | undefined;
} & {
    active?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").BaseOutProperties>>>> | undefined;
} & {
    focus?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").BaseOutProperties>>>> | undefined;
} & {
    important?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").BaseOutProperties>>>> | undefined;
} & {
    placeholderStyle?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").BaseOutProperties>>>> | undefined;
} & {
    '*'?: import("@pmndrs/uikit").WithConditionalsAndImportant<import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").BaseOutProperties>>>>> | undefined;
} & {
    children?: ReactNode;
} & import("./index.js").ClassListProperties & import("react").RefAttributes<VanillaContainer<import("@pmndrs/uikit").BaseOutProperties>>>;
/**
 * @deprecated use <Container display="contents" {...{ '*': defaultProps }}> instead or put "*" directly on an existing component
 */
export declare function DefaultProperties({ children, ...props }: ContainerProperties['*'] & {
    children?: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
/**
 * @deprecated use <Container display="contents" fontFamilies={...}> instead or put fontFamilies directly on an existing component
 */
export declare function FontFamilyProvider({ children, fontFamilies }: {
    fontFamilies?: FontFamilies;
    children?: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
/**
 * @deprecated Icon has be replaced with Svg, change the `text: ...` property to `content: ...`
 */
export declare const Icon: import("react").ForwardRefExoticComponent<Omit<SvgProperties, "src" | "content"> & {
    text?: string | Signal<string>;
} & import("react").RefAttributes<VanillaSvg<import("@pmndrs/uikit").SvgOutProperties>>>;
