"use client"

import { useAppStore } from "@/app/stores/app.store";

export default function ThemeProvider() {
    const appStore = useAppStore()

    return <meta name="theme-color" content={appStore.colorTheme === 'dark' ? "#1A1B1E" : "#FFFFFF"} />
}