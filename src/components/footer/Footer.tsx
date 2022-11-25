import { TiHeartFullOutline } from "react-icons/ti"

export default function Footer() {

    return (
        <footer>
            <span>Desenvolvido com</span>
            <TiHeartFullOutline className="padding-5-horizontal" size={20} color={"#FFF"} />
            <span>por </span>
            <span>Marco Luca</span>
        </footer>
    )

}