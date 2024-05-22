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
import Footer from './user/footer';

import HomePage from './Common/HomePage';
import Admin from './user/admin';
import Userlogin from './user/userlogin';
import Userreg from './user/userreg';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* //hai */}
      <Route path="/registration" element={[<Userreg/>,<Footer/>]}/>
      <Route path="/login" element={[<Userlogin/>,<Footer/>]}/>
      <Route path="/adminlogin" element={[<Admin/>,<Footer/>]}/>
      <Route path='Mngr/Login' element={[<NavBar/>,<LoginPage/>]}/>
      <Route path='Mngr/Registration' element={[<NavBar/>,<RegistrationPage/>]}/>
      <Route path='Home' element={[<NavBar/>,<HomePage/>]}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
