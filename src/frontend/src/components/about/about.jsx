import styles from "./about.module.css";
import Image from "next/image";
import Link from "next/link";

function About() {
    return (
        <div className="flex">
            <div className={`${styles.main} page-height w-1/2`}>
                <h1 className={styles.h1}>Descrição</h1>
                <div className={styles.ps}>
                    <p className={styles.p}>Esta aplicação apresenta um modelo preditivo de Churn, que avalia a quantidade de clientes que deixam de fazer negócios, seja através do cancelamento de contratos ou da não renovação dos serviços. O modelo foi desenvolvido para analisar as causas da perda de clientes em empresas do setor energético. Todos os dados utilizados para criar o modelo foram fornecidos por fontes externas.</p>
                    <p className={styles.p}>A abordagem selecionada para a solução é fundamentada em Machine Learning, com uma linguagem de programação desempenhando um papel central. Isso viabilizou a criação de um modelo preditivo sólido e eficiente. Além disso, o modelo pode ser facilmente adaptado para uso em diferentes cenários no futuro. Adicionalmente, o modelo processa e analisa os dados para antever o Churn dos clientes, fornecendo insights valiosos para orientar as estratégias de retenção."</p>
                </div>
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <Link href="https://github.com/2023M3T7-Inteli/grupo2">
                    <Image src="/images/git_img.png" alt="Logo" width={500} height={500} />
                </Link>
            </div>
        </div>
    )
}

export default About