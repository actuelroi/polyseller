import PurchaseStats from "@/components/historique/PurchaseStats"
import MonthlyComparison from "@/components/historique/MonthlyComparison"
import PurchaseHistoryList from "@/components/historique/PurchaseHistoryList"
import Title from "@/components/commandes/Title"

const page = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      <Title title="Historique d’achat" />

      <PurchaseStats />
      <MonthlyComparison />
      <PurchaseHistoryList />
    </div>
  )
}

export default page
