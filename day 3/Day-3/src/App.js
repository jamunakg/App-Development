
import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 import Login from './Login';
 import Sign from './Sign';
import Home from './Home'
import Contact from './Contact';
function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Login/>}></Route>
 <Route path="/sign" element={<Sign/>}></Route>
 <Route path="/login" element={<Login/>}></Route>
 <Route path="/home" element={<Home/>}></Route>
 <Route path="/contact" element={<Contact/>}></Route>

 </Routes>
</BrowserRouter>
//<div><Home/></div>
  );
}

export default App;
