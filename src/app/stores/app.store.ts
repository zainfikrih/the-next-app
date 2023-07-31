import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

export const appStore = create<IAppStore>()(
    devtools(
        persist(
            (set) => ({
                counter: 0,
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
    increment: () => void
    decrement: () => void
}

export const useAppStore = () => appStore()