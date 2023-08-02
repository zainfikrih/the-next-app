import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

export const appStore = create<IAppStore>()(
    devtools(
        persist(
            (set) => ({
                counter: 0,
                user: {},
                colorTheme: 'dark',
                setUser: (value: any) => {
                    set(() => ({ user: value }))
                },
                setColorTheme: (value: string) => {
                    set(() => ({ colorTheme: value }))
                },
                increment: () => {
                    set((state) => ({ counter: state.counter + 1 }))
                },
                decrement: () => {
                    set((state) => ({ counter: state.counter - 1 }))
                },
            }),
            {
                name: 'app-storage',
                storage: createJSONStorage(() => sessionStorage)
            }
        )
    )
)
interface IAppStore {
    counter: number,
    user: any,
    colorTheme: string,
    setUser: (value: any) => void,
    setColorTheme: (value: string) => void,
    increment: () => void
    decrement: () => void
}

export const useAppStore = () => appStore()