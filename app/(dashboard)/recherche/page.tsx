import ProductGrid from "@/components/product/Productgrid"
import ProductHead from "@/components/product/ProductHead"
import ProductHeader from "@/components/product/ProductHeader"




const page = () => {
  return (
    <div className="flex flex-col ">
     <ProductHead />
     <ProductGrid/>
     <ProductHeader/>
      <ProductGrid/>
    </div>
  )
}

export default page
