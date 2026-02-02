const stats = [
  { label: "Total dépensé", value: "12 450 €" },
  { label: "Commandes", value: "24" },
  { label: "Articles achetés", value: "6 200" },
  { label: "Fournisseurs", value: "8" },
]

const PurchaseStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="border rounded-lg p-4 text-center"
        >
          <p className="text-sm text-muted-foreground">
            {stat.label}
          </p>
          <p className="text-xl font-semibold">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  )
}

export default PurchaseStats
