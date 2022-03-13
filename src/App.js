import About from './About';
import './App.css';
import Contact from './Contact';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';


function App() {

  return (
  <Router>
    <nav>
      <Link to='/' className = 'main'>Shop</Link>
      <Link to='/about' className = 'main'>About</Link>
      <Link to = '/contact' className = 'main'>Contact</Link>
    </nav>

    <Routes>
    <Route path = '/' element = {<Home/>} />
      <Route path = '/about' element = {<About/>} />
      <Route path = '/contact' element = {<Contact/>} />
    </Routes>
    </Router>

)
}



export default App;
