import {ButtonHTMLAttributes} from "react";
import '../styles/button.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonAzulzinho(props: ButtonProps){
    return(
        <button className="button"{...props}/>
    )
}