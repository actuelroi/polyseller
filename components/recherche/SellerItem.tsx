"use client"

import { FaStar } from "react-icons/fa6"
import { MessageCircle, Store } from "lucide-react"
import Image from "next/image"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { ScrollArea } from "../ui/scroll-area"
import { useRouter } from "next/navigation"

/* ---------------- MOCK DATA ---------------- */

const suppliers = [
  {
    id: 1,
    name: "UNJong International",
    avatar: "https://github.com/maxleiter.png",
    country: "France",
    countryCode: "fr",
    city: "Paris",
    rating: 4.5,
    reviews: 200,
    products: 320,
    verified: true,
  },
  {
    id: 2,
    name: "Beijing Trade Co.",
    avatar: "https://github.com/shadcn.png",
    country: "China",
    countryCode: "cn",
    city: "Beijing",
    rating: 4.2,
    reviews: 145,
    products: 510,
    verified: false,
  },
  {
    id: 3,
    name: "Global Parts Ltd",
    avatar: "https://github.com/vercel.png",
    country: "Germany",
    countryCode: "de",
    city: "Berlin",
    rating: 4.8,
    reviews: 380,
    products: 210,
    verified: true,
  },
  {
    id: 4,
    name: "UNJong International",
    avatar: "https://github.com/maxleiter.png",
    country: "France",
    countryCode: "fr",
    city: "Paris",
    rating: 4.5,
    reviews: 200,
    products: 320,
    verified: true,
  },
]

/* ---------------- COMPONENT ---------------- */

const SellerItem = () => {

  const router = useRouter()
  return (
     <ScrollArea className="flex-1 px-2 hide-scrollbar h-60 mb-8">
    <div className="grid gap-3 pb-4" role="button" onClick={()=>router.push('/store')}>
      {suppliers.map((supplier) => (
        <Card key={supplier.id} className="p-0">
          <CardContent className="p-3 flex gap-3">
            
            {/* Avatar */}
            <Avatar className="h-12 w-12">
              <AvatarImage src={supplier.avatar} />
              <AvatarFallback>
                {supplier.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            {/* Info */}
            <div className="flex-1 space-y-1">
              
              {/* Name + Country */}
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm">
                  {supplier.name}
                </h3>

                {supplier.verified && (
                  <Badge variant="secondary">Vérifié</Badge>
                )}

                <Image
                  src={`/${supplier.countryCode}.svg`}
                  alt={supplier.country}
                  width={16}
                  height={16}
                />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < Math.floor(supplier.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }
                  />
                ))}
                <span>
                  {supplier.rating} ({supplier.reviews} avis)
                </span>
              </div>

              {/* Location */}
              <p className="text-xs text-muted-foreground">
                📍 {supplier.city}, {supplier.country}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs">
                <span>🧾 {supplier.products} produits</span>
                <span className="flex items-center gap-1">
                  <Store size={14} />
                  Stand actif
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="text-xs">
                  <Store size={14} className="mr-1" />
                  Voir le stand
                </Button>
                <Button size="sm" className="text-xs">
                  <MessageCircle size={14} className="mr-1" />
                  Contacter
                </Button>
              </div>

            </div>
          </CardContent>
        </Card>
      ))}

    </div>
    </ScrollArea>
  )
}

export default SellerItem
