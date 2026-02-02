'use client'

import OrderItem from "@/components/commandes/OrderItem"
import Title from "@/components/commandes/Title"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const orders = [
  {
    id: "CMD-2024-001",
    product: {
      name: "Pantalon pour homme",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d",
    },
    orderDate: "12 Jan 2024",
    deliveryDate: "20 Jan 2024",
    quantity: 300,
    unitPrice: 4,
    seller: {
      name: "UNJong International",
      avatar: "https://github.com/maxleiter.png",
      location: "Paris, France",
    },
    shippingAddress: {
      street: "12 rue de Commerce",
      city: "Lyon",
      country: "France",
    },
  },
  {
    id: "CMD-2024-002",
    product: {
      name: "Chemise coton",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    orderDate: "15 Jan 2024",
    deliveryDate: "25 Jan 2024",
    quantity: 200,
    unitPrice: 5.8,
    seller: {
      name: "Beijing Trade Co.",
      avatar: "https://github.com/shadcn.png",
      location: "Beijing, Chine",
    },
    shippingAddress: {
      street: "88 avenue Industrielle",
      city: "Marseille",
      country: "France",
    },
  },
]

const page = () => {
  const totalItems = orders.reduce((acc, o) => acc + o.quantity, 0)
  const totalPrice = orders.reduce(
    (acc, o) => acc + o.quantity * o.unitPrice,
    0
  )

  const router= useRouter()

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">

      <Title title="Mes commandes" />

      {/* Orders list */}
      <div className="space-y-4">
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>

      {/* Summary */}
      <div className="border rounded-lg p-4 space-y-2">
        <Title title="Résumé des commandes" />
        <p>{orders.length} commandes</p>
        <p>{totalItems} articles</p>
        <p className="font-semibold">
          Total : {totalPrice.toFixed(2)} €
        </p>
      </div>

      <Button size="lg" onClick={()=>router.push('/recherche')}>
        Continuer mes achats
      </Button>

    </div>
  )
}

export default page
