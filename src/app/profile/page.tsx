import { Center, Stack, Text } from '@mantine/core'

export default async function Profile() {
    return (
        <Center h={'100vh'}>
            <Stack>
                <Center>
                    <Text>Profile Page</Text>
                </Center>
                <Center>
                    <Text>Token:</Text>
                </Center>
            </Stack>
        </Center>
    )
}
