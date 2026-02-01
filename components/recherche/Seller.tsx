import SellerCountry from "./seller-contry"
import SellerSearch from "./seller-search"
import SellerItem from "./SellerItem"



const Seller = () => {
  

  return (
   <div className=" hide-scrollbar flex flex-col h-full w-full ">
    <SellerSearch/>
    <SellerCountry />
    <SellerItem />
    
   </div>
  )
}

export default Seller
