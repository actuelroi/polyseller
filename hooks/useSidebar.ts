import { sidebarStore } from "@/store/side.store"


export const useSidebar = () =>{
 
    const setIsCollapsed = sidebarStore((state)=> state.setIsCollapsed)
    const isCollapsed = sidebarStore((state)=> state.isCollapsed)

    const open = () => setIsCollapsed(false)
	const close = () => setIsCollapsed(true)

    return {
        isCollapsed,
        close,
        open
    }

}