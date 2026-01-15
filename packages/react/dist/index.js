import { jsx as _jsx } from "react/jsx-runtime";
export { basedOnPreferredColorScheme, setPreferredColorScheme, getPreferredColorScheme, withOpacity, isDarkMode, canvasInputProps, } from '@pmndrs/uikit';
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { build, useRenderContext, useSetup } from './build.js';
import { Container as VanillaContainer, Content as VanillaContent, Custom as VanillaCustom, Fullscreen as VanillaFullscreen, Image as VanillaImage, Video as VanillaVideo, Input as VanillaInput, Svg as VanillaSvg, Text as VanillaText, Textarea as VanillaTextarea, } from '@pmndrs/uikit';
import { createPortal, extend, useFrame, useStore, useThree } from '@react-three/fiber';
import { Object3D } from 'three';
import { jsx } from 'react/jsx-runtime';
export { readReactive, Component as VanillaComponent, Container as VanillaContainer, Content as VanillaContent, Custom as VanillaCustom, Fullscreen as VanillaFullscreen, Image as VanillaImage, Video as VanillaVideo, Input as VanillaInput, Svg as VanillaSvg, Text as VanillaText, Textarea as VanillaTextarea, } from '@pmndrs/uikit';
export const Container = build(VanillaContainer);
export const Content = build(VanillaContent);
export const Custom = build(VanillaCustom);
export const Image = build(VanillaImage);
export const Video = build(VanillaVideo);
export const Input = build(VanillaInput);
export const Svg = build(VanillaSvg);
export const Textarea = build(VanillaTextarea);
extend({ VanillaFullscreen });
export const Fullscreen = forwardRef(({ children, attachCamera, ...props }, forwardRef) => {
    const hasAttached = useRef(false);
    useFrame(({ camera, scene }) => {
        //attach camera to something so we can see the camera
        if (camera.parent == null && (attachCamera ?? true)) {
            scene.add(camera);
            hasAttached.current = true;
        }
    });
    const store = useStore();
    //cleanup attaching the camera
    useEffect(() => () => {
        if (!hasAttached.current) {
            return;
        }
        hasAttached.current = false;
        const { camera, scene } = store.getState();
        if (camera.parent != scene) {
            return;
        }
        scene.remove(camera);
    }, [store]);
    const camera = useThree((s) => s.camera);
    const fullscreenWrapper = useMemo(() => new Object3D(), []);
    fullscreenWrapper.parent?.remove(fullscreenWrapper);
    camera.add(fullscreenWrapper);
    const renderer = useThree((s) => s.gl);
    const ref = useRef(null);
    useImperativeHandle(forwardRef, () => ref.current, []);
    const renderContext = useRenderContext();
    const args = useMemo(() => [renderer, undefined, undefined, { renderContext }], [renderer, renderContext]);
    const outProps = useSetup(ref, props, args);
    return createPortal(_jsx("vanillaFullscreen", { ...outProps, ref: ref, children: children }), fullscreenWrapper);
});
extend({ VanillaText });
export const Text = forwardRef(({ children, ...props }, forwardRef) => {
    const ref = useRef(null);
    useImperativeHandle(forwardRef, () => ref.current, []);
    const renderContext = useRenderContext();
    const args = useMemo(() => [undefined, undefined, { renderContext }], [renderContext]);
    const outProps = useSetup(ref, { ...props, text: children }, args);
    return jsx(`vanillaText`, { ...outProps, ref });
});
export * from './portal.js';
export * from './build.js';
export * from './suspending.js';
export * from './deprecated.js';
export * from './use-ttf.js';
