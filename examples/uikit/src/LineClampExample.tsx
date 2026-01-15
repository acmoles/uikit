import { Canvas } from '@react-three/fiber'
import { Fullscreen, Container, Text } from '@react-three/uikit'

const longText = 
  'This is a very long text that demonstrates the line-clamp feature. ' +
  'When the lineClamp property is set, the text will be truncated after the specified number of lines. ' +
  'This is useful for creating card layouts, list items, or any UI where you want to limit the amount of text displayed to maintain a consistent layout. ' +
  'The textOverflow property controls whether an ellipsis (…) is shown at the end of the clamped text.'

export default function LineClampExample() {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <color attach="background" args={['#1a1a1a']} />
      <ambientLight intensity={0.5} />
      <Fullscreen flexDirection="column" gap={20} padding={40} alignItems="flex-start">
        <Container flexDirection="column" gap={8} width={400}>
          <Text fontSize={20} fontWeight="bold" color="white">
            No Line Clamp
          </Text>
          <Text fontSize={14} color="#cccccc">
            {longText}
          </Text>
        </Container>

        <Container flexDirection="column" gap={8} width={400}>
          <Text fontSize={20} fontWeight="bold" color="white">
            Line Clamp = 2 with Ellipsis
          </Text>
          <Text fontSize={14} color="#cccccc" lineClamp={2} textOverflow="ellipsis">
            {longText}
          </Text>
        </Container>

        <Container flexDirection="column" gap={8} width={400}>
          <Text fontSize={20} fontWeight="bold" color="white">
            Line Clamp = 3 with Clip (no ellipsis)
          </Text>
          <Text fontSize={14} color="#cccccc" lineClamp={3} textOverflow="clip">
            {longText}
          </Text>
        </Container>

        <Container flexDirection="column" gap={8} width={400}>
          <Text fontSize={20} fontWeight="bold" color="white">
            Line Clamp = 1 with Ellipsis
          </Text>
          <Text fontSize={14} color="#cccccc" lineClamp={1} textOverflow="ellipsis">
            {longText}
          </Text>
        </Container>
      </Fullscreen>
    </Canvas>
  )
}
