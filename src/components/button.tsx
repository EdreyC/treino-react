import {ButtonHTMLAttributes} from "react";


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps){
    return(
        <button className="
        flex
        justify-center
        items-center

        bg-ios-blue py-3 px-4 rounded text-white 
        font-content text-sm
        transition-all
        ease-in-out
        duration-100
        hover:bg-ios-blue-light"{...props}/>
    )
}