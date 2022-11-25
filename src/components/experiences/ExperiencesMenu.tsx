import ExperiencesMenuModule from "./ExperiencesMenuModule";
import styles from "../../../styles/Experiences.module.css"
import React from "react"

interface ExperiencesMenuProps {
    menuSelected: number,
    setMenuSelected: Function
}

export default function ExperiencesMenu({menuSelected, setMenuSelected}: ExperiencesMenuProps) {

    return (
        <div className={styles.experiences_menu_modules}>
            <ExperiencesMenuModule text="Camocim" onClick={() => setMenuSelected(0)} selected={menuSelected === 0} />
            <ExperiencesMenuModule onClick={() => setMenuSelected(1)} selected={menuSelected === 1} text="CTI informática" />
            <ExperiencesMenuModule onClick={() => setMenuSelected(2)} selected={menuSelected === 2} text="Mjota Store" />
        </div>
    )

}