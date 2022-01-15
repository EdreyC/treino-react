import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'
import Button from '../components/button'

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


          <Link className="text-black-gray rounded-2xl text-sm font-content font-bold px-4 py-2.5 
          
          hover:text-ios-blue hover:bg-slate-50"
          
          to='/Profile'>Perfil</Link>
          <Link className="Link"to='/aboutus'>About us</Link>
          

          <Link to='/Signin'>
            <Button>Sign In</Button>
          </Link>
     
        
          <Link to='/Signup'>
            <Button>Sign Up</Button>
          </Link>

      </div>
    </div>
  )
}
export default NavBar;