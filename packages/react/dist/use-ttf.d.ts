import { TTFInput, MSDFResult } from '@pmndrs/uikit';
export { TTFLoader, type TTFInput, type TTFInputItem, type TTFLoaderOptions, type MSDFResult } from '@pmndrs/uikit';
export declare function useTTF(input: TTFInput): MSDFResult;
export declare namespace useTTF {
    var preload: (input: TTFInput) => void;
    var clear: (input: TTFInput) => void;
}
