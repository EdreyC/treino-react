import React from "react";
import '../styles/signup.css'
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

import Button from '../components/button'
import ButtonOutline from "../components/buttonoutline";

function SignUp() {

    return (
        <div className="flex justify-center mt-8">

            <div className="flex justify-center flex-col outline outline-1 outline-slate-300
            px-28 py-14 gap-5 rounded
            ">
                
                <h1 className="text-ios-blue">Cadastre-se</h1>
                
                <div className="form">
                <Button>
                        Cadastre-se com Google
                        <BsGoogle size={20} className="Google"></BsGoogle>
                    </Button>
                    <Button>
                        Cadastre-se com Facebook
                        <FaFacebookF size={20} className="Facebook"></FaFacebookF>
                    </Button>

                    <label htmlFor="nome">Nome</label>
                    <input className="ipt-primary" type="text" name="nome" id="" />

                
                    <label htmlFor="email">Email</label>
    
                    <input className="ipt-primary" type="text" name="email" id="" />
  
                 

                    <label htmlFor="senha">Senha</label>

                    <div className="flex border border-gray-400 p-2 rounded ">
                        <input className="border-none outline-none w-full font-content text-sm" type="text" name="senha" id="" />
                        <button className="border-none flex w-11 text-slate-800 justify-center cursor-pointer bg-none items-center hover:text-ios-blue" >
                            <FiEye className="eyeicon" size={23}></FiEye></button>
                        
                    </div>
                       
              
                   

                    <div className="flex gap-7 justify-center mt-11">

                        <Button>Cadastrar</Button>
                        <ButtonOutline>Cancelar</ButtonOutline>
                    </div>

                    </div>
            </div>
      
        </div>
    )
}

export default SignUp