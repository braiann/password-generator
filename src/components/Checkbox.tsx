import style from "./../styles/Card.module.scss"

type CheckboxProps = {
    label: string
}

export default function CheckBox({label}: CheckboxProps) {
    return <div className={style.checkbox}>
        <input name={label} type="checkbox" />
        <label htmlFor={label}>{label}</label>
    </div>
}