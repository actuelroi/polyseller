import Seller from '@/components/recherche/Seller'
import  { PropsWithChildren } from 'react'

const layout = ({children}:PropsWithChildren) => {
  return (
    <div className="h-full">
      <aside className="hidden md:flex h-full w-85 z-20 flex-col fixed inset-y-0 top-12 border-r">
        <Seller/>
      </aside>
      <main className="h-full md:pl-85">{children}</main>
    </div>
  )
}

export default layout
