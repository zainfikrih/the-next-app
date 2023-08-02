"use client"

import { useAppStore } from "@/app/stores/app.store"
import { Alert, Box, Center, Code } from "@mantine/core"
import { IconInfoCircle } from "@tabler/icons-react"

export default function Profile() {
    const appStore = useAppStore()
    return (
        <Center>
            {appStore.user &&
                <Alert variant="light" color="blue" title="Profile Data" icon={<IconInfoCircle />}>
                    <Box w={300}>
                        <Code>{JSON.stringify(appStore.user, null, 2)}</Code>
                    </Box>
                </Alert>}
        </Center>
    )
}