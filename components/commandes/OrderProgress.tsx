interface OrderProgressProps {
  currentStatus: number // index in steps
}

const steps = [
  "Confirmée",
  "En production",
  "Expédiée",
  "En livraison",
  "Livrée",
]

const OrderProgress = ({ currentStatus }: OrderProgressProps) => {
  return (
    <div className="w-full max-w-xl">

      {/* Progress bar */}
      <div className="relative h-1 bg-muted rounded-full mb-3">
        <div
          className="absolute h-1 bg-primary rounded-full transition-all"
          style={{
            width: `${(currentStatus / (steps.length - 1)) * 100}%`,
          }}
        />
      </div>

      {/* Dots */}
      <div className="flex justify-between">
        {steps.map((step, index) => {
          const isCompleted = index <= currentStatus

          return (
            <div key={step} className="flex flex-col items-center text-center">
              
              <div
                className={`h-2 w-2 rounded-full border-2 ${
                  isCompleted
                    ? "bg-primary border-primary"
                    : "bg-background border-muted"
                }`}
              />

              <span
                className={`mt-2 text-xs ${
                  isCompleted ? "font-medium" : "text-muted-foreground"
                }`}
              >
                {step}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OrderProgress
