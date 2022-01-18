import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import '../styles/signup.css'
import handleSignUp from "../services/firebase";

import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

import PassInput from "../components/PassInput/passinput";
import Button from '../components/Button/button'
import ButtonOutline from "../components/ButtonOutline/buttonoutline";

function SignUp() {

    


    return (

        <div className="signup-container">

            <div className="page-signup">
                
                <h1 className="signup-title">Cadastre-se</h1>
                <span>Porfavor cadastre a sua conta para poder continuar no app </span>
                
                <div className="signup-form">

                    <Button onClick={handleSignUp}>
                        Cadastre-se com Google
                        <BsGoogle size={20} className="Google"></BsGoogle>
                    </Button>
                    <Button>
                        Cadastre-se com Facebook
                        <FaFacebookF size={20} className="Facebook"></FaFacebookF>
                    </Button>

                    <span>Obrigatório preencher todos os campos</span>

                    <label htmlFor="nome">Nome</label>
                    <input placeholder="Digite seu nome"className="input" type="text" name="nome" id="" />

                
                    <label htmlFor="email">Email</label>
    
                    <input placeholder="Digite seu email" className="input" type="text" name="email" id="" />
  
                 

                    <label htmlFor="senha">Senha</label>
                    <PassInput placeholder="Digite sua senha"></PassInput>

                    <div className="container-buttons-signup">
                        <Button>Cadastre-se</Button>
                        <ButtonOutline>Cancelar</ButtonOutline>

                    </div>

                    </div>
  
            </div>          
        </div>
    )
}

export default SignUp