import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './sharedcomponents/Nav bar/Nav';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';




function App() {

  return (
    <div className="App">

      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
      </Routes>
      {/* <Footer></Footer> */}
      
    </div>
  );
}

export default App;
