"use client"
import { Center, Text } from "@mantine/core"
import { useAppStore } from "../app/stores/app.store"

export default function ZustandCounterText() {
    const appStore = useAppStore()
    const counter = appStore.counter
    return (
        <Center>
            <Text>Counter: {counter}</Text>
        </Center>
    )
}