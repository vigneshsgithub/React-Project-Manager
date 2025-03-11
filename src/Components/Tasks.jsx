import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete}) {




    return (
        <section>
            <h2 className="text-2xl text-stone-700 mb-4 font-bold">Tasks</h2>
            <NewTask onAdd={onAdd} onDelete={onDelete} tasks={tasks}/>
            {tasks.length === 0 && (<p className="text-stone-800 my-4">This project does not have any tasks yet</p>)}
            {tasks.length > 0 &&
                <ul className="p-4 mt-4 rounded-md bg-stone-100 ">
                    {tasks.map((task) => <li key={task.id} className="flex justify-between my-4">
                        <span>{task.text}</span>
                        <button className="px-4 py-1 rounded-md text-stone-50 bg-red-600 hover:bg-red-700" onClick={()=>onDelete(task.id)}>Clear</button>
                    </li>)}
                </ul>
            }

        </section>
    )
}