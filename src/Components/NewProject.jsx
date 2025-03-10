import { useRef } from "react";
import Input from "./Input";
import Modal from './Modal';

export default function NewProject({ onAdd,Oncancel }) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const due_date = useRef();

    function Handlesave() {
        const enteredTitle = title.current.value;
        const enteredDesc = description.current.value;
        const enteredDue_date = due_date.current.value;

        if (enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredDue_date.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDesc,
            due_date: enteredDue_date
        });
    }

    return (
        <>
            <Modal ref={modal} Btncaption="Okay">
                <h2 className="text-xl font-bold text-stone-800 my-4">Invalid Input</h2>
                <p  className='text-stone-900 mb-4'> Oops! Looks like you forgot to enter a value.</p>
                <p className='mt-8 '> Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button className="py-2 px-6 rounded-xl text-stone-50 bg-red-600 hover:bg-red-700" onClick={Oncancel}>Cancel</button></li>
                    <li>
                        <button
                            className="px-6 py-2 rounded-xl bg-green-600 text-stone-50 hover:bg-green-700"
                            onClick={Handlesave}
                        >
                            Save
                        </button>
                    </li>
                </menu>

                <div>
                    <Input ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea />
                    <Input type="date" ref={due_date} label="Due Date" />
                </div>
            </div>
        </>
    );
}