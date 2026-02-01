
import Navbar from '@/components/dashboard/Navbar'
import Sidebar from '@/components/dashboard/Sidebar'
import LayoutContainer from '@/components/LayoutContainer'
import { PropsWithChildren } from 'react'




const layout = ({children}:PropsWithChildren) => {
  return (
   <>
     <Navbar/>
      <Sidebar className='hidden md:block md:fixed  '/>
      <main className='top-12'>
         <LayoutContainer>
           {children}
         </LayoutContainer>
      </main>
   </>
   
  )
}

export default layout