import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App'
import Home from './pages/home'
import Profile from "./pages/profile";
import SignIN from "./pages/signin";
import AboutUs from "./pages/aboutus";
import SignIn from "./pages/signin";
// import your route components too

export default function MainRoutes(){

    return(
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/signin" element={<SignIn/>}/>
           
        </Routes>
   
    );
}

 

