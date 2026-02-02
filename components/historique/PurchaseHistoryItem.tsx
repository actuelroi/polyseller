import OrderProgress from "@/components/commandes/OrderProgress"

const PurchaseHistoryItem = ({ order }: any) => {
  return (
    <div className="border rounded-lg p-4 space-y-3">

      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium">{order.product}</p>
          <p className="text-sm text-muted-foreground">
            {order.id} • {order.date}
          </p>
        </div>

        <p className="font-semibold">
          {order.amount} €
        </p>
      </div>

      <OrderProgress currentStatus={order.status} />
    </div>
  )
}

export default PurchaseHistoryItem
