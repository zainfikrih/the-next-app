"use client"
import { login } from "@/app/services/userService";
import { Alert, Box, Button, Center, Code, Text } from "@mantine/core";
import { useState, useTransition } from "react";
import { LoginData } from "./LoginForm.component";
import { IconInfoCircle } from "@tabler/icons-react";
import { getUser } from "@/lib/cookiesManager";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/app/stores/app.store";

export default function LoginButton({ props }: {
    props: LoginData
}) {
    const [isPending, startTransition] = useTransition()
    const appStore = useAppStore()
    const router = useRouter()
    return (<>
        <Button loading={isPending} onClick={() => {
            startTransition(async () => {
                const res = await login(props.username, props.password)
                appStore.setUser(res)
                router.refresh()
                router.replace('/')
            })
        }}>
            Login
        </Button>
    </>
    )
}