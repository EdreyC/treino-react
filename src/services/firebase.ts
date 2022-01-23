
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore }from 'firebase/firestore'



const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDrXwwuRaaTsr358HOkvy_CS6oFybHHugU",
  authDomain: "treino-react.firebaseapp.com",
  projectId: "treino-react",
  storageBucket: "treino-react.appspot.com",
  messagingSenderId: "994879897275",
  appId: "1:994879897275:web:828d6bc24e415c5c02b39e"
}) ;


const auth = getAuth()

const db = getFirestore();

export {auth, db}