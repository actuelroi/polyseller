'use client'


import { useSidebar } from '@/hooks/useSidebar'
import { cn } from '@/lib/utils'
import { type PropsWithChildren } from 'react'



const LayoutContainer = ({ children }: PropsWithChildren) => {
  
    const { isCollapsed } = useSidebar()

    return (
        <main
            className={cn(
                " min-h-screen",
                isCollapsed ? 'ml-16' : 'ml-16 md:ml-50'
            )}
        >
            {children}
        </main>
    )
}

export default LayoutContainer