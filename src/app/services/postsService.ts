"use server"

import axiosApp from "@/app/lib/axiosConfig"

export async function getPost(id: string) {
    const res = await axiosApp.get(`/posts/${id}`)
    return { ...res.data, date: new Date().toLocaleString() }
}