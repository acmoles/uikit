import { BreakallWrapper, NowrapWrapper, WordWrapper } from './wrapper/index.js'
import { Font } from './font.js'
import { getGlyphLayoutHeight, toAbsoluteNumber } from './utils.js'
import { Signal, computed } from '@preact/signals-core'
import { MeasureMode } from 'yoga-layout/load'
import { Properties } from '../properties/index.js'
import { CustomLayouting } from '../flex/index.js'
import { TextOutProperties } from '../components/text.js'

export type GlyphLayoutLine = {
  charIndexOffset: number
  charLength: number
  nonWhitespaceCharLength: number
  nonWhitespaceWidth: number
  whitespacesBetween: number
}

export type GlyphLayout = {
  lines: Array<GlyphLayoutLine>
  availableWidth: number
  availableHeight: number
  hasEllipsis?: boolean
} & GlyphOutProperties

export type GlyphProperties = Partial<{
  letterSpacing: number | string
  lineHeight: number | string
  fontSize: number | string
  wordBreak: WordBreak
  whiteSpace: WhiteSpace
  tabSize: number
  lineClamp: number
  textOverflow: 'clip' | 'ellipsis'
}>

export type WhiteSpace = 'normal' | 'collapse' | 'pre' | 'pre-line'

export type WordBreak = keyof typeof wrappers

function buildGlyphOutProperties(
  font: Font,
  text: string,
  { fontSize: fontSizeString, letterSpacing, lineHeight: lineHeightString, wordBreak }: Required<GlyphProperties>,
): GlyphOutProperties {
  const fontSize = toAbsoluteNumber(fontSizeString)
  let lineHeight: number
  if (typeof lineHeightString === 'string' && lineHeightString.endsWith('px')) {
    lineHeight = parseFloat(lineHeightString)
  } else {
    lineHeight = fontSize * toAbsoluteNumber(lineHeightString, () => 1)
  }
  return { font, text, fontSize, letterSpacing: toAbsoluteNumber(letterSpacing), lineHeight, wordBreak }
}

export type GlyphOutProperties = {
  text: string
  font: Font
  letterSpacing: number
  lineHeight: number
  fontSize: number
  wordBreak: WordBreak
}

const collapseRegex = /[\t\n ]+/gm
const preLineCollapseNonLinefeedWhitespaceRegex = /[\t ]+/g
const preLineCollapseLinefeedRegex = /[\t ]*\n[\t ]*/gm
const preLineTrimNonLinefeedWhitespaceRegex = /^[ \t]+|[ \t]+$/g

export function computedCustomLayouting(
  properties: Properties<TextOutProperties>,
  fontSignal: Signal<Font | undefined>,
  propertiesRef: { current: GlyphOutProperties | undefined },
) {
  return computed<CustomLayouting | undefined>(() => {
    const font = fontSignal.value
    if (font == null) {
      return undefined
    }
    const textProperty = properties.value.text
    let text = Array.isArray(textProperty) ? textProperty.map(toString).join('') : toString(textProperty)
    const tabSize = properties.value.tabSize
    const whiteSpace = properties.value.whiteSpace
    switch (whiteSpace) {
      case 'pre':
        //since we preserve everything, we convert tabs to spaces
        text = text.replaceAll('\t', ' '.repeat(tabSize))
        break
      case 'pre-line':
        //preserving line feeds
        text = text
          .replaceAll(preLineCollapseNonLinefeedWhitespaceRegex, ' ')
          .replaceAll(preLineCollapseLinefeedRegex, '\n')
          .replaceAll(preLineTrimNonLinefeedWhitespaceRegex, '')
        break
      default:
        text = text.replaceAll(collapseRegex, ' ').trim()
        break
    }
    const layoutProperties = buildGlyphOutProperties(font, text, properties.value as Required<GlyphProperties>)
    propertiesRef.current = layoutProperties

    const lineClamp = properties.value.lineClamp

    const { width: minWidth } = measureGlyphLayout(layoutProperties, 0, lineClamp)
    const { height: minHeight } = measureGlyphLayout(layoutProperties, undefined, lineClamp)

    return {
      minHeight,
      minWidth,
      measure: (width, widthMode) =>
        measureGlyphLayout(layoutProperties, widthMode === MeasureMode.Undefined ? undefined : width, lineClamp),
    }
  })
}

