"use server"

import axiosApp from "@/lib/axiosConfig"
import { setAccessToken, setUser } from "@/lib/cookiesManager"
import { parseJwt } from "@/lib/jwtParse"

export async function login(username: string, password: string) {
    const res = await axiosApp.post(`/auth/login`, {
        username: username,
        password: password
    })
    if (res.data.access_token) {
        setAccessToken(res.data.access_token)
        setUser(parseJwt(res.data.access_token))
        return parseJwt(res.data.access_token)
    }
    return {}
}