import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'
import Button from '../components/button'

import { BiHomeAlt } from "react-icons/bi";

function NavBar() {
  return (
    <div className="flex justify-between items-center py-3 px-5 border-b border-slate-200">


      <h1 className="text-ios-blue font-title font-bold text-5xl">Teste.</h1>

      <div className="flex items-center gap-5 mr-5 ">

        <Link className="flex items-center gap-1.5 link-navbar"to='/'>
        <BiHomeAlt className="iconhome"size={30} />Home</Link>


        <Link className="link-navbar" to='/Profile'>Perfil</Link>
        <Link className="link-navbar"to='/aboutus'>About us</Link>


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