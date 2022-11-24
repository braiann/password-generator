import style from "./../styles/Card.module.scss"
import CheckBox from "./Checkbox"
import Slider from "./Slider"

export default function Parameters() {
    return <div className={style.parameters}>
        <Slider label="Length"/>
        <CheckBox label="Uppercase"/>
    </div>
}