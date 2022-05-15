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
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<Myappoinments></Myappoinments>} ></Route>
          <Route path='myhistory' element={<Myhistory></Myhistory>} ></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes> 
      } 
       <ToastContainer />
    </div>
  
  );
}

export default App;
