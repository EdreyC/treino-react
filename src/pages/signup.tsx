
import '../styles/signup.css'


import PassInput from "../components/PassInput/passinput";
import Button from '../components/Button/button'
import ButtonOutline from "../components/ButtonOutline/buttonoutline";

import { Link, useNavigate } from "react-router-dom";

function SignUp() {

    

    return (

        <div className="signup-container">

            <div className="page-signup">
                
                <h1 className="signup-title">Cadastre-se</h1>
                <span>Para se autenticar com o google clique <Link to="/signin">aqui</Link></span>
                
                <div className="signup-form">

                   

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