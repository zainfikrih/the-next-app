import { Center, Loader } from '@mantine/core'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/home')
  return (
    <Center h={'100vh'}>
      <Loader />
    </Center>
  )
}
