import styles from "../../../styles/Informations.module.css"
import { BsPersonFill, BsGithub } from "react-icons/bs"
import { FaMapMarkerAlt } from "react-icons/fa"
import { AiFillLinkedin } from "react-icons/ai"
import InformationModule from "./InformationModule"
import { Row } from "@nextui-org/react"

export default function Informations() {

    return (
        <section className={styles.informations_container}>

            <Row align="center" justify="space-evenly" className={styles.inline_informations_container}>
                <InformationModule icon={<BsPersonFill size={21} />} title="Nome completo" subtitle="Marco Luca Giampauli Pedroza" />
                <InformationModule icon={<FaMapMarkerAlt size={23} />} title="Local" subtitle="Domingos Martins, ES" />
                <InformationModule url="https://linkedin.com/in/marco-luca-giampauli-pedroza" icon={<AiFillLinkedin size={23} />} title="Linkedin" subtitle="marcolucagp@gmail.com" />
                <InformationModule url="https://github.com/MarcoLGP" icon={<BsGithub size={21} />} title="Github" subtitle="@MarcoLGP" />
            </Row>

            <Row justify="center" className={styles.grouped_informations_container}>
                <InformationModule icon={<BsPersonFill size={21} />} title="Nome completo" subtitle="Marco Luca Giampauli Pedroza" />
                <InformationModule icon={<FaMapMarkerAlt size={23} />} title="Local" subtitle="Domingos Martins, ES" />
            </Row>

            <Row justify="center" className={styles.grouped_informations_container}>
                <InformationModule url="https://linkedin.com/in/marco-luca-giampauli-pedroza" icon={<AiFillLinkedin size={23} />} title="Linkedin" subtitle="marcolucagp@gmail.com" />
                <InformationModule url="https://github.com/MarcoLGP" icon={<BsGithub size={21} />} title="Github" subtitle="@MarcoLGP" />
            </Row>

        </section>
    )

}