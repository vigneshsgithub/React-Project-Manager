

export default function Button({children,...props}){
    return(

        <button className="w-40 p-1 hover:bg-stone-700 hover:text-stone-400 rounded-md bg-stone-800 text-stone-500 focus:outline-none focus:border-stone-600"{...props}>{children}</button>
    )
}