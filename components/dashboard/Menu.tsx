
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './../ui/sheet'
import { MenuIcon } from 'lucide-react'
import Logo from '../Logo'
import Sidebar from './Sidebar'

const Menu = () => {
  return (
    <Sheet  >
  <SheetTrigger>
    <MenuIcon className='md:hidden w-5 h-5 mr-5 '/>
  </SheetTrigger>
  <SheetContent className="p-0 z-100 " side="left">
    <SheetHeader>
      <SheetTitle>
        <Logo/>
      </SheetTitle>
    </SheetHeader>
     <Sidebar/>
  </SheetContent>
</Sheet>
  )
}

export default Menu