









'use client'


import { useExtend } from '@/hooks/useExtend'

import { cn } from '@/lib/utils'
import { type PropsWithChildren } from 'react'



const RechercheMainLayout = ({ children }: PropsWithChildren) => {

    const { isCollapsed } = useExtend()

    return (
        <main
            className={cn(
                "h-full md:pl-85 overflow-hidden transition-all",
                isCollapsed ? 'md:pl-0' : 'md:pl-85'
            )}
        >
            {children}
        </main>




    )
}

export default RechercheMainLayout