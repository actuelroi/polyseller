const comparison = {
  currentMonth: {
    label: "Ce mois-ci",
    amount: 4200,
  },
  lastMonth: {
    label: "Mois dernier",
    amount: 3100,
  },
}

const MonthlyComparison = () => {
  const growth =
    ((comparison.currentMonth.amount -
      comparison.lastMonth.amount) /
      comparison.lastMonth.amount) *
    100

  return (
    <div className="border rounded-lg p-6 space-y-4 max-w-3xl">

      <h2 className="text-lg font-semibold">
        Comparaison mensuelle
      </h2>

      {/* Values */}
      <div className="flex justify-between text-sm">
        <span>{comparison.currentMonth.label}</span>
        <span>{comparison.currentMonth.amount} €</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>{comparison.lastMonth.label}</span>
        <span>{comparison.lastMonth.amount} €</span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-muted rounded-full">
        <div
          className="h-2 bg-primary rounded-full"
          style={{
            width: `${Math.min(
              (comparison.currentMonth.amount /
                comparison.lastMonth.amount) *
                100,
              100
            )}%`,
          }}
        />
      </div>

      {/* Growth */}
      <p
        className={`text-sm font-medium ${
          growth >= 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {growth >= 0 ? "▲" : "▼"} {growth.toFixed(1)}% par rapport au mois dernier
      </p>

    </div>
  )
}

export default MonthlyComparison
