import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
import Button from '../Button/button'
import { BiHomeAlt } from "react-icons/bi";

function NavBar() {
  return (
    <div className="navbar">


      <h1 className="logotipo">Teste.</h1>

      <div className="lista-navbar">

        <Link className="Link"to='/'>
        <BiHomeAlt className="iconhome"size={30} />Home</Link>


        <Link className="Link" to='/Profile'>Perfil</Link>
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