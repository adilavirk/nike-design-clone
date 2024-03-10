"use client"
import Image from "next/image"
import Link from "next/link"
import { navLinks } from "@/constants"
import { useState } from "react"

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleNavbar = () => {
        setIsOpen(!isOpen);

    }
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <Link href="/">
                    <Image
                        src="/assets/images/header-logo.svg"
                        alt="logo"
                        width={130}
                        height={29}

                    />
                </Link>
                <ul className={` md:flex flex-1 justify-center items-center gap-16 hidden`
                }>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <Link href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                                {item.label}
                            </Link>
                        </li>
                    ))}

                </ul>
                <div className="md:hidden block">
                    {isOpen ? (
                        <Image src="/assets/icons/cross-icon.svg" alt="Hamburger" width={25} height={25} onClick={toggleNavbar} />
                    ) : (<Image src="/assets/icons/hamburger.svg" alt="Hamburger" width={25} height={25} onClick={toggleNavbar} />)}
                    {isOpen && (
                        <div className="absolute z-20 w-full left-0 pt-2 min-h-screen flex justify-center items-center md:hidden bg-white">
                            <ul className='flex flex-col gap-8'> {/* Apply flex-col to create a column layout and add gap between items */}
                                {navLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="font-montserrat leading-normal text-3xl text-coral-red  hover:bg-coral-red hover:text-white w-full px-3 py-4 rounded-md" onClick={toggleNavbar}>
                                            {item.label}

                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>


            </nav>




        </header>

    )
}

export default Nav
