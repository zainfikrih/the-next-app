import { Center, Stack, Text } from '@mantine/core'
import NextPostButton from '../../components/NextPostButton'
import { getPost } from '@/app/services/postsService'

export default async function Posts({ params, searchParams }: {
    params: {
        id: string
    },
    searchParams: any
}) {
    const initValue = await getPost(params.id)
    return (
        <Center h={'100vh'}>
            <Stack>
                <Center>
                    <Text>Post Page</Text>
                </Center>
                <NextPostButton props={{ currentId: params.id, initialValue: initValue }} />
            </Stack>
        </Center>
    )
}
