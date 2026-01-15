import { Component, RenderContext } from '@pmndrs/uikit';
import { Instance } from '@react-three/fiber';
declare module 'three' {
    interface Object3D {
        __r3f?: Instance;
    }
}
export declare function build<T extends Component, P>(Component: {
    new (): T;
}, name?: string): import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<P> & import("react").RefAttributes<T>>;
export declare function useRenderContext(): RenderContext;
/**
 * @returns the props that should be applied to the component
 */
export declare function useSetup(ref: {
    current: Component | null;
}, inProps: any, args: Array<any>): any;
