import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trash } from "lucide-react"
import Action from "./Action"
import { Button } from "../ui/button"

const OrderItem = ({ order }: any) => {
    return (
        <div className="border rounded-lg p-4 flex flex-col md:flex-row gap-4">

            {/* Product image */}
            <img
                src={order.product.image}
                alt={order.product.name}
                className="h-24 w-24 object-cover rounded"
            />

            {/* Info */}
            <div className="flex-1 space-y-2">

                <h2 className="font-semibold">
                    {order.product.name}
                </h2>

                <div className="text-sm text-muted-foreground">
                    <p>Commande : {order.id}</p>
                    <p>Date : {order.orderDate}</p>
                    <p>Livraison estimée : {order.deliveryDate}</p>
                </div>

                {/* Seller */}
                <div className="flex items-center gap-2 pt-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={order.seller.avatar} />
                        <AvatarFallback>
                            {order.seller.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                        <p className="font-medium">{order.seller.name}</p>
                        <p className="text-muted-foreground">
                            {order.seller.location}
                        </p>
                    </div>
                </div>

                {/* Address */}
                <div className="text-sm">
                    <p className="font-medium">Adresse de livraison</p>
                    <p>
                        {order.shippingAddress.street},{" "}
                        {order.shippingAddress.city},{" "}
                        {order.shippingAddress.country}
                    </p>
                </div>
            </div>

            {/* Price & actions */}
            <div className="flex flex-col justify-between items-end gap-3">
                <div className="text-right text-sm">
                    <p>{order.quantity} unités</p>
                    <p>{order.unitPrice} € / unité</p>
                    <p className="font-semibold">
                        {(order.quantity * order.unitPrice).toFixed(2)} €
                    </p>
                </div>

                <div className="flex gap-2">
                    {/* <Action label="Modifier" /> */}
                    <Button size="sm" variant="outline">
                        Modifier
                    </Button>
                    <Button size="sm" variant="outline">
                       Annuler
                    </Button>
                    <Button size="sm" variant="outline">
                        Changer adresse
                    </Button>
                   
                    <button className="text-red-500 cursor-pointer ml-4">
                        <Trash size={16} />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default OrderItem
