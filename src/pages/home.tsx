import React from "react";

import NavBar from "../components/navbar";

import { Link } from "react-router-dom";

import '../styles/global.css'


function Home(){
    return(
        <div>
            <NavBar></NavBar>
            <Link to="/profile"> Perfil</Link> 
        </div>
    )
}
export default Home