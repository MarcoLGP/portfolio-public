import styles from "../../../styles/Header.module.css"

function navegateTo(section: string) {
    document.getElementById(section)?.scrollIntoView()
}

export default function NavLinks() {

    return (
        <nav className={styles.nav_links}>

            <ul>

                <li onClick={() => navegateTo("oquefaco")}>
                    O que faço
                </li>

                <li onClick={() => navegateTo("experiencia")}>
                    Experiência
                </li>

                <li onClick={() => navegateTo("projetos")}>
                    Projetos
                </li>


            </ul>

        </nav>
    )

}

export { navegateTo }