import {ButtonHTMLAttributes} from "react";
import '../styles/button.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps){
    return(
        <button className="bg-ios-blue py-2 px-4 rounded text-white 
        font-content text-sm "{...props}/>
    )
}