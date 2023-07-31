"use client"
import { Center, Loader } from "@mantine/core";
import { useEffect, useState } from "react";

export const Hydrated = ({ children }: { children?: any }) => {
    const [hydration, setHydration] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHydration(true);
        }
    }, []);
    return hydration ? children : <Center style={{ width: '100vw', height: '50vw' }}><Loader /></Center>
};
