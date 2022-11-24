import style from "./../styles/Card.module.scss"
import Toggle from "./Toggle"
import Slider from "./Slider"
import { ParametersList } from "./Card"
import React from "react"

type ParametersProps = {
    parameters: ParametersList
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onToggleChange: (name: string, value: boolean) => void
}

export default function Parameters({parameters, onChange, onToggleChange}: ParametersProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e)
    }

    const handleToggleChange = (name: string, value: boolean) => {
        onToggleChange(name, value)
    }
    return <div className={style.parameters}>
        <Slider
            label="Length"
            name="length"
            value={parameters.length}
            onChange={handleChange}/>
        <Toggle
            label="Uppercase"
            name="uppercase"
            value={parameters.uppercase}
            onClick={handleToggleChange}
            />
        <Toggle
            label="Lowercase"
            name="lowercase"
            value={parameters.lowercase}
            onClick={handleToggleChange}
            />
        <Toggle
            label="Numbers"
            name="numbers"
            value={parameters.numbers}
            onClick={handleToggleChange}
            />
        <Toggle
            label="Symbols"
            name="symbols"
            value={parameters.symbols}
            onClick={handleToggleChange}
            />
    </div>
}