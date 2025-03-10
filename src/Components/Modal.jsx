import {  forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";


 const Modal=forwardRef( function Modal({ children,Btncaption }, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                console.log("im read");
                dialog.current.showModal();
            }
        };
    });
    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog">
                <button className="h-10 w-full mt-5 bg-yellow-400 text-stone-50 hover:bg-yellow-500">{Btncaption}</button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
})

 export default Modal;
