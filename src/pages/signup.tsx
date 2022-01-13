import React from "react";
import '../styles/signup.css'
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

import Button from '../components/button'

function SignUp() {
    return (
        <div className="container">
            <div className="box">
                <h1 className="title">Cadastre-se</h1>
                <div className="form">

                    <label htmlFor="nome">Nome</label>
                    <input className="input" type="text" name="nome" id="" />

                
                    <label htmlFor="email">Email</label>
    
                    <input className="input" type="text" name="email" id="" />
  
                 

                    <label htmlFor="senha">Senha</label>

                    <div className="box-pass">
                        <input className="pass" type="text" name="senha" id="" />
                        <button className="eyebutton" >
                            <FiEye className="eyeicon" size={23}></FiEye></button>
                        
                    </div>
                       
              
                    <Button>
                        Cadastre-se com Google
                        <BsGoogle size={20} className="Google"></BsGoogle>
                    </Button>
                    <Button>
                        Cadastre-se com Facebook
                        <FaFacebookF size={20} className="Facebook"></FaFacebookF>
                    </Button>

                    <div className="">
                        <Button>Cadastrar</Button>
                    </div>

                    </div>
            </div>
      
        </div>
    )
}

export default SignUp