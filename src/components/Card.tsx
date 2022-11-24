import style from "./../styles/Card.module.scss"
import Parameters from "./Parameters"
import Password from "./Password"

export default function Card() {
    return <div className={style.card}>
        <Password />
        <Parameters />
    </div>
}