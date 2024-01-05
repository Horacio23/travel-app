import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Button from "./Button";

const Sidebar = () => {
    return ( 
        <div>
            <ul className="flex flex-col h-full gap-2 my-8">
                {NAV_LINKS.map((link) =>(
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexStart cursor-pointer pb-1.5 transition-all hover:font-bold active:font-bold active:bold-16 hover:border-r-2 hover:border-r-gray-800">
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className="flexCenter">
                <Button
                    type="button"
                    title="Sign In"
                    icon="/user.svg"
                    variant="btn_dark_green"
                    full
                />
            </div>
        </div>
     );
}
 
export default Sidebar;