"use client"

import { FaStar } from "react-icons/fa6"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { MessageCircle, MapPin, Store } from "lucide-react"
import { useRouter } from "next/navigation"

const StoreHeader = () => {
  const router = useRouter()
  return (
    <div className="rounded-xl overflow-hidden border bg-white">

      {/* Cover / Banner */}
      <div
        className="h-56 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1526947425960-945c6e72858f)",
        }}
      />

      {/* Content */}
      <div className="px-6 py-4 flex flex-col md:flex-row gap-6">

        {/* Seller Avatar */}
        <div className="-mt-16">
          <div className="h-32 w-32 rounded-xl border-4 border-white overflow-hidden bg-white">
            <img
              src="https://github.com/maxleiter.png"
              alt="Seller logo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Seller Info */}
        <div className="flex-1 space-y-3">

          {/* Name + badges */}
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-bold">
              UNJong International
            </h1>
            <Badge variant="secondary">Vérifié</Badge>
            <Badge>B2B</Badge>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin size={14} />
            <span>Paris, France</span>
            <div className="flex items-center gap-1 text-xs ml-2">
                      <FaStar className="text-yellow-500" />
                      <span>
                        4.6 (500 avis)
                      </span>
                    </div>
          </div>

          {/* Bio */}
          <p className="text-sm max-w-2xl">
            Fournisseur international spécialisé dans les vêtements et produits
            de consommation. Livraison rapide et qualité certifiée pour les
            revendeurs et marques.
          </p>

          {/* Store stats */}
          <div className="flex flex-wrap gap-4 text-sm">
            <span>🚚 Livraison : 7–10 jours</span>
            <span>⏱ Réponse moyenne : 1 heure</span>
            <span>🏪 2 ans d’activité</span>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="outline">Pantalons homme</Badge>
            <Badge variant="outline">Pantalons femme</Badge>
            <Badge variant="outline">Mode & textile</Badge>
            <Badge variant="outline">Électroménager</Badge>
          </div>
        </div>

        {/* Actions */}
        <div className="flex md:flex-col gap-2 md:items-end">
          <Button onClick={()=>router.push('/chat')}>
            <MessageCircle size={16} className="mr-1" />
            Contacter
          </Button>
          <Button variant="outline">
            <Store size={16} className="mr-1" />
            Voir les produits
          </Button>
        </div>
      </div>
    </div>
  )
}

export default StoreHeader
