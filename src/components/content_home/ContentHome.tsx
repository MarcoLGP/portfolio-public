import styles from "../../../styles/ContentHome.module.css"
import LeftContentHomeModule from "./LeftContentHomeModule"
import RightContentHomeModule from "./RightContentHomeModule"

export default function ContentHome() {

    return (
        <section className={styles.container_content_home} >
            <LeftContentHomeModule />
            <RightContentHomeModule />
        </section>
    )

}