import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

import Appoinmentpage from './pages/Appoinment/Appoinmentpage';





function App() {

  return (
    <div className="App max-w-7xl mx-auto ">
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/appoinment' element={<Appoinmentpage></Appoinmentpage>} ></Route>

      </Routes>
      
    </div>
  );
}

export default App;
