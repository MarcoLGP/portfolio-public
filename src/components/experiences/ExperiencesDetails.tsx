import ExperiencesDetailsModule from "./ExperiencesDetailsModule";
import styles from "../../../styles/Experiences.module.css"

interface ExperiencesDetailsProps {
    menuSelected: number
}

export default function ExperiencesDetails({ menuSelected }: ExperiencesDetailsProps) {

    return (
        <div className={styles.experiences_details}>
            {menuSelected === 0 &&
                <ExperiencesDetailsModule
                    content={<p>
                        Como auxiliar administrativo da Camocim Organic tenho a oportunidade de atuar em uma empresa referência mundial 
                        de qualidade de café, sendo o Jacu Bird Coffe nosso café mais popular, apreciado e conhecido por pessoas do mundo 
                        inteiro. <br />
                        Tenho a responsabilidade de atuar em 3 sistemas sendo eles: Iapp, Omie e Loja integrada. <br />
                        Fatura de notas fiscais de acordo as normas brasileiras na plataforma do Omie.<br />
                        Manufatura de pedidos na plataforma do Iapp.<br />
                        Administrar os pedidos no nosso site pela plataforma da Loja Integrada.<br />
                        Atendimento aos clientes nacionais e internacionais via WhatsApp e presencial.<br />
                        Despacho de pedidos através de transportadoras para o Brasil todo.
                    </p>}
                    title="Auxiliar Administrativo"
                    date="Jul 2022 - Atual"
                    subtitle="Camocim organic" />}
            {menuSelected === 1 &&
                <ExperiencesDetailsModule
                    content={<p>
                        Como assistente de informática voltei a ter interesse na área da tecnologia, retomando meus estudos em agosto de 2021. <br />
                        Atuei reparando peças de computadores, notebooks, nobreaks, celulares e impressoras. <br />
                        Além de prestar serviço de reparo, prestei atendimento ao público de forma presencial e atendi chamados em empresas, domicílios e hospitais. <br />
                        Ainda atuando como assistente de informática desenvolvi meu primeiro projeto sendo ele um app para celular integrado com um programa desktop, visando solucionar os problemas da empresa sendo eles: impressão de ficha de entrada, sistema interno de fichas de entrada em aberto e fechada, cadastro de produtos em estoque através de leitura de código de barras, comprovante de venda e orçamentos.
                    </p>}
                    title="Assistente de Informática"
                    date="Fev 2020 - Jul 2022"
                    subtitle="CTI Informática" />}
            {menuSelected === 2 &&
                <ExperiencesDetailsModule
                    content={<p>
                        Como fundador de uma pequena empresa digital absorvi experiência de como conduzir um negócio de produtos 
                        eletrônicos e coloquei fundamentos que estudei durante o curso técnico de administração no ensino médio em prática, 
                        uma experiência positiva que sem sobra de dúvidas levarei para a vida.
                    </p>}
                    title="Fundador"
                    date="Mar 2019 - Fev 2020"
                    subtitle="Mjota Store" />}
        </div>
    )

}