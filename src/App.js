import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

import Appoinmentpage from './pages/Appoinment/Appoinmentpage';
import LOgin from './pages/Login/LOgin';
import Signin from './pages/Sign in/Signin';
import Require from './components/RequireAuth/Require';





function App() {

  return (
    <div className="App max-w-7xl mx-auto ">
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/appoinment' element={ <Require><Appoinmentpage></Appoinmentpage></Require> } ></Route>
        <Route path='/login' element={<LOgin></LOgin>} ></Route>
        <Route path='/signin' element={<Signin></Signin>} ></Route>
      </Routes>
      
    </div>
  );
}

export default App;
