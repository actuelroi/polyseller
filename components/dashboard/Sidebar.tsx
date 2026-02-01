'use client'

import { GrDeploy, GrHelpBook } from "react-icons/gr";

import SidebarItem from "./SidebarItem";

import { Plus } from "lucide-react";
import { FaBookBookmark } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { IoChatbubbleOutline, IoMoon, IoPeopleSharp } from "react-icons/io5";
import { CiBrightnessUp } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { PiStarFourBold } from "react-icons/pi";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  className?: string;
};

const Sidebar = ({className}:Props) => {
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
      href: 'Analytic',
      icon: GoGraph
    },
    {
      title: 'Aide&Support',
      href: '/help',
      icon: GrHelpBook
    },
    {
      title: 'Transaction',
      href: '/Transactions',
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
  return (
   <aside className={cn(" left-0 top-12 h-[calc(100vh-3rem)] md:w-50 border-r bg-background overflow-y-scroll p-3 w-full",className) }>
      <div className="flex flex-col p-3 gap-4">
        <div className="flex items-center justify-start w-full">
          <Link href={'/dashboard'}>

          <Button className="flex items-center justify-center gap-2 rounded-lg border  py-2 text-sm 
          font-medium transition-colors w-full hover:bg-muted cursor-pointer" variant={'ghost'} size={'lg'}>
            <Plus className="w-4 h-4" />
            <span>Dashboard </span> 
          </Button>
          </Link>
          
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
    </aside>
  )
}

export default Sidebar