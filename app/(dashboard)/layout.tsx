
import Navbar from '@/components/dashboard/Navbar'
import Sidebar from '@/components/dashboard/Sidebar'
import Footer from '@/components/Footer'
import LayoutContainer from '@/components/LayoutContainer'
import { PropsWithChildren } from 'react'




const layout = ({children}:PropsWithChildren) => {
  return (
   <>
     <Navbar/>
      <Sidebar className='hidden md:block md:fixed  '/>
     <main className="w-full">
         <LayoutContainer>
           {children}
           <Footer/>
         </LayoutContainer>
      </main>
      
   </>
   
  )
}

export default layout