import styles from "../../../styles/Develop.module.css"

interface DevelopModuleProps {
    text: string,
    icon: JSX.Element
}

export default function DevelopModule({ text, icon }: DevelopModuleProps) {

    return (
        <div className={styles.develop_module_container} >
            {icon}
            <h3>{text}</h3>
        </div>
    )

}