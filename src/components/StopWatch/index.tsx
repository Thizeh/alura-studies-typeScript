import { useEffect, useState } from "react";
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

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    return (
        <div className={style.stopwatch}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.clockWrapper}>
                <Clock tempo={tempo} />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}