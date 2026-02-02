"use client"

import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { FaStar } from "react-icons/fa6"

const SellerInfo = () => {
  const router= useRouter()
  return (
    <div className="border rounded-lg p-6 space-y-4 grid grid-cols-1 md:grid-cols-2">
     <div className="">

      <h2 className="text-xl font-semibold">
        Informations sur le vendeur
      </h2>

      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://github.com/maxleiter.png" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>

        <div>
          <p className="font-medium">UNJong International</p>
          <p className="text-sm text-muted-foreground">
            Paris, France
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1 text-sm">
        <FaStar className="text-yellow-500" />
        <span>4.6 (200 avis)</span>
      </div>

      <div className="text-sm space-y-1">
        <p>✔ Fournisseur vérifié</p>
        <p>✔ 5 ans d’expérience</p>
        <p>✔ Réponse moyenne : &lt; 24h</p>
      </div>

      <Button variant="outline" onClick={()=>router.push('/store')}>
        Contacter le vendeur
      </Button>

     </div>
     <div>
      <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">
       Livraison estimé
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <li><strong>Delai</strong> 7-10 jours</li>
        <li><strong>Date</strong> 28 janvier</li>
        
      </ul>
    </div>
     </div>
    </div>
  )
}

export default SellerInfo
