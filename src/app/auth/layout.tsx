import { Center } from '@mantine/core'
import '@mantine/core/styles.css'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Center h={'100vh'}>
      {children}
    </Center>
  )
}
