import styles from "../../../styles/Develop.module.css"
import DevelopModule from "./DevelopModule"
import { RiReactjsLine } from "react-icons/ri"
import { GrNode } from "react-icons/gr"
import { SiNextdotjs } from "react-icons/si"
import { IoLogoElectron } from "react-icons/io5"
import { Row } from "@nextui-org/react"

export default function Develop() {

    return (
        <section id="oquefaco" className={styles.develop_container}>
            <Row justify="center" align="center" className={styles.develop_modules}>
                <DevelopModule text="Desenvolvimento Mobile" icon={<RiReactjsLine size={30} />} />
                <DevelopModule text="Desenvolvimento de API" icon={<GrNode size={30} />} />
                <DevelopModule text="Desenvolvimento Web" icon={<SiNextdotjs size={30} />} />
                <DevelopModule text="Desenvolvimento Desktop" icon={<IoLogoElectron size={30} />} />
            </Row>
            <Row justify="center" className={styles.grouped_develop_modules}>
                <DevelopModule text="Desenvolvimento Mobile" icon={<RiReactjsLine size={30} />} />
                <DevelopModule text="Desenvolvimento de API" icon={<GrNode size={30} />} />
            </Row>
            <Row justify="center" className={styles.grouped_develop_modules}>
                <DevelopModule text="Desenvolvimento Web" icon={<SiNextdotjs size={30} />} />
                <DevelopModule text="Desenvolvimento Desktop" icon={<IoLogoElectron size={30} />} />
            </Row>
        </section>
    )


}