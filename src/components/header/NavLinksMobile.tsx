import { HiMenu } from "react-icons/hi"
import styles from "../../../styles/Header.module.css"
import { useState } from "react"
import { navegateTo } from "./NavLinks"
import { IOpenMenu } from "../../../pages"

export default function NavLinksMobile({ setOpenMobileMenu, openMobileMenu }: IOpenMenu) {

    function handleMenuClick(to: string) {
        navegateTo(to)
        setOpenMobileMenu(false)
    }

    return (

        <div className={styles.nav_links_mobile_container}>
            <HiMenu cursor={"pointer"} size={25} onClick={() => setOpenMobileMenu(!openMobileMenu)} color={"#fff"} />
            {
                openMobileMenu && <nav className={styles.nav_links_mobile}>

                    <ul>

                        <li onClick={() => handleMenuClick("oquefaco")}>
                            O que faço
                        </li>

                        <li onClick={() => handleMenuClick("projetos")}>
                            Projetos
                        </li>

                        <li onClick={() => handleMenuClick("experiencia")}>
                            Experiência
                        </li>

                    </ul>

                </nav>
            }
        </div>

    )

}