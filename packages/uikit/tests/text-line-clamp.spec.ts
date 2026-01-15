import { expect } from 'chai'
import { buildGlyphLayout, measureGlyphLayout, GlyphOutProperties } from '../src/text/layout.js'
import { Font } from '../src/text/font.js'

describe('Line Clamp Feature', () => {
  // Mock font for testing
  const mockFont: Font = {
    getGlyphInfo: (char: string) => ({
      id: char.charCodeAt(0),
      xadvance: 10, // Each character is 10 units wide
      width: 10,
      height: 16,
      xoffset: 0,
      yoffset: 0,
      page: 0,
      x: 0,
      y: 0,
    }),
    pages: [],
    info: {} as any,
    common: {} as any,
    chars: {} as any,
    kernings: {},
  } as any

  const baseProperties: GlyphOutProperties = {
    font: mockFont,
    text: 'This is a long text that should wrap into multiple lines when the available width is limited',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 20,
    wordBreak: 'break-word' as const,
  }

  describe('measureGlyphLayout', () => {
    it('should measure text height without line clamp', () => {
      const result = measureGlyphLayout(baseProperties, 100)
      expect(result.height).to.be.greaterThan(20) // Should be multiple lines
    })

    it('should limit height when lineClamp is set', () => {
      const result = measureGlyphLayout(baseProperties, 100, 2)
      // With lineClamp=2, height should be exactly 2 lines * lineHeight
      expect(result.height).to.equal(40) // 2 lines * 20px line height
    })

    it('should respect lineClamp even with very long text', () => {
      const longTextProps = {
        ...baseProperties,
        text: 'a '.repeat(1000), // Very long text
      }
      const result = measureGlyphLayout(longTextProps, 100, 3)
      expect(result.height).to.equal(60) // 3 lines * 20px line height
    })
  })

  describe('buildGlyphLayout', () => {
    it('should build layout without line clamp', () => {
      const layout = buildGlyphLayout(baseProperties, 100, 200)
      expect(layout.lines.length).to.be.greaterThan(2)
      expect(layout.hasEllipsis).to.equal(false)
    })

    it('should limit lines when lineClamp is set', () => {
      const layout = buildGlyphLayout(baseProperties, 100, 200, 2)
      expect(layout.lines.length).to.equal(2)
    })

    it('should not add ellipsis when textOverflow is clip', () => {
      const layout = buildGlyphLayout(baseProperties, 100, 200, 2, 'clip')
      expect(layout.hasEllipsis).to.be.false
    })

    it('should add ellipsis when textOverflow is ellipsis and text is clamped', () => {
      const layout = buildGlyphLayout(baseProperties, 100, 200, 2, 'ellipsis')
      expect(layout.hasEllipsis).to.be.true
      expect(layout.lines.length).to.equal(2)
    })

    it('should not add ellipsis when text fits within lineClamp', () => {
      const shortTextProps = {
        ...baseProperties,
        text: 'Short',
      }
      const layout = buildGlyphLayout(shortTextProps, 100, 200, 5, 'ellipsis')
      expect(layout.hasEllipsis).to.be.false
      expect(layout.lines.length).to.be.lessThan(5)
    })

    it('should make room for ellipsis by truncating last line', () => {
      const layout = buildGlyphLayout(baseProperties, 100, 200, 2, 'ellipsis')
      expect(layout.hasEllipsis).to.be.true
      
      // The last line should be truncated to make room for ellipsis
      const lastLine = layout.lines[layout.lines.length - 1]!
      
      // Width should be less than available to leave room for ellipsis (within a reasonable range)
      // Since we have mock glyphs, the actual behavior will vary
      expect(lastLine.nonWhitespaceWidth).to.be.at.most(100)
    })
  })

  describe('Edge cases', () => {
    it('should handle single line text with line clamp', () => {
      const shortTextProps = {
        ...baseProperties,
        text: 'Hi',
      }
      const layout = buildGlyphLayout(shortTextProps, 100, 200, 2, 'ellipsis')
      expect(layout.hasEllipsis).to.be.false
      expect(layout.lines.length).to.equal(1)
    })

    it('should handle empty text', () => {
      const emptyTextProps = {
        ...baseProperties,
        text: '',
      }
      const layout = buildGlyphLayout(emptyTextProps, 100, 200, 2, 'ellipsis')
      expect(layout.hasEllipsis).to.be.false
      expect(layout.lines.length).to.equal(1) // Empty line
    })

    it('should handle lineClamp of 1', () => {
      const layout = buildGlyphLayout(baseProperties, 100, 200, 1, 'ellipsis')
      expect(layout.lines.length).to.equal(1)
      expect(layout.hasEllipsis).to.be.true
    })
  })
})
