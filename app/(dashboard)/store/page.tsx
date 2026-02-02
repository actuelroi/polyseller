
import StoreProductGrid from "@/components/store/store-product-grid"
import StoreHeader from "@/components/store/StoreHeader"


const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <StoreHeader/>
      <StoreProductGrid/>
    </div>
  )
}

export default page
