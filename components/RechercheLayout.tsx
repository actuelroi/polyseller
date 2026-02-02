





'use client'


import { useExtend } from '@/hooks/useExtend'

import { cn } from '@/lib/utils'
import { type PropsWithChildren } from 'react'



const RechercheLayout = ({ children }: PropsWithChildren) => {

    const { isCollapsed } = useExtend()

    return (
        <aside
            className={cn(
                "hidden md:flex h-full z-20 flex-col fixed inset-y-0 top-12 border-r overflow-hidden transition-all",
                isCollapsed ? 'w-0' : 'w-85'
            )}
        >
            {children}
        </aside>




    )
}

export default RechercheLayout