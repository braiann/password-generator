import React, { useEffect, useState } from "react"
import { characters } from "../constants/characters"
import style from "./../styles/Card.module.scss"
import Parameters from "./Parameters"
import Password from "./Password"

export type ParametersList = {
    length: number
    uppercase: boolean
    lowercase: boolean
    numbers: boolean
    symbols: boolean
}

export default function Card() {
    const [password, setPassword] = useState("")
    const [parameters, setParameters] = useState({
        length: 14,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true
    })

    useEffect(() => {
        if (!parameters.uppercase && !parameters.lowercase && !parameters.numbers) {
            setParameters(prev => {
                return {
                    ...prev,
                    lowercase: true
                }
            })
        }
        generatePassword()
    }, [parameters])

    const generatePassword = () => {
        let generatedPassword = ""
        let useUppercase = false
        for (let i = 0; i < parameters.length; i++) {
            if (parameters.symbols &&(i + 1) % 5 === 0 && i < parameters.length - 1) {
                generatedPassword += "-"
            } else {
                if ((!parameters.uppercase && !parameters.lowercase) || parameters.numbers && Math.round(Math.random()) == 0) {
                    generatedPassword += Math.floor(Math.random() * 10)
                } else {
                    useUppercase = parameters.lowercase ? Math.round(Math.random()) === 0 : true
                    if (useUppercase && parameters.uppercase) {
                        generatedPassword += characters[Math.round(Math.random() * 25)].toUpperCase()
                    } else {
                        generatedPassword += characters[Math.round(Math.random() * 25)]
                    }
                }
            }
        }
        setPassword(generatedPassword)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParameters(prev => {
            return {
                ...prev,
                length: e.target.value ? e.target.value : 14
            } as ParametersList
        })
    }

    const handleToggleChange = (name: string, value: boolean) => {
        setParameters(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return <div className={style.card}>
        <Password password={password} generatePassword={generatePassword}/>
        <Parameters
            parameters={parameters}
            onChange={handleChange}
            onToggleChange={handleToggleChange}/>
    </div>
}