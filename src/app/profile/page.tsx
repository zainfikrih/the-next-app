import { accessToken } from '@/lib/cookiesManager'
import { Center, Stack, Text } from '@mantine/core'

export default async function Profile() {
    const getAccessToken = accessToken()
    return (
        <Center h={'100vh'}>
            <Stack>
                <Center>
                    <Text>Profile Page</Text>
                </Center>
                <Center>
                    <Text>Token: {getAccessToken}</Text>
                </Center>
            </Stack>
        </Center>
    )
}
