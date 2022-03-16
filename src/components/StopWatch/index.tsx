import { tempoParaSegundos } from "../../common/utils/date";
import Button from "../Button";
import Clock from "./Clock";
import style from "./StopWatch.module.scss"

export default function StopWatch() {
    console.log('conversao: ', tempoParaSegundos('01:01:01'))
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