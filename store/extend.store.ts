import {create} from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'


interface ExtendProps{
    isCollapsed: boolean,
    setIsCollapsed:(value:boolean) => void
}


export const extendStore = create(
    persist<ExtendProps>(
        set => ({
            isCollapsed: false,
            setIsCollapsed :(value:boolean) => set({ isCollapsed:value})
        }),
        {
            name: 'extend',
            storage: createJSONStorage(()=>localStorage)
        }
    )
)