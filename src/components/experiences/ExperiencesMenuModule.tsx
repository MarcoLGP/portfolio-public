import styles from "../../../styles/Experiences.module.css"

interface ExperiencesMenuModuleProps {
    text: string,
    selected: boolean,
    onClick: () => void
}

export default function ExperiencesMenuModule({ text, selected, onClick }: ExperiencesMenuModuleProps) {

    return (
        <div onClick={onClick} className={`${styles.experiences_menu_module_container} ${selected && styles.experiences_menu_module_selected}`}>

            <span>{text}</span>

        </div>
    )

}