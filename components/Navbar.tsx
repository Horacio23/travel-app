import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"
import { useState } from "react"
import { 
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import Sidebar from "./Sidebar"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}/>
        </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) =>(
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:border-b-2 hover:border-b-gray-800">
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className="lg:flexCenter hidden">
                <Button
                    type="button"
                    title="Sign In"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </div>
        <div className="flex lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Image 
                        src="menu.svg"
                        alt="menu"
                        width={32}
                        height={32}
                        className="inline-block cursor-pointer lg:hidden"
                    />
                </SheetTrigger>
                <SheetContent>
                    <Sidebar />
                </SheetContent>
            </Sheet>
        </div>
    </nav>
  )
}

export default Navbar