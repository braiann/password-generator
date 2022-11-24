import style from "./../styles/Card.module.scss"

type CheckboxProps = {
    label: string
}

export default function Toggle({label}: CheckboxProps) {
    return <div className={style.toggle}>
        <button>
            <div className={style.bubble}></div>
        </button>
        <label htmlFor={label}>{label}</label>
    </div>
}