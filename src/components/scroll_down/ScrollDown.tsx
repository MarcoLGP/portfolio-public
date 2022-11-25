import styles from "../../../styles/ScrollDown.module.css"
import { RiArrowDownSLine } from "react-icons/ri"

export default function ScrollDown() {

    return (
        <div className={styles.scroll_down_container}>
            <span>Role para baixo</span>
            <RiArrowDownSLine size={35} color={'#fff'} />
        </div>
    )

}