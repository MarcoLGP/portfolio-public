import styles from "../../../styles/Projects.module.css"
import ProjectsModule from "./ProjectsModule"
import dashboard_img from "../../../public/dashboard.png"
import mobile from "../../../public/mobile.jpg"
import desktop from "../../../public/desktop.png"
import camocim_project_img from "../../../public/camocim-project-image.png"
import { GrNode } from "react-icons/gr"
import { RiReactjsLine } from "react-icons/ri"
import { SiNextdotjs } from "react-icons/si"
import { IoLogoElectron } from "react-icons/io5"

export default function Projects() {

    return (
        <section id="projetos" className={`${styles.projects_container}`}>
            <div className={styles.projects_content_container}>
                <h2>Projetos</h2>
                <div className={styles.projects_modules_container}>
                    <ProjectsModule
                        title="CTI Informática App"
                        gitRepoLink="https://github.com/MarcoLGP/cti-app-public"
                        text="Projeto desenvolvido em React Native para gestão de estoque, controle de fichas de entrada, venda de produtos e serviços. 
                        Integrado com a versão em desktop, em tempo real."
                        img={mobile.src}
                        alt="Imagem de ilustração do projeto 2"
                        icon1={<RiReactjsLine color="#27AE60" size={28} />} />
                    <ProjectsModule
                        title="CTI Informática Desktop"
                        gitRepoLink="https://github.com/MarcoLGP/cti-desktop-public"
                        text="Projeto desenvolvido em ReactJS/ElectronJS para complementar/adaptar a versão mobile para desktop, 
                        ampliando funcionalidades e acrescentando novas. "
                        img={desktop.src}
                        alt="Imagem de ilustração do projeto 3"
                        icon1={<IoLogoElectron color="#27AE60" size={28} />}
                        icon2={<RiReactjsLine color="#27AE60" size={28} />}
                    />
                </div>
                <div className={styles.projects_modules_container}>
                    <ProjectsModule
                        title="Dashboard social"
                        gitRepoLink="https://github.com/MarcoLGP/dashboard-public"
                        text="Projeto desenvolvido em NextJs no front end e NodeJs no backend, simulando uma pequena comunidade, para por em prática
                        conhecimentos teóricos."
                        img={dashboard_img.src}
                        alt="Imagem de ilustração do projeto 1"
                        icon1={<SiNextdotjs color="#27AE60" size={28} />}
                        icon2={<GrNode color="#27AE60" size={28} />} />
                    <ProjectsModule
                        title="Camocim controle de lotes"
                        gitRepoLink="https://github.com/MarcoLGP/camocim-controle-lotes-public"
                        img={camocim_project_img.src}
                        alt="Imagem de ilustração do projeto 4"
                        text="Projeto que possui o intuito de organizar de forma eficiente os lotes e os pedidos de cafés, 
                        com integração do sistema ERP do Omie e Loja integrada."
                        icon1={<IoLogoElectron color="#27AE60" size={28} />}
                        icon2={<SiNextdotjs color="#27AE60" size={28} />}
                    />
                </div>
            </div>
        </section>

    )

}