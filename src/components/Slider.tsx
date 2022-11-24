import style from "./../styles/Card.module.scss"

type SliderProps = {
    label: string
}

export default function Slider({label}: SliderProps) {
    return <div className={style.lengthSlider}>
        <label htmlFor="length">{label}</label>
        <span>8</span>
        <input name="length" type="range" />
    </div>
}