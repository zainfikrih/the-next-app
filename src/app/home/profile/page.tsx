import Profile from '@/components/Profile.component'
import { Center, Stack, Text } from '@mantine/core'

export default async function ProfilePage() {
    return (
        <Center h={'100vh'}>
            <Stack>
                <Center>
                    <Text>Profile Page</Text>
                </Center>
                <Profile />
            </Stack>
        </Center>
    )
}
