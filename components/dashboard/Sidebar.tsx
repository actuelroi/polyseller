'use client'

import { GrDeploy, GrHelpBook } from "react-icons/gr";

import SidebarItem from "./SidebarItem";

import { ArrowRightFromLine, Plus } from "lucide-react";
import { FaBookBookmark } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { IoChatbubbleOutline, IoMoon, IoPeopleSharp } from "react-icons/io5";
import { CiBrightnessUp } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { PiStarFourBold } from "react-icons/pi";
import { Button } from "../ui/button";
import Link from "next/link";
import { useSidebar } from "@/hooks/useSidebar";
import Hint from "../Hint";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";


const sidebarNavItem = [
  {
    title: 'Recherche',
    href: '/recherche',
    icon: GrDeploy

  },
  {
    title: 'Mes commandes',
    href: '/commandes',
    icon: FaBookBookmark

  },

  {
    title: 'Chat',
    href: '/chat',
    icon: IoChatbubbleOutline
  },

  {
    title: 'Demandes de devis',
    href: '/devis',
    icon: PiStarFourBold

  },
  {
    title: "Historique d'achats",
    href: 'historique',
    icon: GoGraph
  },
  {
    title: 'Aide&Support',
    href: '/help',
    icon: GrHelpBook
  },
  {
    title: 'Transaction',
    href: '/transactions',
    icon: IoMoon
  },
  {
    title: 'Organisation',
    href: '/organisation',
    icon: IoPeopleSharp
  },

  {
    title: 'Change Mode',
    href: '/change-mode',
    icon: CiBrightnessUp
  },

]




type Props = {
  className?: string;

};

const Sidebar = ({ className }: Props) => {
  const pathname = usePathname();
  const isMobile = useMediaQuery('(max-width: 1024px)')

  const { isCollapsed, open, close } = useSidebar()

  const label = isCollapsed ? 'expand' : 'collapse'


  return (
    <aside className={cn(" left-0 top-12 h-[calc(100vh-3rem)]  border-r bg-background overflow-y-scroll p-3 w-full transition-all duration-100 ease-in-out",
      className,
      isCollapsed ? 'md:w-16' : 'md:w-50'

    )}>

      {isCollapsed ? (
        <>
          <div className='mb-2 hidden w-full items-center justify-center pt-4 lg:flex'>
            <Hint label={label} side='right' asChild>
              <Button onClick={() => open()} variant='ghost' size='icon'>
                <ArrowRightFromLine className='size-4' />
              </Button>
            </Hint>
          </div>
          <div className="flex flex-col p-1 gap-4">
            {
              sidebarNavItem.map((item, index) => (
                <Hint label={item.title} side='right' asChild key={index}>
                  <Button className={cn('h-11 w-full justify-center', pathname === item.href && 'bg-accent')}
                    variant='ghost'
                    asChild
                  >
                    <Link href={item.href}>
                      <item.icon className='mr-0 size-5' />
                    </Link>
                  </Button>
                </Hint>
              ))
            }
          </div>
        </>
      ) : (
        <div className="flex flex-col p-1 gap-4">

          <div className="flex items-center justify-between gap-1 w-full">
            <Link href={'/dashboard'}>
              <Button className="flex items-center justify-center gap-2 rounded-lg border  py-2 text-sm 
          font-medium transition-colors w-full hover:bg-muted cursor-pointer" variant={'ghost'} size={'lg'}>
                <Plus className="w-4 h-4" />
                <span>Dashboard </span>
              </Button>
            </Link>
            {
              !isMobile && (
                <Hint label={label} side='right' asChild >
                  <Button onClick={() => close()} variant='ghost' size='icon' >
                    <ArrowRightFromLine className='size-4' />
                  </Button>
                </Hint>
              )
            }

          </div>
          {
            sidebarNavItem.map((item, index) => (
              <SidebarItem
                key={index}
                title={item.title}
                href={item.href}
                icon={item.icon}
              />
            ))
          }

        </div>
      )}





    </aside>
  )
}

export default Sidebar