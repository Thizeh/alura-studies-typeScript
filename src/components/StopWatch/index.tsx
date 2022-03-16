import { useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./StopWatch.module.scss"

interface Props {
    selecionado: Itarefa | undefined
}

export default function StopWatch({ selecionado }: Props) {

    const [tempo, setTempo] = useState<number>();

    if (selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado.tempo));
    }

    return (
        <div className={style.stopwatch}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}