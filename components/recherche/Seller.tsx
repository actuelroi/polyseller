 "use client"
import { useExtend } from "@/hooks/useExtend"
import SellerCountry from "./seller-contry"
import SellerSearch from "./seller-search"
import SellerItem from "./SellerItem"
import { cn } from "@/lib/utils"



const Seller = () => {
   const { isCollapsed } = useExtend()

  return (
   <div className={cn(" hide-scrollbar flex flex-col h-full w-full transition-all duration-100 ease-in-out ", isCollapsed && 'w-0')}>
    <SellerSearch/>
    <SellerCountry />
    <SellerItem />
    
   </div>
  )
}

export default Seller
