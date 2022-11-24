import { useEffect, useState } from "react"
import style from "./../styles/Card.module.scss"

type PasswordProps = {
    password: string
    generatePassword: () => void
}

enum Strength {
    Weak,
    Medium,
    Strong,
    VeryStrong
}

export default function Password({password, generatePassword}: PasswordProps) {
    const [strength, setStrength] = useState<Strength>()
    const [showCheckmark, setShowCheckmark] = useState(false)

    useEffect(() => {
        setStrength(password.length > 8 ? Strength.VeryStrong :
            password.length > 6 ? Strength.VeryStrong :
                password.length > 5 ? Strength.Medium :
                    Strength.Weak)
    }, [strength, password])

    useEffect(() => {
        if (showCheckmark) {
            setTimeout(() => {
                setShowCheckmark(false)
            }, 1000);
        }
    }, [showCheckmark])

    const copyToClipboard = () => {
        setShowCheckmark(true)
        navigator.clipboard.writeText(password)
    }

    return <div
            className={style.password}
            style={{
                backgroundPosition: getBackgroundPosition(strength ?? Strength.Weak),
                boxShadow: getShadow(strength ?? Strength.Weak)
            }}>
        <h2>{password}</h2>
        <label style={{color: getStrengthColor(strength ?? Strength.Weak)}}>
            {strengthToString(strength ?? Strength.Weak)}
        </label>
        <div className={style.options}>
            <button onClick={generatePassword}>
                <span className="material-symbols-rounded">autorenew</span>
            </button>
            <button onClick={copyToClipboard}>
            {showCheckmark ?
                <span className="material-symbols-outlined">done</span> :
                <span className="material-symbols-rounded">content_copy</span>
            }
            </button>
        </div>
    </div>
}

function strengthToString(strength: Strength) {
    switch (strength) {
        case Strength.VeryStrong:
            return "Very strong"
        case Strength.Strong:
            return "Strong"
        case Strength.Medium:
            return "Medium"
        default:
            return "Weak"
    }
}

function getBackgroundPosition(strength: Strength) {
    switch (strength) {
        case Strength.VeryStrong:
            return "100% 0%"
        case Strength.Strong:
            return "70% 30%"
        case Strength.Medium:
            return "40% 40%"
        default:
            return "0% 100%"
    }
}

function getStrengthColor(strength: Strength) {
    switch (strength) {
        case Strength.VeryStrong:
            return "rgb(0,204,102)"
        case Strength.Strong:
            return  "rgb(0,204,102)"
        case Strength.Medium:
            return "rgb(241,136,5)"
        default:
            return "rgb(156,13,56)"
    }
}

function getShadow(strength: Strength) {
   return `inset 2px 2px 1px rgba(255, 255, 255, 0.3),
           inset -2px 2px 1px ${getStrengthColor(strength)},
           inset 2px -2px 1px ${getStrengthColor(strength)},
           inset -2px -2px 1px rgba(255, 255, 255, 0.3),
           0 5px 10px rgba(0, 0, 0, 0.1)`
}