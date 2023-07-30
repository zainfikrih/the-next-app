"use client"

import { Button, Stack, Text } from "@mantine/core"
import { getPost } from "../services/postsService"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"

export default function NextPostButton({ props }: {
    props: {
        currentId: string,
        initialValue: string
    }
}) {
    const [post, setPost] = useState(props.initialValue)
    const [isPending, startTransition] = useTransition()
    const [nextId, setNextId] = useState(Number(props.currentId) + 1)
    const router = useRouter()

    const getNextPost = (id: string) => {
        startTransition(async () => {
            setPost(await getPost(id))
            setNextId(prev => (Number(prev) + 1))
            router.refresh()
        })
    }

    return (
        <Stack>
            <Text>
                {JSON.stringify(post)}
            </Text>
            <Button loading={isPending} onClick={() => {
                getNextPost(nextId.toString())
            }}>
                The Next Post
            </Button>
            <Text>
                {JSON.stringify(props.initialValue)}
            </Text>
        </Stack>
    )
}