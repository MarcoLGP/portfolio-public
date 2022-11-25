import Image from "next/image";
import styles from "../../../styles/ContentHome.module.css"
import home_image from "../../../public/developer.png";

export default function RightContentHomeModule() {

    return (

        <div className={styles.img_container}>
            <Image alt="Homem sentado usando notebook" src={home_image} objectFit={"cover"} />
        </div>

    )

}