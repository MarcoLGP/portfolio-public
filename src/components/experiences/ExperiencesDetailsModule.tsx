import styles from "../../../styles/Experiences.module.css"

interface ExperiencesDetailsModuleProps {
    title: string,
    content: JSX.Element,
    date: string,
    subtitle: string
}

export default function ExperiencesDetailsModule({ title, content, date, subtitle }: ExperiencesDetailsModuleProps) {

    return (
        <div className={styles.experiences_details_module_container}>
            <div className={styles.experiences_title_date}>
                <h3>{title}</h3>
                <span>{date}</span>
            </div>
            <h4>{subtitle}</h4>
            {content}
        </div>
    )

}