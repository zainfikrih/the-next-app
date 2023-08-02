"use client"

import { useAppStore } from "@/app/stores/app.store";
import { useEffect, useState } from "react";

export default function ThemeProvider() {
    const [themeColor, setThemeColor] = useState('')
    const appStore = useAppStore()

    useEffect(() => {
        if (typeof window !== "undefined") {
            setThemeColor(appStore.colorTheme);
        }
    }, [appStore.colorTheme]);
    return themeColor && <meta name="theme-color" content={themeColor === 'dark' ? "#1A1B1E" : "#FFFFFF"} />
}