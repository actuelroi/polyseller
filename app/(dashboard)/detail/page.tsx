import DetailHeader from "@/components/detail/DetailHeader"
import ProductGallery from "@/components/detail/ProductGallery"
import ProductInfo from "@/components/detail/ProductInfo"
import ProductPreview from "@/components/detail/ProductPreview"
import ProductSpecs from "@/components/detail/ProductSpecs"
import SellerInfo from "@/components/detail/SellerInfo"

import ProductGrid from "@/components/product/Productgrid"



const page = () => {
  return (
    <div className=" px-4 ">
       <DetailHeader/>
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 w-full p-4">
        <ProductPreview />
        <ProductInfo />
      </div>
      {/* Bottom section */}
      <ProductSpecs />
      <SellerInfo />
      <ProductGrid />
    </div>
  )
}

export default page
