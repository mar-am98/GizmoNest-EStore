import React, { Suspense } from 'react'
import Container from '../global/Container';
import Logo from './Logo';
import NavSearch from './NavSearch';
import CartButton from './CartButton';
import DarkMode from './DarkMode';
import LinksDropdown from './LinksDropdown';


function NavBar() {
  return (
    <nav className='border-b'>
          <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-6'>
             <Logo />
             <Suspense>
               <NavSearch />
             </Suspense>

             <div className='flex gap-4 items-center'>
                <CartButton />
                <DarkMode />
                <Suspense fallback={<div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />}>
                  <LinksDropdown />
                </Suspense>
             </div>
          </Container>
     </nav>
  )
}

export default NavBar