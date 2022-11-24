import style from "./../styles/Slider.module.scss"

type SliderProps = {
    label: string
    name: string
    value: number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Slider({label, name, value, onChange}: SliderProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e)
    }

    return <div className={style.lengthSlider}>
        <label htmlFor="length">{label}</label>
        <span>{value}</span>
        <input
            type="range"
            name={name}
            onChange={handleChange}
            value={value}
            className={style.range}
            min="4"
            max="50"/>
    </div>
}