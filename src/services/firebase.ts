
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDrXwwuRaaTsr358HOkvy_CS6oFybHHugU",
  authDomain: "treino-react.firebaseapp.com",
  projectId: "treino-react",
  storageBucket: "treino-react.appspot.com",
  messagingSenderId: "994879897275",
  appId: "1:994879897275:web:828d6bc24e415c5c02b39e"
};


initializeApp(firebaseConfig);

function handleSignUp(){

  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
  .then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
    console.log(result)

  // The signed-in user info.
  const user = result.user;
  // ...
}).catch((error) => {
  console.log(error)
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ...
});




  }

export default handleSignUp