import ProductCard from "./ProductCard"

const products = [
  {
    id: 1,
    name: "Pantalon pour homme",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d",
    price: "4.00 €",
    colors: 4,
    sizes: 4,
    sold: 420,
    moq: 100,
    leadTime: "7–10 jours",
    rating: 4.6,
    reviews: 180,
    seller: {
      name: "UNJong International",
      avatar: "https://github.com/maxleiter.png",
      city: "Paris",
      country: "France",
      countryCode: "fr",
    },
  },
  {
    id: 2,
    name: "Chemise coton premium",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    price: "5.80 €",
    colors: 6,
    sizes: 5,
    sold: 310,
    moq: 200,
    leadTime: "10–14 jours",
    rating: 4.3,
    reviews: 95,
    seller: {
      name: "Beijing Trade Co.",
      avatar: "https://github.com/shadcn.png",
      city: "Beijing",
      country: "Chine",
      countryCode: "cn",
    },
  },
  {
    id: 3,
    name: "Pantalon pour homme",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d",
    price: "4.00 €",
    colors: 4,
    sizes: 4,
    sold: 420,
    moq: 100,
    leadTime: "7–10 jours",
    rating: 4.6,
    reviews: 180,
    seller: {
      name: "UNJong International",
      avatar: "https://github.com/maxleiter.png",
      city: "Paris",
      country: "France",
      countryCode: "fr",
    },
  },
  {
    id: 4,
    name: "Chemise coton premium",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    price: "5.80 €",
    colors: 6,
    sizes: 5,
    sold: 310,
    moq: 200,
    leadTime: "10–14 jours",
    rating: 4.3,
    reviews: 95,
    seller: {
      name: "Beijing Trade Co.",
      avatar: "https://github.com/shadcn.png",
      city: "Beijing",
      country: "Chine",
      countryCode: "cn",
    },
  },
  {
    id: 5,
    name: "Pantalon pour homme",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d",
    price: "4.00 €",
    colors: 4,
    sizes: 4,
    sold: 420,
    moq: 100,
    leadTime: "7–10 jours",
    rating: 4.6,
    reviews: 180,
    seller: {
      name: "UNJong International",
      avatar: "https://github.com/maxleiter.png",
      city: "Paris",
      country: "France",
      countryCode: "fr",
    },
  },
  {
    id: 6,
    name: "Chemise coton premium",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    price: "5.80 €",
    colors: 6,
    sizes: 5,
    sold: 310,
    moq: 200,
    leadTime: "10–14 jours",
    rating: 4.3,
    reviews: 95,
    seller: {
      name: "Beijing Trade Co.",
      avatar: "https://github.com/shadcn.png",
      city: "Beijing",
      country: "Chine",
      countryCode: "cn",
    },
  },
  {
    id: 7,
    name: "Chemise coton premium",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    price: "5.80 €",
    colors: 6,
    sizes: 5,
    sold: 310,
    moq: 200,
    leadTime: "10–14 jours",
    rating: 4.3,
    reviews: 95,
    seller: {
      name: "Beijing Trade Co.",
      avatar: "https://github.com/shadcn.png",
      city: "Beijing",
      country: "Chine",
      countryCode: "cn",
    },
  },
]

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid
