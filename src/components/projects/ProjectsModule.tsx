import { Row, Spacer } from "@nextui-org/react"
import Link from "next/link"
import styles from "../../../styles/Projects.module.css"

interface ProjectsModuleProps {
    title: string,
    text?: string,
    img: string,
    alt: string,
    gitRepoLink: string,
    icon1: JSX.Element,
    icon2?: JSX.Element
}

export default function ProjectsModule({ title, text, img, icon1, icon2, alt, gitRepoLink }: ProjectsModuleProps) {

    return (
        <div className={styles.projects_module_container}>
            
            <Link href={gitRepoLink}>
                <a target={"_blank"}>
                    <img src={img} alt={alt} className={styles.project_img} />
                </a>

            </Link>

            <h3 className={styles.projects_module_title}>{title}</h3>
            <span className={styles.project_adv_resume}>Resumo</span>
            <p className={styles.projects_module_text}>{text}</p>
            <Row style={{ marginTop: 20 }} justify="center">
                {icon1}
                <Spacer x={0.3} />
                {icon2}
            </Row>
        </div>

    )

}