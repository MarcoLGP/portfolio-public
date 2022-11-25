import styles from "../../../styles/ContentHome.module.css"
import { BsWhatsapp } from "react-icons/bs"
import { Row } from "@nextui-org/react"
import Link from "next/link"

export default function LeftContentHomeModule() {

    return (
        <div className={styles.saudation_container}>
            <h2>Olá, eu sou</h2>
            <h1>Marco Luca Giampauli</h1>
            <p>Desenvolvedor fullstack</p>
            <Link href={"https://api.whatsapp.com/send?phone=5527997693848&text=Ol%C3%A1%2C%20vim%20do%20seu%20portf%C3%B3lio."}>
                <a target={"_blank"}>
                    <button className={styles.btn}>
                        <Row align="center" justify="space-evenly">
                            <BsWhatsapp size={16} />
                            <span>Contato</span>
                        </Row>
                    </button>
                </a>

            </Link>

        </div>
    )


}