import {create} from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'


interface SidebarProps{
    isCollapsed: boolean,
    setIsCollapsed:(value:boolean) => void
}


export const sidebarStore = create(
    persist<SidebarProps>(
        set => ({
            isCollapsed: false,
            setIsCollapsed :(value:boolean) => set({ isCollapsed:value})
        }),
        {
            name: 'sidebar',
            storage: createJSONStorage(()=>localStorage)
        }
    )
)