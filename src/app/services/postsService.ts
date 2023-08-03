"use server"

import axiosApp from "@/lib/axiosConfig"

export async function getPost(id: string) {
    const res = await axiosApp.get(`https://dummyjson.com/posts/${id}`)
    console.log(res.data)
    return { ...res.data, date: new Date().toLocaleString() }
}