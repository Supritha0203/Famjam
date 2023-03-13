import "./App.css";
import React from 'react'
import Home from './screens/Home.js'
import {Routes,Route} from 'react-router-dom';
import About from "./screens/About";
import CreateAlbum from "./screens/CreateAlbum";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
              <Navbar/>

    <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/createalbum' element={<CreateAlbum/>}></Route>

    </Routes>
    </>
  )
}

export default App
