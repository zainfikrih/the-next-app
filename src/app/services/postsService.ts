"use server"

import axios from "axios"

export async function getPost(id: string) {
    const res = await axios.get(`https://dummyjson.com/posts/${id}`)
    console.log(res.data)
    return { ...res.data, date: new Date().toLocaleString() }
}