import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div>
            <div className="w-full h-16">
            </div>
            <div className="z-10 flex fixed top-0 w-full items-center bg-gradient-to-r from-blue-500 to-blue-900 h-16">
                <Link href="/"> 
                    <img src="./images/logoSi.png" width={50} height={50} className="ml-3"/>
                </Link>
                <Link href="/">
                    <img src="./images/letra_logo.png" width={220} height={220}  className="ml-7"/>
                </Link>
                <div className="flex justify-around items-center w-full text-white text-[20px]">
                    <Link href="/">
                        <span className="font-semibold">Home</span>
                    </Link>
                    <Link href="/howUse">
                        <span className="font-semibold">Como usar?</span>
                    </Link>
                    <Link href="/contact">
                        <span className="font-semibold">Contato</span>
                    </Link>
                    <Link href="/about">
                        <span className="font-semibold">Sobre nós</span>
                    </Link>
                </div>
                <Link href="https://www.instagram.com/inteli_edu/">
                    <img src="./images/Instagramicon.png" width={35} height={35} className="mr-7"/>
                </Link>
                <Link href="https://www.facebook.com/inteliedu">
                    <img src="./images/Facebookicon.png" width={35} height={35} className="mr-5"/>
                </Link>
            </div>
        </div>
    )
}