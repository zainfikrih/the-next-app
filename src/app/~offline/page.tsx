import { Center, Text } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Next App",
    description: "Offline",
    icons: {
        icon: '/icon/icon-192.png'
    },
}

export default function Offline() {
    return (
        <Center h={'100vh'}>
            <Text
                fz={'42'}
                fw={900}
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
                Seems no life, need Internet!!!
            </Text>
        </Center>
    )
}