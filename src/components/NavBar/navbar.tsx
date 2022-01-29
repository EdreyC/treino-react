import { Link } from "react-router-dom";
import './navbar.scss'
import Button from '../Button/button'
import { BiHomeAlt } from "react-icons/bi";
import { useAuth } from "../../hooks/useAuth";

function NavBar() {

  const {user} = useAuth()
  

  return (
    
    <div className="navbar">


      <h1 >Teste.</h1>

      <div className="lista-navbar">

        <Link className="Link"to='/'>
        <BiHomeAlt className="iconhome"size={30} />Home</Link>


        <Link className="Link" to='/Profile'>Perfil</Link>
        <Link className="Link"to='/aboutus'>About us</Link>

      {user ? (
        <>
          <span>
            Welcome 

            <div>
              <Link to='/profile'>
                 <img src={user?.avatar} alt="" />
                  {user?.name}
              </Link>
           
            </div>
            
          </span>
        </>
      ) : (
        <> 
            <Link to='/Signin'>
            <Button>Sign In</Button>
            </Link>
            
            <Link to='/Signup'>
            <Button>Sign Up</Button>
            </Link>
        </>
        
      )}
      

      </div>
    </div>
  )
}
export default NavBar;