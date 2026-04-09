'use client'
import { Package, Search, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
    const pathname = usePathname()
    const showsearchBar = pathname === "/"

    return (
        <header className='sticky top-0 z-10 backdrop-blur w-full flex justify-between py-6 px-20 border-b border-athens-gray' >
            <Link href="/" className='flex gap-2' >
                <Package className='text-red-500' />
                <span>Cart-ssytem</span>
            </Link>
            <div className='flex gap-4 items-center' >
                {showsearchBar ? (<div className='relative' >
                    <Search className='absolute left-3  top-1/2 -translate-y-1/2 h-4 w-4 text-santas-gray' />
                    <input
                        className='outline-none w-80 border-athens-gray py-2 pl-8 rounded-md text-sm'
                        type="text" placeholder='search...' />
                </div>) : null}

                <Link href="/cart" className='relative'  >
                    <ShoppingBag className=' h-5 w-5' />
                </Link>
            </div>
        </header>
    )
}

export default Header
