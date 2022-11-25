import { IOpenMenu } from "../../../pages"
import styles from "../../../styles/Header.module.css"
import NavLinks from "./NavLinks"
import NavLinksMobile from "./NavLinksMobile"

export default function Header({ openMobileMenu, setOpenMobileMenu }: IOpenMenu) {
    return (
        <header>
            <div className={styles.header_container}>
                <h2>{'‹ML/›'}</h2>
                <NavLinks />
                <NavLinksMobile openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
            </div>
        </header>
    )

}