'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Nav = () => {
    
    const pathName = usePathname();
    return (
        <div className='w-full fixed top-0  bg-white flex items-center justify-between p-4' >
            <div className='font-bold text-2xl' >
                🌎Travel Guide
            </div>
            <div  >
                <ul className='flex items-center gap-5' >
                    <Link href={"/"} className={pathName==='/'?" text-sky-400 " : ""} >
                        <li>Home</li>
                    </Link>
                    <Link href={"/destination"}className={pathName==='/destination'?" text-sky-400 " : ""} >
                        <li>Destination</li>
                    </Link>
                    <Link href={"/contact"}className={pathName==='/contact'?" text-sky-400 " : ""} >
                        <li>Contact</li>
                    </Link>

                </ul>
            </div>
        </div>
    )
}

export default Nav