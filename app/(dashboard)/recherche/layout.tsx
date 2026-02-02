import Seller from '@/components/recherche/Seller'
import RechercheLayout from '@/components/RechercheLayout'
import RechercheMainLayout from '@/components/RechercheMainLayout'
import  { PropsWithChildren } from 'react'

const layout = ({children}:PropsWithChildren) => {
  return (
    <div className="h-full">
       <RechercheLayout>
        <Seller/>
       </RechercheLayout>
      <RechercheMainLayout>{children}</RechercheMainLayout>
    </div>
  )
}

export default layout
