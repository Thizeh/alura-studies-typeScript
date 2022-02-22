import Button from "../Button";
import Clock from "./Clock";
import style from "./StopWatch.module.scss"

export default function StopWatch() {
    return (
        <div className={style.stopwatch}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}