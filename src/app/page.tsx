import Image from 'next/image'
import styles from './page.module.css'
import { Button, Center, Grid, GridCol, Text } from '@mantine/core'

export default function Home() {
  return (
    <Center h={'100vh'}>
      <Grid>
        <GridCol>
          <Center>
            <Text>NextJS 13 with Mantine UI</Text>
          </Center>
        </GridCol>
        <GridCol>
          <Center>
            <Button variant={'outline'} component='a' href='/posts/2?search=hai'>
              Check Post
            </Button>
          </Center>
        </GridCol>
      </Grid>
    </Center>
  )
}
