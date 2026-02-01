import Image from "next/image"
import { FaStar } from "react-icons/fa6"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"

type ProductCardProps = {
  product: any
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition cursor-pointer">
      
      {/* Product Image */}
      <div className="relative h-30 w-full bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-3 space-y-2">

        {/* Product title */}
        <h2 className="font-semibold text-sm line-clamp-2">
          {product.name}
        </h2>

        {/* Variants */}
        <p className="text-xs text-muted-foreground">
          {product.colors} couleurs • {product.sizes} tailles
        </p>


     <div className="flex justify-between items-center flex-row">
          <p>Ventes : {product.sold}+</p>
            {/* Price */}
        <p className="text-lg font-bold text-primary">
          {product.price}
          <span className="text-xs font-normal text-muted-foreground">
            {" "} / unité
          </span>
        </p>
      

     </div>
       
        {/* Meta */}
        <div className="text-xs space-y-1 flex flex-row justify-between items-center">
          <p>MOQ : {product.moq} unités</p>
          <p>Délai : {product.leadTime}</p>
          
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-xs">
          <FaStar className="text-yellow-500" />
          <span>
            {product.rating} ({product.reviews} avis)
          </span>
        </div>

        {/* Seller */}
        <div className="flex items-center gap-2 pt-2 border-t">
          <Avatar className="h-7 w-7">
            <AvatarImage src={product.seller.avatar} />
            <AvatarFallback>
              {product.seller.name.slice(0, 2)}
            </AvatarFallback>
          </Avatar>

          <div className="text-xs">
            <p className="font-medium">{product.seller.name}</p>
            <p className="text-muted-foreground">
              {product.seller.city}, {product.seller.country}
            </p>
          </div>

          <Badge className="ml-auto" variant="secondary">
            B2B
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
