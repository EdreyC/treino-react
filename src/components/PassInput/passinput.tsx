import { InputHTMLAttributes, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";


import './passinput.css'
type InputProps = InputHTMLAttributes<HTMLInputElement>;


export default function PassInput(props: InputProps){

    const [visible, setVisible] = useState(false)

    return (
        <div className="box-pass">
            
            <input className="pass" type={visible ? 'text':'password'} {...props} />
            <button className="eyebutton" onClick={e => setVisible(!visible)}>
              {
                visible ? <FiEyeOff className="eyeicon" size={23}/> : <FiEye className="eyeicon" size={23} />  
            }  
          </button>
                        
        </div>
    )
} 