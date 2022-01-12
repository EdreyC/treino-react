import React from "react";
import { Link } from "react-router-dom";
import '../styles/global.css'


function Home(){
    return(
        <div>
            <Link to="/profile"> Perfil</Link>
        
        </div>
    )
}


export default Home