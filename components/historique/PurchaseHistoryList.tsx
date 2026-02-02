import PurchaseHistoryItem from "./PurchaseHistoryItem"

const history = [
  {
    id: "CMD-2024-001",
    product: "Pantalon pour homme",
    date: "12 Jan 2024",
    amount: 1200,
    status: 4,
  },
  {
    id: "CMD-2024-002",
    product: "Chemise coton",
    date: "18 Jan 2024",
    amount: 860,
    status: 3,
  },
]

const PurchaseHistoryList = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">
        Commandes récentes
      </h2>

      {history.map((order) => (
        <PurchaseHistoryItem key={order.id} order={order} />
      ))}
    </div>
  )
}

export default PurchaseHistoryList
