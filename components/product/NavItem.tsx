

import Link from "next/link"


interface Props {
    title: string;
    href: string

}


const NavItem = ({ href, title }: Props) => {
    return (
        <Link
            href={href}
            className="text-gray-600 dark:text-gray-300 hover:font-bold  font-medium text-sm"
        >
            {title}
        </Link>
    )
}

export default NavItem