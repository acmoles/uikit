import { reversePainterSortStable } from '@pmndrs/uikit';
import { effect } from '@preact/signals-core';
import { extend, useFrame, useThree, applyProps } from '@react-three/fiber';
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { jsx } from 'react/jsx-runtime';
export function build(Component, name = Component.name) {
    extend({ [`Vanilla${name}`]: Component });
    return forwardRef(({ children, ...props }, forwardRef) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const ref = useRef(null);
        useImperativeHandle(forwardRef, () => ref.current, []);
        const renderContext = useRenderContext();
        const args = useMemo(() => [undefined, undefined, { renderContext }], [renderContext]);
        const outProps = useSetup(ref, props, args);
        return jsx(`vanilla${name}`, { ref, children, ...outProps });
    });
}
export function useRenderContext() {
    const invalidate = useThree((s) => s.invalidate);
    return useMemo(() => ({ requestFrame: invalidate }), [invalidate]);
}
/**
 * @returns the props that should be applied to the component
 */
export function useSetup(ref, inProps, args) {
    useFrame((_, delta) => {
        ref.current?.update(delta * 1000);
    });
    const renderer = useThree((s) => s.gl);
    useEffect(() => {
        renderer.localClippingEnabled = true;
        renderer.setTransparentSort(reversePainterSortStable);
    }, [renderer]);
    useEffect(() => {
        ref.current?.resetProperties(inProps);
    });
    useEffect(() => {
        const classList = inProps.classList;
        const component = ref.current;
        if (!Array.isArray(classList) || component == null) {
            component?.classList.set();
            return;
        }
        component.classList.set(...classList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(inProps.classList)]);
    const outPropsRef = useRef({ args });
    useEffect(() => {
        const container = ref.current;
        if (container == null) {
            return undefined;
        }
        const unsubscribe = effect(() => {
            const { value: handlers } = container.handlers;
            const eventCount = Object.keys(handlers).length;
            if (eventCount === 0) {
                outPropsRef.current = { args };
            }
            else {
                outPropsRef.current = { args, ...handlers };
            }
            if (container.__r3f != null) {
                container.__r3f.props = outPropsRef.current;
                applyProps(container, outPropsRef.current);
            }
        });
        return () => {
            unsubscribe();
            outPropsRef.current = { args };
            if (container.__r3f != null) {
                container.__r3f.props = outPropsRef.current;
            }
            applyProps(container, outPropsRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [args]);
    return outPropsRef.current;
}
