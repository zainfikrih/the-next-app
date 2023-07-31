"use client"
import { Button } from "@mantine/core";
import { useAppStore } from "../app/stores/app.store";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

export default function ZustandCounterButton() {
    const appStore = useAppStore()
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    return (
        <Button onClick={() => {
            startTransition(() => {
                appStore.increment()
                router.refresh()
            })
        }}>
            Increment
        </Button>
    )
}