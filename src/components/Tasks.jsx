function Tasks(props) {
    return (
    <ul className="space-y-4">
        {props.tarefas.map((tarefa) => 
        <li key={tarefa.id} className="bg-slate-400 p-2 text-white rounded-md">{tarefa.title}</li>)}
    </ul>
    )
}

export default Tasks