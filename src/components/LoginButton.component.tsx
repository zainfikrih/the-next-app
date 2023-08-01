"use client"
import { login } from "@/app/services/userService";
import { Button } from "@mantine/core";
import { useTransition } from "react";

export default function LoginButton() {
    const [isPending, startTransition] = useTransition()
    return (
        <Button loading={isPending} onClick={() => {
            startTransition(() => {
                login()

            })
        }}>
            Login
        </Button>
    )
}