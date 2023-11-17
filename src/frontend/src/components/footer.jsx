import Link from "next/link";
import Image from "next/image";

function Footer() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-white items-center pb-3">
            <div className="flex justify-around p-5">
                <div>
                    <h1 className="text-[30px] font-bold">Pages</h1>
                        <div className="pt-3 pb-3 hidden md:block">
                            <hr className="px-10" />
                        </div>
                        <div className="flex flex-col">
                            <Link href="/">
                            <span className="font-semibold">• Home</span>
                            </Link>
                            <Link href="/about">
                                <span className="font-semibold">• About</span>
                            </Link>
                            <Link href="/contact">
                                <span className="font-semibold">• Contact</span>
                            </Link>
                            <Link href="/howUse">
                                <span className="font-semibold">• How to use</span>
                            </Link>
                        </div>
                </div>
                <div className="pt-10">
                <div className="flex justify-center pb-3">
                    <Link href="/">
                        <Image src="/images/letra_logo.png" alt="Logo" width={170} height={100} className="max-height-100" />
                    </Link>
                </div>
                    <div className="flex justify-center pb-3 gap-3">
                        <div className='flex items-center gap-5 mr-5 ml-5'>
                            <div>
                                <Link href="/">
                                    <Image src="/images/logoSi.png" alt="Logo" width={52} height={52} className="max-height-100" />
                                </Link>
                            </div>
                            <div>
                                <Link href="https://www.instagram.com/inteli_edu/">
                                    <Image src="/images/Instagramicon.png" alt="Logo" width={37} height={37} />
                                </Link>
                            </div>
                            <div>
                                <Link href="https://www.facebook.com/inteliedu">
                                    <Image src="/images/Facebookicon.png" alt="Logo" width={37} height={37} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <p className="text-center">@2023 Developed and designed by Sinapse</p>
                </div>
                <div>
                    <h1 className="text-[30px] font-bold">Contact</h1>
                        <div className="pt-3 pb-3 hidden md:block">
                            <hr className="px-10" />
                        </div>
                        <div className="flex flex-col">
                            <Link href="https://github.com/2023M3T7-Inteli/grupo2">
                                <span className="font-semibold">• GitHub</span>
                            </Link>
                            <Link href="https://www.inteli.edu.br/">
                                <span className="font-semibold">• Inteli</span>
                            </Link>
                            <Link href="https://www.instagram.com/inteli_edu/">
                                <span className="font-semibold">• Instagram</span>
                            </Link>
                            <Link href="https://www.facebook.com/inteliedu">
                                <span className="font-semibold">• Facebook</span>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;