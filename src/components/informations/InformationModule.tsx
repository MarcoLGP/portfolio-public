import styles from "../../../styles/Informations.module.css"

interface InformationModuleProps {
    title: string,
    subtitle: string,
    icon: JSX.Element,
    url?: string
}

export default function InformationModule({ title, subtitle, icon, url }: InformationModuleProps) {

    return (
        <div className={styles.information_module_container}>
            {
                url ? <a target={"_blank"} rel="noreferrer" href={url}>
                    <div className={`${styles.ellipse_container} ${url && styles.cursor_pointer}`}>
                        {icon}
                    </div>
                </a> :
                    <div className={styles.ellipse_container}>
                        {icon}
                    </div>
            }
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    )

}