
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, TwitterAuthProvider} from "firebase/auth";
import { useNavigate } from "react-router-dom";


const firebaseConfig = {
  apiKey: "AIzaSyDrXwwuRaaTsr358HOkvy_CS6oFybHHugU",
  authDomain: "treino-react.firebaseapp.com",
  projectId: "treino-react",
  storageBucket: "treino-react.appspot.com",
  messagingSenderId: "994879897275",
  appId: "1:994879897275:web:828d6bc24e415c5c02b39e"
};


initializeApp(firebaseConfig);


  /*function handleSignUpFacebook(){
    const provider = new FacebookAuthProvider();
    //autenticação com o facebook
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
      });
    
  }*/
  function handleSignUpTwitter(){
    const provider = new TwitterAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    //const secret = credential.secret;

    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    // ...
  });
  }

 

export { handleSignUpTwitter}
export {}