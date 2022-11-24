import style from "./../styles/Slider.module.scss"

type SliderProps = {
    label: string
}

export default function Slider({label}: SliderProps) {
    return <div className={style.lengthSlider}>
        <label htmlFor="length">{label}</label>
        <span>8</span>
        <input type="range" className={style.range} min="4"/>
    </div>
}