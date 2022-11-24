import style from "./../styles/Card.module.scss"
import Toggle from "./Toggle"
import Slider from "./Slider"

export default function Parameters() {
    return <div className={style.parameters}>
        <Slider label="Length"/>
        <Toggle label="Uppercase"/>
        <Toggle label="Lowercase"/>
        <Toggle label="Numbers"/>
        <Toggle label="Symbols"/>
    </div>
}