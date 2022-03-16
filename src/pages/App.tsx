import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import StopWatch from '../components/StopWatch';
import { Itarefa } from '../types/task';
import style from './App.module.scss'

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([])

  const [selecionado, setSelecionado] = useState<Itarefa>();

  function selecionaTarefa(tarefaSelecionada: Itarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <StopWatch />
    </div>
  );
}

export default App;
