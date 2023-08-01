"use client"
import { Button, Center, Paper, Stack, Text, TextInput } from "@mantine/core"
import { useState } from "react"
import LoginButton from "./LoginButton.component"

export type LoginData = {
    username: string,
    password: string
}

export default function LoginForm() {
    const [loginData, setLoginData] = useState<LoginData>({
        username: "",
        password: ""
    })
    return (
        <Stack>
            <Center>
                <TextInput label="Username"
                    onChange={(v) => {
                        setLoginData({ ...loginData, username: v.target.value })
                    }} />
            </Center>
            <Center>
                <TextInput type="password" label="Password"
                    onChange={(v) => {
                        setLoginData({ ...loginData, password: v.target.value })
                    }} />
            </Center>
            <LoginButton props={loginData} />
        </Stack>
    )
}