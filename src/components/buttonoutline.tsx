import {ButtonHTMLAttributes} from "react";


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonOutline(props: ButtonProps){
    return(
        <button className="bg-none py-2 
        border
        border-2
        border-ios-blue
        px-4 rounded 
        text-ios-blue
        font-content text-sm
        transition-all
        ease-in
        duration-75
        hover:border-[#9ec0ff] hover:text-[#9ec0ff]  "{...props}/>
    )
}