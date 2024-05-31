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
import Profileview from './user/Profileview';
import Editprofile from './user/Editprofile';
import Forgotpassword from './user/forgotpassword';
import Dashboard from './user/dashboard';
import Managerdashboard from './LibraryManger/Managerdashboard';
import Addproducts from './Products/addproducts';
import ViewAllUsers from './LibraryManger/ViewAllUsers';
import Viewone from './user/Viewone';


function App() {
  return (
    <BrowserRouter>
    <div>
      
     

      
      <Routes>
        {/* //hai  change made:all route path has navbar and footer now*/}
      <Route path="/registration" element={[<NavBar/>,<Userreg/>,<Footer/>]}/>
      <Route path="/login" element={[<Userlogin/>,<Footer/>]}/>
      <Route path="/adminlogin" element={[<NavBar/>,<Admin/>,<Footer/>]}/>
      <Route path='/Mngr/Login' element={[<NavBar/>,<LoginPage/>]}/>
      <Route path='/Mngr/Registration' element={[<NavBar/>,<RegistrationPage/>,<Footer/>]}/>
      <Route path='/home' element={[<NavBar/>,<HomePage/>]}/>
      <Route path='forgotpassword' element={[<NavBar/>,<Forgotpassword/>,<Footer/>]}/>
      

      {/* newchange profile view for user*/}
      <Route path="/userprofile" element={[<NavBar/>,<Profileview/>,<Footer/>]}/>
      <Route path="/editprofile" element={[<NavBar/>,<Editprofile/>,<Footer/>]}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/managerdashboard" element={<Managerdashboard/>}/>
      <Route path="/addproducts" element={<Addproducts/>}/>
      <Route path="/viewallusers" element={<ViewAllUsers/>}/>
      <Route path="/viewoneuser/:id" element={<Viewone/>}/>
      

      
      </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
