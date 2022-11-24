import React from "react"
import style from "./../styles/Card.module.scss"

type CheckboxProps = {
    label: string
    name: string
    value: boolean
    onClick: (name: string, value: boolean) => void
}

export default function Toggle({label, name, value, onClick}: CheckboxProps) {
    const handleClick = () => {
        onClick(name, !value)
        console.log(value)
    }

    return <div className={style.toggle}>
        <button className={value ? style.toggled : ""} onClick={handleClick}>
            <div className={style.bubble}></div>
        </button>
        <label htmlFor={label}>{label}</label>
    </div>
}