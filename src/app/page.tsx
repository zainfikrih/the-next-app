import Image from 'next/image'
import styles from './page.module.css'
import { Button, Center, Grid, GridCol, Stack, Text } from '@mantine/core'
import Link from 'next/link'

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
      </Stack>
    </Center>
  )
}
