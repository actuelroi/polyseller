import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

const ProductInfo = () => {
  return (
    <div className="flex h-full flex-col justify-between">
    
        <Badge>B2B</Badge>

        <h1 className="text-2xl font-bold">
          Pantalon pour homme – Coton premium
        </h1>

        <p className="text-muted-foreground">
          Pantalon confortable et résistant, idéal pour la vente en gros.
          Convient aux marques, distributeurs et revendeurs.
        </p>

        <p className="text-3xl font-bold text-primary">
          4.00 € <span className="text-sm font-normal">/ unité</span>
        </p>

        {/* Options */}
        <div className="space-y-3">
          <div className="gap-4">
            <p className="text-sm font-medium mb-3">Couleurs</p>
            <div className="flex gap-4  ">
              <Button variant="outline" size="sm">Noir</Button>
              <Button variant="outline" size="sm">Bleu</Button>
              <Button variant="outline" size="sm">Gris</Button>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-3">Tailles</p>
            <div className="flex  gap-4">
              <Button variant="outline" size="sm">S</Button>
              <Button variant="outline" size="sm">M</Button>
              <Button variant="outline" size="sm">L</Button>
              <Button variant="outline" size="sm">XL</Button>
            </div>
          </div>

          <div className="gap-4 flex flex-col">
            <p className="text-sm font-medium">Quantité (MOQ)</p>
            <p className="text-sm">Minimum : 100 unités</p>
            <div className="flex  gap-4">
              <Button variant="outline" size="sm">100</Button>
              <Button variant="outline" size="sm">200</Button>
              <Button variant="outline" size="sm">300</Button>
              <Button variant="outline" size="sm">400</Button>
            </div>
          </div>
        </div>
    

      {/* Button sticks to bottom */}
      <Button size="lg" className="w-full mt-6">
        Ajouter au panier
      </Button>
    </div>
  )
}

export default ProductInfo
