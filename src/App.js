import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './sharedcomponents/Nav bar/Nav';
import Home from './pages/Home/Home';




function App() {

  return (

    <div  className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
