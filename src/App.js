import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './LibraryManger/LoginPage';
import './LibraryManger/LoginPage.css'
import RegistrationPage from './LibraryManger/RegistrationPage';
import './LibraryManger/RegistrationPage.css'
import NavBar from './Common/NavBar';
import './Common/NavBar.css'
import Footer from './user/footer';

import HomePage from './Common/HomePage';
import Admin from './Admin/admin';
import Userlogin from './user/userlogin';
import Userreg from './user/userreg';
import ProfilePage from './LibraryManger/ProfilePage';
import './LibraryManger/ProfilePage.css'
import ForgotPasswordPage from './LibraryManger/ForgotPasswordPage';
import Dashboard from './Admin/Dashboard';
import './Admin/Dashboard.css';
import ManagerDashboard from './LibraryManger/ManagerDashboard';
import AddProducts from './Products/AddProducts';
import Profileview from './user/Profileview';
import ViewUserOne from './Admin/ViewUserOne';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={[<Userreg />, <Footer />]} />
          <Route path="/login" element={[<Userlogin />, <Footer />]} />
          <Route path="/adminlogin" element={[<Admin />, <Footer />]} />
          <Route path="/Dashboard" element={[<NavBar />, <Dashboard />, <Footer />]} />
          <Route path='/Mngr/Login' element={[<LoginPage />]} />
          <Route path='/Mngr/ForgotPass' element={<ForgotPasswordPage />} />
          <Route path='/Mngr/Registration' element={[<RegistrationPage />]} />
          <Route path='/Mngr/Profile' element={[<ProfilePage />]} />
          <Route path='/Mngr/Dashboard' element={[<NavBar />, <ManagerDashboard />]} />
          <Route path='/AddProducts' element={[<AddProducts/>]}/>
          <Route path='/Home' element={[<NavBar />, <HomePage />]} />
          <Route path='/UserProfile' element={[<Profileview/>]}/>
          <Route path='/UserInfo/:id' element={[<ViewUserOne/>]}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
