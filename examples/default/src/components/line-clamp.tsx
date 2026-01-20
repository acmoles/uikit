import { Container, Text } from '@react-three/uikit'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@react-three/uikit-default'

const longText = 'This is a very long text that demonstrates the line-clamp feature. When the lineClamp property is set, the text will be truncated after the specified number of lines. This is useful for creating card layouts, list items, or any UI where you want to limit the amount of text displayed to maintain a consistent layout.'

export function LineClampDemo() {
  return (
    <Container flexDirection="column" gap={16} padding={16}>
      <Card width={300}>
        <CardHeader>
          <CardTitle>No Line Clamp</CardTitle>
          <CardDescription>Text without any line limit</CardDescription>
        </CardHeader>
        <CardContent>
          <Text fontSize={14}>{longText}</Text>
        </CardContent>
      </Card>

      <Card width={300}>
        <CardHeader>
          <CardTitle>Line Clamp = 2</CardTitle>
          <CardDescription>Text limited to 2 lines with ellipsis</CardDescription>
        </CardHeader>
        <CardContent>
          <Text fontSize={14} lineClamp={2} textOverflow="ellipsis">
            {longText}
          </Text>
        </CardContent>
      </Card>

      <Card width={300}>
        <CardHeader>
          <CardTitle>Line Clamp = 3 (Clip)</CardTitle>
          <CardDescription>Text limited to 3 lines without ellipsis</CardDescription>
        </CardHeader>
        <CardContent>
          <Text fontSize={14} lineClamp={3} textOverflow="clip">
            {longText}
          </Text>
        </CardContent>
      </Card>

      <Card width={300}>
        <CardHeader>
          <CardTitle>Line Clamp = 1</CardTitle>
          <CardDescription>Single line with ellipsis</CardDescription>
        </CardHeader>
        <CardContent>
          <Text fontSize={14} lineClamp={1} textOverflow="ellipsis">
            {longText}
          </Text>
        </CardContent>
      </Card>
    </Container>
  )
}
