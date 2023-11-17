import Image from "next/image";
import Link from "next/link";

function Contact() {
    return (
        <div className="page-height flex justify-center items-center ml-10 mr-10">
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-center mb-2 rounded-tl-[10px] rounded-tr-[10px] p-3">
                        <h1 className="text-[30px] font-bold text-white">Nossa equipe:</h1>
                    </div>
                    <div className="pb-10">
                        <div className="flex justify-center pb-3 gap-3">
                            <div className='flex items-center gap-5 mr-5 ml-5'>
                                <div>
                                    <Link href="https://www.linkedin.com/in/marco-antonio-rizzi-meneguetti-620b56257/">
                                        <Image src="/images/Marco.png" alt="Logo" width={180} height={180} className="max-height-100" />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="https://www.linkedin.com/in/kaiane-souza-cordeiro-696076268/">
                                        <Image src="/images/Kaiane.png" alt="Logo" width={180} height={180} />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="https://www.linkedin.com/in/joselitojunior/">
                                        <Image src="/images/Joselito.png" alt="Logo" width={180} height={180} />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="https://www.linkedin.com/in/gabriel-pelinsari-13185b1a0/">
                                        <Image src="/images/Gabriel.png" alt="Logo" width={180} height={180} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center pb-3 gap-3">
                            <div className='flex items-center gap-5 mr-5 ml-5'>
                                <div>
                                    <Link href="https://www.linkedin.com/in/marcelo-sitton-878248271/">
                                        <Image src="/images/Marcelo.png" alt="Logo" width={180} height={180} className="max-height-100" />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="https://www.linkedin.com/in/eduardo-hos/">
                                        <Image src="/images/Eduardo.png" alt="Logo" width={180} height={180} />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="https://www.linkedin.com/in/cec%C3%ADlia-alonso-gon%C3%A7alves-3aa4bb271/">
                                        <Image src="/images/Cecilia.png" alt="Logo" width={180} height={180} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-500 rounded-t-[10px] rounded-b-[10px] p-7 text-center justify-around flex flex-col">
                    <div className="text-white">
                        <h1 className="text-[30px] font-bold pb-5">Nossa localização:</h1>
                        <p className="font-bold">UM ECOSSISTEMA DE INOVAÇÃO NA CIDADE UNIVERSITÁRIA EM SÃO PAULO.</p>
                        <p>Av. Professor Almeida Prado, 520</p>
                        <p>Butantã, 05508-901</p>
                        <p>São Paulo – SP – Brasil</p>
                    </div>
                    <div className="text-white">
                        <h1 className="text-[30px] font-bold pb-5">Contato comercial:</h1>
                        <div className="flex flex-col gap-3 items-center">
                            <div className="flex items-center gap-3">
                                <Link href="https://www.instagram.com/inteli_edu/">
                                    <img src="./images/Instagramicon.png" width={35} height={35} className=""/>
                                </Link>
                                <p>@inteli_edu</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Link href="https://www.facebook.com/inteliedu">
                                    <img src="./images/Facebookicon.png" width={35} height={35} className=""/>
                                </Link>
                                <p>Inteli - Instituto de Tecnologia e Liderança</p>
                            </div>
                            <p>E-mail: inteli@inteli.edu.br</p>
                            <p>Tel: +55 11 97659-8258</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;
