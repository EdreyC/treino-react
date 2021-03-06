import {ButtonHTMLAttributes} from "react";
import './buttonoutline.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonOutline(props: ButtonProps){
    return(
        <button className="button-outline"{...props}/>
    )
}