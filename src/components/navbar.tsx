import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'

function NavBar(){
  return(
    <div className="Container">
    

      <h1 className="logotipo">Teste.</h1>

      <div className="Lista-NavBar">


          <Link className="Link"to='/'>Home</Link>
          <Link className="Link" to='/Profile'>Perfil</Link>
          <Link className="Link"to='/aboutus'>About us</Link>

          <Link className="Sign"to='/Signin'>Sign In</Link>
          <Link className="Sign"to='/Signup'>Sign Up</Link>

        

      </div>
    </div>
  )
}
export default NavBar;