import { cookies } from "next/headers";

export const accessToken = async () => cookies().get('accessToken')?.value
export const setAccessToken = async (token: string) => cookies().set({
    name: 'accessToken',
    value: token,
    expires: Date.now() + 43200000, // 12 jam 
    path: '/',
})