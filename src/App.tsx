import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import MainRoutes from './routes'
import './styles/global.css'
import NavBar from './components/navbar';

function App() {
  return (
      <Router>
        <NavBar></NavBar>   
        <MainRoutes/>
  
      </Router>
  );
}

export default App;
