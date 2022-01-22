import {createContext, useState, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import MainRoutes from './routes'
import './styles/global.css'
import NavBar from './components/NavBar/navbar'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

type User = {
  id: string;
  name: string;
  avatar:string;
}

type AuthContextType = {
  user: User | undefined;
  SignInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType)

function App() {

  const auth = getAuth();
  const [user, setUser] = useState<User>()

  useEffect(()=>{

    auth.onAuthStateChanged(user =>{
      if(user){

        const {displayName,photoURL,uid} = user
  
          if(!displayName || !photoURL ){
            throw new Error('Missing information from Google Account.');
          }

          setUser({

            id:uid,
            name:displayName,
            avatar: photoURL

          })

        }
      
    })

  },[])


  async function SignInWithGoogle(){

    const provider = new GoogleAuthProvider();
    
    
    const result =  await signInWithPopup(auth, provider);

      if (result.user){

        const {displayName,photoURL,uid} = result.user

            if(!displayName || !photoURL ){

            throw new Error('Missing information from Google Account.');
          }
          setUser({

            id:uid,
            name:displayName,
            avatar: photoURL
              
          })
            
      }
  
  }
 

  return (

      <Router>
      <AuthContext.Provider value={{user,SignInWithGoogle}}>
        <NavBar></NavBar>
        <MainRoutes/>
      </AuthContext.Provider>
      </Router>
  );
}

export default App;
