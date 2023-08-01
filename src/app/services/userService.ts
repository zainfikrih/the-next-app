"use server"

import axiosApp from "@/lib/axiosConfig"
import { setAccessToken } from "@/lib/cookiesManager"

export async function login() {
    const res = await axiosApp.post(`/auth/login`, {
        username: "",
        password: ""
    })
    if (res) {
        console.log(res.data)
        setAccessToken(res.data.access_token)
        return { ...res.data }
    }
    return {}
}