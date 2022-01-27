
import {BrowserRouter as Router} from 'react-router-dom';

import MainRoutes from './routes'
import './styles/global.scss'
import NavBar from './components/NavBar/navbar'
import { AuthContextProvider } from './contexts/AuthContext';


function App() {


  return (

      <Router>
      <AuthContextProvider>
        <NavBar></NavBar>
        <MainRoutes/>
        </AuthContextProvider>
      </Router>
  );
}

export default App;
