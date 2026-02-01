

import Link from "next/link";
import NavItem from "./NavItem";
import { FaArrowTrendUp } from "react-icons/fa6";
import { ChevronDown } from "lucide-react";


const Navbar = () => {

    const items = [
        {
            title: 'Fashion',
            href: '/'
        },
        {
            title: 'Pour enfant',
            href: '/'
        },
        {
            title: 'Animaux',
            href: '/'
        },
        {
            title: 'Accesoires',
            href: '/'
        },
        {
            title: 'Maison & Jardin',
            href: '/'
        },
        {
            title: 'Electro menager',
            href: '/'
        },
    ]

    return (
        <section className="bg-gray-50 border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 ">
            <div className="overflow-x-auto hide-scrollbar max-w-208 ">
                <div className="hidden md:block ">
                    <div className="flex items-center gap-6 py-3 whitespace-nowrap">
                        <Link href={'/'} className="flex items-center gap-2  font-semibold text-sm">
                            <FaArrowTrendUp className="w-4 h-4" />
                            <span>Best seller</span>
                        </Link>
                  
                        <div className="flex items-center md:gap-10">
                            {
                                items.map((item, i) => (
                                    <NavItem
                                        key={i}
                                        href={item.href}
                                        title={item.title}
                                    />
                                ))
                            }
                        </div>

                        <Link href={'/'} className="flex items-center text-sm gap-1 text-gray-600 dark:text-gray-300 hover:font-bold  font-medium">
                            <span>Plus</span>
                            <ChevronDown className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Navbar