import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App'
import Home from './pages/home'
import Profile from "./pages/profile";
// import your route components too

export default function MainRoutes(){

    return(
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
           
        </Routes>
   
    );
}

 

