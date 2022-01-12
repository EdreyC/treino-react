import React from "react";
import '../styles/navbar.css'

function NavBar(){
  return(
    <div className="Container">
      <h1 className="logotipo">Teste.</h1>
      <div className="Lista-NavBar">
        <a href="#">Home</a>
        <a href="#">Sign In</a>
        <a href="#">Sign Up</a>
      </div>
    </div>
  )
}
export default NavBar;