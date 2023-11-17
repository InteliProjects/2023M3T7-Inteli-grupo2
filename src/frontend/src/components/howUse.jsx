import Image from "next/image";

function HowUse() {
    return (
        <div className="page-height flex justify-center items-center ml-10 mr-10">
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-center mb-2 rounded-tl-[10px] rounded-tr-[10px] p-3">
                        <h1 className="text-[30px] font-bold text-white">Como usar?</h1>
                    </div>
                    <div className="bg-blue-500 rounded-bl-[10px] rounded-br-[10px] p-7">
                        <h1 className="text-[25px] text-white text-center">Barra de pesquisa:</h1>
                        <p className="text-[20px] text-white">  • Utilize a barra de pesquisa para inserir o ID do usuário desejado.</p>
                        <p className="text-[20px] text-white">  • Obtenha instantaneamente a porcentagem de churn específica para cada usuário.</p>
                        <h1 className="text-[25px] text-white text-center mt-3">Análise de Features:</h1>
                        <p className="text-[20px] text-white">  • À direita, encontre uma lista das features que mais impactam a saída do cliente.</p>
                        <p className="text-[20px] text-white">  • Analise e observe como cada feature pode influenciar o churn.</p>
                    </div>
                </div>
                <div className="flex ml-auto items-center">
                    <Image src="/images/templateAbout.png" alt="Logo" width={670} height={70} className="max-height-100" />
                </div>
            </div>
        </div>
);
}
export default HowUse;