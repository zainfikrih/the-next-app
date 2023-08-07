"use client"
import { Button } from "@mantine/core";
import { useAppStore } from "../app/stores/app.store";

export default function ZustandCounterButton() {
    const appStore = useAppStore()
    return (
        <Button onClick={() => {
            appStore.increment()
        }}>
            Increment
        </Button>
    )
}