import {ButtonHTMLAttributes} from "react";
import './button.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps){
    return(
        <button  className="button"{...props}/>
    )
}