import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'
import ButtonAzulzinho from '../components/button'

import { BiHomeAlt } from "react-icons/bi";

function NavBar(){
  return(
    <div className="Container">
    

      <h1 className="logotipo">Teste.</h1>

      <div className="Lista-NavBar">
         
          <Link className="Link"to='/'>
            <BiHomeAlt className="iconhome"
            size={30}/>
            Home
          </Link>


          <Link className="Link" to='/Profile'>Perfil</Link>
          <Link className="Link"to='/aboutus'>About us</Link>
          
          <Link to='/Signin'>
            <ButtonAzulzinho>Sign In</ButtonAzulzinho>
          </Link>
     
        
          <Link to='/Signup'>
            <ButtonAzulzinho>Sign Up</ButtonAzulzinho>
          </Link>

        

      </div>
    </div>
  )
}
export default NavBar;