import styles from "../../../styles/Experiences.module.css"
import ExperiencesMenu from "./ExperiencesMenu"
import React from "react"
import ExperiencesDetails from "./ExperiencesDetails"

export default function Experiences() {

    const [menuSelected, setMenuSelected] = React.useState(0)

    return (
        <section id="experiencia" className={styles.experiences_background_container}>
            <div className={styles.experiences_container}>
                <h2>Experiência</h2>
                <div className={styles.experiences_menu_details}>
                    <ExperiencesMenu menuSelected={menuSelected} setMenuSelected={setMenuSelected} />
                    <ExperiencesDetails menuSelected={menuSelected} />
                </div>
            </div>
        </section>
    )

}