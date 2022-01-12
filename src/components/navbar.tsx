import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'

function NavBar(){
  return(
    <div className="Container">
      
      <h1 className="logotipo">Teste.</h1>

      <div className="Lista-NavBar">
        <Link to='/'>Home</Link>

        <Link to='/Signin'>Sign In</Link>
        <Link to='/Signup'>Sign Up</Link>

        <Link to='/Profile'>Perfil</Link>

      </div>
    </div>
  )
}
export default NavBar;