import Image from "next/image"
import { Button } from "../ui/button"
import { IoFilter } from "react-icons/io5"


const SellerCountry = () => {

    const items = [
        {
            src: '/fr.svg',
            href: 'seller-fr'
        },
        {
            src: '/cn.svg',
            href: 'seller-cn'
        },
        {
            src: '/br.svg',
            href: 'seller-br'
        },
        {
            src: '/usa.svg',
            href: 'seller-usa'
        },
    ]


    return (

        <div className="flex p-2 gap-2 items-center justify-between">
            {
                items.map((item, i) => (
                    <Button variant={'link'} size={'icon'} className="cursor-pointer" key={i}>
                        <Image
                            width={20}
                            height={20}
                            src={item.src}
                            alt={item.href} />
                    </Button>
                ))
            }

            <Button size={'icon'} variant={'outline'} className="cursor-pointer">
                <IoFilter />
            </Button>

        </div>

    )
}

export default SellerCountry
