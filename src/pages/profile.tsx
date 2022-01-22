import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";

import "../styles/profile.css"

function Profile(){

    const {user} = useContext(AuthContext)
    // Para usar os dados da autenticação do usuario,
    //basta fz como eu fiz na tag h1 e na img com {user?...}

    //OBS: TEM QUE TER O '?' junto com o user!!!!

    return(

        <div className="page-profile">
           

        </div>
    )
}

export default Profile;