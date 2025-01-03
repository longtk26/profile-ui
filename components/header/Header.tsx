import Image from "next/image";
import Link from "next/link";
import { navigationList } from "./navigationList";

const Header = () => {
    return (
        <header className="px-6 w-full h-16 bg-white shadow-md rounded-xl">
            <div className="flex justify-between items-center max-w-6xl m-auto h-full">
                <nav>
                    <Link href="/" className="cursor-pointer">
                        <Image
                            src="/imgs/logo_dark.png"
                            width={50}
                            height={50}
                            alt="Logo"
                            className="rounded-full"
                        />
                    </Link>
                </nav>

                <ul className="flex space-x-8 text-lg">
                    {navigationList.map((navItem) => (
                        <li key={navItem.name} className="font-bold">
                            <Link href={navItem.href}>{navItem.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
