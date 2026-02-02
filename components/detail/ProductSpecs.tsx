const ProductSpecs = () => {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold">
        Caractéristiques du produit
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <li><strong>Matière :</strong> 100% coton</li>
        <li><strong>Poids :</strong> 320 g</li>
        <li><strong>Coupe :</strong> Droite</li>
        <li><strong>Saisons :</strong> Printemps / Été</li>
        <li><strong>Tailles :</strong> S à XL</li>
        <li><strong>Certifications :</strong> OEKO-TEX</li>
        <li><strong>Origine :</strong> Chine</li>
        <li><strong>Délai de production :</strong> 7–10 jours</li>
      </ul>
    </div>
  )
}

export default ProductSpecs
