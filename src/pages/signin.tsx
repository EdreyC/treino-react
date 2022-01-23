import { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import Button from "../components/Button/button";
import '../styles/signin.css'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


function SignIn (){
    
    const {user,signInWithGoogle} = useAuth()
    const navigate = useNavigate();

    async function SignInWithGoogle(){

        if(!user){
            await signInWithGoogle();
        }
        navigate("/")
    }
    return(
       <div>
           <div>
               <h1></h1>
               
               <Button onClick={SignInWithGoogle} >
                    Cadastre-se com Google
                    <BsGoogle size={20} className="Google"></BsGoogle>
                </Button>
               <input type="text" />
               <input type="text" name="" id="" />
               <button></button>
           </div>
       </div>
    )
}

export default SignIn