"use server"

import { cookies } from "next/headers";
import { parseJwt } from "./jwtParse";

export const getAccessToken = () => cookies().get('accessToken')?.value
export const setAccessToken = async (token: string) => cookies().set({
    name: 'accessToken',
    value: token,
    expires: parseJwt(token).exp * 1000,
    path: '/',
})

export const getUser = () => cookies().get('user')?.value
export const setUser = async (value: any) => cookies().set({
    name: 'user',
    value: `${JSON.stringify(value)}`,
    expires: value.exp * 1000,
    path: '/',
})