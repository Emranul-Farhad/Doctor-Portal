import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Appoinmentpage from './pages/Appoinment/Appoinmentpage';
import LOgin from './pages/Login/LOgin';
import Signin from './pages/Sign in/Signin';
import Require from './components/RequireAuth/Require';
import NotFound from './components/Not Found/NotFound';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Firebasekey/Firebasekey';
import Loader from './components/Loading/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Myappoinments from './components/Myappoinments/Myappoinments';
import Myhistory from './components/Myhistory/Myhistory';
import Alluser from './components/All User/Alluser';
import Requireadmin from './components/All User/AdminHook/Require admin/Requireadmin';
import Adddoctor from './components/Dashboard doctor components/Adddoctor';
import Doctormanage from './components/Doctor manage/Doctormanage';
import Payment from './components/Payment/Payment';
// import Doctormanage from './components/Doctor manage/Doctormanage';



function App() {
  const [ user ,loading] = useAuthState(auth)

  return (
    
      <div className="App max-w-7xl mx-auto ">
    { loading ? <Loader></Loader> :
     <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/appoinment' element={ <Require><Appoinmentpage></Appoinmentpage></Require> } ></Route>
        <Route path='/login' element={<LOgin></LOgin>} ></Route>
        <Route path='/signin' element={<Signin></Signin>} ></Route>
        <Route path='/dashboard' element={<Require><Dashboard></Dashboard></Require> } >
          <Route index element={<Myappoinments></Myappoinments>} ></Route>
          <Route path='Payment/:id'   element={<Payment></Payment>} ></Route>
          <Route path='myhistory' element={<Myhistory></Myhistory>} ></Route>
          <Route path='Users' element={<Requireadmin><Alluser></Alluser></Requireadmin>}></Route>
          <Route path='doctorsadd' element={<Requireadmin><Adddoctor></Adddoctor></Requireadmin>}></Route>
          <Route path='doctorsmanage' element={<Requireadmin><Doctormanage></Doctormanage></Requireadmin>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes> 
      } 
       <ToastContainer />
    </div>
  
  );
}

export default App;
