const Dashboard = () => {

    const items = [
        'Form', 'Checkout', 'CustomFeed'
    ]
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-3 p-4'>
                <div >
                    <h1>Relations & réseau</h1>
                    <div className="mt-8">
                        <p>Vendeurs</p>
                        <p>Partenaires </p>
                        <p> Contacts </p>

                        <p> Conversations actives</p>
                    </div>
                </div>
                <div className='border-r border-l'>
                    <h1>Produits & services</h1>
                    <div className="mt-8">
                        <p>Catalogue</p>
                        <p>Produits</p>
                        <p>Services</p>
                        <p>Prix & tarifs</p>
                        <p>Disponibilité</p>
                        <p> Promotions</p>
                    </div>
                </div>
                <div className='flex'>
                    <h1 className='justify-end'>Paiement & facturation</h1>
                    <div className="mt-8">
                       <p> Paiements</p>
                       <p> Factures</p>
                       <p> Abonnements</p>
                        <p>Moyens de paiement</p>
                        <p>Commissions</p>
                       <p> Règlements en attente</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
