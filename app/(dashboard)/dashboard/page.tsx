import {
  FaUsers,
  FaHandshake,
  FaAddressBook,
  FaComments,
  FaBoxOpen,
  FaTags,
  FaWarehouse,
  FaBullhorn,
  FaCreditCard,
  FaFileInvoice,
 
  FaMoneyCheckAlt,
  FaPercent,
  FaClock,
} from "react-icons/fa"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaRepeat } from "react-icons/fa6"
import Title from "@/components/commandes/Title"

const sections = [
  {
    title: "Relations & réseau",
    items: [
      { label: "Vendeurs", icon: FaUsers },
      { label: "Partenaires", icon: FaHandshake },
      { label: "Contacts", icon: FaAddressBook },
      { label: "Conversations actives", icon: FaComments },
    ],
  },
  {
    title: "Produits & services",
    items: [
      { label: "Catalogue", icon: FaBoxOpen },
      { label: "Produits", icon: FaBoxOpen },
      { label: "Services", icon: FaTags },
      { label: "Prix & tarifs", icon: FaMoneyCheckAlt },
      { label: "Disponibilité", icon: FaWarehouse },
      { label: "Promotions", icon: FaBullhorn },
    ],
  },
  {
    title: "Paiement & facturation",
    items: [
      { label: "Paiements", icon: FaCreditCard },
      { label: "Factures", icon: FaFileInvoice },
      { label: "Abonnements", icon: FaRepeat },
      { label: "Moyens de paiement", icon: FaMoneyCheckAlt },
      { label: "Commissions", icon: FaPercent },
      { label: "Règlements en attente", icon: FaClock },
    ],
  },
]

const DashboardNav = () => {
  return (
    <>
     <div className="items-center flex justify-center p-4">
        <h1 className="font-semibold text-2xl">Ici point de depart</h1>
     </div>
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
       
      {sections.map((section) => (
          <Card key={section.title}>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">
              {section.title}
            </h2>

            <div className="space-y-2">
              {section.items.map((item) => (
                  <Button
                  key={item.label}
                  variant="ghost"
                  className="w-full justify-start gap-2 text-sm"
                  >
                  <item.icon className="text-muted-foreground" />
                  {item.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
      </>
  )
}

export default DashboardNav
