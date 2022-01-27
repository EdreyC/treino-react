import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
import "../styles/profile.scss"


function Profile(){
    
    const {user} = useAuth()

    

    return(

        <div className="page-profile">
            <div className="banner"></div>

            <div className="container-profile">

                <img width='150px'className="avatar"src={user?.avatar} alt=""/>
                <div className="profile-data">
                    <h1 className="userName">{user?.name}</h1>
                    <div className="linksProfile">
                        <Link to="">Seguidores</Link>
                        <span>0</span>
                        <Link to="">Seguindo</Link>
                        <span>0</span>
                        <Link to="">Publicações</Link>
                        <span>0</span>

                    </div>
                </div>
               
            </div>
                 
            <div className="container-posts">

                <div className="posts">
                    <div className="informacoes">
                        <img width='50px' src={user?.avatar} alt=""/>
                        <div>
                            <Link className="user" to='/profile'>{user?.name}</Link>
                            <span>21:41 23/01/2022</span>
                        </div>
                    </div>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              

                </div>
                
            </div>
            
        </div>
    )
}

export default Profile;