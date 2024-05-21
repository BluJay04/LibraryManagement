import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'remixicon/fonts/remixicon.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from './LibraryManger/LoginPage';
import './LibraryManger/LoginPage.css'
import RegistrationPage from './LibraryManger/RegistrationPage';
import './LibraryManger/RegistrationPage.css'
import NavBar from './Common/NavBar';
import './Common/NavBar.css'
import Footer from './Common/Footer';
import './Common/Footer.css'
import HomePage from './Common/HomePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='Mngr/Login' element={[<NavBar/>,<LoginPage/>]}/>
        <Route path='Mngr/Registration' element={[<NavBar/>,<RegistrationPage/>]}/>
        <Route path='Home' element={[<NavBar/>,<HomePage/>]}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;