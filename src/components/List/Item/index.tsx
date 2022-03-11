import { Itarefa } from '../../../types/task'
import style from '../List.module.scss'

export default function Item({ tarefa, tempo, selecionado, completado, id }: Itarefa) {
    console.log('item atual: ', { tarefa, tempo, selecionado, completado, id })
    return (

        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}