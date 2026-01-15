import { suspend, preload, clear } from 'suspend-react';
import { TTFLoader } from '@pmndrs/uikit';
export { TTFLoader } from '@pmndrs/uikit';
const ttfLoaderSymbol = Symbol('ttf-loader');
function getCacheKey(input) {
    return [ttfLoaderSymbol, input];
}
function loadingFn(input) {
    return () => new TTFLoader().loadAsync(input);
}
export function useTTF(input) {
    return suspend(loadingFn(input), getCacheKey(input));
}
useTTF.preload = (input) => {
    preload(loadingFn(input), getCacheKey(input));
};
useTTF.clear = (input) => {
    clear(getCacheKey(input));
};
