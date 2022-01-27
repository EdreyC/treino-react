import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FiSend } from "react-icons/fi";
import '../styles/home.scss'
import { FormEvent, useState } from "react";
import { db } from "../services/firebase";
import { ref, set } from "firebase/database";


function Home(){

    const {user} = useAuth()
    const [newPost, setnewPost] = useState('')

    async function handleNewPost(event: FormEvent) {
        event.preventDefault();
    
    
    }


    return(
        <div className="page-home">
            <header>
                <h1>{user?.name}</h1>
                <img src={user?.avatar} alt="" />
            </header>
            <form onSubmit={handleNewPost}>
                <div>
                    <input 
                    onChange={ event => setnewPost(event.target.value)}
                    value={newPost}
                    placeholder="O que você está pensando?" 
                    type="text" /> 
                    <button type="submit"> <FiSend/></button>
                </div>
              
            </form>
        </div>
    )
}

export default Home