import { useRef } from "react"
import Input from "./Input"
import Modal from './Modal'

export default function NewProject({onAdd}) {
const modal=useRef();
    const title=useRef();
    const description=useRef();
    const due_date=useRef();


    function Handlesave(){  
   const enteredTitle=title.current.value;
   const enteredDesc=description.current.value;
   const enteredDue_date=due_date.current.value;

    onAdd({
    title:enteredTitle,
    description:enteredDesc,
    due_date:enteredDue_date
   });

   if(enteredTitle.trim()==='' || enteredDesc.trim()==='' || enteredDue_date.trim()===''){

     
   }
}

function Handlecancel(){

}


    return (
        <>
        <Modal ref={modal}/>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950" onClick={Handlecancel}>Cancel</button></li>
                <li><button
                 className=" px-6 py-2 rounded-xl bg-stone-800 text-stone-50
                  hover:bg-stone-950" onClick={Handlesave}>Save</button></li>
            </menu>

            <div>
                <Input ref={title}  label="Title" />
                <Input ref={description} label="Description" textarea />
                <Input type="date" ref={due_date} label="Due Date" />
            </div>
        </div>
   
        </>
    )
}