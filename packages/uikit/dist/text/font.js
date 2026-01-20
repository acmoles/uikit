import { computed, effect, signal } from '@preact/signals-core';
import { loadCachedFont } from './cache.js';
import { inter } from '@pmndrs/msdfonts';
const fontWeightNames = {
    thin: 100,
    'extra-light': 200,
    light: 300,
    normal: 400,
    medium: 500,
    'semi-bold': 600,
    bold: 700,
    'extra-bold': 800,
    black: 900,
    'extra-black': 950,
};
const defaultFontFamiles = {
    inter,
};
export function computedFontFamilies(properties, parent) {
    return computed(() => {
        const currentFontFamilies = properties.value.fontFamilies;
        const inheritedFontFamilies = parent.value?.fontFamilies.value;
        if (inheritedFontFamilies == null) {
            return currentFontFamilies;
        }
        if (currentFontFamilies == null) {
            return inheritedFontFamilies;
        }
        return {
            ...inheritedFontFamilies,
            ...currentFontFamilies,
        };
    });
}
export function computedFont(properties, fontFamiliesSignal) {
    const result = signal(undefined);
    effect(() => {
        let fontWeight = properties.value.fontWeight;
        if (typeof fontWeight === 'string') {
            fontWeight = parseFloat(fontWeight);
            if (isNaN(fontWeight)) {
                fontWeight = properties.value.fontWeight;
                if (!(fontWeight in fontWeightNames)) {
                    throw new Error(`unknown font weight "${fontWeight}"`);
                }
                fontWeight = fontWeightNames[fontWeight];
            }
        }
        let fontFamily = properties.value.fontFamily;
        const fontFamilies = fontFamiliesSignal.value ?? defaultFontFamiles;
        fontFamily ??= Object.keys(fontFamilies)[0];
        let fontFamilyWeightMap = fontFamilies[fontFamily];
        if (fontFamilyWeightMap == null) {
            const availableFontFamilyList = Object.keys(fontFamilies);
            fontFamilyWeightMap = fontFamilies[availableFontFamilyList[0]];
            console.error(`unknown font family "${fontFamily}". Available font families are ${availableFontFamilyList.map((name) => `"${name}"`).join(', ')}. Falling back to "${availableFontFamilyList[0]}".`);
        }
        const url = getMatchingFontUrl(fontFamilyWeightMap, fontWeight);
        let aborted = false;
        loadCachedFont(url, (font) => !aborted && (result.value = font));
        return () => (aborted = true);
    });
    return result;
}
function getMatchingFontUrl(fontFamily, weight) {
    let distance = Infinity;
    let result;
    for (const fontWeight in fontFamily) {
        const d = Math.abs(weight - getWeightNumber(fontWeight));
        if (d === 0) {
            return fontFamily[fontWeight];
        }
        if (d < distance) {
            distance = d;
            result = fontFamily[fontWeight];
        }
    }
    if (result == null) {
        throw new Error(`font family has no entries ${fontFamily}`);
    }
    return result;
}
function getWeightNumber(value) {
    if (value in fontWeightNames) {
        return fontWeightNames[value];
    }
    const number = parseFloat(value);
    if (isNaN(number)) {
        throw new Error(`invalid font weight "${value}"`);
    }
    return number;
}
const MISSING_GLYPH = {
    id: -1,
    index: 0,
    char: '',
    chnl: 0,
    page: 0,
    x: 0,
    y: 0,
    width: 0.5,
    height: 0.5,
    xadvance: 0.6,
    xoffset: 0,
    yoffset: 0.3,
    uvX: 0,
    uvY: 0,
    uvWidth: 0,
    uvHeight: 0,
    renderSolid: true,
};
export class Font {
    page;
    glyphInfoMap = new Map();
    kerningMap = new Map();
    //needed in the shader:
    pageWidth;
    pageHeight;
    distanceRange;
    constructor(info, page) {
        this.page = page;
        const { scaleW, scaleH, lineHeight } = info.common;
        const { size } = info.info;
        this.pageWidth = scaleW;
        this.pageHeight = scaleH;
        this.distanceRange = info.distanceField.distanceRange;
        for (const glyph of info.chars) {
            const normalizedGlyph = {
                ...glyph,
                uvX: glyph.x / scaleW,
                uvY: glyph.y / scaleH,
                uvWidth: glyph.width / scaleW,
                uvHeight: glyph.height / scaleH,
                width: glyph.width / size,
                height: glyph.height / size,
                xadvance: glyph.xadvance / size,
                xoffset: glyph.xoffset / size,
                yoffset: (glyph.yoffset - (lineHeight - size)) / size,
            };
            this.glyphInfoMap.set(normalizedGlyph.char, normalizedGlyph);
        }
        for (const { first, second, amount } of info.kernings) {
            this.kerningMap.set(`${first}/${second}`, amount / size);
        }
    }
    getGlyphInfo(char) {
        const glyph = this.glyphInfoMap.get(char);
        if (glyph)
            return glyph;
        if (char === '\n') {
            const space = this.glyphInfoMap.get(' ');
            if (space)
                return space;
        }
        console.warn(`Missing glyph info for character "${char}"`);
        return MISSING_GLYPH;
    }
    getKerning(firstId, secondId) {
        return this.kerningMap.get(`${firstId}/${secondId}`) ?? 0;
    }
}
export function glyphIntoToUV(info, target, offset) {
    target[offset + 0] = info.uvX;
    target[offset + 1] = info.uvY + info.uvHeight;
    target[offset + 2] = info.uvWidth;
    target[offset + 3] = -info.uvHeight;
}
