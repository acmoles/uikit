export { basedOnPreferredColorScheme, setPreferredColorScheme, getPreferredColorScheme, withOpacity, isDarkMode, canvasInputProps, } from '@pmndrs/uikit';
declare module '@react-three/fiber' {
    interface ThreeElements {
        vanillaFullscreen: ThreeElement<typeof VanillaFullscreen>;
    }
}
import { ReactNode } from 'react';
import { Container as VanillaContainer, ContainerProperties as VanillaContainerProperties, Content as VanillaContent, ContentProperties as VanillaContentProperties, Custom as VanillaCustom, CustomProperties as VanillaCustomProperties, Fullscreen as VanillaFullscreen, FullscreenProperties as VanillaFullscreenProperties, Image as VanillaImage, ImageProperties as VanillaImageProperties, Video as VanillaVideo, VideoProperties as VanillaVideoProperties, Input as VanillaInput, InputProperties as VanillaInputProperties, Svg as VanillaSvg, SvgProperties as VanillaSvgProperties, Text as VanillaText, Textarea as VanillaTextarea, TextareaProperties as VanillaTextareaProperties, InProperties, TextOutProperties } from '@pmndrs/uikit';
import { ThreeElement } from '@react-three/fiber';
export type ClassListProperties = {
    classList?: Array<string | InProperties>;
};
export type ContainerProperties = VanillaContainerProperties & {
    children?: ReactNode;
} & ClassListProperties;
export type ContentProperties = VanillaContentProperties & {
    children?: ReactNode;
} & ClassListProperties;
export type CustomProperties = VanillaCustomProperties & {
    children?: ReactNode;
} & ClassListProperties;
export type ImageProperties = VanillaImageProperties & ClassListProperties;
export type VideoProperties = VanillaVideoProperties & ClassListProperties;
export type InputProperties = VanillaInputProperties & ClassListProperties;
export type SvgProperties = VanillaSvgProperties & ClassListProperties;
export type TextareaProperties = VanillaTextareaProperties & ClassListProperties;
export type TextProperties = InProperties<Omit<TextOutProperties, 'text'>> & {
    children?: unknown;
} & ClassListProperties;
export type FullscreenProperties = VanillaFullscreenProperties & {
    children?: ReactNode;
    attachCamera?: boolean;
} & ClassListProperties;
export { readReactive, type FontFamilies, type BaseOutProperties, Component as VanillaComponent, Container as VanillaContainer, type ContainerProperties as VanillaContainerProperties, Content as VanillaContent, type ContentProperties as VanillaContentProperties, Custom as VanillaCustom, type CustomProperties as VanillaCustomProperties, Fullscreen as VanillaFullscreen, type FullscreenProperties as VanillaFullscreenProperties, Image as VanillaImage, type ImageProperties as VanillaImageProperties, Video as VanillaVideo, type VideoProperties as VanillaVideoProperties, Input as VanillaInput, type InputProperties as VanillaInputProperties, Svg as VanillaSvg, type SvgProperties as VanillaSvgProperties, Text as VanillaText, type TextProperties as VanillaTextProperties, Textarea as VanillaTextarea, type TextareaProperties as VanillaTextareaProperties, } from '@pmndrs/uikit';
export declare const Container: import("react").ForwardRefExoticComponent<import("@pmndrs/uikit").GetAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").BaseOutProperties>>>, import("@pmndrs/uikit").AllAliases> & import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").BaseOutProperties>>> & {
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
} & ClassListProperties & import("react").RefAttributes<VanillaContainer<import("@pmndrs/uikit").BaseOutProperties>>>;
export declare const Content: import("react").ForwardRefExoticComponent<import("@pmndrs/uikit").GetAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ContentOutProperties>>>, import("@pmndrs/uikit").AllAliases> & import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ContentOutProperties>>> & {
    hover?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ContentOutProperties>>>> | undefined;
} & {
    sm?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ContentOutProperties>>>> | undefined;
    md?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ContentOutProperties>>>> | undefined;
    lg?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ContentOutProperties>>>> | undefined;
    xl?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ContentOutProperties>>>> | undefined;
    '2xl'?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ContentOutProperties>>>> | undefined;
} & {
    dark?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ContentOutProperties>>>> | undefined;
} & {
    active?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ContentOutProperties>>>> | undefined;
} & {
    focus?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ContentOutProperties>>>> | undefined;
} & {
    important?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ContentOutProperties>>>> | undefined;
} & {
    placeholderStyle?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ContentOutProperties>>>> | undefined;
} & {
    '*'?: import("@pmndrs/uikit").WithConditionalsAndImportant<import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ContentOutProperties>>>>> | undefined;
} & {
    children?: ReactNode;
} & ClassListProperties & import("react").RefAttributes<VanillaContent<import("@pmndrs/uikit").ContentOutProperties>>>;
export declare const Custom: import("react").ForwardRefExoticComponent<import("@pmndrs/uikit").GetAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").BaseOutProperties>>>, import("@pmndrs/uikit").AllAliases> & import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").BaseOutProperties>>> & {
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
} & ClassListProperties & import("react").RefAttributes<VanillaCustom<import("@pmndrs/uikit").BaseOutProperties>>>;
export declare const Image: import("react").ForwardRefExoticComponent<import("@pmndrs/uikit").GetAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ImageOutProperties<string | import("three").Texture>>>>, import("@pmndrs/uikit").AllAliases> & import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ImageOutProperties<string | import("three").Texture>>>> & {
    hover?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ImageOutProperties<string | import("three").Texture>>>>> | undefined;
} & {
    sm?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ImageOutProperties<string | import("three").Texture>>>>> | undefined;
    md?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ImageOutProperties<string | import("three").Texture>>>>> | undefined;
    lg?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ImageOutProperties<string | import("three").Texture>>>>> | undefined;
    xl?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ImageOutProperties<string | import("three").Texture>>>>> | undefined;
    '2xl'?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ImageOutProperties<string | import("three").Texture>>>>> | undefined;
} & {
    dark?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ImageOutProperties<string | import("three").Texture>>>>> | undefined;
} & {
    active?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ImageOutProperties<string | import("three").Texture>>>>> | undefined;
} & {
    focus?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ImageOutProperties<string | import("three").Texture>>>>> | undefined;
} & {
    important?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ImageOutProperties<string | import("three").Texture>>>>> | undefined;
} & {
    placeholderStyle?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ImageOutProperties<string | import("three").Texture>>>>> | undefined;
} & {
    '*'?: import("@pmndrs/uikit").WithConditionalsAndImportant<import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").ImageOutProperties<string | import("three").Texture>>>>>> | undefined;
} & ClassListProperties & import("react").RefAttributes<VanillaImage<import("@pmndrs/uikit").ImageOutProperties<string | import("three").Texture>>>>;
export declare const Video: import("react").ForwardRefExoticComponent<import("@pmndrs/uikit").GetAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").VideoOutProperties>>>, import("@pmndrs/uikit").AllAliases> & import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").VideoOutProperties>>> & {
    hover?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").VideoOutProperties>>>> | undefined;
} & {
    sm?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").VideoOutProperties>>>> | undefined;
    md?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").VideoOutProperties>>>> | undefined;
    lg?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").VideoOutProperties>>>> | undefined;
    xl?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").VideoOutProperties>>>> | undefined;
    '2xl'?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").VideoOutProperties>>>> | undefined;
} & {
    dark?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").VideoOutProperties>>>> | undefined;
} & {
    active?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").VideoOutProperties>>>> | undefined;
} & {
    focus?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").VideoOutProperties>>>> | undefined;
} & {
    important?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").VideoOutProperties>>>> | undefined;
} & {
    placeholderStyle?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").VideoOutProperties>>>> | undefined;
} & {
    '*'?: import("@pmndrs/uikit").WithConditionalsAndImportant<import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").VideoOutProperties>>>>> | undefined;
} & ClassListProperties & import("react").RefAttributes<VanillaVideo<import("@pmndrs/uikit").VideoOutProperties>>>;
export declare const Input: import("react").ForwardRefExoticComponent<VanillaInputProperties & ClassListProperties & import("react").RefAttributes<VanillaInput<import("@pmndrs/uikit").InputOutProperties>>>;
export declare const Svg: import("react").ForwardRefExoticComponent<import("@pmndrs/uikit").GetAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").SvgOutProperties>>>, import("@pmndrs/uikit").AllAliases> & import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").SvgOutProperties>>> & {
    hover?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").SvgOutProperties>>>> | undefined;
} & {
    sm?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").SvgOutProperties>>>> | undefined;
    md?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").SvgOutProperties>>>> | undefined;
    lg?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").SvgOutProperties>>>> | undefined;
    xl?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").SvgOutProperties>>>> | undefined;
    '2xl'?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").SvgOutProperties>>>> | undefined;
} & {
    dark?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").SvgOutProperties>>>> | undefined;
} & {
    active?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").SvgOutProperties>>>> | undefined;
} & {
    focus?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").SvgOutProperties>>>> | undefined;
} & {
    important?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").SvgOutProperties>>>> | undefined;
} & {
    placeholderStyle?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").SvgOutProperties>>>> | undefined;
} & {
    '*'?: import("@pmndrs/uikit").WithConditionalsAndImportant<import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").SvgOutProperties>>>>> | undefined;
} & ClassListProperties & import("react").RefAttributes<VanillaSvg<import("@pmndrs/uikit").SvgOutProperties>>>;
export declare const Textarea: import("react").ForwardRefExoticComponent<import("@pmndrs/uikit").GetAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").InputOutProperties>>>, import("@pmndrs/uikit").AllAliases> & import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").InputOutProperties>>> & {
    hover?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").InputOutProperties>>>> | undefined;
} & {
    sm?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").InputOutProperties>>>> | undefined;
    md?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").InputOutProperties>>>> | undefined;
    lg?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").InputOutProperties>>>> | undefined;
    xl?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").InputOutProperties>>>> | undefined;
    '2xl'?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").InputOutProperties>>>> | undefined;
} & {
    dark?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").InputOutProperties>>>> | undefined;
} & {
    active?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").InputOutProperties>>>> | undefined;
} & {
    focus?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").InputOutProperties>>>> | undefined;
} & {
    important?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").InputOutProperties>>>> | undefined;
} & {
    placeholderStyle?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").InputOutProperties>>>> | undefined;
} & {
    '*'?: import("@pmndrs/uikit").WithConditionalsAndImportant<import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").InputOutProperties>>>>> | undefined;
} & ClassListProperties & import("react").RefAttributes<VanillaTextarea<import("@pmndrs/uikit").InputOutProperties>>>;
export declare const Fullscreen: import("react").ForwardRefExoticComponent<import("@pmndrs/uikit").GetAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").FullscreenOutProperties>>>, import("@pmndrs/uikit").AllAliases> & import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").FullscreenOutProperties>>> & {
    hover?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").FullscreenOutProperties>>>> | undefined;
} & {
    sm?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").FullscreenOutProperties>>>> | undefined;
    md?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").FullscreenOutProperties>>>> | undefined;
    lg?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").FullscreenOutProperties>>>> | undefined;
    xl?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").FullscreenOutProperties>>>> | undefined;
    '2xl'?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").FullscreenOutProperties>>>> | undefined;
} & {
    dark?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").FullscreenOutProperties>>>> | undefined;
} & {
    active?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").FullscreenOutProperties>>>> | undefined;
} & {
    focus?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").FullscreenOutProperties>>>> | undefined;
} & {
    important?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").FullscreenOutProperties>>>> | undefined;
} & {
    placeholderStyle?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").FullscreenOutProperties>>>> | undefined;
} & {
    '*'?: import("@pmndrs/uikit").WithConditionalsAndImportant<import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<import("@pmndrs/uikit").FullscreenOutProperties>>>>> | undefined;
} & {
    children?: ReactNode;
    attachCamera?: boolean;
} & ClassListProperties & import("react").RefAttributes<VanillaFullscreen<import("@pmndrs/uikit").FullscreenOutProperties>>>;
export declare const Text: import("react").ForwardRefExoticComponent<import("@pmndrs/uikit").GetAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<Omit<TextOutProperties, "text">>>>, import("@pmndrs/uikit").AllAliases> & import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<Omit<TextOutProperties, "text">>>> & {
    hover?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<Omit<TextOutProperties, "text">>>>> | undefined;
} & {
    sm?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<Omit<TextOutProperties, "text">>>>> | undefined;
    md?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<Omit<TextOutProperties, "text">>>>> | undefined;
    lg?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<Omit<TextOutProperties, "text">>>>> | undefined;
    xl?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<Omit<TextOutProperties, "text">>>>> | undefined;
    '2xl'?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<Omit<TextOutProperties, "text">>>>> | undefined;
} & {
    dark?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<Omit<TextOutProperties, "text">>>>> | undefined;
} & {
    active?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<Omit<TextOutProperties, "text">>>>> | undefined;
} & {
    focus?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<Omit<TextOutProperties, "text">>>>> | undefined;
} & {
    important?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<Omit<TextOutProperties, "text">>>>> | undefined;
} & {
    placeholderStyle?: import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<Omit<TextOutProperties, "text">>>>> | undefined;
} & {
    '*'?: import("@pmndrs/uikit").WithConditionalsAndImportant<import("@pmndrs/uikit").AddAllAliases<import("@pmndrs/uikit").WithSignal<import("@pmndrs/uikit").WithInitial<Partial<Omit<TextOutProperties, "text">>>>>> | undefined;
} & {
    children?: unknown;
} & ClassListProperties & import("react").RefAttributes<VanillaText<TextOutProperties>>>;
export * from './portal.js';
export * from './build.js';
export * from './suspending.js';
export * from './deprecated.js';
export * from './use-ttf.js';
