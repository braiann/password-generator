import style from "./../styles/Card.module.scss"

export default function Card() {
    return <div className={style.password}>
        <h2>PTx1f5DaFX</h2>
        <label>Weak</label>
        <div className={style.options}>
            <button><span className="material-symbols-rounded">autorenew</span></button>
            <button><span className="material-symbols-rounded">content_copy</span></button>
        </div>
    </div>
}