import Image from 'next/image'
import styles from './page.module.css'
import { Center, Text } from '@mantine/core'
import axiosApp from '../lib/axiosConfig'

async function getPost() {
    const res = await axiosApp.get(`/posts/1`)
    return res.data
}

export default async function Profile() {
    const data = await getPost()
    return (
        <Center h={'100vh'}>
            <Text>Profile Page</Text>
            <Text>{JSON.stringify(data)}</Text>
        </Center>
    )
}
