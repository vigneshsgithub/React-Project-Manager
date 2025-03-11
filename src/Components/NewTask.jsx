import { useState } from "react"


export default function NewTask({onAdd}) {
    const [enteredTask, setEnteredTask] = useState('');

    function Handlechange(event) {
        setEnteredTask(event.target.value)
    }

    function HandleClick() {
        if(enteredTask.trim()=== ''){
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');


    }
    return <div className="flex items-center gap-4">
        <input className="w-64 px-2 py-1 rounded-sm bg-stone-300" type="text" onChange={Handlechange} value={enteredTask} />
        <button className="text-stone-50 bg-stone-950 px-2 py-1 rounded-md hover:text-stone-950 hover:bg-stone-50" onClick={()=>HandleClick()}>Add Task</button>
    </div>
}