import { CheckCheck, ChevronDown, ChevronFirst, ChevronRightIcon, Heading1, TrashIcon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.listaTarefas.map((tarefa) => (

        <li key={tarefa.id} className="flex gap-2">

          <button 
          onClick={() => props.aoClicarTarefa(tarefa.id)} 
          className={"bg-slate-400 p-2 w-full text-white rounded-md text-left" + (tarefa.isCompleted ? " line-through" : "")}>
            {tarefa.title}
          </button>

          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>

          <button 
          onClick={() => props.deleteTask(tarefa.id)}
          className="bg-slate-400 p-2 rounded-md text-white">
            <TrashIcon />
          </button>
        
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
