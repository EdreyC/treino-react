import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import '../styles/home.css'


function Home(){

    const {user} = useAuth()

    return(
        <div className="page-home">
            <div>
                <h1>{user?.name}</h1>
            </div>

        </div>
    )
}

export default Home