function toString(value: unknown) {
  if (value instanceof Signal) {
    value = value.value
  }
  if (value == null) {
    return ''
  }
  return String(value)
}

const wrappers = {
  'keep-all': NowrapWrapper,
  'break-all': BreakallWrapper,
  'break-word': WordWrapper,
}

const lineHelper = {} as GlyphLayoutLine

export function measureGlyphLayout(
  properties: GlyphOutProperties,
  availableWidth?: number,
  lineClamp?: number,
): {
  width: number
  height: number
} {
  const wrapper = wrappers[properties.wordBreak]
  const text = properties.text

  let width = 0
  let lines = 0
  let charIndex = 0

  while (charIndex < text.length) {
    if (lineClamp != null && lines >= lineClamp) {
      break
    }
    wrapper(properties, availableWidth, charIndex, lineHelper)
    width = Math.max(width, lineHelper.nonWhitespaceWidth)
    lines += 1
    charIndex = lineHelper.charLength + lineHelper.charIndexOffset
  }

  if (lineClamp == null || lines < lineClamp) {
    if (text[text.length - 1] === '\n') {
      lines += 1
    }
  }

  return { width, height: getGlyphLayoutHeight(lines, properties.lineHeight) }
}

export function buildGlyphLayout(
  properties: GlyphOutProperties,
  availableWidth: number,
  availableHeight: number,
  lineClamp?: number,
  textOverflow?: 'clip' | 'ellipsis',
): GlyphLayout {
  const lines: Array<GlyphLayoutLine> = []
  const wrapper = wrappers[properties.wordBreak]
  const text = properties.text

  let charIndex = 0
  let hasEllipsis = false

  while (charIndex < text.length) {
    if (lineClamp != null && lines.length >= lineClamp) {
      break
    }
    const line = {} as GlyphLayoutLine
    wrapper(properties, availableWidth, charIndex, line)
    lines.push(line)
    charIndex = line.charLength + line.charIndexOffset
  }

  // Handle ellipsis if text was clamped
  if (
    textOverflow === 'ellipsis' &&
    lineClamp != null &&
    lines.length === lineClamp &&
    charIndex < text.length
  ) {
    hasEllipsis = true
    // Text was clamped, add ellipsis to the last line
    const lastLine = lines[lines.length - 1]!
    const ellipsisWidth = properties.font.getGlyphInfo('…').xadvance * properties.fontSize
    
    // We need to make room for the ellipsis by removing characters from the end
    // Rebuild the last line with room for ellipsis
    const lastLineStartIndex = lastLine.charIndexOffset
    let tempCharIndex = lastLineStartIndex
    let lineWidth = 0
    const targetWidth = availableWidth - ellipsisWidth
    
    // Find how many characters fit with ellipsis
    while (tempCharIndex < lastLineStartIndex + lastLine.charLength) {
      const char = text[tempCharIndex]!
      const glyphInfo = properties.font.getGlyphInfo(char)
      const charWidth = glyphInfo.xadvance * properties.fontSize + toAbsoluteNumber(properties.letterSpacing)
      
      if (lineWidth + charWidth > targetWidth) {
        break
      }
      
      lineWidth += charWidth
      tempCharIndex++
    }
    
    // Update the last line to include space for ellipsis
    const newCharLength = Math.max(0, tempCharIndex - lastLineStartIndex)
    lastLine.charLength = newCharLength
    lastLine.nonWhitespaceCharLength = newCharLength
    lastLine.nonWhitespaceWidth = lineWidth
  }

  if (lines.length === 0 || (text[text.length - 1] === '\n' && (lineClamp == null || lines.length < lineClamp))) {
    lines.push({
      charLength: 0,
      nonWhitespaceWidth: 0,
      whitespacesBetween: 0,
      charIndexOffset: text.length,
      nonWhitespaceCharLength: 0,
    })
  }

  return {
    lines,
    availableHeight,
    availableWidth,
    hasEllipsis,
    ...properties,
  }
}
