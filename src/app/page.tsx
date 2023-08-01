import { Button, Center, Stack, Text } from '@mantine/core'
import Link from 'next/link'
import ZustandCounterButton from '../components/ZustandCounterButton.component'
import ZustandCounterText from '../components/ZustandCounterText.component'
import LoginButton from '@/components/LoginButton.component'
import LoginForm from '@/components/LoginForm.component'

export default function Home() {
  return (
    <Center h={'100vh'}>
      <Stack>
        <Center>
          <Text>NextJS 13 with Mantine UI</Text>
        </Center>
        <Center>
          <Button variant={'outline'} component={Link} href='/posts/2?search=hai'>
            Check Post
          </Button>
        </Center>
        <ZustandCounterText />
        <ZustandCounterButton />
        <LoginForm />
      </Stack>
    </Center>
  )
}
