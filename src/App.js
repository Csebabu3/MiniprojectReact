import React from 'react'
import './App.css';
import Layout from './Components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Formvalid from './Components/Formvalid';
import Faculty from './Components/Faculty';
import Contact from './Components/Contact';
import StuData from './Components/StuData';
import Home from './Components/Home';

function App() {
  return (
    <div>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/home' element={<Formvalid />} />
            <Route path='/faculty' element={<Faculty />} />
            <Route path='contact' element={<Contact/>} />
            <Route path='student' element={<StuData />} />
            <Route path='' element={<Home />} />
            
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
