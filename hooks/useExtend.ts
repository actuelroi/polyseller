import { extendStore } from "@/store/extend.store"



export const useExtend = () =>{
 
    const setIsCollapsed = extendStore((state)=> state.setIsCollapsed)
    const isCollapsed = extendStore((state)=> state.isCollapsed)

    const open = () => setIsCollapsed(false)
    const close = () => setIsCollapsed(true)

    return {
        isCollapsed,
        close,
        open
    }

}