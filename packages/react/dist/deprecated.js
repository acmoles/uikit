import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Container, Svg } from './index.js';
/**
 * @deprecated Root is not necassary anymore, can be removed or replaced with a Container
 */
export const Root = forwardRef((props, ref) => {
    return _jsx(Container, { ref: ref, ...props });
});
/**
 * @deprecated use <Container display="contents" {...{ '*': defaultProps }}> instead or put "*" directly on an existing component
 */
export function DefaultProperties({ children, ...props }) {
    return (_jsx(Container, { display: "contents", '*': props, children: children }));
}
/**
 * @deprecated use <Container display="contents" fontFamilies={...}> instead or put fontFamilies directly on an existing component
 */
export function FontFamilyProvider({ children, fontFamilies }) {
    return (_jsx(Container, { display: "contents", fontFamilies: fontFamilies, children: children }));
}
/**
 * @deprecated Icon has be replaced with Svg, change the `text: ...` property to `content: ...`
 */
export const Icon = forwardRef(({ text, ...props }, ref) => {
    return _jsx(Svg, { ref: ref, ...props, content: text });
});
