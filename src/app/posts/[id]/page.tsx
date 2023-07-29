import { Center, Stack, Text } from '@mantine/core'
import axiosApp from '@/app/lib/axiosConfig'

async function getPost(id: string) {
    const res = await axiosApp.get(`/posts/${id}`)
    return res.data
}

export default async function Posts({ params, searchParams }: {
    params: {
        id: string
    },
    searchParams: any
}) {
    const data = await getPost(params.id)
    return (
        <Center h={'100vh'}>
            <Stack>
                <Center>
                    <Text>Post Page</Text>
                </Center>
                <Text>{JSON.stringify(data)}</Text>
            </Stack>
        </Center>
    )
}
