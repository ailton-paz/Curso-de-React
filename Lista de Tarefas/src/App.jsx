import { useState } from "react";
import AddTasks from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
const [listaTarefas, setListaTarefas] = useState([{
  id: 1,
  title: "Estudar CSS",
  description: "É preciso estudar estilizações em CSS",
  isCompleted: false,
}, {
  id: 2,
  title: "Estudar TailWind",
  description: "É preciso estudar estilizações em CSS",
  isCompleted: false,
}, {
  id: 3,
  title: "Estudar React",
  description: "É preciso estudar estilizações em CSS",
  isCompleted: false,
}])

function aoClicarTarefa(idTarefa) {
  const segundaLista = listaTarefas.map((tarefas) => {

     if (idTarefa === tarefas.id) {
      return { ...tarefas, isCompleted: !tarefas.isCompleted }
    }
    return tarefas;
  })
  setListaTarefas(segundaLista);
}

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas</h1>
        <AddTasks />
        <Tasks listaTarefas={listaTarefas} aoClicarTarefa={aoClicarTarefa}/>
      </div>
    </div>
  )
}

export default App;