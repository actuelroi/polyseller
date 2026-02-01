'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useSidebar } from '@/hooks/useSidebar'
import { cn } from '@/lib/utils'
import { useEffect, type PropsWithChildren } from 'react'



const LayoutContainer = ({ children }: PropsWithChildren) => {
    const isMobile = useMediaQuery('(max-width: 1024px)')
    const { isCollapsed, open, close } = useSidebar()

    useEffect(() => {
        if (isMobile) {
            if (!isCollapsed) close()
        } else {
            if (isCollapsed) open()
        }
    }, [isMobile])


    return (
        <main
            className={cn(
                isCollapsed ? 'ml-16' : 'ml-16 md:ml-50'
            )}
        >
            {children}
        </main>
    )
}

export default LayoutContainer